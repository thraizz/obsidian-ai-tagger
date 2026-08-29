import { Editor, FrontMatterInfo, MarkdownView, Notice, Plugin, Workspace, TFile, Vault, getFrontMatterInfo, TFolder, TAbstractFile, parseFrontMatterTags } from 'obsidian';

import { LLM } from "./llm";
import { ModelService } from './model-service';
import { AiTaggerSettings } from "./settings";
import { AiTaggerSettingTab } from "./settings-tab";
import { convertTagsToLowerCase } from "./utils";
import * as dotenv from 'dotenv';

const DEFAULT_SETTINGS: Partial<AiTaggerSettings> = {
	model: 'gpt-5.6-luna',
	lowerCaseMode: false,
	autoTagOnSave: false
}

// wait this long after the last modification before auto-tagging a file
const AUTO_TAG_DEBOUNCE_MS = 30_000;
// ignore modify events on a file for this long after we tagged it,
// so the frontmatter update itself does not retrigger auto-tagging
const AUTO_TAG_COOLDOWN_MS = 2_000;

export default class AiTagger extends Plugin {
	settings: AiTaggerSettings;
	llm: LLM | null = null;
	private autoTagTimers: Map<string, number> = new Map();
	private autoTagging: Set<string> = new Set();

	async initializeLlm() {
		// Get model configuration
		const settings = this.settings;
		const modelConfig = ModelService.getModelById(settings.model);
		const apiKey = ModelService.getApiKey(settings, modelConfig.provider);

		// Validate API key existence
		if ((!apiKey || typeof apiKey !== "string") && modelConfig.provider !== "ollama") {
			new Notice(`Please set your ${modelConfig.company} API key in the plugin settings.`);
			throw new Error(`Please set your ${modelConfig.company} API key in the plugin settings.`);
		}

		try {
			this.llm = await LLM.initialize(
				settings.model,
				apiKey,
				this,
				settings.useCustomBaseUrl ? settings.customBaseUrl : null
			);
		} catch (error) {
			new Notice(`Failed to initialize ${modelConfig.company} model: ${error.message}`);
			throw new Error(`Failed to initialize ${modelConfig.company} model: ${error.message}`);
		}
	}

	// this function retrieves data from disk
	async loadSettings() {
		// Object.assign() is a JavaScript function that copies all properties from one object to another.
		// Any properties that are returned by loadData() override the properties in DEFAULT_SETTINGS.
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
		const basePath = (this.app.vault.adapter as any).basePath;
		const pluginId = 'obsidian-ai-tagger'; // replace with your actual plugin ID

		dotenv.config({
			path: `${basePath}/.obsidian/plugins/${pluginId}/.env`,
			debug: true // temporarily set to true to see debug output
		});

		// You might want to verify the path is correct
		console.log('Env file path:', `${basePath}/.obsidian/plugins/${pluginId}/.env`);
	}

	// this function retrieves store data on the disk
	async saveSettings() {
		// loadData() and saveData() provide an easy way to store and retrieve data from disk.
		await this.saveData(this.settings);
		// Reinitialize LLM when settings change
		try {
			await this.initializeLlm();
		} catch (error) {
			console.error('Error reinitializing LLM:', error);
			new Notice('Failed to reinitialize LLM. Please check your settings and API keys.');
		}
	}

