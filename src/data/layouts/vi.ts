import type { KeyboardLayout } from '@/types/keyboard';

/**
 * Vietnamese QWERTY Keyboard Layout
 * Based on standard Vietnamese keyboard with tone marks and diacritics
 * Supports all 6 tones: ngang, huyền, sắc, hỏi, ngã, nặng
 * and vowel modifications: ă, â, ê, ô, ơ, ư, đ
 */
export const vietnameseLayout: KeyboardLayout = {
  id: 'vi',
  name: 'Vietnamese',
  nativeName: 'Tiếng Việt',
  direction: 'ltr',
  fontFamily: 'Noto Sans, sans-serif',
  rows: [
    // Row 1: Number row with tone marks
    {
      keys: [
        { id: 'vi-grave', label: '`', value: '`', shiftValue: '~', code: 'Backquote', type: 'character' },
        { id: 'vi-1', label: '1', value: '1', shiftValue: '!', code: 'Digit1', type: 'character' },
        { id: 'vi-2', label: '2', value: '2', shiftValue: '@', code: 'Digit2', type: 'character' },
        { id: 'vi-3', label: '3', value: '3', shiftValue: '#', code: 'Digit3', type: 'character' },
        { id: 'vi-4', label: '4', value: '4', shiftValue: '$', code: 'Digit4', type: 'character' },
        { id: 'vi-5', label: '5', value: '5', shiftValue: '%', code: 'Digit5', type: 'character' },
        { id: 'vi-6', label: '6', value: '6', shiftValue: '^', code: 'Digit6', type: 'character' },
        { id: 'vi-7', label: '7', value: '7', shiftValue: '&', code: 'Digit7', type: 'character' },
        { id: 'vi-8', label: '8', value: '8', shiftValue: '*', code: 'Digit8', type: 'character' },
        { id: 'vi-9', label: '9', value: '9', shiftValue: '(', code: 'Digit9', type: 'character' },
        { id: 'vi-0', label: '0', value: '0', shiftValue: ')', code: 'Digit0', type: 'character' },
        { id: 'vi-minus', label: '-', value: '-', shiftValue: '_', code: 'Minus', type: 'character' },
        { id: 'vi-equal', label: '=', value: '=', shiftValue: '+', code: 'Equal', type: 'character' },
        { id: 'vi-backspace', label: '⌫', value: 'Backspace', code: 'Backspace', type: 'action', width: 1.5 },
      ],
    },
    // Row 2: Top letter row
    {
      keys: [
        { id: 'vi-q', label: 'q', value: 'q', shiftValue: 'Q', code: 'KeyQ', type: 'character' },
        { id: 'vi-w', label: 'w', value: 'w', shiftValue: 'W', code: 'KeyW', type: 'character' },
        { id: 'vi-e', label: 'e', value: 'e', shiftValue: 'E', code: 'KeyE', type: 'character' },
        { id: 'vi-r', label: 'r', value: 'r', shiftValue: 'R', code: 'KeyR', type: 'character' },
        { id: 'vi-t', label: 't', value: 't', shiftValue: 'T', code: 'KeyT', type: 'character' },
        { id: 'vi-y', label: 'y', value: 'y', shiftValue: 'Y', code: 'KeyY', type: 'character' },
        { id: 'vi-u', label: 'u', value: 'u', shiftValue: 'U', code: 'KeyU', type: 'character' },
        { id: 'vi-i', label: 'i', value: 'i', shiftValue: 'I', code: 'KeyI', type: 'character' },
        { id: 'vi-o', label: 'o', value: 'o', shiftValue: 'O', code: 'KeyO', type: 'character' },
        { id: 'vi-p', label: 'p', value: 'p', shiftValue: 'P', code: 'KeyP', type: 'character' },
        { id: 'vi-uhorn', label: 'ư', value: 'ư', shiftValue: 'Ư', code: 'BracketLeft', type: 'character' },
        { id: 'vi-ohorn', label: 'ơ', value: 'ơ', shiftValue: 'Ơ', code: 'BracketRight', type: 'character' },
        { id: 'vi-backslash', label: '\\', value: '\\', shiftValue: '|', code: 'Backslash', type: 'character' },
      ],
    },
    // Row 3: Home row
    {
      keys: [
        { id: 'vi-a', label: 'a', value: 'a', shiftValue: 'A', code: 'KeyA', type: 'character' },
        { id: 'vi-s', label: 's', value: 's', shiftValue: 'S', code: 'KeyS', type: 'character' },
        { id: 'vi-d', label: 'd', value: 'd', shiftValue: 'D', code: 'KeyD', type: 'character' },
        { id: 'vi-f', label: 'f', value: 'f', shiftValue: 'F', code: 'KeyF', type: 'character' },
        { id: 'vi-g', label: 'g', value: 'g', shiftValue: 'G', code: 'KeyG', type: 'character' },
        { id: 'vi-h', label: 'h', value: 'h', shiftValue: 'H', code: 'KeyH', type: 'character' },
        { id: 'vi-j', label: 'j', value: 'j', shiftValue: 'J', code: 'KeyJ', type: 'character' },
        { id: 'vi-k', label: 'k', value: 'k', shiftValue: 'K', code: 'KeyK', type: 'character' },
        { id: 'vi-l', label: 'l', value: 'l', shiftValue: 'L', code: 'KeyL', type: 'character' },
        { id: 'vi-semicolon', label: ';', value: ';', shiftValue: ':', code: 'Semicolon', type: 'character' },
        { id: 'vi-quote', label: "'", value: "'", shiftValue: '"', code: 'Quote', type: 'character' },
      ],
    },
    // Row 4: Bottom letter row with Vietnamese-specific characters
    {
      keys: [
        { id: 'vi-shift-left', label: '⇧', value: 'Shift', code: 'ShiftLeft', type: 'modifier', width: 1.5 },
        { id: 'vi-z', label: 'z', value: 'z', shiftValue: 'Z', code: 'KeyZ', type: 'character' },
        { id: 'vi-x', label: 'x', value: 'x', shiftValue: 'X', code: 'KeyX', type: 'character' },
        { id: 'vi-c', label: 'c', value: 'c', shiftValue: 'C', code: 'KeyC', type: 'character' },
        { id: 'vi-v', label: 'v', value: 'v', shiftValue: 'V', code: 'KeyV', type: 'character' },
        { id: 'vi-b', label: 'b', value: 'b', shiftValue: 'B', code: 'KeyB', type: 'character' },
        { id: 'vi-n', label: 'n', value: 'n', shiftValue: 'N', code: 'KeyN', type: 'character' },
        { id: 'vi-m', label: 'm', value: 'm', shiftValue: 'M', code: 'KeyM', type: 'character' },
        { id: 'vi-comma', label: ',', value: ',', shiftValue: '<', code: 'Comma', type: 'character' },
        { id: 'vi-period', label: '.', value: '.', shiftValue: '>', code: 'Period', type: 'character' },
        { id: 'vi-slash', label: '/', value: '/', shiftValue: '?', code: 'Slash', type: 'character' },
        { id: 'vi-shift-right', label: '⇧', value: 'Shift', code: 'ShiftRight', type: 'modifier', width: 1.5 },
      ],
    },
    // Row 5: Space bar row with special Vietnamese characters
    {
      keys: [
        { id: 'vi-abreve', label: 'ă', value: 'ă', shiftValue: 'Ă', type: 'character', width: 1.5 },
        { id: 'vi-acircum', label: 'â', value: 'â', shiftValue: 'Â', type: 'character', width: 1.5 },
        { id: 'vi-ecircum', label: 'ê', value: 'ê', shiftValue: 'Ê', type: 'character', width: 1.5 },
        { id: 'vi-ocircum', label: 'ô', value: 'ô', shiftValue: 'Ô', type: 'character', width: 1.5 },
        { id: 'vi-dstroke', label: 'đ', value: 'đ', shiftValue: 'Đ', type: 'character', width: 1.5 },
        { id: 'vi-space', label: 'Space', value: ' ', code: 'Space', type: 'space', width: 3.5 },
      ],
    },
  ],
  physicalKeyMap: {
    // Number row
    'Backquote': '`',
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
    // Top letter row
    'KeyQ': 'q',
    'KeyW': 'w',
    'KeyE': 'e',
    'KeyR': 'r',
    'KeyT': 't',
    'KeyY': 'y',
    'KeyU': 'u',
    'KeyI': 'i',
    'KeyO': 'o',
    'KeyP': 'p',
    'BracketLeft': 'ư',
    'BracketRight': 'ơ',
    'Backslash': '\\',
    // Home row
    'KeyA': 'a',
    'KeyS': 's',
    'KeyD': 'd',
    'KeyF': 'f',
    'KeyG': 'g',
    'KeyH': 'h',
    'KeyJ': 'j',
    'KeyK': 'k',
    'KeyL': 'l',
    'Semicolon': ';',
    'Quote': "'",
    // Bottom row
    'KeyZ': 'z',
    'KeyX': 'x',
    'KeyC': 'c',
    'KeyV': 'v',
    'KeyB': 'b',
    'KeyN': 'n',
    'KeyM': 'm',
    'Comma': ',',
    'Period': '.',
    'Slash': '/',
    'Space': ' ',
  },
};
