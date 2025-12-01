/**
 * Saudi Arabian Arabic Keyboard Layout
 */

import type { KeyboardLayout } from '@/types/keyboard';

export const arabicSaudiLayout: KeyboardLayout = {
  id: 'ar-sa',
  name: 'Arabic (Saudi Arabia)',
  nativeName: 'العربية (السعودية)',
  direction: 'rtl',
  fontFamily: "'Noto Sans Arabic', 'Scheherazade New', 'Arabic Typesetting', 'Traditional Arabic', system-ui",
  rows: [
    {
      keys: [
        { id: 'ar-sa-backtick', label: 'ذ', value: 'ذ', shiftValue: 'ّ', code: 'Backquote', type: 'character' },
        { id: 'ar-sa-1', label: '١', value: '١', shiftValue: '!', code: 'Digit1', type: 'character' },
        { id: 'ar-sa-2', label: '٢', value: '٢', shiftValue: '@', code: 'Digit2', type: 'character' },
        { id: 'ar-sa-3', label: '٣', value: '٣', shiftValue: '#', code: 'Digit3', type: 'character' },
        { id: 'ar-sa-4', label: '٤', value: '٤', shiftValue: '$', code: 'Digit4', type: 'character' },
        { id: 'ar-sa-5', label: '٥', value: '٥', shiftValue: '٪', code: 'Digit5', type: 'character' },
        { id: 'ar-sa-6', label: '٦', value: '٦', shiftValue: '^', code: 'Digit6', type: 'character' },
        { id: 'ar-sa-7', label: '٧', value: '٧', shiftValue: '&', code: 'Digit7', type: 'character' },
        { id: 'ar-sa-8', label: '٨', value: '٨', shiftValue: '*', code: 'Digit8', type: 'character' },
        { id: 'ar-sa-9', label: '٩', value: '٩', shiftValue: ')', code: 'Digit9', type: 'character' },
        { id: 'ar-sa-0', label: '٠', value: '٠', shiftValue: '(', code: 'Digit0', type: 'character' },
        { id: 'ar-sa-minus', label: '-', value: '-', shiftValue: '_', code: 'Minus', type: 'character' },
        { id: 'ar-sa-equal', label: '=', value: '=', shiftValue: '+', code: 'Equal', type: 'character' },
        { id: 'ar-sa-backspace', label: '⌫', value: 'Backspace', code: 'Backspace', type: 'action', width: 1.5 },
      ],
    },
    {
      keys: [
        { id: 'ar-sa-tab', label: 'Tab', value: 'Tab', code: 'Tab', type: 'action', width: 1.5 },
        { id: 'ar-sa-q', label: 'ض', value: 'ض', shiftValue: 'َ', code: 'KeyQ', type: 'character' },
        { id: 'ar-sa-w', label: 'ص', value: 'ص', shiftValue: 'ً', code: 'KeyW', type: 'character' },
        { id: 'ar-sa-e', label: 'ث', value: 'ث', shiftValue: 'ُ', code: 'KeyE', type: 'character' },
        { id: 'ar-sa-r', label: 'ق', value: 'ق', shiftValue: 'ٌ', code: 'KeyR', type: 'character' },
        { id: 'ar-sa-t', label: 'ف', value: 'ف', shiftValue: 'لإ', code: 'KeyT', type: 'character' },
        { id: 'ar-sa-y', label: 'غ', value: 'غ', shiftValue: 'إ', code: 'KeyY', type: 'character' },
        { id: 'ar-sa-u', label: 'ع', value: 'ع', shiftValue: "'", code: 'KeyU', type: 'character' },
        { id: 'ar-sa-i', label: 'ه', value: 'ه', shiftValue: '÷', code: 'KeyI', type: 'character' },
        { id: 'ar-sa-o', label: 'خ', value: 'خ', shiftValue: '×', code: 'KeyO', type: 'character' },
        { id: 'ar-sa-p', label: 'ح', value: 'ح', shiftValue: '؛', code: 'KeyP', type: 'character' },
        { id: 'ar-sa-bracketleft', label: 'ج', value: 'ج', shiftValue: '<', code: 'BracketLeft', type: 'character' },
        { id: 'ar-sa-bracketright', label: 'د', value: 'د', shiftValue: '>', code: 'BracketRight', type: 'character' },
      ],
    },
    {
      keys: [
        { id: 'ar-sa-caps', label: 'Caps', value: 'CapsLock', code: 'CapsLock', type: 'modifier', width: 1.8 },
        { id: 'ar-sa-a', label: 'ش', value: 'ش', shiftValue: '\\', code: 'KeyA', type: 'character' },
        { id: 'ar-sa-s', label: 'س', value: 'س', shiftValue: 'ِ', code: 'KeyS', type: 'character' },
        { id: 'ar-sa-d', label: 'ي', value: 'ي', shiftValue: ']', code: 'KeyD', type: 'character' },
        { id: 'ar-sa-f', label: 'ب', value: 'ب', shiftValue: '[', code: 'KeyF', type: 'character' },
        { id: 'ar-sa-g', label: 'ل', value: 'ل', shiftValue: 'لأ', code: 'KeyG', type: 'character' },
        { id: 'ar-sa-h', label: 'ا', value: 'ا', shiftValue: 'أ', code: 'KeyH', type: 'character' },
        { id: 'ar-sa-j', label: 'ت', value: 'ت', shiftValue: 'ـ', code: 'KeyJ', type: 'character' },
        { id: 'ar-sa-k', label: 'ن', value: 'ن', shiftValue: '،', code: 'KeyK', type: 'character' },
        { id: 'ar-sa-l', label: 'م', value: 'م', shiftValue: '/', code: 'KeyL', type: 'character' },
        { id: 'ar-sa-semicolon', label: 'ك', value: 'ك', shiftValue: ':', code: 'Semicolon', type: 'character' },
        { id: 'ar-sa-quote', label: 'ط', value: 'ط', shiftValue: '"', code: 'Quote', type: 'character' },
        { id: 'ar-sa-enter', label: 'Enter', value: 'Enter', code: 'Enter', type: 'action', width: 1.8 },
      ],
    },
    {
      keys: [
        { id: 'ar-sa-shift-left', label: '⇧', value: 'Shift', code: 'ShiftLeft', type: 'modifier', width: 2.3 },
        { id: 'ar-sa-z', label: 'ئ', value: 'ئ', shiftValue: '~', code: 'KeyZ', type: 'character' },
        { id: 'ar-sa-x', label: 'ء', value: 'ء', shiftValue: 'ْ', code: 'KeyX', type: 'character' },
        { id: 'ar-sa-c', label: 'ؤ', value: 'ؤ', shiftValue: '}', code: 'KeyC', type: 'character' },
        { id: 'ar-sa-v', label: 'ر', value: 'ر', shiftValue: '{', code: 'KeyV', type: 'character' },
        { id: 'ar-sa-b', label: 'لا', value: 'لا', shiftValue: 'لآ', code: 'KeyB', type: 'character' },
        { id: 'ar-sa-n', label: 'ى', value: 'ى', shiftValue: 'آ', code: 'KeyN', type: 'character' },
        { id: 'ar-sa-m', label: 'ة', value: 'ة', shiftValue: "'", code: 'KeyM', type: 'character' },
        { id: 'ar-sa-comma', label: 'و', value: 'و', shiftValue: ',', code: 'Comma', type: 'character' },
        { id: 'ar-sa-period', label: 'ز', value: 'ز', shiftValue: '.', code: 'Period', type: 'character' },
        { id: 'ar-sa-slash', label: 'ظ', value: 'ظ', shiftValue: '؟', code: 'Slash', type: 'character' },
        { id: 'ar-sa-shift-right', label: '⇧', value: 'Shift', code: 'ShiftRight', type: 'modifier', width: 2.3 },
      ],
    },
    {
      keys: [
        { id: 'ar-sa-space', label: 'Space', value: ' ', code: 'Space', type: 'space', width: 6 },
      ],
    },
  ],
  physicalKeyMap: {
    'Backquote': 'ذ', 'Digit1': '١', 'Digit2': '٢', 'Digit3': '٣', 'Digit4': '٤',
    'Digit5': '٥', 'Digit6': '٦', 'Digit7': '٧', 'Digit8': '٨', 'Digit9': '٩',
    'Digit0': '٠', 'Minus': '-', 'Equal': '=',
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
