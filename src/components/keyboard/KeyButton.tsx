'use client';

import { memo, useState, useCallback } from 'react';
import type { KeyDefinition } from '@/types/keyboard';
import { cn } from '@/lib/utils';

interface KeyButtonProps {
  keyDef: KeyDefinition;
  isShiftActive: boolean;
  isCapsActive: boolean;
  onPress: (key: KeyDefinition) => void;
  fontFamily?: string;
}

export const KeyButton = memo(function KeyButton({
  keyDef,
  isShiftActive,
  isCapsActive,
  onPress,
  fontFamily,
}: KeyButtonProps) {
  const [isPressed, setIsPressed] = useState(false);

  // Determine displayed character
  const effectiveShift = keyDef.type === 'character' ? isShiftActive !== isCapsActive : isShiftActive;
  const displayLabel =
    effectiveShift && keyDef.shiftValue ? keyDef.shiftValue : keyDef.label;

  const handlePress = useCallback(() => {
    setIsPressed(true);
    onPress(keyDef);
    setTimeout(() => setIsPressed(false), 100);
  }, [keyDef, onPress]);

  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      e.preventDefault();
      handlePress();
    },
    [handlePress]
  );

  // Calculate width class based on key width
  const widthStyle = keyDef.width
    ? { flex: `${keyDef.width} 0 0`, minWidth: `${keyDef.width * 2.5}rem` }
    : { flex: '1 0 0', minWidth: '2.5rem' };

  // Determine if this is a special active key
  const isActiveModifier =
    (keyDef.id.includes('shift') && isShiftActive) ||
    (keyDef.id.includes('caps') && isCapsActive);

  return (
    <button
      type="button"
      onPointerDown={handlePointerDown}
      className={cn(
        'relative flex items-center justify-center',
        'h-12 sm:h-14 rounded-lg border-2 select-none',
        'transition-all duration-75 ease-out',
        'text-base sm:text-lg font-medium',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
        // Default style
        'bg-white border-gray-300 text-gray-800',
        'hover:bg-gray-50 hover:border-gray-400',
        'active:bg-gray-100 active:scale-95',
        // Dark mode
        'dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100',
        'dark:hover:bg-gray-700 dark:hover:border-gray-500',
        // Type-specific styles
        keyDef.type === 'modifier' && [
          'bg-blue-50 border-blue-300 text-blue-700',
          'dark:bg-blue-900/30 dark:border-blue-700 dark:text-blue-300',
          isActiveModifier && 'bg-blue-200 border-blue-500 dark:bg-blue-800 dark:border-blue-500',
        ],
        keyDef.type === 'action' && [
          'bg-gray-100 border-gray-400 text-gray-700',
          'dark:bg-gray-700 dark:border-gray-500 dark:text-gray-200',
        ],
        keyDef.type === 'space' && [
          'bg-gray-50 border-gray-300',
          'dark:bg-gray-800 dark:border-gray-600',
        ],
        // Pressed state
        isPressed && 'scale-95 bg-gray-200 dark:bg-gray-600'
      )}
      style={{
        ...widthStyle,
        fontFamily: keyDef.type === 'character' ? fontFamily : undefined,
      }}
      aria-label={`Type ${displayLabel}`}
    >
      <span className="pointer-events-none">{displayLabel}</span>
    </button>
  );
});
