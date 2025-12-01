/**
 * Telugu Keyboard Layout - Inscript-based
 */

import type { KeyboardLayout } from '@/types/keyboard';

export const teluguLayout: KeyboardLayout = {
  id: 'te',
  name: 'Telugu',
  nativeName: 'తెలుగు',
  direction: 'ltr',
  fontFamily: 'system-ui, sans-serif',
  rows: [
    {
      keys: [
        { id: 'te-backtick', label: 'ొ', value: 'ొ', shiftValue: 'ఒ', code: 'Backquote', type: 'character' },
        { id: 'te-1', label: '1', value: '1', shiftValue: '1', code: 'Digit1', type: 'character' },
        { id: 'te-2', label: '2', value: '2', shiftValue: '2', code: 'Digit2', type: 'character' },
        { id: 'te-3', label: '3', value: '3', shiftValue: '3', code: 'Digit3', type: 'character' },
        { id: 'te-4', label: '4', value: '4', shiftValue: '4', code: 'Digit4', type: 'character' },
        { id: 'te-5', label: '5', value: '5', shiftValue: '5', code: 'Digit5', type: 'character' },
        { id: 'te-6', label: '6', value: '6', shiftValue: '6', code: 'Digit6', type: 'character' },
        { id: 'te-7', label: '7', value: '7', shiftValue: '7', code: 'Digit7', type: 'character' },
        { id: 'te-8', label: '8', value: '8', shiftValue: '8', code: 'Digit8', type: 'character' },
        { id: 'te-9', label: '9', value: '9', shiftValue: '9', code: 'Digit9', type: 'character' },
        { id: 'te-0', label: '0', value: '0', shiftValue: '0', code: 'Digit0', type: 'character' },
        { id: 'te-minus', label: '-', value: '-', shiftValue: '_', code: 'Minus', type: 'character' },
        { id: 'te-equal', label: 'ృ', value: 'ృ', shiftValue: 'ఋ', code: 'Equal', type: 'character' },
        { id: 'te-backspace', label: '⌫', value: 'Backspace', code: 'Backspace', type: 'action', width: 1.5 },
      ],
    },
    {
      keys: [
        { id: 'te-tab', label: 'Tab', value: 'Tab', code: 'Tab', type: 'action', width: 1.5 },
        { id: 'te-q', label: 'ౌ', value: 'ౌ', shiftValue: 'ఔ', code: 'KeyQ', type: 'character' },
        { id: 'te-w', label: 'ై', value: 'ై', shiftValue: 'ఐ', code: 'KeyW', type: 'character' },
        { id: 'te-e', label: 'ా', value: 'ా', shiftValue: 'ఆ', code: 'KeyE', type: 'character' },
        { id: 'te-r', label: 'ీ', value: 'ీ', shiftValue: 'ఈ', code: 'KeyR', type: 'character' },
        { id: 'te-t', label: 'ూ', value: 'ూ', shiftValue: 'ఊ', code: 'KeyT', type: 'character' },
        { id: 'te-y', label: 'బ', value: 'బ', shiftValue: 'భ', code: 'KeyY', type: 'character' },
        { id: 'te-u', label: 'హ', value: 'హ', shiftValue: 'ఙ', code: 'KeyU', type: 'character' },
        { id: 'te-i', label: 'గ', value: 'గ', shiftValue: 'ఘ', code: 'KeyI', type: 'character' },
        { id: 'te-o', label: 'ద', value: 'ద', shiftValue: 'ధ', code: 'KeyO', type: 'character' },
        { id: 'te-p', label: 'జ', value: 'జ', shiftValue: 'ఝ', code: 'KeyP', type: 'character' },
        { id: 'te-bracketleft', label: 'డ', value: 'డ', shiftValue: 'ఢ', code: 'BracketLeft', type: 'character' },
        { id: 'te-bracketright', label: 'ఞ', value: 'ఞ', shiftValue: 'ఞ', code: 'BracketRight', type: 'character' },
      ],
    },
    {
      keys: [
        { id: 'te-caps', label: 'Caps', value: 'CapsLock', code: 'CapsLock', type: 'modifier', width: 1.8 },
        { id: 'te-a', label: 'ో', value: 'ో', shiftValue: 'ఓ', code: 'KeyA', type: 'character' },
        { id: 'te-s', label: 'ే', value: 'ే', shiftValue: 'ఏ', code: 'KeyS', type: 'character' },
        { id: 'te-d', label: '్', value: '్', shiftValue: 'అ', code: 'KeyD', type: 'character' },
        { id: 'te-f', label: 'ి', value: 'ి', shiftValue: 'ఇ', code: 'KeyF', type: 'character' },
        { id: 'te-g', label: 'ు', value: 'ు', shiftValue: 'ఉ', code: 'KeyG', type: 'character' },
        { id: 'te-h', label: 'ప', value: 'ప', shiftValue: 'ఫ', code: 'KeyH', type: 'character' },
        { id: 'te-j', label: 'ర', value: 'ర', shiftValue: 'ఱ', code: 'KeyJ', type: 'character' },
        { id: 'te-k', label: 'క', value: 'క', shiftValue: 'ఖ', code: 'KeyK', type: 'character' },
        { id: 'te-l', label: 'త', value: 'త', shiftValue: 'థ', code: 'KeyL', type: 'character' },
        { id: 'te-semicolon', label: 'చ', value: 'చ', shiftValue: 'ఛ', code: 'Semicolon', type: 'character' },
        { id: 'te-quote', label: 'ట', value: 'ట', shiftValue: 'ఠ', code: 'Quote', type: 'character' },
        { id: 'te-enter', label: 'Enter', value: 'Enter', code: 'Enter', type: 'action', width: 1.8 },
      ],
    },
    {
      keys: [
        { id: 'te-shift-left', label: '⇧', value: 'Shift', code: 'ShiftLeft', type: 'modifier', width: 2.3 },
        { id: 'te-z', label: 'ె', value: 'ె', shiftValue: 'ఎ', code: 'KeyZ', type: 'character' },
        { id: 'te-x', label: 'ం', value: 'ం', shiftValue: 'ఁ', code: 'KeyX', type: 'character' },
        { id: 'te-c', label: 'మ', value: 'మ', shiftValue: 'ణ', code: 'KeyC', type: 'character' },
        { id: 'te-v', label: 'న', value: 'న', shiftValue: 'న', code: 'KeyV', type: 'character' },
        { id: 'te-b', label: 'వ', value: 'వ', shiftValue: 'వ', code: 'KeyB', type: 'character' },
        { id: 'te-n', label: 'ల', value: 'ల', shiftValue: 'ళ', code: 'KeyN', type: 'character' },
        { id: 'te-m', label: 'స', value: 'స', shiftValue: 'శ', code: 'KeyM', type: 'character' },
        { id: 'te-comma', label: ',', value: ',', shiftValue: 'ష', code: 'Comma', type: 'character' },
        { id: 'te-period', label: '.', value: '.', shiftValue: '।', code: 'Period', type: 'character' },
        { id: 'te-slash', label: 'య', value: 'య', shiftValue: 'య', code: 'Slash', type: 'character' },
        { id: 'te-shift-right', label: '⇧', value: 'Shift', code: 'ShiftRight', type: 'modifier', width: 2.3 },
      ],
    },
    {
      keys: [
        { id: 'te-space', label: 'Space', value: ' ', code: 'Space', type: 'space', width: 6 },
      ],
    },
  ],
  physicalKeyMap: {
    'Backquote': 'ొ', 'Digit1': '1', 'Digit2': '2', 'Digit3': '3', 'Digit4': '4',
    'Digit5': '5', 'Digit6': '6', 'Digit7': '7', 'Digit8': '8', 'Digit9': '9',
    'Digit0': '0', 'Minus': '-', 'Equal': 'ృ',
    'KeyQ': 'ౌ', 'KeyW': 'ై', 'KeyE': 'ా', 'KeyR': 'ీ', 'KeyT': 'ూ',
    'KeyY': 'బ', 'KeyU': 'హ', 'KeyI': 'గ', 'KeyO': 'ద', 'KeyP': 'జ',
    'BracketLeft': 'డ', 'BracketRight': 'ఞ',
    'KeyA': 'ో', 'KeyS': 'ే', 'KeyD': '్', 'KeyF': 'ి', 'KeyG': 'ు',
    'KeyH': 'ప', 'KeyJ': 'ర', 'KeyK': 'క', 'KeyL': 'త',
    'Semicolon': 'చ', 'Quote': 'ట',
    'KeyZ': 'ె', 'KeyX': 'ం', 'KeyC': 'మ', 'KeyV': 'న', 'KeyB': 'వ',
    'KeyN': 'ల', 'KeyM': 'స', 'Comma': ',', 'Period': '.', 'Slash': 'య',
    'Space': ' ',
  },
};
