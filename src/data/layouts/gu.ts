/**
 * Gujarati Keyboard Layout - Inscript-based
 */

import type { KeyboardLayout } from '@/types/keyboard';

export const gujaratiLayout: KeyboardLayout = {
  id: 'gu',
  name: 'Gujarati',
  nativeName: 'ગુજરાતી',
  direction: 'ltr',
  fontFamily: 'system-ui, sans-serif',
  rows: [
    {
      keys: [
        { id: 'gu-backtick', label: '૰', value: '૰', shiftValue: '૱', code: 'Backquote', type: 'character' },
        { id: 'gu-1', label: '1', value: '1', shiftValue: 'ૅ', code: 'Digit1', type: 'character' },
        { id: 'gu-2', label: '2', value: '2', shiftValue: 'ઍ', code: 'Digit2', type: 'character' },
        { id: 'gu-3', label: '3', value: '3', shiftValue: '્ર', code: 'Digit3', type: 'character' },
        { id: 'gu-4', label: '4', value: '4', shiftValue: 'ર્', code: 'Digit4', type: 'character' },
        { id: 'gu-5', label: '5', value: '5', shiftValue: 'જ્ઞ', code: 'Digit5', type: 'character' },
        { id: 'gu-6', label: '6', value: '6', shiftValue: 'ત્ર', code: 'Digit6', type: 'character' },
        { id: 'gu-7', label: '7', value: '7', shiftValue: 'ક્ષ', code: 'Digit7', type: 'character' },
        { id: 'gu-8', label: '8', value: '8', shiftValue: 'શ્ર', code: 'Digit8', type: 'character' },
        { id: 'gu-9', label: '9', value: '9', shiftValue: '(', code: 'Digit9', type: 'character' },
        { id: 'gu-0', label: '0', value: '0', shiftValue: ')', code: 'Digit0', type: 'character' },
        { id: 'gu-minus', label: '-', value: '-', shiftValue: 'ઃ', code: 'Minus', type: 'character' },
        { id: 'gu-equal', label: 'ૃ', value: 'ૃ', shiftValue: 'ઋ', code: 'Equal', type: 'character' },
        { id: 'gu-backspace', label: '⌫', value: 'Backspace', code: 'Backspace', type: 'action', width: 1.5 },
      ],
    },
    {
      keys: [
        { id: 'gu-tab', label: 'Tab', value: 'Tab', code: 'Tab', type: 'action', width: 1.5 },
        { id: 'gu-q', label: 'ૌ', value: 'ૌ', shiftValue: 'ઔ', code: 'KeyQ', type: 'character' },
        { id: 'gu-w', label: 'ૈ', value: 'ૈ', shiftValue: 'ઐ', code: 'KeyW', type: 'character' },
        { id: 'gu-e', label: 'ા', value: 'ા', shiftValue: 'આ', code: 'KeyE', type: 'character' },
        { id: 'gu-r', label: 'ી', value: 'ી', shiftValue: 'ઈ', code: 'KeyR', type: 'character' },
        { id: 'gu-t', label: 'ૂ', value: 'ૂ', shiftValue: 'ઊ', code: 'KeyT', type: 'character' },
        { id: 'gu-y', label: 'બ', value: 'બ', shiftValue: 'ભ', code: 'KeyY', type: 'character' },
        { id: 'gu-u', label: 'હ', value: 'હ', shiftValue: 'ઙ', code: 'KeyU', type: 'character' },
        { id: 'gu-i', label: 'ગ', value: 'ગ', shiftValue: 'ઘ', code: 'KeyI', type: 'character' },
        { id: 'gu-o', label: 'દ', value: 'દ', shiftValue: 'ધ', code: 'KeyO', type: 'character' },
        { id: 'gu-p', label: 'જ', value: 'જ', shiftValue: 'ઝ', code: 'KeyP', type: 'character' },
        { id: 'gu-bracketleft', label: 'ડ', value: 'ડ', shiftValue: 'ઢ', code: 'BracketLeft', type: 'character' },
        { id: 'gu-bracketright', label: '઼', value: '઼', shiftValue: 'ઞ', code: 'BracketRight', type: 'character' },
      ],
    },
    {
      keys: [
        { id: 'gu-caps', label: 'Caps', value: 'CapsLock', code: 'CapsLock', type: 'modifier', width: 1.8 },
        { id: 'gu-a', label: 'ો', value: 'ો', shiftValue: 'ઓ', code: 'KeyA', type: 'character' },
        { id: 'gu-s', label: 'ે', value: 'ે', shiftValue: 'એ', code: 'KeyS', type: 'character' },
        { id: 'gu-d', label: '્', value: '્', shiftValue: 'અ', code: 'KeyD', type: 'character' },
        { id: 'gu-f', label: 'િ', value: 'િ', shiftValue: 'ઇ', code: 'KeyF', type: 'character' },
        { id: 'gu-g', label: 'ુ', value: 'ુ', shiftValue: 'ઉ', code: 'KeyG', type: 'character' },
        { id: 'gu-h', label: 'પ', value: 'પ', shiftValue: 'ફ', code: 'KeyH', type: 'character' },
        { id: 'gu-j', label: 'ર', value: 'ર', shiftValue: 'ૠ', code: 'KeyJ', type: 'character' },
        { id: 'gu-k', label: 'ક', value: 'ક', shiftValue: 'ખ', code: 'KeyK', type: 'character' },
        { id: 'gu-l', label: 'ત', value: 'ત', shiftValue: 'થ', code: 'KeyL', type: 'character' },
        { id: 'gu-semicolon', label: 'ચ', value: 'ચ', shiftValue: 'છ', code: 'Semicolon', type: 'character' },
        { id: 'gu-quote', label: 'ટ', value: 'ટ', shiftValue: 'ઠ', code: 'Quote', type: 'character' },
        { id: 'gu-enter', label: 'Enter', value: 'Enter', code: 'Enter', type: 'action', width: 1.8 },
      ],
    },
    {
      keys: [
        { id: 'gu-shift-left', label: '⇧', value: 'Shift', code: 'ShiftLeft', type: 'modifier', width: 2.3 },
        { id: 'gu-z', label: 'ે', value: 'ે', shiftValue: 'ઍ', code: 'KeyZ', type: 'character' },
        { id: 'gu-x', label: 'ં', value: 'ં', shiftValue: 'ઁ', code: 'KeyX', type: 'character' },
        { id: 'gu-c', label: 'મ', value: 'મ', shiftValue: 'ણ', code: 'KeyC', type: 'character' },
        { id: 'gu-v', label: 'ન', value: 'ન', shiftValue: 'ન', code: 'KeyV', type: 'character' },
        { id: 'gu-b', label: 'વ', value: 'વ', shiftValue: 'વ', code: 'KeyB', type: 'character' },
        { id: 'gu-n', label: 'લ', value: 'લ', shiftValue: 'ળ', code: 'KeyN', type: 'character' },
        { id: 'gu-m', label: 'સ', value: 'સ', shiftValue: 'શ', code: 'KeyM', type: 'character' },
        { id: 'gu-comma', label: ',', value: ',', shiftValue: 'ષ', code: 'Comma', type: 'character' },
        { id: 'gu-period', label: '.', value: '.', shiftValue: '।', code: 'Period', type: 'character' },
        { id: 'gu-slash', label: 'ય', value: 'ય', shiftValue: 'ય', code: 'Slash', type: 'character' },
        { id: 'gu-shift-right', label: '⇧', value: 'Shift', code: 'ShiftRight', type: 'modifier', width: 2.3 },
      ],
    },
    {
      keys: [
        { id: 'gu-space', label: 'Space', value: ' ', code: 'Space', type: 'space', width: 6 },
      ],
    },
  ],
  physicalKeyMap: {
    'Backquote': '૰', 'Digit1': '1', 'Digit2': '2', 'Digit3': '3', 'Digit4': '4',
    'Digit5': '5', 'Digit6': '6', 'Digit7': '7', 'Digit8': '8', 'Digit9': '9',
    'Digit0': '0', 'Minus': '-', 'Equal': 'ૃ',
    'KeyQ': 'ૌ', 'KeyW': 'ૈ', 'KeyE': 'ા', 'KeyR': 'ી', 'KeyT': 'ૂ',
    'KeyY': 'બ', 'KeyU': 'હ', 'KeyI': 'ગ', 'KeyO': 'દ', 'KeyP': 'જ',
    'BracketLeft': 'ડ', 'BracketRight': '઼',
    'KeyA': 'ો', 'KeyS': 'ે', 'KeyD': '્', 'KeyF': 'િ', 'KeyG': 'ુ',
    'KeyH': 'પ', 'KeyJ': 'ર', 'KeyK': 'ક', 'KeyL': 'ત',
    'Semicolon': 'ચ', 'Quote': 'ટ',
    'KeyZ': 'ે', 'KeyX': 'ં', 'KeyC': 'મ', 'KeyV': 'ન', 'KeyB': 'વ',
    'KeyN': 'લ', 'KeyM': 'સ', 'Comma': ',', 'Period': '.', 'Slash': 'ય',
    'Space': ' ',
  },
};
