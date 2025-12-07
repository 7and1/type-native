'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { DEFAULT_AI_MODEL, FREE_AI_MODELS } from '@/data/ai/models';
import {
  User,
  Bot,
  Copy,
  Check,
  Sparkles,
  Loader2,
  RefreshCw,
  ThumbsUp,
  Bookmark
}
from 'lucide-react';
import { cn } from '@/lib/utils';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  category?: string;
}

interface AIChatWindowProps {
  className?: string;
}

export function AIChatWindow({ className }: AIChatWindowProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [copiedMessageId, setCopiedMessageId] = useState<string | null>(null);
  const [selectedModel, setSelectedModel] = useState(DEFAULT_AI_MODEL);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when new messages are added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = useCallback(async (question: string) => {
    if (!question.trim() || isTyping) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: question.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    try {
      const response = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: question,
          model: selectedModel,
          context: {
            currentLanguage: window.location.pathname,
            url: window.location.href,
            userAgent: navigator.userAgent
          }
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get AI response');
      }

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }

      // Add AI response
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.response,
        timestamp: new Date(),
        category: data.category
      };

      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('AI Chat Error:', error);

      // Add error message
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: "Sorry, I encountered an error. Please try again or contact support if the issue persists.",
        timestamp: new Date(),
        category: 'error'
      };

      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  }, [isTyping, selectedModel]);

  // Listen for AI question events
  useEffect(() => {
    const handleQuestion = (event: CustomEvent) => {
      const { question } = event.detail;
      handleSendMessage(question);
    };

    window.addEventListener('ai-question', handleQuestion as EventListener);
    return () => window.removeEventListener('ai-question', handleQuestion as EventListener);
  }, [handleSendMessage]);

  const handleCopyMessage = async (content: string, messageId: string) => {
    try {
      await navigator.clipboard.writeText(content);
      setCopiedMessageId(messageId);
      setTimeout(() => setCopiedMessageId(null), 2000);
    } catch (error) {
      console.error('Failed to copy message:', error);
    }
  };

  const handleRegenerateResponse = async (userMessage: string) => {
    if (!userMessage || isTyping) return;

    // Remove the last assistant message if exists
    setMessages(prev => {
      const filtered = prev.filter(msg => msg.role !== 'assistant' || msg.id === prev[prev.length - 1]?.id);
      return filtered;
    });

    await handleSendMessage(userMessage);
  };

  const clearChat = () => {
    setMessages([]);
  };

  const formatTimestamp = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    }).format(date);
  };

  const getCategoryColor = (category?: string) => {
    const colors: Record<string, string> = {
      'typing-help': 'bg-blue-100 text-blue-800',
      'keyboard-layouts': 'bg-purple-100 text-purple-800',
      'learning-tips': 'bg-green-100 text-green-800',
      'language-knowledge': 'bg-orange-100 text-orange-800',
      'error': 'bg-red-100 text-red-800',
      'general': 'bg-gray-100 text-gray-800'
    };
    return colors[category || 'general'];
  };

  const getCategoryLabel = (category?: string) => {
    const labels: Record<string, string> = {
      'typing-help': 'Typing Help',
      'keyboard-layouts': 'Keyboard Layouts',
      'learning-tips': 'Learning Tips',
      'language-knowledge': 'Language Knowledge',
      'error': 'Error',
      'general': 'General'
    };
    return labels[category || 'General'];
  };

  return (
    <div className={cn("h-full flex flex-col", className)}>
      {/* Messages Area */}
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {messages.length === 0 && (
            <div className="text-center py-8">
              <Bot className="w-12 h-12 mx-auto text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
                AI Assistant
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xs mx-auto">
                Ask me anything about keyboards, typing, or languages!
              </p>
            </div>
          )}

          {messages.map((message) => (
            <div
              key={message.id}
              className={cn(
                "flex gap-3 animate-in",
                message.role === 'user' ? 'justify-end' : 'justify-start'
              )}
            >
              {message.role === 'user' ? (
                <>
                  <div className="flex-1 max-w-[80%]" />
                  <Card className="max-w-[80%] p-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0">
                    <div className="flex items-start gap-2">
                      <User className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <div className="flex-1">
                        <p className="text-sm whitespace-pre-wrap">
                          {message.content}
                        </p>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-xs opacity-75">
                            {formatTimestamp(message.timestamp)}
                          </span>
                          <div className="flex items-center gap-1">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleRegenerateResponse(message.content)}
                              className="text-white hover:bg-white/20 p-1"
                            >
                              <RefreshCw className="w-3 h-3" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </>
              ) : (
                <>
                  <div className="flex items-start gap-2">
                    <Bot className="w-8 h-8 p-2 bg-gradient-to-br from-purple-600 to-blue-600 text-white rounded-full flex-shrink-0" />
                    <div className="flex-1">
                      <Card className="p-3 border-0 bg-gray-50 dark:bg-gray-800">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <Sparkles className="w-4 h-4 text-purple-600" />
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                                AI Assistant
                              </span>
                              {message.category && (
                                <Badge
                                  variant="secondary"
                                  className={getCategoryColor(message.category)}
                                >
                                  {getCategoryLabel(message.category)}
                                </Badge>
                              )}
                            </div>
                          </div>
                          <div className="flex items-center gap-1">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleCopyMessage(message.content, message.id)}
                              className="text-gray-500 hover:text-gray-700 p-1"
                            >
                              {copiedMessageId === message.id ? (
                                <Check className="w-4 h-4" />
                              ) : (
                                <Copy className="w-4 h-4" />
                              )}
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-gray-500 hover:text-gray-700 p-1"
                            >
                              <ThumbsUp className="w-4 h-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-gray-500 hover:text-gray-700 p-1"
                            >
                              <Bookmark className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                        <p className="text-sm text-gray-800 dark:text-gray-200 whitespace-pre-wrap leading-relaxed">
                          {message.content}
                        </p>
                      </Card>
                    </div>
                  </div>
                  <div className="flex-1" />
                </>
              )}
            </div>
          ))}

          {isTyping && (
            <div className="flex gap-3 justify-start">
              <Bot className="w-8 h-8 p-2 bg-gradient-to-br from-purple-600 to-blue-600 text-white rounded-full flex-shrink-0" />
              <Card className="p-3 border-0 bg-gray-50 dark:bg-gray-800">
                <div className="flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin text-purple-600" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    AI is thinking...
                  </span>
                </div>
              </Card>
            </div>
          )}
        </div>
        <div ref={messagesEndRef} />
      </ScrollArea>

      {/* Chat Controls */}
      <div className="border-t border-gray-200 dark:border-gray-700 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-500 dark:text-gray-400">
              Model:
            </span>
            <select
              value={selectedModel}
              onChange={(e) => setSelectedModel(e.target.value)}
              className="text-xs bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {FREE_AI_MODELS.map((model) => (
                <option key={model.id} value={model.id}>
                  {model.label}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {messages.length} messages
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={clearChat}
              className="text-xs"
            >
              Clear
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
