/**
 * Arabic Keyboard Layout (101 Standard)
 * Right-to-left (RTL) language
 * Arabic-Indic numerals and standard Arabic script
 */

import type { KeyboardLayout } from '@/types/keyboard';

export const arabicLayout: KeyboardLayout = {
  id: 'ar',
  name: 'Arabic',
  nativeName: 'العربية',
  direction: 'rtl',
  fontFamily: 'Noto Sans Arabic, sans-serif',
  rows: [
    // Row 1: Numbers and symbols
    {
      keys: [
        { id: 'ar-1', label: '١', value: '١', shiftValue: '!', code: 'Digit1', type: 'character' },
        { id: 'ar-2', label: '٢', value: '٢', shiftValue: '@', code: 'Digit2', type: 'character' },
        { id: 'ar-3', label: '٣', value: '٣', shiftValue: '#', code: 'Digit3', type: 'character' },
        { id: 'ar-4', label: '٤', value: '٤', shiftValue: '$', code: 'Digit4', type: 'character' },
        { id: 'ar-5', label: '٥', value: '٥', shiftValue: '٪', code: 'Digit5', type: 'character' },
        { id: 'ar-6', label: '٦', value: '٦', shiftValue: '^', code: 'Digit6', type: 'character' },
        { id: 'ar-7', label: '٧', value: '٧', shiftValue: '&', code: 'Digit7', type: 'character' },
        { id: 'ar-8', label: '٨', value: '٨', shiftValue: '*', code: 'Digit8', type: 'character' },
        { id: 'ar-9', label: '٩', value: '٩', shiftValue: ')', code: 'Digit9', type: 'character' },
        { id: 'ar-0', label: '٠', value: '٠', shiftValue: '(', code: 'Digit0', type: 'character' },
        { id: 'ar-minus', label: '-', value: '-', shiftValue: '_', code: 'Minus', type: 'character' },
        { id: 'ar-equal', label: '=', value: '=', shiftValue: '+', code: 'Equal', type: 'character' },
        { id: 'ar-backspace', label: '⌫', value: 'Backspace', code: 'Backspace', type: 'action', width: 1.5 },
      ],
    },
    // Row 2: First letter row
    {
      keys: [
        { id: 'ar-dad', label: 'ض', value: 'ض', shiftValue: 'ضَّ', code: 'KeyQ', type: 'character' },
        { id: 'ar-sad', label: 'ص', value: 'ص', shiftValue: 'صً', code: 'KeyW', type: 'character' },
        { id: 'ar-theh', label: 'ث', value: 'ث', shiftValue: 'ثُ', code: 'KeyE', type: 'character' },
        { id: 'ar-qaf', label: 'ق', value: 'ق', shiftValue: 'قٌ', code: 'KeyR', type: 'character' },
        { id: 'ar-feh', label: 'ف', value: 'ف', shiftValue: 'فً', code: 'KeyT', type: 'character' },
        { id: 'ar-ghain', label: 'غ', value: 'غ', shiftValue: 'غِ', code: 'KeyY', type: 'character' },
        { id: 'ar-ain', label: 'ع', value: 'ع', shiftValue: 'عٍ', code: 'KeyU', type: 'character' },
        { id: 'ar-heh', label: 'ه', value: 'ه', shiftValue: 'هْ', code: 'KeyI', type: 'character' },
        { id: 'ar-khah', label: 'خ', value: 'خ', shiftValue: 'خّ', code: 'KeyO', type: 'character' },
        { id: 'ar-hah', label: 'ح', value: 'ح', shiftValue: 'حَ', code: 'KeyP', type: 'character' },
        { id: 'ar-jeem', label: 'ج', value: 'ج', shiftValue: 'جِ', code: 'BracketLeft', type: 'character' },
        { id: 'ar-dal', label: 'د', value: 'د', shiftValue: 'دُ', code: 'BracketRight', type: 'character' },
      ],
    },
    // Row 3: Second letter row
    {
      keys: [
        { id: 'ar-sheen', label: 'ش', value: 'ش', shiftValue: 'شَّ', code: 'KeyA', type: 'character' },
        { id: 'ar-seen', label: 'س', value: 'س', shiftValue: 'سً', code: 'KeyS', type: 'character' },
        { id: 'ar-yeh', label: 'ي', value: 'ي', shiftValue: 'يُ', code: 'KeyD', type: 'character' },
        { id: 'ar-beh', label: 'ب', value: 'ب', shiftValue: 'بٌ', code: 'KeyF', type: 'character' },
        { id: 'ar-lam', label: 'ل', value: 'ل', shiftValue: 'لً', code: 'KeyG', type: 'character' },
        { id: 'ar-alef', label: 'ا', value: 'ا', shiftValue: 'أ', code: 'KeyH', type: 'character' },
        { id: 'ar-teh', label: 'ت', value: 'ت', shiftValue: 'تِ', code: 'KeyJ', type: 'character' },
        { id: 'ar-noon', label: 'ن', value: 'ن', shiftValue: 'نٍ', code: 'KeyK', type: 'character' },
        { id: 'ar-meem', label: 'م', value: 'م', shiftValue: 'مْ', code: 'KeyL', type: 'character' },
        { id: 'ar-kaf', label: 'ك', value: 'ك', shiftValue: 'كّ', code: 'Semicolon', type: 'character' },
        { id: 'ar-tah', label: 'ط', value: 'ط', shiftValue: '÷', code: 'Quote', type: 'character' },
      ],
    },
    // Row 4: Third letter row
    {
      keys: [
        { id: 'ar-shift-left', label: '⇧', value: 'Shift', code: 'ShiftLeft', type: 'modifier', width: 1.5 },
        { id: 'ar-hamza', label: 'ئ', value: 'ئ', shiftValue: 'ء', code: 'KeyZ', type: 'character' },
        { id: 'ar-hamza-alef', label: 'ؤ', value: 'ؤ', shiftValue: 'آ', code: 'KeyX', type: 'character' },
        { id: 'ar-hamza-under', label: 'ئ', value: 'ئ', shiftValue: 'إ', code: 'KeyC', type: 'character' },
        { id: 'ar-reh', label: 'ر', value: 'ر', shiftValue: 'رً', code: 'KeyV', type: 'character' },
        { id: 'ar-lam-alef', label: 'لا', value: 'لا', shiftValue: 'ى', code: 'KeyB', type: 'character' },
        { id: 'ar-alef-maqsurah', label: 'ى', value: 'ى', shiftValue: 'ة', code: 'KeyN', type: 'character' },
        { id: 'ar-teh-marbuta', label: 'ة', value: 'ة', shiftValue: 'تً', code: 'KeyM', type: 'character' },
        { id: 'ar-waw', label: 'و', value: 'و', shiftValue: 'وَ', code: 'Comma', type: 'character' },
        { id: 'ar-zain', label: 'ز', value: 'ز', shiftValue: 'زِ', code: 'Period', type: 'character' },
        { id: 'ar-zah', label: 'ظ', value: 'ظ', shiftValue: 'ظُ', code: 'Slash', type: 'character' },
        { id: 'ar-shift-right', label: '⇧', value: 'Shift', code: 'ShiftRight', type: 'modifier', width: 1.5 },
      ],
    },
    // Row 5: Space bar
    {
      keys: [
        { id: 'ar-space', label: 'مسافة', value: ' ', code: 'Space', type: 'space', width: 10 },
      ],
    },
  ],
  physicalKeyMap: {
    'Digit1': '١',
    'Digit2': '٢',
    'Digit3': '٣',
    'Digit4': '٤',
    'Digit5': '٥',
    'Digit6': '٦',
    'Digit7': '٧',
    'Digit8': '٨',
    'Digit9': '٩',
    'Digit0': '٠',
    'Minus': '-',
    'Equal': '=',
    'KeyQ': 'ض',
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
    'BracketRight': 'د',
    'KeyA': 'ش',
    'KeyS': 'س',
    'KeyD': 'ي',
    'KeyF': 'ب',
    'KeyG': 'ل',
    'KeyH': 'ا',
    'KeyJ': 'ت',
    'KeyK': 'ن',
    'KeyL': 'م',
    'Semicolon': 'ك',
    'Quote': 'ط',
    'KeyZ': 'ئ',
    'KeyX': 'ؤ',
    'KeyC': 'ئ',
    'KeyV': 'ر',
    'KeyB': 'لا',
    'KeyN': 'ى',
    'KeyM': 'ة',
    'Comma': 'و',
    'Period': 'ز',
    'Slash': 'ظ',
    'Space': ' ',
  },
};
