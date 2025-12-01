/**
 * Swiss German Keyboard Layout - QWERTZ with Swiss variations
 */

import type { KeyboardLayout } from '@/types/keyboard';

export const germanSwissLayout: KeyboardLayout = {
  id: 'de-ch',
  name: 'German (Switzerland)',
  nativeName: 'Deutsch (Schweiz)',
  direction: 'ltr',
  fontFamily: 'system-ui, sans-serif',
  rows: [
    {
      keys: [
        { id: 'de-ch-backtick', label: '§', value: '§', shiftValue: '°', code: 'Backquote', type: 'character' },
        { id: 'de-ch-1', label: '1', value: '1', shiftValue: '+', code: 'Digit1', type: 'character' },
        { id: 'de-ch-2', label: '2', value: '2', shiftValue: '"', code: 'Digit2', type: 'character' },
        { id: 'de-ch-3', label: '3', value: '3', shiftValue: '*', code: 'Digit3', type: 'character' },
        { id: 'de-ch-4', label: '4', value: '4', shiftValue: 'ç', code: 'Digit4', type: 'character' },
        { id: 'de-ch-5', label: '5', value: '5', shiftValue: '%', code: 'Digit5', type: 'character' },
        { id: 'de-ch-6', label: '6', value: '6', shiftValue: '&', code: 'Digit6', type: 'character' },
        { id: 'de-ch-7', label: '7', value: '7', shiftValue: '/', code: 'Digit7', type: 'character' },
        { id: 'de-ch-8', label: '8', value: '8', shiftValue: '(', code: 'Digit8', type: 'character' },
        { id: 'de-ch-9', label: '9', value: '9', shiftValue: ')', code: 'Digit9', type: 'character' },
        { id: 'de-ch-0', label: '0', value: '0', shiftValue: '=', code: 'Digit0', type: 'character' },
        { id: 'de-ch-minus', label: "'", value: "'", shiftValue: '?', code: 'Minus', type: 'character' },
        { id: 'de-ch-equal', label: '^', value: '^', shiftValue: '`', code: 'Equal', type: 'character' },
        { id: 'de-ch-backspace', label: '⌫', value: 'Backspace', code: 'Backspace', type: 'action', width: 1.5 },
      ],
    },
    {
      keys: [
        { id: 'de-ch-tab', label: 'Tab', value: 'Tab', code: 'Tab', type: 'action', width: 1.5 },
        { id: 'de-ch-q', label: 'Q', value: 'q', shiftValue: 'Q', code: 'KeyQ', type: 'character' },
        { id: 'de-ch-w', label: 'W', value: 'w', shiftValue: 'W', code: 'KeyW', type: 'character' },
        { id: 'de-ch-e', label: 'E', value: 'e', shiftValue: 'E', code: 'KeyE', type: 'character' },
        { id: 'de-ch-r', label: 'R', value: 'r', shiftValue: 'R', code: 'KeyR', type: 'character' },
        { id: 'de-ch-t', label: 'T', value: 't', shiftValue: 'T', code: 'KeyT', type: 'character' },
        { id: 'de-ch-z', label: 'Z', value: 'z', shiftValue: 'Z', code: 'KeyY', type: 'character' },
        { id: 'de-ch-u', label: 'U', value: 'u', shiftValue: 'U', code: 'KeyU', type: 'character' },
        { id: 'de-ch-i', label: 'I', value: 'i', shiftValue: 'I', code: 'KeyI', type: 'character' },
        { id: 'de-ch-o', label: 'O', value: 'o', shiftValue: 'O', code: 'KeyO', type: 'character' },
        { id: 'de-ch-p', label: 'P', value: 'p', shiftValue: 'P', code: 'KeyP', type: 'character' },
        { id: 'de-ch-bracketleft', label: 'ü', value: 'ü', shiftValue: 'è', code: 'BracketLeft', type: 'character' },
        { id: 'de-ch-bracketright', label: '¨', value: '¨', shiftValue: '!', code: 'BracketRight', type: 'character' },
      ],
    },
    {
      keys: [
        { id: 'de-ch-caps', label: 'Caps', value: 'CapsLock', code: 'CapsLock', type: 'modifier', width: 1.8 },
        { id: 'de-ch-a', label: 'A', value: 'a', shiftValue: 'A', code: 'KeyA', type: 'character' },
        { id: 'de-ch-s', label: 'S', value: 's', shiftValue: 'S', code: 'KeyS', type: 'character' },
        { id: 'de-ch-d', label: 'D', value: 'd', shiftValue: 'D', code: 'KeyD', type: 'character' },
        { id: 'de-ch-f', label: 'F', value: 'f', shiftValue: 'F', code: 'KeyF', type: 'character' },
        { id: 'de-ch-g', label: 'G', value: 'g', shiftValue: 'G', code: 'KeyG', type: 'character' },
        { id: 'de-ch-h', label: 'H', value: 'h', shiftValue: 'H', code: 'KeyH', type: 'character' },
        { id: 'de-ch-j', label: 'J', value: 'j', shiftValue: 'J', code: 'KeyJ', type: 'character' },
        { id: 'de-ch-k', label: 'K', value: 'k', shiftValue: 'K', code: 'KeyK', type: 'character' },
        { id: 'de-ch-l', label: 'L', value: 'l', shiftValue: 'L', code: 'KeyL', type: 'character' },
        { id: 'de-ch-semicolon', label: 'ö', value: 'ö', shiftValue: 'é', code: 'Semicolon', type: 'character' },
        { id: 'de-ch-quote', label: 'ä', value: 'ä', shiftValue: 'à', code: 'Quote', type: 'character' },
        { id: 'de-ch-enter', label: 'Enter', value: 'Enter', code: 'Enter', type: 'action', width: 1.8 },
      ],
    },
    {
      keys: [
        { id: 'de-ch-shift-left', label: '⇧', value: 'Shift', code: 'ShiftLeft', type: 'modifier', width: 2.3 },
        { id: 'de-ch-y', label: 'Y', value: 'y', shiftValue: 'Y', code: 'KeyZ', type: 'character' },
        { id: 'de-ch-x', label: 'X', value: 'x', shiftValue: 'X', code: 'KeyX', type: 'character' },
        { id: 'de-ch-c', label: 'C', value: 'c', shiftValue: 'C', code: 'KeyC', type: 'character' },
        { id: 'de-ch-v', label: 'V', value: 'v', shiftValue: 'V', code: 'KeyV', type: 'character' },
        { id: 'de-ch-b', label: 'B', value: 'b', shiftValue: 'B', code: 'KeyB', type: 'character' },
        { id: 'de-ch-n', label: 'N', value: 'n', shiftValue: 'N', code: 'KeyN', type: 'character' },
        { id: 'de-ch-m', label: 'M', value: 'm', shiftValue: 'M', code: 'KeyM', type: 'character' },
        { id: 'de-ch-comma', label: ',', value: ',', shiftValue: ';', code: 'Comma', type: 'character' },
        { id: 'de-ch-period', label: '.', value: '.', shiftValue: ':', code: 'Period', type: 'character' },
        { id: 'de-ch-slash', label: '-', value: '-', shiftValue: '_', code: 'Slash', type: 'character' },
        { id: 'de-ch-shift-right', label: '⇧', value: 'Shift', code: 'ShiftRight', type: 'modifier', width: 2.3 },
      ],
    },
    {
      keys: [
        { id: 'de-ch-space', label: 'Space', value: ' ', code: 'Space', type: 'space', width: 6 },
      ],
    },
  ],
  physicalKeyMap: {
    'Backquote': '§', 'Digit1': '1', 'Digit2': '2', 'Digit3': '3', 'Digit4': '4',
    'Digit5': '5', 'Digit6': '6', 'Digit7': '7', 'Digit8': '8', 'Digit9': '9',
    'Digit0': '0', 'Minus': "'", 'Equal': '^',
    'KeyQ': 'q', 'KeyW': 'w', 'KeyE': 'e', 'KeyR': 'r', 'KeyT': 't',
    'KeyY': 'z', 'KeyU': 'u', 'KeyI': 'i', 'KeyO': 'o', 'KeyP': 'p',
    'BracketLeft': 'ü', 'BracketRight': '¨',
    'KeyA': 'a', 'KeyS': 's', 'KeyD': 'd', 'KeyF': 'f', 'KeyG': 'g',
    'KeyH': 'h', 'KeyJ': 'j', 'KeyK': 'k', 'KeyL': 'l',
    'Semicolon': 'ö', 'Quote': 'ä',
    'KeyZ': 'y', 'KeyX': 'x', 'KeyC': 'c', 'KeyV': 'v', 'KeyB': 'b',
    'KeyN': 'n', 'KeyM': 'm', 'Comma': ',', 'Period': '.', 'Slash': '-',
    'Space': ' ',
  },
};
