import type { KeyboardLayout } from '@/types/keyboard';

/**
 * Thai Keyboard Layout
 * Language: Thai (ไทย)
 * Script: Thai
 * Direction: LTR
 * Standard Kedmanee layout (most common Thai keyboard layout)
 */
export const thaiLayout: KeyboardLayout = {
  id: 'th',
  name: 'Thai',
  nativeName: 'ไทย',
  direction: 'ltr',
  fontFamily: 'Noto Sans Thai, sans-serif',
  rows: [
    // Row 1: Numbers and Thai numerals
    {
      keys: [
        { id: 'num1', label: '๑', value: '๑', shiftValue: '!', code: 'Digit1', type: 'character' },
        { id: 'num2', label: '๒', value: '๒', shiftValue: '@', code: 'Digit2', type: 'character' },
        { id: 'num3', label: '๓', value: '๓', shiftValue: '#', code: 'Digit3', type: 'character' },
        { id: 'num4', label: '๔', value: '๔', shiftValue: '$', code: 'Digit4', type: 'character' },
        { id: 'num5', label: '๕', value: '๕', shiftValue: '%', code: 'Digit5', type: 'character' },
        { id: 'num6', label: '๖', value: '๖', shiftValue: '฿', code: 'Digit6', type: 'character' },
        { id: 'num7', label: '๗', value: '๗', shiftValue: '&', code: 'Digit7', type: 'character' },
        { id: 'num8', label: '๘', value: '๘', shiftValue: '*', code: 'Digit8', type: 'character' },
        { id: 'num9', label: '๙', value: '๙', shiftValue: '(', code: 'Digit9', type: 'character' },
        { id: 'num0', label: '๐', value: '๐', shiftValue: ')', code: 'Digit0', type: 'character' },
        { id: 'minus', label: '-', value: '-', shiftValue: '_', code: 'Minus', type: 'character' },
        { id: 'equal', label: '=', value: '=', shiftValue: '+', code: 'Equal', type: 'character' },
        { id: 'backspace', label: '⌫', value: 'Backspace', code: 'Backspace', type: 'action', width: 1.5 },
      ],
    },
    // Row 2: Top consonants
    {
      keys: [
        { id: 'q', label: 'ๆ', value: 'ๆ', shiftValue: '๐', code: 'KeyQ', type: 'character' },
        { id: 'w', label: 'ไ', value: 'ไ', shiftValue: '"', code: 'KeyW', type: 'character' },
        { id: 'e', label: 'ำ', value: 'ำ', shiftValue: 'ฎ', code: 'KeyE', type: 'character' },
        { id: 'r', label: 'พ', value: 'พ', shiftValue: 'ฑ', code: 'KeyR', type: 'character' },
        { id: 't', label: 'ะ', value: 'ะ', shiftValue: 'ธ', code: 'KeyT', type: 'character' },
        { id: 'y', label: 'ั', value: 'ั', shiftValue: 'ํ', code: 'KeyY', type: 'character' },
        { id: 'u', label: 'ี', value: 'ี', shiftValue: '๊', code: 'KeyU', type: 'character' },
        { id: 'i', label: 'ร', value: 'ร', shiftValue: 'ณ', code: 'KeyI', type: 'character' },
        { id: 'o', label: 'น', value: 'น', shiftValue: 'ฯ', code: 'KeyO', type: 'character' },
        { id: 'p', label: 'ย', value: 'ย', shiftValue: 'ญ', code: 'KeyP', type: 'character' },
        { id: 'bracket-left', label: 'บ', value: 'บ', shiftValue: 'ฐ', code: 'BracketLeft', type: 'character' },
        { id: 'bracket-right', label: 'ล', value: 'ล', shiftValue: ',', code: 'BracketRight', type: 'character' },
        { id: 'backslash', label: 'ฃ', value: 'ฃ', shiftValue: 'ฅ', code: 'Backslash', type: 'character' },
      ],
    },
    // Row 3: Home row
    {
      keys: [
        { id: 'a', label: 'ฟ', value: 'ฟ', shiftValue: 'ฤ', code: 'KeyA', type: 'character' },
        { id: 's', label: 'ห', value: 'ห', shiftValue: 'ฆ', code: 'KeyS', type: 'character' },
        { id: 'd', label: 'ก', value: 'ก', shiftValue: 'ฏ', code: 'KeyD', type: 'character' },
        { id: 'f', label: 'ด', value: 'ด', shiftValue: 'โ', code: 'KeyF', type: 'character' },
        { id: 'g', label: 'เ', value: 'เ', shiftValue: 'ฌ', code: 'KeyG', type: 'character' },
        { id: 'h', label: '้', value: '้', shiftValue: '็', code: 'KeyH', type: 'character' },
        { id: 'j', label: '่', value: '่', shiftValue: '๋', code: 'KeyJ', type: 'character' },
        { id: 'k', label: 'า', value: 'า', shiftValue: 'ษ', code: 'KeyK', type: 'character' },
        { id: 'l', label: 'ส', value: 'ส', shiftValue: 'ศ', code: 'KeyL', type: 'character' },
        { id: 'semicolon', label: 'ว', value: 'ว', shiftValue: 'ซ', code: 'Semicolon', type: 'character' },
        { id: 'quote', label: 'ง', value: 'ง', shiftValue: '.', code: 'Quote', type: 'character' },
        { id: 'enter', label: '↵', value: 'Enter', code: 'Enter', type: 'action', width: 1.5 },
      ],
    },
    // Row 4: Bottom consonants
    {
      keys: [
        { id: 'shift-left', label: '⇧', value: 'Shift', code: 'ShiftLeft', type: 'modifier', width: 1.5 },
        { id: 'z', label: 'ผ', value: 'ผ', shiftValue: '(', code: 'KeyZ', type: 'character' },
        { id: 'x', label: 'ป', value: 'ป', shiftValue: ')', code: 'KeyX', type: 'character' },
        { id: 'c', label: 'แ', value: 'แ', shiftValue: 'ฉ', code: 'KeyC', type: 'character' },
        { id: 'v', label: 'อ', value: 'อ', shiftValue: 'ฮ', code: 'KeyV', type: 'character' },
        { id: 'b', label: 'ื', value: 'ื', shiftValue: 'ฺ', code: 'KeyB', type: 'character' },
        { id: 'n', label: 'ท', value: 'ท', shiftValue: '?', code: 'KeyN', type: 'character' },
        { id: 'm', label: 'ม', value: 'ม', shiftValue: 'ฒ', code: 'KeyM', type: 'character' },
        { id: 'comma', label: 'ใ', value: 'ใ', shiftValue: 'ฬ', code: 'Comma', type: 'character' },
        { id: 'period', label: 'ฝ', value: 'ฝ', shiftValue: 'ฦ', code: 'Period', type: 'character' },
        { id: 'slash', label: 'ฟ', value: 'ฟ', shiftValue: 'ฃ', code: 'Slash', type: 'character' },
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
    KeyQ: 'ๆ', KeyW: 'ไ', KeyE: 'ำ', KeyR: 'พ', KeyT: 'ะ',
    KeyY: 'ั', KeyU: 'ี', KeyI: 'ร', KeyO: 'น', KeyP: 'ย',
    KeyA: 'ฟ', KeyS: 'ห', KeyD: 'ก', KeyF: 'ด', KeyG: 'เ',
    KeyH: '้', KeyJ: '่', KeyK: 'า', KeyL: 'ส',
    KeyZ: 'ผ', KeyX: 'ป', KeyC: 'แ', KeyV: 'อ', KeyB: 'ื',
    KeyN: 'ท', KeyM: 'ม',
  },
};
