/**
 * Belgian Dutch Keyboard Layout - AZERTY variant
 */

import type { KeyboardLayout } from '@/types/keyboard';

export const dutchBelgiumLayout: KeyboardLayout = {
  id: 'nl-be',
  name: 'Dutch (Belgium)',
  nativeName: 'Nederlands (België)',
  direction: 'ltr',
  fontFamily: 'system-ui, sans-serif',
  rows: [
    {
      keys: [
        { id: 'nl-be-backtick', label: '²', value: '²', shiftValue: '³', code: 'Backquote', type: 'character' },
        { id: 'nl-be-1', label: '&', value: '&', shiftValue: '1', code: 'Digit1', type: 'character' },
        { id: 'nl-be-2', label: 'é', value: 'é', shiftValue: '2', code: 'Digit2', type: 'character' },
        { id: 'nl-be-3', label: '"', value: '"', shiftValue: '3', code: 'Digit3', type: 'character' },
        { id: 'nl-be-4', label: "'", value: "'", shiftValue: '4', code: 'Digit4', type: 'character' },
        { id: 'nl-be-5', label: '(', value: '(', shiftValue: '5', code: 'Digit5', type: 'character' },
        { id: 'nl-be-6', label: '§', value: '§', shiftValue: '6', code: 'Digit6', type: 'character' },
        { id: 'nl-be-7', label: 'è', value: 'è', shiftValue: '7', code: 'Digit7', type: 'character' },
        { id: 'nl-be-8', label: '!', value: '!', shiftValue: '8', code: 'Digit8', type: 'character' },
        { id: 'nl-be-9', label: 'ç', value: 'ç', shiftValue: '9', code: 'Digit9', type: 'character' },
        { id: 'nl-be-0', label: 'à', value: 'à', shiftValue: '0', code: 'Digit0', type: 'character' },
        { id: 'nl-be-minus', label: ')', value: ')', shiftValue: '°', code: 'Minus', type: 'character' },
        { id: 'nl-be-equal', label: '-', value: '-', shiftValue: '_', code: 'Equal', type: 'character' },
        { id: 'nl-be-backspace', label: '⌫', value: 'Backspace', code: 'Backspace', type: 'action', width: 1.5 },
      ],
    },
    {
      keys: [
        { id: 'nl-be-tab', label: 'Tab', value: 'Tab', code: 'Tab', type: 'action', width: 1.5 },
        { id: 'nl-be-a', label: 'A', value: 'a', shiftValue: 'A', code: 'KeyQ', type: 'character' },
        { id: 'nl-be-z', label: 'Z', value: 'z', shiftValue: 'Z', code: 'KeyW', type: 'character' },
        { id: 'nl-be-e', label: 'E', value: 'e', shiftValue: 'E', code: 'KeyE', type: 'character' },
        { id: 'nl-be-r', label: 'R', value: 'r', shiftValue: 'R', code: 'KeyR', type: 'character' },
        { id: 'nl-be-t', label: 'T', value: 't', shiftValue: 'T', code: 'KeyT', type: 'character' },
        { id: 'nl-be-y', label: 'Y', value: 'y', shiftValue: 'Y', code: 'KeyY', type: 'character' },
        { id: 'nl-be-u', label: 'U', value: 'u', shiftValue: 'U', code: 'KeyU', type: 'character' },
        { id: 'nl-be-i', label: 'I', value: 'i', shiftValue: 'I', code: 'KeyI', type: 'character' },
        { id: 'nl-be-o', label: 'O', value: 'o', shiftValue: 'O', code: 'KeyO', type: 'character' },
        { id: 'nl-be-p', label: 'P', value: 'p', shiftValue: 'P', code: 'KeyP', type: 'character' },
        { id: 'nl-be-bracketleft', label: '^', value: '^', shiftValue: '¨', code: 'BracketLeft', type: 'character' },
        { id: 'nl-be-bracketright', label: '$', value: '$', shiftValue: '*', code: 'BracketRight', type: 'character' },
      ],
    },
    {
      keys: [
        { id: 'nl-be-caps', label: 'Caps', value: 'CapsLock', code: 'CapsLock', type: 'modifier', width: 1.8 },
        { id: 'nl-be-q', label: 'Q', value: 'q', shiftValue: 'Q', code: 'KeyA', type: 'character' },
        { id: 'nl-be-s', label: 'S', value: 's', shiftValue: 'S', code: 'KeyS', type: 'character' },
        { id: 'nl-be-d', label: 'D', value: 'd', shiftValue: 'D', code: 'KeyD', type: 'character' },
        { id: 'nl-be-f', label: 'F', value: 'f', shiftValue: 'F', code: 'KeyF', type: 'character' },
        { id: 'nl-be-g', label: 'G', value: 'g', shiftValue: 'G', code: 'KeyG', type: 'character' },
        { id: 'nl-be-h', label: 'H', value: 'h', shiftValue: 'H', code: 'KeyH', type: 'character' },
        { id: 'nl-be-j', label: 'J', value: 'j', shiftValue: 'J', code: 'KeyJ', type: 'character' },
        { id: 'nl-be-k', label: 'K', value: 'k', shiftValue: 'K', code: 'KeyK', type: 'character' },
        { id: 'nl-be-l', label: 'L', value: 'l', shiftValue: 'L', code: 'KeyL', type: 'character' },
        { id: 'nl-be-semicolon', label: 'M', value: 'm', shiftValue: 'M', code: 'Semicolon', type: 'character' },
        { id: 'nl-be-quote', label: 'ù', value: 'ù', shiftValue: '%', code: 'Quote', type: 'character' },
        { id: 'nl-be-enter', label: 'Enter', value: 'Enter', code: 'Enter', type: 'action', width: 1.8 },
      ],
    },
    {
      keys: [
        { id: 'nl-be-shift-left', label: '⇧', value: 'Shift', code: 'ShiftLeft', type: 'modifier', width: 2.3 },
        { id: 'nl-be-w', label: 'W', value: 'w', shiftValue: 'W', code: 'KeyZ', type: 'character' },
        { id: 'nl-be-x', label: 'X', value: 'x', shiftValue: 'X', code: 'KeyX', type: 'character' },
        { id: 'nl-be-c', label: 'C', value: 'c', shiftValue: 'C', code: 'KeyC', type: 'character' },
        { id: 'nl-be-v', label: 'V', value: 'v', shiftValue: 'V', code: 'KeyV', type: 'character' },
        { id: 'nl-be-b', label: 'B', value: 'b', shiftValue: 'B', code: 'KeyB', type: 'character' },
        { id: 'nl-be-n', label: 'N', value: 'n', shiftValue: 'N', code: 'KeyN', type: 'character' },
        { id: 'nl-be-comma', label: ',', value: ',', shiftValue: '?', code: 'KeyM', type: 'character' },
        { id: 'nl-be-semicolonkey', label: ';', value: ';', shiftValue: '.', code: 'Comma', type: 'character' },
        { id: 'nl-be-colonkey', label: ':', value: ':', shiftValue: '/', code: 'Period', type: 'character' },
        { id: 'nl-be-slash', label: '=', value: '=', shiftValue: '+', code: 'Slash', type: 'character' },
        { id: 'nl-be-shift-right', label: '⇧', value: 'Shift', code: 'ShiftRight', type: 'modifier', width: 2.3 },
      ],
    },
    {
      keys: [
        { id: 'nl-be-space', label: 'Space', value: ' ', code: 'Space', type: 'space', width: 6 },
      ],
    },
  ],
  physicalKeyMap: {
    'Backquote': '²', 'Digit1': '&', 'Digit2': 'é', 'Digit3': '"', 'Digit4': "'",
    'Digit5': '(', 'Digit6': '§', 'Digit7': 'è', 'Digit8': '!', 'Digit9': 'ç',
    'Digit0': 'à', 'Minus': ')', 'Equal': '-',
    'KeyQ': 'a', 'KeyW': 'z', 'KeyE': 'e', 'KeyR': 'r', 'KeyT': 't',
    'KeyY': 'y', 'KeyU': 'u', 'KeyI': 'i', 'KeyO': 'o', 'KeyP': 'p',
    'BracketLeft': '^', 'BracketRight': '$',
    'KeyA': 'q', 'KeyS': 's', 'KeyD': 'd', 'KeyF': 'f', 'KeyG': 'g',
    'KeyH': 'h', 'KeyJ': 'j', 'KeyK': 'k', 'KeyL': 'l',
    'Semicolon': 'm', 'Quote': 'ù',
    'KeyZ': 'w', 'KeyX': 'x', 'KeyC': 'c', 'KeyV': 'v', 'KeyB': 'b',
    'KeyN': 'n', 'KeyM': ',', 'Comma': ';', 'Period': ':', 'Slash': '=',
    'Space': ' ',
  },
};
