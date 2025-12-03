'use client';

import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Brain, Sparkles, Send, Minimize2, Maximize2, ThumbsUp, ThumbsDown, Bookmark, Copy, Check, Loader2, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  category?: string;
}

export function SimpleChatButton() {
  const [showChat, setShowChat] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [inputValue, setInputValue] = useState('');

  // Show prompt after 15 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPrompt(true);
      setTimeout(() => setShowPrompt(false), 5000);
    }, 15000);

    return () => clearTimeout(timer);
  }, []);

  const quickQuestions = [
    "How do I type special characters?",
    "What keyboard layouts are available?",
    "How can I improve my typing speed?",
    "Explain different writing systems"
  ];

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isTyping) return;

    const userMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: inputValue.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    try {
      const response = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: inputValue.trim(),
          model: 'deepseek/deepseek-chat-v3-0324:free',
          context: {
            currentLanguage: window.location.pathname,
            url: window.location.href
          }
        }),
      });

      const data = await response.json();

      const aiMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.response || 'Sorry, I encountered an error.',
        timestamp: new Date(),
        category: data.category
      };

      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      const errorMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: 'Sorry, I encountered an error. Please try again.',
        timestamp: new Date(),
        category: 'error'
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  if (showChat) {
    return (
      <div className={cn(
        "fixed bottom-6 right-6 z-[99999] transition-all duration-300 shadow-2xl",
        isMinimized ? "w-80 h-16" : "w-[450px] h-[650px] max-w-[90vw] max-h-[80vh]"
      )}>
        <Card className="h-full rounded-lg border-2 border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Brain className="w-5 h-5" />
              <span className="font-semibold">AI Assistant</span>
              <Badge variant="secondary" className="bg-white/20 text-white text-xs">
                Powered by AI
              </Badge>
            </div>
            <div className="flex items-center gap-1">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMinimized(!isMinimized)}
                className="text-white hover:bg-white/20 p-1"
              >
                {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowChat(false)}
                className="text-white hover:bg-white/20 p-1"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {!isMinimized && (
            <>
              {/* Quick Start Questions */}
              {messages.length === 0 && (
                <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                  <div className="mb-3">
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles className="w-4 h-4 text-purple-600" />
                      <h3 className="font-medium text-gray-900 dark:text-gray-100">
                        Quick Start
                      </h3>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Try one of these questions:
                    </p>
                  </div>
                  <div className="space-y-2">
                    {quickQuestions.map((question, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        className="w-full text-left h-auto p-3 hover:bg-gray-50 dark:hover:bg-gray-800 justify-start"
                        onClick={() => setInputValue(question)}
                      >
                        <span className="text-sm">{question}</span>
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              {/* Messages Area */}
              <div className="flex-1 overflow-y-auto p-4 h-[350px]">
                {messages.length === 0 && !isTyping && (
                  <div className="text-center py-8">
                    <Brain className="w-12 h-12 mx-auto text-gray-400 mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
                      AI Assistant
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Ask me anything about keyboards and typing!
                    </p>
                  </div>
                )}

                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={cn(
                      "mb-4 animate-in",
                      message.role === 'user' ? 'text-right' : 'text-left'
                    )}
                  >
                    <div className={cn(
                      "inline-block max-w-[80%] p-3 rounded-lg",
                      message.role === 'user'
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100'
                    )}>
                      <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="text-left mb-4">
                    <div className="inline-block p-3 rounded-lg bg-gray-100 dark:bg-gray-800">
                      <div className="flex items-center gap-2">
                        <Loader2 className="w-4 h-4 animate-spin text-purple-600" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          AI is thinking...
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Input Area */}
              <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        handleSendMessage();
                      }
                    }}
                    placeholder="Ask me anything about keyboards..."
                    className="flex-1 p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <Button
                    size="sm"
                    className="bg-purple-600 hover:bg-purple-700 text-white px-4"
                    onClick={handleSendMessage}
                    disabled={!inputValue.trim() || isTyping}
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </>
          )}
        </Card>
      </div>
    );
  }

  return (
    <>
      <button
        onClick={() => setShowChat(true)}
        className={cn(
          "fixed bottom-8 right-8 z-[99999] bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-full p-6 shadow-2xl transition-all duration-300 hover:scale-110 border-2 border-white/20",
          showPrompt && "animate-bounce"
        )}
        type="button"
      >
        <MessageCircle className="w-12 h-12" />
        {showPrompt && (
          <div className="absolute -top-3 -right-3 bg-red-500 text-white text-sm rounded-full w-8 h-8 flex items-center justify-center animate-pulse border-2 border-white">
            !
          </div>
        )}
      </button>

      {showPrompt && (
        <div className="fixed bottom-24 right-8 bg-gray-800 text-white text-sm rounded-lg px-4 py-2 shadow-xl z-[99998] max-w-xs">
          Need help? Try our AI Assistant!
        </div>
      )}
    </>
  );
}