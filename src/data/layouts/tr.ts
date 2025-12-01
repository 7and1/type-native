import type { KeyboardLayout } from '@/types/keyboard';

/**
 * Turkish F-Keyboard Layout
 * The F-keyboard is the standard Turkish keyboard layout
 * optimized for the Turkish language with ğ, ı, ö, ş, ü, ç characters
 */
export const turkishLayout: KeyboardLayout = {
  id: 'tr',
  name: 'Turkish',
  nativeName: 'Türkçe',
  direction: 'ltr',
  fontFamily: 'Noto Sans, sans-serif',
  rows: [
    // Row 1: Number row
    {
      keys: [
        { id: 'tr-plus', label: '+', value: '+', shiftValue: '*', code: 'Backquote', type: 'character' },
        { id: 'tr-1', label: '1', value: '1', shiftValue: '!', code: 'Digit1', type: 'character' },
        { id: 'tr-2', label: '2', value: '2', shiftValue: '"', code: 'Digit2', type: 'character' },
        { id: 'tr-3', label: '3', value: '3', shiftValue: '^', code: 'Digit3', type: 'character' },
        { id: 'tr-4', label: '4', value: '4', shiftValue: '$', code: 'Digit4', type: 'character' },
        { id: 'tr-5', label: '5', value: '5', shiftValue: '%', code: 'Digit5', type: 'character' },
        { id: 'tr-6', label: '6', value: '6', shiftValue: '&', code: 'Digit6', type: 'character' },
        { id: 'tr-7', label: '7', value: '7', shiftValue: "'", code: 'Digit7', type: 'character' },
        { id: 'tr-8', label: '8', value: '8', shiftValue: '(', code: 'Digit8', type: 'character' },
        { id: 'tr-9', label: '9', value: '9', shiftValue: ')', code: 'Digit9', type: 'character' },
        { id: 'tr-0', label: '0', value: '0', shiftValue: '=', code: 'Digit0', type: 'character' },
        { id: 'tr-slash', label: '/', value: '/', shiftValue: '?', code: 'Minus', type: 'character' },
        { id: 'tr-minus', label: '-', value: '-', shiftValue: '_', code: 'Equal', type: 'character' },
        { id: 'tr-backspace', label: '⌫', value: 'Backspace', code: 'Backspace', type: 'action', width: 1.5 },
      ],
    },
    // Row 2: F-keyboard top letter row
    {
      keys: [
        { id: 'tr-f', label: 'f', value: 'f', shiftValue: 'F', code: 'KeyQ', type: 'character' },
        { id: 'tr-g', label: 'g', value: 'g', shiftValue: 'G', code: 'KeyW', type: 'character' },
        { id: 'tr-gcaron', label: 'ğ', value: 'ğ', shiftValue: 'Ğ', code: 'KeyE', type: 'character' },
        { id: 'tr-idotless', label: 'ı', value: 'ı', shiftValue: 'I', code: 'KeyR', type: 'character' },
        { id: 'tr-o', label: 'o', value: 'o', shiftValue: 'O', code: 'KeyT', type: 'character' },
        { id: 'tr-d', label: 'd', value: 'd', shiftValue: 'D', code: 'KeyY', type: 'character' },
        { id: 'tr-r', label: 'r', value: 'r', shiftValue: 'R', code: 'KeyU', type: 'character' },
        { id: 'tr-n', label: 'n', value: 'n', shiftValue: 'N', code: 'KeyI', type: 'character' },
        { id: 'tr-h', label: 'h', value: 'h', shiftValue: 'H', code: 'KeyO', type: 'character' },
        { id: 'tr-p', label: 'p', value: 'p', shiftValue: 'P', code: 'KeyP', type: 'character' },
        { id: 'tr-q', label: 'q', value: 'q', shiftValue: 'Q', code: 'BracketLeft', type: 'character' },
        { id: 'tr-w', label: 'w', value: 'w', shiftValue: 'W', code: 'BracketRight', type: 'character' },
        { id: 'tr-x', label: 'x', value: 'x', shiftValue: 'X', code: 'Backslash', type: 'character' },
      ],
    },
    // Row 3: F-keyboard home row
    {
      keys: [
        { id: 'tr-u', label: 'u', value: 'u', shiftValue: 'U', code: 'KeyA', type: 'character' },
        { id: 'tr-i', label: 'i', value: 'i', shiftValue: 'İ', code: 'KeyS', type: 'character' },
        { id: 'tr-e', label: 'e', value: 'e', shiftValue: 'E', code: 'KeyD', type: 'character' },
        { id: 'tr-a', label: 'a', value: 'a', shiftValue: 'A', code: 'KeyF', type: 'character' },
        { id: 'tr-uumlaut', label: 'ü', value: 'ü', shiftValue: 'Ü', code: 'KeyG', type: 'character' },
        { id: 'tr-t', label: 't', value: 't', shiftValue: 'T', code: 'KeyH', type: 'character' },
        { id: 'tr-k', label: 'k', value: 'k', shiftValue: 'K', code: 'KeyJ', type: 'character' },
        { id: 'tr-m', label: 'm', value: 'm', shiftValue: 'M', code: 'KeyK', type: 'character' },
        { id: 'tr-l', label: 'l', value: 'l', shiftValue: 'L', code: 'KeyL', type: 'character' },
        { id: 'tr-y', label: 'y', value: 'y', shiftValue: 'Y', code: 'Semicolon', type: 'character' },
        { id: 'tr-scedilla', label: 'ş', value: 'ş', shiftValue: 'Ş', code: 'Quote', type: 'character' },
      ],
    },
    // Row 4: F-keyboard bottom letter row
    {
      keys: [
        { id: 'tr-shift-left', label: '⇧', value: 'Shift', code: 'ShiftLeft', type: 'modifier', width: 1.5 },
        { id: 'tr-j', label: 'j', value: 'j', shiftValue: 'J', code: 'KeyZ', type: 'character' },
        { id: 'tr-oumlaut', label: 'ö', value: 'ö', shiftValue: 'Ö', code: 'KeyX', type: 'character' },
        { id: 'tr-v', label: 'v', value: 'v', shiftValue: 'V', code: 'KeyC', type: 'character' },
        { id: 'tr-c', label: 'c', value: 'c', shiftValue: 'C', code: 'KeyV', type: 'character' },
        { id: 'tr-ccedilla', label: 'ç', value: 'ç', shiftValue: 'Ç', code: 'KeyB', type: 'character' },
        { id: 'tr-z', label: 'z', value: 'z', shiftValue: 'Z', code: 'KeyN', type: 'character' },
        { id: 'tr-s', label: 's', value: 's', shiftValue: 'S', code: 'KeyM', type: 'character' },
        { id: 'tr-b', label: 'b', value: 'b', shiftValue: 'B', code: 'Comma', type: 'character' },
        { id: 'tr-period', label: '.', value: '.', shiftValue: ':', code: 'Period', type: 'character' },
        { id: 'tr-comma', label: ',', value: ',', shiftValue: ';', code: 'Slash', type: 'character' },
        { id: 'tr-shift-right', label: '⇧', value: 'Shift', code: 'ShiftRight', type: 'modifier', width: 1.5 },
      ],
    },
    // Row 5: Space bar row
    {
      keys: [
        { id: 'tr-space', label: 'Space', value: ' ', code: 'Space', type: 'space', width: 10 },
      ],
    },
  ],
  physicalKeyMap: {
    // Number row
    'Backquote': '+',
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
    'Minus': '/',
    'Equal': '-',
    // Top letter row (F-keyboard)
    'KeyQ': 'f',
    'KeyW': 'g',
    'KeyE': 'ğ',
    'KeyR': 'ı',
    'KeyT': 'o',
    'KeyY': 'd',
    'KeyU': 'r',
    'KeyI': 'n',
    'KeyO': 'h',
    'KeyP': 'p',
    'BracketLeft': 'q',
    'BracketRight': 'w',
    'Backslash': 'x',
    // Home row (F-keyboard)
    'KeyA': 'u',
    'KeyS': 'i',
    'KeyD': 'e',
    'KeyF': 'a',
    'KeyG': 'ü',
    'KeyH': 't',
    'KeyJ': 'k',
    'KeyK': 'm',
    'KeyL': 'l',
    'Semicolon': 'y',
    'Quote': 'ş',
    // Bottom row (F-keyboard)
    'KeyZ': 'j',
    'KeyX': 'ö',
    'KeyC': 'v',
    'KeyV': 'c',
    'KeyB': 'ç',
    'KeyN': 'z',
    'KeyM': 's',
    'Comma': 'b',
    'Period': '.',
    'Slash': ',',
    'Space': ' ',
  },
};
