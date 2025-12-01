/**
 * Tibetan Keyboard Layout
 */

import type { KeyboardLayout } from '@/types/keyboard';

export const tibetanLayout: KeyboardLayout = {
  id: 'bo',
  name: 'Tibetan',
  nativeName: 'བོད་སྐད་',
  direction: 'ltr',
  fontFamily: 'system-ui, sans-serif',
  rows: [
    {
      keys: [
        { id: 'bo-backtick', label: '༊', value: '༊', shiftValue: '༉', code: 'Backquote', type: 'character' },
        { id: 'bo-1', label: '༡', value: '༡', shiftValue: '༪', code: 'Digit1', type: 'character' },
        { id: 'bo-2', label: '༢', value: '༢', shiftValue: '༫', code: 'Digit2', type: 'character' },
        { id: 'bo-3', label: '༣', value: '༣', shiftValue: '༬', code: 'Digit3', type: 'character' },
        { id: 'bo-4', label: '༤', value: '༤', shiftValue: '༭', code: 'Digit4', type: 'character' },
        { id: 'bo-5', label: '༥', value: '༥', shiftValue: '༮', code: 'Digit5', type: 'character' },
        { id: 'bo-6', label: '༦', value: '༦', shiftValue: '༯', code: 'Digit6', type: 'character' },
        { id: 'bo-7', label: '༧', value: '༧', shiftValue: '༰', code: 'Digit7', type: 'character' },
        { id: 'bo-8', label: '༨', value: '༨', shiftValue: '༱', code: 'Digit8', type: 'character' },
        { id: 'bo-9', label: '༩', value: '༩', shiftValue: '༲', code: 'Digit9', type: 'character' },
        { id: 'bo-0', label: '༠', value: '༠', shiftValue: '༳', code: 'Digit0', type: 'character' },
        { id: 'bo-minus', label: '-', value: '-', shiftValue: ' ', code: 'Minus', type: 'character' },
        { id: 'bo-equal', label: '༆', value: '༆', shiftValue: '༴', code: 'Equal', type: 'character' },
        { id: 'bo-backspace', label: '⌫', value: 'Backspace', code: 'Backspace', type: 'action', width: 1.5 },
      ],
    },
    {
      keys: [
        { id: 'bo-tab', label: 'Tab', value: 'Tab', code: 'Tab', type: 'action', width: 1.5 },
        { id: 'bo-q', label: 'ོ', value: 'ོ', shiftValue: 'ཽ', code: 'KeyQ', type: 'character' },
        { id: 'bo-w', label: 'ེ', value: 'ེ', shiftValue: 'ཻ', code: 'KeyW', type: 'character' },
        { id: 'bo-e', label: 'ྲ', value: 'ྲ', shiftValue: 'ྲ', code: 'KeyE', type: 'character' },
        { id: 'bo-r', label: 'ར', value: 'ར', shiftValue: 'ཪ', code: 'KeyR', type: 'character' },
        { id: 'bo-t', label: 'ཏ', value: 'ཏ', shiftValue: 'ཊ', code: 'KeyT', type: 'character' },
        { id: 'bo-y', label: 'ཡ', value: 'ཡ', shiftValue: 'ྈ', code: 'KeyY', type: 'character' },
        { id: 'bo-u', label: 'ུ', value: 'ུ', shiftValue: 'ཱུ', code: 'KeyU', type: 'character' },
        { id: 'bo-i', label: 'ི', value: 'ི', shiftValue: 'ཱི', code: 'KeyI', type: 'character' },
        { id: 'bo-o', label: 'ོ', value: 'ོ', shiftValue: 'ཽ', code: 'KeyO', type: 'character' },
        { id: 'bo-p', label: 'པ', value: 'པ', shiftValue: 'ཎ', code: 'KeyP', type: 'character' },
        { id: 'bo-bracketleft', label: 'ཁ', value: 'ཁ', shiftValue: 'ཁ', code: 'BracketLeft', type: 'character' },
        { id: 'bo-bracketright', label: 'ག', value: 'ག', shiftValue: 'ག', code: 'BracketRight', type: 'character' },
      ],
    },
    {
      keys: [
        { id: 'bo-caps', label: 'Caps', value: 'CapsLock', code: 'CapsLock', type: 'modifier', width: 1.8 },
        { id: 'bo-a', label: 'འ', value: 'འ', shiftValue: 'ཨ', code: 'KeyA', type: 'character' },
        { id: 'bo-s', label: 'ས', value: 'ས', shiftValue: 'ཥ', code: 'KeyS', type: 'character' },
        { id: 'bo-d', label: 'ད', value: 'ད', shiftValue: 'ཌ', code: 'KeyD', type: 'character' },
        { id: 'bo-f', label: 'ཕ', value: 'ཕ', shiftValue: 'ཕ', code: 'KeyF', type: 'character' },
        { id: 'bo-g', label: 'ག', value: 'ག', shiftValue: 'ག', code: 'KeyG', type: 'character' },
        { id: 'bo-h', label: 'ཧ', value: 'ཧ', shiftValue: 'ཧ', code: 'KeyH', type: 'character' },
        { id: 'bo-j', label: 'ཇ', value: 'ཇ', shiftValue: 'ཇ', code: 'KeyJ', type: 'character' },
        { id: 'bo-k', label: 'ཀ', value: 'ཀ', shiftValue: 'ཀ', code: 'KeyK', type: 'character' },
        { id: 'bo-l', label: 'ལ', value: 'ལ', shiftValue: 'ལ', code: 'KeyL', type: 'character' },
        { id: 'bo-semicolon', label: ';', value: ';', shiftValue: ':', code: 'Semicolon', type: 'character' },
        { id: 'bo-quote', label: '་', value: '་', shiftValue: '།', code: 'Quote', type: 'character' },
        { id: 'bo-enter', label: 'Enter', value: 'Enter', code: 'Enter', type: 'action', width: 1.8 },
      ],
    },
    {
      keys: [
        { id: 'bo-shift-left', label: '⇧', value: 'Shift', code: 'ShiftLeft', type: 'modifier', width: 2.3 },
        { id: 'bo-z', label: 'ཟ', value: 'ཟ', shiftValue: 'ཛྷ', code: 'KeyZ', type: 'character' },
        { id: 'bo-x', label: 'ཟ', value: 'ཟ', shiftValue: 'ཟ', code: 'KeyX', type: 'character' },
        { id: 'bo-c', label: 'ཅ', value: 'ཅ', shiftValue: 'ཅ', code: 'KeyC', type: 'character' },
        { id: 'bo-v', label: 'བ', value: 'བ', shiftValue: 'བ', code: 'KeyV', type: 'character' },
        { id: 'bo-b', label: 'བ', value: 'བ', shiftValue: 'བྷ', code: 'KeyB', type: 'character' },
        { id: 'bo-n', label: 'ན', value: 'ན', shiftValue: 'ཎ', code: 'KeyN', type: 'character' },
        { id: 'bo-m', label: 'མ', value: 'མ', shiftValue: 'མ', code: 'KeyM', type: 'character' },
        { id: 'bo-comma', label: ',', value: ',', shiftValue: '<', code: 'Comma', type: 'character' },
        { id: 'bo-period', label: '.', value: '.', shiftValue: '>', code: 'Period', type: 'character' },
        { id: 'bo-slash', label: '/', value: '/', shiftValue: '?', code: 'Slash', type: 'character' },
        { id: 'bo-shift-right', label: '⇧', value: 'Shift', code: 'ShiftRight', type: 'modifier', width: 2.3 },
      ],
    },
    {
      keys: [
        { id: 'bo-space', label: 'Space', value: ' ', code: 'Space', type: 'space', width: 6 },
      ],
    },
  ],
  physicalKeyMap: {
    'Backquote': '༊', 'Digit1': '༡', 'Digit2': '༢', 'Digit3': '༣', 'Digit4': '༤',
    'Digit5': '༥', 'Digit6': '༦', 'Digit7': '༧', 'Digit8': '༨', 'Digit9': '༩',
    'Digit0': '༠', 'Minus': '-', 'Equal': '༆',
    'KeyQ': 'ོ', 'KeyW': 'ེ', 'KeyE': 'ྲ', 'KeyR': 'ར', 'KeyT': 'ཏ',
    'KeyY': 'ཡ', 'KeyU': 'ུ', 'KeyI': 'ི', 'KeyO': 'ོ', 'KeyP': 'པ',
    'BracketLeft': 'ཁ', 'BracketRight': 'ག',
    'KeyA': 'འ', 'KeyS': 'ས', 'KeyD': 'ད', 'KeyF': 'ཕ', 'KeyG': 'ག',
    'KeyH': 'ཧ', 'KeyJ': 'ཇ', 'KeyK': 'ཀ', 'KeyL': 'ལ',
    'Semicolon': ';', 'Quote': '་',
    'KeyZ': 'ཟ', 'KeyX': 'ཟ', 'KeyC': 'ཅ', 'KeyV': 'བ', 'KeyB': 'བ',
    'KeyN': 'ན', 'KeyM': 'མ', 'Comma': ',', 'Period': '.', 'Slash': '/',
    'Space': ' ',
  },
};
