/**
 * UAE Arabic Keyboard Layout
 */

import type { KeyboardLayout } from '@/types/keyboard';

export const arabicUAELayout: KeyboardLayout = {
  id: 'ar-ae',
  name: 'Arabic (UAE)',
  nativeName: 'العربية (الإمارات)',
  direction: 'rtl',
  fontFamily: "'Noto Sans Arabic', 'Scheherazade New', 'Arabic Typesetting', 'Traditional Arabic', system-ui",
  rows: [
    {
      keys: [
        { id: 'ar-ae-backtick', label: 'ذ', value: 'ذ', shiftValue: 'ّ', code: 'Backquote', type: 'character' },
        { id: 'ar-ae-1', label: '1', value: '1', shiftValue: '!', code: 'Digit1', type: 'character' },
        { id: 'ar-ae-2', label: '2', value: '2', shiftValue: '@', code: 'Digit2', type: 'character' },
        { id: 'ar-ae-3', label: '3', value: '3', shiftValue: '#', code: 'Digit3', type: 'character' },
        { id: 'ar-ae-4', label: '4', value: '4', shiftValue: '$', code: 'Digit4', type: 'character' },
        { id: 'ar-ae-5', label: '5', value: '5', shiftValue: '%', code: 'Digit5', type: 'character' },
        { id: 'ar-ae-6', label: '6', value: '6', shiftValue: '^', code: 'Digit6', type: 'character' },
        { id: 'ar-ae-7', label: '7', value: '7', shiftValue: '&', code: 'Digit7', type: 'character' },
        { id: 'ar-ae-8', label: '8', value: '8', shiftValue: '*', code: 'Digit8', type: 'character' },
        { id: 'ar-ae-9', label: '9', value: '9', shiftValue: ')', code: 'Digit9', type: 'character' },
        { id: 'ar-ae-0', label: '0', value: '0', shiftValue: '(', code: 'Digit0', type: 'character' },
        { id: 'ar-ae-minus', label: '-', value: '-', shiftValue: '_', code: 'Minus', type: 'character' },
        { id: 'ar-ae-equal', label: '=', value: '=', shiftValue: '+', code: 'Equal', type: 'character' },
        { id: 'ar-ae-backspace', label: '⌫', value: 'Backspace', code: 'Backspace', type: 'action', width: 1.5 },
      ],
    },
    {
      keys: [
        { id: 'ar-ae-tab', label: 'Tab', value: 'Tab', code: 'Tab', type: 'action', width: 1.5 },
        { id: 'ar-ae-q', label: 'ض', value: 'ض', shiftValue: 'َ', code: 'KeyQ', type: 'character' },
        { id: 'ar-ae-w', label: 'ص', value: 'ص', shiftValue: 'ً', code: 'KeyW', type: 'character' },
        { id: 'ar-ae-e', label: 'ث', value: 'ث', shiftValue: 'ُ', code: 'KeyE', type: 'character' },
        { id: 'ar-ae-r', label: 'ق', value: 'ق', shiftValue: 'ٌ', code: 'KeyR', type: 'character' },
        { id: 'ar-ae-t', label: 'ف', value: 'ف', shiftValue: 'لإ', code: 'KeyT', type: 'character' },
        { id: 'ar-ae-y', label: 'غ', value: 'غ', shiftValue: 'إ', code: 'KeyY', type: 'character' },
        { id: 'ar-ae-u', label: 'ع', value: 'ع', shiftValue: "'", code: 'KeyU', type: 'character' },
        { id: 'ar-ae-i', label: 'ه', value: 'ه', shiftValue: '÷', code: 'KeyI', type: 'character' },
        { id: 'ar-ae-o', label: 'خ', value: 'خ', shiftValue: '×', code: 'KeyO', type: 'character' },
        { id: 'ar-ae-p', label: 'ح', value: 'ح', shiftValue: '؛', code: 'KeyP', type: 'character' },
        { id: 'ar-ae-bracketleft', label: 'ج', value: 'ج', shiftValue: '<', code: 'BracketLeft', type: 'character' },
        { id: 'ar-ae-bracketright', label: 'د', value: 'د', shiftValue: '>', code: 'BracketRight', type: 'character' },
      ],
    },
    {
      keys: [
        { id: 'ar-ae-caps', label: 'Caps', value: 'CapsLock', code: 'CapsLock', type: 'modifier', width: 1.8 },
        { id: 'ar-ae-a', label: 'ش', value: 'ش', shiftValue: '\\', code: 'KeyA', type: 'character' },
        { id: 'ar-ae-s', label: 'س', value: 'س', shiftValue: 'ِ', code: 'KeyS', type: 'character' },
        { id: 'ar-ae-d', label: 'ي', value: 'ي', shiftValue: ']', code: 'KeyD', type: 'character' },
        { id: 'ar-ae-f', label: 'ب', value: 'ب', shiftValue: '[', code: 'KeyF', type: 'character' },
        { id: 'ar-ae-g', label: 'ل', value: 'ل', shiftValue: 'لأ', code: 'KeyG', type: 'character' },
        { id: 'ar-ae-h', label: 'ا', value: 'ا', shiftValue: 'أ', code: 'KeyH', type: 'character' },
        { id: 'ar-ae-j', label: 'ت', value: 'ت', shiftValue: 'ـ', code: 'KeyJ', type: 'character' },
        { id: 'ar-ae-k', label: 'ن', value: 'ن', shiftValue: '،', code: 'KeyK', type: 'character' },
        { id: 'ar-ae-l', label: 'م', value: 'م', shiftValue: '/', code: 'KeyL', type: 'character' },
        { id: 'ar-ae-semicolon', label: 'ك', value: 'ك', shiftValue: ':', code: 'Semicolon', type: 'character' },
        { id: 'ar-ae-quote', label: 'ط', value: 'ط', shiftValue: '"', code: 'Quote', type: 'character' },
        { id: 'ar-ae-enter', label: 'Enter', value: 'Enter', code: 'Enter', type: 'action', width: 1.8 },
      ],
    },
    {
      keys: [
        { id: 'ar-ae-shift-left', label: '⇧', value: 'Shift', code: 'ShiftLeft', type: 'modifier', width: 2.3 },
        { id: 'ar-ae-z', label: 'ئ', value: 'ئ', shiftValue: '~', code: 'KeyZ', type: 'character' },
        { id: 'ar-ae-x', label: 'ء', value: 'ء', shiftValue: 'ْ', code: 'KeyX', type: 'character' },
        { id: 'ar-ae-c', label: 'ؤ', value: 'ؤ', shiftValue: '}', code: 'KeyC', type: 'character' },
        { id: 'ar-ae-v', label: 'ر', value: 'ر', shiftValue: '{', code: 'KeyV', type: 'character' },
        { id: 'ar-ae-b', label: 'لا', value: 'لا', shiftValue: 'لآ', code: 'KeyB', type: 'character' },
        { id: 'ar-ae-n', label: 'ى', value: 'ى', shiftValue: 'آ', code: 'KeyN', type: 'character' },
        { id: 'ar-ae-m', label: 'ة', value: 'ة', shiftValue: "'", code: 'KeyM', type: 'character' },
        { id: 'ar-ae-comma', label: 'و', value: 'و', shiftValue: ',', code: 'Comma', type: 'character' },
        { id: 'ar-ae-period', label: 'ز', value: 'ز', shiftValue: '.', code: 'Period', type: 'character' },
        { id: 'ar-ae-slash', label: 'ظ', value: 'ظ', shiftValue: '؟', code: 'Slash', type: 'character' },
        { id: 'ar-ae-shift-right', label: '⇧', value: 'Shift', code: 'ShiftRight', type: 'modifier', width: 2.3 },
      ],
    },
    {
      keys: [
        { id: 'ar-ae-space', label: 'Space', value: ' ', code: 'Space', type: 'space', width: 6 },
      ],
    },
  ],
  physicalKeyMap: {
    'Backquote': 'ذ', 'Digit1': '1', 'Digit2': '2', 'Digit3': '3', 'Digit4': '4',
    'Digit5': '5', 'Digit6': '6', 'Digit7': '7', 'Digit8': '8', 'Digit9': '9',
    'Digit0': '0', 'Minus': '-', 'Equal': '=',
    'KeyQ': 'ض', 'KeyW': 'ص', 'KeyE': 'ث', 'KeyR': 'ق', 'KeyT': 'ف',
    'KeyY': 'غ', 'KeyU': 'ع', 'KeyI': 'ه', 'KeyO': 'خ', 'KeyP': 'ح',
    'BracketLeft': 'ج', 'BracketRight': 'د',
    'KeyA': 'ش', 'KeyS': 'س', 'KeyD': 'ي', 'KeyF': 'ب', 'KeyG': 'ل',
    'KeyH': 'ا', 'KeyJ': 'ت', 'KeyK': 'ن', 'KeyL': 'م',
    'Semicolon': 'ك', 'Quote': 'ط',
    'KeyZ': 'ئ', 'KeyX': 'ء', 'KeyC': 'ؤ', 'KeyV': 'ر', 'KeyB': 'لا',
    'KeyN': 'ى', 'KeyM': 'ة', 'Comma': 'و', 'Period': 'ز', 'Slash': 'ظ',
    'Space': ' ',
  },
};
