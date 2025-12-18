# 🪄 AI Tagger
AI Tagger is an Obsidian (https://obsidian.md) plugin that simplifies tagging by using various Large Language Models (LLMs) to analyze and tag your document with one click! 

The plugin analyzes the current document that you have open in the editor and all of the previous tags that you have used. AI tagger will return up to 5 relevant tags that you have previously used and will generate up to 3 completely new tags.

## 🤖 Supported AI Models

| Model | Provider | Quality | Context | Input $/1M | Output $/1M | Knowledge | Free trial |
|-------|----------|---------|---------|------------|-------------|-----------|------------|
| gpt-4o | OpenAI | 100 | 128K | $5 | $15 | 2023-10 | Chat |
| gpt-4o-2024-08-06 | OpenAI | 100 | 128K | $2.5 | $10 | 2023-10 | Chat |
| gpt-4o-mini | OpenAI | 85 | 128K | $0.15 | $0.6 | 2023-10 | Chat |
| gpt-4o-2024-05-13 | OpenAI | 100 | 128K | $5 | $15 | 2023-10 | Chat |
| gpt-4-turbo-2024-04-09 | OpenAI | 94 | 128K | $10 | $30 | 2023-12 | Chat |
| gpt-4 | OpenAI | 84 | 8K | $30 | $60 | 2021-09 | Chat |
| gpt-4-32k | OpenAI | | 32K | $60 | $120 | 2021-09 | Chat |
| gpt-3.5-turbo-0125 | OpenAI | 67 | 16K | $0.5 | $1.5 | 2021-09 | Chat |
| gpt-3.5-turbo-instruct | OpenAI | 60 | 4K | $1.5 | $2 | 2021-09 | Chat |
| claude-3-opus | Anthropic | 100 | 200K | $15 | $75 | 2023-08 | Chat |
| claude-3-sonnet | Anthropic | 85 | 200K | $3 | $15 | 2023-08 | Chat |
| claude-3-haiku | Anthropic | 78 | 200K | $0.25 | $1.25 | 2023-08 | Chat |
| claude-2.1 | Anthropic | 66 | 200K | $8 | $24 | | Chat |
| claude-2.0 | Anthropic | 72 | 100K | $8 | $24 | | Chat |
| claude-instant-1.2 | Anthropic | 65 | 100K | $0.8 | $2.4 | | Chat |
| llama-3.1-405b-instruct | Fireworks | 100 | 128K | $3 | $3 | | Chat |
| llama-3.1-70b-instruct | Deepinfra | 95 | 128K | $0.52 | $0.75 | | Chat |
| llama-3.1-8b-instruct | Deepinfra | 66 | 128K | $0.09 | $0.09 | | Chat |
| llama-3-70b-instruct | Deepinfra | 88 | 8K | $0.59 | $0.79 | 2023-12 | Chat |
| llama-3-8b-instruct | Deepinfra | 58 | 8K | $0.08 | $0.08 | 2023-12 | Chat |
| gemini-pro | Google | 66 | 32K | $0.5 | $1.5 | 2023-04 | Chat |
| gemini-1.5-pro | Google | 88 | 1M | $3.5 | $10.5 | 2023-04 | Chat |
| gemini-flash-1.5 | Google | | 2.8M | $0.075 | $0.3 | 2023-04 | Chat |
| gemma-7b-it | Deepinfra | 59 | 8K | $0.07 | $0.07 | 2024-02 | Chat |
| mistral-large | Mistral | 84 | 32K | $8 | $24 | | Chat |
| mistral-medium | Mistral | 76 | 32K | $2.7 | $8.1 | | Chat |
| mistral-small | Mistral | 73 | 32K | $2 | $6 | | Chat |
| mixtral-8x7b | Mistral | 68 | 32K | $0.7 | $0.7 | 2023-12 | Chat |
| mistral-7b | Mistral | 40 | 32K | $0.25 | $0.25 | 2023-12 | Chat |
| command-r-plus | Cohere | 80 | 128K | $3 | $15 | 2024-03 | Chat |
| command-r | Cohere | 67 | 4K | $0.5 | $1.5 | 2024-03 | Chat |
| command | Cohere | | 4K | $0.3 | $0.6 | | Chat |
| pplx-70b-online | Perplexity | 45 | 4K | $1 | $1 | | Chat |
| pplx-7b-online | Perplexity | 35 | 4K | $0.2 | $0.2 | | Chat |
| openchat-7b | OpenChat | 56 | 8K | $0.13 | $0.13 | | Chat |
| deepseek-v2 | DeepSeek | | 32K | $0.14 | $0.28 | | Chat |
| llama-3-70b | Groq | 88 | 8K | $0.59 | $0.79 | | Chat |
| llama-3-8b | Groq | 58 | 8K | $0.05 | $0.1 | | Chat |
| llama-2-70b | Groq | 52 | 4K | $0.64 | $0.8 | | Chat |
| llama-2-7b | Groq | 27 | 2K | $0.1 | $0.1 | | Chat |
| mixtral-8x7b | Groq | 68 | 32K | $0.27 | $0.27 | | Chat |
| gemma-7b | Groq | 59 | 8K | $0.1 | $0.1 | | Chat |
| llama-2-7b-chat-fp16 | Cloudflare | | 3K | $0.56 | $6.66 | | Chat |
| llama-2-7b-chat-int8 | Cloudflare | | 2K | $0.16 | $0.24 | | Chat |
| mistral-7b-instruct | Cloudflare | | 32K | $0.11 | $0.19 | | Chat |
| llama-3-soliloquy-8b | Lynn | | 24K | $0.1 | $0.1 | | Chat |
| meta-llama-3-70b-instruct | Replicate | | 8K | $0.65 | $2.75 | | Chat |
| meta-llama-3-8b-instruct | Replicate | | 8K | $0.05 | $0.25 | | Chat |
| llama-2-13b | Replicate | | 4K | $0.1 | $0.5 | | Chat |
| llama-2-13b | Replicate | | 4K | $0.1 | $0.5 | | Chat |
| llama-2-7b | Replicate | | 4K | $0.05 | $0.25 | | Chat |
| llama-2-70b | Replicate | | 4K | $0.65 | $2.75 | | Chat |
| mistral-7b-v0.1 | Replicate | | 32K | $0.05 | $0.25 | | Chat |
| mistral-7b-instruct-v0.2 | Replicate | | 32K | $0.05 | $0.25 | | Chat |
| mixtral-8x7b-instruct-v0.1 | Replicate | | 32K | $0.3 | $1 | | Chat |
| jurassic-2-ultra | AWS | | 32K | $18.8 | $18.8 | | Chat |
| jurassic-2-mid | AWS | | 32K | $12.5 | $12.5 | | Chat |
| titan-text-lite | AWS | | 32K | $0.3 | $0.4 | | Chat |
| titan-text-express | AWS | | 32K | $0.8 | $1.6 | | Chat |
| claude-instant | AWS | 65 | 32K | $0.8 | $2.4 | | Chat |
| claude-3-sonnet | AWS | 85 | 32K | $3 | $15 | | Chat |
| claude-3-haiku | AWS | 78 | 32K | $0.25 | $1.25 | | Chat |
| command | AWS | | 32K | $1.5 | $2 | | Chat |
| command-light | AWS | | 32K | $0.3 | $0.6 | | Chat |
| llama-2-chat-13b | AWS | 37 | 32K | $0.75 | $1 | | Chat |
| llama-2-chat-70b | AWS | 52 | 32K | $1.95 | $2.56 | | Chat |
| mistral-7b | AWS | 40 | 32K | $0.15 | $0.2 | | Chat |
| mistral-8x7b | AWS | | 32K | $0.45 | $0.7 | | Chat |
| gpt-4-0125-preview | OpenAI | 100 | 128K | $10 | $30 | 2023-12 | Chat |
| gpt-4-1106-preview | OpenAI | | 128K | $10 | $30 | 2023-04 | Chat |
| gpt-4-vision-preview | OpenAI | 100 | 128K | $10 | $30 | 2023-04 | Chat |
| gpt-3.5-turbo-1106 | OpenAI | | 4K | $1 | $2 | 2021-09 | Chat |
| gpt-3.5-turbo-0613 | OpenAI | | 4K | $1.5 | $2 | 2021-09 | Chat |
| gpt-3.5-turbo-16k-0613 | OpenAI | | 4K | $3 | $4 | 2021-09 | Chat |
| gpt-3.5-turbo-0301 | OpenAI | | 4K | $1.5 | $2 | 2021-09 | Chat |

## 🚀 Setup

1. Install from Obsidian Community Plugins
2. Enter your chosen provider's API key in settings
3. Select your preferred model
4. Optional: Configure custom API endpoint (useful for Ollama or proxies)

## 📝 Usage

### One click tagging

- Click the "Wand" icon in the left sidebar to tag current note

    ![One click tagging](images/one_click_tagging.gif)

### Selection-Based Tagging

- Highlight text and use Command Palette (Ctrl/Cmd + P) → "Generate tags"

    ![Precise tagging](images/precise_tagging.gif)

### Batch Tagging

- Right-click file(s) or folders to tag multiple documents

    ![Multi-file tagging](images/multi_file_tagging.gif)

## 🔧 Configuration Options

- Custom Endpoints: Set alternative API endpoints (default Ollama: http://localhost:11434)
- Lowercase Tags: Force all tags to lowercase
- Context Awareness: Plugin considers existing tags to avoid duplicates

    ![Context-aware tagging](images/context_aware_tagging.gif)

## 🤝 Contributing

Found a bug? Have an idea? We'd love to hear from you:

🐛 Report a bug
💡 Request a feature
🔧 Submit a PR

## 📜 License

[MIT License](LICENSE)
