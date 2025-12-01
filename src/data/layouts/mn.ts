/**
 * Mongolian Keyboard Layout - Cyrillic-based
 */

import type { KeyboardLayout } from '@/types/keyboard';

export const mongolianLayout: KeyboardLayout = {
  id: 'mn',
  name: 'Mongolian',
  nativeName: 'Монгол',
  direction: 'ltr',
  fontFamily: 'system-ui, sans-serif',
  rows: [
    {
      keys: [
        { id: 'mn-backtick', label: '=', value: '=', shiftValue: '+', code: 'Backquote', type: 'character' },
        { id: 'mn-1', label: '1', value: '1', shiftValue: '№', code: 'Digit1', type: 'character' },
        { id: 'mn-2', label: '2', value: '2', shiftValue: '-', code: 'Digit2', type: 'character' },
        { id: 'mn-3', label: '3', value: '3', shiftValue: '"', code: 'Digit3', type: 'character' },
        { id: 'mn-4', label: '4', value: '4', shiftValue: '₮', code: 'Digit4', type: 'character' },
        { id: 'mn-5', label: '5', value: '5', shiftValue: ':', code: 'Digit5', type: 'character' },
        { id: 'mn-6', label: '6', value: '6', shiftValue: '.', code: 'Digit6', type: 'character' },
        { id: 'mn-7', label: '7', value: '7', shiftValue: '_', code: 'Digit7', type: 'character' },
        { id: 'mn-8', label: '8', value: '8', shiftValue: ',', code: 'Digit8', type: 'character' },
        { id: 'mn-9', label: '9', value: '9', shiftValue: '%', code: 'Digit9', type: 'character' },
        { id: 'mn-0', label: '0', value: '0', shiftValue: '?', code: 'Digit0', type: 'character' },
        { id: 'mn-minus', label: 'е', value: 'е', shiftValue: 'Е', code: 'Minus', type: 'character' },
        { id: 'mn-equal', label: 'щ', value: 'щ', shiftValue: 'Щ', code: 'Equal', type: 'character' },
        { id: 'mn-backspace', label: '⌫', value: 'Backspace', code: 'Backspace', type: 'action', width: 1.5 },
      ],
    },
    {
      keys: [
        { id: 'mn-tab', label: 'Tab', value: 'Tab', code: 'Tab', type: 'action', width: 1.5 },
        { id: 'mn-q', label: 'ф', value: 'ф', shiftValue: 'Ф', code: 'KeyQ', type: 'character' },
        { id: 'mn-w', label: 'ц', value: 'ц', shiftValue: 'Ц', code: 'KeyW', type: 'character' },
        { id: 'mn-e', label: 'у', value: 'у', shiftValue: 'У', code: 'KeyE', type: 'character' },
        { id: 'mn-r', label: 'ж', value: 'ж', shiftValue: 'Ж', code: 'KeyR', type: 'character' },
        { id: 'mn-t', label: 'э', value: 'э', shiftValue: 'Э', code: 'KeyT', type: 'character' },
        { id: 'mn-y', label: 'н', value: 'н', shiftValue: 'Н', code: 'KeyY', type: 'character' },
        { id: 'mn-u', label: 'г', value: 'г', shiftValue: 'Г', code: 'KeyU', type: 'character' },
        { id: 'mn-i', label: 'ш', value: 'ш', shiftValue: 'Ш', code: 'KeyI', type: 'character' },
        { id: 'mn-o', label: 'ү', value: 'ү', shiftValue: 'Ү', code: 'KeyO', type: 'character' },
        { id: 'mn-p', label: 'з', value: 'з', shiftValue: 'З', code: 'KeyP', type: 'character' },
        { id: 'mn-bracketleft', label: 'к', value: 'к', shiftValue: 'К', code: 'BracketLeft', type: 'character' },
        { id: 'mn-bracketright', label: 'ъ', value: 'ъ', shiftValue: 'Ъ', code: 'BracketRight', type: 'character' },
      ],
    },
    {
      keys: [
        { id: 'mn-caps', label: 'Caps', value: 'CapsLock', code: 'CapsLock', type: 'modifier', width: 1.8 },
        { id: 'mn-a', label: 'й', value: 'й', shiftValue: 'Й', code: 'KeyA', type: 'character' },
        { id: 'mn-s', label: 'ы', value: 'ы', shiftValue: 'Ы', code: 'KeyS', type: 'character' },
        { id: 'mn-d', label: 'б', value: 'б', shiftValue: 'Б', code: 'KeyD', type: 'character' },
        { id: 'mn-f', label: 'ө', value: 'ө', shiftValue: 'Ө', code: 'KeyF', type: 'character' },
        { id: 'mn-g', label: 'а', value: 'а', shiftValue: 'А', code: 'KeyG', type: 'character' },
        { id: 'mn-h', label: 'х', value: 'х', shiftValue: 'Х', code: 'KeyH', type: 'character' },
        { id: 'mn-j', label: 'р', value: 'р', shiftValue: 'Р', code: 'KeyJ', type: 'character' },
        { id: 'mn-k', label: 'о', value: 'о', shiftValue: 'О', code: 'KeyK', type: 'character' },
        { id: 'mn-l', label: 'л', value: 'л', shiftValue: 'Л', code: 'KeyL', type: 'character' },
        { id: 'mn-semicolon', label: 'д', value: 'д', shiftValue: 'Д', code: 'Semicolon', type: 'character' },
        { id: 'mn-quote', label: 'п', value: 'п', shiftValue: 'П', code: 'Quote', type: 'character' },
        { id: 'mn-enter', label: 'Enter', value: 'Enter', code: 'Enter', type: 'action', width: 1.8 },
      ],
    },
    {
      keys: [
        { id: 'mn-shift-left', label: '⇧', value: 'Shift', code: 'ShiftLeft', type: 'modifier', width: 2.3 },
        { id: 'mn-z', label: 'я', value: 'я', shiftValue: 'Я', code: 'KeyZ', type: 'character' },
        { id: 'mn-x', label: 'ч', value: 'ч', shiftValue: 'Ч', code: 'KeyX', type: 'character' },
        { id: 'mn-c', label: 'ё', value: 'ё', shiftValue: 'Ё', code: 'KeyC', type: 'character' },
        { id: 'mn-v', label: 'с', value: 'с', shiftValue: 'С', code: 'KeyV', type: 'character' },
        { id: 'mn-b', label: 'м', value: 'м', shiftValue: 'М', code: 'KeyB', type: 'character' },
        { id: 'mn-n', label: 'и', value: 'и', shiftValue: 'И', code: 'KeyN', type: 'character' },
        { id: 'mn-m', label: 'т', value: 'т', shiftValue: 'Т', code: 'KeyM', type: 'character' },
        { id: 'mn-comma', label: 'ь', value: 'ь', shiftValue: 'Ь', code: 'Comma', type: 'character' },
        { id: 'mn-period', label: 'в', value: 'в', shiftValue: 'В', code: 'Period', type: 'character' },
        { id: 'mn-slash', label: 'ю', value: 'ю', shiftValue: 'Ю', code: 'Slash', type: 'character' },
        { id: 'mn-shift-right', label: '⇧', value: 'Shift', code: 'ShiftRight', type: 'modifier', width: 2.3 },
      ],
    },
    {
      keys: [
        { id: 'mn-space', label: 'Space', value: ' ', code: 'Space', type: 'space', width: 6 },
      ],
    },
  ],
  physicalKeyMap: {
    'Backquote': '=', 'Digit1': '1', 'Digit2': '2', 'Digit3': '3', 'Digit4': '4',
    'Digit5': '5', 'Digit6': '6', 'Digit7': '7', 'Digit8': '8', 'Digit9': '9',
    'Digit0': '0', 'Minus': 'е', 'Equal': 'щ',
    'KeyQ': 'ф', 'KeyW': 'ц', 'KeyE': 'у', 'KeyR': 'ж', 'KeyT': 'э',
    'KeyY': 'н', 'KeyU': 'г', 'KeyI': 'ш', 'KeyO': 'ү', 'KeyP': 'з',
    'BracketLeft': 'к', 'BracketRight': 'ъ',
    'KeyA': 'й', 'KeyS': 'ы', 'KeyD': 'б', 'KeyF': 'ө', 'KeyG': 'а',
    'KeyH': 'х', 'KeyJ': 'р', 'KeyK': 'о', 'KeyL': 'л',
    'Semicolon': 'д', 'Quote': 'п',
    'KeyZ': 'я', 'KeyX': 'ч', 'KeyC': 'ё', 'KeyV': 'с', 'KeyB': 'м',
    'KeyN': 'и', 'KeyM': 'т', 'Comma': 'ь', 'Period': 'в', 'Slash': 'ю',
    'Space': ' ',
  },
};
