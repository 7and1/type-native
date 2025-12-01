'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import type { KeyboardLayout, KeyDefinition } from '@/types/keyboard';

interface UseKeyboardOptions {
  layout: KeyboardLayout;
  textareaRef: React.RefObject<HTMLTextAreaElement | null>;
  onTextChange: (text: string) => void;
  text: string;
  interceptPhysicalKeyboard?: boolean;
}

interface UseKeyboardReturn {
  handleVirtualKeyPress: (key: KeyDefinition) => void;
  isShiftActive: boolean;
  isCapsActive: boolean;
  toggleShift: () => void;
  toggleCaps: () => void;
  setShift: (active: boolean) => void;
}

export function useKeyboard({
  layout,
  textareaRef,
  onTextChange,
  text,
  interceptPhysicalKeyboard = true,
}: UseKeyboardOptions): UseKeyboardReturn {
  const [isShiftActive, setIsShiftActive] = useState(false);
  const [isCapsActive, setIsCapsActive] = useState(false);
  const shiftPressedRef = useRef(false);

  // Insert text at cursor position
  const insertTextAtCursor = useCallback(
    (char: string) => {
      const textarea = textareaRef.current;
      if (!textarea) {
        onTextChange(text + char);
        return;
      }

      const start = textarea.selectionStart ?? text.length;
      const end = textarea.selectionEnd ?? text.length;

      const newText = text.slice(0, start) + char + text.slice(end);
      onTextChange(newText);

      // Set cursor position after the inserted character
      requestAnimationFrame(() => {
        const newPosition = start + char.length;
        textarea.selectionStart = newPosition;
        textarea.selectionEnd = newPosition;
        textarea.focus();
      });
    },
    [text, textareaRef, onTextChange]
  );

  // Handle backspace
  const handleBackspace = useCallback(() => {
    const textarea = textareaRef.current;
    if (!textarea) {
      onTextChange(text.slice(0, -1));
      return;
    }

    const start = textarea.selectionStart ?? text.length;
    const end = textarea.selectionEnd ?? text.length;

    if (start !== end) {
      // Delete selection
      const newText = text.slice(0, start) + text.slice(end);
      onTextChange(newText);
      requestAnimationFrame(() => {
        textarea.selectionStart = start;
        textarea.selectionEnd = start;
        textarea.focus();
      });
    } else if (start > 0) {
      // Delete one character
      const newText = text.slice(0, start - 1) + text.slice(start);
      onTextChange(newText);
      requestAnimationFrame(() => {
        const newPosition = start - 1;
        textarea.selectionStart = newPosition;
        textarea.selectionEnd = newPosition;
        textarea.focus();
      });
    }
  }, [text, textareaRef, onTextChange]);

  // Handle virtual key press (from clicking on-screen keyboard)
  const handleVirtualKeyPress = useCallback(
    (key: KeyDefinition) => {
      // Handle special keys
      if (key.type === 'modifier') {
        if (key.id.includes('shift')) {
          setIsShiftActive((prev) => !prev);
        } else if (key.id.includes('caps')) {
          setIsCapsActive((prev) => !prev);
        }
        return;
      }

      if (key.type === 'action') {
        if (key.value === 'Backspace' || key.id.includes('backspace')) {
          handleBackspace();
          return;
        }
        if (key.value === 'Enter' || key.id.includes('enter')) {
          insertTextAtCursor('\n');
          return;
        }
        if (key.value === 'Tab' || key.id.includes('tab')) {
          insertTextAtCursor('\t');
          return;
        }
        return;
      }

      // Get the correct character based on shift/caps state
      const effectiveShift = isShiftActive !== isCapsActive;
      const char = effectiveShift && key.shiftValue ? key.shiftValue : key.value;

      insertTextAtCursor(char);

      // Reset shift after character input (but not caps)
      if (isShiftActive && key.type === 'character') {
        setIsShiftActive(false);
      }
    },
    [isShiftActive, isCapsActive, insertTextAtCursor, handleBackspace]
  );

  // Physical keyboard interception
  useEffect(() => {
    if (!interceptPhysicalKeyboard) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      const textarea = textareaRef.current;

      // Only intercept when our textarea is focused
      if (!textarea || document.activeElement !== textarea) {
        return;
      }

      // Allow browser shortcuts
      if (e.metaKey || e.ctrlKey) {
        return;
      }

      // Track physical shift
      if (e.key === 'Shift') {
        shiftPressedRef.current = true;
        setIsShiftActive(true);
        return;
      }

      // Handle CapsLock
      if (e.key === 'CapsLock') {
        setIsCapsActive((prev) => !prev);
        return;
      }

      // Handle special keys that should work normally
      if (['Tab', 'Escape'].includes(e.key)) {
        return;
      }

      // Handle Backspace
      if (e.key === 'Backspace') {
        e.preventDefault();
        handleBackspace();
        return;
      }

      // Handle Enter
      if (e.key === 'Enter') {
        e.preventDefault();
        insertTextAtCursor('\n');
        return;
      }

      // Handle Space
      if (e.key === ' ') {
        e.preventDefault();
        insertTextAtCursor(' ');
        return;
      }

      // Handle arrow keys and other navigation - let them through
      if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Home', 'End'].includes(e.key)) {
        return;
      }

      // Map physical key to layout character
      if (layout.physicalKeyMap && e.code) {
        const mappedChar = layout.physicalKeyMap[e.code];
        if (mappedChar) {
          e.preventDefault();

          // Find the key definition to check for shift variant
          const allKeys = layout.rows.flatMap((row) => row.keys);
          const keyDef = allKeys.find((k) => k.value === mappedChar);

          const effectiveShift = shiftPressedRef.current || isCapsActive;
          const char = effectiveShift && keyDef?.shiftValue ? keyDef.shiftValue : mappedChar;

          insertTextAtCursor(char);
          return;
        }
      }

      // If no mapping found but it's a printable character, insert as-is
      if (e.key.length === 1) {
        e.preventDefault();
        const char = shiftPressedRef.current ? e.key.toUpperCase() : e.key;
        insertTextAtCursor(char);
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === 'Shift') {
        shiftPressedRef.current = false;
        setIsShiftActive(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [
    layout,
    textareaRef,
    interceptPhysicalKeyboard,
    handleBackspace,
    insertTextAtCursor,
    isCapsActive,
  ]);

  return {
    handleVirtualKeyPress,
    isShiftActive,
    isCapsActive,
    toggleShift: () => setIsShiftActive((prev) => !prev),
    toggleCaps: () => setIsCapsActive((prev) => !prev),
    setShift: setIsShiftActive,
  };
}
