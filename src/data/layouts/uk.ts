import type { KeyboardLayout } from '@/types/keyboard';

/**
 * Ukrainian Keyboard Layout
 * Language: Ukrainian (Українська)
 * Script: Cyrillic with Ukrainian-specific letters
 * Direction: LTR
 * Standard Ukrainian keyboard layout
 */
export const ukrainianLayout: KeyboardLayout = {
  id: 'uk',
  name: 'Ukrainian',
  nativeName: 'Українська',
  direction: 'ltr',
  fontFamily: 'Noto Sans, sans-serif',
  rows: [
    // Row 1: Numbers and symbols
    {
      keys: [
        { id: 'num1', label: '1', value: '1', shiftValue: '!', code: 'Digit1', type: 'character' },
        { id: 'num2', label: '2', value: '2', shiftValue: '"', code: 'Digit2', type: 'character' },
        { id: 'num3', label: '3', value: '3', shiftValue: '№', code: 'Digit3', type: 'character' },
        { id: 'num4', label: '4', value: '4', shiftValue: ';', code: 'Digit4', type: 'character' },
        { id: 'num5', label: '5', value: '5', shiftValue: '%', code: 'Digit5', type: 'character' },
        { id: 'num6', label: '6', value: '6', shiftValue: ':', code: 'Digit6', type: 'character' },
        { id: 'num7', label: '7', value: '7', shiftValue: '?', code: 'Digit7', type: 'character' },
        { id: 'num8', label: '8', value: '8', shiftValue: '*', code: 'Digit8', type: 'character' },
        { id: 'num9', label: '9', value: '9', shiftValue: '(', code: 'Digit9', type: 'character' },
        { id: 'num0', label: '0', value: '0', shiftValue: ')', code: 'Digit0', type: 'character' },
        { id: 'minus', label: '-', value: '-', shiftValue: '_', code: 'Minus', type: 'character' },
        { id: 'equal', label: '=', value: '=', shiftValue: '+', code: 'Equal', type: 'character' },
        { id: 'backspace', label: '⌫', value: 'Backspace', code: 'Backspace', type: 'action', width: 1.5 },
      ],
    },
    // Row 2: Ukrainian top row
    {
      keys: [
        { id: 'q', label: 'й', value: 'й', shiftValue: 'Й', code: 'KeyQ', type: 'character' },
        { id: 'w', label: 'ц', value: 'ц', shiftValue: 'Ц', code: 'KeyW', type: 'character' },
        { id: 'e', label: 'у', value: 'у', shiftValue: 'У', code: 'KeyE', type: 'character' },
        { id: 'r', label: 'к', value: 'к', shiftValue: 'К', code: 'KeyR', type: 'character' },
        { id: 't', label: 'е', value: 'е', shiftValue: 'Е', code: 'KeyT', type: 'character' },
        { id: 'y', label: 'н', value: 'н', shiftValue: 'Н', code: 'KeyY', type: 'character' },
        { id: 'u', label: 'г', value: 'г', shiftValue: 'Г', code: 'KeyU', type: 'character' },
        { id: 'i', label: 'ш', value: 'ш', shiftValue: 'Ш', code: 'KeyI', type: 'character' },
        { id: 'o', label: 'щ', value: 'щ', shiftValue: 'Щ', code: 'KeyO', type: 'character' },
        { id: 'p', label: 'з', value: 'з', shiftValue: 'З', code: 'KeyP', type: 'character' },
        { id: 'bracket-left', label: 'х', value: 'х', shiftValue: 'Х', code: 'BracketLeft', type: 'character' },
        { id: 'bracket-right', label: 'ї', value: 'ї', shiftValue: 'Ї', code: 'BracketRight', type: 'character' },
        { id: 'backslash', label: 'ґ', value: 'ґ', shiftValue: 'Ґ', code: 'Backslash', type: 'character' },
      ],
    },
    // Row 3: Ukrainian home row
    {
      keys: [
        { id: 'a', label: 'ф', value: 'ф', shiftValue: 'Ф', code: 'KeyA', type: 'character' },
        { id: 's', label: 'і', value: 'і', shiftValue: 'І', code: 'KeyS', type: 'character' },
        { id: 'd', label: 'в', value: 'в', shiftValue: 'В', code: 'KeyD', type: 'character' },
        { id: 'f', label: 'а', value: 'а', shiftValue: 'А', code: 'KeyF', type: 'character' },
        { id: 'g', label: 'п', value: 'п', shiftValue: 'П', code: 'KeyG', type: 'character' },
        { id: 'h', label: 'р', value: 'р', shiftValue: 'Р', code: 'KeyH', type: 'character' },
        { id: 'j', label: 'о', value: 'о', shiftValue: 'О', code: 'KeyJ', type: 'character' },
        { id: 'k', label: 'л', value: 'л', shiftValue: 'Л', code: 'KeyK', type: 'character' },
        { id: 'l', label: 'д', value: 'д', shiftValue: 'Д', code: 'KeyL', type: 'character' },
        { id: 'semicolon', label: 'ж', value: 'ж', shiftValue: 'Ж', code: 'Semicolon', type: 'character' },
        { id: 'quote', label: 'є', value: 'є', shiftValue: 'Є', code: 'Quote', type: 'character' },
        { id: 'enter', label: '↵', value: 'Enter', code: 'Enter', type: 'action', width: 1.5 },
      ],
    },
    // Row 4: Ukrainian bottom row
    {
      keys: [
        { id: 'shift-left', label: '⇧', value: 'Shift', code: 'ShiftLeft', type: 'modifier', width: 1.5 },
        { id: 'z', label: 'я', value: 'я', shiftValue: 'Я', code: 'KeyZ', type: 'character' },
        { id: 'x', label: 'ч', value: 'ч', shiftValue: 'Ч', code: 'KeyX', type: 'character' },
        { id: 'c', label: 'с', value: 'с', shiftValue: 'С', code: 'KeyC', type: 'character' },
        { id: 'v', label: 'м', value: 'м', shiftValue: 'М', code: 'KeyV', type: 'character' },
        { id: 'b', label: 'и', value: 'и', shiftValue: 'И', code: 'KeyB', type: 'character' },
        { id: 'n', label: 'т', value: 'т', shiftValue: 'Т', code: 'KeyN', type: 'character' },
        { id: 'm', label: 'ь', value: 'ь', shiftValue: 'Ь', code: 'KeyM', type: 'character' },
        { id: 'comma', label: 'б', value: 'б', shiftValue: 'Б', code: 'Comma', type: 'character' },
        { id: 'period', label: 'ю', value: 'ю', shiftValue: 'Ю', code: 'Period', type: 'character' },
        { id: 'slash', label: '.', value: '.', shiftValue: ',', code: 'Slash', type: 'character' },
        { id: 'shift-right', label: '⇧', value: 'Shift', code: 'ShiftRight', type: 'modifier', width: 1.5 },
      ],
    },
    // Row 5: Space bar
    {
      keys: [
        { id: 'space', label: 'Space', value: ' ', code: 'Space', type: 'space', width: 10 },
      ],
    },
  ],
  physicalKeyMap: {
    KeyQ: 'й', KeyW: 'ц', KeyE: 'у', KeyR: 'к', KeyT: 'е',
    KeyY: 'н', KeyU: 'г', KeyI: 'ш', KeyO: 'щ', KeyP: 'з',
    KeyA: 'ф', KeyS: 'і', KeyD: 'в', KeyF: 'а', KeyG: 'п',
    KeyH: 'р', KeyJ: 'о', KeyK: 'л', KeyL: 'д',
    KeyZ: 'я', KeyX: 'ч', KeyC: 'с', KeyV: 'м', KeyB: 'и',
    KeyN: 'т', KeyM: 'ь',
  },
};
