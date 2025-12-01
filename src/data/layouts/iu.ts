/**
 * Inuktitut Keyboard Layout - Canadian Aboriginal Syllabics
 */

import type { KeyboardLayout } from '@/types/keyboard';

export const inuktitutLayout: KeyboardLayout = {
  id: 'iu',
  name: 'Inuktitut',
  nativeName: 'ᐃᓄᒃᑎᑐᑦ',
  direction: 'ltr',
  fontFamily: "'Noto Sans Canadian Aboriginal', 'Euphemia', system-ui",
  rows: [
    {
      keys: [
        { id: 'iu-backtick', label: '`', value: '`', shiftValue: '~', code: 'Backquote', type: 'character' },
        { id: 'iu-1', label: '1', value: '1', shiftValue: '!', code: 'Digit1', type: 'character' },
        { id: 'iu-2', label: '2', value: '2', shiftValue: '@', code: 'Digit2', type: 'character' },
        { id: 'iu-3', label: '3', value: '3', shiftValue: '#', code: 'Digit3', type: 'character' },
        { id: 'iu-4', label: '4', value: '4', shiftValue: '$', code: 'Digit4', type: 'character' },
        { id: 'iu-5', label: '5', value: '5', shiftValue: '%', code: 'Digit5', type: 'character' },
        { id: 'iu-6', label: '6', value: '6', shiftValue: '^', code: 'Digit6', type: 'character' },
        { id: 'iu-7', label: '7', value: '7', shiftValue: '&', code: 'Digit7', type: 'character' },
        { id: 'iu-8', label: '8', value: '8', shiftValue: '*', code: 'Digit8', type: 'character' },
        { id: 'iu-9', label: '9', value: '9', shiftValue: '(', code: 'Digit9', type: 'character' },
        { id: 'iu-0', label: '0', value: '0', shiftValue: ')', code: 'Digit0', type: 'character' },
        { id: 'iu-minus', label: '-', value: '-', shiftValue: '_', code: 'Minus', type: 'character' },
        { id: 'iu-equal', label: '=', value: '=', shiftValue: '+', code: 'Equal', type: 'character' },
        { id: 'iu-backspace', label: '⌫', value: 'Backspace', code: 'Backspace', type: 'action', width: 1.5 },
      ],
    },
    {
      keys: [
        { id: 'iu-tab', label: 'Tab', value: 'Tab', code: 'Tab', type: 'action', width: 1.5 },
        { id: 'iu-q', label: 'ᖅ', value: 'ᖅ', shiftValue: 'Q', code: 'KeyQ', type: 'character' },
        { id: 'iu-w', label: 'ᐃ', value: 'ᐃ', shiftValue: 'ᐄ', code: 'KeyW', type: 'character' },
        { id: 'iu-e', label: 'ᐅ', value: 'ᐅ', shiftValue: 'ᐆ', code: 'KeyE', type: 'character' },
        { id: 'iu-r', label: 'ᐊ', value: 'ᐊ', shiftValue: 'ᐋ', code: 'KeyR', type: 'character' },
        { id: 'iu-t', label: 'ᑎ', value: 'ᑎ', shiftValue: 'ᑏ', code: 'KeyT', type: 'character' },
        { id: 'iu-y', label: 'ᑐ', value: 'ᑐ', shiftValue: 'ᑑ', code: 'KeyY', type: 'character' },
        { id: 'iu-u', label: 'ᑕ', value: 'ᑕ', shiftValue: 'ᑖ', code: 'KeyU', type: 'character' },
        { id: 'iu-i', label: 'ᐱ', value: 'ᐱ', shiftValue: 'ᐲ', code: 'KeyI', type: 'character' },
        { id: 'iu-o', label: 'ᐳ', value: 'ᐳ', shiftValue: 'ᐴ', code: 'KeyO', type: 'character' },
        { id: 'iu-p', label: 'ᐸ', value: 'ᐸ', shiftValue: 'ᐹ', code: 'KeyP', type: 'character' },
        { id: 'iu-bracketleft', label: '[', value: '[', shiftValue: '{', code: 'BracketLeft', type: 'character' },
        { id: 'iu-bracketright', label: ']', value: ']', shiftValue: '}', code: 'BracketRight', type: 'character' },
      ],
    },
    {
      keys: [
        { id: 'iu-caps', label: 'Caps', value: 'CapsLock', code: 'CapsLock', type: 'modifier', width: 1.8 },
        { id: 'iu-a', label: 'ᐁ', value: 'ᐁ', shiftValue: 'ᐂ', code: 'KeyA', type: 'character' },
        { id: 'iu-s', label: 'ᓯ', value: 'ᓯ', shiftValue: 'ᓰ', code: 'KeyS', type: 'character' },
        { id: 'iu-d', label: 'ᓱ', value: 'ᓱ', shiftValue: 'ᓲ', code: 'KeyD', type: 'character' },
        { id: 'iu-f', label: 'ᓴ', value: 'ᓴ', shiftValue: 'ᓵ', code: 'KeyF', type: 'character' },
        { id: 'iu-g', label: 'ᒋ', value: 'ᒋ', shiftValue: 'ᒌ', code: 'KeyG', type: 'character' },
        { id: 'iu-h', label: 'ᒍ', value: 'ᒍ', shiftValue: 'ᒎ', code: 'KeyH', type: 'character' },
        { id: 'iu-j', label: 'ᒐ', value: 'ᒐ', shiftValue: 'ᒑ', code: 'KeyJ', type: 'character' },
        { id: 'iu-k', label: 'ᑭ', value: 'ᑭ', shiftValue: 'ᑮ', code: 'KeyK', type: 'character' },
        { id: 'iu-l', label: 'ᑯ', value: 'ᑯ', shiftValue: 'ᑰ', code: 'KeyL', type: 'character' },
        { id: 'iu-semicolon', label: 'ᑲ', value: 'ᑲ', shiftValue: 'ᑳ', code: 'Semicolon', type: 'character' },
        { id: 'iu-quote', label: "'", value: "'", shiftValue: '"', code: 'Quote', type: 'character' },
        { id: 'iu-enter', label: 'Enter', value: 'Enter', code: 'Enter', type: 'action', width: 1.8 },
      ],
    },
    {
      keys: [
        { id: 'iu-shift-left', label: '⇧', value: 'Shift', code: 'ShiftLeft', type: 'modifier', width: 2.3 },
        { id: 'iu-z', label: 'ᕕ', value: 'ᕕ', shiftValue: 'ᕖ', code: 'KeyZ', type: 'character' },
        { id: 'iu-x', label: 'ᕗ', value: 'ᕗ', shiftValue: 'ᕘ', code: 'KeyX', type: 'character' },
        { id: 'iu-c', label: 'ᕙ', value: 'ᕙ', shiftValue: 'ᕚ', code: 'KeyC', type: 'character' },
        { id: 'iu-v', label: 'ᒥ', value: 'ᒥ', shiftValue: 'ᒦ', code: 'KeyV', type: 'character' },
        { id: 'iu-b', label: 'ᒧ', value: 'ᒧ', shiftValue: 'ᒨ', code: 'KeyB', type: 'character' },
        { id: 'iu-n', label: 'ᒪ', value: 'ᒪ', shiftValue: 'ᒫ', code: 'KeyN', type: 'character' },
        { id: 'iu-m', label: 'ᓂ', value: 'ᓂ', shiftValue: 'ᓃ', code: 'KeyM', type: 'character' },
        { id: 'iu-comma', label: 'ᓄ', value: 'ᓄ', shiftValue: 'ᓅ', code: 'Comma', type: 'character' },
        { id: 'iu-period', label: 'ᓇ', value: 'ᓇ', shiftValue: 'ᓈ', code: 'Period', type: 'character' },
        { id: 'iu-slash', label: '/', value: '/', shiftValue: '?', code: 'Slash', type: 'character' },
        { id: 'iu-shift-right', label: '⇧', value: 'Shift', code: 'ShiftRight', type: 'modifier', width: 2.3 },
      ],
    },
    {
      keys: [
        { id: 'iu-space', label: 'Space', value: ' ', code: 'Space', type: 'space', width: 6 },
      ],
    },
  ],
  physicalKeyMap: {
    'Backquote': '`', 'Digit1': '1', 'Digit2': '2', 'Digit3': '3', 'Digit4': '4',
    'Digit5': '5', 'Digit6': '6', 'Digit7': '7', 'Digit8': '8', 'Digit9': '9',
    'Digit0': '0', 'Minus': '-', 'Equal': '=',
    'KeyQ': 'ᖅ', 'KeyW': 'ᐃ', 'KeyE': 'ᐅ', 'KeyR': 'ᐊ', 'KeyT': 'ᑎ',
    'KeyY': 'ᑐ', 'KeyU': 'ᑕ', 'KeyI': 'ᐱ', 'KeyO': 'ᐳ', 'KeyP': 'ᐸ',
    'BracketLeft': '[', 'BracketRight': ']',
    'KeyA': 'ᐁ', 'KeyS': 'ᓯ', 'KeyD': 'ᓱ', 'KeyF': 'ᓴ', 'KeyG': 'ᒋ',
    'KeyH': 'ᒍ', 'KeyJ': 'ᒐ', 'KeyK': 'ᑭ', 'KeyL': 'ᑯ',
    'Semicolon': 'ᑲ', 'Quote': "'",
    'KeyZ': 'ᕕ', 'KeyX': 'ᕗ', 'KeyC': 'ᕙ', 'KeyV': 'ᒥ', 'KeyB': 'ᒧ',
    'KeyN': 'ᒪ', 'KeyM': 'ᓂ', 'Comma': 'ᓄ', 'Period': 'ᓇ', 'Slash': '/',
    'Space': ' ',
  },
};
