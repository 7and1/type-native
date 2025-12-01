/**
 * Romanian Keyboard Layout - QWERTY with Romanian diacritics
 */

import type { KeyboardLayout } from '@/types/keyboard';

export const romanianLayout: KeyboardLayout = {
  id: 'ro',
  name: 'Romanian',
  nativeName: 'Română',
  direction: 'ltr',
  fontFamily: 'system-ui, sans-serif',
  rows: [
    {
      keys: [
        { id: 'ro-backtick', label: '`', value: '`', shiftValue: '~', code: 'Backquote', type: 'character' },
        { id: 'ro-1', label: '1', value: '1', shiftValue: '!', code: 'Digit1', type: 'character' },
        { id: 'ro-2', label: '2', value: '2', shiftValue: '@', code: 'Digit2', type: 'character' },
        { id: 'ro-3', label: '3', value: '3', shiftValue: '#', code: 'Digit3', type: 'character' },
        { id: 'ro-4', label: '4', value: '4', shiftValue: '$', code: 'Digit4', type: 'character' },
        { id: 'ro-5', label: '5', value: '5', shiftValue: '%', code: 'Digit5', type: 'character' },
        { id: 'ro-6', label: '6', value: '6', shiftValue: '^', code: 'Digit6', type: 'character' },
        { id: 'ro-7', label: '7', value: '7', shiftValue: '&', code: 'Digit7', type: 'character' },
        { id: 'ro-8', label: '8', value: '8', shiftValue: '*', code: 'Digit8', type: 'character' },
        { id: 'ro-9', label: '9', value: '9', shiftValue: '(', code: 'Digit9', type: 'character' },
        { id: 'ro-0', label: '0', value: '0', shiftValue: ')', code: 'Digit0', type: 'character' },
        { id: 'ro-minus', label: '-', value: '-', shiftValue: '_', code: 'Minus', type: 'character' },
        { id: 'ro-equal', label: '=', value: '=', shiftValue: '+', code: 'Equal', type: 'character' },
        { id: 'ro-backspace', label: '⌫', value: 'Backspace', code: 'Backspace', type: 'action', width: 1.5 },
      ],
    },
    {
      keys: [
        { id: 'ro-tab', label: 'Tab', value: 'Tab', code: 'Tab', type: 'action', width: 1.5 },
        { id: 'ro-q', label: 'q', value: 'q', shiftValue: 'Q', code: 'KeyQ', type: 'character' },
        { id: 'ro-w', label: 'w', value: 'w', shiftValue: 'W', code: 'KeyW', type: 'character' },
        { id: 'ro-e', label: 'e', value: 'e', shiftValue: 'E', code: 'KeyE', type: 'character' },
        { id: 'ro-r', label: 'r', value: 'r', shiftValue: 'R', code: 'KeyR', type: 'character' },
        { id: 'ro-t', label: 't', value: 't', shiftValue: 'T', code: 'KeyT', type: 'character' },
        { id: 'ro-y', label: 'y', value: 'y', shiftValue: 'Y', code: 'KeyY', type: 'character' },
        { id: 'ro-u', label: 'u', value: 'u', shiftValue: 'U', code: 'KeyU', type: 'character' },
        { id: 'ro-i', label: 'i', value: 'i', shiftValue: 'I', code: 'KeyI', type: 'character' },
        { id: 'ro-o', label: 'o', value: 'o', shiftValue: 'O', code: 'KeyO', type: 'character' },
        { id: 'ro-p', label: 'p', value: 'p', shiftValue: 'P', code: 'KeyP', type: 'character' },
        { id: 'ro-abreve', label: 'ă', value: 'ă', shiftValue: 'Ă', code: 'BracketLeft', type: 'character' },
        { id: 'ro-icircum', label: 'î', value: 'î', shiftValue: 'Î', code: 'BracketRight', type: 'character' },
      ],
    },
    {
      keys: [
        { id: 'ro-caps', label: 'Caps', value: 'CapsLock', code: 'CapsLock', type: 'modifier', width: 1.8 },
        { id: 'ro-a', label: 'a', value: 'a', shiftValue: 'A', code: 'KeyA', type: 'character' },
        { id: 'ro-s', label: 's', value: 's', shiftValue: 'S', code: 'KeyS', type: 'character' },
        { id: 'ro-d', label: 'd', value: 'd', shiftValue: 'D', code: 'KeyD', type: 'character' },
        { id: 'ro-f', label: 'f', value: 'f', shiftValue: 'F', code: 'KeyF', type: 'character' },
        { id: 'ro-g', label: 'g', value: 'g', shiftValue: 'G', code: 'KeyG', type: 'character' },
        { id: 'ro-h', label: 'h', value: 'h', shiftValue: 'H', code: 'KeyH', type: 'character' },
        { id: 'ro-j', label: 'j', value: 'j', shiftValue: 'J', code: 'KeyJ', type: 'character' },
        { id: 'ro-k', label: 'k', value: 'k', shiftValue: 'K', code: 'KeyK', type: 'character' },
        { id: 'ro-l', label: 'l', value: 'l', shiftValue: 'L', code: 'KeyL', type: 'character' },
        { id: 'ro-scomma', label: 'ș', value: 'ș', shiftValue: 'Ș', code: 'Semicolon', type: 'character' },
        { id: 'ro-tcomma', label: 'ț', value: 'ț', shiftValue: 'Ț', code: 'Quote', type: 'character' },
        { id: 'ro-enter', label: 'Enter', value: 'Enter', code: 'Enter', type: 'action', width: 1.8 },
      ],
    },
    {
      keys: [
        { id: 'ro-shift-left', label: '⇧', value: 'Shift', code: 'ShiftLeft', type: 'modifier', width: 2.3 },
        { id: 'ro-z', label: 'z', value: 'z', shiftValue: 'Z', code: 'KeyZ', type: 'character' },
        { id: 'ro-x', label: 'x', value: 'x', shiftValue: 'X', code: 'KeyX', type: 'character' },
        { id: 'ro-c', label: 'c', value: 'c', shiftValue: 'C', code: 'KeyC', type: 'character' },
        { id: 'ro-v', label: 'v', value: 'v', shiftValue: 'V', code: 'KeyV', type: 'character' },
        { id: 'ro-b', label: 'b', value: 'b', shiftValue: 'B', code: 'KeyB', type: 'character' },
        { id: 'ro-n', label: 'n', value: 'n', shiftValue: 'N', code: 'KeyN', type: 'character' },
        { id: 'ro-m', label: 'm', value: 'm', shiftValue: 'M', code: 'KeyM', type: 'character' },
        { id: 'ro-comma', label: ',', value: ',', shiftValue: ';', code: 'Comma', type: 'character' },
        { id: 'ro-period', label: '.', value: '.', shiftValue: ':', code: 'Period', type: 'character' },
        { id: 'ro-slash', label: '/', value: '/', shiftValue: '?', code: 'Slash', type: 'character' },
        { id: 'ro-shift-right', label: '⇧', value: 'Shift', code: 'ShiftRight', type: 'modifier', width: 2.3 },
      ],
    },
    {
      keys: [
        { id: 'ro-space', label: 'Spațiu', value: ' ', code: 'Space', type: 'space', width: 6 },
      ],
    },
  ],
  physicalKeyMap: {
    'Backquote': '`', 'Digit1': '1', 'Digit2': '2', 'Digit3': '3', 'Digit4': '4',
    'Digit5': '5', 'Digit6': '6', 'Digit7': '7', 'Digit8': '8', 'Digit9': '9',
    'Digit0': '0', 'Minus': '-', 'Equal': '=',
    'KeyQ': 'q', 'KeyW': 'w', 'KeyE': 'e', 'KeyR': 'r', 'KeyT': 't',
    'KeyY': 'y', 'KeyU': 'u', 'KeyI': 'i', 'KeyO': 'o', 'KeyP': 'p',
    'BracketLeft': 'ă', 'BracketRight': 'î',
    'KeyA': 'a', 'KeyS': 's', 'KeyD': 'd', 'KeyF': 'f', 'KeyG': 'g',
    'KeyH': 'h', 'KeyJ': 'j', 'KeyK': 'k', 'KeyL': 'l',
    'Semicolon': 'ș', 'Quote': 'ț',
    'KeyZ': 'z', 'KeyX': 'x', 'KeyC': 'c', 'KeyV': 'v', 'KeyB': 'b',
    'KeyN': 'n', 'KeyM': 'm', 'Comma': ',', 'Period': '.', 'Slash': '/',
    'Space': ' ',
  },
};
