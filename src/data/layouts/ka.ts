import type { KeyboardLayout } from '@/types/keyboard';

/**
 * Georgian Keyboard Layout - QWERTY-based
 * Georgian Mkhedruli script (მხედრული)
 * One of the 14 unique alphabets in the world
 * 33 letters (no upper/lower case distinction traditionally)
 * Used by 4+ million speakers, primarily in Georgia
 */
export const georgianLayout: KeyboardLayout = {
  id: 'ka',
  name: 'Georgian',
  nativeName: 'ქართული',
  direction: 'ltr',
  fontFamily: 'Noto Sans Georgian, sans-serif',
  rows: [
    // Row 1: Number row
    {
      keys: [
        { id: 'ka-grave', label: '„', value: '„', shiftValue: '~', code: 'Backquote', type: 'character' },
        { id: 'ka-1', label: '1', value: '1', shiftValue: '!', code: 'Digit1', type: 'character' },
        { id: 'ka-2', label: '2', value: '2', shiftValue: '@', code: 'Digit2', type: 'character' },
        { id: 'ka-3', label: '3', value: '3', shiftValue: '#', code: 'Digit3', type: 'character' },
        { id: 'ka-4', label: '4', value: '4', shiftValue: '$', code: 'Digit4', type: 'character' },
        { id: 'ka-5', label: '5', value: '5', shiftValue: '%', code: 'Digit5', type: 'character' },
        { id: 'ka-6', label: '6', value: '6', shiftValue: '^', code: 'Digit6', type: 'character' },
        { id: 'ka-7', label: '7', value: '7', shiftValue: '&', code: 'Digit7', type: 'character' },
        { id: 'ka-8', label: '8', value: '8', shiftValue: '*', code: 'Digit8', type: 'character' },
        { id: 'ka-9', label: '9', value: '9', shiftValue: '(', code: 'Digit9', type: 'character' },
        { id: 'ka-0', label: '0', value: '0', shiftValue: ')', code: 'Digit0', type: 'character' },
        { id: 'ka-minus', label: '-', value: '-', shiftValue: '_', code: 'Minus', type: 'character' },
        { id: 'ka-equal', label: '=', value: '=', shiftValue: '+', code: 'Equal', type: 'character' },
        { id: 'ka-backspace', label: '⌫', value: 'Backspace', code: 'Backspace', type: 'action', width: 1.5 },
      ],
    },
    // Row 2: Top letter row
    {
      keys: [
        { id: 'ka-q', label: 'ქ', value: 'ქ', shiftValue: 'ქ', code: 'KeyQ', type: 'character' },
        { id: 'ka-w', label: 'წ', value: 'წ', shiftValue: 'წ', code: 'KeyW', type: 'character' },
        { id: 'ka-e', label: 'ე', value: 'ე', shiftValue: 'ე', code: 'KeyE', type: 'character' },
        { id: 'ka-r', label: 'რ', value: 'რ', shiftValue: 'რ', code: 'KeyR', type: 'character' },
        { id: 'ka-t', label: 'ტ', value: 'ტ', shiftValue: 'ტ', code: 'KeyT', type: 'character' },
        { id: 'ka-y', label: 'ყ', value: 'ყ', shiftValue: 'ყ', code: 'KeyY', type: 'character' },
        { id: 'ka-u', label: 'უ', value: 'უ', shiftValue: 'უ', code: 'KeyU', type: 'character' },
        { id: 'ka-i', label: 'ი', value: 'ი', shiftValue: 'ი', code: 'KeyI', type: 'character' },
        { id: 'ka-o', label: 'ო', value: 'ო', shiftValue: 'ო', code: 'KeyO', type: 'character' },
        { id: 'ka-p', label: 'პ', value: 'პ', shiftValue: 'პ', code: 'KeyP', type: 'character' },
        { id: 'ka-left', label: '[', value: '[', shiftValue: '{', code: 'BracketLeft', type: 'character' },
        { id: 'ka-right', label: ']', value: ']', shiftValue: '}', code: 'BracketRight', type: 'character' },
        { id: 'ka-backslash', label: '\\', value: '\\', shiftValue: '|', code: 'Backslash', type: 'character' },
      ],
    },
    // Row 3: Home row
    {
      keys: [
        { id: 'ka-a', label: 'ა', value: 'ა', shiftValue: 'ა', code: 'KeyA', type: 'character' },
        { id: 'ka-s', label: 'ს', value: 'ს', shiftValue: 'ს', code: 'KeyS', type: 'character' },
        { id: 'ka-d', label: 'დ', value: 'დ', shiftValue: 'დ', code: 'KeyD', type: 'character' },
        { id: 'ka-f', label: 'ფ', value: 'ფ', shiftValue: 'ფ', code: 'KeyF', type: 'character' },
        { id: 'ka-g', label: 'გ', value: 'გ', shiftValue: 'გ', code: 'KeyG', type: 'character' },
        { id: 'ka-h', label: 'ჰ', value: 'ჰ', shiftValue: 'ჰ', code: 'KeyH', type: 'character' },
        { id: 'ka-j', label: 'ჯ', value: 'ჯ', shiftValue: 'ჯ', code: 'KeyJ', type: 'character' },
        { id: 'ka-k', label: 'კ', value: 'კ', shiftValue: 'კ', code: 'KeyK', type: 'character' },
        { id: 'ka-l', label: 'ლ', value: 'ლ', shiftValue: 'ლ', code: 'KeyL', type: 'character' },
        { id: 'ka-semicolon', label: ';', value: ';', shiftValue: ':', code: 'Semicolon', type: 'character' },
        { id: 'ka-quote', label: "'", value: "'", shiftValue: '"', code: 'Quote', type: 'character' },
      ],
    },
    // Row 4: Bottom letter row
    {
      keys: [
        { id: 'ka-shift-left', label: '⇧', value: 'Shift', code: 'ShiftLeft', type: 'modifier', width: 1.5 },
        { id: 'ka-z', label: 'ზ', value: 'ზ', shiftValue: 'ზ', code: 'KeyZ', type: 'character' },
        { id: 'ka-x', label: 'ხ', value: 'ხ', shiftValue: 'ხ', code: 'KeyX', type: 'character' },
        { id: 'ka-c', label: 'ც', value: 'ც', shiftValue: 'ც', code: 'KeyC', type: 'character' },
        { id: 'ka-v', label: 'ვ', value: 'ვ', shiftValue: 'ვ', code: 'KeyV', type: 'character' },
        { id: 'ka-b', label: 'ბ', value: 'ბ', shiftValue: 'ბ', code: 'KeyB', type: 'character' },
        { id: 'ka-n', label: 'ნ', value: 'ნ', shiftValue: 'ნ', code: 'KeyN', type: 'character' },
        { id: 'ka-m', label: 'მ', value: 'მ', shiftValue: 'მ', code: 'KeyM', type: 'character' },
        { id: 'ka-comma', label: ',', value: ',', shiftValue: '<', code: 'Comma', type: 'character' },
        { id: 'ka-period', label: '.', value: '.', shiftValue: '>', code: 'Period', type: 'character' },
        { id: 'ka-slash', label: '/', value: '/', shiftValue: '?', code: 'Slash', type: 'character' },
        { id: 'ka-shift-right', label: '⇧', value: 'Shift', code: 'ShiftRight', type: 'modifier', width: 1.5 },
      ],
    },
    // Row 5: Space bar with additional letters
    {
      keys: [
        { id: 'ka-ch', label: 'ჩ', value: 'ჩ', shiftValue: 'ჩ', type: 'character', width: 1.5 },
        { id: 'ka-sh', label: 'შ', value: 'შ', shiftValue: 'შ', type: 'character', width: 1.5 },
        { id: 'ka-ts', label: 'ძ', value: 'ძ', shiftValue: 'ძ', type: 'character', width: 1.5 },
        { id: 'ka-space', label: 'Space', value: ' ', code: 'Space', type: 'space', width: 4 },
        { id: 'ka-gh', label: 'ღ', value: 'ღ', shiftValue: 'ღ', type: 'character', width: 1.5 },
        { id: 'ka-th', label: 'თ', value: 'თ', shiftValue: 'თ', type: 'character', width: 1.5 },
      ],
    },
  ],
  physicalKeyMap: {
    // Number row
    'Backquote': '„',
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
    'KeyQ': 'ქ',
    'KeyW': 'წ',
    'KeyE': 'ე',
    'KeyR': 'რ',
    'KeyT': 'ტ',
    'KeyY': 'ყ',
    'KeyU': 'უ',
    'KeyI': 'ი',
    'KeyO': 'ო',
    'KeyP': 'პ',
    'BracketLeft': '[',
    'BracketRight': ']',
    'Backslash': '\\',
    // Home row
    'KeyA': 'ა',
    'KeyS': 'ს',
    'KeyD': 'დ',
    'KeyF': 'ფ',
    'KeyG': 'გ',
    'KeyH': 'ჰ',
    'KeyJ': 'ჯ',
    'KeyK': 'კ',
    'KeyL': 'ლ',
    'Semicolon': ';',
    'Quote': "'",
    // Bottom row
    'KeyZ': 'ზ',
    'KeyX': 'ხ',
    'KeyC': 'ც',
    'KeyV': 'ვ',
    'KeyB': 'ბ',
    'KeyN': 'ნ',
    'KeyM': 'მ',
    'Comma': ',',
    'Period': '.',
    'Slash': '/',
    'Space': ' ',
  },
};
