import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import { KeyboardFrame } from '../KeyboardFrame';
import type { KeyboardLayout } from '@/types/keyboard';

const rtlLayout: KeyboardLayout = {
  id: 'ar',
  name: 'Arabic',
  nativeName: 'العربية',
  direction: 'rtl',
  rows: [
    {
      keys: [
        { id: 'key-a', label: 'ا', value: 'ا', type: 'character' },
      ],
    },
  ],
};

describe('KeyboardFrame', () => {
  it('applies RTL direction and accessible label from the layout', () => {
    render(
      <KeyboardFrame
        layout={rtlLayout}
        isShiftActive={false}
        isCapsActive={false}
        onKeyPress={vi.fn()}
      />
    );

    const frame = screen.getByRole('application', { name: /Arabic Virtual Keyboard/i });
    expect(frame).toHaveAttribute('dir', 'rtl');
  });
});
