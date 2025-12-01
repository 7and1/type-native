/**
 * Punjabi (Gurmukhi) Keyboard Layout - Inscript-based
 */

import type { KeyboardLayout } from '@/types/keyboard';

export const punjabiLayout: KeyboardLayout = {
  id: 'pa',
  name: 'Punjabi (Gurmukhi)',
  nativeName: 'ਪੰਜਾਬੀ',
  direction: 'ltr',
  fontFamily: 'system-ui, sans-serif',
  rows: [
    {
      keys: [
        { id: 'pa-backtick', label: 'ੑ', value: 'ੑ', shiftValue: 'ੴ', code: 'Backquote', type: 'character' },
        { id: 'pa-1', label: '੧', value: '੧', shiftValue: '!', code: 'Digit1', type: 'character' },
        { id: 'pa-2', label: '੨', value: '੨', shiftValue: '@', code: 'Digit2', type: 'character' },
        { id: 'pa-3', label: '੩', value: '੩', shiftValue: '#', code: 'Digit3', type: 'character' },
        { id: 'pa-4', label: '੪', value: '੪', shiftValue: '$', code: 'Digit4', type: 'character' },
        { id: 'pa-5', label: '੫', value: '੫', shiftValue: '%', code: 'Digit5', type: 'character' },
        { id: 'pa-6', label: '੬', value: '੬', shiftValue: '^', code: 'Digit6', type: 'character' },
        { id: 'pa-7', label: '੭', value: '੭', shiftValue: '&', code: 'Digit7', type: 'character' },
        { id: 'pa-8', label: '੮', value: '੮', shiftValue: '*', code: 'Digit8', type: 'character' },
        { id: 'pa-9', label: '੯', value: '੯', shiftValue: '(', code: 'Digit9', type: 'character' },
        { id: 'pa-0', label: '੦', value: '੦', shiftValue: ')', code: 'Digit0', type: 'character' },
        { id: 'pa-minus', label: '-', value: '-', shiftValue: '_', code: 'Minus', type: 'character' },
        { id: 'pa-equal', label: '੍ਰ', value: '੍ਰ', shiftValue: '੃', code: 'Equal', type: 'character' },
        { id: 'pa-backspace', label: '⌫', value: 'Backspace', code: 'Backspace', type: 'action', width: 1.5 },
      ],
    },
    {
      keys: [
        { id: 'pa-tab', label: 'Tab', value: 'Tab', code: 'Tab', type: 'action', width: 1.5 },
        { id: 'pa-q', label: 'ੌ', value: 'ੌ', shiftValue: 'ਔ', code: 'KeyQ', type: 'character' },
        { id: 'pa-w', label: 'ੈ', value: 'ੈ', shiftValue: 'ਐ', code: 'KeyW', type: 'character' },
        { id: 'pa-e', label: 'ਾ', value: 'ਾ', shiftValue: 'ਆ', code: 'KeyE', type: 'character' },
        { id: 'pa-r', label: 'ੀ', value: 'ੀ', shiftValue: 'ਈ', code: 'KeyR', type: 'character' },
        { id: 'pa-t', label: 'ੂ', value: 'ੂ', shiftValue: 'ਊ', code: 'KeyT', type: 'character' },
        { id: 'pa-y', label: 'ਬ', value: 'ਬ', shiftValue: 'ਭ', code: 'KeyY', type: 'character' },
        { id: 'pa-u', label: 'ਹ', value: 'ਹ', shiftValue: 'ਙ', code: 'KeyU', type: 'character' },
        { id: 'pa-i', label: 'ਗ', value: 'ਗ', shiftValue: 'ਘ', code: 'KeyI', type: 'character' },
        { id: 'pa-o', label: 'ਦ', value: 'ਦ', shiftValue: 'ਧ', code: 'KeyO', type: 'character' },
        { id: 'pa-p', label: 'ਜ', value: 'ਜ', shiftValue: 'ਝ', code: 'KeyP', type: 'character' },
        { id: 'pa-bracketleft', label: 'ਡ', value: 'ਡ', shiftValue: 'ਢ', code: 'BracketLeft', type: 'character' },
        { id: 'pa-bracketright', label: 'ਞ', value: 'ਞ', shiftValue: 'ਞ', code: 'BracketRight', type: 'character' },
      ],
    },
    {
      keys: [
        { id: 'pa-caps', label: 'Caps', value: 'CapsLock', code: 'CapsLock', type: 'modifier', width: 1.8 },
        { id: 'pa-a', label: 'ੋ', value: 'ੋ', shiftValue: 'ਓ', code: 'KeyA', type: 'character' },
        { id: 'pa-s', label: 'ੇ', value: 'ੇ', shiftValue: 'ਏ', code: 'KeyS', type: 'character' },
        { id: 'pa-d', label: '੍', value: '੍', shiftValue: 'ਅ', code: 'KeyD', type: 'character' },
        { id: 'pa-f', label: 'ਿ', value: 'ਿ', shiftValue: 'ਇ', code: 'KeyF', type: 'character' },
        { id: 'pa-g', label: 'ੁ', value: 'ੁ', shiftValue: 'ਉ', code: 'KeyG', type: 'character' },
        { id: 'pa-h', label: 'ਪ', value: 'ਪ', shiftValue: 'ਫ', code: 'KeyH', type: 'character' },
        { id: 'pa-j', label: 'ਰ', value: 'ਰ', shiftValue: 'ੜ', code: 'KeyJ', type: 'character' },
        { id: 'pa-k', label: 'ਕ', value: 'ਕ', shiftValue: 'ਖ', code: 'KeyK', type: 'character' },
        { id: 'pa-l', label: 'ਤ', value: 'ਤ', shiftValue: 'ਥ', code: 'KeyL', type: 'character' },
        { id: 'pa-semicolon', label: 'ਚ', value: 'ਚ', shiftValue: 'ਛ', code: 'Semicolon', type: 'character' },
        { id: 'pa-quote', label: 'ਟ', value: 'ਟ', shiftValue: 'ਠ', code: 'Quote', type: 'character' },
        { id: 'pa-enter', label: 'Enter', value: 'Enter', code: 'Enter', type: 'action', width: 1.8 },
      ],
    },
    {
      keys: [
        { id: 'pa-shift-left', label: '⇧', value: 'Shift', code: 'ShiftLeft', type: 'modifier', width: 2.3 },
        { id: 'pa-z', label: 'ੵ', value: 'ੵ', shiftValue: 'ਗ਼', code: 'KeyZ', type: 'character' },
        { id: 'pa-x', label: 'ੰ', value: 'ੰ', shiftValue: 'ਂ', code: 'KeyX', type: 'character' },
        { id: 'pa-c', label: 'ਮ', value: 'ਮ', shiftValue: 'ਣ', code: 'KeyC', type: 'character' },
        { id: 'pa-v', label: 'ਨ', value: 'ਨ', shiftValue: 'ਨਾ', code: 'KeyV', type: 'character' },
        { id: 'pa-b', label: 'ਵ', value: 'ਵ', shiftValue: 'ਵ', code: 'KeyB', type: 'character' },
        { id: 'pa-n', label: 'ਲ', value: 'ਲ', shiftValue: 'ਲ਼', code: 'KeyN', type: 'character' },
        { id: 'pa-m', label: 'ਸ', value: 'ਸ', shiftValue: 'ਸ਼', code: 'KeyM', type: 'character' },
        { id: 'pa-comma', label: ',', value: ',', shiftValue: 'ਖ਼', code: 'Comma', type: 'character' },
        { id: 'pa-period', label: '.', value: '.', shiftValue: '।', code: 'Period', type: 'character' },
        { id: 'pa-slash', label: 'ਯ', value: 'ਯ', shiftValue: 'ਜ਼', code: 'Slash', type: 'character' },
        { id: 'pa-shift-right', label: '⇧', value: 'Shift', code: 'ShiftRight', type: 'modifier', width: 2.3 },
      ],
    },
    {
      keys: [
        { id: 'pa-space', label: 'Space', value: ' ', code: 'Space', type: 'space', width: 6 },
      ],
    },
  ],
  physicalKeyMap: {
    'Backquote': 'ੑ', 'Digit1': '੧', 'Digit2': '੨', 'Digit3': '੩', 'Digit4': '੪',
    'Digit5': '੫', 'Digit6': '੬', 'Digit7': '੭', 'Digit8': '੮', 'Digit9': '੯',
    'Digit0': '੦', 'Minus': '-', 'Equal': '੍ਰ',
    'KeyQ': 'ੌ', 'KeyW': 'ੈ', 'KeyE': 'ਾ', 'KeyR': 'ੀ', 'KeyT': 'ੂ',
    'KeyY': 'ਬ', 'KeyU': 'ਹ', 'KeyI': 'ਗ', 'KeyO': 'ਦ', 'KeyP': 'ਜ',
    'BracketLeft': 'ਡ', 'BracketRight': 'ਞ',
    'KeyA': 'ੋ', 'KeyS': 'ੇ', 'KeyD': '੍', 'KeyF': 'ਿ', 'KeyG': 'ੁ',
    'KeyH': 'ਪ', 'KeyJ': 'ਰ', 'KeyK': 'ਕ', 'KeyL': 'ਤ',
    'Semicolon': 'ਚ', 'Quote': 'ਟ',
    'KeyZ': 'ੵ', 'KeyX': 'ੰ', 'KeyC': 'ਮ', 'KeyV': 'ਨ', 'KeyB': 'ਵ',
    'KeyN': 'ਲ', 'KeyM': 'ਸ', 'Comma': ',', 'Period': '.', 'Slash': 'ਯ',
    'Space': ' ',
  },
};
