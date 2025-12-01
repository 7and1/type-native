import type { KeyboardLayout } from '@/types/keyboard';

/**
 * Persian (Farsi) Keyboard Layout
 * Language: Persian/Farsi (فارسی)
 * Script: Persian Arabic
 * Direction: RTL
 * Standard Persian keyboard layout (ISIRI 2901)
 */
export const persianLayout: KeyboardLayout = {
  id: 'fa',
  name: 'Persian',
  nativeName: 'فارسی',
  direction: 'rtl',
  fontFamily: 'Noto Sans Arabic, sans-serif',
  rows: [
    // Row 1: Numbers and symbols
    {
      keys: [
        { id: 'num1', label: '۱', value: '۱', shiftValue: '!', code: 'Digit1', type: 'character' },
        { id: 'num2', label: '۲', value: '۲', shiftValue: '٬', code: 'Digit2', type: 'character' },
        { id: 'num3', label: '۳', value: '۳', shiftValue: '٫', code: 'Digit3', type: 'character' },
        { id: 'num4', label: '۴', value: '۴', shiftValue: '﷼', code: 'Digit4', type: 'character' },
        { id: 'num5', label: '۵', value: '۵', shiftValue: '٪', code: 'Digit5', type: 'character' },
        { id: 'num6', label: '۶', value: '۶', shiftValue: '×', code: 'Digit6', type: 'character' },
        { id: 'num7', label: '۷', value: '۷', shiftValue: '،', code: 'Digit7', type: 'character' },
        { id: 'num8', label: '۸', value: '۸', shiftValue: '*', code: 'Digit8', type: 'character' },
        { id: 'num9', label: '۹', value: '۹', shiftValue: ')', code: 'Digit9', type: 'character' },
        { id: 'num0', label: '۰', value: '۰', shiftValue: '(', code: 'Digit0', type: 'character' },
        { id: 'minus', label: '-', value: '-', shiftValue: 'ـ', code: 'Minus', type: 'character' },
        { id: 'equal', label: '=', value: '=', shiftValue: '+', code: 'Equal', type: 'character' },
        { id: 'backspace', label: '⌫', value: 'Backspace', code: 'Backspace', type: 'action', width: 1.5 },
      ],
    },
    // Row 2: Top row - Persian letters
    {
      keys: [
        { id: 'q', label: 'ض', value: 'ض', shiftValue: 'ْ', code: 'KeyQ', type: 'character' },
        { id: 'w', label: 'ص', value: 'ص', shiftValue: 'ٌ', code: 'KeyW', type: 'character' },
        { id: 'e', label: 'ث', value: 'ث', shiftValue: 'ٍ', code: 'KeyE', type: 'character' },
        { id: 'r', label: 'ق', value: 'ق', shiftValue: 'ً', code: 'KeyR', type: 'character' },
        { id: 't', label: 'ف', value: 'ف', shiftValue: 'ّ', code: 'KeyT', type: 'character' },
        { id: 'y', label: 'غ', value: 'غ', shiftValue: 'ٔ', code: 'KeyY', type: 'character' },
        { id: 'u', label: 'ع', value: 'ع', shiftValue: 'ء', code: 'KeyU', type: 'character' },
        { id: 'i', label: 'ه', value: 'ه', shiftValue: 'ۀ', code: 'KeyI', type: 'character' },
        { id: 'o', label: 'خ', value: 'خ', shiftValue: ']', code: 'KeyO', type: 'character' },
        { id: 'p', label: 'ح', value: 'ح', shiftValue: '[', code: 'KeyP', type: 'character' },
        { id: 'bracket-left', label: 'ج', value: 'ج', shiftValue: '}', code: 'BracketLeft', type: 'character' },
        { id: 'bracket-right', label: 'چ', value: 'چ', shiftValue: '{', code: 'BracketRight', type: 'character' },
        { id: 'backslash', label: '\\', value: '\\', shiftValue: '|', code: 'Backslash', type: 'character' },
      ],
    },
    // Row 3: Home row - Persian letters
    {
      keys: [
        { id: 'a', label: 'ش', value: 'ش', shiftValue: 'ِ', code: 'KeyA', type: 'character' },
        { id: 's', label: 'س', value: 'س', shiftValue: 'ُ', code: 'KeyS', type: 'character' },
        { id: 'd', label: 'ی', value: 'ی', shiftValue: 'َ', code: 'KeyD', type: 'character' },
        { id: 'f', label: 'ب', value: 'ب', shiftValue: 'إ', code: 'KeyF', type: 'character' },
        { id: 'g', label: 'ل', value: 'ل', shiftValue: 'أ', code: 'KeyG', type: 'character' },
        { id: 'h', label: 'ا', value: 'ا', shiftValue: 'آ', code: 'KeyH', type: 'character' },
        { id: 'j', label: 'ت', value: 'ت', shiftValue: 'ة', code: 'KeyJ', type: 'character' },
        { id: 'k', label: 'ن', value: 'ن', shiftValue: '»', code: 'KeyK', type: 'character' },
        { id: 'l', label: 'م', value: 'م', shiftValue: '«', code: 'KeyL', type: 'character' },
        { id: 'semicolon', label: 'ک', value: 'ک', shiftValue: ':', code: 'Semicolon', type: 'character' },
        { id: 'quote', label: 'گ', value: 'گ', shiftValue: '؛', code: 'Quote', type: 'character' },
        { id: 'enter', label: '↵', value: 'Enter', code: 'Enter', type: 'action', width: 1.5 },
      ],
    },
    // Row 4: Bottom row - Persian letters
    {
      keys: [
        { id: 'shift-left', label: '⇧', value: 'Shift', code: 'ShiftLeft', type: 'modifier', width: 1.5 },
        { id: 'z', label: 'ظ', value: 'ظ', shiftValue: 'ك', code: 'KeyZ', type: 'character' },
        { id: 'x', label: 'ط', value: 'ط', shiftValue: 'ٓ', code: 'KeyX', type: 'character' },
        { id: 'c', label: 'ز', value: 'ز', shiftValue: 'ژ', code: 'KeyC', type: 'character' },
        { id: 'v', label: 'ر', value: 'ر', shiftValue: 'ڑ', code: 'KeyV', type: 'character' },
        { id: 'b', label: 'ذ', value: 'ذ', shiftValue: 'ٰ', code: 'KeyB', type: 'character' },
        { id: 'n', label: 'د', value: 'د', shiftValue: 'ئ', code: 'KeyN', type: 'character' },
        { id: 'm', label: 'پ', value: 'پ', shiftValue: 'ؤ', code: 'KeyM', type: 'character' },
        { id: 'comma', label: 'و', value: 'و', shiftValue: '>', code: 'Comma', type: 'character' },
        { id: 'period', label: '.', value: '.', shiftValue: '<', code: 'Period', type: 'character' },
        { id: 'slash', label: '/', value: '/', shiftValue: '؟', code: 'Slash', type: 'character' },
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
    KeyQ: 'ض', KeyW: 'ص', KeyE: 'ث', KeyR: 'ق', KeyT: 'ف',
    KeyY: 'غ', KeyU: 'ع', KeyI: 'ه', KeyO: 'خ', KeyP: 'ح',
    KeyA: 'ش', KeyS: 'س', KeyD: 'ی', KeyF: 'ب', KeyG: 'ل',
    KeyH: 'ا', KeyJ: 'ت', KeyK: 'ن', KeyL: 'م',
    KeyZ: 'ظ', KeyX: 'ط', KeyC: 'ز', KeyV: 'ر', KeyB: 'ذ',
    KeyN: 'د', KeyM: 'پ',
  },
};
