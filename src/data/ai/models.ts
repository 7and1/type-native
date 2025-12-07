export type AIModelInfo = {
  id: string;
  label: string;
  description: string;
  bestFor: string;
};

export const FREE_AI_MODELS: AIModelInfo[] = [
  {
    id: 'meta-llama/llama-3.3-70b-instruct:free',
    label: 'Llama 3.3 70B (Free)',
    description: '70B parameter, 131k context, fastest (3.2s)',
    bestFor: 'General assistance, deep analysis',
  },
  {
    id: 'amazon/nova-2-lite-v1:free',
    label: 'Amazon Nova 2 Lite (Free)',
    description: '1M token context, fast (3.5s)',
    bestFor: 'Long-form help, large context tasks',
  },
  {
    id: 'openai/gpt-oss-120b:free',
    label: 'GPT-OSS 120B (Free)',
    description: 'OpenAI open-weight MoE model, 131k context',
    bestFor: 'Reasoning, tool use, structured output',
  },
  {
    id: 'z-ai/glm-4.5-air:free',
    label: 'GLM 4.5 Air (Free)',
    description: 'MoE model with thinking mode, 131k context',
    bestFor: 'Agent tasks, advanced reasoning',
  },
  {
    id: 'moonshotai/kimi-k2:free',
    label: 'Kimi K2 (Free)',
    description: 'Fast multilingual assistant, 32k context',
    bestFor: 'Quick answers, translation, short tips',
  },
  {
    id: 'nousresearch/hermes-3-llama-3.1-405b:free',
    label: 'Hermes 3 Llama 405B (Free)',
    description: 'Largest free model, 131k context',
    bestFor: 'Hard problems, nuanced responses',
  },
];

export const DEFAULT_AI_MODEL = FREE_AI_MODELS[0].id;

export function isSupportedAIModel(model: string): boolean {
  return FREE_AI_MODELS.some(({ id }) => id === model);
}
