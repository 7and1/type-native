/**
 * Kannada Keyboard Layout - Inscript-based
 */

import type { KeyboardLayout } from '@/types/keyboard';

export const kannadaLayout: KeyboardLayout = {
  id: 'kn',
  name: 'Kannada',
  nativeName: 'ಕನ್ನಡ',
  direction: 'ltr',
  fontFamily: 'system-ui, sans-serif',
  rows: [
    {
      keys: [
        { id: 'kn-backtick', label: 'ೊ', value: 'ೊ', shiftValue: 'ಒ', code: 'Backquote', type: 'character' },
        { id: 'kn-1', label: '1', value: '1', shiftValue: '!', code: 'Digit1', type: 'character' },
        { id: 'kn-2', label: '2', value: '2', shiftValue: '@', code: 'Digit2', type: 'character' },
        { id: 'kn-3', label: '3', value: '3', shiftValue: '#', code: 'Digit3', type: 'character' },
        { id: 'kn-4', label: '4', value: '4', shiftValue: '$', code: 'Digit4', type: 'character' },
        { id: 'kn-5', label: '5', value: '5', shiftValue: '%', code: 'Digit5', type: 'character' },
        { id: 'kn-6', label: '6', value: '6', shiftValue: '^', code: 'Digit6', type: 'character' },
        { id: 'kn-7', label: '7', value: '7', shiftValue: '&', code: 'Digit7', type: 'character' },
        { id: 'kn-8', label: '8', value: '8', shiftValue: '*', code: 'Digit8', type: 'character' },
        { id: 'kn-9', label: '9', value: '9', shiftValue: '(', code: 'Digit9', type: 'character' },
        { id: 'kn-0', label: '0', value: '0', shiftValue: ')', code: 'Digit0', type: 'character' },
        { id: 'kn-minus', label: '-', value: '-', shiftValue: '_', code: 'Minus', type: 'character' },
        { id: 'kn-equal', label: 'ೃ', value: 'ೃ', shiftValue: 'ೠ', code: 'Equal', type: 'character' },
        { id: 'kn-backspace', label: '⌫', value: 'Backspace', code: 'Backspace', type: 'action', width: 1.5 },
      ],
    },
    {
      keys: [
        { id: 'kn-tab', label: 'Tab', value: 'Tab', code: 'Tab', type: 'action', width: 1.5 },
        { id: 'kn-q', label: 'ೌ', value: 'ೌ', shiftValue: 'ಔ', code: 'KeyQ', type: 'character' },
        { id: 'kn-w', label: 'ೈ', value: 'ೈ', shiftValue: 'ಐ', code: 'KeyW', type: 'character' },
        { id: 'kn-e', label: 'ಾ', value: 'ಾ', shiftValue: 'ಆ', code: 'KeyE', type: 'character' },
        { id: 'kn-r', label: 'ೀ', value: 'ೀ', shiftValue: 'ಈ', code: 'KeyR', type: 'character' },
        { id: 'kn-t', label: 'ೂ', value: 'ೂ', shiftValue: 'ಊ', code: 'KeyT', type: 'character' },
        { id: 'kn-y', label: 'ಬ', value: 'ಬ', shiftValue: 'ಭ', code: 'KeyY', type: 'character' },
        { id: 'kn-u', label: 'ಹ', value: 'ಹ', shiftValue: 'ಙ', code: 'KeyU', type: 'character' },
        { id: 'kn-i', label: 'ಗ', value: 'ಗ', shiftValue: 'ಘ', code: 'KeyI', type: 'character' },
        { id: 'kn-o', label: 'ದ', value: 'ದ', shiftValue: 'ಧ', code: 'KeyO', type: 'character' },
        { id: 'kn-p', label: 'ಜ', value: 'ಜ', shiftValue: 'ಝ', code: 'KeyP', type: 'character' },
        { id: 'kn-bracketleft', label: 'ಡ', value: 'ಡ', shiftValue: 'ಢ', code: 'BracketLeft', type: 'character' },
        { id: 'kn-bracketright', label: 'ಞ', value: 'ಞ', shiftValue: 'ಞ', code: 'BracketRight', type: 'character' },
      ],
    },
    {
      keys: [
        { id: 'kn-caps', label: 'Caps', value: 'CapsLock', code: 'CapsLock', type: 'modifier', width: 1.8 },
        { id: 'kn-a', label: 'ೋ', value: 'ೋ', shiftValue: 'ಓ', code: 'KeyA', type: 'character' },
        { id: 'kn-s', label: 'ೇ', value: 'ೇ', shiftValue: 'ಏ', code: 'KeyS', type: 'character' },
        { id: 'kn-d', label: '್', value: '್', shiftValue: 'ಅ', code: 'KeyD', type: 'character' },
        { id: 'kn-f', label: 'ಿ', value: 'ಿ', shiftValue: 'ಇ', code: 'KeyF', type: 'character' },
        { id: 'kn-g', label: 'ು', value: 'ು', shiftValue: 'ಉ', code: 'KeyG', type: 'character' },
        { id: 'kn-h', label: 'ಪ', value: 'ಪ', shiftValue: 'ಫ', code: 'KeyH', type: 'character' },
        { id: 'kn-j', label: 'ರ', value: 'ರ', shiftValue: 'ಱ', code: 'KeyJ', type: 'character' },
        { id: 'kn-k', label: 'ಕ', value: 'ಕ', shiftValue: 'ಖ', code: 'KeyK', type: 'character' },
        { id: 'kn-l', label: 'ತ', value: 'ತ', shiftValue: 'ಥ', code: 'KeyL', type: 'character' },
        { id: 'kn-semicolon', label: 'ಚ', value: 'ಚ', shiftValue: 'ಛ', code: 'Semicolon', type: 'character' },
        { id: 'kn-quote', label: 'ಟ', value: 'ಟ', shiftValue: 'ಠ', code: 'Quote', type: 'character' },
        { id: 'kn-enter', label: 'Enter', value: 'Enter', code: 'Enter', type: 'action', width: 1.8 },
      ],
    },
    {
      keys: [
        { id: 'kn-shift-left', label: '⇧', value: 'Shift', code: 'ShiftLeft', type: 'modifier', width: 2.3 },
        { id: 'kn-z', label: 'ೆ', value: 'ೆ', shiftValue: 'ಎ', code: 'KeyZ', type: 'character' },
        { id: 'kn-x', label: 'ಂ', value: 'ಂ', shiftValue: 'ಂ', code: 'KeyX', type: 'character' },
        { id: 'kn-c', label: 'ಮ', value: 'ಮ', shiftValue: 'ಣ', code: 'KeyC', type: 'character' },
        { id: 'kn-v', label: 'ನ', value: 'ನ', shiftValue: 'ನ', code: 'KeyV', type: 'character' },
        { id: 'kn-b', label: 'ವ', value: 'ವ', shiftValue: 'ವ', code: 'KeyB', type: 'character' },
        { id: 'kn-n', label: 'ಲ', value: 'ಲ', shiftValue: 'ಳ', code: 'KeyN', type: 'character' },
        { id: 'kn-m', label: 'ಸ', value: 'ಸ', shiftValue: 'ಶ', code: 'KeyM', type: 'character' },
        { id: 'kn-comma', label: ',', value: ',', shiftValue: 'ಷ', code: 'Comma', type: 'character' },
        { id: 'kn-period', label: '.', value: '.', shiftValue: '।', code: 'Period', type: 'character' },
        { id: 'kn-slash', label: 'ಯ', value: 'ಯ', shiftValue: 'ಯ', code: 'Slash', type: 'character' },
        { id: 'kn-shift-right', label: '⇧', value: 'Shift', code: 'ShiftRight', type: 'modifier', width: 2.3 },
      ],
    },
    {
      keys: [
        { id: 'kn-space', label: 'Space', value: ' ', code: 'Space', type: 'space', width: 6 },
      ],
    },
  ],
  physicalKeyMap: {
    'Backquote': 'ೊ', 'Digit1': '1', 'Digit2': '2', 'Digit3': '3', 'Digit4': '4',
    'Digit5': '5', 'Digit6': '6', 'Digit7': '7', 'Digit8': '8', 'Digit9': '9',
    'Digit0': '0', 'Minus': '-', 'Equal': 'ೃ',
    'KeyQ': 'ೌ', 'KeyW': 'ೈ', 'KeyE': 'ಾ', 'KeyR': 'ೀ', 'KeyT': 'ೂ',
    'KeyY': 'ಬ', 'KeyU': 'ಹ', 'KeyI': 'ಗ', 'KeyO': 'ದ', 'KeyP': 'ಜ',
    'BracketLeft': 'ಡ', 'BracketRight': 'ಞ',
    'KeyA': 'ೋ', 'KeyS': 'ೇ', 'KeyD': '್', 'KeyF': 'ಿ', 'KeyG': 'ು',
    'KeyH': 'ಪ', 'KeyJ': 'ರ', 'KeyK': 'ಕ', 'KeyL': 'ತ',
    'Semicolon': 'ಚ', 'Quote': 'ಟ',
    'KeyZ': 'ೆ', 'KeyX': 'ಂ', 'KeyC': 'ಮ', 'KeyV': 'ನ', 'KeyB': 'ವ',
    'KeyN': 'ಲ', 'KeyM': 'ಸ', 'Comma': ',', 'Period': '.', 'Slash': 'ಯ',
    'Space': ' ',
  },
};
