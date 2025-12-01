/**
 * Tajik Keyboard Layout - Cyrillic-based
 */

import type { KeyboardLayout } from '@/types/keyboard';

export const tajikLayout: KeyboardLayout = {
  id: 'tg',
  name: 'Tajik',
  nativeName: 'Тоҷикӣ',
  direction: 'ltr',
  fontFamily: 'system-ui, sans-serif',
  rows: [
    {
      keys: [
        { id: 'tg-backtick', label: '(', value: '(', shiftValue: ')', code: 'Backquote', type: 'character' },
        { id: 'tg-1', label: '1', value: '1', shiftValue: '!', code: 'Digit1', type: 'character' },
        { id: 'tg-2', label: '2', value: '2', shiftValue: '"', code: 'Digit2', type: 'character' },
        { id: 'tg-3', label: '3', value: '3', shiftValue: '№', code: 'Digit3', type: 'character' },
        { id: 'tg-4', label: '4', value: '4', shiftValue: ';', code: 'Digit4', type: 'character' },
        { id: 'tg-5', label: '5', value: '5', shiftValue: '%', code: 'Digit5', type: 'character' },
        { id: 'tg-6', label: '6', value: '6', shiftValue: ':', code: 'Digit6', type: 'character' },
        { id: 'tg-7', label: '7', value: '7', shiftValue: '?', code: 'Digit7', type: 'character' },
        { id: 'tg-8', label: '8', value: '8', shiftValue: '*', code: 'Digit8', type: 'character' },
        { id: 'tg-9', label: '9', value: '9', shiftValue: '(', code: 'Digit9', type: 'character' },
        { id: 'tg-0', label: '0', value: '0', shiftValue: ')', code: 'Digit0', type: 'character' },
        { id: 'tg-minus', label: '-', value: '-', shiftValue: '_', code: 'Minus', type: 'character' },
        { id: 'tg-equal', label: '=', value: '=', shiftValue: '+', code: 'Equal', type: 'character' },
        { id: 'tg-backspace', label: '⌫', value: 'Backspace', code: 'Backspace', type: 'action', width: 1.5 },
      ],
    },
    {
      keys: [
        { id: 'tg-tab', label: 'Tab', value: 'Tab', code: 'Tab', type: 'action', width: 1.5 },
        { id: 'tg-q', label: 'й', value: 'й', shiftValue: 'Й', code: 'KeyQ', type: 'character' },
        { id: 'tg-w', label: 'ц', value: 'ц', shiftValue: 'Ц', code: 'KeyW', type: 'character' },
        { id: 'tg-e', label: 'у', value: 'у', shiftValue: 'У', code: 'KeyE', type: 'character' },
        { id: 'tg-r', label: 'к', value: 'к', shiftValue: 'К', code: 'KeyR', type: 'character' },
        { id: 'tg-t', label: 'е', value: 'е', shiftValue: 'Е', code: 'KeyT', type: 'character' },
        { id: 'tg-y', label: 'н', value: 'н', shiftValue: 'Н', code: 'KeyY', type: 'character' },
        { id: 'tg-u', label: 'г', value: 'г', shiftValue: 'Г', code: 'KeyU', type: 'character' },
        { id: 'tg-i', label: 'ш', value: 'ш', shiftValue: 'Ш', code: 'KeyI', type: 'character' },
        { id: 'tg-o', label: 'ӯ', value: 'ӯ', shiftValue: 'Ӯ', code: 'KeyO', type: 'character' },
        { id: 'tg-p', label: 'з', value: 'з', shiftValue: 'З', code: 'KeyP', type: 'character' },
        { id: 'tg-bracketleft', label: 'х', value: 'х', shiftValue: 'Х', code: 'BracketLeft', type: 'character' },
        { id: 'tg-bracketright', label: 'ҳ', value: 'ҳ', shiftValue: 'Ҳ', code: 'BracketRight', type: 'character' },
      ],
    },
    {
      keys: [
        { id: 'tg-caps', label: 'Caps', value: 'CapsLock', code: 'CapsLock', type: 'modifier', width: 1.8 },
        { id: 'tg-a', label: 'ф', value: 'ф', shiftValue: 'Ф', code: 'KeyA', type: 'character' },
        { id: 'tg-s', label: 'қ', value: 'қ', shiftValue: 'Қ', code: 'KeyS', type: 'character' },
        { id: 'tg-d', label: 'в', value: 'в', shiftValue: 'В', code: 'KeyD', type: 'character' },
        { id: 'tg-f', label: 'а', value: 'а', shiftValue: 'А', code: 'KeyF', type: 'character' },
        { id: 'tg-g', label: 'п', value: 'п', shiftValue: 'П', code: 'KeyG', type: 'character' },
        { id: 'tg-h', label: 'р', value: 'р', shiftValue: 'Р', code: 'KeyH', type: 'character' },
        { id: 'tg-j', label: 'о', value: 'о', shiftValue: 'О', code: 'KeyJ', type: 'character' },
        { id: 'tg-k', label: 'л', value: 'л', shiftValue: 'Л', code: 'KeyK', type: 'character' },
        { id: 'tg-l', label: 'д', value: 'д', shiftValue: 'Д', code: 'KeyL', type: 'character' },
        { id: 'tg-semicolon', label: 'ҷ', value: 'ҷ', shiftValue: 'Ҷ', code: 'Semicolon', type: 'character' },
        { id: 'tg-quote', label: 'э', value: 'э', shiftValue: 'Э', code: 'Quote', type: 'character' },
        { id: 'tg-enter', label: 'Enter', value: 'Enter', code: 'Enter', type: 'action', width: 1.8 },
      ],
    },
    {
      keys: [
        { id: 'tg-shift-left', label: '⇧', value: 'Shift', code: 'ShiftLeft', type: 'modifier', width: 2.3 },
        { id: 'tg-z', label: 'я', value: 'я', shiftValue: 'Я', code: 'KeyZ', type: 'character' },
        { id: 'tg-x', label: 'ч', value: 'ч', shiftValue: 'Ч', code: 'KeyX', type: 'character' },
        { id: 'tg-c', label: 'с', value: 'с', shiftValue: 'С', code: 'KeyC', type: 'character' },
        { id: 'tg-v', label: 'м', value: 'м', shiftValue: 'М', code: 'KeyV', type: 'character' },
        { id: 'tg-b', label: 'и', value: 'и', shiftValue: 'И', code: 'KeyB', type: 'character' },
        { id: 'tg-n', label: 'т', value: 'т', shiftValue: 'Т', code: 'KeyN', type: 'character' },
        { id: 'tg-m', label: 'ғ', value: 'ғ', shiftValue: 'Ғ', code: 'KeyM', type: 'character' },
        { id: 'tg-comma', label: 'б', value: 'б', shiftValue: 'Б', code: 'Comma', type: 'character' },
        { id: 'tg-period', label: 'ю', value: 'ю', shiftValue: 'Ю', code: 'Period', type: 'character' },
        { id: 'tg-slash', label: '.', value: '.', shiftValue: ',', code: 'Slash', type: 'character' },
        { id: 'tg-shift-right', label: '⇧', value: 'Shift', code: 'ShiftRight', type: 'modifier', width: 2.3 },
      ],
    },
    {
      keys: [
        { id: 'tg-space', label: 'Space', value: ' ', code: 'Space', type: 'space', width: 6 },
      ],
    },
  ],
  physicalKeyMap: {
    'Backquote': '(', 'Digit1': '1', 'Digit2': '2', 'Digit3': '3', 'Digit4': '4',
    'Digit5': '5', 'Digit6': '6', 'Digit7': '7', 'Digit8': '8', 'Digit9': '9',
    'Digit0': '0', 'Minus': '-', 'Equal': '=',
    'KeyQ': 'й', 'KeyW': 'ц', 'KeyE': 'у', 'KeyR': 'к', 'KeyT': 'е',
    'KeyY': 'н', 'KeyU': 'г', 'KeyI': 'ш', 'KeyO': 'ӯ', 'KeyP': 'з',
    'BracketLeft': 'х', 'BracketRight': 'ҳ',
    'KeyA': 'ф', 'KeyS': 'қ', 'KeyD': 'в', 'KeyF': 'а', 'KeyG': 'п',
    'KeyH': 'р', 'KeyJ': 'о', 'KeyK': 'л', 'KeyL': 'д',
    'Semicolon': 'ҷ', 'Quote': 'э',
    'KeyZ': 'я', 'KeyX': 'ч', 'KeyC': 'с', 'KeyV': 'м', 'KeyB': 'и',
    'KeyN': 'т', 'KeyM': 'ғ', 'Comma': 'б', 'Period': 'ю', 'Slash': '.',
    'Space': ' ',
  },
};
