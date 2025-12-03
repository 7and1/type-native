'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  MessageCircle,
  Sparkles,
  X,
  Send,
  Minimize2,
  Maximize2,
  Brain,
  Zap,
  Code,
  BookOpen
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface AIChatButtonProps {
  className?: string;
}

export function AIChatButton({ className }: AIChatButtonProps) {
  const [showChat, setShowChat] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const [isDemoMode, setIsDemoMode] = useState(false);

  // Show prompt after 15 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPrompt(true);
      setTimeout(() => setShowPrompt(false), 3000);
    }, 15000);

    return () => clearTimeout(timer);
  }, []);

  const quickStartQuestions = [
    {
      icon: <Keyboard className="w-4 h-4" />,
      question: "How do I type special characters in Arabic?",
      category: "Typing Help"
    },
    {
      icon: <Globe className="w-4 h-4" />,
      question: "What keyboard layouts are available for different languages?",
      category: "Keyboard Layouts"
    },
    {
      icon: <Code className="w-4 h-4" />,
      question: "How can I improve my typing speed in a new language?",
      category: "Learning Tips"
    },
    {
      icon: <BookOpen className="w-4 h-4" />,
      question: "Explain the differences between Cyrillic and Latin alphabets",
      category: "Language Knowledge"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      "Typing Help": "bg-blue-500",
      "Keyboard Layouts": "bg-purple-500",
      "Learning Tips": "bg-green-500",
      "Language Knowledge": "bg-orange-500"
    };
    return colors[category] || "bg-gray-500";
  };

  if (showChat) {
    return (
      <div className={cn(
        "fixed bottom-24 right-6 z-[10000] transition-all duration-300 pointer-events-auto",
        isMinimized ? "w-80" : "w-96 max-w-[90vw]"
      )}>
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <Brain className="w-5 h-5" />
                <span className="font-semibold">AI Assistant</span>
              </div>
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
              {!showWelcome && (
                <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                  <div className="mb-3">
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles className="w-4 h-4 text-purple-600" />
                      <h3 className="font-medium text-gray-900 dark:text-gray-100">
                        Quick Start
                      </h3>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Try one of these questions or type your own:
                    </p>
                  </div>
                  <div className="grid grid-cols-1 gap-2">
                    {quickStartQuestions.map((item, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        className="justify-start text-left h-auto p-3 hover:bg-gray-50 dark:hover:bg-gray-800"
                        onClick={() => {
                          // This will be handled by the AIChatWindow component
                          const event = new CustomEvent('ai-question', {
                            detail: { question: item.question }
                          });
                          window.dispatchEvent(event);
                        }}
                      >
                        <div className="flex items-start gap-2">
                          <div className={cn(
                            "p-1 rounded text-white",
                            getCategoryColor(item.category)
                          )}>
                            {item.icon}
                          </div>
                          <div className="flex-1">
                            <p className="text-xs font-medium text-gray-900 dark:text-gray-100">
                              {item.question}
                            </p>
                            <p className="text-xs text-gray-500">
                              {item.category}
                            </p>
                          </div>
                        </div>
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              {/* Welcome Message */}
              {showWelcome && (
                <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="w-4 h-4 text-purple-600" />
                    <h3 className="font-medium text-gray-900 dark:text-gray-100">
                      Hello! 👋
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    I'm your AI assistant here to help with keyboard questions,
                    typing tips, and language learning. How can I assist you today?
                  </p>
                </div>
              )}

              {/* Input Area */}
              <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex gap-2">
                  <textarea
                    placeholder="Ask me anything about keyboards..."
                    className="flex-1 min-h-[60px] p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        const textarea = e.target as HTMLTextAreaElement;
                        const question = textarea.value.trim();
                        if (question) {
                          const event = new CustomEvent('ai-question', {
                            detail: { question }
                          });
                          window.dispatchEvent(event);
                          textarea.value = '';
                        }
                      }
                    }}
                  />
                  <Button
                    size="sm"
                    className="bg-purple-600 hover:bg-purple-700 text-white"
                    onClick={(e) => {
                      const textarea = e.currentTarget.parentElement?.querySelector('textarea') as HTMLTextAreaElement;
                      if (textarea) {
                        const question = textarea.value.trim();
                        if (question) {
                          const event = new CustomEvent('ai-question', {
                            detail: { question }
                          });
                          window.dispatchEvent(event);
                          textarea.value = '';
                        }
                      }
                    }}
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    );
  }

  return (
    <>
      <Button
        className={cn(
          "fixed bottom-6 right-6 z-[9999] bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-full p-5 shadow-2xl transition-all duration-300 hover:scale-110 border-2 border-white/20 pointer-events-auto",
          className,
          showPrompt && "animate-bounce"
        )}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          console.log('Chat button clicked!');
          setShowChat(true);
        }}
        type="button"
      >
        <MessageCircle className="w-10 h-10" />
        {showPrompt && (
          <div className="absolute -top-3 -right-3 bg-red-500 text-white text-sm rounded-full w-7 h-7 flex items-center justify-center animate-pulse border-2 border-white">
            !
          </div>
        )}
      </Button>
      {showPrompt && (
        <div className="fixed bottom-20 right-6 bg-gray-800 text-white text-sm rounded-lg px-4 py-2 shadow-xl z-[9998] max-w-xs pointer-events-none">
          Need help? Try our AI Assistant!
        </div>
      )}
    </>
  );
}

// Helper icon components
function Keyboard({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="14" x="2" y="3" rx="2" stroke="currentColor" />
      <rect width="20" height="6" x="2" y="17" rx="2" stroke="currentColor" />
      <rect width="3" height="4" x="4" y="5" rx="0.5" stroke="currentColor" />
      <rect width="3" height="4" x="17" y="5" rx="0.5" stroke="currentColor" />
      <rect width="3" height="4" x="8.5" y="5" rx="0.5" stroke="currentColor" />
      <rect width="3" height="4" x="12.5" y="5" rx="0.5" stroke="currentColor" />
    </svg>
  );
}

function Globe({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="10" stroke="currentColor" />
      <path d="M2 12h20" stroke="currentColor" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4 10" stroke="currentColor" />
      <path d="m2 12 20 20-20" stroke="currentColor" />
    </svg>
  );
}