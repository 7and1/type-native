import type { KeyboardLayout } from '@/types/keyboard';

/**
 * Bengali (Bangla) Keyboard Layout - Inscript
 * Bengali script (বাংলা লিপি) is an abugida writing system
 * Includes vowels, consonants, vowel diacritics, and conjuncts
 * Used for Bengali/Bangla language (250+ million speakers)
 */
export const bengaliLayout: KeyboardLayout = {
  id: 'bn',
  name: 'Bengali',
  nativeName: 'বাংলা',
  direction: 'ltr',
  fontFamily: 'Noto Sans Bengali, sans-serif',
  rows: [
    // Row 1: Number row (Bengali numerals)
    {
      keys: [
        { id: 'bn-chandrabindu', label: 'ঁ', value: 'ঁ', shiftValue: 'ঽ', code: 'Backquote', type: 'character' },
        { id: 'bn-1', label: '১', value: '১', shiftValue: '!', code: 'Digit1', type: 'character' },
        { id: 'bn-2', label: '২', value: '২', shiftValue: '@', code: 'Digit2', type: 'character' },
        { id: 'bn-3', label: '৩', value: '৩', shiftValue: '#', code: 'Digit3', type: 'character' },
        { id: 'bn-4', label: '৪', value: '৪', shiftValue: '$', code: 'Digit4', type: 'character' },
        { id: 'bn-5', label: '৫', value: '৫', shiftValue: '%', code: 'Digit5', type: 'character' },
        { id: 'bn-6', label: '৬', value: '৬', shiftValue: '^', code: 'Digit6', type: 'character' },
        { id: 'bn-7', label: '৭', value: '৭', shiftValue: '&', code: 'Digit7', type: 'character' },
        { id: 'bn-8', label: '৮', value: '৮', shiftValue: '*', code: 'Digit8', type: 'character' },
        { id: 'bn-9', label: '৯', value: '৯', shiftValue: '(', code: 'Digit9', type: 'character' },
        { id: 'bn-0', label: '০', value: '০', shiftValue: ')', code: 'Digit0', type: 'character' },
        { id: 'bn-minus', label: '-', value: '-', shiftValue: 'ঃ', code: 'Minus', type: 'character' },
        { id: 'bn-reph', label: 'ৃ', value: 'ৃ', shiftValue: 'ঋ', code: 'Equal', type: 'character' },
        { id: 'bn-backspace', label: '⌫', value: 'Backspace', code: 'Backspace', type: 'action', width: 1.5 },
      ],
    },
    // Row 2: Top letter row - Consonants
    {
      keys: [
        { id: 'bn-au', label: 'ৌ', value: 'ৌ', shiftValue: 'ঔ', code: 'KeyQ', type: 'character' },
        { id: 'bn-ai', label: 'ৈ', value: 'ৈ', shiftValue: 'ঐ', code: 'KeyW', type: 'character' },
        { id: 'bn-aa', label: 'া', value: 'া', shiftValue: 'আ', code: 'KeyE', type: 'character' },
        { id: 'bn-ii', label: 'ী', value: 'ী', shiftValue: 'ঈ', code: 'KeyR', type: 'character' },
        { id: 'bn-uu', label: 'ূ', value: 'ূ', shiftValue: 'ঊ', code: 'KeyT', type: 'character' },
        { id: 'bn-bha', label: 'ভ', value: 'ভ', shiftValue: 'ঙ', code: 'KeyY', type: 'character' },
        { id: 'bn-ha', label: 'হ', value: 'হ', shiftValue: 'ঘ', code: 'KeyU', type: 'character' },
        { id: 'bn-ga', label: 'গ', value: 'গ', shiftValue: 'ধ', code: 'KeyI', type: 'character' },
        { id: 'bn-da', label: 'দ', value: 'দ', shiftValue: 'ঝ', code: 'KeyO', type: 'character' },
        { id: 'bn-ja', label: 'জ', value: 'জ', shiftValue: 'ঢ', code: 'KeyP', type: 'character' },
        { id: 'bn-dda', label: 'ড', value: 'ড', shiftValue: 'ঞ', code: 'BracketLeft', type: 'character' },
        { id: 'bn-e', label: 'ে', value: 'ে', shiftValue: '', code: 'BracketRight', type: 'character' },
        { id: 'bn-nya', label: 'ঞ', value: 'ঞ', shiftValue: 'ঙ', code: 'Backslash', type: 'character' },
      ],
    },
    // Row 3: Home row - More consonants
    {
      keys: [
        { id: 'bn-o', label: 'ো', value: 'ো', shiftValue: 'ও', code: 'KeyA', type: 'character' },
        { id: 'bn-ea', label: 'ে', value: 'ে', shiftValue: 'এ', code: 'KeyS', type: 'character' },
        { id: 'bn-hasanta', label: '্', value: '্', shiftValue: 'অ', code: 'KeyD', type: 'character' },
        { id: 'bn-i', label: 'ি', value: 'ি', shiftValue: 'ই', code: 'KeyF', type: 'character' },
        { id: 'bn-u', label: 'ু', value: 'ু', shiftValue: 'উ', code: 'KeyG', type: 'character' },
        { id: 'bn-pa', label: 'প', value: 'প', shiftValue: 'ফ', code: 'KeyH', type: 'character' },
        { id: 'bn-ra', label: 'র', value: 'র', shiftValue: 'ড়', code: 'KeyJ', type: 'character' },
        { id: 'bn-ka', label: 'ক', value: 'ক', shiftValue: 'খ', code: 'KeyK', type: 'character' },
        { id: 'bn-ta', label: 'ত', value: 'ত', shiftValue: 'থ', code: 'KeyL', type: 'character' },
        { id: 'bn-cha', label: 'চ', value: 'চ', shiftValue: 'ছ', code: 'Semicolon', type: 'character' },
        { id: 'bn-tta', label: 'ট', value: 'ট', shiftValue: 'ঠ', code: 'Quote', type: 'character' },
      ],
    },
    // Row 4: Bottom letter row - Additional consonants
    {
      keys: [
        { id: 'bn-shift-left', label: '⇧', value: 'Shift', code: 'ShiftLeft', type: 'modifier', width: 1.5 },
        { id: 'bn-anusvara', label: 'ং', value: 'ং', shiftValue: '', code: 'KeyZ', type: 'character' },
        { id: 'bn-ma', label: 'ম', value: 'ম', shiftValue: 'ণ', code: 'KeyX', type: 'character' },
        { id: 'bn-na', label: 'ন', value: 'ন', shiftValue: '', code: 'KeyC', type: 'character' },
        { id: 'bn-va', label: 'ব', value: 'ব', shiftValue: '', code: 'KeyV', type: 'character' },
        { id: 'bn-la', label: 'ল', value: 'ল', shiftValue: '', code: 'KeyB', type: 'character' },
        { id: 'bn-sa', label: 'স', value: 'স', shiftValue: 'শ', code: 'KeyN', type: 'character' },
        { id: 'bn-comma', label: ',', value: ',', shiftValue: 'ষ', code: 'KeyM', type: 'character' },
        { id: 'bn-period', label: '.', value: '.', shiftValue: '।', code: 'Comma', type: 'character' },
        { id: 'bn-ya', label: 'য', value: 'য', shiftValue: 'য়', code: 'Period', type: 'character' },
        { id: 'bn-visarga', label: 'ঃ', value: 'ঃ', shiftValue: '?', code: 'Slash', type: 'character' },
        { id: 'bn-shift-right', label: '⇧', value: 'Shift', code: 'ShiftRight', type: 'modifier', width: 1.5 },
      ],
    },
    // Row 5: Space bar
    {
      keys: [
        { id: 'bn-space', label: 'Space', value: ' ', code: 'Space', type: 'space', width: 10 },
      ],
    },
  ],
  physicalKeyMap: {
    // Number row
    'Backquote': 'ঁ',
    'Digit1': '১',
    'Digit2': '২',
    'Digit3': '৩',
    'Digit4': '৪',
    'Digit5': '৫',
    'Digit6': '৬',
    'Digit7': '৭',
    'Digit8': '৮',
    'Digit9': '৯',
    'Digit0': '০',
    'Minus': '-',
    'Equal': 'ৃ',
    // Top letter row
    'KeyQ': 'ৌ',
    'KeyW': 'ৈ',
    'KeyE': 'া',
    'KeyR': 'ী',
    'KeyT': 'ূ',
    'KeyY': 'ভ',
    'KeyU': 'হ',
    'KeyI': 'গ',
    'KeyO': 'দ',
    'KeyP': 'জ',
    'BracketLeft': 'ড',
    'BracketRight': 'ে',
    'Backslash': 'ঞ',
    // Home row
    'KeyA': 'ো',
    'KeyS': 'ে',
    'KeyD': '্',
    'KeyF': 'ি',
    'KeyG': 'ু',
    'KeyH': 'প',
    'KeyJ': 'র',
    'KeyK': 'ক',
    'KeyL': 'ত',
    'Semicolon': 'চ',
    'Quote': 'ট',
    // Bottom row
    'KeyZ': 'ং',
    'KeyX': 'ম',
    'KeyC': 'ন',
    'KeyV': 'ব',
    'KeyB': 'ল',
    'KeyN': 'স',
    'KeyM': ',',
    'Comma': '.',
    'Period': 'য',
    'Slash': 'ঃ',
    'Space': ' ',
  },
};
