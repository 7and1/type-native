import type { KeyboardLayout } from '@/types/keyboard';

/**
 * Hindi Keyboard Layout
 * Language: Hindi (हिन्दी)
 * Script: Devanagari
 * Direction: LTR
 * Standard Inscript layout (Government of India standard)
 */
export const hindiLayout: KeyboardLayout = {
  id: 'hi',
  name: 'Hindi',
  nativeName: 'हिन्दी',
  direction: 'ltr',
  fontFamily: 'Noto Sans Devanagari, sans-serif',
  rows: [
    // Row 1: Numbers and symbols
    {
      keys: [
        { id: 'num1', label: '१', value: '१', shiftValue: '!', code: 'Digit1', type: 'character' },
        { id: 'num2', label: '२', value: '२', shiftValue: '@', code: 'Digit2', type: 'character' },
        { id: 'num3', label: '३', value: '३', shiftValue: '#', code: 'Digit3', type: 'character' },
        { id: 'num4', label: '४', value: '४', shiftValue: '$', code: 'Digit4', type: 'character' },
        { id: 'num5', label: '५', value: '५', shiftValue: '%', code: 'Digit5', type: 'character' },
        { id: 'num6', label: '६', value: '६', shiftValue: '^', code: 'Digit6', type: 'character' },
        { id: 'num7', label: '७', value: '७', shiftValue: '&', code: 'Digit7', type: 'character' },
        { id: 'num8', label: '८', value: '८', shiftValue: '*', code: 'Digit8', type: 'character' },
        { id: 'num9', label: '९', value: '९', shiftValue: '(', code: 'Digit9', type: 'character' },
        { id: 'num0', label: '०', value: '०', shiftValue: ')', code: 'Digit0', type: 'character' },
        { id: 'minus', label: '-', value: '-', shiftValue: '_', code: 'Minus', type: 'character' },
        { id: 'equal', label: 'ृ', value: 'ृ', shiftValue: 'ऋ', code: 'Equal', type: 'character' },
        { id: 'backspace', label: '⌫', value: 'Backspace', code: 'Backspace', type: 'action', width: 1.5 },
      ],
    },
    // Row 2: Consonants top row
    {
      keys: [
        { id: 'q', label: 'ौ', value: 'ौ', shiftValue: 'औ', code: 'KeyQ', type: 'character' },
        { id: 'w', label: 'ै', value: 'ै', shiftValue: 'ऐ', code: 'KeyW', type: 'character' },
        { id: 'e', label: 'ा', value: 'ा', shiftValue: 'आ', code: 'KeyE', type: 'character' },
        { id: 'r', label: 'ी', value: 'ी', shiftValue: 'ई', code: 'KeyR', type: 'character' },
        { id: 't', label: 'ू', value: 'ू', shiftValue: 'ऊ', code: 'KeyT', type: 'character' },
        { id: 'y', label: 'ब', value: 'ब', shiftValue: 'भ', code: 'KeyY', type: 'character' },
        { id: 'u', label: 'ह', value: 'ह', shiftValue: 'ङ', code: 'KeyU', type: 'character' },
        { id: 'i', label: 'ग', value: 'ग', shiftValue: 'घ', code: 'KeyI', type: 'character' },
        { id: 'o', label: 'द', value: 'द', shiftValue: 'ध', code: 'KeyO', type: 'character' },
        { id: 'p', label: 'ज', value: 'ज', shiftValue: 'झ', code: 'KeyP', type: 'character' },
        { id: 'bracket-left', label: 'ड', value: 'ड', shiftValue: 'ढ', code: 'BracketLeft', type: 'character' },
        { id: 'bracket-right', label: '़', value: '़', shiftValue: 'ञ', code: 'BracketRight', type: 'character' },
        { id: 'backslash', label: '\\', value: '\\', shiftValue: '|', code: 'Backslash', type: 'character' },
      ],
    },
    // Row 3: Consonants home row
    {
      keys: [
        { id: 'a', label: 'ो', value: 'ो', shiftValue: 'ओ', code: 'KeyA', type: 'character' },
        { id: 's', label: 'े', value: 'े', shiftValue: 'ए', code: 'KeyS', type: 'character' },
        { id: 'd', label: '्', value: '्', shiftValue: 'अ', code: 'KeyD', type: 'character' },
        { id: 'f', label: 'ि', value: 'ि', shiftValue: 'इ', code: 'KeyF', type: 'character' },
        { id: 'g', label: 'ु', value: 'ु', shiftValue: 'उ', code: 'KeyG', type: 'character' },
        { id: 'h', label: 'प', value: 'प', shiftValue: 'फ', code: 'KeyH', type: 'character' },
        { id: 'j', label: 'र', value: 'र', shiftValue: 'ऱ', code: 'KeyJ', type: 'character' },
        { id: 'k', label: 'क', value: 'क', shiftValue: 'ख', code: 'KeyK', type: 'character' },
        { id: 'l', label: 'त', value: 'त', shiftValue: 'थ', code: 'KeyL', type: 'character' },
        { id: 'semicolon', label: 'च', value: 'च', shiftValue: 'छ', code: 'Semicolon', type: 'character' },
        { id: 'quote', label: 'ट', value: 'ट', shiftValue: 'ठ', code: 'Quote', type: 'character' },
        { id: 'enter', label: '↵', value: 'Enter', code: 'Enter', type: 'action', width: 1.5 },
      ],
    },
    // Row 4: Consonants bottom row
    {
      keys: [
        { id: 'shift-left', label: '⇧', value: 'Shift', code: 'ShiftLeft', type: 'modifier', width: 1.5 },
        { id: 'z', label: 'ें', value: 'ें', shiftValue: 'ँ', code: 'KeyZ', type: 'character' },
        { id: 'x', label: 'ं', value: 'ं', shiftValue: 'ः', code: 'KeyX', type: 'character' },
        { id: 'c', label: 'म', value: 'म', shiftValue: 'ण', code: 'KeyC', type: 'character' },
        { id: 'v', label: 'न', value: 'न', shiftValue: 'ऩ', code: 'KeyV', type: 'character' },
        { id: 'b', label: 'व', value: 'व', shiftValue: 'ऴ', code: 'KeyB', type: 'character' },
        { id: 'n', label: 'ल', value: 'ल', shiftValue: 'ळ', code: 'KeyN', type: 'character' },
        { id: 'm', label: 'स', value: 'स', shiftValue: 'श', code: 'KeyM', type: 'character' },
        { id: 'comma', label: ',', value: ',', shiftValue: 'ष', code: 'Comma', type: 'character' },
        { id: 'period', label: '.', value: '.', shiftValue: '।', code: 'Period', type: 'character' },
        { id: 'slash', label: 'य', value: 'य', shiftValue: '?', code: 'Slash', type: 'character' },
        { id: 'shift-right', label: '⇧', value: 'Shift', code: 'ShiftRight', type: 'modifier', width: 1.5 },
      ],
    },
    // Row 5: Space bar
    {
      keys: [
        { id: 'space', label: 'Space', value: ' ', code: 'Space', type: 'space', width: 10 },
      ],
    },
  ],
  physicalKeyMap: {
    KeyQ: 'ौ', KeyW: 'ै', KeyE: 'ा', KeyR: 'ी', KeyT: 'ू',
    KeyY: 'ब', KeyU: 'ह', KeyI: 'ग', KeyO: 'द', KeyP: 'ज',
    KeyA: 'ो', KeyS: 'े', KeyD: '्', KeyF: 'ि', KeyG: 'ु',
    KeyH: 'प', KeyJ: 'र', KeyK: 'क', KeyL: 'त',
    KeyZ: 'ें', KeyX: 'ं', KeyC: 'म', KeyV: 'न', KeyB: 'व',
    KeyN: 'ल', KeyM: 'स',
  },
};
