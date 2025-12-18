// my settings definition
// this tells me what settings I want the user to be able to configure
// while the plugin is enabled you can access these settings from the settings member variable
export interface AiTaggerSettings {
	openaiApiKey: string;
	anthropicApiKey: string;
	fireworksApiKey: string;
	deepinfraApiKey: string;
	googleApiKey: string;
	mistralApiKey: string;
	cohereApiKey: string;
	perplexityApiKey: string;
	openchatApiKey: string;
	deepseekApiKey: string;
	groqApiKey: string;
	cloudflareApiKey: string;
	lynnApiKey: string;
	replicateApiKey: string;
	awsApiKey: string;
	ollamaApiKey: string;
	model: string;
	useCustomBaseUrl: boolean;
	customBaseUrl: string;
	lowerCaseMode: boolean;
	[key: `${string}ApiKey`]: string;
}
