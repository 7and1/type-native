/**
 * Estonian Keyboard Layout - Nordic style with ÜÕ ÖÄ
 */

import type { KeyboardLayout } from '@/types/keyboard';

export const estonianLayout: KeyboardLayout = {
  id: 'et',
  name: 'Estonian',
  nativeName: 'Eesti',
  direction: 'ltr',
  fontFamily: 'system-ui, sans-serif',
  rows: [
    {
      keys: [
        { id: 'et-caron', label: 'ˇ', value: 'ˇ', shiftValue: '~', code: 'Backquote', type: 'character' },
        { id: 'et-1', label: '1', value: '1', shiftValue: '!', code: 'Digit1', type: 'character' },
        { id: 'et-2', label: '2', value: '2', shiftValue: '"', code: 'Digit2', type: 'character' },
        { id: 'et-3', label: '3', value: '3', shiftValue: '#', code: 'Digit3', type: 'character' },
        { id: 'et-4', label: '4', value: '4', shiftValue: '¤', code: 'Digit4', type: 'character' },
        { id: 'et-5', label: '5', value: '5', shiftValue: '%', code: 'Digit5', type: 'character' },
        { id: 'et-6', label: '6', value: '6', shiftValue: '&', code: 'Digit6', type: 'character' },
        { id: 'et-7', label: '7', value: '7', shiftValue: '/', code: 'Digit7', type: 'character' },
        { id: 'et-8', label: '8', value: '8', shiftValue: '(', code: 'Digit8', type: 'character' },
        { id: 'et-9', label: '9', value: '9', shiftValue: ')', code: 'Digit9', type: 'character' },
        { id: 'et-0', label: '0', value: '0', shiftValue: '=', code: 'Digit0', type: 'character' },
        { id: 'et-plus', label: '+', value: '+', shiftValue: '?', code: 'Minus', type: 'character' },
        { id: 'et-acute', label: '´', value: '´', shiftValue: '`', code: 'Equal', type: 'character' },
        { id: 'et-backspace', label: '⌫', value: 'Backspace', code: 'Backspace', type: 'action', width: 1.5 },
      ],
    },
    {
      keys: [
        { id: 'et-tab', label: 'Tab', value: 'Tab', code: 'Tab', type: 'action', width: 1.5 },
        { id: 'et-q', label: 'q', value: 'q', shiftValue: 'Q', code: 'KeyQ', type: 'character' },
        { id: 'et-w', label: 'w', value: 'w', shiftValue: 'W', code: 'KeyW', type: 'character' },
        { id: 'et-e', label: 'e', value: 'e', shiftValue: 'E', code: 'KeyE', type: 'character' },
        { id: 'et-r', label: 'r', value: 'r', shiftValue: 'R', code: 'KeyR', type: 'character' },
        { id: 'et-t', label: 't', value: 't', shiftValue: 'T', code: 'KeyT', type: 'character' },
        { id: 'et-y', label: 'y', value: 'y', shiftValue: 'Y', code: 'KeyY', type: 'character' },
        { id: 'et-u', label: 'u', value: 'u', shiftValue: 'U', code: 'KeyU', type: 'character' },
        { id: 'et-i', label: 'i', value: 'i', shiftValue: 'I', code: 'KeyI', type: 'character' },
        { id: 'et-o', label: 'o', value: 'o', shiftValue: 'O', code: 'KeyO', type: 'character' },
        { id: 'et-p', label: 'p', value: 'p', shiftValue: 'P', code: 'KeyP', type: 'character' },
        { id: 'et-uuml', label: 'ü', value: 'ü', shiftValue: 'Ü', code: 'BracketLeft', type: 'character' },
        { id: 'et-otilde', label: 'õ', value: 'õ', shiftValue: 'Õ', code: 'BracketRight', type: 'character' },
      ],
    },
    {
      keys: [
        { id: 'et-caps', label: 'Caps', value: 'CapsLock', code: 'CapsLock', type: 'modifier', width: 1.8 },
        { id: 'et-a', label: 'a', value: 'a', shiftValue: 'A', code: 'KeyA', type: 'character' },
        { id: 'et-s', label: 's', value: 's', shiftValue: 'S', code: 'KeyS', type: 'character' },
        { id: 'et-d', label: 'd', value: 'd', shiftValue: 'D', code: 'KeyD', type: 'character' },
        { id: 'et-f', label: 'f', value: 'f', shiftValue: 'F', code: 'KeyF', type: 'character' },
        { id: 'et-g', label: 'g', value: 'g', shiftValue: 'G', code: 'KeyG', type: 'character' },
        { id: 'et-h', label: 'h', value: 'h', shiftValue: 'H', code: 'KeyH', type: 'character' },
        { id: 'et-j', label: 'j', value: 'j', shiftValue: 'J', code: 'KeyJ', type: 'character' },
        { id: 'et-k', label: 'k', value: 'k', shiftValue: 'K', code: 'KeyK', type: 'character' },
        { id: 'et-l', label: 'l', value: 'l', shiftValue: 'L', code: 'KeyL', type: 'character' },
        { id: 'et-ouml', label: 'ö', value: 'ö', shiftValue: 'Ö', code: 'Semicolon', type: 'character' },
        { id: 'et-auml', label: 'ä', value: 'ä', shiftValue: 'Ä', code: 'Quote', type: 'character' },
        { id: 'et-enter', label: 'Enter', value: 'Enter', code: 'Enter', type: 'action', width: 1.8 },
      ],
    },
    {
      keys: [
        { id: 'et-shift-left', label: '⇧', value: 'Shift', code: 'ShiftLeft', type: 'modifier', width: 2.3 },
        { id: 'et-z', label: 'z', value: 'z', shiftValue: 'Z', code: 'KeyZ', type: 'character' },
        { id: 'et-x', label: 'x', value: 'x', shiftValue: 'X', code: 'KeyX', type: 'character' },
        { id: 'et-c', label: 'c', value: 'c', shiftValue: 'C', code: 'KeyC', type: 'character' },
        { id: 'et-v', label: 'v', value: 'v', shiftValue: 'V', code: 'KeyV', type: 'character' },
        { id: 'et-b', label: 'b', value: 'b', shiftValue: 'B', code: 'KeyB', type: 'character' },
        { id: 'et-n', label: 'n', value: 'n', shiftValue: 'N', code: 'KeyN', type: 'character' },
        { id: 'et-m', label: 'm', value: 'm', shiftValue: 'M', code: 'KeyM', type: 'character' },
        { id: 'et-comma', label: ',', value: ',', shiftValue: ';', code: 'Comma', type: 'character' },
        { id: 'et-period', label: '.', value: '.', shiftValue: ':', code: 'Period', type: 'character' },
        { id: 'et-minus', label: '-', value: '-', shiftValue: '_', code: 'Slash', type: 'character' },
        { id: 'et-shift-right', label: '⇧', value: 'Shift', code: 'ShiftRight', type: 'modifier', width: 2.3 },
      ],
    },
    {
      keys: [
        { id: 'et-space', label: 'Tühik', value: ' ', code: 'Space', type: 'space', width: 6 },
      ],
    },
  ],
  physicalKeyMap: {
    'Backquote': 'ˇ', 'Digit1': '1', 'Digit2': '2', 'Digit3': '3', 'Digit4': '4',
    'Digit5': '5', 'Digit6': '6', 'Digit7': '7', 'Digit8': '8', 'Digit9': '9',
    'Digit0': '0', 'Minus': '+', 'Equal': '´',
    'KeyQ': 'q', 'KeyW': 'w', 'KeyE': 'e', 'KeyR': 'r', 'KeyT': 't',
    'KeyY': 'y', 'KeyU': 'u', 'KeyI': 'i', 'KeyO': 'o', 'KeyP': 'p',
    'BracketLeft': 'ü', 'BracketRight': 'õ',
    'KeyA': 'a', 'KeyS': 's', 'KeyD': 'd', 'KeyF': 'f', 'KeyG': 'g',
    'KeyH': 'h', 'KeyJ': 'j', 'KeyK': 'k', 'KeyL': 'l',
    'Semicolon': 'ö', 'Quote': 'ä',
    'KeyZ': 'z', 'KeyX': 'x', 'KeyC': 'c', 'KeyV': 'v', 'KeyB': 'b',
    'KeyN': 'n', 'KeyM': 'm', 'Comma': ',', 'Period': '.', 'Slash': '-',
    'Space': ' ',
  },
};
