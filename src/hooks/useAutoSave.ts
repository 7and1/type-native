'use client';

import { useEffect, useRef } from 'react';

interface UseAutoSaveOptions {
  value: string;
  onSave: (value: string) => void;
  delay?: number;
}

export function useAutoSave({ value, onSave, delay = 500 }: UseAutoSaveOptions) {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const previousValueRef = useRef(value);

  useEffect(() => {
    // Only save if value has actually changed
    if (value === previousValueRef.current) {
      return;
    }

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      onSave(value);
      previousValueRef.current = value;
    }, delay);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [value, onSave, delay]);

  // Save immediately on unmount if there are unsaved changes
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);
}
