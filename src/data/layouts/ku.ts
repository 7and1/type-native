/**
 * Kurdish (Kurmanji) Keyboard Layout - Latin-based Turkish-style
 */

import type { KeyboardLayout } from '@/types/keyboard';

export const kurdishKurmanjiLayout: KeyboardLayout = {
  id: 'ku',
  name: 'Kurdish (Kurmanji)',
  nativeName: 'Kurmancî',
  direction: 'ltr',
  fontFamily: 'system-ui, sans-serif',
  rows: [
    {
      keys: [
        { id: 'ku-backtick', label: '"', value: '"', shiftValue: 'é', code: 'Backquote', type: 'character' },
        { id: 'ku-1', label: '1', value: '1', shiftValue: '!', code: 'Digit1', type: 'character' },
        { id: 'ku-2', label: '2', value: '2', shiftValue: "'", code: 'Digit2', type: 'character' },
        { id: 'ku-3', label: '3', value: '3', shiftValue: '^', code: 'Digit3', type: 'character' },
        { id: 'ku-4', label: '4', value: '4', shiftValue: '+', code: 'Digit4', type: 'character' },
        { id: 'ku-5', label: '5', value: '5', shiftValue: '%', code: 'Digit5', type: 'character' },
        { id: 'ku-6', label: '6', value: '6', shiftValue: '&', code: 'Digit6', type: 'character' },
        { id: 'ku-7', label: '7', value: '7', shiftValue: '/', code: 'Digit7', type: 'character' },
        { id: 'ku-8', label: '8', value: '8', shiftValue: '(', code: 'Digit8', type: 'character' },
        { id: 'ku-9', label: '9', value: '9', shiftValue: ')', code: 'Digit9', type: 'character' },
        { id: 'ku-0', label: '0', value: '0', shiftValue: '=', code: 'Digit0', type: 'character' },
        { id: 'ku-minus', label: '*', value: '*', shiftValue: '?', code: 'Minus', type: 'character' },
        { id: 'ku-equal', label: '-', value: '-', shiftValue: '_', code: 'Equal', type: 'character' },
        { id: 'ku-backspace', label: '⌫', value: 'Backspace', code: 'Backspace', type: 'action', width: 1.5 },
      ],
    },
    {
      keys: [
        { id: 'ku-tab', label: 'Tab', value: 'Tab', code: 'Tab', type: 'action', width: 1.5 },
        { id: 'ku-q', label: 'q', value: 'q', shiftValue: 'Q', code: 'KeyQ', type: 'character' },
        { id: 'ku-w', label: 'w', value: 'w', shiftValue: 'W', code: 'KeyW', type: 'character' },
        { id: 'ku-e', label: 'e', value: 'e', shiftValue: 'E', code: 'KeyE', type: 'character' },
        { id: 'ku-r', label: 'r', value: 'r', shiftValue: 'R', code: 'KeyR', type: 'character' },
        { id: 'ku-t', label: 't', value: 't', shiftValue: 'T', code: 'KeyT', type: 'character' },
        { id: 'ku-y', label: 'y', value: 'y', shiftValue: 'Y', code: 'KeyY', type: 'character' },
        { id: 'ku-u', label: 'u', value: 'u', shiftValue: 'U', code: 'KeyU', type: 'character' },
        { id: 'ku-i', label: 'ı', value: 'ı', shiftValue: 'I', code: 'KeyI', type: 'character' },
        { id: 'ku-o', label: 'o', value: 'o', shiftValue: 'O', code: 'KeyO', type: 'character' },
        { id: 'ku-p', label: 'p', value: 'p', shiftValue: 'P', code: 'KeyP', type: 'character' },
        { id: 'ku-bracketleft', label: 'ğ', value: 'ğ', shiftValue: 'Ğ', code: 'BracketLeft', type: 'character' },
        { id: 'ku-bracketright', label: 'ü', value: 'ü', shiftValue: 'Ü', code: 'BracketRight', type: 'character' },
      ],
    },
    {
      keys: [
        { id: 'ku-caps', label: 'Caps', value: 'CapsLock', code: 'CapsLock', type: 'modifier', width: 1.8 },
        { id: 'ku-a', label: 'a', value: 'a', shiftValue: 'A', code: 'KeyA', type: 'character' },
        { id: 'ku-s', label: 's', value: 's', shiftValue: 'S', code: 'KeyS', type: 'character' },
        { id: 'ku-d', label: 'd', value: 'd', shiftValue: 'D', code: 'KeyD', type: 'character' },
        { id: 'ku-f', label: 'f', value: 'f', shiftValue: 'F', code: 'KeyF', type: 'character' },
        { id: 'ku-g', label: 'g', value: 'g', shiftValue: 'G', code: 'KeyG', type: 'character' },
        { id: 'ku-h', label: 'h', value: 'h', shiftValue: 'H', code: 'KeyH', type: 'character' },
        { id: 'ku-j', label: 'j', value: 'j', shiftValue: 'J', code: 'KeyJ', type: 'character' },
        { id: 'ku-k', label: 'k', value: 'k', shiftValue: 'K', code: 'KeyK', type: 'character' },
        { id: 'ku-l', label: 'l', value: 'l', shiftValue: 'L', code: 'KeyL', type: 'character' },
        { id: 'ku-semicolon', label: 'ş', value: 'ş', shiftValue: 'Ş', code: 'Semicolon', type: 'character' },
        { id: 'ku-quote', label: 'i', value: 'i', shiftValue: 'İ', code: 'Quote', type: 'character' },
        { id: 'ku-enter', label: 'Enter', value: 'Enter', code: 'Enter', type: 'action', width: 1.8 },
      ],
    },
    {
      keys: [
        { id: 'ku-shift-left', label: '⇧', value: 'Shift', code: 'ShiftLeft', type: 'modifier', width: 2.3 },
        { id: 'ku-z', label: 'z', value: 'z', shiftValue: 'Z', code: 'KeyZ', type: 'character' },
        { id: 'ku-x', label: 'x', value: 'x', shiftValue: 'X', code: 'KeyX', type: 'character' },
        { id: 'ku-c', label: 'c', value: 'c', shiftValue: 'C', code: 'KeyC', type: 'character' },
        { id: 'ku-v', label: 'v', value: 'v', shiftValue: 'V', code: 'KeyV', type: 'character' },
        { id: 'ku-b', label: 'b', value: 'b', shiftValue: 'B', code: 'KeyB', type: 'character' },
        { id: 'ku-n', label: 'n', value: 'n', shiftValue: 'N', code: 'KeyN', type: 'character' },
        { id: 'ku-m', label: 'm', value: 'm', shiftValue: 'M', code: 'KeyM', type: 'character' },
        { id: 'ku-comma', label: 'ö', value: 'ö', shiftValue: 'Ö', code: 'Comma', type: 'character' },
        { id: 'ku-period', label: 'ç', value: 'ç', shiftValue: 'Ç', code: 'Period', type: 'character' },
        { id: 'ku-slash', label: '.', value: '.', shiftValue: ':', code: 'Slash', type: 'character' },
        { id: 'ku-shift-right', label: '⇧', value: 'Shift', code: 'ShiftRight', type: 'modifier', width: 2.3 },
      ],
    },
    {
      keys: [
        { id: 'ku-space', label: 'Space', value: ' ', code: 'Space', type: 'space', width: 6 },
      ],
    },
  ],
  physicalKeyMap: {
    'Backquote': '"', 'Digit1': '1', 'Digit2': '2', 'Digit3': '3', 'Digit4': '4',
    'Digit5': '5', 'Digit6': '6', 'Digit7': '7', 'Digit8': '8', 'Digit9': '9',
    'Digit0': '0', 'Minus': '*', 'Equal': '-',
    'KeyQ': 'q', 'KeyW': 'w', 'KeyE': 'e', 'KeyR': 'r', 'KeyT': 't',
    'KeyY': 'y', 'KeyU': 'u', 'KeyI': 'ı', 'KeyO': 'o', 'KeyP': 'p',
    'BracketLeft': 'ğ', 'BracketRight': 'ü',
    'KeyA': 'a', 'KeyS': 's', 'KeyD': 'd', 'KeyF': 'f', 'KeyG': 'g',
    'KeyH': 'h', 'KeyJ': 'j', 'KeyK': 'k', 'KeyL': 'l',
    'Semicolon': 'ş', 'Quote': 'i',
    'KeyZ': 'z', 'KeyX': 'x', 'KeyC': 'c', 'KeyV': 'v', 'KeyB': 'b',
    'KeyN': 'n', 'KeyM': 'm', 'Comma': 'ö', 'Period': 'ç', 'Slash': '.',
    'Space': ' ',
  },
};
