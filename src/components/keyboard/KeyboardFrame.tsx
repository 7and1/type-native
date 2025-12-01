'use client';

import { memo } from 'react';
import type { KeyboardLayout, KeyDefinition } from '@/types/keyboard';
import { KeyButton } from './KeyButton';
import { cn } from '@/lib/utils';

interface KeyboardFrameProps {
  layout: KeyboardLayout;
  onKeyPress: (key: KeyDefinition) => void;
  isShiftActive: boolean;
  isCapsActive: boolean;
  className?: string;
}

export const KeyboardFrame = memo(function KeyboardFrame({
  layout,
  onKeyPress,
  isShiftActive,
  isCapsActive,
  className,
}: KeyboardFrameProps) {
  return (
    <div
      className={cn(
        'w-full max-w-4xl mx-auto p-3 sm:p-4',
        'bg-gray-100 dark:bg-gray-900 rounded-xl shadow-lg',
        'border border-gray-200 dark:border-gray-700',
        className
      )}
      dir={layout.direction}
      role="application"
      aria-label={`${layout.name} Virtual Keyboard`}
    >
      <div className="space-y-1.5 sm:space-y-2">
        {layout.rows.map((row, rowIndex) => (
          <div
            key={`row-${rowIndex}`}
            className="flex gap-1 sm:gap-1.5 justify-center"
          >
            {row.keys.map((keyDef) => (
              <KeyButton
                key={keyDef.id}
                keyDef={keyDef}
                isShiftActive={isShiftActive}
                isCapsActive={isCapsActive}
                onPress={onKeyPress}
                fontFamily={layout.fontFamily}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
});
