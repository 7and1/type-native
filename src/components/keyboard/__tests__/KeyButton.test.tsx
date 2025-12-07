import { afterEach, describe, expect, it, vi } from 'vitest';
import { act, cleanup, fireEvent, render, screen } from '@testing-library/react';

import { KeyButton } from '../KeyButton';
import type { KeyDefinition } from '@/types/keyboard';

const baseKey: KeyDefinition = {
  id: 'key-a',
  label: 'a',
  value: 'a',
  shiftValue: 'A',
  type: 'character',
};

afterEach(() => {
  cleanup();
  vi.useRealTimers();
});

describe('KeyButton', () => {
  it('shows the shift character when shift is active', () => {
    render(
      <KeyButton
        keyDef={baseKey}
        isShiftActive
        isCapsActive={false}
        onPress={vi.fn()}
      />
    );

    expect(screen.getByRole('button', { name: 'Type A' })).toHaveTextContent('A');
  });

  it('invokes onPress when pointer is pressed', () => {
    vi.useFakeTimers();
    const onPress = vi.fn();

    render(
      <KeyButton
        keyDef={baseKey}
        isShiftActive={false}
        isCapsActive={false}
        onPress={onPress}
      />
    );

    const button = screen.getByRole('button', { name: 'Type a' });
    act(() => {
      fireEvent.pointerDown(button);
      vi.runAllTimers();
    });

    expect(onPress).toHaveBeenCalledWith(baseKey);
  });
});
