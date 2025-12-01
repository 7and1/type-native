/**
 * Czech Keyboard Layout - QWERTZ with háčky and čárky
 */

import type { KeyboardLayout } from '@/types/keyboard';

export const czechLayout: KeyboardLayout = {
  id: 'cs',
  name: 'Czech',
  nativeName: 'Čeština',
  direction: 'ltr',
  fontFamily: 'system-ui, sans-serif',
  rows: [
    {
      keys: [
        { id: 'cs-semicolon', label: ';', value: ';', shiftValue: '°', code: 'Backquote', type: 'character' },
        { id: 'cs-plus', label: '+', value: '+', shiftValue: '1', code: 'Digit1', type: 'character' },
        { id: 'cs-ecaron', label: 'ě', value: 'ě', shiftValue: '2', code: 'Digit2', type: 'character' },
        { id: 'cs-scaron', label: 'š', value: 'š', shiftValue: '3', code: 'Digit3', type: 'character' },
        { id: 'cs-ccaron', label: 'č', value: 'č', shiftValue: '4', code: 'Digit4', type: 'character' },
        { id: 'cs-rcaron', label: 'ř', value: 'ř', shiftValue: '5', code: 'Digit5', type: 'character' },
        { id: 'cs-zcaron', label: 'ž', value: 'ž', shiftValue: '6', code: 'Digit6', type: 'character' },
        { id: 'cs-yacute', label: 'ý', value: 'ý', shiftValue: '7', code: 'Digit7', type: 'character' },
        { id: 'cs-aacute', label: 'á', value: 'á', shiftValue: '8', code: 'Digit8', type: 'character' },
        { id: 'cs-iacute', label: 'í', value: 'í', shiftValue: '9', code: 'Digit9', type: 'character' },
        { id: 'cs-eacute', label: 'é', value: 'é', shiftValue: '0', code: 'Digit0', type: 'character' },
        { id: 'cs-equal', label: '=', value: '=', shiftValue: '%', code: 'Minus', type: 'character' },
        { id: 'cs-acute', label: '´', value: '´', shiftValue: 'ˇ', code: 'Equal', type: 'character' },
        { id: 'cs-backspace', label: '⌫', value: 'Backspace', code: 'Backspace', type: 'action', width: 1.5 },
      ],
    },
    {
      keys: [
        { id: 'cs-tab', label: 'Tab', value: 'Tab', code: 'Tab', type: 'action', width: 1.5 },
        { id: 'cs-q', label: 'q', value: 'q', shiftValue: 'Q', code: 'KeyQ', type: 'character' },
        { id: 'cs-w', label: 'w', value: 'w', shiftValue: 'W', code: 'KeyW', type: 'character' },
        { id: 'cs-e', label: 'e', value: 'e', shiftValue: 'E', code: 'KeyE', type: 'character' },
        { id: 'cs-r', label: 'r', value: 'r', shiftValue: 'R', code: 'KeyR', type: 'character' },
        { id: 'cs-t', label: 't', value: 't', shiftValue: 'T', code: 'KeyT', type: 'character' },
        { id: 'cs-z', label: 'z', value: 'z', shiftValue: 'Z', code: 'KeyY', type: 'character' },
        { id: 'cs-u', label: 'u', value: 'u', shiftValue: 'U', code: 'KeyU', type: 'character' },
        { id: 'cs-i', label: 'i', value: 'i', shiftValue: 'I', code: 'KeyI', type: 'character' },
        { id: 'cs-o', label: 'o', value: 'o', shiftValue: 'O', code: 'KeyO', type: 'character' },
        { id: 'cs-p', label: 'p', value: 'p', shiftValue: 'P', code: 'KeyP', type: 'character' },
        { id: 'cs-uacute', label: 'ú', value: 'ú', shiftValue: '/', code: 'BracketLeft', type: 'character' },
        { id: 'cs-rparen', label: ')', value: ')', shiftValue: '(', code: 'BracketRight', type: 'character' },
      ],
    },
    {
      keys: [
        { id: 'cs-caps', label: 'Caps', value: 'CapsLock', code: 'CapsLock', type: 'modifier', width: 1.8 },
        { id: 'cs-a', label: 'a', value: 'a', shiftValue: 'A', code: 'KeyA', type: 'character' },
        { id: 'cs-s', label: 's', value: 's', shiftValue: 'S', code: 'KeyS', type: 'character' },
        { id: 'cs-d', label: 'd', value: 'd', shiftValue: 'D', code: 'KeyD', type: 'character' },
        { id: 'cs-f', label: 'f', value: 'f', shiftValue: 'F', code: 'KeyF', type: 'character' },
        { id: 'cs-g', label: 'g', value: 'g', shiftValue: 'G', code: 'KeyG', type: 'character' },
        { id: 'cs-h', label: 'h', value: 'h', shiftValue: 'H', code: 'KeyH', type: 'character' },
        { id: 'cs-j', label: 'j', value: 'j', shiftValue: 'J', code: 'KeyJ', type: 'character' },
        { id: 'cs-k', label: 'k', value: 'k', shiftValue: 'K', code: 'KeyK', type: 'character' },
        { id: 'cs-l', label: 'l', value: 'l', shiftValue: 'L', code: 'KeyL', type: 'character' },
        { id: 'cs-uring', label: 'ů', value: 'ů', shiftValue: '"', code: 'Semicolon', type: 'character' },
        { id: 'cs-section', label: '§', value: '§', shiftValue: '!', code: 'Quote', type: 'character' },
        { id: 'cs-enter', label: 'Enter', value: 'Enter', code: 'Enter', type: 'action', width: 1.8 },
      ],
    },
    {
      keys: [
        { id: 'cs-shift-left', label: '⇧', value: 'Shift', code: 'ShiftLeft', type: 'modifier', width: 2.3 },
        { id: 'cs-y', label: 'y', value: 'y', shiftValue: 'Y', code: 'KeyZ', type: 'character' },
        { id: 'cs-x', label: 'x', value: 'x', shiftValue: 'X', code: 'KeyX', type: 'character' },
        { id: 'cs-c', label: 'c', value: 'c', shiftValue: 'C', code: 'KeyC', type: 'character' },
        { id: 'cs-v', label: 'v', value: 'v', shiftValue: 'V', code: 'KeyV', type: 'character' },
        { id: 'cs-b', label: 'b', value: 'b', shiftValue: 'B', code: 'KeyB', type: 'character' },
        { id: 'cs-n', label: 'n', value: 'n', shiftValue: 'N', code: 'KeyN', type: 'character' },
        { id: 'cs-m', label: 'm', value: 'm', shiftValue: 'M', code: 'KeyM', type: 'character' },
        { id: 'cs-comma', label: ',', value: ',', shiftValue: '?', code: 'Comma', type: 'character' },
        { id: 'cs-period', label: '.', value: '.', shiftValue: ':', code: 'Period', type: 'character' },
        { id: 'cs-minus', label: '-', value: '-', shiftValue: '_', code: 'Slash', type: 'character' },
        { id: 'cs-shift-right', label: '⇧', value: 'Shift', code: 'ShiftRight', type: 'modifier', width: 2.3 },
      ],
    },
    {
      keys: [
        { id: 'cs-space', label: 'Mezerník', value: ' ', code: 'Space', type: 'space', width: 6 },
      ],
    },
  ],
  physicalKeyMap: {
    'Backquote': ';', 'Digit1': '+', 'Digit2': 'ě', 'Digit3': 'š', 'Digit4': 'č',
    'Digit5': 'ř', 'Digit6': 'ž', 'Digit7': 'ý', 'Digit8': 'á', 'Digit9': 'í',
    'Digit0': 'é', 'Minus': '=', 'Equal': '´',
    'KeyQ': 'q', 'KeyW': 'w', 'KeyE': 'e', 'KeyR': 'r', 'KeyT': 't',
    'KeyY': 'z', 'KeyU': 'u', 'KeyI': 'i', 'KeyO': 'o', 'KeyP': 'p',
    'BracketLeft': 'ú', 'BracketRight': ')',
    'KeyA': 'a', 'KeyS': 's', 'KeyD': 'd', 'KeyF': 'f', 'KeyG': 'g',
    'KeyH': 'h', 'KeyJ': 'j', 'KeyK': 'k', 'KeyL': 'l',
    'Semicolon': 'ů', 'Quote': '§',
    'KeyZ': 'y', 'KeyX': 'x', 'KeyC': 'c', 'KeyV': 'v', 'KeyB': 'b',
    'KeyN': 'n', 'KeyM': 'm', 'Comma': ',', 'Period': '.', 'Slash': '-',
    'Space': ' ',
  },
};
