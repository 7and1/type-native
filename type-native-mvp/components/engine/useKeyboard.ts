import React, { useEffect, useCallback } from 'react';
import { KeyboardLayout, KeyDefinition } from '../../types';

interface UseKeyboardProps {
  layout: KeyboardLayout;
  onInsert: (char: string) => void;
  onDelete: () => void;
  onEnter: () => void;
  isShift: boolean;
  setIsShift: (val: boolean) => void;
  textAreaRef: React.RefObject<HTMLTextAreaElement>;
}

export const useKeyboard = ({
  layout,
  onInsert,
  onDelete,
  onEnter,
  isShift,
  setIsShift,
  textAreaRef,
}: UseKeyboardProps) => {

  const findKeyDef = useCallback((code: string): KeyDefinition | undefined => {
    for (const row of layout.rows) {
      const key = row.find((k) => k.code === code);
      if (key) return key;
    }
    return undefined;
  }, [layout]);

  // Handle Physical Keydown
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore meta keys (Ctrl+C, Cmd+V, etc should work natively)
      if (e.ctrlKey || e.metaKey || e.altKey) return;

      const keyDef = findKeyDef(e.code);

      // Handle Shift Toggle logic separately if needed, usually OS handles Shift modifier
      // But we need to sync visual state
      if (e.key === 'Shift') {
        setIsShift(true);
        return;
      }

      if (!keyDef) return;

      // Special Keys
      if (keyDef.code === 'Backspace') {
        // Allow native backspace to work if focused, but we might want to capture it
        // If we want to fully control input, e.preventDefault() here.
        // For this hybrid engine, we let native focus handle standard editing if focused,
        // but if we are "capturing" layout keys:
        return; 
      }

      if (keyDef.code === 'Enter') {
        return; // Let native enter work
      }

      if (keyDef.code === 'Space') {
         // Let native space work, but ensure mapping doesn't override it weirdly
         return;
      }

      // Character Mapping
      if (keyDef.type === 'char' || !keyDef.type) {
        // Prevent default QWERTY character
        e.preventDefault();
        
        const charToInsert = (e.shiftKey || isShift) && keyDef.shift 
          ? keyDef.shift 
          : keyDef.char;

        onInsert(charToInsert);
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === 'Shift') {
        setIsShift(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [layout, isShift, setIsShift, findKeyDef, onInsert]);

  return {
    findKeyDef
  };
};