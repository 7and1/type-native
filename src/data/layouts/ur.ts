import type { KeyboardLayout } from '@/types/keyboard';

/**
 * Urdu Keyboard Layout
 * Language: Urdu (اردو)
 * Script: Extended Arabic (Nastaliq style)
 * Direction: RTL
 * Standard Urdu phonetic keyboard layout
 */
export const urduLayout: KeyboardLayout = {
  id: 'ur',
  name: 'Urdu',
  nativeName: 'اردو',
  direction: 'rtl',
  fontFamily: 'Noto Nastaliq Urdu, Noto Sans Arabic, sans-serif',
  rows: [
    // Row 1: Numbers and symbols
    {
      keys: [
        { id: 'num1', label: '۱', value: '۱', shiftValue: '!', code: 'Digit1', type: 'character' },
        { id: 'num2', label: '۲', value: '۲', shiftValue: '@', code: 'Digit2', type: 'character' },
        { id: 'num3', label: '۳', value: '۳', shiftValue: '#', code: 'Digit3', type: 'character' },
        { id: 'num4', label: '۴', value: '۴', shiftValue: '$', code: 'Digit4', type: 'character' },
        { id: 'num5', label: '۵', value: '۵', shiftValue: '٪', code: 'Digit5', type: 'character' },
        { id: 'num6', label: '۶', value: '۶', shiftValue: '^', code: 'Digit6', type: 'character' },
        { id: 'num7', label: '۷', value: '۷', shiftValue: '&', code: 'Digit7', type: 'character' },
        { id: 'num8', label: '۸', value: '۸', shiftValue: '*', code: 'Digit8', type: 'character' },
        { id: 'num9', label: '۹', value: '۹', shiftValue: ')', code: 'Digit9', type: 'character' },
        { id: 'num0', label: '۰', value: '۰', shiftValue: '(', code: 'Digit0', type: 'character' },
        { id: 'minus', label: '-', value: '-', shiftValue: '_', code: 'Minus', type: 'character' },
        { id: 'equal', label: '=', value: '=', shiftValue: '+', code: 'Equal', type: 'character' },
        { id: 'backspace', label: '⌫', value: 'Backspace', code: 'Backspace', type: 'action', width: 1.5 },
      ],
    },
    // Row 2: Top row - Urdu letters
    {
      keys: [
        { id: 'q', label: 'ق', value: 'ق', shiftValue: 'ْ', code: 'KeyQ', type: 'character' },
        { id: 'w', label: 'و', value: 'و', shiftValue: 'ّ', code: 'KeyW', type: 'character' },
        { id: 'e', label: 'ع', value: 'ع', shiftValue: 'ٰ', code: 'KeyE', type: 'character' },
        { id: 'r', label: 'ر', value: 'ر', shiftValue: 'ڑ', code: 'KeyR', type: 'character' },
        { id: 't', label: 'ت', value: 'ت', shiftValue: 'ٹ', code: 'KeyT', type: 'character' },
        { id: 'y', label: 'ے', value: 'ے', shiftValue: 'ء', code: 'KeyY', type: 'character' },
        { id: 'u', label: 'ء', value: 'ء', shiftValue: 'ئ', code: 'KeyU', type: 'character' },
        { id: 'i', label: 'ی', value: 'ی', shiftValue: 'ي', code: 'KeyI', type: 'character' },
        { id: 'o', label: 'ہ', value: 'ہ', shiftValue: 'ۃ', code: 'KeyO', type: 'character' },
        { id: 'p', label: 'پ', value: 'پ', shiftValue: 'ُ', code: 'KeyP', type: 'character' },
        { id: 'bracket-left', label: '[', value: '[', shiftValue: '{', code: 'BracketLeft', type: 'character' },
        { id: 'bracket-right', label: ']', value: ']', shiftValue: '}', code: 'BracketRight', type: 'character' },
        { id: 'backslash', label: '\\', value: '\\', shiftValue: '|', code: 'Backslash', type: 'character' },
      ],
    },
    // Row 3: Home row - Urdu letters
    {
      keys: [
        { id: 'a', label: 'ا', value: 'ا', shiftValue: 'آ', code: 'KeyA', type: 'character' },
        { id: 's', label: 'س', value: 'س', shiftValue: 'ص', code: 'KeyS', type: 'character' },
        { id: 'd', label: 'د', value: 'د', shiftValue: 'ڈ', code: 'KeyD', type: 'character' },
        { id: 'f', label: 'ف', value: 'ف', shiftValue: 'ِ', code: 'KeyF', type: 'character' },
        { id: 'g', label: 'گ', value: 'گ', shiftValue: 'غ', code: 'KeyG', type: 'character' },
        { id: 'h', label: 'ح', value: 'ح', shiftValue: 'ھ', code: 'KeyH', type: 'character' },
        { id: 'j', label: 'ج', value: 'ج', shiftValue: 'ض', code: 'KeyJ', type: 'character' },
        { id: 'k', label: 'ک', value: 'ک', shiftValue: 'خ', code: 'KeyK', type: 'character' },
        { id: 'l', label: 'ل', value: 'ل', shiftValue: 'ٖ', code: 'KeyL', type: 'character' },
        { id: 'semicolon', label: '؛', value: '؛', shiftValue: ':', code: 'Semicolon', type: 'character' },
        { id: 'quote', label: "'", value: "'", shiftValue: '"', code: 'Quote', type: 'character' },
        { id: 'enter', label: '↵', value: 'Enter', code: 'Enter', type: 'action', width: 1.5 },
      ],
    },
    // Row 4: Bottom row - Urdu letters
    {
      keys: [
        { id: 'shift-left', label: '⇧', value: 'Shift', code: 'ShiftLeft', type: 'modifier', width: 1.5 },
        { id: 'z', label: 'ز', value: 'ز', shiftValue: 'ذ', code: 'KeyZ', type: 'character' },
        { id: 'x', label: 'ش', value: 'ش', shiftValue: 'ژ', code: 'KeyX', type: 'character' },
        { id: 'c', label: 'چ', value: 'چ', shiftValue: 'ث', code: 'KeyC', type: 'character' },
        { id: 'v', label: 'ط', value: 'ط', shiftValue: 'ظ', code: 'KeyV', type: 'character' },
        { id: 'b', label: 'ب', value: 'ب', shiftValue: 'َ', code: 'KeyB', type: 'character' },
        { id: 'n', label: 'ن', value: 'ن', shiftValue: 'ں', code: 'KeyN', type: 'character' },
        { id: 'm', label: 'م', value: 'م', shiftValue: 'ٔ', code: 'KeyM', type: 'character' },
        { id: 'comma', label: '،', value: '،', shiftValue: '>', code: 'Comma', type: 'character' },
        { id: 'period', label: '۔', value: '۔', shiftValue: '<', code: 'Period', type: 'character' },
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
    KeyQ: 'ق', KeyW: 'و', KeyE: 'ع', KeyR: 'ر', KeyT: 'ت',
    KeyY: 'ے', KeyU: 'ء', KeyI: 'ی', KeyO: 'ہ', KeyP: 'پ',
    KeyA: 'ا', KeyS: 'س', KeyD: 'د', KeyF: 'ف', KeyG: 'گ',
    KeyH: 'ح', KeyJ: 'ج', KeyK: 'ک', KeyL: 'ل',
    KeyZ: 'ز', KeyX: 'ش', KeyC: 'چ', KeyV: 'ط', KeyB: 'ب',
    KeyN: 'ن', KeyM: 'م',
  },
};
