/**
 * Algerian Arabic Keyboard Layout
 */

import type { KeyboardLayout } from '@/types/keyboard';

export const arabicAlgeriaLayout: KeyboardLayout = {
  id: 'ar-dz',
  name: 'Arabic (Algeria)',
  nativeName: 'العربية (الجزائر)',
  direction: 'rtl',
  fontFamily: "'Noto Sans Arabic', 'Scheherazade New', 'Arabic Typesetting', 'Traditional Arabic', system-ui",
  rows: [
    {
      keys: [
        { id: 'ar-dz-backtick', label: 'ذ', value: 'ذ', shiftValue: 'ّ', code: 'Backquote', type: 'character' },
        { id: 'ar-dz-1', label: '1', value: '1', shiftValue: '!', code: 'Digit1', type: 'character' },
        { id: 'ar-dz-2', label: '2', value: '2', shiftValue: '@', code: 'Digit2', type: 'character' },
        { id: 'ar-dz-3', label: '3', value: '3', shiftValue: '#', code: 'Digit3', type: 'character' },
        { id: 'ar-dz-4', label: '4', value: '4', shiftValue: '$', code: 'Digit4', type: 'character' },
        { id: 'ar-dz-5', label: '5', value: '5', shiftValue: '%', code: 'Digit5', type: 'character' },
        { id: 'ar-dz-6', label: '6', value: '6', shiftValue: '^', code: 'Digit6', type: 'character' },
        { id: 'ar-dz-7', label: '7', value: '7', shiftValue: '&', code: 'Digit7', type: 'character' },
        { id: 'ar-dz-8', label: '8', value: '8', shiftValue: '*', code: 'Digit8', type: 'character' },
        { id: 'ar-dz-9', label: '9', value: '9', shiftValue: ')', code: 'Digit9', type: 'character' },
        { id: 'ar-dz-0', label: '0', value: '0', shiftValue: '(', code: 'Digit0', type: 'character' },
        { id: 'ar-dz-minus', label: '-', value: '-', shiftValue: '_', code: 'Minus', type: 'character' },
        { id: 'ar-dz-equal', label: '=', value: '=', shiftValue: '+', code: 'Equal', type: 'character' },
        { id: 'ar-dz-backspace', label: '⌫', value: 'Backspace', code: 'Backspace', type: 'action', width: 1.5 },
      ],
    },
    {
      keys: [
        { id: 'ar-dz-tab', label: 'Tab', value: 'Tab', code: 'Tab', type: 'action', width: 1.5 },
        { id: 'ar-dz-q', label: 'ض', value: 'ض', shiftValue: 'َ', code: 'KeyQ', type: 'character' },
        { id: 'ar-dz-w', label: 'ص', value: 'ص', shiftValue: 'ً', code: 'KeyW', type: 'character' },
        { id: 'ar-dz-e', label: 'ث', value: 'ث', shiftValue: 'ُ', code: 'KeyE', type: 'character' },
        { id: 'ar-dz-r', label: 'ق', value: 'ق', shiftValue: 'ٌ', code: 'KeyR', type: 'character' },
        { id: 'ar-dz-t', label: 'ف', value: 'ف', shiftValue: 'لإ', code: 'KeyT', type: 'character' },
        { id: 'ar-dz-y', label: 'غ', value: 'غ', shiftValue: 'إ', code: 'KeyY', type: 'character' },
        { id: 'ar-dz-u', label: 'ع', value: 'ع', shiftValue: "'", code: 'KeyU', type: 'character' },
        { id: 'ar-dz-i', label: 'ه', value: 'ه', shiftValue: '÷', code: 'KeyI', type: 'character' },
        { id: 'ar-dz-o', label: 'خ', value: 'خ', shiftValue: '×', code: 'KeyO', type: 'character' },
        { id: 'ar-dz-p', label: 'ح', value: 'ح', shiftValue: '؛', code: 'KeyP', type: 'character' },
        { id: 'ar-dz-bracketleft', label: 'ج', value: 'ج', shiftValue: '<', code: 'BracketLeft', type: 'character' },
        { id: 'ar-dz-bracketright', label: 'د', value: 'د', shiftValue: '>', code: 'BracketRight', type: 'character' },
      ],
    },
    {
      keys: [
        { id: 'ar-dz-caps', label: 'Caps', value: 'CapsLock', code: 'CapsLock', type: 'modifier', width: 1.8 },
        { id: 'ar-dz-a', label: 'ش', value: 'ش', shiftValue: '\\', code: 'KeyA', type: 'character' },
        { id: 'ar-dz-s', label: 'س', value: 'س', shiftValue: 'ِ', code: 'KeyS', type: 'character' },
        { id: 'ar-dz-d', label: 'ي', value: 'ي', shiftValue: ']', code: 'KeyD', type: 'character' },
        { id: 'ar-dz-f', label: 'ب', value: 'ب', shiftValue: '[', code: 'KeyF', type: 'character' },
        { id: 'ar-dz-g', label: 'ل', value: 'ل', shiftValue: 'لأ', code: 'KeyG', type: 'character' },
        { id: 'ar-dz-h', label: 'ا', value: 'ا', shiftValue: 'أ', code: 'KeyH', type: 'character' },
        { id: 'ar-dz-j', label: 'ت', value: 'ت', shiftValue: 'ـ', code: 'KeyJ', type: 'character' },
        { id: 'ar-dz-k', label: 'ن', value: 'ن', shiftValue: '،', code: 'KeyK', type: 'character' },
        { id: 'ar-dz-l', label: 'م', value: 'م', shiftValue: '/', code: 'KeyL', type: 'character' },
        { id: 'ar-dz-semicolon', label: 'ك', value: 'ك', shiftValue: ':', code: 'Semicolon', type: 'character' },
        { id: 'ar-dz-quote', label: 'ط', value: 'ط', shiftValue: '"', code: 'Quote', type: 'character' },
        { id: 'ar-dz-enter', label: 'Enter', value: 'Enter', code: 'Enter', type: 'action', width: 1.8 },
      ],
    },
    {
      keys: [
        { id: 'ar-dz-shift-left', label: '⇧', value: 'Shift', code: 'ShiftLeft', type: 'modifier', width: 2.3 },
        { id: 'ar-dz-z', label: 'ئ', value: 'ئ', shiftValue: '~', code: 'KeyZ', type: 'character' },
        { id: 'ar-dz-x', label: 'ء', value: 'ء', shiftValue: 'ْ', code: 'KeyX', type: 'character' },
        { id: 'ar-dz-c', label: 'ؤ', value: 'ؤ', shiftValue: '}', code: 'KeyC', type: 'character' },
        { id: 'ar-dz-v', label: 'ر', value: 'ر', shiftValue: '{', code: 'KeyV', type: 'character' },
        { id: 'ar-dz-b', label: 'لا', value: 'لا', shiftValue: 'لآ', code: 'KeyB', type: 'character' },
        { id: 'ar-dz-n', label: 'ى', value: 'ى', shiftValue: 'آ', code: 'KeyN', type: 'character' },
        { id: 'ar-dz-m', label: 'ة', value: 'ة', shiftValue: "'", code: 'KeyM', type: 'character' },
        { id: 'ar-dz-comma', label: 'و', value: 'و', shiftValue: ',', code: 'Comma', type: 'character' },
        { id: 'ar-dz-period', label: 'ز', value: 'ز', shiftValue: '.', code: 'Period', type: 'character' },
        { id: 'ar-dz-slash', label: 'ظ', value: 'ظ', shiftValue: '؟', code: 'Slash', type: 'character' },
        { id: 'ar-dz-shift-right', label: '⇧', value: 'Shift', code: 'ShiftRight', type: 'modifier', width: 2.3 },
      ],
    },
    {
      keys: [
        { id: 'ar-dz-space', label: 'Space', value: ' ', code: 'Space', type: 'space', width: 6 },
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
