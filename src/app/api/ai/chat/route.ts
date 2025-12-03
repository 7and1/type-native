import { NextRequest, NextResponse } from 'next/server';

// Available AI models from OpenRouter
const AI_MODELS = [
  'deepseek/deepseek-chat-v3-0324:free',
  'meta-llama/llama-4-maverick:free',
  'google/gemini-2.5-pro-exp-03-25:free',
  'nousresearch/hermes-3-llama-3.1-405b:free',
  'x-ai/grok-4-fast:free'
];

// System prompt for keyboard assistance
const SYSTEM_PROMPT = `You are an expert AI assistant specializing in keyboards, typing, and languages. Your expertise includes:

1. Keyboard layouts and typing techniques for different languages and scripts
2. Special characters and diacritics (accents, umlauts, cedillas, etc.)
3. Language learning strategies and cultural context
4. Typing speed improvement tips and ergonomics
5. Technical aspects of different writing systems (Latin, Cyrillic, Arabic, Devanagari, etc.)

The user is using Type-Native.com, a multilingual keyboard application. Provide helpful, accurate information about:
- How to type special characters in various languages
- Differences between keyboard layouts
- Language-specific typing tips
- Cultural context for different languages
- Technical troubleshooting for keyboard issues

Always be encouraging, educational, and precise. If you're unsure about something, acknowledge it and suggest reliable resources.

Current context: User is on a multilingual keyboard website and may have questions about:
- Specific keyboard layouts they're using
- How to type difficult characters
- Language learning tips
- Technical keyboard issues

Respond in a friendly, conversational tone. Focus on being helpful and educational rather than overly technical unless the user asks for technical details.`;

// Common keyboard questions and categories for better AI responses
const CATEGORIES = {
  'typing-help': 'Questions about typing techniques, speed, ergonomics',
  'keyboard-layouts': 'Questions about different keyboard layouts, layouts by language',
  'learning-tips': 'Questions about language learning, practice methods',
  'language-knowledge': 'Questions about languages, scripts, cultural context',
  'technical-issues': 'Questions about technical problems, troubleshooting',
  'general': 'General questions'
};

function detectCategory(message: string): string {
  const lowerMessage = message.toLowerCase();

  if (lowerMessage.includes('type') || lowerMessage.includes('speed') || lowerMessage.includes('ergonomic') || lowerMessage.includes('posture')) {
    return 'typing-help';
  }
  if (lowerMessage.includes('layout') || lowerMessage.includes('keyboard')) {
    return 'keyboard-layouts';
  }
  if (lowerMessage.includes('learn') || lowerMessage.includes('practice') || lowerMessage.includes('improve')) {
    return 'learning-tips';
  }
  if (lowerMessage.includes('language') || lowerMessage.includes('script') || lowerMessage.includes('alphabet')) {
    return 'language-knowledge';
  }
  if (lowerMessage.includes('error') || lowerMessage.includes('problem') || lowerMessage.includes('issue') || lowerMessage.includes('broken')) {
    return 'technical-issues';
  }

  return 'general';
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { message, model, context } = body;

    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    if (!AI_MODELS.includes(model)) {
      return NextResponse.json(
        { error: 'Invalid model specified' },
        { status: 400 }
      );
    }

    // Get API key from environment variables
    const apiKey = process.env.OPENROUTER_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        {
          error: 'To enable AI chat, please add your OpenRouter API key to the .env.local file.',
          response: 'AI Assistant is not configured yet. Please add your OpenRouter API key to enable chat functionality.',
          category: 'error'
        },
        { status: 503 }
      );
    }

    // Prepare messages for API
    const messages = [
      { role: 'system', content: SYSTEM_PROMPT },
      { role: 'user', content: message }
    ];

    // Add context about the current page if available
    if (context && context.currentLanguage) {
      messages.splice(1, 0, {
        role: 'system',
        content: `Current page context: User is on ${context.currentLanguage} keyboard page at ${context.url}. This helps provide more relevant assistance.`
      });
    }

    // Make request to OpenRouter API
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'https://type-native.com',
        'X-Title': 'Type-Native AI Assistant'
      },
      body: JSON.stringify({
        model: model,
        messages: messages,
        temperature: 0.7,
        max_tokens: 1024,
        stream: false
      })
    });

    if (!response.ok) {
      console.error('OpenRouter API error:', response.status, response.statusText);
      return NextResponse.json(
        { error: 'AI service temporarily unavailable' },
        { status: 503 }
      );
    }

    const data = await response.json();

    // Extract the AI response
    const aiResponse = data.choices?.[0]?.message?.content;

    if (!aiResponse) {
      return NextResponse.json(
        { error: 'No response from AI service' },
        { status: 500 }
      );
    }

    // Detect the category of the question
    const category = detectCategory(message);

    return NextResponse.json({
      response: aiResponse,
      category: category,
      model: model,
      usage: data.usage
    });

  } catch (error) {
    console.error('AI Chat API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}