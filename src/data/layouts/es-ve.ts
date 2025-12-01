/**
 * Venezuelan Spanish Keyboard Layout - Latin American
 */

import type { KeyboardLayout } from '@/types/keyboard';

export const spanishVenezuelaLayout: KeyboardLayout = {
  id: 'es-ve',
  name: 'Spanish (Venezuela)',
  nativeName: 'Español (Venezuela)',
  direction: 'ltr',
  fontFamily: 'system-ui, sans-serif',
  rows: [
    {
      keys: [
        { id: 'es-ve-backtick', label: '|', value: '|', shiftValue: '°', code: 'Backquote', type: 'character' },
        { id: 'es-ve-1', label: '1', value: '1', shiftValue: '!', code: 'Digit1', type: 'character' },
        { id: 'es-ve-2', label: '2', value: '2', shiftValue: '"', code: 'Digit2', type: 'character' },
        { id: 'es-ve-3', label: '3', value: '3', shiftValue: '#', code: 'Digit3', type: 'character' },
        { id: 'es-ve-4', label: '4', value: '4', shiftValue: '$', code: 'Digit4', type: 'character' },
        { id: 'es-ve-5', label: '5', value: '5', shiftValue: '%', code: 'Digit5', type: 'character' },
        { id: 'es-ve-6', label: '6', value: '6', shiftValue: '&', code: 'Digit6', type: 'character' },
        { id: 'es-ve-7', label: '7', value: '7', shiftValue: '/', code: 'Digit7', type: 'character' },
        { id: 'es-ve-8', label: '8', value: '8', shiftValue: '(', code: 'Digit8', type: 'character' },
        { id: 'es-ve-9', label: '9', value: '9', shiftValue: ')', code: 'Digit9', type: 'character' },
        { id: 'es-ve-0', label: '0', value: '0', shiftValue: '=', code: 'Digit0', type: 'character' },
        { id: 'es-ve-minus', label: "'", value: "'", shiftValue: '?', code: 'Minus', type: 'character' },
        { id: 'es-ve-equal', label: '¿', value: '¿', shiftValue: '¡', code: 'Equal', type: 'character' },
        { id: 'es-ve-backspace', label: '⌫', value: 'Backspace', code: 'Backspace', type: 'action', width: 1.5 },
      ],
    },
    {
      keys: [
        { id: 'es-ve-tab', label: 'Tab', value: 'Tab', code: 'Tab', type: 'action', width: 1.5 },
        { id: 'es-ve-q', label: 'Q', value: 'q', shiftValue: 'Q', code: 'KeyQ', type: 'character' },
        { id: 'es-ve-w', label: 'W', value: 'w', shiftValue: 'W', code: 'KeyW', type: 'character' },
        { id: 'es-ve-e', label: 'E', value: 'e', shiftValue: 'E', code: 'KeyE', type: 'character' },
        { id: 'es-ve-r', label: 'R', value: 'r', shiftValue: 'R', code: 'KeyR', type: 'character' },
        { id: 'es-ve-t', label: 'T', value: 't', shiftValue: 'T', code: 'KeyT', type: 'character' },
        { id: 'es-ve-y', label: 'Y', value: 'y', shiftValue: 'Y', code: 'KeyY', type: 'character' },
        { id: 'es-ve-u', label: 'U', value: 'u', shiftValue: 'U', code: 'KeyU', type: 'character' },
        { id: 'es-ve-i', label: 'I', value: 'i', shiftValue: 'I', code: 'KeyI', type: 'character' },
        { id: 'es-ve-o', label: 'O', value: 'o', shiftValue: 'O', code: 'KeyO', type: 'character' },
        { id: 'es-ve-p', label: 'P', value: 'p', shiftValue: 'P', code: 'KeyP', type: 'character' },
        { id: 'es-ve-bracketleft', label: '´', value: '´', shiftValue: '¨', code: 'BracketLeft', type: 'character' },
        { id: 'es-ve-bracketright', label: '+', value: '+', shiftValue: '*', code: 'BracketRight', type: 'character' },
      ],
    },
    {
      keys: [
        { id: 'es-ve-caps', label: 'Caps', value: 'CapsLock', code: 'CapsLock', type: 'modifier', width: 1.8 },
        { id: 'es-ve-a', label: 'A', value: 'a', shiftValue: 'A', code: 'KeyA', type: 'character' },
        { id: 'es-ve-s', label: 'S', value: 's', shiftValue: 'S', code: 'KeyS', type: 'character' },
        { id: 'es-ve-d', label: 'D', value: 'd', shiftValue: 'D', code: 'KeyD', type: 'character' },
        { id: 'es-ve-f', label: 'F', value: 'f', shiftValue: 'F', code: 'KeyF', type: 'character' },
        { id: 'es-ve-g', label: 'G', value: 'g', shiftValue: 'G', code: 'KeyG', type: 'character' },
        { id: 'es-ve-h', label: 'H', value: 'h', shiftValue: 'H', code: 'KeyH', type: 'character' },
        { id: 'es-ve-j', label: 'J', value: 'j', shiftValue: 'J', code: 'KeyJ', type: 'character' },
        { id: 'es-ve-k', label: 'K', value: 'k', shiftValue: 'K', code: 'KeyK', type: 'character' },
        { id: 'es-ve-l', label: 'L', value: 'l', shiftValue: 'L', code: 'KeyL', type: 'character' },
        { id: 'es-ve-semicolon', label: 'Ñ', value: 'ñ', shiftValue: 'Ñ', code: 'Semicolon', type: 'character' },
        { id: 'es-ve-quote', label: '{', value: '{', shiftValue: '[', code: 'Quote', type: 'character' },
        { id: 'es-ve-enter', label: 'Enter', value: 'Enter', code: 'Enter', type: 'action', width: 1.8 },
      ],
    },
    {
      keys: [
        { id: 'es-ve-shift-left', label: '⇧', value: 'Shift', code: 'ShiftLeft', type: 'modifier', width: 2.3 },
        { id: 'es-ve-z', label: 'Z', value: 'z', shiftValue: 'Z', code: 'KeyZ', type: 'character' },
        { id: 'es-ve-x', label: 'X', value: 'x', shiftValue: 'X', code: 'KeyX', type: 'character' },
        { id: 'es-ve-c', label: 'C', value: 'c', shiftValue: 'C', code: 'KeyC', type: 'character' },
        { id: 'es-ve-v', label: 'V', value: 'v', shiftValue: 'V', code: 'KeyV', type: 'character' },
        { id: 'es-ve-b', label: 'B', value: 'b', shiftValue: 'B', code: 'KeyB', type: 'character' },
        { id: 'es-ve-n', label: 'N', value: 'n', shiftValue: 'N', code: 'KeyN', type: 'character' },
        { id: 'es-ve-m', label: 'M', value: 'm', shiftValue: 'M', code: 'KeyM', type: 'character' },
        { id: 'es-ve-comma', label: ',', value: ',', shiftValue: ';', code: 'Comma', type: 'character' },
        { id: 'es-ve-period', label: '.', value: '.', shiftValue: ':', code: 'Period', type: 'character' },
        { id: 'es-ve-slash', label: '-', value: '-', shiftValue: '_', code: 'Slash', type: 'character' },
        { id: 'es-ve-shift-right', label: '⇧', value: 'Shift', code: 'ShiftRight', type: 'modifier', width: 2.3 },
      ],
    },
    {
      keys: [
        { id: 'es-ve-space', label: 'Space', value: ' ', code: 'Space', type: 'space', width: 6 },
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
