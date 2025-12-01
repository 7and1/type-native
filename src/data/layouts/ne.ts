/**
 * Nepali Keyboard Layout - Devanagari-based (similar to Hindi Inscript)
 */

import type { KeyboardLayout } from '@/types/keyboard';

export const nepaliLayout: KeyboardLayout = {
  id: 'ne',
  name: 'Nepali',
  nativeName: 'नेपाली',
  direction: 'ltr',
  fontFamily: 'system-ui, sans-serif',
  rows: [
    {
      keys: [
        { id: 'ne-backtick', label: '़', value: '़', shiftValue: 'ऍ', code: 'Backquote', type: 'character' },
        { id: 'ne-1', label: '१', value: '१', shiftValue: '!', code: 'Digit1', type: 'character' },
        { id: 'ne-2', label: '२', value: '२', shiftValue: '@', code: 'Digit2', type: 'character' },
        { id: 'ne-3', label: '३', value: '३', shiftValue: '#', code: 'Digit3', type: 'character' },
        { id: 'ne-4', label: '४', value: '४', shiftValue: '$', code: 'Digit4', type: 'character' },
        { id: 'ne-5', label: '५', value: '५', shiftValue: '%', code: 'Digit5', type: 'character' },
        { id: 'ne-6', label: '६', value: '६', shiftValue: '^', code: 'Digit6', type: 'character' },
        { id: 'ne-7', label: '७', value: '७', shiftValue: '&', code: 'Digit7', type: 'character' },
        { id: 'ne-8', label: '८', value: '८', shiftValue: '*', code: 'Digit8', type: 'character' },
        { id: 'ne-9', label: '९', value: '९', shiftValue: '(', code: 'Digit9', type: 'character' },
        { id: 'ne-0', label: '०', value: '०', shiftValue: ')', code: 'Digit0', type: 'character' },
        { id: 'ne-minus', label: '-', value: '-', shiftValue: 'ः', code: 'Minus', type: 'character' },
        { id: 'ne-equal', label: 'ृ', value: 'ृ', shiftValue: 'ऋ', code: 'Equal', type: 'character' },
        { id: 'ne-backspace', label: '⌫', value: 'Backspace', code: 'Backspace', type: 'action', width: 1.5 },
      ],
    },
    {
      keys: [
        { id: 'ne-tab', label: 'Tab', value: 'Tab', code: 'Tab', type: 'action', width: 1.5 },
        { id: 'ne-q', label: 'ौ', value: 'ौ', shiftValue: 'औ', code: 'KeyQ', type: 'character' },
        { id: 'ne-w', label: 'ै', value: 'ै', shiftValue: 'ऐ', code: 'KeyW', type: 'character' },
        { id: 'ne-e', label: 'ा', value: 'ा', shiftValue: 'आ', code: 'KeyE', type: 'character' },
        { id: 'ne-r', label: 'ी', value: 'ी', shiftValue: 'ई', code: 'KeyR', type: 'character' },
        { id: 'ne-t', label: 'ू', value: 'ू', shiftValue: 'ऊ', code: 'KeyT', type: 'character' },
        { id: 'ne-y', label: 'ब', value: 'ब', shiftValue: 'भ', code: 'KeyY', type: 'character' },
        { id: 'ne-u', label: 'ह', value: 'ह', shiftValue: 'ङ', code: 'KeyU', type: 'character' },
        { id: 'ne-i', label: 'ग', value: 'ग', shiftValue: 'घ', code: 'KeyI', type: 'character' },
        { id: 'ne-o', label: 'द', value: 'द', shiftValue: 'ध', code: 'KeyO', type: 'character' },
        { id: 'ne-p', label: 'ज', value: 'ज', shiftValue: 'झ', code: 'KeyP', type: 'character' },
        { id: 'ne-bracketleft', label: 'ड', value: 'ड', shiftValue: 'ढ', code: 'BracketLeft', type: 'character' },
        { id: 'ne-bracketright', label: '़', value: '़', shiftValue: 'ञ', code: 'BracketRight', type: 'character' },
      ],
    },
    {
      keys: [
        { id: 'ne-caps', label: 'Caps', value: 'CapsLock', code: 'CapsLock', type: 'modifier', width: 1.8 },
        { id: 'ne-a', label: 'ो', value: 'ो', shiftValue: 'ओ', code: 'KeyA', type: 'character' },
        { id: 'ne-s', label: 'े', value: 'े', shiftValue: 'ए', code: 'KeyS', type: 'character' },
        { id: 'ne-d', label: '्', value: '्', shiftValue: 'अ', code: 'KeyD', type: 'character' },
        { id: 'ne-f', label: 'ि', value: 'ि', shiftValue: 'इ', code: 'KeyF', type: 'character' },
        { id: 'ne-g', label: 'ु', value: 'ु', shiftValue: 'उ', code: 'KeyG', type: 'character' },
        { id: 'ne-h', label: 'प', value: 'प', shiftValue: 'फ', code: 'KeyH', type: 'character' },
        { id: 'ne-j', label: 'र', value: 'र', shiftValue: 'ऱ', code: 'KeyJ', type: 'character' },
        { id: 'ne-k', label: 'क', value: 'क', shiftValue: 'ख', code: 'KeyK', type: 'character' },
        { id: 'ne-l', label: 'त', value: 'त', shiftValue: 'थ', code: 'KeyL', type: 'character' },
        { id: 'ne-semicolon', label: 'च', value: 'च', shiftValue: 'छ', code: 'Semicolon', type: 'character' },
        { id: 'ne-quote', label: 'ट', value: 'ट', shiftValue: 'ठ', code: 'Quote', type: 'character' },
        { id: 'ne-enter', label: 'Enter', value: 'Enter', code: 'Enter', type: 'action', width: 1.8 },
      ],
    },
    {
      keys: [
        { id: 'ne-shift-left', label: '⇧', value: 'Shift', code: 'ShiftLeft', type: 'modifier', width: 2.3 },
        { id: 'ne-z', label: 'े', value: 'े', shiftValue: 'ऎ', code: 'KeyZ', type: 'character' },
        { id: 'ne-x', label: 'ं', value: 'ं', shiftValue: 'ँ', code: 'KeyX', type: 'character' },
        { id: 'ne-c', label: 'म', value: 'म', shiftValue: 'ण', code: 'KeyC', type: 'character' },
        { id: 'ne-v', label: 'न', value: 'न', shiftValue: 'ऩ', code: 'KeyV', type: 'character' },
        { id: 'ne-b', label: 'व', value: 'व', shiftValue: 'ऑ', code: 'KeyB', type: 'character' },
        { id: 'ne-n', label: 'ल', value: 'ल', shiftValue: 'ळ', code: 'KeyN', type: 'character' },
        { id: 'ne-m', label: 'स', value: 'स', shiftValue: 'श', code: 'KeyM', type: 'character' },
        { id: 'ne-comma', label: ',', value: ',', shiftValue: 'ष', code: 'Comma', type: 'character' },
        { id: 'ne-period', label: '.', value: '.', shiftValue: '।', code: 'Period', type: 'character' },
        { id: 'ne-slash', label: 'य', value: 'य', shiftValue: 'य़', code: 'Slash', type: 'character' },
        { id: 'ne-shift-right', label: '⇧', value: 'Shift', code: 'ShiftRight', type: 'modifier', width: 2.3 },
      ],
    },
    {
      keys: [
        { id: 'ne-space', label: 'Space', value: ' ', code: 'Space', type: 'space', width: 6 },
      ],
    },
  ],
  physicalKeyMap: {
    'Backquote': '़', 'Digit1': '१', 'Digit2': '२', 'Digit3': '३', 'Digit4': '४',
    'Digit5': '५', 'Digit6': '६', 'Digit7': '७', 'Digit8': '८', 'Digit9': '९',
    'Digit0': '०', 'Minus': '-', 'Equal': 'ृ',
    'KeyQ': 'ौ', 'KeyW': 'ै', 'KeyE': 'ा', 'KeyR': 'ी', 'KeyT': 'ू',
    'KeyY': 'ब', 'KeyU': 'ह', 'KeyI': 'ग', 'KeyO': 'द', 'KeyP': 'ज',
    'BracketLeft': 'ड', 'BracketRight': '़',
    'KeyA': 'ो', 'KeyS': 'े', 'KeyD': '्', 'KeyF': 'ि', 'KeyG': 'ु',
    'KeyH': 'प', 'KeyJ': 'र', 'KeyK': 'क', 'KeyL': 'त',
    'Semicolon': 'च', 'Quote': 'ट',
    'KeyZ': 'े', 'KeyX': 'ं', 'KeyC': 'म', 'KeyV': 'न', 'KeyB': 'व',
    'KeyN': 'ल', 'KeyM': 'स', 'Comma': ',', 'Period': '.', 'Slash': 'य',
    'Space': ' ',
  },
};
