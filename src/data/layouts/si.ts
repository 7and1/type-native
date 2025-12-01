/**
 * Sinhala Keyboard Layout (Sri Lanka)
 */

import type { KeyboardLayout } from '@/types/keyboard';

export const sinhalaLayout: KeyboardLayout = {
  id: 'si',
  name: 'Sinhala',
  nativeName: 'සිංහල',
  direction: 'ltr',
  fontFamily: 'system-ui, sans-serif',
  rows: [
    {
      keys: [
        { id: 'si-backtick', label: '`', value: '`', shiftValue: '්‍ර', code: 'Backquote', type: 'character' },
        { id: 'si-1', label: '1', value: '1', shiftValue: '!', code: 'Digit1', type: 'character' },
        { id: 'si-2', label: '2', value: '2', shiftValue: '@', code: 'Digit2', type: 'character' },
        { id: 'si-3', label: '3', value: '3', shiftValue: '#', code: 'Digit3', type: 'character' },
        { id: 'si-4', label: '4', value: '4', shiftValue: '$', code: 'Digit4', type: 'character' },
        { id: 'si-5', label: '5', value: '5', shiftValue: '%', code: 'Digit5', type: 'character' },
        { id: 'si-6', label: '6', value: '6', shiftValue: '^', code: 'Digit6', type: 'character' },
        { id: 'si-7', label: '7', value: '7', shiftValue: '&', code: 'Digit7', type: 'character' },
        { id: 'si-8', label: '8', value: '8', shiftValue: '*', code: 'Digit8', type: 'character' },
        { id: 'si-9', label: '9', value: '9', shiftValue: '(', code: 'Digit9', type: 'character' },
        { id: 'si-0', label: '0', value: '0', shiftValue: ')', code: 'Digit0', type: 'character' },
        { id: 'si-minus', label: '-', value: '-', shiftValue: '_', code: 'Minus', type: 'character' },
        { id: 'si-equal', label: '=', value: '=', shiftValue: '+', code: 'Equal', type: 'character' },
        { id: 'si-backspace', label: '⌫', value: 'Backspace', code: 'Backspace', type: 'action', width: 1.5 },
      ],
    },
    {
      keys: [
        { id: 'si-tab', label: 'Tab', value: 'Tab', code: 'Tab', type: 'action', width: 1.5 },
        { id: 'si-q', label: 'ූ', value: 'ූ', shiftValue: 'ු', code: 'KeyQ', type: 'character' },
        { id: 'si-w', label: 'ඖ', value: 'ඖ', shiftValue: 'ෞ', code: 'KeyW', type: 'character' },
        { id: 'si-e', label: 'ඇ', value: 'ඇ', shiftValue: 'ෑ', code: 'KeyE', type: 'character' },
        { id: 'si-r', label: 'ර', value: 'ර', shiftValue: 'ඍ', code: 'KeyR', type: 'character' },
        { id: 'si-t', label: 'එ', value: 'එ', shiftValue: 'ඒ', code: 'KeyT', type: 'character' },
        { id: 'si-y', label: 'හ', value: 'හ', shiftValue: 'ශ', code: 'KeyY', type: 'character' },
        { id: 'si-u', label: 'ම', value: 'ම', shiftValue: 'ඹ', code: 'KeyU', type: 'character' },
        { id: 'si-i', label: 'ස', value: 'ස', shiftValue: 'ෂ', code: 'KeyI', type: 'character' },
        { id: 'si-o', label: 'ද', value: 'ද', shiftValue: 'ධ', code: 'KeyO', type: 'character' },
        { id: 'si-p', label: 'ච', value: 'ච', shiftValue: 'ඡ', code: 'KeyP', type: 'character' },
        { id: 'si-bracketleft', label: 'ඤ', value: 'ඤ', shiftValue: 'ඥ', code: 'BracketLeft', type: 'character' },
        { id: 'si-bracketright', label: ';', value: ';', shiftValue: ':', code: 'BracketRight', type: 'character' },
      ],
    },
    {
      keys: [
        { id: 'si-caps', label: 'Caps', value: 'CapsLock', code: 'CapsLock', type: 'modifier', width: 1.8 },
        { id: 'si-a', label: '්', value: '්', shiftValue: 'අ', code: 'KeyA', type: 'character' },
        { id: 'si-s', label: 'ි', value: 'ි', shiftValue: 'ී', code: 'KeyS', type: 'character' },
        { id: 'si-d', label: 'ා', value: 'ා', shiftValue: 'ආ', code: 'KeyD', type: 'character' },
        { id: 'si-f', label: 'ෙ', value: 'ෙ', shiftValue: 'ේ', code: 'KeyF', type: 'character' },
        { id: 'si-g', label: 'ට', value: 'ට', shiftValue: 'ඨ', code: 'KeyG', type: 'character' },
        { id: 'si-h', label: 'ය', value: 'ය', shiftValue: '්‍ය', code: 'KeyH', type: 'character' },
        { id: 'si-j', label: 'ව', value: 'ව', shiftValue: 'ඪ', code: 'KeyJ', type: 'character' },
        { id: 'si-k', label: 'න', value: 'න', shiftValue: 'ණ', code: 'KeyK', type: 'character' },
        { id: 'si-l', label: 'ක', value: 'ක', shiftValue: 'ඛ', code: 'KeyL', type: 'character' },
        { id: 'si-semicolon', label: 'ත', value: 'ත', shiftValue: 'ථ', code: 'Semicolon', type: 'character' },
        { id: 'si-quote', label: '.', value: '.', shiftValue: ',', code: 'Quote', type: 'character' },
        { id: 'si-enter', label: 'Enter', value: 'Enter', code: 'Enter', type: 'action', width: 1.8 },
      ],
    },
    {
      keys: [
        { id: 'si-shift-left', label: '⇧', value: 'Shift', code: 'ShiftLeft', type: 'modifier', width: 2.3 },
        { id: 'si-z', label: 'ැ', value: 'ැ', shiftValue: 'ඈ', code: 'KeyZ', type: 'character' },
        { id: 'si-x', label: 'ං', value: 'ං', shiftValue: 'ඃ', code: 'KeyX', type: 'character' },
        { id: 'si-c', label: 'ජ', value: 'ජ', shiftValue: 'ඣ', code: 'KeyC', type: 'character' },
        { id: 'si-v', label: 'ඩ', value: 'ඩ', shiftValue: 'ඝ', code: 'KeyV', type: 'character' },
        { id: 'si-b', label: 'ඉ', value: 'ඉ', shiftValue: 'ඊ', code: 'KeyB', type: 'character' },
        { id: 'si-n', label: 'බ', value: 'බ', shiftValue: 'භ', code: 'KeyN', type: 'character' },
        { id: 'si-m', label: 'ප', value: 'ප', shiftValue: 'ඵ', code: 'KeyM', type: 'character' },
        { id: 'si-comma', label: 'ල', value: 'ල', shiftValue: 'ළ', code: 'Comma', type: 'character' },
        { id: 'si-period', label: 'ග', value: 'ග', shiftValue: 'ඟ', code: 'Period', type: 'character' },
        { id: 'si-slash', label: '/', value: '/', shiftValue: '?', code: 'Slash', type: 'character' },
        { id: 'si-shift-right', label: '⇧', value: 'Shift', code: 'ShiftRight', type: 'modifier', width: 2.3 },
      ],
    },
    {
      keys: [
        { id: 'si-space', label: 'Space', value: ' ', code: 'Space', type: 'space', width: 6 },
      ],
    },
  ],
  physicalKeyMap: {
    'Backquote': '`', 'Digit1': '1', 'Digit2': '2', 'Digit3': '3', 'Digit4': '4',
    'Digit5': '5', 'Digit6': '6', 'Digit7': '7', 'Digit8': '8', 'Digit9': '9',
    'Digit0': '0', 'Minus': '-', 'Equal': '=',
    'KeyQ': 'ූ', 'KeyW': 'ඖ', 'KeyE': 'ඇ', 'KeyR': 'ර', 'KeyT': 'එ',
    'KeyY': 'හ', 'KeyU': 'ම', 'KeyI': 'ස', 'KeyO': 'ද', 'KeyP': 'ච',
    'BracketLeft': 'ඤ', 'BracketRight': ';',
    'KeyA': '්', 'KeyS': 'ි', 'KeyD': 'ා', 'KeyF': 'ෙ', 'KeyG': 'ට',
    'KeyH': 'ය', 'KeyJ': 'ව', 'KeyK': 'න', 'KeyL': 'ක',
    'Semicolon': 'ත', 'Quote': '.',
    'KeyZ': 'ැ', 'KeyX': 'ං', 'KeyC': 'ජ', 'KeyV': 'ඩ', 'KeyB': 'ඉ',
    'KeyN': 'බ', 'KeyM': 'ප', 'Comma': 'ල', 'Period': 'ග', 'Slash': '/',
    'Space': ' ',
  },
};
