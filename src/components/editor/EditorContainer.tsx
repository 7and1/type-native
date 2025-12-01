'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { TextEditor } from './TextEditor';
import { ActionBar } from './ActionBar';
import { KeyboardFrame } from '../keyboard/KeyboardFrame';
import { useKeyboard } from '@/hooks/useKeyboard';
import { useAutoSave } from '@/hooks/useAutoSave';
import { useAppStore } from '@/stores/useAppStore';
import type { KeyboardLayout, LanguageCode } from '@/types/keyboard';

interface EditorContainerProps {
  layout: KeyboardLayout;
}

export function EditorContainer({ layout }: EditorContainerProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Get saved draft from store
  const { getDraft, setDraft, clearDraft, addRecentKeyboard } = useAppStore();
  const savedText = getDraft(layout.id);

  // Local text state
  const [text, setText] = useState(savedText);

  // Load saved draft on mount and when layout changes
  useEffect(() => {
    const draft = getDraft(layout.id);
    setText(draft);
    addRecentKeyboard(layout.id);
  }, [layout.id, getDraft, addRecentKeyboard]);

  // Auto-save with debounce
  useAutoSave({
    value: text,
    onSave: useCallback(
      (value: string) => {
        if (value.trim()) {
          setDraft(layout.id, value);
        } else {
          clearDraft(layout.id);
        }
      },
      [layout.id, setDraft, clearDraft]
    ),
    delay: 500,
  });

  // Keyboard hook
  const { handleVirtualKeyPress, isShiftActive, isCapsActive } = useKeyboard({
    layout,
    textareaRef,
    onTextChange: setText,
    text,
    interceptPhysicalKeyboard: true,
  });

  // Clear handler
  const handleClear = useCallback(() => {
    setText('');
    clearDraft(layout.id);
    textareaRef.current?.focus();
  }, [layout.id, clearDraft]);

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Text Editor */}
      <TextEditor
        ref={textareaRef}
        value={text}
        onChange={setText}
        direction={layout.direction}
        fontFamily={layout.fontFamily}
        languageName={layout.name}
      />

      {/* Action Buttons */}
      <ActionBar text={text} onClear={handleClear} />

      {/* Virtual Keyboard */}
      <KeyboardFrame
        layout={layout}
        onKeyPress={handleVirtualKeyPress}
        isShiftActive={isShiftActive}
        isCapsActive={isCapsActive}
      />

      {/* Keyboard tips */}
      <p className="text-center text-sm text-muted-foreground">
        <span className="hidden sm:inline">
          Tip: You can also type using your physical keyboard when the text box is focused.
        </span>
        <span className="sm:hidden">
          Tap the keys above or use your device keyboard.
        </span>
      </p>
    </div>
  );
}
