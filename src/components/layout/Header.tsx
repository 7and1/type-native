'use client';

import Link from 'next/link';
import { Keyboard, Moon, Sun, Monitor, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAppStore } from '@/stores/useAppStore';
import { useEffect } from 'react';

export function Header() {
  const { theme, setTheme } = useAppStore();

  // Apply theme
  useEffect(() => {
    if (typeof document === 'undefined') return;

    const prefersDarkQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const root = document.documentElement;

    const applyTheme = () => {
      if (theme === 'dark') {
        root.classList.add('dark');
      } else if (theme === 'light') {
        root.classList.remove('dark');
      } else {
        if (prefersDarkQuery.matches) {
          root.classList.add('dark');
        } else {
          root.classList.remove('dark');
        }
      }
    };

    applyTheme();

    if (theme === 'system') {
      prefersDarkQuery.addEventListener('change', applyTheme);
      return () => prefersDarkQuery.removeEventListener('change', applyTheme);
    }
  }, [theme]);

  const cycleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else if (theme === 'dark') {
      setTheme('system');
    } else {
      setTheme('light');
    }
  };

  const ThemeIcon = theme === 'light' ? Sun : theme === 'dark' ? Moon : Monitor;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between px-4 mx-auto">
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-lg hover:opacity-80 transition-opacity"
        >
          <Keyboard className="w-6 h-6 text-primary" />
          <span className="hidden sm:inline">Type-Native</span>
        </Link>

        <nav className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              // Trigger AI chat event
              const event = new CustomEvent('ai-question', {
                detail: {
                  question: 'Hi! I need help with the keyboard.'
                }
              });
              window.dispatchEvent(event);
            }}
            className="flex items-center gap-2 px-3"
          >
            <MessageCircle className="h-4 w-4" />
            <span className="hidden sm:inline">AI Help</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={cycleTheme}
            aria-label={`Switch to ${
              theme === 'light' ? 'dark' : theme === 'dark' ? 'system' : 'light'
            } mode`}
          >
            <ThemeIcon className="h-5 w-5" />
          </Button>
        </nav>
      </div>
    </header>
  );
}
