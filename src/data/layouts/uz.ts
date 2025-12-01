/**
 * Uzbek Keyboard Layout - Cyrillic-based
 */

import type { KeyboardLayout } from '@/types/keyboard';

export const uzbekLayout: KeyboardLayout = {
  id: 'uz',
  name: 'Uzbek (Cyrillic)',
  nativeName: 'Ўзбекча',
  direction: 'ltr',
  fontFamily: 'system-ui, sans-serif',
  rows: [
    {
      keys: [
        { id: 'uz-backtick', label: '(', value: '(', shiftValue: ')', code: 'Backquote', type: 'character' },
        { id: 'uz-1', label: '1', value: '1', shiftValue: '!', code: 'Digit1', type: 'character' },
        { id: 'uz-2', label: '2', value: '2', shiftValue: '"', code: 'Digit2', type: 'character' },
        { id: 'uz-3', label: '3', value: '3', shiftValue: '№', code: 'Digit3', type: 'character' },
        { id: 'uz-4', label: '4', value: '4', shiftValue: ';', code: 'Digit4', type: 'character' },
        { id: 'uz-5', label: '5', value: '5', shiftValue: '%', code: 'Digit5', type: 'character' },
        { id: 'uz-6', label: '6', value: '6', shiftValue: ':', code: 'Digit6', type: 'character' },
        { id: 'uz-7', label: '7', value: '7', shiftValue: '?', code: 'Digit7', type: 'character' },
        { id: 'uz-8', label: '8', value: '8', shiftValue: '*', code: 'Digit8', type: 'character' },
        { id: 'uz-9', label: '9', value: '9', shiftValue: '(', code: 'Digit9', type: 'character' },
        { id: 'uz-0', label: '0', value: '0', shiftValue: ')', code: 'Digit0', type: 'character' },
        { id: 'uz-minus', label: '-', value: '-', shiftValue: '_', code: 'Minus', type: 'character' },
        { id: 'uz-equal', label: '=', value: '=', shiftValue: '+', code: 'Equal', type: 'character' },
        { id: 'uz-backspace', label: '⌫', value: 'Backspace', code: 'Backspace', type: 'action', width: 1.5 },
      ],
    },
    {
      keys: [
        { id: 'uz-tab', label: 'Tab', value: 'Tab', code: 'Tab', type: 'action', width: 1.5 },
        { id: 'uz-q', label: 'й', value: 'й', shiftValue: 'Й', code: 'KeyQ', type: 'character' },
        { id: 'uz-w', label: 'ц', value: 'ц', shiftValue: 'Ц', code: 'KeyW', type: 'character' },
        { id: 'uz-e', label: 'у', value: 'у', shiftValue: 'У', code: 'KeyE', type: 'character' },
        { id: 'uz-r', label: 'к', value: 'к', shiftValue: 'К', code: 'KeyR', type: 'character' },
        { id: 'uz-t', label: 'е', value: 'е', shiftValue: 'Е', code: 'KeyT', type: 'character' },
        { id: 'uz-y', label: 'н', value: 'н', shiftValue: 'Н', code: 'KeyY', type: 'character' },
        { id: 'uz-u', label: 'г', value: 'г', shiftValue: 'Г', code: 'KeyU', type: 'character' },
        { id: 'uz-i', label: 'ш', value: 'ш', shiftValue: 'Ш', code: 'KeyI', type: 'character' },
        { id: 'uz-o', label: 'ў', value: 'ў', shiftValue: 'Ў', code: 'KeyO', type: 'character' },
        { id: 'uz-p', label: 'з', value: 'з', shiftValue: 'З', code: 'KeyP', type: 'character' },
        { id: 'uz-bracketleft', label: 'х', value: 'х', shiftValue: 'Х', code: 'BracketLeft', type: 'character' },
        { id: 'uz-bracketright', label: 'ъ', value: 'ъ', shiftValue: 'Ъ', code: 'BracketRight', type: 'character' },
      ],
    },
    {
      keys: [
        { id: 'uz-caps', label: 'Caps', value: 'CapsLock', code: 'CapsLock', type: 'modifier', width: 1.8 },
        { id: 'uz-a', label: 'ф', value: 'ф', shiftValue: 'Ф', code: 'KeyA', type: 'character' },
        { id: 'uz-s', label: 'қ', value: 'қ', shiftValue: 'Қ', code: 'KeyS', type: 'character' },
        { id: 'uz-d', label: 'в', value: 'в', shiftValue: 'В', code: 'KeyD', type: 'character' },
        { id: 'uz-f', label: 'а', value: 'а', shiftValue: 'А', code: 'KeyF', type: 'character' },
        { id: 'uz-g', label: 'п', value: 'п', shiftValue: 'П', code: 'KeyG', type: 'character' },
        { id: 'uz-h', label: 'р', value: 'р', shiftValue: 'Р', code: 'KeyH', type: 'character' },
        { id: 'uz-j', label: 'о', value: 'о', shiftValue: 'О', code: 'KeyJ', type: 'character' },
        { id: 'uz-k', label: 'л', value: 'л', shiftValue: 'Л', code: 'KeyK', type: 'character' },
        { id: 'uz-l', label: 'д', value: 'д', shiftValue: 'Д', code: 'KeyL', type: 'character' },
        { id: 'uz-semicolon', label: 'ж', value: 'ж', shiftValue: 'Ж', code: 'Semicolon', type: 'character' },
        { id: 'uz-quote', label: 'э', value: 'э', shiftValue: 'Э', code: 'Quote', type: 'character' },
        { id: 'uz-enter', label: 'Enter', value: 'Enter', code: 'Enter', type: 'action', width: 1.8 },
      ],
    },
    {
      keys: [
        { id: 'uz-shift-left', label: '⇧', value: 'Shift', code: 'ShiftLeft', type: 'modifier', width: 2.3 },
        { id: 'uz-z', label: 'я', value: 'я', shiftValue: 'Я', code: 'KeyZ', type: 'character' },
        { id: 'uz-x', label: 'ч', value: 'ч', shiftValue: 'Ч', code: 'KeyX', type: 'character' },
        { id: 'uz-c', label: 'с', value: 'с', shiftValue: 'С', code: 'KeyC', type: 'character' },
        { id: 'uz-v', label: 'м', value: 'м', shiftValue: 'М', code: 'KeyV', type: 'character' },
        { id: 'uz-b', label: 'и', value: 'и', shiftValue: 'И', code: 'KeyB', type: 'character' },
        { id: 'uz-n', label: 'т', value: 'т', shiftValue: 'Т', code: 'KeyN', type: 'character' },
        { id: 'uz-m', label: 'ғ', value: 'ғ', shiftValue: 'Ғ', code: 'KeyM', type: 'character' },
        { id: 'uz-comma', label: 'б', value: 'б', shiftValue: 'Б', code: 'Comma', type: 'character' },
        { id: 'uz-period', label: 'ю', value: 'ю', shiftValue: 'Ю', code: 'Period', type: 'character' },
        { id: 'uz-slash', label: '.', value: '.', shiftValue: ',', code: 'Slash', type: 'character' },
        { id: 'uz-shift-right', label: '⇧', value: 'Shift', code: 'ShiftRight', type: 'modifier', width: 2.3 },
      ],
    },
    {
      keys: [
        { id: 'uz-space', label: 'Space', value: ' ', code: 'Space', type: 'space', width: 6 },
      ],
    },
  ],
  physicalKeyMap: {
    'Backquote': '(', 'Digit1': '1', 'Digit2': '2', 'Digit3': '3', 'Digit4': '4',
    'Digit5': '5', 'Digit6': '6', 'Digit7': '7', 'Digit8': '8', 'Digit9': '9',
    'Digit0': '0', 'Minus': '-', 'Equal': '=',
    'KeyQ': 'й', 'KeyW': 'ц', 'KeyE': 'у', 'KeyR': 'к', 'KeyT': 'е',
    'KeyY': 'н', 'KeyU': 'г', 'KeyI': 'ш', 'KeyO': 'ў', 'KeyP': 'з',
    'BracketLeft': 'х', 'BracketRight': 'ъ',
    'KeyA': 'ф', 'KeyS': 'қ', 'KeyD': 'в', 'KeyF': 'а', 'KeyG': 'п',
    'KeyH': 'р', 'KeyJ': 'о', 'KeyK': 'л', 'KeyL': 'д',
    'Semicolon': 'ж', 'Quote': 'э',
    'KeyZ': 'я', 'KeyX': 'ч', 'KeyC': 'с', 'KeyV': 'м', 'KeyB': 'и',
    'KeyN': 'т', 'KeyM': 'ғ', 'Comma': 'б', 'Period': 'ю', 'Slash': '.',
    'Space': ' ',
  },
};
