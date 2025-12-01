/**
 * Traditional Chinese (Taiwan) Keyboard Layout - Zhuyin/Bopomofo
 */

import type { KeyboardLayout } from '@/types/keyboard';

export const chineseTraditionalLayout: KeyboardLayout = {
  id: 'zh-tw',
  name: 'Chinese (Taiwan)',
  nativeName: '繁體中文 (台灣)',
  direction: 'ltr',
  fontFamily: "'Noto Sans TC', 'Microsoft JhengHei', system-ui",
  rows: [
    {
      keys: [
        { id: 'zh-tw-backtick', label: '`', value: '`', shiftValue: '~', code: 'Backquote', type: 'character' },
        { id: 'zh-tw-1', label: 'ㄅ', value: 'ㄅ', shiftValue: '!', code: 'Digit1', type: 'character' },
        { id: 'zh-tw-2', label: 'ㄉ', value: 'ㄉ', shiftValue: '@', code: 'Digit2', type: 'character' },
        { id: 'zh-tw-3', label: 'ˇ', value: 'ˇ', shiftValue: '#', code: 'Digit3', type: 'character' },
        { id: 'zh-tw-4', label: 'ˋ', value: 'ˋ', shiftValue: '$', code: 'Digit4', type: 'character' },
        { id: 'zh-tw-5', label: 'ㄓ', value: 'ㄓ', shiftValue: '%', code: 'Digit5', type: 'character' },
        { id: 'zh-tw-6', label: 'ˊ', value: 'ˊ', shiftValue: '^', code: 'Digit6', type: 'character' },
        { id: 'zh-tw-7', label: '˙', value: '˙', shiftValue: '&', code: 'Digit7', type: 'character' },
        { id: 'zh-tw-8', label: 'ㄚ', value: 'ㄚ', shiftValue: '*', code: 'Digit8', type: 'character' },
        { id: 'zh-tw-9', label: 'ㄞ', value: 'ㄞ', shiftValue: '(', code: 'Digit9', type: 'character' },
        { id: 'zh-tw-0', label: 'ㄢ', value: 'ㄢ', shiftValue: ')', code: 'Digit0', type: 'character' },
        { id: 'zh-tw-minus', label: 'ㄦ', value: 'ㄦ', shiftValue: '_', code: 'Minus', type: 'character' },
        { id: 'zh-tw-equal', label: '=', value: '=', shiftValue: '+', code: 'Equal', type: 'character' },
        { id: 'zh-tw-backspace', label: '⌫', value: 'Backspace', code: 'Backspace', type: 'action', width: 1.5 },
      ],
    },
    {
      keys: [
        { id: 'zh-tw-tab', label: 'Tab', value: 'Tab', code: 'Tab', type: 'action', width: 1.5 },
        { id: 'zh-tw-q', label: 'ㄆ', value: 'ㄆ', shiftValue: 'Q', code: 'KeyQ', type: 'character' },
        { id: 'zh-tw-w', label: 'ㄊ', value: 'ㄊ', shiftValue: 'W', code: 'KeyW', type: 'character' },
        { id: 'zh-tw-e', label: 'ㄍ', value: 'ㄍ', shiftValue: 'E', code: 'KeyE', type: 'character' },
        { id: 'zh-tw-r', label: 'ㄐ', value: 'ㄐ', shiftValue: 'R', code: 'KeyR', type: 'character' },
        { id: 'zh-tw-t', label: 'ㄔ', value: 'ㄔ', shiftValue: 'T', code: 'KeyT', type: 'character' },
        { id: 'zh-tw-y', label: 'ㄗ', value: 'ㄗ', shiftValue: 'Y', code: 'KeyY', type: 'character' },
        { id: 'zh-tw-u', label: 'ㄧ', value: 'ㄧ', shiftValue: 'U', code: 'KeyU', type: 'character' },
        { id: 'zh-tw-i', label: 'ㄛ', value: 'ㄛ', shiftValue: 'I', code: 'KeyI', type: 'character' },
        { id: 'zh-tw-o', label: 'ㄟ', value: 'ㄟ', shiftValue: 'O', code: 'KeyO', type: 'character' },
        { id: 'zh-tw-p', label: 'ㄣ', value: 'ㄣ', shiftValue: 'P', code: 'KeyP', type: 'character' },
        { id: 'zh-tw-bracketleft', label: '[', value: '[', shiftValue: '{', code: 'BracketLeft', type: 'character' },
        { id: 'zh-tw-bracketright', label: ']', value: ']', shiftValue: '}', code: 'BracketRight', type: 'character' },
      ],
    },
    {
      keys: [
        { id: 'zh-tw-caps', label: 'Caps', value: 'CapsLock', code: 'CapsLock', type: 'modifier', width: 1.8 },
        { id: 'zh-tw-a', label: 'ㄇ', value: 'ㄇ', shiftValue: 'A', code: 'KeyA', type: 'character' },
        { id: 'zh-tw-s', label: 'ㄋ', value: 'ㄋ', shiftValue: 'S', code: 'KeyS', type: 'character' },
        { id: 'zh-tw-d', label: 'ㄎ', value: 'ㄎ', shiftValue: 'D', code: 'KeyD', type: 'character' },
        { id: 'zh-tw-f', label: 'ㄑ', value: 'ㄑ', shiftValue: 'F', code: 'KeyF', type: 'character' },
        { id: 'zh-tw-g', label: 'ㄕ', value: 'ㄕ', shiftValue: 'G', code: 'KeyG', type: 'character' },
        { id: 'zh-tw-h', label: 'ㄘ', value: 'ㄘ', shiftValue: 'H', code: 'KeyH', type: 'character' },
        { id: 'zh-tw-j', label: 'ㄨ', value: 'ㄨ', shiftValue: 'J', code: 'KeyJ', type: 'character' },
        { id: 'zh-tw-k', label: 'ㄜ', value: 'ㄜ', shiftValue: 'K', code: 'KeyK', type: 'character' },
        { id: 'zh-tw-l', label: 'ㄠ', value: 'ㄠ', shiftValue: 'L', code: 'KeyL', type: 'character' },
        { id: 'zh-tw-semicolon', label: 'ㄤ', value: 'ㄤ', shiftValue: ':', code: 'Semicolon', type: 'character' },
        { id: 'zh-tw-quote', label: "'", value: "'", shiftValue: '"', code: 'Quote', type: 'character' },
        { id: 'zh-tw-enter', label: 'Enter', value: 'Enter', code: 'Enter', type: 'action', width: 1.8 },
      ],
    },
    {
      keys: [
        { id: 'zh-tw-shift-left', label: '⇧', value: 'Shift', code: 'ShiftLeft', type: 'modifier', width: 2.3 },
        { id: 'zh-tw-z', label: 'ㄈ', value: 'ㄈ', shiftValue: 'Z', code: 'KeyZ', type: 'character' },
        { id: 'zh-tw-x', label: 'ㄌ', value: 'ㄌ', shiftValue: 'X', code: 'KeyX', type: 'character' },
        { id: 'zh-tw-c', label: 'ㄏ', value: 'ㄏ', shiftValue: 'C', code: 'KeyC', type: 'character' },
        { id: 'zh-tw-v', label: 'ㄒ', value: 'ㄒ', shiftValue: 'V', code: 'KeyV', type: 'character' },
        { id: 'zh-tw-b', label: 'ㄖ', value: 'ㄖ', shiftValue: 'B', code: 'KeyB', type: 'character' },
        { id: 'zh-tw-n', label: 'ㄙ', value: 'ㄙ', shiftValue: 'N', code: 'KeyN', type: 'character' },
        { id: 'zh-tw-m', label: 'ㄩ', value: 'ㄩ', shiftValue: 'M', code: 'KeyM', type: 'character' },
        { id: 'zh-tw-comma', label: 'ㄝ', value: 'ㄝ', shiftValue: '<', code: 'Comma', type: 'character' },
        { id: 'zh-tw-period', label: 'ㄡ', value: 'ㄡ', shiftValue: '>', code: 'Period', type: 'character' },
        { id: 'zh-tw-slash', label: 'ㄥ', value: 'ㄥ', shiftValue: '?', code: 'Slash', type: 'character' },
        { id: 'zh-tw-shift-right', label: '⇧', value: 'Shift', code: 'ShiftRight', type: 'modifier', width: 2.3 },
      ],
    },
    {
      keys: [
        { id: 'zh-tw-space', label: 'Space', value: ' ', code: 'Space', type: 'space', width: 6 },
      ],
    },
  ],
  physicalKeyMap: {
    'Backquote': '`', 'Digit1': 'ㄅ', 'Digit2': 'ㄉ', 'Digit3': 'ˇ', 'Digit4': 'ˋ',
    'Digit5': 'ㄓ', 'Digit6': 'ˊ', 'Digit7': '˙', 'Digit8': 'ㄚ', 'Digit9': 'ㄞ',
    'Digit0': 'ㄢ', 'Minus': 'ㄦ', 'Equal': '=',
    'KeyQ': 'ㄆ', 'KeyW': 'ㄊ', 'KeyE': 'ㄍ', 'KeyR': 'ㄐ', 'KeyT': 'ㄔ',
    'KeyY': 'ㄗ', 'KeyU': 'ㄧ', 'KeyI': 'ㄛ', 'KeyO': 'ㄟ', 'KeyP': 'ㄣ',
    'BracketLeft': '[', 'BracketRight': ']',
    'KeyA': 'ㄇ', 'KeyS': 'ㄋ', 'KeyD': 'ㄎ', 'KeyF': 'ㄑ', 'KeyG': 'ㄕ',
    'KeyH': 'ㄘ', 'KeyJ': 'ㄨ', 'KeyK': 'ㄜ', 'KeyL': 'ㄠ',
    'Semicolon': 'ㄤ', 'Quote': "'",
    'KeyZ': 'ㄈ', 'KeyX': 'ㄌ', 'KeyC': 'ㄏ', 'KeyV': 'ㄒ', 'KeyB': 'ㄖ',
    'KeyN': 'ㄙ', 'KeyM': 'ㄩ', 'Comma': 'ㄝ', 'Period': 'ㄡ', 'Slash': 'ㄥ',
    'Space': ' ',
  },
};
