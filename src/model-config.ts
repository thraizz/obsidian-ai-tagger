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
        modelName: "GPT-4.1",
        modelId: "gpt-4.1",
        tokenLimit: 1_000_000,
        type: "CLOSED_SOURCE",
        toolUse: true
    },
    {
        company: "OPENAI",
        provider: "openai",
        modelName: "GPT-4.1 mini",
        modelId: "gpt-4.1-mini",
        tokenLimit: 1_000_000,
        type: "CLOSED_SOURCE",
        toolUse: true
    },
    {
        company: "OPENAI",
        provider: "openai",
        modelName: "GPT-4.1 nano",
        modelId: "gpt-4.1-nano",
        tokenLimit: 1_000_000,
        type: "CLOSED_SOURCE",
        toolUse: true
    },
    {
        company: "MISTRAL_AI",
        provider: "mistralai",
        modelName: "Mistral Small 4",
        modelId: "mistral-small-latest",
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
        company: "MISTRAL_AI",
        provider: "mistralai",
        modelName: "Magistral Medium",
        modelId: "magistral-medium-2506",
        tokenLimit: 128000,
        type: "CLOSED_SOURCE",
        toolUse: true
    },
    {
        company: "ANTHROPIC",
        provider: "anthropic",
        modelName: "Claude Haiku 4.5",
        modelId: "claude-haiku-4-5-20251001",
        tokenLimit: 200000,
        type: "CLOSED_SOURCE",
        toolUse: true
    },
    {
        company: "ANTHROPIC",
        provider: "anthropic",
        modelName: "Claude Sonnet 4.6",
        modelId: "claude-sonnet-4-6",
        tokenLimit: 200000,
        type: "CLOSED_SOURCE",
        toolUse: true
    },
    {
        company: "ANTHROPIC",
        provider: "anthropic",
        modelName: "Claude Opus 4.7",
        modelId: "claude-opus-4-7",
        tokenLimit: 1_000_000,
        type: "CLOSED_SOURCE",
        toolUse: true
    },
    {
        company: "GROQ",
        provider: "groq",
        modelName: "Llama 4 Scout",
        modelId: "llama-4-scout-17b-16e-instruct",
        tokenLimit: 128000,
        type: "OPEN_SOURCE",
        toolUse: true
    },
    {
        company: "GROQ",
        provider: "groq",
        modelName: "Llama 3.3 70B",
        modelId: "llama-3.3-70b-versatile",
        tokenLimit: 128000,
        type: "OPEN_SOURCE",
        toolUse: true
    },
    {
        company: "GROQ",
        provider: "groq",
        modelName: "Llama 3.1 8B",
        modelId: "llama-3.1-8b-instant",
        tokenLimit: 128000,
        type: "OPEN_SOURCE",
        toolUse: true
    },
    {
        company: "GOOGLE_GEN_AI",
        provider: "google-genai",
        modelName: "Gemini 2.5 Pro",
        modelId: "gemini-2.5-pro",
        tokenLimit: 2_097_152,
        type: "CLOSED_SOURCE",
        toolUse: true
    },
    {
        company: "GOOGLE_GEN_AI",
        provider: "google-genai",
        modelName: "Gemini 2.5 Flash",
        modelId: "gemini-2.5-flash",
        tokenLimit: 1_048_576,
        type: "CLOSED_SOURCE",
        toolUse: true
    },
    {
        company: "GOOGLE_GEN_AI",
        provider: "google-genai",
        modelName: "Gemini 2.0 Flash",
        modelId: "gemini-2.0-flash",
        tokenLimit: 1_048_576,
        type: "CLOSED_SOURCE",
        toolUse: true
    },
    {
        company: "GOOGLE_GEN_AI",
        provider: "google-genai",
        modelName: "Gemini 2.0 Flash-Lite",
        modelId: "gemini-2.0-flash-lite",
        tokenLimit: 1_048_576,
        type: "CLOSED_SOURCE",
        toolUse: true
    },
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
