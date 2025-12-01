'use client';

import { forwardRef, useEffect, useRef, useImperativeHandle } from 'react';
import { cn } from '@/lib/utils';

interface TextEditorProps {
  value: string;
  onChange: (value: string) => void;
  direction: 'ltr' | 'rtl';
  fontFamily?: string;
  placeholder?: string;
  className?: string;
  languageName?: string;
}

export const TextEditor = forwardRef<HTMLTextAreaElement, TextEditorProps>(
  function TextEditor(
    { value, onChange, direction, fontFamily, placeholder, className, languageName },
    ref
  ) {
    const internalRef = useRef<HTMLTextAreaElement>(null);

    // Expose the internal ref
    useImperativeHandle(ref, () => internalRef.current!, []);

    // Auto-focus on mount
    useEffect(() => {
      // Small delay to ensure layout is complete
      const timer = setTimeout(() => {
        internalRef.current?.focus();
      }, 100);
      return () => clearTimeout(timer);
    }, []);

    // Character and word count
    const charCount = value.length;
    const wordCount = value.trim() ? value.trim().split(/\s+/).length : 0;

    return (
      <div className="relative">
        <textarea
          ref={internalRef}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          dir={direction}
          placeholder={placeholder || `Start typing in ${languageName || 'your language'}...`}
          className={cn(
            'w-full min-h-[180px] sm:min-h-[200px] p-4 sm:p-6',
            'rounded-xl border-2 border-gray-200 dark:border-gray-700',
            'bg-white dark:bg-gray-800',
            'text-lg sm:text-xl leading-relaxed',
            'text-gray-900 dark:text-gray-100',
            'placeholder:text-gray-400 dark:placeholder:text-gray-500',
            'focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none',
            'resize-y transition-all duration-200',
            'selection:bg-primary/20',
            className
          )}
          style={{
            fontFamily: fontFamily || 'inherit',
            textAlign: direction === 'rtl' ? 'right' : 'left',
          }}
          aria-label={`Text editor for ${languageName || 'typing'}`}
          spellCheck={false}
          autoCapitalize="off"
          autoCorrect="off"
          autoComplete="off"
        />

        {/* Character and word count */}
        <div
          className={cn(
            'absolute bottom-3 text-xs text-gray-400 dark:text-gray-500',
            'flex gap-3',
            direction === 'rtl' ? 'left-4' : 'right-4'
          )}
        >
          <span>{charCount} characters</span>
          <span>{wordCount} words</span>
        </div>
      </div>
    );
  }
);
