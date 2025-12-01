import type { KeyboardLayout } from '@/types/keyboard';

/**
 * Greek Keyboard Layout
 * Language: Greek (Ελληνικά)
 * Script: Greek alphabet
 * Direction: LTR
 * Standard Greek keyboard layout (Greek 319)
 */
export const greekLayout: KeyboardLayout = {
  id: 'el',
  name: 'Greek',
  nativeName: 'Ελληνικά',
  direction: 'ltr',
  fontFamily: 'Noto Sans, sans-serif',
  rows: [
    // Row 1: Numbers and symbols
    {
      keys: [
        { id: 'num1', label: '1', value: '1', shiftValue: '!', code: 'Digit1', type: 'character' },
        { id: 'num2', label: '2', value: '2', shiftValue: '@', code: 'Digit2', type: 'character' },
        { id: 'num3', label: '3', value: '3', shiftValue: '#', code: 'Digit3', type: 'character' },
        { id: 'num4', label: '4', value: '4', shiftValue: '$', code: 'Digit4', type: 'character' },
        { id: 'num5', label: '5', value: '5', shiftValue: '%', code: 'Digit5', type: 'character' },
        { id: 'num6', label: '6', value: '6', shiftValue: '^', code: 'Digit6', type: 'character' },
        { id: 'num7', label: '7', value: '7', shiftValue: '&', code: 'Digit7', type: 'character' },
        { id: 'num8', label: '8', value: '8', shiftValue: '*', code: 'Digit8', type: 'character' },
        { id: 'num9', label: '9', value: '9', shiftValue: '(', code: 'Digit9', type: 'character' },
        { id: 'num0', label: '0', value: '0', shiftValue: ')', code: 'Digit0', type: 'character' },
        { id: 'minus', label: '-', value: '-', shiftValue: '_', code: 'Minus', type: 'character' },
        { id: 'equal', label: '=', value: '=', shiftValue: '+', code: 'Equal', type: 'character' },
        { id: 'backspace', label: '⌫', value: 'Backspace', code: 'Backspace', type: 'action', width: 1.5 },
      ],
    },
    // Row 2: Greek top row
    {
      keys: [
        { id: 'q', label: ';', value: ';', shiftValue: ':', code: 'KeyQ', type: 'character' },
        { id: 'w', label: 'ς', value: 'ς', shiftValue: 'Σ', code: 'KeyW', type: 'character' },
        { id: 'e', label: 'ε', value: 'ε', shiftValue: 'Ε', code: 'KeyE', type: 'character' },
        { id: 'r', label: 'ρ', value: 'ρ', shiftValue: 'Ρ', code: 'KeyR', type: 'character' },
        { id: 't', label: 'τ', value: 'τ', shiftValue: 'Τ', code: 'KeyT', type: 'character' },
        { id: 'y', label: 'υ', value: 'υ', shiftValue: 'Υ', code: 'KeyY', type: 'character' },
        { id: 'u', label: 'θ', value: 'θ', shiftValue: 'Θ', code: 'KeyU', type: 'character' },
        { id: 'i', label: 'ι', value: 'ι', shiftValue: 'Ι', code: 'KeyI', type: 'character' },
        { id: 'o', label: 'ο', value: 'ο', shiftValue: 'Ο', code: 'KeyO', type: 'character' },
        { id: 'p', label: 'π', value: 'π', shiftValue: 'Π', code: 'KeyP', type: 'character' },
        { id: 'bracket-left', label: '[', value: '[', shiftValue: '{', code: 'BracketLeft', type: 'character' },
        { id: 'bracket-right', label: ']', value: ']', shiftValue: '}', code: 'BracketRight', type: 'character' },
        { id: 'backslash', label: '\\', value: '\\', shiftValue: '|', code: 'Backslash', type: 'character' },
      ],
    },
    // Row 3: Greek home row
    {
      keys: [
        { id: 'a', label: 'α', value: 'α', shiftValue: 'Α', code: 'KeyA', type: 'character' },
        { id: 's', label: 'σ', value: 'σ', shiftValue: 'Σ', code: 'KeyS', type: 'character' },
        { id: 'd', label: 'δ', value: 'δ', shiftValue: 'Δ', code: 'KeyD', type: 'character' },
        { id: 'f', label: 'φ', value: 'φ', shiftValue: 'Φ', code: 'KeyF', type: 'character' },
        { id: 'g', label: 'γ', value: 'γ', shiftValue: 'Γ', code: 'KeyG', type: 'character' },
        { id: 'h', label: 'η', value: 'η', shiftValue: 'Η', code: 'KeyH', type: 'character' },
        { id: 'j', label: 'ξ', value: 'ξ', shiftValue: 'Ξ', code: 'KeyJ', type: 'character' },
        { id: 'k', label: 'κ', value: 'κ', shiftValue: 'Κ', code: 'KeyK', type: 'character' },
        { id: 'l', label: 'λ', value: 'λ', shiftValue: 'Λ', code: 'KeyL', type: 'character' },
        { id: 'semicolon', label: '΄', value: '΄', shiftValue: '¨', code: 'Semicolon', type: 'character' },
        { id: 'quote', label: "'", value: "'", shiftValue: '"', code: 'Quote', type: 'character' },
        { id: 'enter', label: '↵', value: 'Enter', code: 'Enter', type: 'action', width: 1.5 },
      ],
    },
    // Row 4: Greek bottom row
    {
      keys: [
        { id: 'shift-left', label: '⇧', value: 'Shift', code: 'ShiftLeft', type: 'modifier', width: 1.5 },
        { id: 'z', label: 'ζ', value: 'ζ', shiftValue: 'Ζ', code: 'KeyZ', type: 'character' },
        { id: 'x', label: 'χ', value: 'χ', shiftValue: 'Χ', code: 'KeyX', type: 'character' },
        { id: 'c', label: 'ψ', value: 'ψ', shiftValue: 'Ψ', code: 'KeyC', type: 'character' },
        { id: 'v', label: 'ω', value: 'ω', shiftValue: 'Ω', code: 'KeyV', type: 'character' },
        { id: 'b', label: 'β', value: 'β', shiftValue: 'Β', code: 'KeyB', type: 'character' },
        { id: 'n', label: 'ν', value: 'ν', shiftValue: 'Ν', code: 'KeyN', type: 'character' },
        { id: 'm', label: 'μ', value: 'μ', shiftValue: 'Μ', code: 'KeyM', type: 'character' },
        { id: 'comma', label: ',', value: ',', shiftValue: '<', code: 'Comma', type: 'character' },
        { id: 'period', label: '.', value: '.', shiftValue: '>', code: 'Period', type: 'character' },
        { id: 'slash', label: '/', value: '/', shiftValue: '?', code: 'Slash', type: 'character' },
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
    KeyQ: ';', KeyW: 'ς', KeyE: 'ε', KeyR: 'ρ', KeyT: 'τ',
    KeyY: 'υ', KeyU: 'θ', KeyI: 'ι', KeyO: 'ο', KeyP: 'π',
    KeyA: 'α', KeyS: 'σ', KeyD: 'δ', KeyF: 'φ', KeyG: 'γ',
    KeyH: 'η', KeyJ: 'ξ', KeyK: 'κ', KeyL: 'λ',
    KeyZ: 'ζ', KeyX: 'χ', KeyC: 'ψ', KeyV: 'ω', KeyB: 'β',
    KeyN: 'ν', KeyM: 'μ',
  },
};
