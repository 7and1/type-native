import type { KeyboardLayout } from '@/types/keyboard';

/**
 * Tamil Keyboard Layout - Inscript
 * Tamil script (தமிழ் அரிச்சுவடி) is one of the oldest writing systems
 * Abugida script with 12 vowels, 18 consonants, and one special character (ஃ)
 * Includes Grantha letters for Sanskrit loanwords
 */
export const tamilLayout: KeyboardLayout = {
  id: 'ta',
  name: 'Tamil',
  nativeName: 'தமிழ்',
  direction: 'ltr',
  fontFamily: 'Noto Sans Tamil, sans-serif',
  rows: [
    // Row 1: Number row (Tamil numerals)
    {
      keys: [
        { id: 'ta-aytham', label: 'ஃ', value: 'ஃ', shiftValue: '', code: 'Backquote', type: 'character' },
        { id: 'ta-1', label: '௧', value: '௧', shiftValue: '1', code: 'Digit1', type: 'character' },
        { id: 'ta-2', label: '௨', value: '௨', shiftValue: '2', code: 'Digit2', type: 'character' },
        { id: 'ta-3', label: '௩', value: '௩', shiftValue: '3', code: 'Digit3', type: 'character' },
        { id: 'ta-4', label: '௪', value: '௪', shiftValue: '4', code: 'Digit4', type: 'character' },
        { id: 'ta-5', label: '௫', value: '௫', shiftValue: '5', code: 'Digit5', type: 'character' },
        { id: 'ta-6', label: '௬', value: '௬', shiftValue: '6', code: 'Digit6', type: 'character' },
        { id: 'ta-7', label: '௭', value: '௭', shiftValue: '7', code: 'Digit7', type: 'character' },
        { id: 'ta-8', label: '௮', value: '௮', shiftValue: '8', code: 'Digit8', type: 'character' },
        { id: 'ta-9', label: '௯', value: '௯', shiftValue: '9', code: 'Digit9', type: 'character' },
        { id: 'ta-0', label: '௦', value: '௦', shiftValue: '0', code: 'Digit0', type: 'character' },
        { id: 'ta-minus', label: '-', value: '-', shiftValue: 'ஃ', code: 'Minus', type: 'character' },
        { id: 'ta-rr', label: 'ற', value: 'ற', shiftValue: 'ṛ', code: 'Equal', type: 'character' },
        { id: 'ta-backspace', label: '⌫', value: 'Backspace', code: 'Backspace', type: 'action', width: 1.5 },
      ],
    },
    // Row 2: Top letter row - Vowel signs
    {
      keys: [
        { id: 'ta-au', label: 'ௌ', value: 'ௌ', shiftValue: 'ஔ', code: 'KeyQ', type: 'character' },
        { id: 'ta-ai', label: 'ை', value: 'ை', shiftValue: 'ஐ', code: 'KeyW', type: 'character' },
        { id: 'ta-aa', label: 'ா', value: 'ா', shiftValue: 'ஆ', code: 'KeyE', type: 'character' },
        { id: 'ta-ii', label: 'ீ', value: 'ீ', shiftValue: 'ஈ', code: 'KeyR', type: 'character' },
        { id: 'ta-uu', label: 'ூ', value: 'ூ', shiftValue: 'ஊ', code: 'KeyT', type: 'character' },
        { id: 'ta-pa', label: 'ப', value: 'ப', shiftValue: 'ங', code: 'KeyY', type: 'character' },
        { id: 'ta-ha', label: 'ஹ', value: 'ஹ', shiftValue: 'க', code: 'KeyU', type: 'character' },
        { id: 'ta-ka', label: 'க', value: 'க', shiftValue: 'ஞ', code: 'KeyI', type: 'character' },
        { id: 'ta-ta', label: 'த', value: 'த', shiftValue: 'ச', code: 'KeyO', type: 'character' },
        { id: 'ta-cha', label: 'ச', value: 'ச', shiftValue: 'ட', code: 'KeyP', type: 'character' },
        { id: 'ta-tta', label: 'ட', value: 'ட', shiftValue: 'ண', code: 'BracketLeft', type: 'character' },
        { id: 'ta-e', label: 'ெ', value: 'ெ', shiftValue: 'எ', code: 'BracketRight', type: 'character' },
        { id: 'ta-nya', label: 'ஞ', value: 'ஞ', shiftValue: 'ங', code: 'Backslash', type: 'character' },
      ],
    },
    // Row 3: Home row - More consonants
    {
      keys: [
        { id: 'ta-o', label: 'ோ', value: 'ோ', shiftValue: 'ஓ', code: 'KeyA', type: 'character' },
        { id: 'ta-ea', label: 'ே', value: 'ே', shiftValue: 'ஏ', code: 'KeyS', type: 'character' },
        { id: 'ta-pulli', label: '்', value: '்', shiftValue: 'அ', code: 'KeyD', type: 'character' },
        { id: 'ta-i', label: 'ி', value: 'ி', shiftValue: 'இ', code: 'KeyF', type: 'character' },
        { id: 'ta-u', label: 'ு', value: 'ு', shiftValue: 'உ', code: 'KeyG', type: 'character' },
        { id: 'ta-ppa', label: 'ப', value: 'ப', shiftValue: 'ஃ', code: 'KeyH', type: 'character' },
        { id: 'ta-ra', label: 'ர', value: 'ர', shiftValue: 'ற', code: 'KeyJ', type: 'character' },
        { id: 'ta-kka', label: 'க', value: 'க', shiftValue: 'க', code: 'KeyK', type: 'character' },
        { id: 'ta-tha', label: 'த', value: 'த', shiftValue: 'ட', code: 'KeyL', type: 'character' },
        { id: 'ta-ca', label: 'ச', value: 'ச', shiftValue: 'ட', code: 'Semicolon', type: 'character' },
        { id: 'ta-ta2', label: 'ட', value: 'ட', shiftValue: 'ட', code: 'Quote', type: 'character' },
      ],
    },
    // Row 4: Bottom letter row - Additional consonants
    {
      keys: [
        { id: 'ta-shift-left', label: '⇧', value: 'Shift', code: 'ShiftLeft', type: 'modifier', width: 1.5 },
        { id: 'ta-anusvara', label: 'ஂ', value: 'ஂ', shiftValue: 'ஃ', code: 'KeyZ', type: 'character' },
        { id: 'ta-ma', label: 'ம', value: 'ம', shiftValue: 'ண', code: 'KeyX', type: 'character' },
        { id: 'ta-na', label: 'ன', value: 'ன', shiftValue: 'ந', code: 'KeyC', type: 'character' },
        { id: 'ta-va', label: 'வ', value: 'வ', shiftValue: '', code: 'KeyV', type: 'character' },
        { id: 'ta-la', label: 'ல', value: 'ல', shiftValue: 'ள', code: 'KeyB', type: 'character' },
        { id: 'ta-sa', label: 'ஸ', value: 'ஸ', shiftValue: 'ஶ', code: 'KeyN', type: 'character' },
        { id: 'ta-comma', label: ',', value: ',', shiftValue: 'ஷ', code: 'KeyM', type: 'character' },
        { id: 'ta-period', label: '.', value: '.', shiftValue: '।', code: 'Comma', type: 'character' },
        { id: 'ta-ya', label: 'ய', value: 'ய', shiftValue: '', code: 'Period', type: 'character' },
        { id: 'ta-visarga', label: 'ஃ', value: 'ஃ', shiftValue: '?', code: 'Slash', type: 'character' },
        { id: 'ta-shift-right', label: '⇧', value: 'Shift', code: 'ShiftRight', type: 'modifier', width: 1.5 },
      ],
    },
    // Row 5: Space bar
    {
      keys: [
        { id: 'ta-space', label: 'Space', value: ' ', code: 'Space', type: 'space', width: 10 },
      ],
    },
  ],
  physicalKeyMap: {
    // Number row
    'Backquote': 'ஃ',
    'Digit1': '௧',
    'Digit2': '௨',
    'Digit3': '௩',
    'Digit4': '௪',
    'Digit5': '௫',
    'Digit6': '௬',
    'Digit7': '௭',
    'Digit8': '௮',
    'Digit9': '௯',
    'Digit0': '௦',
    'Minus': '-',
    'Equal': 'ற',
    // Top letter row
    'KeyQ': 'ௌ',
    'KeyW': 'ை',
    'KeyE': 'ா',
    'KeyR': 'ீ',
    'KeyT': 'ூ',
    'KeyY': 'ப',
    'KeyU': 'ஹ',
    'KeyI': 'க',
    'KeyO': 'த',
    'KeyP': 'ச',
    'BracketLeft': 'ட',
    'BracketRight': 'ெ',
    'Backslash': 'ஞ',
    // Home row
    'KeyA': 'ோ',
    'KeyS': 'ே',
    'KeyD': '்',
    'KeyF': 'ி',
    'KeyG': 'ு',
    'KeyH': 'ப',
    'KeyJ': 'ர',
    'KeyK': 'க',
    'KeyL': 'த',
    'Semicolon': 'ச',
    'Quote': 'ட',
    // Bottom row
    'KeyZ': 'ஂ',
    'KeyX': 'ம',
    'KeyC': 'ன',
    'KeyV': 'வ',
    'KeyB': 'ல',
    'KeyN': 'ஸ',
    'KeyM': ',',
    'Comma': '.',
    'Period': 'ய',
    'Slash': 'ஃ',
    'Space': ' ',
  },
};
