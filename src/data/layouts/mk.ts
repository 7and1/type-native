/**
 * Macedonian Keyboard Layout - Cyrillic
 */

import type { KeyboardLayout } from '@/types/keyboard';

export const macedonianLayout: KeyboardLayout = {
  id: 'mk',
  name: 'Macedonian',
  nativeName: 'Македонски',
  direction: 'ltr',
  fontFamily: 'system-ui, sans-serif',
  rows: [
    {
      keys: [
        { id: 'mk-backtick', label: '`', value: '`', shiftValue: '~', code: 'Backquote', type: 'character' },
        { id: 'mk-1', label: '1', value: '1', shiftValue: '!', code: 'Digit1', type: 'character' },
        { id: 'mk-2', label: '2', value: '2', shiftValue: '"', code: 'Digit2', type: 'character' },
        { id: 'mk-3', label: '3', value: '3', shiftValue: '#', code: 'Digit3', type: 'character' },
        { id: 'mk-4', label: '4', value: '4', shiftValue: '$', code: 'Digit4', type: 'character' },
        { id: 'mk-5', label: '5', value: '5', shiftValue: '%', code: 'Digit5', type: 'character' },
        { id: 'mk-6', label: '6', value: '6', shiftValue: '&', code: 'Digit6', type: 'character' },
        { id: 'mk-7', label: '7', value: '7', shiftValue: '/', code: 'Digit7', type: 'character' },
        { id: 'mk-8', label: '8', value: '8', shiftValue: '(', code: 'Digit8', type: 'character' },
        { id: 'mk-9', label: '9', value: '9', shiftValue: ')', code: 'Digit9', type: 'character' },
        { id: 'mk-0', label: '0', value: '0', shiftValue: '=', code: 'Digit0', type: 'character' },
        { id: 'mk-minus', label: '-', value: '-', shiftValue: '_', code: 'Minus', type: 'character' },
        { id: 'mk-equal', label: '=', value: '=', shiftValue: '+', code: 'Equal', type: 'character' },
        { id: 'mk-backspace', label: '⌫', value: 'Backspace', code: 'Backspace', type: 'action', width: 1.5 },
      ],
    },
    {
      keys: [
        { id: 'mk-tab', label: 'Tab', value: 'Tab', code: 'Tab', type: 'action', width: 1.5 },
        { id: 'mk-lj', label: 'љ', value: 'љ', shiftValue: 'Љ', code: 'KeyQ', type: 'character' },
        { id: 'mk-nj', label: 'њ', value: 'њ', shiftValue: 'Њ', code: 'KeyW', type: 'character' },
        { id: 'mk-e', label: 'е', value: 'е', shiftValue: 'Е', code: 'KeyE', type: 'character' },
        { id: 'mk-r', label: 'р', value: 'р', shiftValue: 'Р', code: 'KeyR', type: 'character' },
        { id: 'mk-t', label: 'т', value: 'т', shiftValue: 'Т', code: 'KeyT', type: 'character' },
        { id: 'mk-dz', label: 'ѕ', value: 'ѕ', shiftValue: 'Ѕ', code: 'KeyY', type: 'character' },
        { id: 'mk-u', label: 'у', value: 'у', shiftValue: 'У', code: 'KeyU', type: 'character' },
        { id: 'mk-i', label: 'и', value: 'и', shiftValue: 'И', code: 'KeyI', type: 'character' },
        { id: 'mk-o', label: 'о', value: 'о', shiftValue: 'О', code: 'KeyO', type: 'character' },
        { id: 'mk-p', label: 'п', value: 'п', shiftValue: 'П', code: 'KeyP', type: 'character' },
        { id: 'mk-sh', label: 'ш', value: 'ш', shiftValue: 'Ш', code: 'BracketLeft', type: 'character' },
        { id: 'mk-gj', label: 'ѓ', value: 'ѓ', shiftValue: 'Ѓ', code: 'BracketRight', type: 'character' },
      ],
    },
    {
      keys: [
        { id: 'mk-caps', label: 'Caps', value: 'CapsLock', code: 'CapsLock', type: 'modifier', width: 1.8 },
        { id: 'mk-a', label: 'а', value: 'а', shiftValue: 'А', code: 'KeyA', type: 'character' },
        { id: 'mk-s', label: 'с', value: 'с', shiftValue: 'С', code: 'KeyS', type: 'character' },
        { id: 'mk-d', label: 'д', value: 'д', shiftValue: 'Д', code: 'KeyD', type: 'character' },
        { id: 'mk-f', label: 'ф', value: 'ф', shiftValue: 'Ф', code: 'KeyF', type: 'character' },
        { id: 'mk-g', label: 'г', value: 'г', shiftValue: 'Г', code: 'KeyG', type: 'character' },
        { id: 'mk-h', label: 'х', value: 'х', shiftValue: 'Х', code: 'KeyH', type: 'character' },
        { id: 'mk-j', label: 'ј', value: 'ј', shiftValue: 'Ј', code: 'KeyJ', type: 'character' },
        { id: 'mk-k', label: 'к', value: 'к', shiftValue: 'К', code: 'KeyK', type: 'character' },
        { id: 'mk-l', label: 'л', value: 'л', shiftValue: 'Л', code: 'KeyL', type: 'character' },
        { id: 'mk-ch', label: 'ч', value: 'ч', shiftValue: 'Ч', code: 'Semicolon', type: 'character' },
        { id: 'mk-kj', label: 'ќ', value: 'ќ', shiftValue: 'Ќ', code: 'Quote', type: 'character' },
        { id: 'mk-enter', label: 'Enter', value: 'Enter', code: 'Enter', type: 'action', width: 1.8 },
      ],
    },
    {
      keys: [
        { id: 'mk-shift-left', label: '⇧', value: 'Shift', code: 'ShiftLeft', type: 'modifier', width: 2.3 },
        { id: 'mk-z', label: 'з', value: 'з', shiftValue: 'З', code: 'KeyZ', type: 'character' },
        { id: 'mk-dj', label: 'џ', value: 'џ', shiftValue: 'Џ', code: 'KeyX', type: 'character' },
        { id: 'mk-ts', label: 'ц', value: 'ц', shiftValue: 'Ц', code: 'KeyC', type: 'character' },
        { id: 'mk-v', label: 'в', value: 'в', shiftValue: 'В', code: 'KeyV', type: 'character' },
        { id: 'mk-b', label: 'б', value: 'б', shiftValue: 'Б', code: 'KeyB', type: 'character' },
        { id: 'mk-n', label: 'н', value: 'н', shiftValue: 'Н', code: 'KeyN', type: 'character' },
        { id: 'mk-m', label: 'м', value: 'м', shiftValue: 'М', code: 'KeyM', type: 'character' },
        { id: 'mk-comma', label: ',', value: ',', shiftValue: ';', code: 'Comma', type: 'character' },
        { id: 'mk-period', label: '.', value: '.', shiftValue: ':', code: 'Period', type: 'character' },
        { id: 'mk-zh', label: 'ж', value: 'ж', shiftValue: 'Ж', code: 'Slash', type: 'character' },
        { id: 'mk-shift-right', label: '⇧', value: 'Shift', code: 'ShiftRight', type: 'modifier', width: 2.3 },
      ],
    },
    {
      keys: [
        { id: 'mk-space', label: 'Празно', value: ' ', code: 'Space', type: 'space', width: 6 },
      ],
    },
  ],
  physicalKeyMap: {
    'Backquote': '`', 'Digit1': '1', 'Digit2': '2', 'Digit3': '3', 'Digit4': '4',
    'Digit5': '5', 'Digit6': '6', 'Digit7': '7', 'Digit8': '8', 'Digit9': '9',
    'Digit0': '0', 'Minus': '-', 'Equal': '=',
    'KeyQ': 'љ', 'KeyW': 'њ', 'KeyE': 'е', 'KeyR': 'р', 'KeyT': 'т',
    'KeyY': 'ѕ', 'KeyU': 'у', 'KeyI': 'и', 'KeyO': 'о', 'KeyP': 'п',
    'BracketLeft': 'ш', 'BracketRight': 'ѓ',
    'KeyA': 'а', 'KeyS': 'с', 'KeyD': 'д', 'KeyF': 'ф', 'KeyG': 'г',
    'KeyH': 'х', 'KeyJ': 'ј', 'KeyK': 'к', 'KeyL': 'л',
    'Semicolon': 'ч', 'Quote': 'ќ',
    'KeyZ': 'з', 'KeyX': 'џ', 'KeyC': 'ц', 'KeyV': 'в', 'KeyB': 'б',
    'KeyN': 'н', 'KeyM': 'м', 'Comma': ',', 'Period': '.', 'Slash': 'ж',
    'Space': ' ',
  },
};
