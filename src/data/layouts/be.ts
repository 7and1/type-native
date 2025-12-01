/**
 * Belarusian Keyboard Layout - Cyrillic
 */

import type { KeyboardLayout } from '@/types/keyboard';

export const belarusianLayout: KeyboardLayout = {
  id: 'be',
  name: 'Belarusian',
  nativeName: 'Беларуская',
  direction: 'ltr',
  fontFamily: 'system-ui, sans-serif',
  rows: [
    {
      keys: [
        { id: 'be-yo', label: 'ё', value: 'ё', shiftValue: 'Ё', code: 'Backquote', type: 'character' },
        { id: 'be-1', label: '1', value: '1', shiftValue: '!', code: 'Digit1', type: 'character' },
        { id: 'be-2', label: '2', value: '2', shiftValue: '"', code: 'Digit2', type: 'character' },
        { id: 'be-3', label: '3', value: '3', shiftValue: '№', code: 'Digit3', type: 'character' },
        { id: 'be-4', label: '4', value: '4', shiftValue: ';', code: 'Digit4', type: 'character' },
        { id: 'be-5', label: '5', value: '5', shiftValue: '%', code: 'Digit5', type: 'character' },
        { id: 'be-6', label: '6', value: '6', shiftValue: ':', code: 'Digit6', type: 'character' },
        { id: 'be-7', label: '7', value: '7', shiftValue: '?', code: 'Digit7', type: 'character' },
        { id: 'be-8', label: '8', value: '8', shiftValue: '*', code: 'Digit8', type: 'character' },
        { id: 'be-9', label: '9', value: '9', shiftValue: '(', code: 'Digit9', type: 'character' },
        { id: 'be-0', label: '0', value: '0', shiftValue: ')', code: 'Digit0', type: 'character' },
        { id: 'be-minus', label: '-', value: '-', shiftValue: '_', code: 'Minus', type: 'character' },
        { id: 'be-equal', label: '=', value: '=', shiftValue: '+', code: 'Equal', type: 'character' },
        { id: 'be-backspace', label: '⌫', value: 'Backspace', code: 'Backspace', type: 'action', width: 1.5 },
      ],
    },
    {
      keys: [
        { id: 'be-tab', label: 'Tab', value: 'Tab', code: 'Tab', type: 'action', width: 1.5 },
        { id: 'be-i-short', label: 'й', value: 'й', shiftValue: 'Й', code: 'KeyQ', type: 'character' },
        { id: 'be-tse', label: 'ц', value: 'ц', shiftValue: 'Ц', code: 'KeyW', type: 'character' },
        { id: 'be-u', label: 'у', value: 'у', shiftValue: 'У', code: 'KeyE', type: 'character' },
        { id: 'be-ka', label: 'к', value: 'к', shiftValue: 'К', code: 'KeyR', type: 'character' },
        { id: 'be-ie', label: 'е', value: 'е', shiftValue: 'Е', code: 'KeyT', type: 'character' },
        { id: 'be-en', label: 'н', value: 'н', shiftValue: 'Н', code: 'KeyY', type: 'character' },
        { id: 'be-ghe', label: 'г', value: 'г', shiftValue: 'Г', code: 'KeyU', type: 'character' },
        { id: 'be-sha', label: 'ш', value: 'ш', shiftValue: 'Ш', code: 'KeyI', type: 'character' },
        { id: 'be-ushort', label: 'ў', value: 'ў', shiftValue: 'Ў', code: 'KeyO', type: 'character' },
        { id: 'be-ze', label: 'з', value: 'з', shiftValue: 'З', code: 'KeyP', type: 'character' },
        { id: 'be-kha', label: 'х', value: 'х', shiftValue: 'Х', code: 'BracketLeft', type: 'character' },
        { id: 'be-apos', label: "'", value: "'", shiftValue: "'", code: 'BracketRight', type: 'character' },
      ],
    },
    {
      keys: [
        { id: 'be-caps', label: 'Caps', value: 'CapsLock', code: 'CapsLock', type: 'modifier', width: 1.8 },
        { id: 'be-ef', label: 'ф', value: 'ф', shiftValue: 'Ф', code: 'KeyA', type: 'character' },
        { id: 'be-yeru', label: 'ы', value: 'ы', shiftValue: 'Ы', code: 'KeyS', type: 'character' },
        { id: 'be-ve', label: 'в', value: 'в', shiftValue: 'В', code: 'KeyD', type: 'character' },
        { id: 'be-a', label: 'а', value: 'а', shiftValue: 'А', code: 'KeyF', type: 'character' },
        { id: 'be-pe', label: 'п', value: 'п', shiftValue: 'П', code: 'KeyG', type: 'character' },
        { id: 'be-er', label: 'р', value: 'р', shiftValue: 'Р', code: 'KeyH', type: 'character' },
        { id: 'be-o', label: 'о', value: 'о', shiftValue: 'О', code: 'KeyJ', type: 'character' },
        { id: 'be-el', label: 'л', value: 'л', shiftValue: 'Л', code: 'KeyK', type: 'character' },
        { id: 'be-de', label: 'д', value: 'д', shiftValue: 'Д', code: 'KeyL', type: 'character' },
        { id: 'be-zhe', label: 'ж', value: 'ж', shiftValue: 'Ж', code: 'Semicolon', type: 'character' },
        { id: 'be-e', label: 'э', value: 'э', shiftValue: 'Э', code: 'Quote', type: 'character' },
        { id: 'be-enter', label: 'Enter', value: 'Enter', code: 'Enter', type: 'action', width: 1.8 },
      ],
    },
    {
      keys: [
        { id: 'be-shift-left', label: '⇧', value: 'Shift', code: 'ShiftLeft', type: 'modifier', width: 2.3 },
        { id: 'be-ya', label: 'я', value: 'я', shiftValue: 'Я', code: 'KeyZ', type: 'character' },
        { id: 'be-che', label: 'ч', value: 'ч', shiftValue: 'Ч', code: 'KeyX', type: 'character' },
        { id: 'be-es', label: 'с', value: 'с', shiftValue: 'С', code: 'KeyC', type: 'character' },
        { id: 'be-em', label: 'м', value: 'м', shiftValue: 'М', code: 'KeyV', type: 'character' },
        { id: 'be-i', label: 'і', value: 'і', shiftValue: 'І', code: 'KeyB', type: 'character' },
        { id: 'be-te', label: 'т', value: 'т', shiftValue: 'Т', code: 'KeyN', type: 'character' },
        { id: 'be-soft', label: 'ь', value: 'ь', shiftValue: 'Ь', code: 'KeyM', type: 'character' },
        { id: 'be-be', label: 'б', value: 'б', shiftValue: 'Б', code: 'Comma', type: 'character' },
        { id: 'be-yu', label: 'ю', value: 'ю', shiftValue: 'Ю', code: 'Period', type: 'character' },
        { id: 'be-period', label: '.', value: '.', shiftValue: ',', code: 'Slash', type: 'character' },
        { id: 'be-shift-right', label: '⇧', value: 'Shift', code: 'ShiftRight', type: 'modifier', width: 2.3 },
      ],
    },
    {
      keys: [
        { id: 'be-space', label: 'Прабел', value: ' ', code: 'Space', type: 'space', width: 6 },
      ],
    },
  ],
  physicalKeyMap: {
    'Backquote': 'ё', 'Digit1': '1', 'Digit2': '2', 'Digit3': '3', 'Digit4': '4',
    'Digit5': '5', 'Digit6': '6', 'Digit7': '7', 'Digit8': '8', 'Digit9': '9',
    'Digit0': '0', 'Minus': '-', 'Equal': '=',
    'KeyQ': 'й', 'KeyW': 'ц', 'KeyE': 'у', 'KeyR': 'к', 'KeyT': 'е',
    'KeyY': 'н', 'KeyU': 'г', 'KeyI': 'ш', 'KeyO': 'ў', 'KeyP': 'з',
    'BracketLeft': 'х', 'BracketRight': "'",
    'KeyA': 'ф', 'KeyS': 'ы', 'KeyD': 'в', 'KeyF': 'а', 'KeyG': 'п',
    'KeyH': 'р', 'KeyJ': 'о', 'KeyK': 'л', 'KeyL': 'д',
    'Semicolon': 'ж', 'Quote': 'э',
    'KeyZ': 'я', 'KeyX': 'ч', 'KeyC': 'с', 'KeyV': 'м', 'KeyB': 'і',
    'KeyN': 'т', 'KeyM': 'ь', 'Comma': 'б', 'Period': 'ю', 'Slash': '.',
    'Space': ' ',
  },
};
