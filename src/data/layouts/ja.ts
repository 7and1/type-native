/**
 * Japanese Hiragana Keyboard Layout
 * Left-to-right (LTR) language
 * Hiragana script with dakuten marks
 */

import type { KeyboardLayout } from '@/types/keyboard';

export const japaneseLayout: KeyboardLayout = {
  id: 'ja',
  name: 'Japanese',
  nativeName: '日本語',
  direction: 'ltr',
  fontFamily: 'Noto Sans JP, sans-serif',
  rows: [
    // Row 1: Numbers and symbols
    {
      keys: [
        { id: 'ja-1', label: '1', value: '1', shiftValue: '!', code: 'Digit1', type: 'character' },
        { id: 'ja-2', label: '2', value: '2', shiftValue: '"', code: 'Digit2', type: 'character' },
        { id: 'ja-3', label: '3', value: '3', shiftValue: '#', code: 'Digit3', type: 'character' },
        { id: 'ja-4', label: '4', value: '4', shiftValue: '$', code: 'Digit4', type: 'character' },
        { id: 'ja-5', label: '5', value: '5', shiftValue: '%', code: 'Digit5', type: 'character' },
        { id: 'ja-6', label: '6', value: '6', shiftValue: '&', code: 'Digit6', type: 'character' },
        { id: 'ja-7', label: '7', value: '7', shiftValue: "'", code: 'Digit7', type: 'character' },
        { id: 'ja-8', label: '8', value: '8', shiftValue: '(', code: 'Digit8', type: 'character' },
        { id: 'ja-9', label: '9', value: '9', shiftValue: ')', code: 'Digit9', type: 'character' },
        { id: 'ja-0', label: '0', value: '0', shiftValue: '〜', code: 'Digit0', type: 'character' },
        { id: 'ja-minus', label: 'ー', value: 'ー', shiftValue: '=', code: 'Minus', type: 'character' },
        { id: 'ja-caret', label: '^', value: '^', shiftValue: '〜', code: 'Equal', type: 'character' },
        { id: 'ja-backspace', label: '⌫', value: 'Backspace', code: 'Backspace', type: 'action', width: 1.5 },
      ],
    },
    // Row 2: た行 row
    {
      keys: [
        { id: 'ja-ta', label: 'た', value: 'た', shiftValue: 'ぁ', code: 'KeyQ', type: 'character' },
        { id: 'ja-te', label: 'て', value: 'て', shiftValue: 'ぃ', code: 'KeyW', type: 'character' },
        { id: 'ja-i', label: 'い', value: 'い', shiftValue: 'ぅ', code: 'KeyE', type: 'character' },
        { id: 'ja-su', label: 'す', value: 'す', shiftValue: 'ぇ', code: 'KeyR', type: 'character' },
        { id: 'ja-ka', label: 'か', value: 'か', shiftValue: 'ぉ', code: 'KeyT', type: 'character' },
        { id: 'ja-n', label: 'ん', value: 'ん', shiftValue: 'ゃ', code: 'KeyY', type: 'character' },
        { id: 'ja-na', label: 'な', value: 'な', shiftValue: 'ゅ', code: 'KeyU', type: 'character' },
        { id: 'ja-ni', label: 'に', value: 'に', shiftValue: 'ょ', code: 'KeyI', type: 'character' },
        { id: 'ja-ra', label: 'ら', value: 'ら', shiftValue: 'ゎ', code: 'KeyO', type: 'character' },
        { id: 'ja-se', label: 'せ', value: 'せ', shiftValue: 'ー', code: 'KeyP', type: 'character' },
        { id: 'ja-bracket-left', label: '゛', value: '゛', shiftValue: '「', code: 'BracketLeft', type: 'character' },
        { id: 'ja-bracket-right', label: '゜', value: '゜', shiftValue: '」', code: 'BracketRight', type: 'character' },
      ],
    },
    // Row 3: ち行 row
    {
      keys: [
        { id: 'ja-chi', label: 'ち', value: 'ち', code: 'KeyA', type: 'character' },
        { id: 'ja-to', label: 'と', value: 'と', code: 'KeyS', type: 'character' },
        { id: 'ja-shi', label: 'し', value: 'し', code: 'KeyD', type: 'character' },
        { id: 'ja-ha', label: 'は', value: 'は', code: 'KeyF', type: 'character' },
        { id: 'ja-ki', label: 'き', value: 'き', code: 'KeyG', type: 'character' },
        { id: 'ja-ku', label: 'く', value: 'く', code: 'KeyH', type: 'character' },
        { id: 'ja-ma', label: 'ま', value: 'ま', code: 'KeyJ', type: 'character' },
        { id: 'ja-no', label: 'の', value: 'の', code: 'KeyK', type: 'character' },
        { id: 'ja-ri', label: 'り', value: 'り', code: 'KeyL', type: 'character' },
        { id: 'ja-re', label: 'れ', value: 'れ', code: 'Semicolon', type: 'character' },
        { id: 'ja-ke', label: 'け', value: 'け', code: 'Quote', type: 'character' },
      ],
    },
    // Row 4: つ行 row
    {
      keys: [
        { id: 'ja-shift-left', label: '⇧', value: 'Shift', code: 'ShiftLeft', type: 'modifier', width: 1.5 },
        { id: 'ja-tsu', label: 'つ', value: 'つ', shiftValue: 'っ', code: 'KeyZ', type: 'character' },
        { id: 'ja-sa', label: 'さ', value: 'さ', code: 'KeyX', type: 'character' },
        { id: 'ja-so', label: 'そ', value: 'そ', code: 'KeyC', type: 'character' },
        { id: 'ja-hi', label: 'ひ', value: 'ひ', code: 'KeyV', type: 'character' },
        { id: 'ja-ko', label: 'こ', value: 'こ', code: 'KeyB', type: 'character' },
        { id: 'ja-mi', label: 'み', value: 'み', code: 'KeyN', type: 'character' },
        { id: 'ja-mo', label: 'も', value: 'も', code: 'KeyM', type: 'character' },
        { id: 'ja-ne', label: 'ね', value: 'ね', shiftValue: '、', code: 'Comma', type: 'character' },
        { id: 'ja-ru', label: 'る', value: 'る', shiftValue: '。', code: 'Period', type: 'character' },
        { id: 'ja-me', label: 'め', value: 'め', shiftValue: '・', code: 'Slash', type: 'character' },
        { id: 'ja-shift-right', label: '⇧', value: 'Shift', code: 'ShiftRight', type: 'modifier', width: 1.5 },
      ],
    },
    // Row 5: Space bar
    {
      keys: [
        { id: 'ja-space', label: 'スペース', value: ' ', code: 'Space', type: 'space', width: 10 },
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
    'Minus': 'ー',
    'Equal': '^',
    'KeyQ': 'た',
    'KeyW': 'て',
    'KeyE': 'い',
    'KeyR': 'す',
    'KeyT': 'か',
    'KeyY': 'ん',
    'KeyU': 'な',
    'KeyI': 'に',
    'KeyO': 'ら',
    'KeyP': 'せ',
    'BracketLeft': '゛',
    'BracketRight': '゜',
    'KeyA': 'ち',
    'KeyS': 'と',
    'KeyD': 'し',
    'KeyF': 'は',
    'KeyG': 'き',
    'KeyH': 'く',
    'KeyJ': 'ま',
    'KeyK': 'の',
    'KeyL': 'り',
    'Semicolon': 'れ',
    'Quote': 'け',
    'KeyZ': 'つ',
    'KeyX': 'さ',
    'KeyC': 'そ',
    'KeyV': 'ひ',
    'KeyB': 'こ',
    'KeyN': 'み',
    'KeyM': 'も',
    'Comma': 'ね',
    'Period': 'る',
    'Slash': 'め',
    'Space': ' ',
  },
};
