/**
 * Bangladeshi Bengali Keyboard Layout - Inscript
 */

import type { KeyboardLayout } from '@/types/keyboard';

export const bengaliBangladeshLayout: KeyboardLayout = {
  id: 'bn-bd',
  name: 'Bengali (Bangladesh)',
  nativeName: 'বাংলা (বাংলাদেশ)',
  direction: 'ltr',
  fontFamily: "'Noto Sans Bengali', 'Kalpurush', system-ui",
  rows: [
    {
      keys: [
        { id: 'bn-bd-backtick', label: '`', value: '`', shiftValue: '~', code: 'Backquote', type: 'character' },
        { id: 'bn-bd-1', label: '১', value: '১', shiftValue: '!', code: 'Digit1', type: 'character' },
        { id: 'bn-bd-2', label: '২', value: '২', shiftValue: '@', code: 'Digit2', type: 'character' },
        { id: 'bn-bd-3', label: '৩', value: '৩', shiftValue: '#', code: 'Digit3', type: 'character' },
        { id: 'bn-bd-4', label: '৪', value: '৪', shiftValue: '$', code: 'Digit4', type: 'character' },
        { id: 'bn-bd-5', label: '৫', value: '৫', shiftValue: '%', code: 'Digit5', type: 'character' },
        { id: 'bn-bd-6', label: '৬', value: '৬', shiftValue: '^', code: 'Digit6', type: 'character' },
        { id: 'bn-bd-7', label: '৭', value: '৭', shiftValue: '&', code: 'Digit7', type: 'character' },
        { id: 'bn-bd-8', label: '৮', value: '৮', shiftValue: '*', code: 'Digit8', type: 'character' },
        { id: 'bn-bd-9', label: '৯', value: '৯', shiftValue: '(', code: 'Digit9', type: 'character' },
        { id: 'bn-bd-0', label: '০', value: '০', shiftValue: ')', code: 'Digit0', type: 'character' },
        { id: 'bn-bd-minus', label: '-', value: '-', shiftValue: '_', code: 'Minus', type: 'character' },
        { id: 'bn-bd-equal', label: 'ৃ', value: 'ৃ', shiftValue: 'ঋ', code: 'Equal', type: 'character' },
        { id: 'bn-bd-backspace', label: '⌫', value: 'Backspace', code: 'Backspace', type: 'action', width: 1.5 },
      ],
    },
    {
      keys: [
        { id: 'bn-bd-tab', label: 'Tab', value: 'Tab', code: 'Tab', type: 'action', width: 1.5 },
        { id: 'bn-bd-q', label: 'ৌ', value: 'ৌ', shiftValue: 'ঔ', code: 'KeyQ', type: 'character' },
        { id: 'bn-bd-w', label: 'ৈ', value: 'ৈ', shiftValue: 'ঐ', code: 'KeyW', type: 'character' },
        { id: 'bn-bd-e', label: 'া', value: 'া', shiftValue: 'আ', code: 'KeyE', type: 'character' },
        { id: 'bn-bd-r', label: 'ী', value: 'ী', shiftValue: 'ঈ', code: 'KeyR', type: 'character' },
        { id: 'bn-bd-t', label: 'ূ', value: 'ূ', shiftValue: 'ঊ', code: 'KeyT', type: 'character' },
        { id: 'bn-bd-y', label: 'ব', value: 'ব', shiftValue: 'ভ', code: 'KeyY', type: 'character' },
        { id: 'bn-bd-u', label: 'হ', value: 'হ', shiftValue: 'ঙ', code: 'KeyU', type: 'character' },
        { id: 'bn-bd-i', label: 'গ', value: 'গ', shiftValue: 'ঘ', code: 'KeyI', type: 'character' },
        { id: 'bn-bd-o', label: 'দ', value: 'দ', shiftValue: 'ধ', code: 'KeyO', type: 'character' },
        { id: 'bn-bd-p', label: 'জ', value: 'জ', shiftValue: 'ঝ', code: 'KeyP', type: 'character' },
        { id: 'bn-bd-bracketleft', label: 'ড', value: 'ড', shiftValue: 'ঢ', code: 'BracketLeft', type: 'character' },
        { id: 'bn-bd-bracketright', label: '়', value: '়', shiftValue: 'ঞ', code: 'BracketRight', type: 'character' },
      ],
    },
    {
      keys: [
        { id: 'bn-bd-caps', label: 'Caps', value: 'CapsLock', code: 'CapsLock', type: 'modifier', width: 1.8 },
        { id: 'bn-bd-a', label: 'ো', value: 'ো', shiftValue: 'ও', code: 'KeyA', type: 'character' },
        { id: 'bn-bd-s', label: 'ে', value: 'ে', shiftValue: 'এ', code: 'KeyS', type: 'character' },
        { id: 'bn-bd-d', label: '্', value: '্', shiftValue: 'অ', code: 'KeyD', type: 'character' },
        { id: 'bn-bd-f', label: 'ি', value: 'ি', shiftValue: 'ই', code: 'KeyF', type: 'character' },
        { id: 'bn-bd-g', label: 'ু', value: 'ু', shiftValue: 'উ', code: 'KeyG', type: 'character' },
        { id: 'bn-bd-h', label: 'প', value: 'প', shiftValue: 'ফ', code: 'KeyH', type: 'character' },
        { id: 'bn-bd-j', label: 'র', value: 'র', shiftValue: 'ড়', code: 'KeyJ', type: 'character' },
        { id: 'bn-bd-k', label: 'ক', value: 'ক', shiftValue: 'খ', code: 'KeyK', type: 'character' },
        { id: 'bn-bd-l', label: 'ত', value: 'ত', shiftValue: 'থ', code: 'KeyL', type: 'character' },
        { id: 'bn-bd-semicolon', label: 'চ', value: 'চ', shiftValue: 'ছ', code: 'Semicolon', type: 'character' },
        { id: 'bn-bd-quote', label: 'ট', value: 'ট', shiftValue: 'ঠ', code: 'Quote', type: 'character' },
        { id: 'bn-bd-enter', label: 'Enter', value: 'Enter', code: 'Enter', type: 'action', width: 1.8 },
      ],
    },
    {
      keys: [
        { id: 'bn-bd-shift-left', label: '⇧', value: 'Shift', code: 'ShiftLeft', type: 'modifier', width: 2.3 },
        { id: 'bn-bd-z', label: 'ং', value: 'ং', shiftValue: 'ঃ', code: 'KeyZ', type: 'character' },
        { id: 'bn-bd-x', label: 'ম', value: 'ম', shiftValue: 'ণ', code: 'KeyX', type: 'character' },
        { id: 'bn-bd-c', label: 'ন', value: 'ন', shiftValue: 'ঁ', code: 'KeyC', type: 'character' },
        { id: 'bn-bd-v', label: 'ব', value: 'ব', shiftValue: 'ঢ়', code: 'KeyV', type: 'character' },
        { id: 'bn-bd-b', label: 'ল', value: 'ল', shiftValue: 'ৎ', code: 'KeyB', type: 'character' },
        { id: 'bn-bd-n', label: 'স', value: 'স', shiftValue: 'শ', code: 'KeyN', type: 'character' },
        { id: 'bn-bd-m', label: ',', value: ',', shiftValue: 'ষ', code: 'KeyM', type: 'character' },
        { id: 'bn-bd-comma', label: '.', value: '.', shiftValue: '।', code: 'Comma', type: 'character' },
        { id: 'bn-bd-period', label: 'য', value: 'য', shiftValue: 'য়', code: 'Period', type: 'character' },
        { id: 'bn-bd-slash', label: '/', value: '/', shiftValue: '?', code: 'Slash', type: 'character' },
        { id: 'bn-bd-shift-right', label: '⇧', value: 'Shift', code: 'ShiftRight', type: 'modifier', width: 2.3 },
      ],
    },
    {
      keys: [
        { id: 'bn-bd-space', label: 'Space', value: ' ', code: 'Space', type: 'space', width: 6 },
      ],
    },
  ],
  physicalKeyMap: {
    'Backquote': '`', 'Digit1': '১', 'Digit2': '২', 'Digit3': '৩', 'Digit4': '৪',
    'Digit5': '৫', 'Digit6': '৬', 'Digit7': '৭', 'Digit8': '৮', 'Digit9': '৯',
    'Digit0': '০', 'Minus': '-', 'Equal': 'ৃ',
    'KeyQ': 'ৌ', 'KeyW': 'ৈ', 'KeyE': 'া', 'KeyR': 'ী', 'KeyT': 'ূ',
    'KeyY': 'ব', 'KeyU': 'হ', 'KeyI': 'গ', 'KeyO': 'দ', 'KeyP': 'জ',
    'BracketLeft': 'ড', 'BracketRight': '়',
    'KeyA': 'ো', 'KeyS': 'ে', 'KeyD': '্', 'KeyF': 'ি', 'KeyG': 'ু',
    'KeyH': 'প', 'KeyJ': 'র', 'KeyK': 'ক', 'KeyL': 'ত',
    'Semicolon': 'চ', 'Quote': 'ট',
    'KeyZ': 'ং', 'KeyX': 'ম', 'KeyC': 'ন', 'KeyV': 'ব', 'KeyB': 'ল',
    'KeyN': 'স', 'KeyM': ',', 'Comma': '.', 'Period': 'য', 'Slash': '/',
    'Space': ' ',
  },
};
