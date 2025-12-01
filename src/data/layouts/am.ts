import type { KeyboardLayout } from '@/types/keyboard';

/**
 * Amharic Keyboard Layout
 * Language: Amharic (አማርኛ)
 * Script: Ge'ez (Ethiopic)
 * Direction: LTR
 * Standard phonetic layout based on common Amharic keyboard layouts
 */
export const amharicLayout: KeyboardLayout = {
  id: 'am',
  name: 'Amharic',
  nativeName: 'አማርኛ',
  direction: 'ltr',
  fontFamily: 'Noto Sans Ethiopic, sans-serif',
  rows: [
    // Row 1: Numbers and symbols
    {
      keys: [
        { id: 'num1', label: '1', value: '1', shiftValue: '!', code: 'Digit1', type: 'character' },
        { id: 'num2', label: '2', value: '2', shiftValue: '@', code: 'Digit2', type: 'character' },
        { id: 'num3', label: '3', value: '3', shiftValue: '#', code: 'Digit3', type: 'character' },
        { id: 'num4', label: '4', value: '4', shiftValue: '$', code: 'Digit4', type: 'character' },
        { id: 'num5', label: '5', value: '5', shiftValue: '%', code: 'Digit5', type: 'character' },
        { id: 'num6', label: '6', value: '6', shiftValue: '^', code: 'Digit6', type: 'character' },
        { id: 'num7', label: '7', value: '7', shiftValue: '&', code: 'Digit7', type: 'character' },
        { id: 'num8', label: '8', value: '8', shiftValue: '*', code: 'Digit8', type: 'character' },
        { id: 'num9', label: '9', value: '9', shiftValue: '(', code: 'Digit9', type: 'character' },
        { id: 'num0', label: '0', value: '0', shiftValue: ')', code: 'Digit0', type: 'character' },
        { id: 'minus', label: '-', value: '-', shiftValue: '_', code: 'Minus', type: 'character' },
        { id: 'equal', label: '=', value: '=', shiftValue: '+', code: 'Equal', type: 'character' },
        { id: 'backspace', label: '⌫', value: 'Backspace', code: 'Backspace', type: 'action', width: 1.5 },
      ],
    },
    // Row 2: ቀ-row (Q-row)
    {
      keys: [
        { id: 'q', label: 'ቀ', value: 'ቀ', shiftValue: 'ቐ', code: 'KeyQ', type: 'character' },
        { id: 'w', label: 'ወ', value: 'ወ', shiftValue: 'ዎ', code: 'KeyW', type: 'character' },
        { id: 'e', label: 'ዐ', value: 'ዐ', shiftValue: 'ዔ', code: 'KeyE', type: 'character' },
        { id: 'r', label: 'ረ', value: 'ረ', shiftValue: 'ሯ', code: 'KeyR', type: 'character' },
        { id: 't', label: 'ተ', value: 'ተ', shiftValue: 'ቸ', code: 'KeyT', type: 'character' },
        { id: 'y', label: 'የ', value: 'የ', shiftValue: 'ዬ', code: 'KeyY', type: 'character' },
        { id: 'u', label: 'ኡ', value: 'ኡ', shiftValue: 'ኧ', code: 'KeyU', type: 'character' },
        { id: 'i', label: 'ኢ', value: 'ኢ', shiftValue: 'ኦ', code: 'KeyI', type: 'character' },
        { id: 'o', label: 'ኦ', value: 'ኦ', shiftValue: 'ኦ', code: 'KeyO', type: 'character' },
        { id: 'p', label: 'ፐ', value: 'ፐ', shiftValue: 'ጰ', code: 'KeyP', type: 'character' },
        { id: 'bracket-left', label: '[', value: '[', shiftValue: '{', code: 'BracketLeft', type: 'character' },
        { id: 'bracket-right', label: ']', value: ']', shiftValue: '}', code: 'BracketRight', type: 'character' },
        { id: 'backslash', label: '\\', value: '\\', shiftValue: '|', code: 'Backslash', type: 'character' },
      ],
    },
    // Row 3: አ-row (A-row)
    {
      keys: [
        { id: 'a', label: 'አ', value: 'አ', shiftValue: 'ዓ', code: 'KeyA', type: 'character' },
        { id: 's', label: 'ሰ', value: 'ሰ', shiftValue: 'ሠ', code: 'KeyS', type: 'character' },
        { id: 'd', label: 'ደ', value: 'ደ', shiftValue: 'ዸ', code: 'KeyD', type: 'character' },
        { id: 'f', label: 'ፈ', value: 'ፈ', shiftValue: 'ፚ', code: 'KeyF', type: 'character' },
        { id: 'g', label: 'ገ', value: 'ገ', shiftValue: 'ጐ', code: 'KeyG', type: 'character' },
        { id: 'h', label: 'ሀ', value: 'ሀ', shiftValue: 'ሐ', code: 'KeyH', type: 'character' },
        { id: 'j', label: 'ጀ', value: 'ጀ', shiftValue: 'ጆ', code: 'KeyJ', type: 'character' },
        { id: 'k', label: 'ከ', value: 'ከ', shiftValue: 'ኸ', code: 'KeyK', type: 'character' },
        { id: 'l', label: 'ለ', value: 'ለ', shiftValue: 'ሎ', code: 'KeyL', type: 'character' },
        { id: 'semicolon', label: ';', value: ';', shiftValue: ':', code: 'Semicolon', type: 'character' },
        { id: 'quote', label: "'", value: "'", shiftValue: '"', code: 'Quote', type: 'character' },
        { id: 'enter', label: '↵', value: 'Enter', code: 'Enter', type: 'action', width: 1.5 },
      ],
    },
    // Row 4: ዘ-row (Z-row)
    {
      keys: [
        { id: 'shift-left', label: '⇧', value: 'Shift', code: 'ShiftLeft', type: 'modifier', width: 1.5 },
        { id: 'z', label: 'ዘ', value: 'ዘ', shiftValue: 'ዥ', code: 'KeyZ', type: 'character' },
        { id: 'x', label: 'ሸ', value: 'ሸ', shiftValue: 'ሾ', code: 'KeyX', type: 'character' },
        { id: 'c', label: 'ጨ', value: 'ጨ', shiftValue: 'ጮ', code: 'KeyC', type: 'character' },
        { id: 'v', label: 'ቨ', value: 'ቨ', shiftValue: 'ቮ', code: 'KeyV', type: 'character' },
        { id: 'b', label: 'በ', value: 'በ', shiftValue: 'ቦ', code: 'KeyB', type: 'character' },
        { id: 'n', label: 'ነ', value: 'ነ', shiftValue: 'ኘ', code: 'KeyN', type: 'character' },
        { id: 'm', label: 'መ', value: 'መ', shiftValue: 'ሞ', code: 'KeyM', type: 'character' },
        { id: 'comma', label: '፣', value: '፣', shiftValue: '፤', code: 'Comma', type: 'character' },
        { id: 'period', label: '።', value: '።', shiftValue: '፨', code: 'Period', type: 'character' },
        { id: 'slash', label: '/', value: '/', shiftValue: '?', code: 'Slash', type: 'character' },
        { id: 'shift-right', label: '⇧', value: 'Shift', code: 'ShiftRight', type: 'modifier', width: 1.5 },
      ],
    },
    // Row 5: Space bar
    {
      keys: [
        { id: 'space', label: 'Space', value: ' ', code: 'Space', type: 'space', width: 10 },
      ],
    },
  ],
  physicalKeyMap: {
    KeyQ: 'ቀ', KeyW: 'ወ', KeyE: 'ዐ', KeyR: 'ረ', KeyT: 'ተ',
    KeyY: 'የ', KeyU: 'ኡ', KeyI: 'ኢ', KeyO: 'ኦ', KeyP: 'ፐ',
    KeyA: 'አ', KeyS: 'ሰ', KeyD: 'ደ', KeyF: 'ፈ', KeyG: 'ገ',
    KeyH: 'ሀ', KeyJ: 'ጀ', KeyK: 'ከ', KeyL: 'ለ',
    KeyZ: 'ዘ', KeyX: 'ሸ', KeyC: 'ጨ', KeyV: 'ቨ', KeyB: 'በ',
    KeyN: 'ነ', KeyM: 'መ',
  },
};
