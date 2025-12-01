/**
 * Turkmen Keyboard Layout - Turkish-style QWERTY
 */

import type { KeyboardLayout } from '@/types/keyboard';

export const turkmenLayout: KeyboardLayout = {
  id: 'tk',
  name: 'Turkmen',
  nativeName: 'Türkmençe',
  direction: 'ltr',
  fontFamily: 'system-ui, sans-serif',
  rows: [
    {
      keys: [
        { id: 'tk-backtick', label: '"', value: '"', shiftValue: 'é', code: 'Backquote', type: 'character' },
        { id: 'tk-1', label: '1', value: '1', shiftValue: '!', code: 'Digit1', type: 'character' },
        { id: 'tk-2', label: '2', value: '2', shiftValue: "'", code: 'Digit2', type: 'character' },
        { id: 'tk-3', label: '3', value: '3', shiftValue: '^', code: 'Digit3', type: 'character' },
        { id: 'tk-4', label: '4', value: '4', shiftValue: '+', code: 'Digit4', type: 'character' },
        { id: 'tk-5', label: '5', value: '5', shiftValue: '%', code: 'Digit5', type: 'character' },
        { id: 'tk-6', label: '6', value: '6', shiftValue: '&', code: 'Digit6', type: 'character' },
        { id: 'tk-7', label: '7', value: '7', shiftValue: '/', code: 'Digit7', type: 'character' },
        { id: 'tk-8', label: '8', value: '8', shiftValue: '(', code: 'Digit8', type: 'character' },
        { id: 'tk-9', label: '9', value: '9', shiftValue: ')', code: 'Digit9', type: 'character' },
        { id: 'tk-0', label: '0', value: '0', shiftValue: '=', code: 'Digit0', type: 'character' },
        { id: 'tk-minus', label: '*', value: '*', shiftValue: '?', code: 'Minus', type: 'character' },
        { id: 'tk-equal', label: '-', value: '-', shiftValue: '_', code: 'Equal', type: 'character' },
        { id: 'tk-backspace', label: '⌫', value: 'Backspace', code: 'Backspace', type: 'action', width: 1.5 },
      ],
    },
    {
      keys: [
        { id: 'tk-tab', label: 'Tab', value: 'Tab', code: 'Tab', type: 'action', width: 1.5 },
        { id: 'tk-q', label: 'q', value: 'q', shiftValue: 'Q', code: 'KeyQ', type: 'character' },
        { id: 'tk-w', label: 'w', value: 'w', shiftValue: 'W', code: 'KeyW', type: 'character' },
        { id: 'tk-e', label: 'e', value: 'e', shiftValue: 'E', code: 'KeyE', type: 'character' },
        { id: 'tk-r', label: 'r', value: 'r', shiftValue: 'R', code: 'KeyR', type: 'character' },
        { id: 'tk-t', label: 't', value: 't', shiftValue: 'T', code: 'KeyT', type: 'character' },
        { id: 'tk-y', label: 'y', value: 'y', shiftValue: 'Y', code: 'KeyY', type: 'character' },
        { id: 'tk-u', label: 'u', value: 'u', shiftValue: 'U', code: 'KeyU', type: 'character' },
        { id: 'tk-i', label: 'i', value: 'i', shiftValue: 'I', code: 'KeyI', type: 'character' },
        { id: 'tk-o', label: 'o', value: 'o', shiftValue: 'O', code: 'KeyO', type: 'character' },
        { id: 'tk-p', label: 'p', value: 'p', shiftValue: 'P', code: 'KeyP', type: 'character' },
        { id: 'tk-bracketleft', label: 'ň', value: 'ň', shiftValue: 'Ň', code: 'BracketLeft', type: 'character' },
        { id: 'tk-bracketright', label: 'ü', value: 'ü', shiftValue: 'Ü', code: 'BracketRight', type: 'character' },
      ],
    },
    {
      keys: [
        { id: 'tk-caps', label: 'Caps', value: 'CapsLock', code: 'CapsLock', type: 'modifier', width: 1.8 },
        { id: 'tk-a', label: 'a', value: 'a', shiftValue: 'A', code: 'KeyA', type: 'character' },
        { id: 'tk-s', label: 's', value: 's', shiftValue: 'S', code: 'KeyS', type: 'character' },
        { id: 'tk-d', label: 'd', value: 'd', shiftValue: 'D', code: 'KeyD', type: 'character' },
        { id: 'tk-f', label: 'f', value: 'f', shiftValue: 'F', code: 'KeyF', type: 'character' },
        { id: 'tk-g', label: 'g', value: 'g', shiftValue: 'G', code: 'KeyG', type: 'character' },
        { id: 'tk-h', label: 'h', value: 'h', shiftValue: 'H', code: 'KeyH', type: 'character' },
        { id: 'tk-j', label: 'j', value: 'j', shiftValue: 'J', code: 'KeyJ', type: 'character' },
        { id: 'tk-k', label: 'k', value: 'k', shiftValue: 'K', code: 'KeyK', type: 'character' },
        { id: 'tk-l', label: 'l', value: 'l', shiftValue: 'L', code: 'KeyL', type: 'character' },
        { id: 'tk-semicolon', label: 'ş', value: 'ş', shiftValue: 'Ş', code: 'Semicolon', type: 'character' },
        { id: 'tk-quote', label: 'ä', value: 'ä', shiftValue: 'Ä', code: 'Quote', type: 'character' },
        { id: 'tk-enter', label: 'Enter', value: 'Enter', code: 'Enter', type: 'action', width: 1.8 },
      ],
    },
    {
      keys: [
        { id: 'tk-shift-left', label: '⇧', value: 'Shift', code: 'ShiftLeft', type: 'modifier', width: 2.3 },
        { id: 'tk-z', label: 'z', value: 'z', shiftValue: 'Z', code: 'KeyZ', type: 'character' },
        { id: 'tk-x', label: 'ž', value: 'ž', shiftValue: 'Ž', code: 'KeyX', type: 'character' },
        { id: 'tk-c', label: 'ç', value: 'ç', shiftValue: 'Ç', code: 'KeyC', type: 'character' },
        { id: 'tk-v', label: 'v', value: 'v', shiftValue: 'V', code: 'KeyV', type: 'character' },
        { id: 'tk-b', label: 'b', value: 'b', shiftValue: 'B', code: 'KeyB', type: 'character' },
        { id: 'tk-n', label: 'n', value: 'n', shiftValue: 'N', code: 'KeyN', type: 'character' },
        { id: 'tk-m', label: 'm', value: 'm', shiftValue: 'M', code: 'KeyM', type: 'character' },
        { id: 'tk-comma', label: 'ö', value: 'ö', shiftValue: 'Ö', code: 'Comma', type: 'character' },
        { id: 'tk-period', label: 'ý', value: 'ý', shiftValue: 'Ý', code: 'Period', type: 'character' },
        { id: 'tk-slash', label: '.', value: '.', shiftValue: ':', code: 'Slash', type: 'character' },
        { id: 'tk-shift-right', label: '⇧', value: 'Shift', code: 'ShiftRight', type: 'modifier', width: 2.3 },
      ],
    },
    {
      keys: [
        { id: 'tk-space', label: 'Space', value: ' ', code: 'Space', type: 'space', width: 6 },
      ],
    },
  ],
  physicalKeyMap: {
    'Backquote': '"', 'Digit1': '1', 'Digit2': '2', 'Digit3': '3', 'Digit4': '4',
    'Digit5': '5', 'Digit6': '6', 'Digit7': '7', 'Digit8': '8', 'Digit9': '9',
    'Digit0': '0', 'Minus': '*', 'Equal': '-',
    'KeyQ': 'q', 'KeyW': 'w', 'KeyE': 'e', 'KeyR': 'r', 'KeyT': 't',
    'KeyY': 'y', 'KeyU': 'u', 'KeyI': 'i', 'KeyO': 'o', 'KeyP': 'p',
    'BracketLeft': 'ň', 'BracketRight': 'ü',
    'KeyA': 'a', 'KeyS': 's', 'KeyD': 'd', 'KeyF': 'f', 'KeyG': 'g',
    'KeyH': 'h', 'KeyJ': 'j', 'KeyK': 'k', 'KeyL': 'l',
    'Semicolon': 'ş', 'Quote': 'ä',
    'KeyZ': 'z', 'KeyX': 'ž', 'KeyC': 'ç', 'KeyV': 'v', 'KeyB': 'b',
    'KeyN': 'n', 'KeyM': 'm', 'Comma': 'ö', 'Period': 'ý', 'Slash': '.',
    'Space': ' ',
  },
};
