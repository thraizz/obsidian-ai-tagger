export const COMPANIES = {
    OPENAI: "OpenAI",
    MISTRAL_AI: "Mistral AI",
    ANTHROPIC: "Anthropic",
    GROQ: "Groq",
    GOOGLE_GEN_AI: "Google Gen AI",
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
    {
        company: "OPENAI",
        provider: "openai",
        modelName: "GPT-5.6 Sol",
        modelId: "gpt-5.6-sol",
        tokenLimit: 1_050_000,
        type: "CLOSED_SOURCE",
        toolUse: true
    },
    {
        company: "OPENAI",
        provider: "openai",
        modelName: "GPT-5.6 Terra",
        modelId: "gpt-5.6-terra",
        tokenLimit: 1_050_000,
        type: "CLOSED_SOURCE",
        toolUse: true
    },
    {
        company: "OPENAI",
        provider: "openai",
        modelName: "GPT-5.6 Luna",
        modelId: "gpt-5.6-luna",
        tokenLimit: 1_050_000,
        type: "CLOSED_SOURCE",
        toolUse: true
    },
    {
        company: "MISTRAL_AI",
        provider: "mistralai",
        modelName: "Mistral Small 4",
        modelId: "mistral-small-latest",
        tokenLimit: 256000,
        type: "CLOSED_SOURCE",
        toolUse: true
    },
    {
        company: "MISTRAL_AI",
        provider: "mistralai",
        modelName: "Mistral Medium 3.5",
        modelId: "mistral-medium-latest",
        tokenLimit: 128000,
        type: "CLOSED_SOURCE",
        toolUse: true
    },
    {
        company: "MISTRAL_AI",
        provider: "mistralai",
        modelName: "Mistral Large 3",
        modelId: "mistral-large-latest",
        tokenLimit: 256000,
        type: "CLOSED_SOURCE",
        toolUse: true
    },
    {
        company: "ANTHROPIC",
        provider: "anthropic",
        modelName: "Claude Haiku 4.5",
        modelId: "claude-haiku-4-5",
        tokenLimit: 200000,
        type: "CLOSED_SOURCE",
        toolUse: true
    },
    {
        company: "ANTHROPIC",
        provider: "anthropic",
        modelName: "Claude Sonnet 5",
        modelId: "claude-sonnet-5",
        tokenLimit: 1_000_000,
        type: "CLOSED_SOURCE",
        toolUse: true
    },
    {
        company: "ANTHROPIC",
        provider: "anthropic",
        modelName: "Claude Opus 5",
        modelId: "claude-opus-5",
        tokenLimit: 1_000_000,
        type: "CLOSED_SOURCE",
        toolUse: true
    },
    {
        company: "GROQ",
        provider: "groq",
        modelName: "GPT OSS 120B",
        modelId: "openai/gpt-oss-120b",
        tokenLimit: 131072,
        type: "OPEN_SOURCE",
        toolUse: true
    },
    {
        company: "GROQ",
        provider: "groq",
        modelName: "GPT OSS 20B",
        modelId: "openai/gpt-oss-20b",
        tokenLimit: 131072,
        type: "OPEN_SOURCE",
        toolUse: true
    },
    {
        company: "GROQ",
        provider: "groq",
        modelName: "Qwen 3.6 27B",
        modelId: "qwen/qwen3.6-27b",
        tokenLimit: 262144,
        type: "OPEN_SOURCE",
        toolUse: true
    },
    {
        company: "GOOGLE_GEN_AI",
        provider: "google-genai",
        modelName: "Gemini 3.1 Pro",
        modelId: "gemini-3.1-pro-preview",
        tokenLimit: 1_048_576,
        type: "CLOSED_SOURCE",
        toolUse: true
    },
    {
        company: "GOOGLE_GEN_AI",
        provider: "google-genai",
        modelName: "Gemini 3.7 Flash",
        modelId: "gemini-3.7-flash",
        tokenLimit: 1_048_576,
        type: "CLOSED_SOURCE",
        toolUse: true
    },
    {
        company: "GOOGLE_GEN_AI",
        provider: "google-genai",
        modelName: "Gemini 3.6 Flash",
        modelId: "gemini-3.6-flash",
        tokenLimit: 1_048_576,
        type: "CLOSED_SOURCE",
        toolUse: true
    },
    {
        company: "GOOGLE_GEN_AI",
        provider: "google-genai",
        modelName: "Gemini 3.5 Flash-Lite",
        modelId: "gemini-3.5-flash-lite",
        tokenLimit: 1_048_576,
        type: "CLOSED_SOURCE",
        toolUse: true
    },
    {
        company: "GOOGLE_GEN_AI",
        provider: "google-genai",
        modelName: "Gemini 2.5 Pro",
        modelId: "gemini-2.5-pro",
        tokenLimit: 1_048_576,
        type: "CLOSED_SOURCE",
        toolUse: true
    },
    {
        company: "OLLAMA",
        provider: "ollama",
        modelName: "Llama 3.3",
        modelId: "llama3.3",
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
        modelName: "Qwen 3",
        modelId: "qwen3",
        tokenLimit: 128000,
        type: "OPEN_SOURCE",
        toolUse: true
    }
];
