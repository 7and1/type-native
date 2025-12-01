/**
 * Moroccan Arabic Keyboard Layout (French AZERTY-based)
 */

import type { KeyboardLayout } from '@/types/keyboard';

export const arabicMoroccoLayout: KeyboardLayout = {
  id: 'ar-ma',
  name: 'Arabic (Morocco)',
  nativeName: 'العربية (المغرب)',
  direction: 'rtl',
  fontFamily: "'Noto Sans Arabic', 'Scheherazade New', 'Arabic Typesetting', 'Traditional Arabic', system-ui",
  rows: [
    {
      keys: [
        { id: 'ar-ma-backtick', label: 'ذ', value: 'ذ', shiftValue: 'ّ', code: 'Backquote', type: 'character' },
        { id: 'ar-ma-1', label: '1', value: '1', shiftValue: '!', code: 'Digit1', type: 'character' },
        { id: 'ar-ma-2', label: '2', value: '2', shiftValue: '@', code: 'Digit2', type: 'character' },
        { id: 'ar-ma-3', label: '3', value: '3', shiftValue: '#', code: 'Digit3', type: 'character' },
        { id: 'ar-ma-4', label: '4', value: '4', shiftValue: '$', code: 'Digit4', type: 'character' },
        { id: 'ar-ma-5', label: '5', value: '5', shiftValue: '%', code: 'Digit5', type: 'character' },
        { id: 'ar-ma-6', label: '6', value: '6', shiftValue: '^', code: 'Digit6', type: 'character' },
        { id: 'ar-ma-7', label: '7', value: '7', shiftValue: '&', code: 'Digit7', type: 'character' },
        { id: 'ar-ma-8', label: '8', value: '8', shiftValue: '*', code: 'Digit8', type: 'character' },
        { id: 'ar-ma-9', label: '9', value: '9', shiftValue: ')', code: 'Digit9', type: 'character' },
        { id: 'ar-ma-0', label: '0', value: '0', shiftValue: '(', code: 'Digit0', type: 'character' },
        { id: 'ar-ma-minus', label: '-', value: '-', shiftValue: '_', code: 'Minus', type: 'character' },
        { id: 'ar-ma-equal', label: '=', value: '=', shiftValue: '+', code: 'Equal', type: 'character' },
        { id: 'ar-ma-backspace', label: '⌫', value: 'Backspace', code: 'Backspace', type: 'action', width: 1.5 },
      ],
    },
    {
      keys: [
        { id: 'ar-ma-tab', label: 'Tab', value: 'Tab', code: 'Tab', type: 'action', width: 1.5 },
        { id: 'ar-ma-q', label: 'ض', value: 'ض', shiftValue: 'َ', code: 'KeyQ', type: 'character' },
        { id: 'ar-ma-w', label: 'ص', value: 'ص', shiftValue: 'ً', code: 'KeyW', type: 'character' },
        { id: 'ar-ma-e', label: 'ث', value: 'ث', shiftValue: 'ُ', code: 'KeyE', type: 'character' },
        { id: 'ar-ma-r', label: 'ق', value: 'ق', shiftValue: 'ٌ', code: 'KeyR', type: 'character' },
        { id: 'ar-ma-t', label: 'ف', value: 'ف', shiftValue: 'لإ', code: 'KeyT', type: 'character' },
        { id: 'ar-ma-y', label: 'غ', value: 'غ', shiftValue: 'إ', code: 'KeyY', type: 'character' },
        { id: 'ar-ma-u', label: 'ع', value: 'ع', shiftValue: "'", code: 'KeyU', type: 'character' },
        { id: 'ar-ma-i', label: 'ه', value: 'ه', shiftValue: '÷', code: 'KeyI', type: 'character' },
        { id: 'ar-ma-o', label: 'خ', value: 'خ', shiftValue: '×', code: 'KeyO', type: 'character' },
        { id: 'ar-ma-p', label: 'ح', value: 'ح', shiftValue: '؛', code: 'KeyP', type: 'character' },
        { id: 'ar-ma-bracketleft', label: 'ج', value: 'ج', shiftValue: '<', code: 'BracketLeft', type: 'character' },
        { id: 'ar-ma-bracketright', label: 'د', value: 'د', shiftValue: '>', code: 'BracketRight', type: 'character' },
      ],
    },
    {
      keys: [
        { id: 'ar-ma-caps', label: 'Caps', value: 'CapsLock', code: 'CapsLock', type: 'modifier', width: 1.8 },
        { id: 'ar-ma-a', label: 'ش', value: 'ش', shiftValue: '\\', code: 'KeyA', type: 'character' },
        { id: 'ar-ma-s', label: 'س', value: 'س', shiftValue: 'ِ', code: 'KeyS', type: 'character' },
        { id: 'ar-ma-d', label: 'ي', value: 'ي', shiftValue: ']', code: 'KeyD', type: 'character' },
        { id: 'ar-ma-f', label: 'ب', value: 'ب', shiftValue: '[', code: 'KeyF', type: 'character' },
        { id: 'ar-ma-g', label: 'ل', value: 'ل', shiftValue: 'لأ', code: 'KeyG', type: 'character' },
        { id: 'ar-ma-h', label: 'ا', value: 'ا', shiftValue: 'أ', code: 'KeyH', type: 'character' },
        { id: 'ar-ma-j', label: 'ت', value: 'ت', shiftValue: 'ـ', code: 'KeyJ', type: 'character' },
        { id: 'ar-ma-k', label: 'ن', value: 'ن', shiftValue: '،', code: 'KeyK', type: 'character' },
        { id: 'ar-ma-l', label: 'م', value: 'م', shiftValue: '/', code: 'KeyL', type: 'character' },
        { id: 'ar-ma-semicolon', label: 'ك', value: 'ك', shiftValue: ':', code: 'Semicolon', type: 'character' },
        { id: 'ar-ma-quote', label: 'ط', value: 'ط', shiftValue: '"', code: 'Quote', type: 'character' },
        { id: 'ar-ma-enter', label: 'Enter', value: 'Enter', code: 'Enter', type: 'action', width: 1.8 },
      ],
    },
    {
      keys: [
        { id: 'ar-ma-shift-left', label: '⇧', value: 'Shift', code: 'ShiftLeft', type: 'modifier', width: 2.3 },
        { id: 'ar-ma-z', label: 'ئ', value: 'ئ', shiftValue: '~', code: 'KeyZ', type: 'character' },
        { id: 'ar-ma-x', label: 'ء', value: 'ء', shiftValue: 'ْ', code: 'KeyX', type: 'character' },
        { id: 'ar-ma-c', label: 'ؤ', value: 'ؤ', shiftValue: '}', code: 'KeyC', type: 'character' },
        { id: 'ar-ma-v', label: 'ر', value: 'ر', shiftValue: '{', code: 'KeyV', type: 'character' },
        { id: 'ar-ma-b', label: 'لا', value: 'لا', shiftValue: 'لآ', code: 'KeyB', type: 'character' },
        { id: 'ar-ma-n', label: 'ى', value: 'ى', shiftValue: 'آ', code: 'KeyN', type: 'character' },
        { id: 'ar-ma-m', label: 'ة', value: 'ة', shiftValue: "'", code: 'KeyM', type: 'character' },
        { id: 'ar-ma-comma', label: 'و', value: 'و', shiftValue: ',', code: 'Comma', type: 'character' },
        { id: 'ar-ma-period', label: 'ز', value: 'ز', shiftValue: '.', code: 'Period', type: 'character' },
        { id: 'ar-ma-slash', label: 'ظ', value: 'ظ', shiftValue: '؟', code: 'Slash', type: 'character' },
        { id: 'ar-ma-shift-right', label: '⇧', value: 'Shift', code: 'ShiftRight', type: 'modifier', width: 2.3 },
      ],
    },
    {
      keys: [
        { id: 'ar-ma-space', label: 'Space', value: ' ', code: 'Space', type: 'space', width: 6 },
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