	async tagText(currentFile: TFile, text: string) {
		// notify user that we are generating tags
		new Notice("Generating tags...");
		console.info("Generating tags...");

		// contentStart will return 0 if the text does not include frontmatter
		let { contentStart }: FrontMatterInfo = getFrontMatterInfo(text);

		// get contents of document excluding frontmatter
		let content: string = text.substring(contentStart);
		console.debug("Content:", content.substring(0, 30) + "...")

		try {
			if (!this.llm) {
				await this.initializeLlm();
			}

			// Get existing tags using parseFrontMatterTags
			const existingTags: string[] = parseFrontMatterTags(this.app.metadataCache.getFileCache(currentFile)?.frontmatter) || [];
			console.debug("Existing Tags:", existingTags);

			// generate tags for the document using an LLM
			let generatedTags: string[] = await this.llm!.generateTags(content, existingTags);
			// const generatedTags: string[] = ["#tag1", "#tag2"];
			console.debug("Generated Tags:", generatedTags);

			if (this.settings.lowerCaseMode === true) {
				generatedTags = convertTagsToLowerCase(generatedTags);
			}

			// update frontmatter with generated tags, merging + deduping so
			// repeated (auto-)tagging stays idempotent instead of inflating tags
			this.app.fileManager.processFrontMatter(currentFile, frontmatter => {
				const current: string[] = Array.isArray(frontmatter["tags"])
					? frontmatter["tags"]
					: (frontmatter["tags"] ? [frontmatter["tags"]] : []);

				const seen = new Set<string>();
				const merged: string[] = [];
				for (const tag of [...current, ...generatedTags]) {
					// strip leading '#' and normalize case for dedup key only
					const key = String(tag).replace(/^#/, "").toLowerCase();
					if (!key || seen.has(key)) continue;
					seen.add(key);
					merged.push(tag);
				}
				frontmatter["tags"] = merged;
			});
		} catch (error) {
			console.error('Error in tagText():', error);
			new Notice(error.message);
		}
	}

	async tagFileOrFolder(abstractFile: TAbstractFile) {
		if (abstractFile instanceof TFile) {
			const fileContents = await abstractFile.vault.read(abstractFile);
			await this.tagText(abstractFile, fileContents);
		} else if (abstractFile instanceof TFolder) {
			for (const child of abstractFile.children) {
				await this.tagFileOrFolder(child);
			}
		}
	}

	async onload() {
		// load settings on plugin load
		await this.loadSettings();

		// This adds a settings tab so the user can configure various aspects of the plugin
		this.addSettingTab(new AiTaggerSettingTab(this.app, this));

		// initialize LLM
		try {
			// To ensure the plugin remains functional even if an error occurs,
			// we use a try-catch block to handle potential errors gracefully.
			await this.initializeLlm();
		} catch (error) {
			console.error('Error initializing LLM:', error);
			new Notice('Failed to initialize LLM. Please check your settings and API keys.');
		}

		// This creates an icon in the left ribbon.
		this.addRibbonIcon('wand-2', 'Generate tags!', async () => {
			// Called when the user clicks the icon.

			try {
				const workspace: Workspace = this.app.workspace
				const markdownView: MarkdownView | null = workspace.getActiveViewOfType(MarkdownView);
				const currentFile: TFile | null = workspace.getActiveFile();
				if (markdownView !== null && currentFile !== null) {
					// get current document as a string
					let fileContents: string = markdownView.editor.getValue();
					this.tagText(currentFile, fileContents);
				} else {
					const message = "Open and select a document to use the AI Tagger"
					new Notice(message);
					console.info(message);
				}
			} catch (error) {
				new Notice(error.message);
				console.error('Error while generating tags:', error);
			}
		});


		// this adds an editor command that can generate tags for the current selection
		this.addCommand({
			id: 'generate-tags',
			name: 'Generate tags',
			editorCallback: async (editor: Editor, view: MarkdownView) => {

				try {
					// get current selection as a string
					let selection: string = editor.getSelection();
					const currentFile: TFile | null = this.app.workspace.getActiveFile();

					if (currentFile !== null) {
						if (selection === "") {
							// if selection is empty, use the entire document
							let fileContents: string = editor.getValue();
							this.tagText(currentFile, fileContents);
						} else {
							this.tagText(currentFile, selection);
						}
					}
				} catch (error) {
					new Notice(error.message);
					console.error('Error while generating tags:', error);
				}
			}
		});

		this.registerEvent(
			this.app.workspace.on('file-menu', (menu, file, source, leaf) => {
				menu.addItem((item) => {
					item
						.setTitle('Generate tags 🪄')
						.setIcon('wand-2')
						.onClick(async () => {
							await this.tagFileOrFolder(file);
						});
				});
			})
		);

		this.registerEvent(
			this.app.workspace.on('files-menu', (menu, files, source, leaf) => {
				menu.addItem((item) => {
					item
						.setTitle('Generate tags 🪄')
						.setIcon('wand-2')
						.onClick(async () => {
							for (const file of files) {
								await this.tagFileOrFolder(file);
							}
						});
				});
			})
		);

		// auto-generate tags when a file is saved (debounced, opt-in via settings)
		this.registerEvent(
			this.app.vault.on('modify', (file) => {
				if (!this.settings.autoTagOnSave) return;
				if (!(file instanceof TFile) || file.extension !== 'md') return;
				// skip modify events caused by our own frontmatter update
				if (this.autoTagging.has(file.path)) return;

				const existingTimer = this.autoTagTimers.get(file.path);
				if (existingTimer !== undefined) {
					window.clearTimeout(existingTimer);
				}

				const timer = window.setTimeout(async () => {
					this.autoTagTimers.delete(file.path);
					this.autoTagging.add(file.path);
					try {
						await this.tagFileOrFolder(file);
					} catch (error) {
						console.error('Error while auto-tagging on save:', error);
					} finally {
						// keep the guard up briefly so the frontmatter write's
						// modify event does not retrigger auto-tagging
						window.setTimeout(() => this.autoTagging.delete(file.path), AUTO_TAG_COOLDOWN_MS);
					}
				}, AUTO_TAG_DEBOUNCE_MS);
				this.autoTagTimers.set(file.path, timer);
			})
		);
	}

	onunload() {
		for (const timer of this.autoTagTimers.values()) {
			window.clearTimeout(timer);
		}
		this.autoTagTimers.clear();
	}
}
