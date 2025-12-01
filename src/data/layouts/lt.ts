/**
 * Lithuanian Keyboard Layout - QWERTY with Lithuanian diacritics
 */

import type { KeyboardLayout } from '@/types/keyboard';

export const lithuanianLayout: KeyboardLayout = {
  id: 'lt',
  name: 'Lithuanian',
  nativeName: 'Lietuvių',
  direction: 'ltr',
  fontFamily: 'system-ui, sans-serif',
  rows: [
    {
      keys: [
        { id: 'lt-backtick', label: '`', value: '`', shiftValue: '~', code: 'Backquote', type: 'character' },
        { id: 'lt-1', label: 'ą', value: 'ą', shiftValue: 'Ą', code: 'Digit1', type: 'character' },
        { id: 'lt-2', label: 'č', value: 'č', shiftValue: 'Č', code: 'Digit2', type: 'character' },
        { id: 'lt-3', label: 'ę', value: 'ę', shiftValue: 'Ę', code: 'Digit3', type: 'character' },
        { id: 'lt-4', label: 'ė', value: 'ė', shiftValue: 'Ė', code: 'Digit4', type: 'character' },
        { id: 'lt-5', label: 'į', value: 'į', shiftValue: 'Į', code: 'Digit5', type: 'character' },
        { id: 'lt-6', label: 'š', value: 'š', shiftValue: 'Š', code: 'Digit6', type: 'character' },
        { id: 'lt-7', label: 'ų', value: 'ų', shiftValue: 'Ų', code: 'Digit7', type: 'character' },
        { id: 'lt-8', label: 'ū', value: 'ū', shiftValue: 'Ū', code: 'Digit8', type: 'character' },
        { id: 'lt-9', label: '9', value: '9', shiftValue: '(', code: 'Digit9', type: 'character' },
        { id: 'lt-0', label: '0', value: '0', shiftValue: ')', code: 'Digit0', type: 'character' },
        { id: 'lt-minus', label: 'ž', value: 'ž', shiftValue: 'Ž', code: 'Minus', type: 'character' },
        { id: 'lt-equal', label: '=', value: '=', shiftValue: '+', code: 'Equal', type: 'character' },
        { id: 'lt-backspace', label: '⌫', value: 'Backspace', code: 'Backspace', type: 'action', width: 1.5 },
      ],
    },
    {
      keys: [
        { id: 'lt-tab', label: 'Tab', value: 'Tab', code: 'Tab', type: 'action', width: 1.5 },
        { id: 'lt-q', label: 'q', value: 'q', shiftValue: 'Q', code: 'KeyQ', type: 'character' },
        { id: 'lt-w', label: 'w', value: 'w', shiftValue: 'W', code: 'KeyW', type: 'character' },
        { id: 'lt-e', label: 'e', value: 'e', shiftValue: 'E', code: 'KeyE', type: 'character' },
        { id: 'lt-r', label: 'r', value: 'r', shiftValue: 'R', code: 'KeyR', type: 'character' },
        { id: 'lt-t', label: 't', value: 't', shiftValue: 'T', code: 'KeyT', type: 'character' },
        { id: 'lt-y', label: 'y', value: 'y', shiftValue: 'Y', code: 'KeyY', type: 'character' },
        { id: 'lt-u', label: 'u', value: 'u', shiftValue: 'U', code: 'KeyU', type: 'character' },
        { id: 'lt-i', label: 'i', value: 'i', shiftValue: 'I', code: 'KeyI', type: 'character' },
        { id: 'lt-o', label: 'o', value: 'o', shiftValue: 'O', code: 'KeyO', type: 'character' },
        { id: 'lt-p', label: 'p', value: 'p', shiftValue: 'P', code: 'KeyP', type: 'character' },
        { id: 'lt-bracket-left', label: '[', value: '[', shiftValue: '{', code: 'BracketLeft', type: 'character' },
        { id: 'lt-bracket-right', label: ']', value: ']', shiftValue: '}', code: 'BracketRight', type: 'character' },
      ],
    },
    {
      keys: [
        { id: 'lt-caps', label: 'Caps', value: 'CapsLock', code: 'CapsLock', type: 'modifier', width: 1.8 },
        { id: 'lt-a', label: 'a', value: 'a', shiftValue: 'A', code: 'KeyA', type: 'character' },
        { id: 'lt-s', label: 's', value: 's', shiftValue: 'S', code: 'KeyS', type: 'character' },
        { id: 'lt-d', label: 'd', value: 'd', shiftValue: 'D', code: 'KeyD', type: 'character' },
        { id: 'lt-f', label: 'f', value: 'f', shiftValue: 'F', code: 'KeyF', type: 'character' },
        { id: 'lt-g', label: 'g', value: 'g', shiftValue: 'G', code: 'KeyG', type: 'character' },
        { id: 'lt-h', label: 'h', value: 'h', shiftValue: 'H', code: 'KeyH', type: 'character' },
        { id: 'lt-j', label: 'j', value: 'j', shiftValue: 'J', code: 'KeyJ', type: 'character' },
        { id: 'lt-k', label: 'k', value: 'k', shiftValue: 'K', code: 'KeyK', type: 'character' },
        { id: 'lt-l', label: 'l', value: 'l', shiftValue: 'L', code: 'KeyL', type: 'character' },
        { id: 'lt-semicolon', label: ';', value: ';', shiftValue: ':', code: 'Semicolon', type: 'character' },
        { id: 'lt-quote', label: "'", value: "'", shiftValue: '"', code: 'Quote', type: 'character' },
        { id: 'lt-enter', label: 'Enter', value: 'Enter', code: 'Enter', type: 'action', width: 1.8 },
      ],
    },
    {
      keys: [
        { id: 'lt-shift-left', label: '⇧', value: 'Shift', code: 'ShiftLeft', type: 'modifier', width: 2.3 },
        { id: 'lt-z', label: 'z', value: 'z', shiftValue: 'Z', code: 'KeyZ', type: 'character' },
        { id: 'lt-x', label: 'x', value: 'x', shiftValue: 'X', code: 'KeyX', type: 'character' },
        { id: 'lt-c', label: 'c', value: 'c', shiftValue: 'C', code: 'KeyC', type: 'character' },
        { id: 'lt-v', label: 'v', value: 'v', shiftValue: 'V', code: 'KeyV', type: 'character' },
        { id: 'lt-b', label: 'b', value: 'b', shiftValue: 'B', code: 'KeyB', type: 'character' },
        { id: 'lt-n', label: 'n', value: 'n', shiftValue: 'N', code: 'KeyN', type: 'character' },
        { id: 'lt-m', label: 'm', value: 'm', shiftValue: 'M', code: 'KeyM', type: 'character' },
        { id: 'lt-comma', label: ',', value: ',', shiftValue: '<', code: 'Comma', type: 'character' },
        { id: 'lt-period', label: '.', value: '.', shiftValue: '>', code: 'Period', type: 'character' },
        { id: 'lt-slash', label: '/', value: '/', shiftValue: '?', code: 'Slash', type: 'character' },
        { id: 'lt-shift-right', label: '⇧', value: 'Shift', code: 'ShiftRight', type: 'modifier', width: 2.3 },
      ],
    },
    {
      keys: [
        { id: 'lt-space', label: 'Tarpas', value: ' ', code: 'Space', type: 'space', width: 6 },
      ],
    },
  ],
  physicalKeyMap: {
    'Backquote': '`', 'Digit1': 'ą', 'Digit2': 'č', 'Digit3': 'ę', 'Digit4': 'ė',
    'Digit5': 'į', 'Digit6': 'š', 'Digit7': 'ų', 'Digit8': 'ū', 'Digit9': '9',
    'Digit0': '0', 'Minus': 'ž', 'Equal': '=',
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
