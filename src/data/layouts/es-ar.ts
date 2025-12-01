/**
 * Argentine Spanish Keyboard Layout - Latin American
 */

import type { KeyboardLayout } from '@/types/keyboard';

export const spanishArgentinaLayout: KeyboardLayout = {
  id: 'es-ar',
  name: 'Spanish (Argentina)',
  nativeName: 'Español (Argentina)',
  direction: 'ltr',
  fontFamily: 'system-ui, sans-serif',
  rows: [
    {
      keys: [
        { id: 'es-ar-backtick', label: '|', value: '|', shiftValue: '°', code: 'Backquote', type: 'character' },
        { id: 'es-ar-1', label: '1', value: '1', shiftValue: '!', code: 'Digit1', type: 'character' },
        { id: 'es-ar-2', label: '2', value: '2', shiftValue: '"', code: 'Digit2', type: 'character' },
        { id: 'es-ar-3', label: '3', value: '3', shiftValue: '#', code: 'Digit3', type: 'character' },
        { id: 'es-ar-4', label: '4', value: '4', shiftValue: '$', code: 'Digit4', type: 'character' },
        { id: 'es-ar-5', label: '5', value: '5', shiftValue: '%', code: 'Digit5', type: 'character' },
        { id: 'es-ar-6', label: '6', value: '6', shiftValue: '&', code: 'Digit6', type: 'character' },
        { id: 'es-ar-7', label: '7', value: '7', shiftValue: '/', code: 'Digit7', type: 'character' },
        { id: 'es-ar-8', label: '8', value: '8', shiftValue: '(', code: 'Digit8', type: 'character' },
        { id: 'es-ar-9', label: '9', value: '9', shiftValue: ')', code: 'Digit9', type: 'character' },
        { id: 'es-ar-0', label: '0', value: '0', shiftValue: '=', code: 'Digit0', type: 'character' },
        { id: 'es-ar-minus', label: "'", value: "'", shiftValue: '?', code: 'Minus', type: 'character' },
        { id: 'es-ar-equal', label: '¿', value: '¿', shiftValue: '¡', code: 'Equal', type: 'character' },
        { id: 'es-ar-backspace', label: '⌫', value: 'Backspace', code: 'Backspace', type: 'action', width: 1.5 },
      ],
    },
    {
      keys: [
        { id: 'es-ar-tab', label: 'Tab', value: 'Tab', code: 'Tab', type: 'action', width: 1.5 },
        { id: 'es-ar-q', label: 'Q', value: 'q', shiftValue: 'Q', code: 'KeyQ', type: 'character' },
        { id: 'es-ar-w', label: 'W', value: 'w', shiftValue: 'W', code: 'KeyW', type: 'character' },
        { id: 'es-ar-e', label: 'E', value: 'e', shiftValue: 'E', code: 'KeyE', type: 'character' },
        { id: 'es-ar-r', label: 'R', value: 'r', shiftValue: 'R', code: 'KeyR', type: 'character' },
        { id: 'es-ar-t', label: 'T', value: 't', shiftValue: 'T', code: 'KeyT', type: 'character' },
        { id: 'es-ar-y', label: 'Y', value: 'y', shiftValue: 'Y', code: 'KeyY', type: 'character' },
        { id: 'es-ar-u', label: 'U', value: 'u', shiftValue: 'U', code: 'KeyU', type: 'character' },
        { id: 'es-ar-i', label: 'I', value: 'i', shiftValue: 'I', code: 'KeyI', type: 'character' },
        { id: 'es-ar-o', label: 'O', value: 'o', shiftValue: 'O', code: 'KeyO', type: 'character' },
        { id: 'es-ar-p', label: 'P', value: 'p', shiftValue: 'P', code: 'KeyP', type: 'character' },
        { id: 'es-ar-bracketleft', label: '´', value: '´', shiftValue: '¨', code: 'BracketLeft', type: 'character' },
        { id: 'es-ar-bracketright', label: '+', value: '+', shiftValue: '*', code: 'BracketRight', type: 'character' },
      ],
    },
    {
      keys: [
        { id: 'es-ar-caps', label: 'Caps', value: 'CapsLock', code: 'CapsLock', type: 'modifier', width: 1.8 },
        { id: 'es-ar-a', label: 'A', value: 'a', shiftValue: 'A', code: 'KeyA', type: 'character' },
        { id: 'es-ar-s', label: 'S', value: 's', shiftValue: 'S', code: 'KeyS', type: 'character' },
        { id: 'es-ar-d', label: 'D', value: 'd', shiftValue: 'D', code: 'KeyD', type: 'character' },
        { id: 'es-ar-f', label: 'F', value: 'f', shiftValue: 'F', code: 'KeyF', type: 'character' },
        { id: 'es-ar-g', label: 'G', value: 'g', shiftValue: 'G', code: 'KeyG', type: 'character' },
        { id: 'es-ar-h', label: 'H', value: 'h', shiftValue: 'H', code: 'KeyH', type: 'character' },
        { id: 'es-ar-j', label: 'J', value: 'j', shiftValue: 'J', code: 'KeyJ', type: 'character' },
        { id: 'es-ar-k', label: 'K', value: 'k', shiftValue: 'K', code: 'KeyK', type: 'character' },
        { id: 'es-ar-l', label: 'L', value: 'l', shiftValue: 'L', code: 'KeyL', type: 'character' },
        { id: 'es-ar-semicolon', label: 'Ñ', value: 'ñ', shiftValue: 'Ñ', code: 'Semicolon', type: 'character' },
        { id: 'es-ar-quote', label: '{', value: '{', shiftValue: '[', code: 'Quote', type: 'character' },
        { id: 'es-ar-enter', label: 'Enter', value: 'Enter', code: 'Enter', type: 'action', width: 1.8 },
      ],
    },
    {
      keys: [
        { id: 'es-ar-shift-left', label: '⇧', value: 'Shift', code: 'ShiftLeft', type: 'modifier', width: 2.3 },
        { id: 'es-ar-z', label: 'Z', value: 'z', shiftValue: 'Z', code: 'KeyZ', type: 'character' },
        { id: 'es-ar-x', label: 'X', value: 'x', shiftValue: 'X', code: 'KeyX', type: 'character' },
        { id: 'es-ar-c', label: 'C', value: 'c', shiftValue: 'C', code: 'KeyC', type: 'character' },
        { id: 'es-ar-v', label: 'V', value: 'v', shiftValue: 'V', code: 'KeyV', type: 'character' },
        { id: 'es-ar-b', label: 'B', value: 'b', shiftValue: 'B', code: 'KeyB', type: 'character' },
        { id: 'es-ar-n', label: 'N', value: 'n', shiftValue: 'N', code: 'KeyN', type: 'character' },
        { id: 'es-ar-m', label: 'M', value: 'm', shiftValue: 'M', code: 'KeyM', type: 'character' },
        { id: 'es-ar-comma', label: ',', value: ',', shiftValue: ';', code: 'Comma', type: 'character' },
        { id: 'es-ar-period', label: '.', value: '.', shiftValue: ':', code: 'Period', type: 'character' },
        { id: 'es-ar-slash', label: '-', value: '-', shiftValue: '_', code: 'Slash', type: 'character' },
        { id: 'es-ar-shift-right', label: '⇧', value: 'Shift', code: 'ShiftRight', type: 'modifier', width: 2.3 },
      ],
    },
    {
      keys: [
        { id: 'es-ar-space', label: 'Space', value: ' ', code: 'Space', type: 'space', width: 6 },
      ],
    },
  ],
  physicalKeyMap: {
    'Backquote': '|', 'Digit1': '1', 'Digit2': '2', 'Digit3': '3', 'Digit4': '4',
    'Digit5': '5', 'Digit6': '6', 'Digit7': '7', 'Digit8': '8', 'Digit9': '9',
    'Digit0': '0', 'Minus': "'", 'Equal': '¿',
    'KeyQ': 'q', 'KeyW': 'w', 'KeyE': 'e', 'KeyR': 'r', 'KeyT': 't',
    'KeyY': 'y', 'KeyU': 'u', 'KeyI': 'i', 'KeyO': 'o', 'KeyP': 'p',
    'BracketLeft': '´', 'BracketRight': '+',
    'KeyA': 'a', 'KeyS': 's', 'KeyD': 'd', 'KeyF': 'f', 'KeyG': 'g',
    'KeyH': 'h', 'KeyJ': 'j', 'KeyK': 'k', 'KeyL': 'l',
    'Semicolon': 'ñ', 'Quote': '{',
    'KeyZ': 'z', 'KeyX': 'x', 'KeyC': 'c', 'KeyV': 'v', 'KeyB': 'b',
    'KeyN': 'n', 'KeyM': 'm', 'Comma': ',', 'Period': '.', 'Slash': '-',
    'Space': ' ',
  },
};
