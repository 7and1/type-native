/**
 * Polish Keyboard Layout - QWERTY with Polish diacritics
 */

import type { KeyboardLayout } from '@/types/keyboard';

export const polishLayout: KeyboardLayout = {
  id: 'pl',
  name: 'Polish',
  nativeName: 'Polski',
  direction: 'ltr',
  fontFamily: 'system-ui, sans-serif',
  rows: [
    {
      keys: [
        { id: 'pl-backtick', label: '`', value: '`', shiftValue: '~', code: 'Backquote', type: 'character' },
        { id: 'pl-1', label: '1', value: '1', shiftValue: '!', code: 'Digit1', type: 'character' },
        { id: 'pl-2', label: '2', value: '2', shiftValue: '@', code: 'Digit2', type: 'character' },
        { id: 'pl-3', label: '3', value: '3', shiftValue: '#', code: 'Digit3', type: 'character' },
        { id: 'pl-4', label: '4', value: '4', shiftValue: '$', code: 'Digit4', type: 'character' },
        { id: 'pl-5', label: '5', value: '5', shiftValue: '%', code: 'Digit5', type: 'character' },
        { id: 'pl-6', label: '6', value: '6', shiftValue: '^', code: 'Digit6', type: 'character' },
        { id: 'pl-7', label: '7', value: '7', shiftValue: '&', code: 'Digit7', type: 'character' },
        { id: 'pl-8', label: '8', value: '8', shiftValue: '*', code: 'Digit8', type: 'character' },
        { id: 'pl-9', label: '9', value: '9', shiftValue: '(', code: 'Digit9', type: 'character' },
        { id: 'pl-0', label: '0', value: '0', shiftValue: ')', code: 'Digit0', type: 'character' },
        { id: 'pl-minus', label: '-', value: '-', shiftValue: '_', code: 'Minus', type: 'character' },
        { id: 'pl-equal', label: '=', value: '=', shiftValue: '+', code: 'Equal', type: 'character' },
        { id: 'pl-backspace', label: '⌫', value: 'Backspace', code: 'Backspace', type: 'action', width: 1.5 },
      ],
    },
    {
      keys: [
        { id: 'pl-tab', label: 'Tab', value: 'Tab', code: 'Tab', type: 'action', width: 1.5 },
        { id: 'pl-q', label: 'q', value: 'q', shiftValue: 'Q', code: 'KeyQ', type: 'character' },
        { id: 'pl-w', label: 'w', value: 'w', shiftValue: 'W', code: 'KeyW', type: 'character' },
        { id: 'pl-e', label: 'e', value: 'e', shiftValue: 'E', code: 'KeyE', type: 'character' },
        { id: 'pl-r', label: 'r', value: 'r', shiftValue: 'R', code: 'KeyR', type: 'character' },
        { id: 'pl-t', label: 't', value: 't', shiftValue: 'T', code: 'KeyT', type: 'character' },
        { id: 'pl-y', label: 'y', value: 'y', shiftValue: 'Y', code: 'KeyY', type: 'character' },
        { id: 'pl-u', label: 'u', value: 'u', shiftValue: 'U', code: 'KeyU', type: 'character' },
        { id: 'pl-i', label: 'i', value: 'i', shiftValue: 'I', code: 'KeyI', type: 'character' },
        { id: 'pl-o', label: 'o', value: 'o', shiftValue: 'O', code: 'KeyO', type: 'character' },
        { id: 'pl-p', label: 'p', value: 'p', shiftValue: 'P', code: 'KeyP', type: 'character' },
        { id: 'pl-bracketleft', label: '[', value: '[', shiftValue: '{', code: 'BracketLeft', type: 'character' },
        { id: 'pl-bracketright', label: ']', value: ']', shiftValue: '}', code: 'BracketRight', type: 'character' },
      ],
    },
    {
      keys: [
        { id: 'pl-caps', label: 'Caps', value: 'CapsLock', code: 'CapsLock', type: 'modifier', width: 1.8 },
        { id: 'pl-a', label: 'a', value: 'a', shiftValue: 'A', code: 'KeyA', type: 'character' },
        { id: 'pl-s', label: 's', value: 's', shiftValue: 'S', code: 'KeyS', type: 'character' },
        { id: 'pl-d', label: 'd', value: 'd', shiftValue: 'D', code: 'KeyD', type: 'character' },
        { id: 'pl-f', label: 'f', value: 'f', shiftValue: 'F', code: 'KeyF', type: 'character' },
        { id: 'pl-g', label: 'g', value: 'g', shiftValue: 'G', code: 'KeyG', type: 'character' },
        { id: 'pl-h', label: 'h', value: 'h', shiftValue: 'H', code: 'KeyH', type: 'character' },
        { id: 'pl-j', label: 'j', value: 'j', shiftValue: 'J', code: 'KeyJ', type: 'character' },
        { id: 'pl-k', label: 'k', value: 'k', shiftValue: 'K', code: 'KeyK', type: 'character' },
        { id: 'pl-l', label: 'l', value: 'l', shiftValue: 'L', code: 'KeyL', type: 'character' },
        { id: 'pl-semicolon', label: ';', value: ';', shiftValue: ':', code: 'Semicolon', type: 'character' },
        { id: 'pl-quote', label: "'", value: "'", shiftValue: '"', code: 'Quote', type: 'character' },
        { id: 'pl-enter', label: 'Enter', value: 'Enter', code: 'Enter', type: 'action', width: 1.8 },
      ],
    },
    {
      keys: [
        { id: 'pl-shift-left', label: '⇧', value: 'Shift', code: 'ShiftLeft', type: 'modifier', width: 2.3 },
        { id: 'pl-z', label: 'z', value: 'z', shiftValue: 'Z', code: 'KeyZ', type: 'character' },
        { id: 'pl-x', label: 'x', value: 'x', shiftValue: 'X', code: 'KeyX', type: 'character' },
        { id: 'pl-c', label: 'c', value: 'c', shiftValue: 'C', code: 'KeyC', type: 'character' },
        { id: 'pl-v', label: 'v', value: 'v', shiftValue: 'V', code: 'KeyV', type: 'character' },
        { id: 'pl-b', label: 'b', value: 'b', shiftValue: 'B', code: 'KeyB', type: 'character' },
        { id: 'pl-n', label: 'n', value: 'n', shiftValue: 'N', code: 'KeyN', type: 'character' },
        { id: 'pl-m', label: 'm', value: 'm', shiftValue: 'M', code: 'KeyM', type: 'character' },
        { id: 'pl-comma', label: ',', value: ',', shiftValue: '<', code: 'Comma', type: 'character' },
        { id: 'pl-period', label: '.', value: '.', shiftValue: '>', code: 'Period', type: 'character' },
        { id: 'pl-slash', label: '/', value: '/', shiftValue: '?', code: 'Slash', type: 'character' },
        { id: 'pl-shift-right', label: '⇧', value: 'Shift', code: 'ShiftRight', type: 'modifier', width: 2.3 },
      ],
    },
    {
      keys: [
        { id: 'pl-space', label: 'Spacja', value: ' ', code: 'Space', type: 'space', width: 6 },
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
