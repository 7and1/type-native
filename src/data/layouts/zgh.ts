/**
 * Tifinagh (Berber) Keyboard Layout
 */

import type { KeyboardLayout } from '@/types/keyboard';

export const tifinaghLayout: KeyboardLayout = {
  id: 'zgh',
  name: 'Tifinagh (Berber)',
  nativeName: 'ⵜⴰⵎⴰⵣⵉⵖⵜ',
  direction: 'ltr',
  fontFamily: 'system-ui, sans-serif',
  rows: [
    {
      keys: [
        { id: 'zgh-backtick', label: '`', value: '`', shiftValue: '~', code: 'Backquote', type: 'character' },
        { id: 'zgh-1', label: '1', value: '1', shiftValue: '!', code: 'Digit1', type: 'character' },
        { id: 'zgh-2', label: '2', value: '2', shiftValue: '@', code: 'Digit2', type: 'character' },
        { id: 'zgh-3', label: '3', value: '3', shiftValue: '#', code: 'Digit3', type: 'character' },
        { id: 'zgh-4', label: '4', value: '4', shiftValue: '$', code: 'Digit4', type: 'character' },
        { id: 'zgh-5', label: '5', value: '5', shiftValue: '%', code: 'Digit5', type: 'character' },
        { id: 'zgh-6', label: '6', value: '6', shiftValue: '^', code: 'Digit6', type: 'character' },
        { id: 'zgh-7', label: '7', value: '7', shiftValue: '&', code: 'Digit7', type: 'character' },
        { id: 'zgh-8', label: '8', value: '8', shiftValue: '*', code: 'Digit8', type: 'character' },
        { id: 'zgh-9', label: '9', value: '9', shiftValue: '(', code: 'Digit9', type: 'character' },
        { id: 'zgh-0', label: '0', value: '0', shiftValue: ')', code: 'Digit0', type: 'character' },
        { id: 'zgh-minus', label: '-', value: '-', shiftValue: '_', code: 'Minus', type: 'character' },
        { id: 'zgh-equal', label: '=', value: '=', shiftValue: '+', code: 'Equal', type: 'character' },
        { id: 'zgh-backspace', label: '⌫', value: 'Backspace', code: 'Backspace', type: 'action', width: 1.5 },
      ],
    },
    {
      keys: [
        { id: 'zgh-tab', label: 'Tab', value: 'Tab', code: 'Tab', type: 'action', width: 1.5 },
        { id: 'zgh-q', label: 'ⴰ', value: 'ⴰ', shiftValue: 'ⴰ', code: 'KeyQ', type: 'character' },
        { id: 'zgh-w', label: 'ⵣ', value: 'ⵣ', shiftValue: 'ⵣ', code: 'KeyW', type: 'character' },
        { id: 'zgh-e', label: 'ⴻ', value: 'ⴻ', shiftValue: 'ⴻ', code: 'KeyE', type: 'character' },
        { id: 'zgh-r', label: 'ⵔ', value: 'ⵔ', shiftValue: 'ⵔ', code: 'KeyR', type: 'character' },
        { id: 'zgh-t', label: 'ⵜ', value: 'ⵜ', shiftValue: 'ⵜ', code: 'KeyT', type: 'character' },
        { id: 'zgh-y', label: 'ⵢ', value: 'ⵢ', shiftValue: 'ⵢ', code: 'KeyY', type: 'character' },
        { id: 'zgh-u', label: 'ⵓ', value: 'ⵓ', shiftValue: 'ⵓ', code: 'KeyU', type: 'character' },
        { id: 'zgh-i', label: 'ⵉ', value: 'ⵉ', shiftValue: 'ⵉ', code: 'KeyI', type: 'character' },
        { id: 'zgh-o', label: 'ⵄ', value: 'ⵄ', shiftValue: 'ⵄ', code: 'KeyO', type: 'character' },
        { id: 'zgh-p', label: 'ⵃ', value: 'ⵃ', shiftValue: 'ⵃ', code: 'KeyP', type: 'character' },
        { id: 'zgh-bracketleft', label: 'ⵯ', value: 'ⵯ', shiftValue: 'ⵯ', code: 'BracketLeft', type: 'character' },
        { id: 'zgh-bracketright', label: 'ⵖ', value: 'ⵖ', shiftValue: 'ⵖ', code: 'BracketRight', type: 'character' },
      ],
    },
    {
      keys: [
        { id: 'zgh-caps', label: 'Caps', value: 'CapsLock', code: 'CapsLock', type: 'modifier', width: 1.8 },
        { id: 'zgh-a', label: 'ⵇ', value: 'ⵇ', shiftValue: 'ⵇ', code: 'KeyA', type: 'character' },
        { id: 'zgh-s', label: 'ⵙ', value: 'ⵙ', shiftValue: 'ⵚ', code: 'KeyS', type: 'character' },
        { id: 'zgh-d', label: 'ⴷ', value: 'ⴷ', shiftValue: 'ⴹ', code: 'KeyD', type: 'character' },
        { id: 'zgh-f', label: 'ⴼ', value: 'ⴼ', shiftValue: 'ⴼ', code: 'KeyF', type: 'character' },
        { id: 'zgh-g', label: 'ⴳ', value: 'ⴳ', shiftValue: 'ⴳ', code: 'KeyG', type: 'character' },
        { id: 'zgh-h', label: 'ⵀ', value: 'ⵀ', shiftValue: 'ⵀ', code: 'KeyH', type: 'character' },
        { id: 'zgh-j', label: 'ⵊ', value: 'ⵊ', shiftValue: 'ⵊ', code: 'KeyJ', type: 'character' },
        { id: 'zgh-k', label: 'ⴽ', value: 'ⴽ', shiftValue: 'ⴽ', code: 'KeyK', type: 'character' },
        { id: 'zgh-l', label: 'ⵍ', value: 'ⵍ', shiftValue: 'ⵍ', code: 'KeyL', type: 'character' },
        { id: 'zgh-semicolon', label: 'ⵎ', value: 'ⵎ', shiftValue: 'ⵎ', code: 'Semicolon', type: 'character' },
        { id: 'zgh-quote', label: 'ⵏ', value: 'ⵏ', shiftValue: 'ⵏ', code: 'Quote', type: 'character' },
        { id: 'zgh-enter', label: 'Enter', value: 'Enter', code: 'Enter', type: 'action', width: 1.8 },
      ],
    },
    {
      keys: [
        { id: 'zgh-shift-left', label: '⇧', value: 'Shift', code: 'ShiftLeft', type: 'modifier', width: 2.3 },
        { id: 'zgh-z', label: 'ⵡ', value: 'ⵡ', shiftValue: 'ⵡ', code: 'KeyZ', type: 'character' },
        { id: 'zgh-x', label: 'ⵅ', value: 'ⵅ', shiftValue: 'ⵅ', code: 'KeyX', type: 'character' },
        { id: 'zgh-c', label: 'ⵛ', value: 'ⵛ', shiftValue: 'ⵛ', code: 'KeyC', type: 'character' },
        { id: 'zgh-v', label: 'ⵖ', value: 'ⵖ', shiftValue: 'ⵖ', code: 'KeyV', type: 'character' },
        { id: 'zgh-b', label: 'ⴱ', value: 'ⴱ', shiftValue: 'ⴱ', code: 'KeyB', type: 'character' },
        { id: 'zgh-n', label: 'ⵏ', value: 'ⵏ', shiftValue: 'ⵏ', code: 'KeyN', type: 'character' },
        { id: 'zgh-m', label: 'ⵎ', value: 'ⵎ', shiftValue: 'ⵎ', code: 'KeyM', type: 'character' },
        { id: 'zgh-comma', label: ',', value: ',', shiftValue: '<', code: 'Comma', type: 'character' },
        { id: 'zgh-period', label: '.', value: '.', shiftValue: '>', code: 'Period', type: 'character' },
        { id: 'zgh-slash', label: '/', value: '/', shiftValue: '?', code: 'Slash', type: 'character' },
        { id: 'zgh-shift-right', label: '⇧', value: 'Shift', code: 'ShiftRight', type: 'modifier', width: 2.3 },
      ],
    },
    {
      keys: [
        { id: 'zgh-space', label: 'Space', value: ' ', code: 'Space', type: 'space', width: 6 },
      ],
    },
  ],
  physicalKeyMap: {
    'Backquote': '`', 'Digit1': '1', 'Digit2': '2', 'Digit3': '3', 'Digit4': '4',
    'Digit5': '5', 'Digit6': '6', 'Digit7': '7', 'Digit8': '8', 'Digit9': '9',
    'Digit0': '0', 'Minus': '-', 'Equal': '=',
    'KeyQ': 'ⴰ', 'KeyW': 'ⵣ', 'KeyE': 'ⴻ', 'KeyR': 'ⵔ', 'KeyT': 'ⵜ',
    'KeyY': 'ⵢ', 'KeyU': 'ⵓ', 'KeyI': 'ⵉ', 'KeyO': 'ⵄ', 'KeyP': 'ⵃ',
    'BracketLeft': 'ⵯ', 'BracketRight': 'ⵖ',
    'KeyA': 'ⵇ', 'KeyS': 'ⵙ', 'KeyD': 'ⴷ', 'KeyF': 'ⴼ', 'KeyG': 'ⴳ',
    'KeyH': 'ⵀ', 'KeyJ': 'ⵊ', 'KeyK': 'ⴽ', 'KeyL': 'ⵍ',
    'Semicolon': 'ⵎ', 'Quote': 'ⵏ',
    'KeyZ': 'ⵡ', 'KeyX': 'ⵅ', 'KeyC': 'ⵛ', 'KeyV': 'ⵖ', 'KeyB': 'ⴱ',
    'KeyN': 'ⵏ', 'KeyM': 'ⵎ', 'Comma': ',', 'Period': '.', 'Slash': '/',
    'Space': ' ',
  },
};
