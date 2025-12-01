/**
 * Divehi (Maldivian) Keyboard Layout - RTL
 */

import type { KeyboardLayout } from '@/types/keyboard';

export const divehiLayout: KeyboardLayout = {
  id: 'dv',
  name: 'Divehi',
  nativeName: 'ދިވެހި',
  direction: 'rtl',
  fontFamily: 'system-ui, sans-serif',
  rows: [
    {
      keys: [
        { id: 'dv-backtick', label: '`', value: '`', shiftValue: '~', code: 'Backquote', type: 'character' },
        { id: 'dv-1', label: '1', value: '1', shiftValue: '!', code: 'Digit1', type: 'character' },
        { id: 'dv-2', label: '2', value: '2', shiftValue: '@', code: 'Digit2', type: 'character' },
        { id: 'dv-3', label: '3', value: '3', shiftValue: '#', code: 'Digit3', type: 'character' },
        { id: 'dv-4', label: '4', value: '4', shiftValue: '$', code: 'Digit4', type: 'character' },
        { id: 'dv-5', label: '5', value: '5', shiftValue: '%', code: 'Digit5', type: 'character' },
        { id: 'dv-6', label: '6', value: '6', shiftValue: '^', code: 'Digit6', type: 'character' },
        { id: 'dv-7', label: '7', value: '7', shiftValue: '&', code: 'Digit7', type: 'character' },
        { id: 'dv-8', label: '8', value: '8', shiftValue: '*', code: 'Digit8', type: 'character' },
        { id: 'dv-9', label: '9', value: '9', shiftValue: '(', code: 'Digit9', type: 'character' },
        { id: 'dv-0', label: '0', value: '0', shiftValue: ')', code: 'Digit0', type: 'character' },
        { id: 'dv-minus', label: '-', value: '-', shiftValue: '_', code: 'Minus', type: 'character' },
        { id: 'dv-equal', label: '=', value: '=', shiftValue: '+', code: 'Equal', type: 'character' },
        { id: 'dv-backspace', label: '⌫', value: 'Backspace', code: 'Backspace', type: 'action', width: 1.5 },
      ],
    },
    {
      keys: [
        { id: 'dv-tab', label: 'Tab', value: 'Tab', code: 'Tab', type: 'action', width: 1.5 },
        { id: 'dv-q', label: 'ޤ', value: 'ޤ', shiftValue: '°', code: 'KeyQ', type: 'character' },
        { id: 'dv-w', label: 'ވ', value: 'ވ', shiftValue: 'އ', code: 'KeyW', type: 'character' },
        { id: 'dv-e', label: 'ެ', value: 'ެ', shiftValue: 'ޭ', code: 'KeyE', type: 'character' },
        { id: 'dv-r', label: 'ރ', value: 'ރ', shiftValue: 'ޜ', code: 'KeyR', type: 'character' },
        { id: 'dv-t', label: 'ތ', value: 'ތ', shiftValue: 'ޓ', code: 'KeyT', type: 'character' },
        { id: 'dv-y', label: 'ޔ', value: 'ޔ', shiftValue: 'ޠ', code: 'KeyY', type: 'character' },
        { id: 'dv-u', label: 'ު', value: 'ު', shiftValue: 'ޫ', code: 'KeyU', type: 'character' },
        { id: 'dv-i', label: 'ި', value: 'ި', shiftValue: 'ީ', code: 'KeyI', type: 'character' },
        { id: 'dv-o', label: 'ޮ', value: 'ޮ', shiftValue: 'ޯ', code: 'KeyO', type: 'character' },
        { id: 'dv-p', label: 'ޕ', value: 'ޕ', shiftValue: '÷', code: 'KeyP', type: 'character' },
        { id: 'dv-bracketleft', label: ']', value: ']', shiftValue: '×', code: 'BracketLeft', type: 'character' },
        { id: 'dv-bracketright', label: '[', value: '[', shiftValue: 'ތ', code: 'BracketRight', type: 'character' },
      ],
    },
    {
      keys: [
        { id: 'dv-caps', label: 'Caps', value: 'CapsLock', code: 'CapsLock', type: 'modifier', width: 1.8 },
        { id: 'dv-a', label: 'ަ', value: 'ަ', shiftValue: 'ާ', code: 'KeyA', type: 'character' },
        { id: 'dv-s', label: 'ސ', value: 'ސ', shiftValue: 'ށ', code: 'KeyS', type: 'character' },
        { id: 'dv-d', label: 'ދ', value: 'ދ', shiftValue: 'ޑ', code: 'KeyD', type: 'character' },
        { id: 'dv-f', label: 'ފ', value: 'ފ', shiftValue: 'ﷲ', code: 'KeyF', type: 'character' },
        { id: 'dv-g', label: 'ގ', value: 'ގ', shiftValue: 'ޣ', code: 'KeyG', type: 'character' },
        { id: 'dv-h', label: 'ހ', value: 'ހ', shiftValue: 'ޙ', code: 'KeyH', type: 'character' },
        { id: 'dv-j', label: 'ޖ', value: 'ޖ', shiftValue: 'ޛ', code: 'KeyJ', type: 'character' },
        { id: 'dv-k', label: 'ކ', value: 'ކ', shiftValue: 'ޚ', code: 'KeyK', type: 'character' },
        { id: 'dv-l', label: 'ލ', value: 'ލ', shiftValue: 'ޅ', code: 'KeyL', type: 'character' },
        { id: 'dv-semicolon', label: '؛', value: '؛', shiftValue: ':', code: 'Semicolon', type: 'character' },
        { id: 'dv-quote', label: "'", value: "'", shiftValue: '"', code: 'Quote', type: 'character' },
        { id: 'dv-enter', label: 'Enter', value: 'Enter', code: 'Enter', type: 'action', width: 1.8 },
      ],
    },
    {
      keys: [
        { id: 'dv-shift-left', label: '⇧', value: 'Shift', code: 'ShiftLeft', type: 'modifier', width: 2.3 },
        { id: 'dv-z', label: 'ޒ', value: 'ޒ', shiftValue: 'ޡ', code: 'KeyZ', type: 'character' },
        { id: 'dv-x', label: '×', value: '×', shiftValue: 'ޘ', code: 'KeyX', type: 'character' },
        { id: 'dv-c', label: 'ޗ', value: 'ޗ', shiftValue: 'ޢ', code: 'KeyC', type: 'character' },
        { id: 'dv-v', label: 'ވ', value: 'ވ', shiftValue: 'ޥ', code: 'KeyV', type: 'character' },
        { id: 'dv-b', label: 'ބ', value: 'ބ', shiftValue: 'ޞ', code: 'KeyB', type: 'character' },
        { id: 'dv-n', label: 'ނ', value: 'ނ', shiftValue: 'ޏ', code: 'KeyN', type: 'character' },
        { id: 'dv-m', label: 'މ', value: 'މ', shiftValue: 'ޟ', code: 'KeyM', type: 'character' },
        { id: 'dv-comma', label: '،', value: '،', shiftValue: '<', code: 'Comma', type: 'character' },
        { id: 'dv-period', label: '.', value: '.', shiftValue: '>', code: 'Period', type: 'character' },
        { id: 'dv-slash', label: '/', value: '/', shiftValue: '؟', code: 'Slash', type: 'character' },
        { id: 'dv-shift-right', label: '⇧', value: 'Shift', code: 'ShiftRight', type: 'modifier', width: 2.3 },
      ],
    },
    {
      keys: [
        { id: 'dv-space', label: 'Space', value: ' ', code: 'Space', type: 'space', width: 6 },
      ],
    },
  ],
  physicalKeyMap: {
    'Backquote': '`', 'Digit1': '1', 'Digit2': '2', 'Digit3': '3', 'Digit4': '4',
    'Digit5': '5', 'Digit6': '6', 'Digit7': '7', 'Digit8': '8', 'Digit9': '9',
    'Digit0': '0', 'Minus': '-', 'Equal': '=',
    'KeyQ': 'ޤ', 'KeyW': 'ވ', 'KeyE': 'ެ', 'KeyR': 'ރ', 'KeyT': 'ތ',
    'KeyY': 'ޔ', 'KeyU': 'ު', 'KeyI': 'ި', 'KeyO': 'ޮ', 'KeyP': 'ޕ',
    'BracketLeft': ']', 'BracketRight': '[',
    'KeyA': 'ަ', 'KeyS': 'ސ', 'KeyD': 'ދ', 'KeyF': 'ފ', 'KeyG': 'ގ',
    'KeyH': 'ހ', 'KeyJ': 'ޖ', 'KeyK': 'ކ', 'KeyL': 'ލ',
    'Semicolon': '؛', 'Quote': "'",
    'KeyZ': 'ޒ', 'KeyX': '×', 'KeyC': 'ޗ', 'KeyV': 'ވ', 'KeyB': 'ބ',
    'KeyN': 'ނ', 'KeyM': 'މ', 'Comma': '،', 'Period': '.', 'Slash': '/',
    'Space': ' ',
  },
};
