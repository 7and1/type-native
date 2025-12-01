/**
 * Burmese (Myanmar) Keyboard Layout
 */

import type { KeyboardLayout } from '@/types/keyboard';

export const burmeseLayout: KeyboardLayout = {
  id: 'my',
  name: 'Burmese',
  nativeName: 'မြန်မာ',
  direction: 'ltr',
  fontFamily: 'system-ui, sans-serif',
  rows: [
    {
      keys: [
        { id: 'my-backtick', label: '`', value: '`', shiftValue: '~', code: 'Backquote', type: 'character' },
        { id: 'my-1', label: '၁', value: '၁', shiftValue: 'ဍ', code: 'Digit1', type: 'character' },
        { id: 'my-2', label: '၂', value: '၂', shiftValue: 'ဎ', code: 'Digit2', type: 'character' },
        { id: 'my-3', label: '၃', value: '၃', shiftValue: 'ဋ', code: 'Digit3', type: 'character' },
        { id: 'my-4', label: '၄', value: '၄', shiftValue: 'ၐ', code: 'Digit4', type: 'character' },
        { id: 'my-5', label: '၅', value: '၅', shiftValue: 'ၑ', code: 'Digit5', type: 'character' },
        { id: 'my-6', label: '၆', value: '၆', shiftValue: 'ဝ', code: 'Digit6', type: 'character' },
        { id: 'my-7', label: '၇', value: '၇', shiftValue: 'ရ', code: 'Digit7', type: 'character' },
        { id: 'my-8', label: '၈', value: '၈', shiftValue: '*', code: 'Digit8', type: 'character' },
        { id: 'my-9', label: '၉', value: '၉', shiftValue: '(', code: 'Digit9', type: 'character' },
        { id: 'my-0', label: '၀', value: '၀', shiftValue: ')', code: 'Digit0', type: 'character' },
        { id: 'my-minus', label: '-', value: '-', shiftValue: '_', code: 'Minus', type: 'character' },
        { id: 'my-equal', label: '=', value: '=', shiftValue: '+', code: 'Equal', type: 'character' },
        { id: 'my-backspace', label: '⌫', value: 'Backspace', code: 'Backspace', type: 'action', width: 1.5 },
      ],
    },
    {
      keys: [
        { id: 'my-tab', label: 'Tab', value: 'Tab', code: 'Tab', type: 'action', width: 1.5 },
        { id: 'my-q', label: 'ဆ', value: 'ဆ', shiftValue: 'ဈ', code: 'KeyQ', type: 'character' },
        { id: 'my-w', label: 'တ', value: 'တ', shiftValue: 'ဝ', code: 'KeyW', type: 'character' },
        { id: 'my-e', label: 'န', value: 'န', shiftValue: 'ဣ', code: 'KeyE', type: 'character' },
        { id: 'my-r', label: 'မ', value: 'မ', shiftValue: 'ဤ', code: 'KeyR', type: 'character' },
        { id: 'my-t', label: 'အ', value: 'အ', shiftValue: 'ဥ', code: 'KeyT', type: 'character' },
        { id: 'my-y', label: 'ပ', value: 'ပ', shiftValue: '၌', code: 'KeyY', type: 'character' },
        { id: 'my-u', label: 'က', value: 'က', shiftValue: 'ဥ', code: 'KeyU', type: 'character' },
        { id: 'my-i', label: 'င', value: 'င', shiftValue: '၍', code: 'KeyI', type: 'character' },
        { id: 'my-o', label: 'သ', value: 'သ', shiftValue: 'ဿ', code: 'KeyO', type: 'character' },
        { id: 'my-p', label: 'စ', value: 'စ', shiftValue: 'ဏ', code: 'KeyP', type: 'character' },
        { id: 'my-bracketleft', label: 'ဟ', value: 'ဟ', shiftValue: 'ဧ', code: 'BracketLeft', type: 'character' },
        { id: 'my-bracketright', label: 'ဩ', value: 'ဩ', shiftValue: 'ဪ', code: 'BracketRight', type: 'character' },
      ],
    },
    {
      keys: [
        { id: 'my-caps', label: 'Caps', value: 'CapsLock', code: 'CapsLock', type: 'modifier', width: 1.8 },
        { id: 'my-a', label: 'ေ', value: 'ေ', shiftValue: 'ဗ', code: 'KeyA', type: 'character' },
        { id: 'my-s', label: 'ျ', value: 'ျ', shiftValue: 'ှ', code: 'KeyS', type: 'character' },
        { id: 'my-d', label: 'ိ', value: 'ိ', shiftValue: 'ီ', code: 'KeyD', type: 'character' },
        { id: 'my-f', label: '်', value: '်', shiftValue: '္', code: 'KeyF', type: 'character' },
        { id: 'my-g', label: 'ါ', value: 'ါ', shiftValue: 'ွ', code: 'KeyG', type: 'character' },
        { id: 'my-h', label: '့', value: '့', shiftValue: 'ှ', code: 'KeyH', type: 'character' },
        { id: 'my-j', label: 'ြ', value: 'ြ', shiftValue: 'ြ', code: 'KeyJ', type: 'character' },
        { id: 'my-k', label: 'ု', value: 'ု', shiftValue: 'ူ', code: 'KeyK', type: 'character' },
        { id: 'my-l', label: 'ူ', value: 'ူ', shiftValue: 'ဲ', code: 'KeyL', type: 'character' },
        { id: 'my-semicolon', label: 'း', value: 'း', shiftValue: 'ဒ', code: 'Semicolon', type: 'character' },
        { id: 'my-quote', label: 'ဒ', value: 'ဒ', shiftValue: 'ဓ', code: 'Quote', type: 'character' },
        { id: 'my-enter', label: 'Enter', value: 'Enter', code: 'Enter', type: 'action', width: 1.8 },
      ],
    },
    {
      keys: [
        { id: 'my-shift-left', label: '⇧', value: 'Shift', code: 'ShiftLeft', type: 'modifier', width: 2.3 },
        { id: 'my-z', label: 'ဖ', value: 'ဖ', shiftValue: 'ဇ', code: 'KeyZ', type: 'character' },
        { id: 'my-x', label: 'ထ', value: 'ထ', shiftValue: 'ဌ', code: 'KeyX', type: 'character' },
        { id: 'my-c', label: 'ခ', value: 'ခ', shiftValue: 'ဃ', code: 'KeyC', type: 'character' },
        { id: 'my-v', label: 'လ', value: 'လ', shiftValue: 'ဠ', code: 'KeyV', type: 'character' },
        { id: 'my-b', label: 'ဘ', value: 'ဘ', shiftValue: 'ယ', code: 'KeyB', type: 'character' },
        { id: 'my-n', label: 'ည', value: 'ည', shiftValue: 'ဉ', code: 'KeyN', type: 'character' },
        { id: 'my-m', label: 'ာ', value: 'ာ', shiftValue: 'ဦ', code: 'KeyM', type: 'character' },
        { id: 'my-comma', label: 'ယ', value: 'ယ', shiftValue: 'ရ', code: 'Comma', type: 'character' },
        { id: 'my-period', label: '.', value: '.', shiftValue: '>', code: 'Period', type: 'character' },
        { id: 'my-slash', label: '/', value: '/', shiftValue: '?', code: 'Slash', type: 'character' },
        { id: 'my-shift-right', label: '⇧', value: 'Shift', code: 'ShiftRight', type: 'modifier', width: 2.3 },
      ],
    },
    {
      keys: [
        { id: 'my-space', label: 'Space', value: ' ', code: 'Space', type: 'space', width: 6 },
      ],
    },
  ],
  physicalKeyMap: {
    'Backquote': '`', 'Digit1': '၁', 'Digit2': '၂', 'Digit3': '၃', 'Digit4': '၄',
    'Digit5': '၅', 'Digit6': '၆', 'Digit7': '၇', 'Digit8': '၈', 'Digit9': '၉',
    'Digit0': '၀', 'Minus': '-', 'Equal': '=',
    'KeyQ': 'ဆ', 'KeyW': 'တ', 'KeyE': 'န', 'KeyR': 'မ', 'KeyT': 'အ',
    'KeyY': 'ပ', 'KeyU': 'က', 'KeyI': 'င', 'KeyO': 'သ', 'KeyP': 'စ',
    'BracketLeft': 'ဟ', 'BracketRight': 'ဩ',
    'KeyA': 'ေ', 'KeyS': 'ျ', 'KeyD': 'ိ', 'KeyF': '်', 'KeyG': 'ါ',
    'KeyH': '့', 'KeyJ': 'ြ', 'KeyK': 'ု', 'KeyL': 'ူ',
    'Semicolon': 'း', 'Quote': 'ဒ',
    'KeyZ': 'ဖ', 'KeyX': 'ထ', 'KeyC': 'ခ', 'KeyV': 'လ', 'KeyB': 'ဘ',
    'KeyN': 'ည', 'KeyM': 'ာ', 'Comma': 'ယ', 'Period': '.', 'Slash': '/',
    'Space': ' ',
  },
};
