/**
 * Belgian French Keyboard Layout - AZERTY variant
 */

import type { KeyboardLayout } from '@/types/keyboard';

export const frenchBelgiumLayout: KeyboardLayout = {
  id: 'fr-be',
  name: 'French (Belgium)',
  nativeName: 'Français (Belgique)',
  direction: 'ltr',
  fontFamily: 'system-ui, sans-serif',
  rows: [
    {
      keys: [
        { id: 'fr-be-backtick', label: '²', value: '²', shiftValue: '³', code: 'Backquote', type: 'character' },
        { id: 'fr-be-1', label: '&', value: '&', shiftValue: '1', code: 'Digit1', type: 'character' },
        { id: 'fr-be-2', label: 'é', value: 'é', shiftValue: '2', code: 'Digit2', type: 'character' },
        { id: 'fr-be-3', label: '"', value: '"', shiftValue: '3', code: 'Digit3', type: 'character' },
        { id: 'fr-be-4', label: "'", value: "'", shiftValue: '4', code: 'Digit4', type: 'character' },
        { id: 'fr-be-5', label: '(', value: '(', shiftValue: '5', code: 'Digit5', type: 'character' },
        { id: 'fr-be-6', label: '§', value: '§', shiftValue: '6', code: 'Digit6', type: 'character' },
        { id: 'fr-be-7', label: 'è', value: 'è', shiftValue: '7', code: 'Digit7', type: 'character' },
        { id: 'fr-be-8', label: '!', value: '!', shiftValue: '8', code: 'Digit8', type: 'character' },
        { id: 'fr-be-9', label: 'ç', value: 'ç', shiftValue: '9', code: 'Digit9', type: 'character' },
        { id: 'fr-be-0', label: 'à', value: 'à', shiftValue: '0', code: 'Digit0', type: 'character' },
        { id: 'fr-be-minus', label: ')', value: ')', shiftValue: '°', code: 'Minus', type: 'character' },
        { id: 'fr-be-equal', label: '-', value: '-', shiftValue: '_', code: 'Equal', type: 'character' },
        { id: 'fr-be-backspace', label: '⌫', value: 'Backspace', code: 'Backspace', type: 'action', width: 1.5 },
      ],
    },
    {
      keys: [
        { id: 'fr-be-tab', label: 'Tab', value: 'Tab', code: 'Tab', type: 'action', width: 1.5 },
        { id: 'fr-be-a', label: 'A', value: 'a', shiftValue: 'A', code: 'KeyQ', type: 'character' },
        { id: 'fr-be-z', label: 'Z', value: 'z', shiftValue: 'Z', code: 'KeyW', type: 'character' },
        { id: 'fr-be-e', label: 'E', value: 'e', shiftValue: 'E', code: 'KeyE', type: 'character' },
        { id: 'fr-be-r', label: 'R', value: 'r', shiftValue: 'R', code: 'KeyR', type: 'character' },
        { id: 'fr-be-t', label: 'T', value: 't', shiftValue: 'T', code: 'KeyT', type: 'character' },
        { id: 'fr-be-y', label: 'Y', value: 'y', shiftValue: 'Y', code: 'KeyY', type: 'character' },
        { id: 'fr-be-u', label: 'U', value: 'u', shiftValue: 'U', code: 'KeyU', type: 'character' },
        { id: 'fr-be-i', label: 'I', value: 'i', shiftValue: 'I', code: 'KeyI', type: 'character' },
        { id: 'fr-be-o', label: 'O', value: 'o', shiftValue: 'O', code: 'KeyO', type: 'character' },
        { id: 'fr-be-p', label: 'P', value: 'p', shiftValue: 'P', code: 'KeyP', type: 'character' },
        { id: 'fr-be-bracketleft', label: '^', value: '^', shiftValue: '¨', code: 'BracketLeft', type: 'character' },
        { id: 'fr-be-bracketright', label: '$', value: '$', shiftValue: '*', code: 'BracketRight', type: 'character' },
      ],
    },
    {
      keys: [
        { id: 'fr-be-caps', label: 'Caps', value: 'CapsLock', code: 'CapsLock', type: 'modifier', width: 1.8 },
        { id: 'fr-be-q', label: 'Q', value: 'q', shiftValue: 'Q', code: 'KeyA', type: 'character' },
        { id: 'fr-be-s', label: 'S', value: 's', shiftValue: 'S', code: 'KeyS', type: 'character' },
        { id: 'fr-be-d', label: 'D', value: 'd', shiftValue: 'D', code: 'KeyD', type: 'character' },
        { id: 'fr-be-f', label: 'F', value: 'f', shiftValue: 'F', code: 'KeyF', type: 'character' },
        { id: 'fr-be-g', label: 'G', value: 'g', shiftValue: 'G', code: 'KeyG', type: 'character' },
        { id: 'fr-be-h', label: 'H', value: 'h', shiftValue: 'H', code: 'KeyH', type: 'character' },
        { id: 'fr-be-j', label: 'J', value: 'j', shiftValue: 'J', code: 'KeyJ', type: 'character' },
        { id: 'fr-be-k', label: 'K', value: 'k', shiftValue: 'K', code: 'KeyK', type: 'character' },
        { id: 'fr-be-l', label: 'L', value: 'l', shiftValue: 'L', code: 'KeyL', type: 'character' },
        { id: 'fr-be-semicolon', label: 'M', value: 'm', shiftValue: 'M', code: 'Semicolon', type: 'character' },
        { id: 'fr-be-quote', label: 'ù', value: 'ù', shiftValue: '%', code: 'Quote', type: 'character' },
        { id: 'fr-be-enter', label: 'Enter', value: 'Enter', code: 'Enter', type: 'action', width: 1.8 },
      ],
    },
    {
      keys: [
        { id: 'fr-be-shift-left', label: '⇧', value: 'Shift', code: 'ShiftLeft', type: 'modifier', width: 2.3 },
        { id: 'fr-be-w', label: 'W', value: 'w', shiftValue: 'W', code: 'KeyZ', type: 'character' },
        { id: 'fr-be-x', label: 'X', value: 'x', shiftValue: 'X', code: 'KeyX', type: 'character' },
        { id: 'fr-be-c', label: 'C', value: 'c', shiftValue: 'C', code: 'KeyC', type: 'character' },
        { id: 'fr-be-v', label: 'V', value: 'v', shiftValue: 'V', code: 'KeyV', type: 'character' },
        { id: 'fr-be-b', label: 'B', value: 'b', shiftValue: 'B', code: 'KeyB', type: 'character' },
        { id: 'fr-be-n', label: 'N', value: 'n', shiftValue: 'N', code: 'KeyN', type: 'character' },
        { id: 'fr-be-comma', label: ',', value: ',', shiftValue: '?', code: 'KeyM', type: 'character' },
        { id: 'fr-be-semicolonkey', label: ';', value: ';', shiftValue: '.', code: 'Comma', type: 'character' },
        { id: 'fr-be-colonkey', label: ':', value: ':', shiftValue: '/', code: 'Period', type: 'character' },
        { id: 'fr-be-slash', label: '=', value: '=', shiftValue: '+', code: 'Slash', type: 'character' },
        { id: 'fr-be-shift-right', label: '⇧', value: 'Shift', code: 'ShiftRight', type: 'modifier', width: 2.3 },
      ],
    },
    {
      keys: [
        { id: 'fr-be-space', label: 'Space', value: ' ', code: 'Space', type: 'space', width: 6 },
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
