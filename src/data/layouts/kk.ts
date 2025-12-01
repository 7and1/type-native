/**
 * Kazakh Keyboard Layout - Cyrillic-based
 */

import type { KeyboardLayout } from '@/types/keyboard';

export const kazakhLayout: KeyboardLayout = {
  id: 'kk',
  name: 'Kazakh',
  nativeName: 'Қазақша',
  direction: 'ltr',
  fontFamily: 'system-ui, sans-serif',
  rows: [
    {
      keys: [
        { id: 'kk-backtick', label: '(', value: '(', shiftValue: ')', code: 'Backquote', type: 'character' },
        { id: 'kk-1', label: '1', value: '1', shiftValue: '!', code: 'Digit1', type: 'character' },
        { id: 'kk-2', label: '2', value: '2', shiftValue: '"', code: 'Digit2', type: 'character' },
        { id: 'kk-3', label: '3', value: '3', shiftValue: '№', code: 'Digit3', type: 'character' },
        { id: 'kk-4', label: '4', value: '4', shiftValue: ';', code: 'Digit4', type: 'character' },
        { id: 'kk-5', label: '5', value: '5', shiftValue: '%', code: 'Digit5', type: 'character' },
        { id: 'kk-6', label: '6', value: '6', shiftValue: ':', code: 'Digit6', type: 'character' },
        { id: 'kk-7', label: '7', value: '7', shiftValue: '?', code: 'Digit7', type: 'character' },
        { id: 'kk-8', label: '8', value: '8', shiftValue: '*', code: 'Digit8', type: 'character' },
        { id: 'kk-9', label: '9', value: '9', shiftValue: '(', code: 'Digit9', type: 'character' },
        { id: 'kk-0', label: '0', value: '0', shiftValue: ')', code: 'Digit0', type: 'character' },
        { id: 'kk-minus', label: '-', value: '-', shiftValue: '_', code: 'Minus', type: 'character' },
        { id: 'kk-equal', label: '=', value: '=', shiftValue: '+', code: 'Equal', type: 'character' },
        { id: 'kk-backspace', label: '⌫', value: 'Backspace', code: 'Backspace', type: 'action', width: 1.5 },
      ],
    },
    {
      keys: [
        { id: 'kk-tab', label: 'Tab', value: 'Tab', code: 'Tab', type: 'action', width: 1.5 },
        { id: 'kk-q', label: 'й', value: 'й', shiftValue: 'Й', code: 'KeyQ', type: 'character' },
        { id: 'kk-w', label: 'ц', value: 'ц', shiftValue: 'Ц', code: 'KeyW', type: 'character' },
        { id: 'kk-e', label: 'у', value: 'у', shiftValue: 'У', code: 'KeyE', type: 'character' },
        { id: 'kk-r', label: 'к', value: 'к', shiftValue: 'К', code: 'KeyR', type: 'character' },
        { id: 'kk-t', label: 'е', value: 'е', shiftValue: 'Е', code: 'KeyT', type: 'character' },
        { id: 'kk-y', label: 'н', value: 'н', shiftValue: 'Н', code: 'KeyY', type: 'character' },
        { id: 'kk-u', label: 'г', value: 'г', shiftValue: 'Г', code: 'KeyU', type: 'character' },
        { id: 'kk-i', label: 'ш', value: 'ш', shiftValue: 'Ш', code: 'KeyI', type: 'character' },
        { id: 'kk-o', label: 'щ', value: 'щ', shiftValue: 'Щ', code: 'KeyO', type: 'character' },
        { id: 'kk-p', label: 'з', value: 'з', shiftValue: 'З', code: 'KeyP', type: 'character' },
        { id: 'kk-bracketleft', label: 'х', value: 'х', shiftValue: 'Х', code: 'BracketLeft', type: 'character' },
        { id: 'kk-bracketright', label: 'ъ', value: 'ъ', shiftValue: 'Ъ', code: 'BracketRight', type: 'character' },
      ],
    },
    {
      keys: [
        { id: 'kk-caps', label: 'Caps', value: 'CapsLock', code: 'CapsLock', type: 'modifier', width: 1.8 },
        { id: 'kk-a', label: 'ф', value: 'ф', shiftValue: 'Ф', code: 'KeyA', type: 'character' },
        { id: 'kk-s', label: 'ы', value: 'ы', shiftValue: 'Ы', code: 'KeyS', type: 'character' },
        { id: 'kk-d', label: 'в', value: 'в', shiftValue: 'В', code: 'KeyD', type: 'character' },
        { id: 'kk-f', label: 'а', value: 'а', shiftValue: 'А', code: 'KeyF', type: 'character' },
        { id: 'kk-g', label: 'п', value: 'п', shiftValue: 'П', code: 'KeyG', type: 'character' },
        { id: 'kk-h', label: 'р', value: 'р', shiftValue: 'Р', code: 'KeyH', type: 'character' },
        { id: 'kk-j', label: 'о', value: 'о', shiftValue: 'О', code: 'KeyJ', type: 'character' },
        { id: 'kk-k', label: 'л', value: 'л', shiftValue: 'Л', code: 'KeyK', type: 'character' },
        { id: 'kk-l', label: 'д', value: 'д', shiftValue: 'Д', code: 'KeyL', type: 'character' },
        { id: 'kk-semicolon', label: 'ж', value: 'ж', shiftValue: 'Ж', code: 'Semicolon', type: 'character' },
        { id: 'kk-quote', label: 'э', value: 'э', shiftValue: 'Э', code: 'Quote', type: 'character' },
        { id: 'kk-enter', label: 'Enter', value: 'Enter', code: 'Enter', type: 'action', width: 1.8 },
      ],
    },
    {
      keys: [
        { id: 'kk-shift-left', label: '⇧', value: 'Shift', code: 'ShiftLeft', type: 'modifier', width: 2.3 },
        { id: 'kk-z', label: 'я', value: 'я', shiftValue: 'Я', code: 'KeyZ', type: 'character' },
        { id: 'kk-x', label: 'ч', value: 'ч', shiftValue: 'Ч', code: 'KeyX', type: 'character' },
        { id: 'kk-c', label: 'с', value: 'с', shiftValue: 'С', code: 'KeyC', type: 'character' },
        { id: 'kk-v', label: 'м', value: 'м', shiftValue: 'М', code: 'KeyV', type: 'character' },
        { id: 'kk-b', label: 'и', value: 'и', shiftValue: 'И', code: 'KeyB', type: 'character' },
        { id: 'kk-n', label: 'т', value: 'т', shiftValue: 'Т', code: 'KeyN', type: 'character' },
        { id: 'kk-m', label: 'ь', value: 'ь', shiftValue: 'Ь', code: 'KeyM', type: 'character' },
        { id: 'kk-comma', label: 'б', value: 'б', shiftValue: 'Б', code: 'Comma', type: 'character' },
        { id: 'kk-period', label: 'ю', value: 'ю', shiftValue: 'Ю', code: 'Period', type: 'character' },
        { id: 'kk-slash', label: '.', value: '.', shiftValue: ',', code: 'Slash', type: 'character' },
        { id: 'kk-shift-right', label: '⇧', value: 'Shift', code: 'ShiftRight', type: 'modifier', width: 2.3 },
      ],
    },
    {
      keys: [
        { id: 'kk-space', label: 'Space', value: ' ', code: 'Space', type: 'space', width: 6 },
      ],
    },
  ],
  physicalKeyMap: {
    'Backquote': '(', 'Digit1': '1', 'Digit2': '2', 'Digit3': '3', 'Digit4': '4',
    'Digit5': '5', 'Digit6': '6', 'Digit7': '7', 'Digit8': '8', 'Digit9': '9',
    'Digit0': '0', 'Minus': '-', 'Equal': '=',
    'KeyQ': 'й', 'KeyW': 'ц', 'KeyE': 'у', 'KeyR': 'к', 'KeyT': 'е',
    'KeyY': 'н', 'KeyU': 'г', 'KeyI': 'ш', 'KeyO': 'щ', 'KeyP': 'з',
    'BracketLeft': 'х', 'BracketRight': 'ъ',
    'KeyA': 'ф', 'KeyS': 'ы', 'KeyD': 'в', 'KeyF': 'а', 'KeyG': 'п',
    'KeyH': 'р', 'KeyJ': 'о', 'KeyK': 'л', 'KeyL': 'д',
    'Semicolon': 'ж', 'Quote': 'э',
    'KeyZ': 'я', 'KeyX': 'ч', 'KeyC': 'с', 'KeyV': 'м', 'KeyB': 'и',
    'KeyN': 'т', 'KeyM': 'ь', 'Comma': 'б', 'Period': 'ю', 'Slash': '.',
    'Space': ' ',
  },
};
