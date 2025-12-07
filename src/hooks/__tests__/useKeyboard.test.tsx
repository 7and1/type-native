import { describe, expect, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { useRef, useState } from 'react';

import { useKeyboard } from '@/hooks/useKeyboard';
import type { KeyboardLayout, KeyDefinition } from '@/types/keyboard';

const SHIFT_KEY: KeyDefinition = {
  id: 'shift-left',
  label: 'Shift',
  value: 'Shift',
  type: 'modifier',
};

const CAPS_KEY: KeyDefinition = {
  id: 'caps-lock',
  label: 'Caps',
  value: 'CapsLock',
  type: 'modifier',
};

const CHARACTER_KEY: KeyDefinition = {
  id: 'key-a',
  label: 'a',
  value: 'a',
  shiftValue: 'A',
  type: 'character',
};

const TEST_LAYOUT: KeyboardLayout = {
  id: 'en',
  name: 'English',
  nativeName: 'English',
  direction: 'ltr',
  rows: [
    {
      keys: [SHIFT_KEY, CAPS_KEY, CHARACTER_KEY],
    },
  ],
};

function KeyboardHarness({ layout = TEST_LAYOUT }: { layout?: KeyboardLayout }) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [text, setText] = useState('');
  const { handleVirtualKeyPress, isShiftActive, isCapsActive } = useKeyboard({
    layout,
    textareaRef,
    onTextChange: setText,
    text,
    interceptPhysicalKeyboard: false,
  });

  return (
    <div>
      <textarea ref={textareaRef} data-testid="editor" readOnly value={text} />
      <div data-testid="status">
        {JSON.stringify({ shift: isShiftActive, caps: isCapsActive })}
      </div>
      <button type="button" data-testid="shift-toggle" onClick={() => handleVirtualKeyPress(SHIFT_KEY)}>
        toggle shift
      </button>
      <button type="button" data-testid="caps-toggle" onClick={() => handleVirtualKeyPress(CAPS_KEY)}>
        toggle caps
      </button>
      <button type="button" data-testid="character" onClick={() => handleVirtualKeyPress(CHARACTER_KEY)}>
        insert character
      </button>
    </div>
  );
}

describe('useKeyboard', () => {
  it('toggles shift for a single character and resets afterward', () => {
    render(<KeyboardHarness />);

    const status = screen.getByTestId('status');
    const editor = screen.getByTestId('editor') as HTMLTextAreaElement;

    fireEvent.click(screen.getByTestId('shift-toggle'));
    expect(status.textContent).toContain('"shift":true');

    fireEvent.click(screen.getByTestId('character'));
    expect(editor.value).toBe('A');
    expect(status.textContent).toContain('"shift":false');
  });

  it('maintains caps lock state across multiple characters', () => {
    render(<KeyboardHarness />);

    const status = screen.getByTestId('status');
    const editor = screen.getByTestId('editor') as HTMLTextAreaElement;

    fireEvent.click(screen.getByTestId('caps-toggle'));
    expect(status.textContent).toContain('"caps":true');

    fireEvent.click(screen.getByTestId('character'));
    fireEvent.click(screen.getByTestId('character'));

    expect(editor.value).toBe('AA');
    expect(status.textContent).toContain('"caps":true');
  });
});
