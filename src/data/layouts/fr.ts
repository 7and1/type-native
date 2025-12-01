/**
 * French Keyboard Layout - AZERTY Standard
 */

import type { KeyboardLayout } from '@/types/keyboard';

export const frenchLayout: KeyboardLayout = {
  id: 'fr',
  name: 'French',
  nativeName: 'Français',
  direction: 'ltr',
  fontFamily: 'system-ui, sans-serif',
  rows: [
    {
      keys: [
        { id: 'fr-sup2', label: '²', value: '²', shiftValue: '³', code: 'Backquote', type: 'character' },
        { id: 'fr-amp', label: '&', value: '&', shiftValue: '1', code: 'Digit1', type: 'character' },
        { id: 'fr-eacute', label: 'é', value: 'é', shiftValue: '2', code: 'Digit2', type: 'character' },
        { id: 'fr-dquote', label: '"', value: '"', shiftValue: '3', code: 'Digit3', type: 'character' },
        { id: 'fr-squote', label: "'", value: "'", shiftValue: '4', code: 'Digit4', type: 'character' },
        { id: 'fr-lparen', label: '(', value: '(', shiftValue: '5', code: 'Digit5', type: 'character' },
        { id: 'fr-minus', label: '-', value: '-', shiftValue: '6', code: 'Digit6', type: 'character' },
        { id: 'fr-egrave', label: 'è', value: 'è', shiftValue: '7', code: 'Digit7', type: 'character' },
        { id: 'fr-underscore', label: '_', value: '_', shiftValue: '8', code: 'Digit8', type: 'character' },
        { id: 'fr-ccedil', label: 'ç', value: 'ç', shiftValue: '9', code: 'Digit9', type: 'character' },
        { id: 'fr-agrave', label: 'à', value: 'à', shiftValue: '0', code: 'Digit0', type: 'character' },
        { id: 'fr-rparen', label: ')', value: ')', shiftValue: '°', code: 'Minus', type: 'character' },
        { id: 'fr-equal', label: '=', value: '=', shiftValue: '+', code: 'Equal', type: 'character' },
        { id: 'fr-backspace', label: '⌫', value: 'Backspace', code: 'Backspace', type: 'action', width: 1.5 },
      ],
    },
    {
      keys: [
        { id: 'fr-tab', label: 'Tab', value: 'Tab', code: 'Tab', type: 'action', width: 1.5 },
        { id: 'fr-a', label: 'a', value: 'a', shiftValue: 'A', code: 'KeyQ', type: 'character' },
        { id: 'fr-z', label: 'z', value: 'z', shiftValue: 'Z', code: 'KeyW', type: 'character' },
        { id: 'fr-e', label: 'e', value: 'e', shiftValue: 'E', code: 'KeyE', type: 'character' },
        { id: 'fr-r', label: 'r', value: 'r', shiftValue: 'R', code: 'KeyR', type: 'character' },
        { id: 'fr-t', label: 't', value: 't', shiftValue: 'T', code: 'KeyT', type: 'character' },
        { id: 'fr-y', label: 'y', value: 'y', shiftValue: 'Y', code: 'KeyY', type: 'character' },
        { id: 'fr-u', label: 'u', value: 'u', shiftValue: 'U', code: 'KeyU', type: 'character' },
        { id: 'fr-i', label: 'i', value: 'i', shiftValue: 'I', code: 'KeyI', type: 'character' },
        { id: 'fr-o', label: 'o', value: 'o', shiftValue: 'O', code: 'KeyO', type: 'character' },
        { id: 'fr-p', label: 'p', value: 'p', shiftValue: 'P', code: 'KeyP', type: 'character' },
        { id: 'fr-caret', label: '^', value: '^', shiftValue: '¨', code: 'BracketLeft', type: 'character' },
        { id: 'fr-dollar', label: '$', value: '$', shiftValue: '£', code: 'BracketRight', type: 'character' },
      ],
    },
    {
      keys: [
        { id: 'fr-caps', label: 'Caps', value: 'CapsLock', code: 'CapsLock', type: 'modifier', width: 1.8 },
        { id: 'fr-q', label: 'q', value: 'q', shiftValue: 'Q', code: 'KeyA', type: 'character' },
        { id: 'fr-s', label: 's', value: 's', shiftValue: 'S', code: 'KeyS', type: 'character' },
        { id: 'fr-d', label: 'd', value: 'd', shiftValue: 'D', code: 'KeyD', type: 'character' },
        { id: 'fr-f', label: 'f', value: 'f', shiftValue: 'F', code: 'KeyF', type: 'character' },
        { id: 'fr-g', label: 'g', value: 'g', shiftValue: 'G', code: 'KeyG', type: 'character' },
        { id: 'fr-h', label: 'h', value: 'h', shiftValue: 'H', code: 'KeyH', type: 'character' },
        { id: 'fr-j', label: 'j', value: 'j', shiftValue: 'J', code: 'KeyJ', type: 'character' },
        { id: 'fr-k', label: 'k', value: 'k', shiftValue: 'K', code: 'KeyK', type: 'character' },
        { id: 'fr-l', label: 'l', value: 'l', shiftValue: 'L', code: 'KeyL', type: 'character' },
        { id: 'fr-m', label: 'm', value: 'm', shiftValue: 'M', code: 'Semicolon', type: 'character' },
        { id: 'fr-ugrave', label: 'ù', value: 'ù', shiftValue: '%', code: 'Quote', type: 'character' },
        { id: 'fr-enter', label: 'Entrée', value: 'Enter', code: 'Enter', type: 'action', width: 1.8 },
      ],
    },
    {
      keys: [
        { id: 'fr-shift-left', label: '⇧', value: 'Shift', code: 'ShiftLeft', type: 'modifier', width: 2.3 },
        { id: 'fr-w', label: 'w', value: 'w', shiftValue: 'W', code: 'KeyZ', type: 'character' },
        { id: 'fr-x', label: 'x', value: 'x', shiftValue: 'X', code: 'KeyX', type: 'character' },
        { id: 'fr-c', label: 'c', value: 'c', shiftValue: 'C', code: 'KeyC', type: 'character' },
        { id: 'fr-v', label: 'v', value: 'v', shiftValue: 'V', code: 'KeyV', type: 'character' },
        { id: 'fr-b', label: 'b', value: 'b', shiftValue: 'B', code: 'KeyB', type: 'character' },
        { id: 'fr-n', label: 'n', value: 'n', shiftValue: 'N', code: 'KeyN', type: 'character' },
        { id: 'fr-comma', label: ',', value: ',', shiftValue: '?', code: 'KeyM', type: 'character' },
        { id: 'fr-semicolon', label: ';', value: ';', shiftValue: '.', code: 'Comma', type: 'character' },
        { id: 'fr-colon', label: ':', value: ':', shiftValue: '/', code: 'Period', type: 'character' },
        { id: 'fr-exclam', label: '!', value: '!', shiftValue: '§', code: 'Slash', type: 'character' },
        { id: 'fr-shift-right', label: '⇧', value: 'Shift', code: 'ShiftRight', type: 'modifier', width: 2.3 },
      ],
    },
    {
      keys: [
        { id: 'fr-space', label: 'Espace', value: ' ', code: 'Space', type: 'space', width: 6 },
      ],
    },
  ],
  physicalKeyMap: {
    'Backquote': '²', 'Digit1': '&', 'Digit2': 'é', 'Digit3': '"', 'Digit4': "'",
    'Digit5': '(', 'Digit6': '-', 'Digit7': 'è', 'Digit8': '_', 'Digit9': 'ç',
    'Digit0': 'à', 'Minus': ')', 'Equal': '=',
    'KeyQ': 'a', 'KeyW': 'z', 'KeyE': 'e', 'KeyR': 'r', 'KeyT': 't',
    'KeyY': 'y', 'KeyU': 'u', 'KeyI': 'i', 'KeyO': 'o', 'KeyP': 'p',
    'BracketLeft': '^', 'BracketRight': '$',
    'KeyA': 'q', 'KeyS': 's', 'KeyD': 'd', 'KeyF': 'f', 'KeyG': 'g',
    'KeyH': 'h', 'KeyJ': 'j', 'KeyK': 'k', 'KeyL': 'l',
    'Semicolon': 'm', 'Quote': 'ù',
    'KeyZ': 'w', 'KeyX': 'x', 'KeyC': 'c', 'KeyV': 'v', 'KeyB': 'b',
    'KeyN': 'n', 'KeyM': ',', 'Comma': ';', 'Period': ':', 'Slash': '!',
    'Space': ' ',
  },
};
