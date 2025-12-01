/**
 * Korean Hangul Keyboard Layout (2-Set Standard)
 * Left-to-right (LTR) language
 * Hangul Jamo characters
 */

import type { KeyboardLayout } from '@/types/keyboard';

export const koreanLayout: KeyboardLayout = {
  id: 'ko',
  name: 'Korean',
  nativeName: '한국어',
  direction: 'ltr',
  fontFamily: 'Noto Sans KR, sans-serif',
  rows: [
    // Row 1: Numbers and symbols
    {
      keys: [
        { id: 'ko-1', label: '1', value: '1', shiftValue: '!', code: 'Digit1', type: 'character' },
        { id: 'ko-2', label: '2', value: '2', shiftValue: '@', code: 'Digit2', type: 'character' },
        { id: 'ko-3', label: '3', value: '3', shiftValue: '#', code: 'Digit3', type: 'character' },
        { id: 'ko-4', label: '4', value: '4', shiftValue: '$', code: 'Digit4', type: 'character' },
        { id: 'ko-5', label: '5', value: '5', shiftValue: '%', code: 'Digit5', type: 'character' },
        { id: 'ko-6', label: '6', value: '6', shiftValue: '^', code: 'Digit6', type: 'character' },
        { id: 'ko-7', label: '7', value: '7', shiftValue: '&', code: 'Digit7', type: 'character' },
        { id: 'ko-8', label: '8', value: '8', shiftValue: '*', code: 'Digit8', type: 'character' },
        { id: 'ko-9', label: '9', value: '9', shiftValue: '(', code: 'Digit9', type: 'character' },
        { id: 'ko-0', label: '0', value: '0', shiftValue: ')', code: 'Digit0', type: 'character' },
        { id: 'ko-minus', label: '-', value: '-', shiftValue: '_', code: 'Minus', type: 'character' },
        { id: 'ko-equal', label: '=', value: '=', shiftValue: '+', code: 'Equal', type: 'character' },
        { id: 'ko-backspace', label: '⌫', value: 'Backspace', code: 'Backspace', type: 'action', width: 1.5 },
      ],
    },
    // Row 2: ㅂ row (consonants and vowels)
    {
      keys: [
        { id: 'ko-bieup', label: 'ㅂ', value: 'ㅂ', shiftValue: 'ㅃ', code: 'KeyQ', type: 'character' },
        { id: 'ko-jieung', label: 'ㅈ', value: 'ㅈ', shiftValue: 'ㅉ', code: 'KeyW', type: 'character' },
        { id: 'ko-ddeud', label: 'ㄷ', value: 'ㄷ', shiftValue: 'ㄸ', code: 'KeyE', type: 'character' },
        { id: 'ko-gieuk', label: 'ㄱ', value: 'ㄱ', shiftValue: 'ㄲ', code: 'KeyR', type: 'character' },
        { id: 'ko-sios', label: 'ㅅ', value: 'ㅅ', shiftValue: 'ㅆ', code: 'KeyT', type: 'character' },
        { id: 'ko-ya', label: 'ㅛ', value: 'ㅛ', code: 'KeyY', type: 'character' },
        { id: 'ko-yeo', label: 'ㅕ', value: 'ㅕ', code: 'KeyU', type: 'character' },
        { id: 'ko-eo', label: 'ㅓ', value: 'ㅓ', code: 'KeyI', type: 'character' },
        { id: 'ko-ae', label: 'ㅐ', value: 'ㅐ', shiftValue: 'ㅒ', code: 'KeyO', type: 'character' },
        { id: 'ko-e', label: 'ㅔ', value: 'ㅔ', shiftValue: 'ㅖ', code: 'KeyP', type: 'character' },
        { id: 'ko-bracket-left', label: '[', value: '[', shiftValue: '{', code: 'BracketLeft', type: 'character' },
        { id: 'ko-bracket-right', label: ']', value: ']', shiftValue: '}', code: 'BracketRight', type: 'character' },
      ],
    },
    // Row 3: ㅁ row
    {
      keys: [
        { id: 'ko-mieum', label: 'ㅁ', value: 'ㅁ', code: 'KeyA', type: 'character' },
        { id: 'ko-nieun', label: 'ㄴ', value: 'ㄴ', code: 'KeyS', type: 'character' },
        { id: 'ko-ieung', label: 'ㅇ', value: 'ㅇ', code: 'KeyD', type: 'character' },
        { id: 'ko-rieul', label: 'ㄹ', value: 'ㄹ', code: 'KeyF', type: 'character' },
        { id: 'ko-hieuh', label: 'ㅎ', value: 'ㅎ', code: 'KeyG', type: 'character' },
        { id: 'ko-yo', label: 'ㅗ', value: 'ㅗ', code: 'KeyH', type: 'character' },
        { id: 'ko-yae', label: 'ㅑ', value: 'ㅑ', code: 'KeyJ', type: 'character' },
        { id: 'ko-a', label: 'ㅏ', value: 'ㅏ', code: 'KeyK', type: 'character' },
        { id: 'ko-i', label: 'ㅣ', value: 'ㅣ', code: 'KeyL', type: 'character' },
        { id: 'ko-semicolon', label: ';', value: ';', shiftValue: ':', code: 'Semicolon', type: 'character' },
        { id: 'ko-quote', label: "'", value: "'", shiftValue: '"', code: 'Quote', type: 'character' },
      ],
    },
    // Row 4: ㅋ row
    {
      keys: [
        { id: 'ko-shift-left', label: '⇧', value: 'Shift', code: 'ShiftLeft', type: 'modifier', width: 1.5 },
        { id: 'ko-kieuk', label: 'ㅋ', value: 'ㅋ', code: 'KeyZ', type: 'character' },
        { id: 'ko-tieut', label: 'ㅌ', value: 'ㅌ', code: 'KeyX', type: 'character' },
        { id: 'ko-chieuch', label: 'ㅊ', value: 'ㅊ', code: 'KeyC', type: 'character' },
        { id: 'ko-pieup', label: 'ㅍ', value: 'ㅍ', code: 'KeyV', type: 'character' },
        { id: 'ko-yu', label: 'ㅠ', value: 'ㅠ', code: 'KeyB', type: 'character' },
        { id: 'ko-u', label: 'ㅜ', value: 'ㅜ', code: 'KeyN', type: 'character' },
        { id: 'ko-eu', label: 'ㅡ', value: 'ㅡ', code: 'KeyM', type: 'character' },
        { id: 'ko-comma', label: ',', value: ',', shiftValue: '<', code: 'Comma', type: 'character' },
        { id: 'ko-period', label: '.', value: '.', shiftValue: '>', code: 'Period', type: 'character' },
        { id: 'ko-slash', label: '/', value: '/', shiftValue: '?', code: 'Slash', type: 'character' },
        { id: 'ko-shift-right', label: '⇧', value: 'Shift', code: 'ShiftRight', type: 'modifier', width: 1.5 },
      ],
    },
    // Row 5: Space bar
    {
      keys: [
        { id: 'ko-space', label: '스페이스', value: ' ', code: 'Space', type: 'space', width: 10 },
      ],
    },
  ],
  physicalKeyMap: {
    'Digit1': '1',
    'Digit2': '2',
    'Digit3': '3',
    'Digit4': '4',
    'Digit5': '5',
    'Digit6': '6',
    'Digit7': '7',
    'Digit8': '8',
    'Digit9': '9',
    'Digit0': '0',
    'Minus': '-',
    'Equal': '=',
    'KeyQ': 'ㅂ',
    'KeyW': 'ㅈ',
    'KeyE': 'ㄷ',
    'KeyR': 'ㄱ',
    'KeyT': 'ㅅ',
    'KeyY': 'ㅛ',
    'KeyU': 'ㅕ',
    'KeyI': 'ㅓ',
    'KeyO': 'ㅐ',
    'KeyP': 'ㅔ',
    'BracketLeft': '[',
    'BracketRight': ']',
    'KeyA': 'ㅁ',
    'KeyS': 'ㄴ',
    'KeyD': 'ㅇ',
    'KeyF': 'ㄹ',
    'KeyG': 'ㅎ',
    'KeyH': 'ㅗ',
    'KeyJ': 'ㅑ',
    'KeyK': 'ㅏ',
    'KeyL': 'ㅣ',
    'Semicolon': ';',
    'Quote': "'",
    'KeyZ': 'ㅋ',
    'KeyX': 'ㅌ',
    'KeyC': 'ㅊ',
    'KeyV': 'ㅍ',
    'KeyB': 'ㅠ',
    'KeyN': 'ㅜ',
    'KeyM': 'ㅡ',
    'Comma': ',',
    'Period': '.',
    'Slash': '/',
    'Space': ' ',
  },
};
