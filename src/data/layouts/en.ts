/**
 * English (US) Keyboard Layout - QWERTY Standard
 */

import type { KeyboardLayout } from '@/types/keyboard';

export const englishLayout: KeyboardLayout = {
  id: 'en',
  name: 'English (US)',
  nativeName: 'English (US)',
  direction: 'ltr',
  fontFamily: 'system-ui, sans-serif',
  rows: [
    {
      keys: [
        { id: 'en-backtick', label: '`', value: '`', shiftValue: '~', code: 'Backquote', type: 'character' },
        { id: 'en-1', label: '1', value: '1', shiftValue: '!', code: 'Digit1', type: 'character' },
        { id: 'en-2', label: '2', value: '2', shiftValue: '@', code: 'Digit2', type: 'character' },
        { id: 'en-3', label: '3', value: '3', shiftValue: '#', code: 'Digit3', type: 'character' },
        { id: 'en-4', label: '4', value: '4', shiftValue: '$', code: 'Digit4', type: 'character' },
        { id: 'en-5', label: '5', value: '5', shiftValue: '%', code: 'Digit5', type: 'character' },
        { id: 'en-6', label: '6', value: '6', shiftValue: '^', code: 'Digit6', type: 'character' },
        { id: 'en-7', label: '7', value: '7', shiftValue: '&', code: 'Digit7', type: 'character' },
        { id: 'en-8', label: '8', value: '8', shiftValue: '*', code: 'Digit8', type: 'character' },
        { id: 'en-9', label: '9', value: '9', shiftValue: '(', code: 'Digit9', type: 'character' },
        { id: 'en-0', label: '0', value: '0', shiftValue: ')', code: 'Digit0', type: 'character' },
        { id: 'en-minus', label: '-', value: '-', shiftValue: '_', code: 'Minus', type: 'character' },
        { id: 'en-equal', label: '=', value: '=', shiftValue: '+', code: 'Equal', type: 'character' },
        { id: 'en-backspace', label: '⌫', value: 'Backspace', code: 'Backspace', type: 'action', width: 1.5 },
      ],
    },
    {
      keys: [
        { id: 'en-tab', label: 'Tab', value: 'Tab', code: 'Tab', type: 'action', width: 1.5 },
        { id: 'en-q', label: 'q', value: 'q', shiftValue: 'Q', code: 'KeyQ', type: 'character' },
        { id: 'en-w', label: 'w', value: 'w', shiftValue: 'W', code: 'KeyW', type: 'character' },
        { id: 'en-e', label: 'e', value: 'e', shiftValue: 'E', code: 'KeyE', type: 'character' },
        { id: 'en-r', label: 'r', value: 'r', shiftValue: 'R', code: 'KeyR', type: 'character' },
        { id: 'en-t', label: 't', value: 't', shiftValue: 'T', code: 'KeyT', type: 'character' },
        { id: 'en-y', label: 'y', value: 'y', shiftValue: 'Y', code: 'KeyY', type: 'character' },
        { id: 'en-u', label: 'u', value: 'u', shiftValue: 'U', code: 'KeyU', type: 'character' },
        { id: 'en-i', label: 'i', value: 'i', shiftValue: 'I', code: 'KeyI', type: 'character' },
        { id: 'en-o', label: 'o', value: 'o', shiftValue: 'O', code: 'KeyO', type: 'character' },
        { id: 'en-p', label: 'p', value: 'p', shiftValue: 'P', code: 'KeyP', type: 'character' },
        { id: 'en-bracketleft', label: '[', value: '[', shiftValue: '{', code: 'BracketLeft', type: 'character' },
        { id: 'en-bracketright', label: ']', value: ']', shiftValue: '}', code: 'BracketRight', type: 'character' },
      ],
    },
    {
      keys: [
        { id: 'en-caps', label: 'Caps', value: 'CapsLock', code: 'CapsLock', type: 'modifier', width: 1.8 },
        { id: 'en-a', label: 'a', value: 'a', shiftValue: 'A', code: 'KeyA', type: 'character' },
        { id: 'en-s', label: 's', value: 's', shiftValue: 'S', code: 'KeyS', type: 'character' },
        { id: 'en-d', label: 'd', value: 'd', shiftValue: 'D', code: 'KeyD', type: 'character' },
        { id: 'en-f', label: 'f', value: 'f', shiftValue: 'F', code: 'KeyF', type: 'character' },
        { id: 'en-g', label: 'g', value: 'g', shiftValue: 'G', code: 'KeyG', type: 'character' },
        { id: 'en-h', label: 'h', value: 'h', shiftValue: 'H', code: 'KeyH', type: 'character' },
        { id: 'en-j', label: 'j', value: 'j', shiftValue: 'J', code: 'KeyJ', type: 'character' },
        { id: 'en-k', label: 'k', value: 'k', shiftValue: 'K', code: 'KeyK', type: 'character' },
        { id: 'en-l', label: 'l', value: 'l', shiftValue: 'L', code: 'KeyL', type: 'character' },
        { id: 'en-semicolon', label: ';', value: ';', shiftValue: ':', code: 'Semicolon', type: 'character' },
        { id: 'en-quote', label: "'", value: "'", shiftValue: '"', code: 'Quote', type: 'character' },
        { id: 'en-enter', label: 'Enter', value: 'Enter', code: 'Enter', type: 'action', width: 1.8 },
      ],
    },
    {
      keys: [
        { id: 'en-shift-left', label: '⇧', value: 'Shift', code: 'ShiftLeft', type: 'modifier', width: 2.3 },
        { id: 'en-z', label: 'z', value: 'z', shiftValue: 'Z', code: 'KeyZ', type: 'character' },
        { id: 'en-x', label: 'x', value: 'x', shiftValue: 'X', code: 'KeyX', type: 'character' },
        { id: 'en-c', label: 'c', value: 'c', shiftValue: 'C', code: 'KeyC', type: 'character' },
        { id: 'en-v', label: 'v', value: 'v', shiftValue: 'V', code: 'KeyV', type: 'character' },
        { id: 'en-b', label: 'b', value: 'b', shiftValue: 'B', code: 'KeyB', type: 'character' },
        { id: 'en-n', label: 'n', value: 'n', shiftValue: 'N', code: 'KeyN', type: 'character' },
        { id: 'en-m', label: 'm', value: 'm', shiftValue: 'M', code: 'KeyM', type: 'character' },
        { id: 'en-comma', label: ',', value: ',', shiftValue: '<', code: 'Comma', type: 'character' },
        { id: 'en-period', label: '.', value: '.', shiftValue: '>', code: 'Period', type: 'character' },
        { id: 'en-slash', label: '/', value: '/', shiftValue: '?', code: 'Slash', type: 'character' },
        { id: 'en-shift-right', label: '⇧', value: 'Shift', code: 'ShiftRight', type: 'modifier', width: 2.3 },
      ],
    },
    {
      keys: [
        { id: 'en-space', label: 'Space', value: ' ', code: 'Space', type: 'space', width: 6 },
      ],
    },
  ],
  physicalKeyMap: {
    'Backquote': '`', 'Digit1': '1', 'Digit2': '2', 'Digit3': '3', 'Digit4': '4',
    'Digit5': '5', 'Digit6': '6', 'Digit7': '7', 'Digit8': '8', 'Digit9': '9',
    'Digit0': '0', 'Minus': '-', 'Equal': '=',
    'KeyQ': 'q', 'KeyW': 'w', 'KeyE': 'e', 'KeyR': 'r', 'KeyT': 't',
    'KeyY': 'y', 'KeyU': 'u', 'KeyI': 'i', 'KeyO': 'o', 'KeyP': 'p',
    'BracketLeft': '[', 'BracketRight': ']',
    'KeyA': 'a', 'KeyS': 's', 'KeyD': 'd', 'KeyF': 'f', 'KeyG': 'g',
    'KeyH': 'h', 'KeyJ': 'j', 'KeyK': 'k', 'KeyL': 'l',
    'Semicolon': ';', 'Quote': "'",
    'KeyZ': 'z', 'KeyX': 'x', 'KeyC': 'c', 'KeyV': 'v', 'KeyB': 'b',
    'KeyN': 'n', 'KeyM': 'm', 'Comma': ',', 'Period': '.', 'Slash': '/',
    'Space': ' ',
  },
};
