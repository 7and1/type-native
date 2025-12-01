/**
 * Kurdish (Sorani) Keyboard Layout - Arabic-script based
 */

import type { KeyboardLayout } from '@/types/keyboard';

export const kurdishSoraniLayout: KeyboardLayout = {
  id: 'ckb',
  name: 'Kurdish (Sorani)',
  nativeName: 'کوردی',
  direction: 'rtl',
  fontFamily: 'system-ui, sans-serif',
  rows: [
    {
      keys: [
        { id: 'ckb-backtick', label: '`', value: '`', shiftValue: '~', code: 'Backquote', type: 'character' },
        { id: 'ckb-1', label: '1', value: '1', shiftValue: '!', code: 'Digit1', type: 'character' },
        { id: 'ckb-2', label: '2', value: '2', shiftValue: '@', code: 'Digit2', type: 'character' },
        { id: 'ckb-3', label: '3', value: '3', shiftValue: '#', code: 'Digit3', type: 'character' },
        { id: 'ckb-4', label: '4', value: '4', shiftValue: '$', code: 'Digit4', type: 'character' },
        { id: 'ckb-5', label: '5', value: '5', shiftValue: '%', code: 'Digit5', type: 'character' },
        { id: 'ckb-6', label: '6', value: '6', shiftValue: '^', code: 'Digit6', type: 'character' },
        { id: 'ckb-7', label: '7', value: '7', shiftValue: '&', code: 'Digit7', type: 'character' },
        { id: 'ckb-8', label: '8', value: '8', shiftValue: '*', code: 'Digit8', type: 'character' },
        { id: 'ckb-9', label: '9', value: '9', shiftValue: '(', code: 'Digit9', type: 'character' },
        { id: 'ckb-0', label: '0', value: '0', shiftValue: ')', code: 'Digit0', type: 'character' },
        { id: 'ckb-minus', label: '-', value: '-', shiftValue: '_', code: 'Minus', type: 'character' },
        { id: 'ckb-equal', label: '=', value: '=', shiftValue: '+', code: 'Equal', type: 'character' },
        { id: 'ckb-backspace', label: '⌫', value: 'Backspace', code: 'Backspace', type: 'action', width: 1.5 },
      ],
    },
    {
      keys: [
        { id: 'ckb-tab', label: 'Tab', value: 'Tab', code: 'Tab', type: 'action', width: 1.5 },
        { id: 'ckb-q', label: 'ق', value: 'ق', shiftValue: 'ڤ', code: 'KeyQ', type: 'character' },
        { id: 'ckb-w', label: 'و', value: 'و', shiftValue: 'ۆ', code: 'KeyW', type: 'character' },
        { id: 'ckb-e', label: 'ە', value: 'ە', shiftValue: 'ێ', code: 'KeyE', type: 'character' },
        { id: 'ckb-r', label: 'ر', value: 'ر', shiftValue: 'ڕ', code: 'KeyR', type: 'character' },
        { id: 'ckb-t', label: 'ت', value: 'ت', shiftValue: 'ط', code: 'KeyT', type: 'character' },
        { id: 'ckb-y', label: 'ی', value: 'ی', shiftValue: 'غ', code: 'KeyY', type: 'character' },
        { id: 'ckb-u', label: 'ع', value: 'ع', shiftValue: '\u2018', code: 'KeyU', type: 'character' },
        { id: 'ckb-i', label: 'ی', value: 'ی', shiftValue: 'Í', code: 'KeyI', type: 'character' },
        { id: 'ckb-o', label: 'خ', value: 'خ', shiftValue: '×', code: 'KeyO', type: 'character' },
        { id: 'ckb-p', label: 'ح', value: 'ح', shiftValue: '÷', code: 'KeyP', type: 'character' },
        { id: 'ckb-bracketleft', label: 'ج', value: 'ج', shiftValue: '}', code: 'BracketLeft', type: 'character' },
        { id: 'ckb-bracketright', label: 'چ', value: 'چ', shiftValue: '{', code: 'BracketRight', type: 'character' },
      ],
    },
    {
      keys: [
        { id: 'ckb-caps', label: 'Caps', value: 'CapsLock', code: 'CapsLock', type: 'modifier', width: 1.8 },
        { id: 'ckb-a', label: 'ا', value: 'ا', shiftValue: 'آ', code: 'KeyA', type: 'character' },
        { id: 'ckb-s', label: 'س', value: 'س', shiftValue: 'ص', code: 'KeyS', type: 'character' },
        { id: 'ckb-d', label: 'د', value: 'د', shiftValue: 'ڈ', code: 'KeyD', type: 'character' },
        { id: 'ckb-f', label: 'ف', value: 'ف', shiftValue: 'ڤ', code: 'KeyF', type: 'character' },
        { id: 'ckb-g', label: 'گ', value: 'گ', shiftValue: 'ڭ', code: 'KeyG', type: 'character' },
        { id: 'ckb-h', label: 'ه', value: 'ه', shiftValue: 'ھ', code: 'KeyH', type: 'character' },
        { id: 'ckb-j', label: 'ژ', value: 'ژ', shiftValue: 'ض', code: 'KeyJ', type: 'character' },
        { id: 'ckb-k', label: 'ک', value: 'ک', shiftValue: 'ك', code: 'KeyK', type: 'character' },
        { id: 'ckb-l', label: 'ل', value: 'ل', shiftValue: 'ڵ', code: 'KeyL', type: 'character' },
        { id: 'ckb-semicolon', label: ';', value: ';', shiftValue: ':', code: 'Semicolon', type: 'character' },
        { id: 'ckb-quote', label: "'", value: "'", shiftValue: '"', code: 'Quote', type: 'character' },
        { id: 'ckb-enter', label: 'Enter', value: 'Enter', code: 'Enter', type: 'action', width: 1.8 },
      ],
    },
    {
      keys: [
        { id: 'ckb-shift-left', label: '⇧', value: 'Shift', code: 'ShiftLeft', type: 'modifier', width: 2.3 },
        { id: 'ckb-z', label: 'ز', value: 'ز', shiftValue: 'ظ', code: 'KeyZ', type: 'character' },
        { id: 'ckb-x', label: 'خ', value: 'خ', shiftValue: 'غ', code: 'KeyX', type: 'character' },
        { id: 'ckb-c', label: 'ج', value: 'ج', shiftValue: 'چ', code: 'KeyC', type: 'character' },
        { id: 'ckb-v', label: 'ڤ', value: 'ڤ', shiftValue: 'ۋ', code: 'KeyV', type: 'character' },
        { id: 'ckb-b', label: 'ب', value: 'ب', shiftValue: 'پ', code: 'KeyB', type: 'character' },
        { id: 'ckb-n', label: 'ن', value: 'ن', shiftValue: 'ں', code: 'KeyN', type: 'character' },
        { id: 'ckb-m', label: 'م', value: 'م', shiftValue: 'ṃ', code: 'KeyM', type: 'character' },
        { id: 'ckb-comma', label: ',', value: ',', shiftValue: '<', code: 'Comma', type: 'character' },
        { id: 'ckb-period', label: '.', value: '.', shiftValue: '>', code: 'Period', type: 'character' },
        { id: 'ckb-slash', label: '/', value: '/', shiftValue: '?', code: 'Slash', type: 'character' },
        { id: 'ckb-shift-right', label: '⇧', value: 'Shift', code: 'ShiftRight', type: 'modifier', width: 2.3 },
      ],
    },
    {
      keys: [
        { id: 'ckb-space', label: 'Space', value: ' ', code: 'Space', type: 'space', width: 6 },
      ],
    },
  ],
  physicalKeyMap: {
    'Backquote': '`', 'Digit1': '1', 'Digit2': '2', 'Digit3': '3', 'Digit4': '4',
    'Digit5': '5', 'Digit6': '6', 'Digit7': '7', 'Digit8': '8', 'Digit9': '9',
    'Digit0': '0', 'Minus': '-', 'Equal': '=',
    'KeyQ': 'ق', 'KeyW': 'و', 'KeyE': 'ە', 'KeyR': 'ر', 'KeyT': 'ت',
    'KeyY': 'ی', 'KeyU': 'ع', 'KeyI': 'ی', 'KeyO': 'خ', 'KeyP': 'ح',
    'BracketLeft': 'ج', 'BracketRight': 'چ',
    'KeyA': 'ا', 'KeyS': 'س', 'KeyD': 'د', 'KeyF': 'ف', 'KeyG': 'گ',
    'KeyH': 'ه', 'KeyJ': 'ژ', 'KeyK': 'ک', 'KeyL': 'ل',
    'Semicolon': ';', 'Quote': "'",
    'KeyZ': 'ز', 'KeyX': 'خ', 'KeyC': 'ج', 'KeyV': 'ڤ', 'KeyB': 'ب',
    'KeyN': 'ن', 'KeyM': 'م', 'Comma': ',', 'Period': '.', 'Slash': '/',
    'Space': ' ',
  },
};
