/**
 * Igbo Keyboard Layout - Latin-based with special characters
 */

import type { KeyboardLayout } from '@/types/keyboard';

export const igboLayout: KeyboardLayout = {
  id: 'ig',
  name: 'Igbo',
  nativeName: 'Igbo',
  direction: 'ltr',
  fontFamily: 'system-ui, sans-serif',
  rows: [
    {
      keys: [
        { id: 'ig-backtick', label: '`', value: '`', shiftValue: '~', code: 'Backquote', type: 'character' },
        { id: 'ig-1', label: '1', value: '1', shiftValue: '!', code: 'Digit1', type: 'character' },
        { id: 'ig-2', label: '2', value: '2', shiftValue: '@', code: 'Digit2', type: 'character' },
        { id: 'ig-3', label: '3', value: '3', shiftValue: '#', code: 'Digit3', type: 'character' },
        { id: 'ig-4', label: '4', value: '4', shiftValue: '$', code: 'Digit4', type: 'character' },
        { id: 'ig-5', label: '5', value: '5', shiftValue: '%', code: 'Digit5', type: 'character' },
        { id: 'ig-6', label: '6', value: '6', shiftValue: '^', code: 'Digit6', type: 'character' },
        { id: 'ig-7', label: '7', value: '7', shiftValue: '&', code: 'Digit7', type: 'character' },
        { id: 'ig-8', label: '8', value: '8', shiftValue: '*', code: 'Digit8', type: 'character' },
        { id: 'ig-9', label: '9', value: '9', shiftValue: '(', code: 'Digit9', type: 'character' },
        { id: 'ig-0', label: '0', value: '0', shiftValue: ')', code: 'Digit0', type: 'character' },
        { id: 'ig-minus', label: '-', value: '-', shiftValue: '_', code: 'Minus', type: 'character' },
        { id: 'ig-equal', label: '=', value: '=', shiftValue: '+', code: 'Equal', type: 'character' },
        { id: 'ig-backspace', label: '⌫', value: 'Backspace', code: 'Backspace', type: 'action', width: 1.5 },
      ],
    },
    {
      keys: [
        { id: 'ig-tab', label: 'Tab', value: 'Tab', code: 'Tab', type: 'action', width: 1.5 },
        { id: 'ig-q', label: 'Q', value: 'q', shiftValue: 'Q', code: 'KeyQ', type: 'character' },
        { id: 'ig-w', label: 'W', value: 'w', shiftValue: 'W', code: 'KeyW', type: 'character' },
        { id: 'ig-e', label: 'E', value: 'e', shiftValue: 'E', code: 'KeyE', type: 'character' },
        { id: 'ig-r', label: 'R', value: 'r', shiftValue: 'R', code: 'KeyR', type: 'character' },
        { id: 'ig-t', label: 'T', value: 't', shiftValue: 'T', code: 'KeyT', type: 'character' },
        { id: 'ig-y', label: 'Y', value: 'y', shiftValue: 'Y', code: 'KeyY', type: 'character' },
        { id: 'ig-u', label: 'U', value: 'u', shiftValue: 'U', code: 'KeyU', type: 'character' },
        { id: 'ig-i', label: 'I', value: 'i', shiftValue: 'I', code: 'KeyI', type: 'character' },
        { id: 'ig-o', label: 'O', value: 'o', shiftValue: 'O', code: 'KeyO', type: 'character' },
        { id: 'ig-p', label: 'P', value: 'p', shiftValue: 'P', code: 'KeyP', type: 'character' },
        { id: 'ig-bracketleft', label: 'Ị', value: 'ị', shiftValue: 'Ị', code: 'BracketLeft', type: 'character' },
        { id: 'ig-bracketright', label: 'Ọ', value: 'ọ', shiftValue: 'Ọ', code: 'BracketRight', type: 'character' },
      ],
    },
    {
      keys: [
        { id: 'ig-caps', label: 'Caps', value: 'CapsLock', code: 'CapsLock', type: 'modifier', width: 1.8 },
        { id: 'ig-a', label: 'A', value: 'a', shiftValue: 'A', code: 'KeyA', type: 'character' },
        { id: 'ig-s', label: 'S', value: 's', shiftValue: 'S', code: 'KeyS', type: 'character' },
        { id: 'ig-d', label: 'D', value: 'd', shiftValue: 'D', code: 'KeyD', type: 'character' },
        { id: 'ig-f', label: 'F', value: 'f', shiftValue: 'F', code: 'KeyF', type: 'character' },
        { id: 'ig-g', label: 'G', value: 'g', shiftValue: 'G', code: 'KeyG', type: 'character' },
        { id: 'ig-h', label: 'H', value: 'h', shiftValue: 'H', code: 'KeyH', type: 'character' },
        { id: 'ig-j', label: 'J', value: 'j', shiftValue: 'J', code: 'KeyJ', type: 'character' },
        { id: 'ig-k', label: 'K', value: 'k', shiftValue: 'K', code: 'KeyK', type: 'character' },
        { id: 'ig-l', label: 'L', value: 'l', shiftValue: 'L', code: 'KeyL', type: 'character' },
        { id: 'ig-semicolon', label: 'Ụ', value: 'ụ', shiftValue: 'Ụ', code: 'Semicolon', type: 'character' },
        { id: 'ig-quote', label: 'Ñ', value: 'ñ', shiftValue: 'Ñ', code: 'Quote', type: 'character' },
        { id: 'ig-enter', label: 'Enter', value: 'Enter', code: 'Enter', type: 'action', width: 1.8 },
      ],
    },
    {
      keys: [
        { id: 'ig-shift-left', label: '⇧', value: 'Shift', code: 'ShiftLeft', type: 'modifier', width: 2.3 },
        { id: 'ig-z', label: 'Z', value: 'z', shiftValue: 'Z', code: 'KeyZ', type: 'character' },
        { id: 'ig-x', label: 'X', value: 'x', shiftValue: 'X', code: 'KeyX', type: 'character' },
        { id: 'ig-c', label: 'C', value: 'c', shiftValue: 'C', code: 'KeyC', type: 'character' },
        { id: 'ig-v', label: 'V', value: 'v', shiftValue: 'V', code: 'KeyV', type: 'character' },
        { id: 'ig-b', label: 'B', value: 'b', shiftValue: 'B', code: 'KeyB', type: 'character' },
        { id: 'ig-n', label: 'N', value: 'n', shiftValue: 'N', code: 'KeyN', type: 'character' },
        { id: 'ig-m', label: 'M', value: 'm', shiftValue: 'M', code: 'KeyM', type: 'character' },
        { id: 'ig-comma', label: ',', value: ',', shiftValue: '<', code: 'Comma', type: 'character' },
        { id: 'ig-period', label: '.', value: '.', shiftValue: '>', code: 'Period', type: 'character' },
        { id: 'ig-slash', label: '/', value: '/', shiftValue: '?', code: 'Slash', type: 'character' },
        { id: 'ig-shift-right', label: '⇧', value: 'Shift', code: 'ShiftRight', type: 'modifier', width: 2.3 },
      ],
    },
    {
      keys: [
        { id: 'ig-space', label: 'Space', value: ' ', code: 'Space', type: 'space', width: 6 },
      ],
    },
  ],
  physicalKeyMap: {
    'Backquote': '`', 'Digit1': '1', 'Digit2': '2', 'Digit3': '3', 'Digit4': '4',
    'Digit5': '5', 'Digit6': '6', 'Digit7': '7', 'Digit8': '8', 'Digit9': '9',
    'Digit0': '0', 'Minus': '-', 'Equal': '=',
    'KeyQ': 'q', 'KeyW': 'w', 'KeyE': 'e', 'KeyR': 'r', 'KeyT': 't',
    'KeyY': 'y', 'KeyU': 'u', 'KeyI': 'i', 'KeyO': 'o', 'KeyP': 'p',
    'BracketLeft': 'ị', 'BracketRight': 'ọ',
    'KeyA': 'a', 'KeyS': 's', 'KeyD': 'd', 'KeyF': 'f', 'KeyG': 'g',
    'KeyH': 'h', 'KeyJ': 'j', 'KeyK': 'k', 'KeyL': 'l',
    'Semicolon': 'ụ', 'Quote': 'ñ',
    'KeyZ': 'z', 'KeyX': 'x', 'KeyC': 'c', 'KeyV': 'v', 'KeyB': 'b',
    'KeyN': 'n', 'KeyM': 'm', 'Comma': ',', 'Period': '.', 'Slash': '/',
    'Space': ' ',
  },
};
