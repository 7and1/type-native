/**
 * Hebrew Keyboard Layout (Standard Israeli)
 * Right-to-left (RTL) language
 * Hebrew script with final forms
 */

import type { KeyboardLayout } from '@/types/keyboard';

export const hebrewLayout: KeyboardLayout = {
  id: 'he',
  name: 'Hebrew',
  nativeName: 'עברית',
  direction: 'rtl',
  fontFamily: 'Noto Sans Hebrew, sans-serif',
  rows: [
    // Row 1: Numbers and symbols
    {
      keys: [
        { id: 'he-1', label: '1', value: '1', shiftValue: '!', code: 'Digit1', type: 'character' },
        { id: 'he-2', label: '2', value: '2', shiftValue: '@', code: 'Digit2', type: 'character' },
        { id: 'he-3', label: '3', value: '3', shiftValue: '#', code: 'Digit3', type: 'character' },
        { id: 'he-4', label: '4', value: '4', shiftValue: '$', code: 'Digit4', type: 'character' },
        { id: 'he-5', label: '5', value: '5', shiftValue: '%', code: 'Digit5', type: 'character' },
        { id: 'he-6', label: '6', value: '6', shiftValue: '^', code: 'Digit6', type: 'character' },
        { id: 'he-7', label: '7', value: '7', shiftValue: '&', code: 'Digit7', type: 'character' },
        { id: 'he-8', label: '8', value: '8', shiftValue: '*', code: 'Digit8', type: 'character' },
        { id: 'he-9', label: '9', value: '9', shiftValue: ')', code: 'Digit9', type: 'character' },
        { id: 'he-0', label: '0', value: '0', shiftValue: '(', code: 'Digit0', type: 'character' },
        { id: 'he-minus', label: '-', value: '-', shiftValue: '_', code: 'Minus', type: 'character' },
        { id: 'he-equal', label: '=', value: '=', shiftValue: '+', code: 'Equal', type: 'character' },
        { id: 'he-backspace', label: '⌫', value: 'Backspace', code: 'Backspace', type: 'action', width: 1.5 },
      ],
    },
    // Row 2: First letter row
    {
      keys: [
        { id: 'he-qoph', label: 'ק', value: 'ק', shiftValue: '/', code: 'KeyQ', type: 'character' },
        { id: 'he-resh', label: 'ר', value: 'ר', shiftValue: "'", code: 'KeyW', type: 'character' },
        { id: 'he-alef', label: 'א', value: 'א', shiftValue: 'ֱ', code: 'KeyE', type: 'character' },
        { id: 'he-tet', label: 'ט', value: 'ט', shiftValue: 'װ', code: 'KeyR', type: 'character' },
        { id: 'he-vav', label: 'ו', value: 'ו', shiftValue: 'ֹ', code: 'KeyT', type: 'character' },
        { id: 'he-final-nun', label: 'ן', value: 'ן', shiftValue: '◌ׂ', code: 'KeyY', type: 'character' },
        { id: 'he-final-mem', label: 'ם', value: 'ם', shiftValue: '◌ׁ', code: 'KeyU', type: 'character' },
        { id: 'he-pe', label: 'פ', value: 'פ', shiftValue: 'ף', code: 'KeyI', type: 'character' },
        { id: 'he-shin', label: 'ש', value: 'ש', shiftValue: 'ש', code: 'KeyO', type: 'character' },
        { id: 'he-lamed', label: 'ל', value: 'ל', shiftValue: '◌ׅ', code: 'KeyP', type: 'character' },
        { id: 'he-bracket-left', label: '[', value: '[', shiftValue: '{', code: 'BracketLeft', type: 'character' },
        { id: 'he-bracket-right', label: ']', value: ']', shiftValue: '}', code: 'BracketRight', type: 'character' },
      ],
    },
    // Row 3: Second letter row
    {
      keys: [
        { id: 'he-ayin', label: 'ע', value: 'ע', shiftValue: 'ֳ', code: 'KeyA', type: 'character' },
        { id: 'he-yod', label: 'י', value: 'י', shiftValue: 'ִ', code: 'KeyS', type: 'character' },
        { id: 'he-het', label: 'ח', value: 'ח', shiftValue: 'ֵ', code: 'KeyD', type: 'character' },
        { id: 'he-lamed-2', label: 'ל', value: 'ל', shiftValue: 'ֶ', code: 'KeyF', type: 'character' },
        { id: 'he-final-kaph', label: 'ך', value: 'ך', shiftValue: 'ַ', code: 'KeyG', type: 'character' },
        { id: 'he-kaph', label: 'כ', value: 'כ', shiftValue: 'ָ', code: 'KeyH', type: 'character' },
        { id: 'he-gimel', label: 'ג', value: 'ג', shiftValue: 'ְ', code: 'KeyJ', type: 'character' },
        { id: 'he-dalet', label: 'ד', value: 'ד', code: 'KeyK', type: 'character' },
        { id: 'he-samekh', label: 'ס', value: 'ס', code: 'KeyL', type: 'character' },
        { id: 'he-semicolon', label: ';', value: ';', shiftValue: ':', code: 'Semicolon', type: 'character' },
        { id: 'he-quote', label: "'", value: "'", shiftValue: '"', code: 'Quote', type: 'character' },
      ],
    },
    // Row 4: Third letter row
    {
      keys: [
        { id: 'he-shift-left', label: '⇧', value: 'Shift', code: 'ShiftLeft', type: 'modifier', width: 1.5 },
        { id: 'he-zayin', label: 'ז', value: 'ז', code: 'KeyZ', type: 'character' },
        { id: 'he-samekh-2', label: 'ס', value: 'ס', code: 'KeyX', type: 'character' },
        { id: 'he-bet', label: 'ב', value: 'ב', code: 'KeyC', type: 'character' },
        { id: 'he-he', label: 'ה', value: 'ה', code: 'KeyV', type: 'character' },
        { id: 'he-nun', label: 'נ', value: 'נ', code: 'KeyB', type: 'character' },
        { id: 'he-mem', label: 'מ', value: 'מ', code: 'KeyN', type: 'character' },
        { id: 'he-tsadi', label: 'צ', value: 'צ', shiftValue: 'ץ', code: 'KeyM', type: 'character' },
        { id: 'he-tav', label: 'ת', value: 'ת', code: 'Comma', type: 'character' },
        { id: 'he-final-tsadi', label: 'ץ', value: 'ץ', code: 'Period', type: 'character' },
        { id: 'he-slash', label: '.', value: '.', shiftValue: '?', code: 'Slash', type: 'character' },
        { id: 'he-shift-right', label: '⇧', value: 'Shift', code: 'ShiftRight', type: 'modifier', width: 1.5 },
      ],
    },
    // Row 5: Space bar
    {
      keys: [
        { id: 'he-space', label: 'רווח', value: ' ', code: 'Space', type: 'space', width: 10 },
      ],
    },
  ],
  physicalKeyMap: {
    'Digit1': '1',
    'Digit2': '2',
    'Digit3': '3',
    'Digit4': '4',
    'Digit5': '5',
    'Digit6': '6',
    'Digit7': '7',
    'Digit8': '8',
    'Digit9': '9',
    'Digit0': '0',
    'Minus': '-',
    'Equal': '=',
    'KeyQ': 'ק',
    'KeyW': 'ר',
    'KeyE': 'א',
    'KeyR': 'ט',
    'KeyT': 'ו',
    'KeyY': 'ן',
    'KeyU': 'ם',
    'KeyI': 'פ',
    'KeyO': 'ש',
    'KeyP': 'ל',
    'BracketLeft': '[',
    'BracketRight': ']',
    'KeyA': 'ע',
    'KeyS': 'י',
    'KeyD': 'ח',
    'KeyF': 'ל',
    'KeyG': 'ך',
    'KeyH': 'כ',
    'KeyJ': 'ג',
    'KeyK': 'ד',
    'KeyL': 'ס',
    'Semicolon': ';',
    'Quote': "'",
    'KeyZ': 'ז',
    'KeyX': 'ס',
    'KeyC': 'ב',
    'KeyV': 'ה',
    'KeyB': 'נ',
    'KeyN': 'מ',
    'KeyM': 'צ',
    'Comma': 'ת',
    'Period': 'ץ',
    'Slash': '.',
    'Space': ' ',
  },
};
