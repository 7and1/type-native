import type { KeyboardLayout } from '@/types/keyboard';

/**
 * Pashto Keyboard Layout
 * Extended Arabic script (Perso-Arabic abjad) for Pashto language
 * Includes Pashto-specific letters: ټ ډ ړ ږ ښ ګ ڼ ی ې ۍ
 * RTL (right-to-left) writing direction
 * Used by 40-60 million speakers in Afghanistan and Pakistan
 */
export const pashtoLayout: KeyboardLayout = {
  id: 'ps',
  name: 'Pashto',
  nativeName: 'پښتو',
  direction: 'rtl',
  fontFamily: 'Noto Sans Arabic, sans-serif',
  rows: [
    // Row 1: Number row
    {
      keys: [
        { id: 'ps-div', label: '÷', value: '÷', shiftValue: '~', code: 'Backquote', type: 'character' },
        { id: 'ps-1', label: '۱', value: '۱', shiftValue: '!', code: 'Digit1', type: 'character' },
        { id: 'ps-2', label: '۲', value: '۲', shiftValue: '٬', code: 'Digit2', type: 'character' },
        { id: 'ps-3', label: '۳', value: '۳', shiftValue: '٫', code: 'Digit3', type: 'character' },
        { id: 'ps-4', label: '۴', value: '۴', shiftValue: '؋', code: 'Digit4', type: 'character' },
        { id: 'ps-5', label: '۵', value: '۵', shiftValue: '٪', code: 'Digit5', type: 'character' },
        { id: 'ps-6', label: '۶', value: '۶', shiftValue: '×', code: 'Digit6', type: 'character' },
        { id: 'ps-7', label: '۷', value: '۷', shiftValue: '،', code: 'Digit7', type: 'character' },
        { id: 'ps-8', label: '۸', value: '۸', shiftValue: '*', code: 'Digit8', type: 'character' },
        { id: 'ps-9', label: '۹', value: '۹', shiftValue: ')', code: 'Digit9', type: 'character' },
        { id: 'ps-0', label: '۰', value: '۰', shiftValue: '(', code: 'Digit0', type: 'character' },
        { id: 'ps-minus', label: '-', value: '-', shiftValue: '_', code: 'Minus', type: 'character' },
        { id: 'ps-equal', label: '=', value: '=', shiftValue: '+', code: 'Equal', type: 'character' },
        { id: 'ps-backspace', label: '⌫', value: 'Backspace', code: 'Backspace', type: 'action', width: 1.5 },
      ],
    },
    // Row 2: Top letter row - Pashto letters
    {
      keys: [
        { id: 'ps-zwarakay', label: 'ې', value: 'ې', shiftValue: 'ً', code: 'KeyQ', type: 'character' },
        { id: 'ps-sad', label: 'ص', value: 'ص', shiftValue: 'ُ', code: 'KeyW', type: 'character' },
        { id: 'ps-se', label: 'ث', value: 'ث', shiftValue: 'ٍ', code: 'KeyE', type: 'character' },
        { id: 'ps-qaf', label: 'ق', value: 'ق', shiftValue: 'ِ', code: 'KeyR', type: 'character' },
        { id: 'ps-fe', label: 'ف', value: 'ف', shiftValue: 'َ', code: 'KeyT', type: 'character' },
        { id: 'ps-ghe', label: 'غ', value: 'غ', shiftValue: 'ّ', code: 'KeyY', type: 'character' },
        { id: 'ps-ain', label: 'ع', value: 'ع', shiftValue: 'ۀ', code: 'KeyU', type: 'character' },
        { id: 'ps-he', label: 'ه', value: 'ه', shiftValue: 'ئ', code: 'KeyI', type: 'character' },
        { id: 'ps-khe', label: 'خ', value: 'خ', shiftValue: ']', code: 'KeyO', type: 'character' },
        { id: 'ps-hhe', label: 'ح', value: 'ح', shiftValue: '[', code: 'KeyP', type: 'character' },
        { id: 'ps-jeem', label: 'ج', value: 'ج', shiftValue: '}', code: 'BracketLeft', type: 'character' },
        { id: 'ps-che', label: 'چ', value: 'چ', shiftValue: '{', code: 'BracketRight', type: 'character' },
        { id: 'ps-backslash', label: '\\', value: '\\', shiftValue: '|', code: 'Backslash', type: 'character' },
      ],
    },
    // Row 3: Home row - More Pashto letters
    {
      keys: [
        { id: 'ps-shin', label: 'ش', value: 'ش', shiftValue: 'ښ', code: 'KeyA', type: 'character' },
        { id: 'ps-seen', label: 'س', value: 'س', shiftValue: 'ۍ', code: 'KeyS', type: 'character' },
        { id: 'ps-ye', label: 'ی', value: 'ی', shiftValue: 'ي', code: 'KeyD', type: 'character' },
        { id: 'ps-be', label: 'ب', value: 'ب', shiftValue: 'إ', code: 'KeyF', type: 'character' },
        { id: 'ps-lam', label: 'ل', value: 'ل', shiftValue: 'أ', code: 'KeyG', type: 'character' },
        { id: 'ps-alef', label: 'ا', value: 'ا', shiftValue: 'آ', code: 'KeyH', type: 'character' },
        { id: 'ps-tteh', label: 'ت', value: 'ت', shiftValue: 'ټ', code: 'KeyJ', type: 'character' },
        { id: 'ps-noon', label: 'ن', value: 'ن', shiftValue: 'ڼ', code: 'KeyK', type: 'character' },
        { id: 'ps-meem', label: 'م', value: 'م', shiftValue: '؛', code: 'KeyL', type: 'character' },
        { id: 'ps-kaf', label: 'ک', value: 'ک', shiftValue: ':', code: 'Semicolon', type: 'character' },
        { id: 'ps-gaf', label: 'گ', value: 'گ', shiftValue: '"', code: 'Quote', type: 'character' },
      ],
    },
    // Row 4: Bottom letter row - Additional Pashto-specific letters
    {
      keys: [
        { id: 'ps-shift-left', label: '⇧', value: 'Shift', code: 'ShiftLeft', type: 'modifier', width: 1.5 },
        { id: 'ps-zhe', label: 'ظ', value: 'ظ', shiftValue: 'ْ', code: 'KeyZ', type: 'character' },
        { id: 'ps-ttoeh', label: 'ط', value: 'ط', shiftValue: 'ۓ', code: 'KeyX', type: 'character' },
        { id: 'ps-zain', label: 'ز', value: 'ز', shiftValue: 'ژ', code: 'KeyC', type: 'character' },
        { id: 'ps-re', label: 'ر', value: 'ر', shiftValue: 'ړ', code: 'KeyV', type: 'character' },
        { id: 'ps-zal', label: 'ذ', value: 'ذ', shiftValue: '', code: 'KeyB', type: 'character' },
        { id: 'ps-dal', label: 'د', value: 'د', shiftValue: 'ډ', code: 'KeyN', type: 'character' },
        { id: 'ps-pe', label: 'پ', value: 'پ', shiftValue: '', code: 'KeyM', type: 'character' },
        { id: 'ps-waw', label: 'و', value: 'و', shiftValue: '>', code: 'Comma', type: 'character' },
        { id: 'ps-dot', label: '.', value: '.', shiftValue: '<', code: 'Period', type: 'character' },
        { id: 'ps-slash', label: '/', value: '/', shiftValue: '؟', code: 'Slash', type: 'character' },
        { id: 'ps-shift-right', label: '⇧', value: 'Shift', code: 'ShiftRight', type: 'modifier', width: 1.5 },
      ],
    },
    // Row 5: Space bar
    {
      keys: [
        { id: 'ps-space', label: 'Space', value: ' ', code: 'Space', type: 'space', width: 10 },
      ],
    },
  ],
  physicalKeyMap: {
    // Number row
    'Backquote': '÷',
    'Digit1': '۱',
    'Digit2': '۲',
    'Digit3': '۳',
    'Digit4': '۴',
    'Digit5': '۵',
    'Digit6': '۶',
    'Digit7': '۷',
    'Digit8': '۸',
    'Digit9': '۹',
    'Digit0': '۰',
    'Minus': '-',
    'Equal': '=',
    // Top letter row
    'KeyQ': 'ې',
    'KeyW': 'ص',
    'KeyE': 'ث',
    'KeyR': 'ق',
    'KeyT': 'ف',
    'KeyY': 'غ',
    'KeyU': 'ع',
    'KeyI': 'ه',
    'KeyO': 'خ',
    'KeyP': 'ح',
    'BracketLeft': 'ج',
    'BracketRight': 'چ',
    'Backslash': '\\',
    // Home row
    'KeyA': 'ش',
    'KeyS': 'س',
    'KeyD': 'ی',
    'KeyF': 'ب',
    'KeyG': 'ل',
    'KeyH': 'ا',
    'KeyJ': 'ت',
    'KeyK': 'ن',
    'KeyL': 'م',
    'Semicolon': 'ک',
    'Quote': 'گ',
    // Bottom row
    'KeyZ': 'ظ',
    'KeyX': 'ط',
    'KeyC': 'ز',
    'KeyV': 'ر',
    'KeyB': 'ذ',
    'KeyN': 'د',
    'KeyM': 'پ',
    'Comma': 'و',
    'Period': '.',
    'Slash': '/',
    'Space': ' ',
  },
};
