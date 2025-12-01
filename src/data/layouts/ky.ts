/**
 * Kyrgyz Keyboard Layout - Cyrillic-based
 */

import type { KeyboardLayout } from '@/types/keyboard';

export const kyrgyzLayout: KeyboardLayout = {
  id: 'ky',
  name: 'Kyrgyz',
  nativeName: 'Кыргызча',
  direction: 'ltr',
  fontFamily: 'system-ui, sans-serif',
  rows: [
    {
      keys: [
        { id: 'ky-backtick', label: '(', value: '(', shiftValue: ')', code: 'Backquote', type: 'character' },
        { id: 'ky-1', label: '1', value: '1', shiftValue: '!', code: 'Digit1', type: 'character' },
        { id: 'ky-2', label: '2', value: '2', shiftValue: '"', code: 'Digit2', type: 'character' },
        { id: 'ky-3', label: '3', value: '3', shiftValue: '№', code: 'Digit3', type: 'character' },
        { id: 'ky-4', label: '4', value: '4', shiftValue: ';', code: 'Digit4', type: 'character' },
        { id: 'ky-5', label: '5', value: '5', shiftValue: '%', code: 'Digit5', type: 'character' },
        { id: 'ky-6', label: '6', value: '6', shiftValue: ':', code: 'Digit6', type: 'character' },
        { id: 'ky-7', label: '7', value: '7', shiftValue: '?', code: 'Digit7', type: 'character' },
        { id: 'ky-8', label: '8', value: '8', shiftValue: '*', code: 'Digit8', type: 'character' },
        { id: 'ky-9', label: '9', value: '9', shiftValue: '(', code: 'Digit9', type: 'character' },
        { id: 'ky-0', label: '0', value: '0', shiftValue: ')', code: 'Digit0', type: 'character' },
        { id: 'ky-minus', label: '-', value: '-', shiftValue: '_', code: 'Minus', type: 'character' },
        { id: 'ky-equal', label: '=', value: '=', shiftValue: '+', code: 'Equal', type: 'character' },
        { id: 'ky-backspace', label: '⌫', value: 'Backspace', code: 'Backspace', type: 'action', width: 1.5 },
      ],
    },
    {
      keys: [
        { id: 'ky-tab', label: 'Tab', value: 'Tab', code: 'Tab', type: 'action', width: 1.5 },
        { id: 'ky-q', label: 'й', value: 'й', shiftValue: 'Й', code: 'KeyQ', type: 'character' },
        { id: 'ky-w', label: 'ц', value: 'ц', shiftValue: 'Ц', code: 'KeyW', type: 'character' },
        { id: 'ky-e', label: 'у', value: 'у', shiftValue: 'У', code: 'KeyE', type: 'character' },
        { id: 'ky-r', label: 'к', value: 'к', shiftValue: 'К', code: 'KeyR', type: 'character' },
        { id: 'ky-t', label: 'е', value: 'е', shiftValue: 'Е', code: 'KeyT', type: 'character' },
        { id: 'ky-y', label: 'н', value: 'н', shiftValue: 'Н', code: 'KeyY', type: 'character' },
        { id: 'ky-u', label: 'г', value: 'г', shiftValue: 'Г', code: 'KeyU', type: 'character' },
        { id: 'ky-i', label: 'ш', value: 'ш', shiftValue: 'Ш', code: 'KeyI', type: 'character' },
        { id: 'ky-o', label: 'ө', value: 'ө', shiftValue: 'Ө', code: 'KeyO', type: 'character' },
        { id: 'ky-p', label: 'з', value: 'з', shiftValue: 'З', code: 'KeyP', type: 'character' },
        { id: 'ky-bracketleft', label: 'х', value: 'х', shiftValue: 'Х', code: 'BracketLeft', type: 'character' },
        { id: 'ky-bracketright', label: 'ъ', value: 'ъ', shiftValue: 'Ъ', code: 'BracketRight', type: 'character' },
      ],
    },
    {
      keys: [
        { id: 'ky-caps', label: 'Caps', value: 'CapsLock', code: 'CapsLock', type: 'modifier', width: 1.8 },
        { id: 'ky-a', label: 'ф', value: 'ф', shiftValue: 'Ф', code: 'KeyA', type: 'character' },
        { id: 'ky-s', label: 'ы', value: 'ы', shiftValue: 'Ы', code: 'KeyS', type: 'character' },
        { id: 'ky-d', label: 'в', value: 'в', shiftValue: 'В', code: 'KeyD', type: 'character' },
        { id: 'ky-f', label: 'а', value: 'а', shiftValue: 'А', code: 'KeyF', type: 'character' },
        { id: 'ky-g', label: 'п', value: 'п', shiftValue: 'П', code: 'KeyG', type: 'character' },
        { id: 'ky-h', label: 'р', value: 'р', shiftValue: 'Р', code: 'KeyH', type: 'character' },
        { id: 'ky-j', label: 'о', value: 'о', shiftValue: 'О', code: 'KeyJ', type: 'character' },
        { id: 'ky-k', label: 'л', value: 'л', shiftValue: 'Л', code: 'KeyK', type: 'character' },
        { id: 'ky-l', label: 'д', value: 'д', shiftValue: 'Д', code: 'KeyL', type: 'character' },
        { id: 'ky-semicolon', label: 'ң', value: 'ң', shiftValue: 'Ң', code: 'Semicolon', type: 'character' },
        { id: 'ky-quote', label: 'э', value: 'э', shiftValue: 'Э', code: 'Quote', type: 'character' },
        { id: 'ky-enter', label: 'Enter', value: 'Enter', code: 'Enter', type: 'action', width: 1.8 },
      ],
    },
    {
      keys: [
        { id: 'ky-shift-left', label: '⇧', value: 'Shift', code: 'ShiftLeft', type: 'modifier', width: 2.3 },
        { id: 'ky-z', label: 'я', value: 'я', shiftValue: 'Я', code: 'KeyZ', type: 'character' },
        { id: 'ky-x', label: 'ч', value: 'ч', shiftValue: 'Ч', code: 'KeyX', type: 'character' },
        { id: 'ky-c', label: 'с', value: 'с', shiftValue: 'С', code: 'KeyC', type: 'character' },
        { id: 'ky-v', label: 'м', value: 'м', shiftValue: 'М', code: 'KeyV', type: 'character' },
        { id: 'ky-b', label: 'и', value: 'и', shiftValue: 'И', code: 'KeyB', type: 'character' },
        { id: 'ky-n', label: 'т', value: 'т', shiftValue: 'Т', code: 'KeyN', type: 'character' },
        { id: 'ky-m', label: 'ү', value: 'ү', shiftValue: 'Ү', code: 'KeyM', type: 'character' },
        { id: 'ky-comma', label: 'б', value: 'б', shiftValue: 'Б', code: 'Comma', type: 'character' },
        { id: 'ky-period', label: 'ю', value: 'ю', shiftValue: 'Ю', code: 'Period', type: 'character' },
        { id: 'ky-slash', label: '.', value: '.', shiftValue: ',', code: 'Slash', type: 'character' },
        { id: 'ky-shift-right', label: '⇧', value: 'Shift', code: 'ShiftRight', type: 'modifier', width: 2.3 },
      ],
    },
    {
      keys: [
        { id: 'ky-space', label: 'Space', value: ' ', code: 'Space', type: 'space', width: 6 },
      ],
    },
  ],
  physicalKeyMap: {
    'Backquote': '(', 'Digit1': '1', 'Digit2': '2', 'Digit3': '3', 'Digit4': '4',
    'Digit5': '5', 'Digit6': '6', 'Digit7': '7', 'Digit8': '8', 'Digit9': '9',
    'Digit0': '0', 'Minus': '-', 'Equal': '=',
    'KeyQ': 'й', 'KeyW': 'ц', 'KeyE': 'у', 'KeyR': 'к', 'KeyT': 'е',
    'KeyY': 'н', 'KeyU': 'г', 'KeyI': 'ш', 'KeyO': 'ө', 'KeyP': 'з',
    'BracketLeft': 'х', 'BracketRight': 'ъ',
    'KeyA': 'ф', 'KeyS': 'ы', 'KeyD': 'в', 'KeyF': 'а', 'KeyG': 'п',
    'KeyH': 'р', 'KeyJ': 'о', 'KeyK': 'л', 'KeyL': 'д',
    'Semicolon': 'ң', 'Quote': 'э',
    'KeyZ': 'я', 'KeyX': 'ч', 'KeyC': 'с', 'KeyV': 'м', 'KeyB': 'и',
    'KeyN': 'т', 'KeyM': 'ү', 'Comma': 'б', 'Period': 'ю', 'Slash': '.',
    'Space': ' ',
  },
};
