# AI Chat Setup Guide

## 🤖 AI Chat Feature

Your Type-Native application now includes an AI-powered chat assistant to help users with keyboard-related questions!

## ✨ Features

- **Header Button**: "AI Help" button in the navigation menu
- **Floating Button**: Appears in bottom-right corner after 15 seconds
- **Quick Start Questions**: Pre-defined questions for common help topics
- **Multiple AI Models**: Choose from 5 free OpenRouter models
- **Context-Aware**: AI knows which keyboard page you're on
- **Modern UI**: Beautiful gradient design with animations

## 🚀 Setup Instructions

### 1. Get Your OpenRouter API Key

1. Visit [OpenRouter.ai](https://openrouter.ai/)
2. Create a free account
3. Go to your API keys section
4. Copy your API key

### 2. Add API Key to Environment

Edit the `.env.local` file in your project root:

```bash
# Replace with your actual OpenRouter API key
OPENROUTER_API_KEY=sk-or-v1-your-actual-api-key-here
```

### 3. Restart Development Server

```bash
npm run dev
```

## 🎯 How to Use

### Header Access
- Click "AI Help" in the top navigation bar
- Opens chat with greeting message

### Floating Button
- Appears in bottom-right corner after 15 seconds
- Has bounce animation and notification indicator
- Opens full chat interface

### Chat Features
- **Quick Start**: Choose from categorized questions
- **Custom Questions**: Type your own keyboard questions
- **Model Selection**: Switch between AI models
- **Message Actions**: Copy, like, bookmark responses
- **Minimize/Maximize**: Adjust chat window size

## 🔧 Available AI Models

The project ships with the free models verified on 2025-12-04 (see `/Volumes/SSD/AI/OpenRouter/OPENROUTER_FREE_MODELS_API.md`). All of them can be selected inside the chat UI:

1. **Gemini 2.0 Flash (Free)** – 1M-token context, excellent all-round assistant *(default)*
2. **Llama 3.3 70B Instruct (Free)** – 70B parameter reasoning powerhouse
3. **Qwen3 Coder (Free)** – Coding-optimized, 262k token memory
4. **DeepSeek R1T Chimera (Free)** – Built-in chain-of-thought for math & logic
5. **Gemma 3 Nano E2B (Free)** – Ultra-low latency helper for quick questions
6. **Hermes 3 Llama 405B (Free)** – Giant 405B model for hard or nuanced prompts

## 📱 Sample Questions

The AI assistant can help with:
- "How do I type special characters in Arabic?"
- "What keyboard layouts are available?"
- "How can I improve my typing speed?"
- "Explain the differences between scripts"
- "Troubleshooting keyboard issues"

## 🛠️ Technical Implementation

- **Backend**: `/api/ai/chat/route.ts` - Secure API integration
- **Components**:
  - `AIChatButton.tsx` - Floating chat button
  - `AIChatWindow.tsx` - Full chat interface
- **Security**: API key stored in environment variables
- **Context**: AI knows current language page for better assistance

## 🎨 Design Features

- **Responsive**: Works on all screen sizes
- **Dark Mode**: Follows system theme
- **Animations**: Smooth transitions and effects
- **Accessibility**: Proper ARIA labels and keyboard navigation
- **Performance**: Optimized loading and rendering

## 🚨 Troubleshooting

### AI Not Responding
1. Check your OpenRouter API key is correct
2. Verify you have internet connection
3. Check browser console for errors

### Demo Mode
If no API key is configured, the chat shows a friendly message explaining how to set up the API key.

## 📞 Support

For issues with the AI chat feature:
1. Check this setup guide
2. Review browser console for errors
3. Verify API key configuration
4. Test API endpoint at `/api/ai/chat`

---

**🎉 Your multilingual keyboard app now has AI assistance!**
