/**
 * Bulgarian Keyboard Layout - Cyrillic BDS
 */

import type { KeyboardLayout } from '@/types/keyboard';

export const bulgarianLayout: KeyboardLayout = {
  id: 'bg',
  name: 'Bulgarian',
  nativeName: 'Български',
  direction: 'ltr',
  fontFamily: 'system-ui, sans-serif',
  rows: [
    {
      keys: [
        { id: 'bg-backtick', label: '`', value: '`', shiftValue: '~', code: 'Backquote', type: 'character' },
        { id: 'bg-1', label: '1', value: '1', shiftValue: '!', code: 'Digit1', type: 'character' },
        { id: 'bg-2', label: '2', value: '2', shiftValue: '?', code: 'Digit2', type: 'character' },
        { id: 'bg-3', label: '3', value: '3', shiftValue: '+', code: 'Digit3', type: 'character' },
        { id: 'bg-4', label: '4', value: '4', shiftValue: '"', code: 'Digit4', type: 'character' },
        { id: 'bg-5', label: '5', value: '5', shiftValue: '%', code: 'Digit5', type: 'character' },
        { id: 'bg-6', label: '6', value: '6', shiftValue: '=', code: 'Digit6', type: 'character' },
        { id: 'bg-7', label: '7', value: '7', shiftValue: ':', code: 'Digit7', type: 'character' },
        { id: 'bg-8', label: '8', value: '8', shiftValue: '/', code: 'Digit8', type: 'character' },
        { id: 'bg-9', label: '9', value: '9', shiftValue: '_', code: 'Digit9', type: 'character' },
        { id: 'bg-0', label: '0', value: '0', shiftValue: '№', code: 'Digit0', type: 'character' },
        { id: 'bg-minus', label: '-', value: '-', shiftValue: 'I', code: 'Minus', type: 'character' },
        { id: 'bg-equal', label: '.', value: '.', shiftValue: 'V', code: 'Equal', type: 'character' },
        { id: 'bg-backspace', label: '⌫', value: 'Backspace', code: 'Backspace', type: 'action', width: 1.5 },
      ],
    },
    {
      keys: [
        { id: 'bg-tab', label: 'Tab', value: 'Tab', code: 'Tab', type: 'action', width: 1.5 },
        { id: 'bg-comma', label: ',', value: ',', shiftValue: 'ы', code: 'KeyQ', type: 'character' },
        { id: 'bg-u', label: 'у', value: 'у', shiftValue: 'У', code: 'KeyW', type: 'character' },
        { id: 'bg-e', label: 'е', value: 'е', shiftValue: 'Е', code: 'KeyE', type: 'character' },
        { id: 'bg-i', label: 'и', value: 'и', shiftValue: 'И', code: 'KeyR', type: 'character' },
        { id: 'bg-sh', label: 'ш', value: 'ш', shiftValue: 'Ш', code: 'KeyT', type: 'character' },
        { id: 'bg-shch', label: 'щ', value: 'щ', shiftValue: 'Щ', code: 'KeyY', type: 'character' },
        { id: 'bg-k', label: 'к', value: 'к', shiftValue: 'К', code: 'KeyU', type: 'character' },
        { id: 'bg-s', label: 'с', value: 'с', shiftValue: 'С', code: 'KeyI', type: 'character' },
        { id: 'bg-d', label: 'д', value: 'д', shiftValue: 'Д', code: 'KeyO', type: 'character' },
        { id: 'bg-z', label: 'з', value: 'з', shiftValue: 'З', code: 'KeyP', type: 'character' },
        { id: 'bg-ts', label: 'ц', value: 'ц', shiftValue: 'Ц', code: 'BracketLeft', type: 'character' },
        { id: 'bg-semicolon', label: ';', value: ';', shiftValue: '§', code: 'BracketRight', type: 'character' },
      ],
    },
    {
      keys: [
        { id: 'bg-caps', label: 'Caps', value: 'CapsLock', code: 'CapsLock', type: 'modifier', width: 1.8 },
        { id: 'bg-soft', label: 'ь', value: 'ь', shiftValue: 'Ь', code: 'KeyA', type: 'character' },
        { id: 'bg-ya', label: 'я', value: 'я', shiftValue: 'Я', code: 'KeyS', type: 'character' },
        { id: 'bg-a', label: 'а', value: 'а', shiftValue: 'А', code: 'KeyD', type: 'character' },
        { id: 'bg-o', label: 'о', value: 'о', shiftValue: 'О', code: 'KeyF', type: 'character' },
        { id: 'bg-zh', label: 'ж', value: 'ж', shiftValue: 'Ж', code: 'KeyG', type: 'character' },
        { id: 'bg-g', label: 'г', value: 'г', shiftValue: 'Г', code: 'KeyH', type: 'character' },
        { id: 'bg-t', label: 'т', value: 'т', shiftValue: 'Т', code: 'KeyJ', type: 'character' },
        { id: 'bg-n', label: 'н', value: 'н', shiftValue: 'Н', code: 'KeyK', type: 'character' },
        { id: 'bg-v', label: 'в', value: 'в', shiftValue: 'В', code: 'KeyL', type: 'character' },
        { id: 'bg-m', label: 'м', value: 'м', shiftValue: 'М', code: 'Semicolon', type: 'character' },
        { id: 'bg-ch', label: 'ч', value: 'ч', shiftValue: 'Ч', code: 'Quote', type: 'character' },
        { id: 'bg-enter', label: 'Enter', value: 'Enter', code: 'Enter', type: 'action', width: 1.8 },
      ],
    },
    {
      keys: [
        { id: 'bg-shift-left', label: '⇧', value: 'Shift', code: 'ShiftLeft', type: 'modifier', width: 2.3 },
        { id: 'bg-yu', label: 'ю', value: 'ю', shiftValue: 'Ю', code: 'KeyZ', type: 'character' },
        { id: 'bg-i-short', label: 'й', value: 'й', shiftValue: 'Й', code: 'KeyX', type: 'character' },
        { id: 'bg-hard', label: 'ъ', value: 'ъ', shiftValue: 'Ъ', code: 'KeyC', type: 'character' },
        { id: 'bg-ey', label: 'э', value: 'э', shiftValue: 'Э', code: 'KeyV', type: 'character' },
        { id: 'bg-f', label: 'ф', value: 'ф', shiftValue: 'Ф', code: 'KeyB', type: 'character' },
        { id: 'bg-kh', label: 'х', value: 'х', shiftValue: 'Х', code: 'KeyN', type: 'character' },
        { id: 'bg-p', label: 'п', value: 'п', shiftValue: 'П', code: 'KeyM', type: 'character' },
        { id: 'bg-r', label: 'р', value: 'р', shiftValue: 'Р', code: 'Comma', type: 'character' },
        { id: 'bg-l', label: 'л', value: 'л', shiftValue: 'Л', code: 'Period', type: 'character' },
        { id: 'bg-b', label: 'б', value: 'б', shiftValue: 'Б', code: 'Slash', type: 'character' },
        { id: 'bg-shift-right', label: '⇧', value: 'Shift', code: 'ShiftRight', type: 'modifier', width: 2.3 },
      ],
    },
    {
      keys: [
        { id: 'bg-space', label: 'Интервал', value: ' ', code: 'Space', type: 'space', width: 6 },
      ],
    },
  ],
  physicalKeyMap: {
    'Backquote': '`', 'Digit1': '1', 'Digit2': '2', 'Digit3': '3', 'Digit4': '4',
    'Digit5': '5', 'Digit6': '6', 'Digit7': '7', 'Digit8': '8', 'Digit9': '9',
    'Digit0': '0', 'Minus': '-', 'Equal': '.',
    'KeyQ': ',', 'KeyW': 'у', 'KeyE': 'е', 'KeyR': 'и', 'KeyT': 'ш',
    'KeyY': 'щ', 'KeyU': 'к', 'KeyI': 'с', 'KeyO': 'д', 'KeyP': 'з',
    'BracketLeft': 'ц', 'BracketRight': ';',
    'KeyA': 'ь', 'KeyS': 'я', 'KeyD': 'а', 'KeyF': 'о', 'KeyG': 'ж',
    'KeyH': 'г', 'KeyJ': 'т', 'KeyK': 'н', 'KeyL': 'в',
    'Semicolon': 'м', 'Quote': 'ч',
    'KeyZ': 'ю', 'KeyX': 'й', 'KeyC': 'ъ', 'KeyV': 'э', 'KeyB': 'ф',
    'KeyN': 'х', 'KeyM': 'п', 'Comma': 'р', 'Period': 'л', 'Slash': 'б',
    'Space': ' ',
  },
};
