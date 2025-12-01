import type { KeyboardLayout } from '@/types/keyboard';

/**
 * Tigrinya Keyboard Layout
 * Ge'ez/Ethiopic script (ግእዝ) - one of the world's oldest alphabets
 * Abugida writing system with 7 orders (forms) per consonant
 * Similar to Amharic but with Tigrinya-specific characters
 * Used by 9+ million speakers in Eritrea and Ethiopia
 */
export const tigrinyaLayout: KeyboardLayout = {
  id: 'ti',
  name: 'Tigrinya',
  nativeName: 'ትግርኛ',
  direction: 'ltr',
  fontFamily: 'Noto Sans Ethiopic, sans-serif',
  rows: [
    // Row 1: Number row (Ethiopic numerals)
    {
      keys: [
        { id: 'ti-grave', label: '`', value: '`', shiftValue: '~', code: 'Backquote', type: 'character' },
        { id: 'ti-1', label: '1', value: '1', shiftValue: '፩', code: 'Digit1', type: 'character' },
        { id: 'ti-2', label: '2', value: '2', shiftValue: '፪', code: 'Digit2', type: 'character' },
        { id: 'ti-3', label: '3', value: '3', shiftValue: '፫', code: 'Digit3', type: 'character' },
        { id: 'ti-4', label: '4', value: '4', shiftValue: '፬', code: 'Digit4', type: 'character' },
        { id: 'ti-5', label: '5', value: '5', shiftValue: '፭', code: 'Digit5', type: 'character' },
        { id: 'ti-6', label: '6', value: '6', shiftValue: '፮', code: 'Digit6', type: 'character' },
        { id: 'ti-7', label: '7', value: '7', shiftValue: '፯', code: 'Digit7', type: 'character' },
        { id: 'ti-8', label: '8', value: '8', shiftValue: '፰', code: 'Digit8', type: 'character' },
        { id: 'ti-9', label: '9', value: '9', shiftValue: '፱', code: 'Digit9', type: 'character' },
        { id: 'ti-0', label: '0', value: '0', shiftValue: '፲', code: 'Digit0', type: 'character' },
        { id: 'ti-minus', label: '-', value: '-', shiftValue: '_', code: 'Minus', type: 'character' },
        { id: 'ti-equal', label: '=', value: '=', shiftValue: '+', code: 'Equal', type: 'character' },
        { id: 'ti-backspace', label: '⌫', value: 'Backspace', code: 'Backspace', type: 'action', width: 1.5 },
      ],
    },
    // Row 2: Top letter row - Consonants (1st order - ə)
    {
      keys: [
        { id: 'ti-qe', label: 'ቀ', value: 'ቀ', shiftValue: 'ቐ', code: 'KeyQ', type: 'character' },
        { id: 'ti-we', label: 'ወ', value: 'ወ', shiftValue: 'ዐ', code: 'KeyW', type: 'character' },
        { id: 'ti-e', label: 'እ', value: 'እ', shiftValue: 'ዕ', code: 'KeyE', type: 'character' },
        { id: 'ti-re', label: 'ረ', value: 'ረ', shiftValue: 'ዠ', code: 'KeyR', type: 'character' },
        { id: 'ti-te', label: 'ተ', value: 'ተ', shiftValue: 'ጠ', code: 'KeyT', type: 'character' },
        { id: 'ti-ye', label: 'የ', value: 'የ', shiftValue: 'ዸ', code: 'KeyY', type: 'character' },
        { id: 'ti-u', label: 'ኡ', value: 'ኡ', shiftValue: 'ዑ', code: 'KeyU', type: 'character' },
        { id: 'ti-i', label: 'ኢ', value: 'ኢ', shiftValue: 'ዒ', code: 'KeyI', type: 'character' },
        { id: 'ti-o', label: 'ኦ', value: 'ኦ', shiftValue: 'ዖ', code: 'KeyO', type: 'character' },
        { id: 'ti-pe', label: 'ፐ', value: 'ፐ', shiftValue: 'ⶀ', code: 'KeyP', type: 'character' },
        { id: 'ti-bracket-left', label: '[', value: '[', shiftValue: '{', code: 'BracketLeft', type: 'character' },
        { id: 'ti-bracket-right', label: ']', value: ']', shiftValue: '}', code: 'BracketRight', type: 'character' },
        { id: 'ti-backslash', label: '\\', value: '\\', shiftValue: '|', code: 'Backslash', type: 'character' },
      ],
    },
    // Row 3: Home row - More consonants
    {
      keys: [
        { id: 'ti-a', label: 'አ', value: 'አ', shiftValue: 'ዓ', code: 'KeyA', type: 'character' },
        { id: 'ti-se', label: 'ሰ', value: 'ሰ', shiftValue: 'ጸ', code: 'KeyS', type: 'character' },
        { id: 'ti-de', label: 'ደ', value: 'ደ', shiftValue: 'ፀ', code: 'KeyD', type: 'character' },
        { id: 'ti-fe', label: 'ፈ', value: 'ፈ', shiftValue: 'ⶐ', code: 'KeyF', type: 'character' },
        { id: 'ti-ge', label: 'ገ', value: 'ገ', shiftValue: 'ጘ', code: 'KeyG', type: 'character' },
        { id: 'ti-he', label: 'ሀ', value: 'ሀ', shiftValue: 'ሐ', code: 'KeyH', type: 'character' },
        { id: 'ti-je', label: 'ጀ', value: 'ጀ', shiftValue: '⶘', code: 'KeyJ', type: 'character' },
        { id: 'ti-ke', label: 'ከ', value: 'ከ', shiftValue: 'ኸ', code: 'KeyK', type: 'character' },
        { id: 'ti-le', label: 'ለ', value: 'ለ', shiftValue: 'ⶀ', code: 'KeyL', type: 'character' },
        { id: 'ti-semicolon', label: ';', value: ';', shiftValue: '፤', code: 'Semicolon', type: 'character' },
        { id: 'ti-quote', label: "'", value: "'", shiftValue: '"', code: 'Quote', type: 'character' },
      ],
    },
    // Row 4: Bottom letter row - Additional consonants
    {
      keys: [
        { id: 'ti-shift-left', label: '⇧', value: 'Shift', code: 'ShiftLeft', type: 'modifier', width: 1.5 },
        { id: 'ti-ze', label: 'ዘ', value: 'ዘ', shiftValue: '⶘', code: 'KeyZ', type: 'character' },
        { id: 'ti-xe', label: 'ሸ', value: 'ሸ', shiftValue: 'ⶠ', code: 'KeyX', type: 'character' },
        { id: 'ti-ce', label: 'ቸ', value: 'ቸ', shiftValue: 'ⶸ', code: 'KeyC', type: 'character' },
        { id: 'ti-ve', label: 'ቨ', value: 'ቨ', shiftValue: 'ⶨ', code: 'KeyV', type: 'character' },
        { id: 'ti-be', label: 'በ', value: 'በ', shiftValue: 'ⶰ', code: 'KeyB', type: 'character' },
        { id: 'ti-ne', label: 'ነ', value: 'ነ', shiftValue: 'ኘ', code: 'KeyN', type: 'character' },
        { id: 'ti-me', label: 'መ', value: 'መ', shiftValue: 'ⶬ', code: 'KeyM', type: 'character' },
        { id: 'ti-comma', label: '፣', value: '፣', shiftValue: '<', code: 'Comma', type: 'character' },
        { id: 'ti-period', label: '።', value: '።', shiftValue: '>', code: 'Period', type: 'character' },
        { id: 'ti-slash', label: '/', value: '/', shiftValue: '?', code: 'Slash', type: 'character' },
        { id: 'ti-shift-right', label: '⇧', value: 'Shift', code: 'ShiftRight', type: 'modifier', width: 1.5 },
      ],
    },
    // Row 5: Space bar
    {
      keys: [
        { id: 'ti-space', label: 'Space', value: ' ', code: 'Space', type: 'space', width: 10 },
      ],
    },
  ],
  physicalKeyMap: {
    // Number row
    'Backquote': '`',
    'Digit1': '1',
    'Digit2': '2',
    'Digit3': '3',
    'Digit4': '4',
    'Digit5': '5',
    'Digit6': '6',
    'Digit7': '7',
    'Digit8': '8',
    'Digit9': '9',
    'Digit0': '0',
    'Minus': '-',
    'Equal': '=',
    // Top letter row
    'KeyQ': 'ቀ',
    'KeyW': 'ወ',
    'KeyE': 'እ',
    'KeyR': 'ረ',
    'KeyT': 'ተ',
    'KeyY': 'የ',
    'KeyU': 'ኡ',
    'KeyI': 'ኢ',
    'KeyO': 'ኦ',
    'KeyP': 'ፐ',
    'BracketLeft': '[',
    'BracketRight': ']',
    'Backslash': '\\',
    // Home row
    'KeyA': 'አ',
    'KeyS': 'ሰ',
    'KeyD': 'ደ',
    'KeyF': 'ፈ',
    'KeyG': 'ገ',
    'KeyH': 'ሀ',
    'KeyJ': 'ጀ',
    'KeyK': 'ከ',
    'KeyL': 'ለ',
    'Semicolon': ';',
    'Quote': "'",
    // Bottom row
    'KeyZ': 'ዘ',
    'KeyX': 'ሸ',
    'KeyC': 'ቸ',
    'KeyV': 'ቨ',
    'KeyB': 'በ',
    'KeyN': 'ነ',
    'KeyM': 'መ',
    'Comma': '፣',
    'Period': '።',
    'Slash': '/',
    'Space': ' ',
  },
};
