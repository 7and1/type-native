/**
 * Russian Keyboard Layout (ЙЦУКЕН Standard)
 * Left-to-right (LTR) language
 * Cyrillic script
 */

import type { KeyboardLayout } from '@/types/keyboard';

export const russianLayout: KeyboardLayout = {
  id: 'ru',
  name: 'Russian',
  nativeName: 'Русский',
  direction: 'ltr',
  fontFamily: 'Noto Sans, sans-serif',
  rows: [
    // Row 1: Numbers and symbols
    {
      keys: [
        { id: 'ru-1', label: '1', value: '1', shiftValue: '!', code: 'Digit1', type: 'character' },
        { id: 'ru-2', label: '2', value: '2', shiftValue: '"', code: 'Digit2', type: 'character' },
        { id: 'ru-3', label: '3', value: '3', shiftValue: '№', code: 'Digit3', type: 'character' },
        { id: 'ru-4', label: '4', value: '4', shiftValue: ';', code: 'Digit4', type: 'character' },
        { id: 'ru-5', label: '5', value: '5', shiftValue: '%', code: 'Digit5', type: 'character' },
        { id: 'ru-6', label: '6', value: '6', shiftValue: ':', code: 'Digit6', type: 'character' },
        { id: 'ru-7', label: '7', value: '7', shiftValue: '?', code: 'Digit7', type: 'character' },
        { id: 'ru-8', label: '8', value: '8', shiftValue: '*', code: 'Digit8', type: 'character' },
        { id: 'ru-9', label: '9', value: '9', shiftValue: '(', code: 'Digit9', type: 'character' },
        { id: 'ru-0', label: '0', value: '0', shiftValue: ')', code: 'Digit0', type: 'character' },
        { id: 'ru-minus', label: '-', value: '-', shiftValue: '_', code: 'Minus', type: 'character' },
        { id: 'ru-equal', label: '=', value: '=', shiftValue: '+', code: 'Equal', type: 'character' },
        { id: 'ru-backspace', label: '⌫', value: 'Backspace', code: 'Backspace', type: 'action', width: 1.5 },
      ],
    },
    // Row 2: ЙЦУКЕН row
    {
      keys: [
        { id: 'ru-short-i', label: 'й', value: 'й', shiftValue: 'Й', code: 'KeyQ', type: 'character' },
        { id: 'ru-tse', label: 'ц', value: 'ц', shiftValue: 'Ц', code: 'KeyW', type: 'character' },
        { id: 'ru-u', label: 'у', value: 'у', shiftValue: 'У', code: 'KeyE', type: 'character' },
        { id: 'ru-ka', label: 'к', value: 'к', shiftValue: 'К', code: 'KeyR', type: 'character' },
        { id: 'ru-ie', label: 'е', value: 'е', shiftValue: 'Е', code: 'KeyT', type: 'character' },
        { id: 'ru-en', label: 'н', value: 'н', shiftValue: 'Н', code: 'KeyY', type: 'character' },
        { id: 'ru-ghe', label: 'г', value: 'г', shiftValue: 'Г', code: 'KeyU', type: 'character' },
        { id: 'ru-sha', label: 'ш', value: 'ш', shiftValue: 'Ш', code: 'KeyI', type: 'character' },
        { id: 'ru-shcha', label: 'щ', value: 'щ', shiftValue: 'Щ', code: 'KeyO', type: 'character' },
        { id: 'ru-ze', label: 'з', value: 'з', shiftValue: 'З', code: 'KeyP', type: 'character' },
        { id: 'ru-ha', label: 'х', value: 'х', shiftValue: 'Х', code: 'BracketLeft', type: 'character' },
        { id: 'ru-hard-sign', label: 'ъ', value: 'ъ', shiftValue: 'Ъ', code: 'BracketRight', type: 'character' },
      ],
    },
    // Row 3: ФЫВАП row
    {
      keys: [
        { id: 'ru-ef', label: 'ф', value: 'ф', shiftValue: 'Ф', code: 'KeyA', type: 'character' },
        { id: 'ru-yeru', label: 'ы', value: 'ы', shiftValue: 'Ы', code: 'KeyS', type: 'character' },
        { id: 'ru-ve', label: 'в', value: 'в', shiftValue: 'В', code: 'KeyD', type: 'character' },
        { id: 'ru-a', label: 'а', value: 'а', shiftValue: 'А', code: 'KeyF', type: 'character' },
        { id: 'ru-pe', label: 'п', value: 'п', shiftValue: 'П', code: 'KeyG', type: 'character' },
        { id: 'ru-er', label: 'р', value: 'р', shiftValue: 'Р', code: 'KeyH', type: 'character' },
        { id: 'ru-o', label: 'о', value: 'о', shiftValue: 'О', code: 'KeyJ', type: 'character' },
        { id: 'ru-el', label: 'л', value: 'л', shiftValue: 'Л', code: 'KeyK', type: 'character' },
        { id: 'ru-de', label: 'д', value: 'д', shiftValue: 'Д', code: 'KeyL', type: 'character' },
        { id: 'ru-zhe', label: 'ж', value: 'ж', shiftValue: 'Ж', code: 'Semicolon', type: 'character' },
        { id: 'ru-e', label: 'э', value: 'э', shiftValue: 'Э', code: 'Quote', type: 'character' },
      ],
    },
    // Row 4: ЯЧСМИ row
    {
      keys: [
        { id: 'ru-shift-left', label: '⇧', value: 'Shift', code: 'ShiftLeft', type: 'modifier', width: 1.5 },
        { id: 'ru-ya', label: 'я', value: 'я', shiftValue: 'Я', code: 'KeyZ', type: 'character' },
        { id: 'ru-che', label: 'ч', value: 'ч', shiftValue: 'Ч', code: 'KeyX', type: 'character' },
        { id: 'ru-es', label: 'с', value: 'с', shiftValue: 'С', code: 'KeyC', type: 'character' },
        { id: 'ru-em', label: 'м', value: 'м', shiftValue: 'М', code: 'KeyV', type: 'character' },
        { id: 'ru-i', label: 'и', value: 'и', shiftValue: 'И', code: 'KeyB', type: 'character' },
        { id: 'ru-te', label: 'т', value: 'т', shiftValue: 'Т', code: 'KeyN', type: 'character' },
        { id: 'ru-soft-sign', label: 'ь', value: 'ь', shiftValue: 'Ь', code: 'KeyM', type: 'character' },
        { id: 'ru-be', label: 'б', value: 'б', shiftValue: 'Б', code: 'Comma', type: 'character' },
        { id: 'ru-yu', label: 'ю', value: 'ю', shiftValue: 'Ю', code: 'Period', type: 'character' },
        { id: 'ru-dot', label: '.', value: '.', shiftValue: ',', code: 'Slash', type: 'character' },
        { id: 'ru-shift-right', label: '⇧', value: 'Shift', code: 'ShiftRight', type: 'modifier', width: 1.5 },
      ],
    },
    // Row 5: Space bar
    {
      keys: [
        { id: 'ru-space', label: 'пробел', value: ' ', code: 'Space', type: 'space', width: 10 },
      ],
    },
  ],
  physicalKeyMap: {
    'Digit1': '1',
    'Digit2': '2',
    'Digit3': '3',
    'Digit4': '4',
    'Digit5': '5',
    'Digit6': '6',
    'Digit7': '7',
    'Digit8': '8',
    'Digit9': '9',
    'Digit0': '0',
    'Minus': '-',
    'Equal': '=',
    'KeyQ': 'й',
    'KeyW': 'ц',
    'KeyE': 'у',
    'KeyR': 'к',
    'KeyT': 'е',
    'KeyY': 'н',
    'KeyU': 'г',
    'KeyI': 'ш',
    'KeyO': 'щ',
    'KeyP': 'з',
    'BracketLeft': 'х',
    'BracketRight': 'ъ',
    'KeyA': 'ф',
    'KeyS': 'ы',
    'KeyD': 'в',
    'KeyF': 'а',
    'KeyG': 'п',
    'KeyH': 'р',
    'KeyJ': 'о',
    'KeyK': 'л',
    'KeyL': 'д',
    'Semicolon': 'ж',
    'Quote': 'э',
    'KeyZ': 'я',
    'KeyX': 'ч',
    'KeyC': 'с',
    'KeyV': 'м',
    'KeyB': 'и',
    'KeyN': 'т',
    'KeyM': 'ь',
    'Comma': 'б',
    'Period': 'ю',
    'Slash': '.',
    'Space': ' ',
  },
};
