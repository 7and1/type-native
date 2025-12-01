/**
 * Khmer Keyboard Layout
 */

import type { KeyboardLayout } from '@/types/keyboard';

export const khmerLayout: KeyboardLayout = {
  id: 'km',
  name: 'Khmer',
  nativeName: 'ខ្មែរ',
  direction: 'ltr',
  fontFamily: 'system-ui, sans-serif',
  rows: [
    {
      keys: [
        { id: 'km-backtick', label: '«', value: '«', shiftValue: '»', code: 'Backquote', type: 'character' },
        { id: 'km-1', label: '១', value: '១', shiftValue: '!', code: 'Digit1', type: 'character' },
        { id: 'km-2', label: '២', value: '២', shiftValue: 'ៗ', code: 'Digit2', type: 'character' },
        { id: 'km-3', label: '៣', value: '៣', shiftValue: '"', code: 'Digit3', type: 'character' },
        { id: 'km-4', label: '៤', value: '៤', shiftValue: '៛', code: 'Digit4', type: 'character' },
        { id: 'km-5', label: '៥', value: '៥', shiftValue: '%', code: 'Digit5', type: 'character' },
        { id: 'km-6', label: '៦', value: '៦', shiftValue: '៍', code: 'Digit6', type: 'character' },
        { id: 'km-7', label: '៧', value: '៧', shiftValue: '័', code: 'Digit7', type: 'character' },
        { id: 'km-8', label: '៨', value: '៨', shiftValue: '៏', code: 'Digit8', type: 'character' },
        { id: 'km-9', label: '៩', value: '៩', shiftValue: '(', code: 'Digit9', type: 'character' },
        { id: 'km-0', label: '០', value: '០', shiftValue: ')', code: 'Digit0', type: 'character' },
        { id: 'km-minus', label: '៓', value: '៓', shiftValue: '៑', code: 'Minus', type: 'character' },
        { id: 'km-equal', label: '៌', value: '៌', shiftValue: '=', code: 'Equal', type: 'character' },
        { id: 'km-backspace', label: '⌫', value: 'Backspace', code: 'Backspace', type: 'action', width: 1.5 },
      ],
    },
    {
      keys: [
        { id: 'km-tab', label: 'Tab', value: 'Tab', code: 'Tab', type: 'action', width: 1.5 },
        { id: 'km-q', label: 'ឆ', value: 'ឆ', shiftValue: 'ឈ', code: 'KeyQ', type: 'character' },
        { id: 'km-w', label: 'ឹ', value: 'ឹ', shiftValue: 'ឺ', code: 'KeyW', type: 'character' },
        { id: 'km-e', label: 'េ', value: 'េ', shiftValue: 'ែ', code: 'KeyE', type: 'character' },
        { id: 'km-r', label: 'រ', value: 'រ', shiftValue: 'ឫ', code: 'KeyR', type: 'character' },
        { id: 'km-t', label: 'ត', value: 'ត', shiftValue: 'ទ', code: 'KeyT', type: 'character' },
        { id: 'km-y', label: 'យ', value: 'យ', shiftValue: 'ឬ', code: 'KeyY', type: 'character' },
        { id: 'km-u', label: 'ុ', value: 'ុ', shiftValue: 'ូ', code: 'KeyU', type: 'character' },
        { id: 'km-i', label: 'ិ', value: 'ិ', shiftValue: 'ី', code: 'KeyI', type: 'character' },
        { id: 'km-o', label: 'ោ', value: 'ោ', shiftValue: 'ៅ', code: 'KeyO', type: 'character' },
        { id: 'km-p', label: 'ផ', value: 'ផ', shiftValue: 'ភ', code: 'KeyP', type: 'character' },
        { id: 'km-bracketleft', label: 'ៀ', value: 'ៀ', shiftValue: 'ឿ', code: 'BracketLeft', type: 'character' },
        { id: 'km-bracketright', label: 'ឪ', value: 'ឪ', shiftValue: 'ឧ', code: 'BracketRight', type: 'character' },
      ],
    },
    {
      keys: [
        { id: 'km-caps', label: 'Caps', value: 'CapsLock', code: 'CapsLock', type: 'modifier', width: 1.8 },
        { id: 'km-a', label: 'ា', value: 'ា', shiftValue: 'ាំ', code: 'KeyA', type: 'character' },
        { id: 'km-s', label: 'ស', value: 'ស', shiftValue: 'ៃ', code: 'KeyS', type: 'character' },
        { id: 'km-d', label: 'ដ', value: 'ដ', shiftValue: 'ឌ', code: 'KeyD', type: 'character' },
        { id: 'km-f', label: 'ថ', value: 'ថ', shiftValue: 'ធ', code: 'KeyF', type: 'character' },
        { id: 'km-g', label: 'ង', value: 'ង', shiftValue: 'អ', code: 'KeyG', type: 'character' },
        { id: 'km-h', label: 'ហ', value: 'ហ', shiftValue: 'ះ', code: 'KeyH', type: 'character' },
        { id: 'km-j', label: '្', value: '្', shiftValue: 'ញ', code: 'KeyJ', type: 'character' },
        { id: 'km-k', label: 'ក', value: 'ក', shiftValue: 'គ', code: 'KeyK', type: 'character' },
        { id: 'km-l', label: 'ល', value: 'ល', shiftValue: 'ឡ', code: 'KeyL', type: 'character' },
        { id: 'km-semicolon', label: ';', value: ';', shiftValue: ':', code: 'Semicolon', type: 'character' },
        { id: 'km-quote', label: "'", value: "'", shiftValue: '"', code: 'Quote', type: 'character' },
        { id: 'km-enter', label: 'Enter', value: 'Enter', code: 'Enter', type: 'action', width: 1.8 },
      ],
    },
    {
      keys: [
        { id: 'km-shift-left', label: '⇧', value: 'Shift', code: 'ShiftLeft', type: 'modifier', width: 2.3 },
        { id: 'km-z', label: 'ឋ', value: 'ឋ', shiftValue: 'ឍ', code: 'KeyZ', type: 'character' },
        { id: 'km-x', label: 'ខ', value: 'ខ', shiftValue: 'ឃ', code: 'KeyX', type: 'character' },
        { id: 'km-c', label: 'ច', value: 'ច', shiftValue: 'ជ', code: 'KeyC', type: 'character' },
        { id: 'km-v', label: 'វ', value: 'វ', shiftValue: 'ព', code: 'KeyV', type: 'character' },
        { id: 'km-b', label: 'ប', value: 'ប', shiftValue: 'ព', code: 'KeyB', type: 'character' },
        { id: 'km-n', label: 'ន', value: 'ន', shiftValue: 'ណ', code: 'KeyN', type: 'character' },
        { id: 'km-m', label: 'ម', value: 'ម', shiftValue: 'ំ', code: 'KeyM', type: 'character' },
        { id: 'km-comma', label: ',', value: ',', shiftValue: '<', code: 'Comma', type: 'character' },
        { id: 'km-period', label: '.', value: '.', shiftValue: '>', code: 'Period', type: 'character' },
        { id: 'km-slash', label: '/', value: '/', shiftValue: '?', code: 'Slash', type: 'character' },
        { id: 'km-shift-right', label: '⇧', value: 'Shift', code: 'ShiftRight', type: 'modifier', width: 2.3 },
      ],
    },
    {
      keys: [
        { id: 'km-space', label: 'Space', value: ' ', code: 'Space', type: 'space', width: 6 },
      ],
    },
  ],
  physicalKeyMap: {
    'Backquote': '«', 'Digit1': '១', 'Digit2': '២', 'Digit3': '៣', 'Digit4': '៤',
    'Digit5': '៥', 'Digit6': '៦', 'Digit7': '៧', 'Digit8': '៨', 'Digit9': '៩',
    'Digit0': '០', 'Minus': '៓', 'Equal': '៌',
    'KeyQ': 'ឆ', 'KeyW': 'ឹ', 'KeyE': 'េ', 'KeyR': 'រ', 'KeyT': 'ត',
    'KeyY': 'យ', 'KeyU': 'ុ', 'KeyI': 'ិ', 'KeyO': 'ោ', 'KeyP': 'ផ',
    'BracketLeft': 'ៀ', 'BracketRight': 'ឪ',
    'KeyA': 'ា', 'KeyS': 'ស', 'KeyD': 'ដ', 'KeyF': 'ថ', 'KeyG': 'ង',
    'KeyH': 'ហ', 'KeyJ': '្', 'KeyK': 'ក', 'KeyL': 'ល',
    'Semicolon': ';', 'Quote': "'",
    'KeyZ': 'ឋ', 'KeyX': 'ខ', 'KeyC': 'ច', 'KeyV': 'វ', 'KeyB': 'ប',
    'KeyN': 'ន', 'KeyM': 'ម', 'Comma': ',', 'Period': '.', 'Slash': '/',
    'Space': ' ',
  },
};
