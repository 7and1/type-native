/**
 * Malayalam Keyboard Layout - Inscript-based
 */

import type { KeyboardLayout } from '@/types/keyboard';

export const malayalamLayout: KeyboardLayout = {
  id: 'ml',
  name: 'Malayalam',
  nativeName: 'മലയാളം',
  direction: 'ltr',
  fontFamily: 'system-ui, sans-serif',
  rows: [
    {
      keys: [
        { id: 'ml-backtick', label: 'ൊ', value: 'ൊ', shiftValue: 'ഒ', code: 'Backquote', type: 'character' },
        { id: 'ml-1', label: '1', value: '1', shiftValue: '!', code: 'Digit1', type: 'character' },
        { id: 'ml-2', label: '2', value: '2', shiftValue: '@', code: 'Digit2', type: 'character' },
        { id: 'ml-3', label: '3', value: '3', shiftValue: '#', code: 'Digit3', type: 'character' },
        { id: 'ml-4', label: '4', value: '4', shiftValue: '$', code: 'Digit4', type: 'character' },
        { id: 'ml-5', label: '5', value: '5', shiftValue: '%', code: 'Digit5', type: 'character' },
        { id: 'ml-6', label: '6', value: '6', shiftValue: '^', code: 'Digit6', type: 'character' },
        { id: 'ml-7', label: '7', value: '7', shiftValue: '&', code: 'Digit7', type: 'character' },
        { id: 'ml-8', label: '8', value: '8', shiftValue: '*', code: 'Digit8', type: 'character' },
        { id: 'ml-9', label: '9', value: '9', shiftValue: '(', code: 'Digit9', type: 'character' },
        { id: 'ml-0', label: '0', value: '0', shiftValue: ')', code: 'Digit0', type: 'character' },
        { id: 'ml-minus', label: '-', value: '-', shiftValue: '_', code: 'Minus', type: 'character' },
        { id: 'ml-equal', label: 'ൃ', value: 'ൃ', shiftValue: 'ഋ', code: 'Equal', type: 'character' },
        { id: 'ml-backspace', label: '⌫', value: 'Backspace', code: 'Backspace', type: 'action', width: 1.5 },
      ],
    },
    {
      keys: [
        { id: 'ml-tab', label: 'Tab', value: 'Tab', code: 'Tab', type: 'action', width: 1.5 },
        { id: 'ml-q', label: 'ൌ', value: 'ൌ', shiftValue: 'ഔ', code: 'KeyQ', type: 'character' },
        { id: 'ml-w', label: 'ൈ', value: 'ൈ', shiftValue: 'ഐ', code: 'KeyW', type: 'character' },
        { id: 'ml-e', label: 'ാ', value: 'ാ', shiftValue: 'ആ', code: 'KeyE', type: 'character' },
        { id: 'ml-r', label: 'ീ', value: 'ീ', shiftValue: 'ഈ', code: 'KeyR', type: 'character' },
        { id: 'ml-t', label: 'ൂ', value: 'ൂ', shiftValue: 'ഊ', code: 'KeyT', type: 'character' },
        { id: 'ml-y', label: 'ബ', value: 'ബ', shiftValue: 'ഭ', code: 'KeyY', type: 'character' },
        { id: 'ml-u', label: 'ഹ', value: 'ഹ', shiftValue: 'ങ', code: 'KeyU', type: 'character' },
        { id: 'ml-i', label: 'ഗ', value: 'ഗ', shiftValue: 'ഘ', code: 'KeyI', type: 'character' },
        { id: 'ml-o', label: 'ദ', value: 'ദ', shiftValue: 'ധ', code: 'KeyO', type: 'character' },
        { id: 'ml-p', label: 'ജ', value: 'ജ', shiftValue: 'ഝ', code: 'KeyP', type: 'character' },
        { id: 'ml-bracketleft', label: 'ഡ', value: 'ഡ', shiftValue: 'ഢ', code: 'BracketLeft', type: 'character' },
        { id: 'ml-bracketright', label: 'ഞ', value: 'ഞ', shiftValue: 'ഞ', code: 'BracketRight', type: 'character' },
      ],
    },
    {
      keys: [
        { id: 'ml-caps', label: 'Caps', value: 'CapsLock', code: 'CapsLock', type: 'modifier', width: 1.8 },
        { id: 'ml-a', label: 'ോ', value: 'ോ', shiftValue: 'ഓ', code: 'KeyA', type: 'character' },
        { id: 'ml-s', label: 'േ', value: 'േ', shiftValue: 'ഏ', code: 'KeyS', type: 'character' },
        { id: 'ml-d', label: '്', value: '്', shiftValue: 'അ', code: 'KeyD', type: 'character' },
        { id: 'ml-f', label: 'ി', value: 'ി', shiftValue: 'ഇ', code: 'KeyF', type: 'character' },
        { id: 'ml-g', label: 'ു', value: 'ു', shiftValue: 'ഉ', code: 'KeyG', type: 'character' },
        { id: 'ml-h', label: 'പ', value: 'പ', shiftValue: 'ഫ', code: 'KeyH', type: 'character' },
        { id: 'ml-j', label: 'ര', value: 'ര', shiftValue: 'റ', code: 'KeyJ', type: 'character' },
        { id: 'ml-k', label: 'ക', value: 'ക', shiftValue: 'ഖ', code: 'KeyK', type: 'character' },
        { id: 'ml-l', label: 'ത', value: 'ത', shiftValue: 'ഥ', code: 'KeyL', type: 'character' },
        { id: 'ml-semicolon', label: 'ച', value: 'ച', shiftValue: 'ഛ', code: 'Semicolon', type: 'character' },
        { id: 'ml-quote', label: 'ട', value: 'ട', shiftValue: 'ഠ', code: 'Quote', type: 'character' },
        { id: 'ml-enter', label: 'Enter', value: 'Enter', code: 'Enter', type: 'action', width: 1.8 },
      ],
    },
    {
      keys: [
        { id: 'ml-shift-left', label: '⇧', value: 'Shift', code: 'ShiftLeft', type: 'modifier', width: 2.3 },
        { id: 'ml-z', label: 'െ', value: 'െ', shiftValue: 'എ', code: 'KeyZ', type: 'character' },
        { id: 'ml-x', label: 'ം', value: 'ം', shiftValue: 'ം', code: 'KeyX', type: 'character' },
        { id: 'ml-c', label: 'മ', value: 'മ', shiftValue: 'ണ', code: 'KeyC', type: 'character' },
        { id: 'ml-v', label: 'ന', value: 'ന', shiftValue: 'ന', code: 'KeyV', type: 'character' },
        { id: 'ml-b', label: 'വ', value: 'വ', shiftValue: 'വ', code: 'KeyB', type: 'character' },
        { id: 'ml-n', label: 'ല', value: 'ല', shiftValue: 'ള', code: 'KeyN', type: 'character' },
        { id: 'ml-m', label: 'സ', value: 'സ', shiftValue: 'ശ', code: 'KeyM', type: 'character' },
        { id: 'ml-comma', label: ',', value: ',', shiftValue: 'ഷ', code: 'Comma', type: 'character' },
        { id: 'ml-period', label: '.', value: '.', shiftValue: '।', code: 'Period', type: 'character' },
        { id: 'ml-slash', label: 'യ', value: 'യ', shiftValue: 'യ', code: 'Slash', type: 'character' },
        { id: 'ml-shift-right', label: '⇧', value: 'Shift', code: 'ShiftRight', type: 'modifier', width: 2.3 },
      ],
    },
    {
      keys: [
        { id: 'ml-space', label: 'Space', value: ' ', code: 'Space', type: 'space', width: 6 },
      ],
    },
  ],
  physicalKeyMap: {
    'Backquote': 'ൊ', 'Digit1': '1', 'Digit2': '2', 'Digit3': '3', 'Digit4': '4',
    'Digit5': '5', 'Digit6': '6', 'Digit7': '7', 'Digit8': '8', 'Digit9': '9',
    'Digit0': '0', 'Minus': '-', 'Equal': 'ൃ',
    'KeyQ': 'ൌ', 'KeyW': 'ൈ', 'KeyE': 'ാ', 'KeyR': 'ീ', 'KeyT': 'ൂ',
    'KeyY': 'ബ', 'KeyU': 'ഹ', 'KeyI': 'ഗ', 'KeyO': 'ദ', 'KeyP': 'ജ',
    'BracketLeft': 'ഡ', 'BracketRight': 'ഞ',
    'KeyA': 'ോ', 'KeyS': 'േ', 'KeyD': '്', 'KeyF': 'ി', 'KeyG': 'ു',
    'KeyH': 'പ', 'KeyJ': 'ര', 'KeyK': 'ക', 'KeyL': 'ത',
    'Semicolon': 'ച', 'Quote': 'ട',
    'KeyZ': 'െ', 'KeyX': 'ം', 'KeyC': 'മ', 'KeyV': 'ന', 'KeyB': 'വ',
    'KeyN': 'ല', 'KeyM': 'സ', 'Comma': ',', 'Period': '.', 'Slash': 'യ',
    'Space': ' ',
  },
};
