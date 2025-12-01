/**
 * Odia (Oriya) Keyboard Layout - Inscript-based
 */

import type { KeyboardLayout } from '@/types/keyboard';

export const odiaLayout: KeyboardLayout = {
  id: 'or',
  name: 'Odia',
  nativeName: 'ଓଡ଼ିଆ',
  direction: 'ltr',
  fontFamily: 'system-ui, sans-serif',
  rows: [
    {
      keys: [
        { id: 'or-backtick', label: '୰', value: '୰', shiftValue: '୰', code: 'Backquote', type: 'character' },
        { id: 'or-1', label: '୧', value: '୧', shiftValue: '!', code: 'Digit1', type: 'character' },
        { id: 'or-2', label: '୨', value: '୨', shiftValue: '@', code: 'Digit2', type: 'character' },
        { id: 'or-3', label: '୩', value: '୩', shiftValue: '#', code: 'Digit3', type: 'character' },
        { id: 'or-4', label: '୪', value: '୪', shiftValue: '$', code: 'Digit4', type: 'character' },
        { id: 'or-5', label: '୫', value: '୫', shiftValue: '%', code: 'Digit5', type: 'character' },
        { id: 'or-6', label: '୬', value: '୬', shiftValue: '^', code: 'Digit6', type: 'character' },
        { id: 'or-7', label: '୭', value: '୭', shiftValue: '&', code: 'Digit7', type: 'character' },
        { id: 'or-8', label: '୮', value: '୮', shiftValue: '*', code: 'Digit8', type: 'character' },
        { id: 'or-9', label: '୯', value: '୯', shiftValue: '(', code: 'Digit9', type: 'character' },
        { id: 'or-0', label: '୦', value: '୦', shiftValue: ')', code: 'Digit0', type: 'character' },
        { id: 'or-minus', label: '-', value: '-', shiftValue: 'ଃ', code: 'Minus', type: 'character' },
        { id: 'or-equal', label: 'ୃ', value: 'ୃ', shiftValue: 'ଋ', code: 'Equal', type: 'character' },
        { id: 'or-backspace', label: '⌫', value: 'Backspace', code: 'Backspace', type: 'action', width: 1.5 },
      ],
    },
    {
      keys: [
        { id: 'or-tab', label: 'Tab', value: 'Tab', code: 'Tab', type: 'action', width: 1.5 },
        { id: 'or-q', label: 'ୌ', value: 'ୌ', shiftValue: 'ଔ', code: 'KeyQ', type: 'character' },
        { id: 'or-w', label: 'ୈ', value: 'ୈ', shiftValue: 'ଐ', code: 'KeyW', type: 'character' },
        { id: 'or-e', label: 'ା', value: 'ା', shiftValue: 'ଆ', code: 'KeyE', type: 'character' },
        { id: 'or-r', label: 'ୀ', value: 'ୀ', shiftValue: 'ଈ', code: 'KeyR', type: 'character' },
        { id: 'or-t', label: 'ୂ', value: 'ୂ', shiftValue: 'ଊ', code: 'KeyT', type: 'character' },
        { id: 'or-y', label: 'ବ', value: 'ବ', shiftValue: 'ଭ', code: 'KeyY', type: 'character' },
        { id: 'or-u', label: 'ହ', value: 'ହ', shiftValue: 'ଙ', code: 'KeyU', type: 'character' },
        { id: 'or-i', label: 'ଗ', value: 'ଗ', shiftValue: 'ଘ', code: 'KeyI', type: 'character' },
        { id: 'or-o', label: 'ଦ', value: 'ଦ', shiftValue: 'ଧ', code: 'KeyO', type: 'character' },
        { id: 'or-p', label: 'ଜ', value: 'ଜ', shiftValue: 'ଝ', code: 'KeyP', type: 'character' },
        { id: 'or-bracketleft', label: 'ଡ', value: 'ଡ', shiftValue: 'ଢ', code: 'BracketLeft', type: 'character' },
        { id: 'or-bracketright', label: '଼', value: '଼', shiftValue: 'ଞ', code: 'BracketRight', type: 'character' },
      ],
    },
    {
      keys: [
        { id: 'or-caps', label: 'Caps', value: 'CapsLock', code: 'CapsLock', type: 'modifier', width: 1.8 },
        { id: 'or-a', label: 'ୋ', value: 'ୋ', shiftValue: 'ଓ', code: 'KeyA', type: 'character' },
        { id: 'or-s', label: 'େ', value: 'େ', shiftValue: 'ଏ', code: 'KeyS', type: 'character' },
        { id: 'or-d', label: '୍', value: '୍', shiftValue: 'ଅ', code: 'KeyD', type: 'character' },
        { id: 'or-f', label: 'ି', value: 'ି', shiftValue: 'ଇ', code: 'KeyF', type: 'character' },
        { id: 'or-g', label: 'ୁ', value: 'ୁ', shiftValue: 'ଉ', code: 'KeyG', type: 'character' },
        { id: 'or-h', label: 'ପ', value: 'ପ', shiftValue: 'ଫ', code: 'KeyH', type: 'character' },
        { id: 'or-j', label: 'ର', value: 'ର', shiftValue: 'ଋ', code: 'KeyJ', type: 'character' },
        { id: 'or-k', label: 'କ', value: 'କ', shiftValue: 'ଖ', code: 'KeyK', type: 'character' },
        { id: 'or-l', label: 'ତ', value: 'ତ', shiftValue: 'ଥ', code: 'KeyL', type: 'character' },
        { id: 'or-semicolon', label: 'ଚ', value: 'ଚ', shiftValue: 'ଛ', code: 'Semicolon', type: 'character' },
        { id: 'or-quote', label: 'ଟ', value: 'ଟ', shiftValue: 'ଠ', code: 'Quote', type: 'character' },
        { id: 'or-enter', label: 'Enter', value: 'Enter', code: 'Enter', type: 'action', width: 1.8 },
      ],
    },
    {
      keys: [
        { id: 'or-shift-left', label: '⇧', value: 'Shift', code: 'ShiftLeft', type: 'modifier', width: 2.3 },
        { id: 'or-z', label: 'େ', value: 'େ', shiftValue: 'ଏ', code: 'KeyZ', type: 'character' },
        { id: 'or-x', label: 'ଂ', value: 'ଂ', shiftValue: 'ଁ', code: 'KeyX', type: 'character' },
        { id: 'or-c', label: 'ମ', value: 'ମ', shiftValue: 'ଣ', code: 'KeyC', type: 'character' },
        { id: 'or-v', label: 'ନ', value: 'ନ', shiftValue: 'ନ', code: 'KeyV', type: 'character' },
        { id: 'or-b', label: 'ୱ', value: 'ୱ', shiftValue: 'ୱ', code: 'KeyB', type: 'character' },
        { id: 'or-n', label: 'ଲ', value: 'ଲ', shiftValue: 'ଳ', code: 'KeyN', type: 'character' },
        { id: 'or-m', label: 'ସ', value: 'ସ', shiftValue: 'ଶ', code: 'KeyM', type: 'character' },
        { id: 'or-comma', label: ',', value: ',', shiftValue: 'ଷ', code: 'Comma', type: 'character' },
        { id: 'or-period', label: '.', value: '.', shiftValue: '।', code: 'Period', type: 'character' },
        { id: 'or-slash', label: 'ୟ', value: 'ୟ', shiftValue: 'ୟ', code: 'Slash', type: 'character' },
        { id: 'or-shift-right', label: '⇧', value: 'Shift', code: 'ShiftRight', type: 'modifier', width: 2.3 },
      ],
    },
    {
      keys: [
        { id: 'or-space', label: 'Space', value: ' ', code: 'Space', type: 'space', width: 6 },
      ],
    },
  ],
  physicalKeyMap: {
    'Backquote': '୰', 'Digit1': '୧', 'Digit2': '୨', 'Digit3': '୩', 'Digit4': '୪',
    'Digit5': '୫', 'Digit6': '୬', 'Digit7': '୭', 'Digit8': '୮', 'Digit9': '୯',
    'Digit0': '୦', 'Minus': '-', 'Equal': 'ୃ',
    'KeyQ': 'ୌ', 'KeyW': 'ୈ', 'KeyE': 'ା', 'KeyR': 'ୀ', 'KeyT': 'ୂ',
    'KeyY': 'ବ', 'KeyU': 'ହ', 'KeyI': 'ଗ', 'KeyO': 'ଦ', 'KeyP': 'ଜ',
    'BracketLeft': 'ଡ', 'BracketRight': '଼',
    'KeyA': 'ୋ', 'KeyS': 'େ', 'KeyD': '୍', 'KeyF': 'ି', 'KeyG': 'ୁ',
    'KeyH': 'ପ', 'KeyJ': 'ର', 'KeyK': 'କ', 'KeyL': 'ତ',
    'Semicolon': 'ଚ', 'Quote': 'ଟ',
    'KeyZ': 'େ', 'KeyX': 'ଂ', 'KeyC': 'ମ', 'KeyV': 'ନ', 'KeyB': 'ୱ',
    'KeyN': 'ଲ', 'KeyM': 'ସ', 'Comma': ',', 'Period': '.', 'Slash': 'ୟ',
    'Space': ' ',
  },
};
