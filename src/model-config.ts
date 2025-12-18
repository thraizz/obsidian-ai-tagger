export const COMPANIES = {
    OPENAI: "OpenAI",
    ANTHROPIC: "Anthropic",
    FIREWORKS: "Fireworks",
    DEEPINFRA: "Deepinfra",
    GOOGLE: "Google",
    MISTRAL: "Mistral",
    COHERE: "Cohere",
    PERPLEXITY: "Perplexity",
    OPENCHAT: "OpenChat",
    DEEPSEEK: "DeepSeek",
    GROQ: "Groq",
    CLOUDFLARE: "Cloudflare",
    LYNN: "Lynn",
    REPLICATE: "Replicate",
    AWS: "AWS",
    OLLAMA: "Ollama",
} as const;

export const MODEL_TYPES = {
    OPEN_SOURCE: "open-source",
    CLOSED_SOURCE: "closed-source"
} as const;

export interface ModelConfig {
    company: keyof typeof COMPANIES;
    provider: string;
    modelName: string;
    modelId: string;
    tokenLimit: number;
    type: keyof typeof MODEL_TYPES;
    toolUse: boolean;
}

export const MODEL_CONFIGS: ModelConfig[] = [
    // OpenAI Models
    {
        company: "OPENAI",
        provider: "openai",
        modelName: "GPT-4o",
        modelId: "gpt-4o",
        tokenLimit: 128000,
        type: "CLOSED_SOURCE",
        toolUse: true
    },
    {
        company: "OPENAI",
        provider: "openai",
        modelName: "GPT-4o (2024-08-06)",
        modelId: "gpt-4o-2024-08-06",
        tokenLimit: 128000,
        type: "CLOSED_SOURCE",
        toolUse: true
    },
    {
        company: "OPENAI",
        provider: "openai",
        modelName: "GPT-4o mini",
        modelId: "gpt-4o-mini",
        tokenLimit: 128000,
        type: "CLOSED_SOURCE",
        toolUse: true
    },
    {
        company: "OPENAI",
        provider: "openai",
        modelName: "GPT-4o (2024-05-13)",
        modelId: "gpt-4o-2024-05-13",
        tokenLimit: 128000,
        type: "CLOSED_SOURCE",
        toolUse: true
    },
    {
        company: "OPENAI",
        provider: "openai",
        modelName: "GPT-4 Turbo (2024-04-09)",
        modelId: "gpt-4-turbo-2024-04-09",
        tokenLimit: 128000,
        type: "CLOSED_SOURCE",
        toolUse: true
    },
    {
        company: "OPENAI",
        provider: "openai",
        modelName: "GPT-4",
        modelId: "gpt-4",
        tokenLimit: 8192,
        type: "CLOSED_SOURCE",
        toolUse: true
    },
    {
        company: "OPENAI",
        provider: "openai",
        modelName: "GPT-4 32K",
        modelId: "gpt-4-32k",
        tokenLimit: 32768,
        type: "CLOSED_SOURCE",
        toolUse: true
    },
    {
        company: "OPENAI",
        provider: "openai",
        modelName: "GPT-3.5 Turbo (0125)",
        modelId: "gpt-3.5-turbo-0125",
        tokenLimit: 16384,
        type: "CLOSED_SOURCE",
        toolUse: true
    },
    {
        company: "OPENAI",
        provider: "openai",
        modelName: "GPT-3.5 Turbo Instruct",
        modelId: "gpt-3.5-turbo-instruct",
        tokenLimit: 4096,
        type: "CLOSED_SOURCE",
        toolUse: false
    },
    {
        company: "OPENAI",
        provider: "openai",
        modelName: "GPT-4 (0125-preview)",
        modelId: "gpt-4-0125-preview",
        tokenLimit: 128000,
        type: "CLOSED_SOURCE",
        toolUse: true
    },
    {
        company: "OPENAI",
        provider: "openai",
        modelName: "GPT-4 (1106-preview)",
        modelId: "gpt-4-1106-preview",
        tokenLimit: 128000,
        type: "CLOSED_SOURCE",
        toolUse: true
    },
    {
        company: "OPENAI",
        provider: "openai",
        modelName: "GPT-4 Vision Preview",
        modelId: "gpt-4-vision-preview",
        tokenLimit: 128000,
        type: "CLOSED_SOURCE",
        toolUse: true
    },
    {
        company: "OPENAI",
        provider: "openai",
        modelName: "GPT-3.5 Turbo (1106)",
        modelId: "gpt-3.5-turbo-1106",
        tokenLimit: 4096,
        type: "CLOSED_SOURCE",
        toolUse: true
    },
    {
        company: "OPENAI",
        provider: "openai",
        modelName: "GPT-3.5 Turbo (0613)",
        modelId: "gpt-3.5-turbo-0613",
        tokenLimit: 4096,
        type: "CLOSED_SOURCE",
        toolUse: true
    },
    {
        company: "OPENAI",
        provider: "openai",
        modelName: "GPT-3.5 Turbo 16K (0613)",
        modelId: "gpt-3.5-turbo-16k-0613",
        tokenLimit: 4096,
        type: "CLOSED_SOURCE",
        toolUse: true
    },
    {
        company: "OPENAI",
        provider: "openai",
        modelName: "GPT-3.5 Turbo (0301)",
        modelId: "gpt-3.5-turbo-0301",
        tokenLimit: 4096,
        type: "CLOSED_SOURCE",
        toolUse: true
    },
    // Anthropic Models
    {
        company: "ANTHROPIC",
        provider: "anthropic",
        modelName: "Claude 3 Opus",
        modelId: "claude-3-opus",
        tokenLimit: 200000,
        type: "CLOSED_SOURCE",
        toolUse: true
    },
    {
        company: "ANTHROPIC",
        provider: "anthropic",
        modelName: "Claude 3 Sonnet",
        modelId: "claude-3-sonnet",
        tokenLimit: 200000,
        type: "CLOSED_SOURCE",
        toolUse: true
    },
    {
        company: "ANTHROPIC",
        provider: "anthropic",
        modelName: "Claude 3 Haiku",
        modelId: "claude-3-haiku",
        tokenLimit: 200000,
        type: "CLOSED_SOURCE",
        toolUse: true
    },
    {
        company: "ANTHROPIC",
        provider: "anthropic",
        modelName: "Claude 2.1",
        modelId: "claude-2.1",
        tokenLimit: 200000,
        type: "CLOSED_SOURCE",
        toolUse: false
    },
    {
        company: "ANTHROPIC",
        provider: "anthropic",
        modelName: "Claude 2.0",
        modelId: "claude-2.0",
        tokenLimit: 100000,
        type: "CLOSED_SOURCE",
        toolUse: false
    },
    {
        company: "ANTHROPIC",
        provider: "anthropic",
        modelName: "Claude Instant 1.2",
        modelId: "claude-instant-1.2",
        tokenLimit: 100000,
        type: "CLOSED_SOURCE",
        toolUse: false
    },
    // Fireworks Models
    {
        company: "FIREWORKS",
        provider: "fireworks",
        modelName: "Llama 3.1 405B Instruct",
        modelId: "llama-3.1-405b-instruct",
        tokenLimit: 128000,
        type: "OPEN_SOURCE",
        toolUse: true
    },
    // Deepinfra Models
    {
        company: "DEEPINFRA",
        provider: "deepinfra",
        modelName: "Llama 3.1 70B Instruct",
        modelId: "llama-3.1-70b-instruct",
        tokenLimit: 128000,
        type: "OPEN_SOURCE",
        toolUse: true
    },
    {
        company: "DEEPINFRA",
        provider: "deepinfra",
        modelName: "Llama 3.1 8B Instruct",
        modelId: "llama-3.1-8b-instruct",
        tokenLimit: 128000,
        type: "OPEN_SOURCE",
        toolUse: true
    },
    {
        company: "DEEPINFRA",
        provider: "deepinfra",
        modelName: "Llama 3 70B Instruct",
        modelId: "llama-3-70b-instruct",
        tokenLimit: 8192,
        type: "OPEN_SOURCE",
        toolUse: true
    },
    {
        company: "DEEPINFRA",
        provider: "deepinfra",
        modelName: "Llama 3 8B Instruct",
        modelId: "llama-3-8b-instruct",
        tokenLimit: 8192,
        type: "OPEN_SOURCE",
        toolUse: true
    },
    {
        company: "DEEPINFRA",
        provider: "deepinfra",
        modelName: "Gemma 7B IT",
        modelId: "gemma-7b-it",
        tokenLimit: 8192,
        type: "OPEN_SOURCE",
        toolUse: false
    },
    // Google Models
    {
        company: "GOOGLE",
        provider: "google",
        modelName: "Gemini Pro",
        modelId: "gemini-pro",
        tokenLimit: 32768,
        type: "CLOSED_SOURCE",
        toolUse: true
    },
    {
        company: "GOOGLE",
        provider: "google",
        modelName: "Gemini 1.5 Pro",
        modelId: "gemini-1.5-pro",
        tokenLimit: 1000000,
        type: "CLOSED_SOURCE",
        toolUse: true
    },
    {
        company: "GOOGLE",
        provider: "google",
        modelName: "Gemini Flash 1.5",
        modelId: "gemini-flash-1.5",
        tokenLimit: 2800000,
        type: "CLOSED_SOURCE",
        toolUse: true
    },
    // Mistral Models
    {
        company: "MISTRAL",
        provider: "mistral",
        modelName: "Mistral Large",
        modelId: "mistral-large",
        tokenLimit: 32768,
        type: "CLOSED_SOURCE",
        toolUse: true
    },
    {
        company: "MISTRAL",
        provider: "mistral",
        modelName: "Mistral Medium",
        modelId: "mistral-medium",
        tokenLimit: 32768,
        type: "CLOSED_SOURCE",
        toolUse: true
    },
    {
        company: "MISTRAL",
        provider: "mistral",
        modelName: "Mistral Small",
        modelId: "mistral-small",
        tokenLimit: 32768,
        type: "CLOSED_SOURCE",
        toolUse: true
    },
    {
        company: "MISTRAL",
        provider: "mistral",
        modelName: "Mixtral 8x7B",
        modelId: "mixtral-8x7b",
        tokenLimit: 32768,
        type: "OPEN_SOURCE",
        toolUse: true
    },
    {
        company: "MISTRAL",
        provider: "mistral",
        modelName: "Mistral 7B",
        modelId: "mistral-7b",
        tokenLimit: 32768,
        type: "OPEN_SOURCE",
        toolUse: false
    },
    // Cohere Models
    {
        company: "COHERE",
        provider: "cohere",
        modelName: "Command R+",
        modelId: "command-r-plus",
        tokenLimit: 128000,
        type: "CLOSED_SOURCE",
        toolUse: true
    },
    {
        company: "COHERE",
        provider: "cohere",
        modelName: "Command R",
        modelId: "command-r",
        tokenLimit: 4096,
        type: "CLOSED_SOURCE",
        toolUse: true
    },
    {
        company: "COHERE",
        provider: "cohere",
        modelName: "Command",
        modelId: "command",
        tokenLimit: 4096,
        type: "CLOSED_SOURCE",
        toolUse: false
    },
    // Perplexity Models
    {
        company: "PERPLEXITY",
        provider: "perplexity",
        modelName: "PPLX 70B Online",
        modelId: "pplx-70b-online",
        tokenLimit: 4096,
        type: "CLOSED_SOURCE",
        toolUse: false
    },
    {
        company: "PERPLEXITY",
        provider: "perplexity",
        modelName: "PPLX 7B Online",
        modelId: "pplx-7b-online",
        tokenLimit: 4096,
        type: "CLOSED_SOURCE",
        toolUse: false
    },
    // OpenChat Models
    {
        company: "OPENCHAT",
        provider: "openchat",
        modelName: "OpenChat 7B",
        modelId: "openchat-7b",
        tokenLimit: 8192,
        type: "OPEN_SOURCE",
        toolUse: false
    },
    // DeepSeek Models
    {
        company: "DEEPSEEK",
        provider: "deepseek",
        modelName: "DeepSeek V2",
        modelId: "deepseek-v2",
        tokenLimit: 32768,
        type: "OPEN_SOURCE",
        toolUse: true
    },
    // Groq Models
    {
        company: "GROQ",
        provider: "groq",
        modelName: "Llama 3 70B",
        modelId: "llama-3-70b",
        tokenLimit: 8192,
        type: "OPEN_SOURCE",
        toolUse: true
    },
    {
        company: "GROQ",
        provider: "groq",
        modelName: "Llama 3 8B",
        modelId: "llama-3-8b",
        tokenLimit: 8192,
        type: "OPEN_SOURCE",
        toolUse: true
    },
    {
        company: "GROQ",
        provider: "groq",
        modelName: "Llama 2 70B",
        modelId: "llama-2-70b",
        tokenLimit: 4096,
        type: "OPEN_SOURCE",
        toolUse: false
    },
    {
        company: "GROQ",
        provider: "groq",
        modelName: "Llama 2 7B",
        modelId: "llama-2-7b",
        tokenLimit: 2048,
        type: "OPEN_SOURCE",
        toolUse: false
    },
    {
        company: "GROQ",
        provider: "groq",
        modelName: "Mixtral 8x7B",
        modelId: "mixtral-8x7b-groq",
        tokenLimit: 32768,
        type: "OPEN_SOURCE",
        toolUse: true
    },
    {
        company: "GROQ",
        provider: "groq",
        modelName: "Gemma 7B",
        modelId: "gemma-7b",
        tokenLimit: 8192,
        type: "OPEN_SOURCE",
        toolUse: false
    },
    // Cloudflare Models
    {
        company: "CLOUDFLARE",
        provider: "cloudflare",
        modelName: "Llama 2 7B Chat FP16",
        modelId: "llama-2-7b-chat-fp16",
        tokenLimit: 3072,
        type: "OPEN_SOURCE",
        toolUse: false
    },
    {
        company: "CLOUDFLARE",
        provider: "cloudflare",
        modelName: "Llama 2 7B Chat INT8",
        modelId: "llama-2-7b-chat-int8",
        tokenLimit: 2048,
        type: "OPEN_SOURCE",
        toolUse: false
    },
    {
        company: "CLOUDFLARE",
        provider: "cloudflare",
        modelName: "Mistral 7B Instruct",
        modelId: "mistral-7b-instruct",
        tokenLimit: 32768,
        type: "OPEN_SOURCE",
        toolUse: false
    },
    // Lynn Models
    {
        company: "LYNN",
        provider: "lynn",
        modelName: "Llama 3 Soliloquy 8B",
        modelId: "llama-3-soliloquy-8b",
        tokenLimit: 24576,
        type: "OPEN_SOURCE",
        toolUse: false
    },
    // Replicate Models
    {
        company: "REPLICATE",
        provider: "replicate",
        modelName: "Meta Llama 3 70B Instruct",
        modelId: "meta-llama-3-70b-instruct",
        tokenLimit: 8192,
        type: "OPEN_SOURCE",
        toolUse: true
    },
    {
        company: "REPLICATE",
        provider: "replicate",
        modelName: "Meta Llama 3 8B Instruct",
        modelId: "meta-llama-3-8b-instruct",
        tokenLimit: 8192,
        type: "OPEN_SOURCE",
        toolUse: true
    },
    {
        company: "REPLICATE",
        provider: "replicate",
        modelName: "Llama 2 13B",
        modelId: "llama-2-13b",
        tokenLimit: 4096,
        type: "OPEN_SOURCE",
        toolUse: false
    },
    {
        company: "REPLICATE",
        provider: "replicate",
        modelName: "Llama 2 7B",
        modelId: "llama-2-7b-replicate",
        tokenLimit: 4096,
        type: "OPEN_SOURCE",
        toolUse: false
    },
    {
        company: "REPLICATE",
        provider: "replicate",
        modelName: "Llama 2 70B",
        modelId: "llama-2-70b-replicate",
        tokenLimit: 4096,
        type: "OPEN_SOURCE",
        toolUse: false
    },
    {
        company: "REPLICATE",
        provider: "replicate",
        modelName: "Mistral 7B v0.1",
        modelId: "mistral-7b-v0.1",
        tokenLimit: 32768,
        type: "OPEN_SOURCE",
        toolUse: false
    },
    {
        company: "REPLICATE",
        provider: "replicate",
        modelName: "Mistral 7B Instruct v0.2",
        modelId: "mistral-7b-instruct-v0.2",
        tokenLimit: 32768,
        type: "OPEN_SOURCE",
        toolUse: false
    },
    {
        company: "REPLICATE",
        provider: "replicate",
        modelName: "Mixtral 8x7B Instruct v0.1",
        modelId: "mixtral-8x7b-instruct-v0.1",
        tokenLimit: 32768,
        type: "OPEN_SOURCE",
        toolUse: true
    },
    // AWS Models
    {
        company: "AWS",
        provider: "aws",
        modelName: "Jurassic-2 Ultra",
        modelId: "jurassic-2-ultra",
        tokenLimit: 32768,
        type: "CLOSED_SOURCE",
        toolUse: false
    },
    {
        company: "AWS",
        provider: "aws",
        modelName: "Jurassic-2 Mid",
        modelId: "jurassic-2-mid",
        tokenLimit: 32768,
        type: "CLOSED_SOURCE",
        toolUse: false
    },
    {
        company: "AWS",
        provider: "aws",
        modelName: "Titan Text Lite",
        modelId: "titan-text-lite",
        tokenLimit: 32768,
        type: "CLOSED_SOURCE",
        toolUse: false
    },
    {
        company: "AWS",
        provider: "aws",
        modelName: "Titan Text Express",
        modelId: "titan-text-express",
        tokenLimit: 32768,
        type: "CLOSED_SOURCE",
        toolUse: false
    },
    {
        company: "AWS",
        provider: "aws",
        modelName: "Claude Instant",
        modelId: "claude-instant",
        tokenLimit: 32768,
        type: "CLOSED_SOURCE",
        toolUse: false
    },
    {
        company: "AWS",
        provider: "aws",
        modelName: "Claude 3 Sonnet",
        modelId: "claude-3-sonnet-aws",
        tokenLimit: 32768,
        type: "CLOSED_SOURCE",
        toolUse: true
    },
    {
        company: "AWS",
        provider: "aws",
        modelName: "Claude 3 Haiku",
        modelId: "claude-3-haiku-aws",
        tokenLimit: 32768,
        type: "CLOSED_SOURCE",
        toolUse: true
    },
    {
        company: "AWS",
        provider: "aws",
        modelName: "Command",
        modelId: "command-aws",
        tokenLimit: 32768,
        type: "CLOSED_SOURCE",
        toolUse: false
    },
    {
        company: "AWS",
        provider: "aws",
        modelName: "Command Light",
        modelId: "command-light",
        tokenLimit: 32768,
        type: "CLOSED_SOURCE",
        toolUse: false
    },
    {
        company: "AWS",
        provider: "aws",
        modelName: "Llama 2 Chat 13B",
        modelId: "llama-2-chat-13b",
        tokenLimit: 32768,
        type: "OPEN_SOURCE",
        toolUse: false
    },
    {
        company: "AWS",
        provider: "aws",
        modelName: "Llama 2 Chat 70B",
        modelId: "llama-2-chat-70b",
        tokenLimit: 32768,
        type: "OPEN_SOURCE",
        toolUse: false
    },
    {
        company: "AWS",
        provider: "aws",
        modelName: "Mistral 7B",
        modelId: "mistral-7b-aws",
        tokenLimit: 32768,
        type: "OPEN_SOURCE",
        toolUse: false
    },
    {
        company: "AWS",
        provider: "aws",
        modelName: "Mistral 8x7B",
        modelId: "mistral-8x7b",
        tokenLimit: 32768,
        type: "OPEN_SOURCE",
        toolUse: true
    },
    // Ollama Models
    {
        company: "OLLAMA",
        provider: "ollama",
        modelName: "Llama 3.2",
        modelId: "llama3.2",
        tokenLimit: 128000,
        type: "OPEN_SOURCE",
        toolUse: true
    },
    {
        company: "OLLAMA",
        provider: "ollama",
        modelName: "Mistral Nemo",
        modelId: "mistral-nemo",
        tokenLimit: 128000,
        type: "OPEN_SOURCE",
        toolUse: true
    },
    {
        company: "OLLAMA",
        provider: "ollama",
        modelName: "Qwen 2.5",
        modelId: "qwen2.5",
        tokenLimit: 128000,
        type: "OPEN_SOURCE",
        toolUse: true
    }
];
