/**
 * Slovak Keyboard Layout - QWERTZ with Slovak diacritics
 */

import type { KeyboardLayout } from '@/types/keyboard';

export const slovakLayout: KeyboardLayout = {
  id: 'sk',
  name: 'Slovak',
  nativeName: 'Slovenčina',
  direction: 'ltr',
  fontFamily: 'system-ui, sans-serif',
  rows: [
    {
      keys: [
        { id: 'sk-semicolon', label: ';', value: ';', shiftValue: '°', code: 'Backquote', type: 'character' },
        { id: 'sk-plus', label: '+', value: '+', shiftValue: '1', code: 'Digit1', type: 'character' },
        { id: 'sk-lcaron', label: 'ľ', value: 'ľ', shiftValue: '2', code: 'Digit2', type: 'character' },
        { id: 'sk-scaron', label: 'š', value: 'š', shiftValue: '3', code: 'Digit3', type: 'character' },
        { id: 'sk-ccaron', label: 'č', value: 'č', shiftValue: '4', code: 'Digit4', type: 'character' },
        { id: 'sk-tcaron', label: 'ť', value: 'ť', shiftValue: '5', code: 'Digit5', type: 'character' },
        { id: 'sk-zcaron', label: 'ž', value: 'ž', shiftValue: '6', code: 'Digit6', type: 'character' },
        { id: 'sk-yacute', label: 'ý', value: 'ý', shiftValue: '7', code: 'Digit7', type: 'character' },
        { id: 'sk-aacute', label: 'á', value: 'á', shiftValue: '8', code: 'Digit8', type: 'character' },
        { id: 'sk-iacute', label: 'í', value: 'í', shiftValue: '9', code: 'Digit9', type: 'character' },
        { id: 'sk-eacute', label: 'é', value: 'é', shiftValue: '0', code: 'Digit0', type: 'character' },
        { id: 'sk-equal', label: '=', value: '=', shiftValue: '%', code: 'Minus', type: 'character' },
        { id: 'sk-acute', label: '´', value: '´', shiftValue: 'ˇ', code: 'Equal', type: 'character' },
        { id: 'sk-backspace', label: '⌫', value: 'Backspace', code: 'Backspace', type: 'action', width: 1.5 },
      ],
    },
    {
      keys: [
        { id: 'sk-tab', label: 'Tab', value: 'Tab', code: 'Tab', type: 'action', width: 1.5 },
        { id: 'sk-q', label: 'q', value: 'q', shiftValue: 'Q', code: 'KeyQ', type: 'character' },
        { id: 'sk-w', label: 'w', value: 'w', shiftValue: 'W', code: 'KeyW', type: 'character' },
        { id: 'sk-e', label: 'e', value: 'e', shiftValue: 'E', code: 'KeyE', type: 'character' },
        { id: 'sk-r', label: 'r', value: 'r', shiftValue: 'R', code: 'KeyR', type: 'character' },
        { id: 'sk-t', label: 't', value: 't', shiftValue: 'T', code: 'KeyT', type: 'character' },
        { id: 'sk-z', label: 'z', value: 'z', shiftValue: 'Z', code: 'KeyY', type: 'character' },
        { id: 'sk-u', label: 'u', value: 'u', shiftValue: 'U', code: 'KeyU', type: 'character' },
        { id: 'sk-i', label: 'i', value: 'i', shiftValue: 'I', code: 'KeyI', type: 'character' },
        { id: 'sk-o', label: 'o', value: 'o', shiftValue: 'O', code: 'KeyO', type: 'character' },
        { id: 'sk-p', label: 'p', value: 'p', shiftValue: 'P', code: 'KeyP', type: 'character' },
        { id: 'sk-uacute', label: 'ú', value: 'ú', shiftValue: '/', code: 'BracketLeft', type: 'character' },
        { id: 'sk-auml', label: 'ä', value: 'ä', shiftValue: '(', code: 'BracketRight', type: 'character' },
      ],
    },
    {
      keys: [
        { id: 'sk-caps', label: 'Caps', value: 'CapsLock', code: 'CapsLock', type: 'modifier', width: 1.8 },
        { id: 'sk-a', label: 'a', value: 'a', shiftValue: 'A', code: 'KeyA', type: 'character' },
        { id: 'sk-s', label: 's', value: 's', shiftValue: 'S', code: 'KeyS', type: 'character' },
        { id: 'sk-d', label: 'd', value: 'd', shiftValue: 'D', code: 'KeyD', type: 'character' },
        { id: 'sk-f', label: 'f', value: 'f', shiftValue: 'F', code: 'KeyF', type: 'character' },
        { id: 'sk-g', label: 'g', value: 'g', shiftValue: 'G', code: 'KeyG', type: 'character' },
        { id: 'sk-h', label: 'h', value: 'h', shiftValue: 'H', code: 'KeyH', type: 'character' },
        { id: 'sk-j', label: 'j', value: 'j', shiftValue: 'J', code: 'KeyJ', type: 'character' },
        { id: 'sk-k', label: 'k', value: 'k', shiftValue: 'K', code: 'KeyK', type: 'character' },
        { id: 'sk-l', label: 'l', value: 'l', shiftValue: 'L', code: 'KeyL', type: 'character' },
        { id: 'sk-ocirc', label: 'ô', value: 'ô', shiftValue: '"', code: 'Semicolon', type: 'character' },
        { id: 'sk-section', label: '§', value: '§', shiftValue: '!', code: 'Quote', type: 'character' },
        { id: 'sk-enter', label: 'Enter', value: 'Enter', code: 'Enter', type: 'action', width: 1.8 },
      ],
    },
    {
      keys: [
        { id: 'sk-shift-left', label: '⇧', value: 'Shift', code: 'ShiftLeft', type: 'modifier', width: 2.3 },
        { id: 'sk-y', label: 'y', value: 'y', shiftValue: 'Y', code: 'KeyZ', type: 'character' },
        { id: 'sk-x', label: 'x', value: 'x', shiftValue: 'X', code: 'KeyX', type: 'character' },
        { id: 'sk-c', label: 'c', value: 'c', shiftValue: 'C', code: 'KeyC', type: 'character' },
        { id: 'sk-v', label: 'v', value: 'v', shiftValue: 'V', code: 'KeyV', type: 'character' },
        { id: 'sk-b', label: 'b', value: 'b', shiftValue: 'B', code: 'KeyB', type: 'character' },
        { id: 'sk-n', label: 'n', value: 'n', shiftValue: 'N', code: 'KeyN', type: 'character' },
        { id: 'sk-m', label: 'm', value: 'm', shiftValue: 'M', code: 'KeyM', type: 'character' },
        { id: 'sk-comma', label: ',', value: ',', shiftValue: '?', code: 'Comma', type: 'character' },
        { id: 'sk-period', label: '.', value: '.', shiftValue: ':', code: 'Period', type: 'character' },
        { id: 'sk-minus', label: '-', value: '-', shiftValue: '_', code: 'Slash', type: 'character' },
        { id: 'sk-shift-right', label: '⇧', value: 'Shift', code: 'ShiftRight', type: 'modifier', width: 2.3 },
      ],
    },
    {
      keys: [
        { id: 'sk-space', label: 'Medzera', value: ' ', code: 'Space', type: 'space', width: 6 },
      ],
    },
  ],
  physicalKeyMap: {
    'Backquote': ';', 'Digit1': '+', 'Digit2': 'ľ', 'Digit3': 'š', 'Digit4': 'č',
    'Digit5': 'ť', 'Digit6': 'ž', 'Digit7': 'ý', 'Digit8': 'á', 'Digit9': 'í',
    'Digit0': 'é', 'Minus': '=', 'Equal': '´',
    'KeyQ': 'q', 'KeyW': 'w', 'KeyE': 'e', 'KeyR': 'r', 'KeyT': 't',
    'KeyY': 'z', 'KeyU': 'u', 'KeyI': 'i', 'KeyO': 'o', 'KeyP': 'p',
    'BracketLeft': 'ú', 'BracketRight': 'ä',
    'KeyA': 'a', 'KeyS': 's', 'KeyD': 'd', 'KeyF': 'f', 'KeyG': 'g',
    'KeyH': 'h', 'KeyJ': 'j', 'KeyK': 'k', 'KeyL': 'l',
    'Semicolon': 'ô', 'Quote': '§',
    'KeyZ': 'y', 'KeyX': 'x', 'KeyC': 'c', 'KeyV': 'v', 'KeyB': 'b',
    'KeyN': 'n', 'KeyM': 'm', 'Comma': ',', 'Period': '.', 'Slash': '-',
    'Space': ' ',
  },
};
