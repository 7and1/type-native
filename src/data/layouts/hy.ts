import type { KeyboardLayout } from '@/types/keyboard';

/**
 * Armenian Keyboard Layout - Eastern Armenian
 * Armenian alphabet (Հայոց գրեր/Hayots grer)
 * One of the world's oldest alphabets (created 405 AD)
 * 38 letters in modern Armenian alphabet
 * Used by 5+ million speakers worldwide
 */
export const armenianLayout: KeyboardLayout = {
  id: 'hy',
  name: 'Armenian',
  nativeName: 'Հայերեն',
  direction: 'ltr',
  fontFamily: 'Noto Sans Armenian, sans-serif',
  rows: [
    // Row 1: Number row
    {
      keys: [
        { id: 'hy-grave', label: '՝', value: '՝', shiftValue: '՜', code: 'Backquote', type: 'character' },
        { id: 'hy-1', label: '1', value: '1', shiftValue: '!', code: 'Digit1', type: 'character' },
        { id: 'hy-2', label: '2', value: '2', shiftValue: '@', code: 'Digit2', type: 'character' },
        { id: 'hy-3', label: '3', value: '3', shiftValue: '#', code: 'Digit3', type: 'character' },
        { id: 'hy-4', label: '4', value: '4', shiftValue: '$', code: 'Digit4', type: 'character' },
        { id: 'hy-5', label: '5', value: '5', shiftValue: '%', code: 'Digit5', type: 'character' },
        { id: 'hy-6', label: '6', value: '6', shiftValue: '^', code: 'Digit6', type: 'character' },
        { id: 'hy-7', label: '7', value: '7', shiftValue: '&', code: 'Digit7', type: 'character' },
        { id: 'hy-8', label: '8', value: '8', shiftValue: '*', code: 'Digit8', type: 'character' },
        { id: 'hy-9', label: '9', value: '9', shiftValue: '(', code: 'Digit9', type: 'character' },
        { id: 'hy-0', label: '0', value: '0', shiftValue: ')', code: 'Digit0', type: 'character' },
        { id: 'hy-minus', label: '-', value: '-', shiftValue: '_', code: 'Minus', type: 'character' },
        { id: 'hy-jev', label: 'ևա', value: 'ևա', shiftValue: '+', code: 'Equal', type: 'character' },
        { id: 'hy-backspace', label: '⌫', value: 'Backspace', code: 'Backspace', type: 'action', width: 1.5 },
      ],
    },
    // Row 2: Top letter row
    {
      keys: [
        { id: 'hy-kh', label: 'խ', value: 'խ', shiftValue: 'Խ', code: 'KeyQ', type: 'character' },
        { id: 'hy-p', label: 'փ', value: 'փ', shiftValue: 'Փ', code: 'KeyW', type: 'character' },
        { id: 'hy-e', label: 'ե', value: 'ե', shiftValue: 'Ե', code: 'KeyE', type: 'character' },
        { id: 'hy-r', label: 'ր', value: 'ր', shiftValue: 'Ր', code: 'KeyR', type: 'character' },
        { id: 'hy-t', label: 'տ', value: 'տ', shiftValue: 'Տ', code: 'KeyT', type: 'character' },
        { id: 'hy-y', label: 'ը', value: 'ը', shiftValue: 'Ը', code: 'KeyY', type: 'character' },
        { id: 'hy-u', label: 'ու', value: 'ու', shiftValue: 'ՈՒ', code: 'KeyU', type: 'character' },
        { id: 'hy-i', label: 'ի', value: 'ի', shiftValue: 'Ի', code: 'KeyI', type: 'character' },
        { id: 'hy-o', label: 'օ', value: 'օ', shiftValue: 'Օ', code: 'KeyO', type: 'character' },
        { id: 'hy-pe', label: 'պ', value: 'պ', shiftValue: 'Պ', code: 'KeyP', type: 'character' },
        { id: 'hy-left', label: '«', value: '«', shiftValue: '{', code: 'BracketLeft', type: 'character' },
        { id: 'hy-right', label: '»', value: '»', shiftValue: '}', code: 'BracketRight', type: 'character' },
        { id: 'hy-backslash', label: '\\', value: '\\', shiftValue: '|', code: 'Backslash', type: 'character' },
      ],
    },
    // Row 3: Home row
    {
      keys: [
        { id: 'hy-a', label: 'ա', value: 'ա', shiftValue: 'Ա', code: 'KeyA', type: 'character' },
        { id: 'hy-s', label: 'ս', value: 'ս', shiftValue: 'Ս', code: 'KeyS', type: 'character' },
        { id: 'hy-d', label: 'դ', value: 'դ', shiftValue: 'Դ', code: 'KeyD', type: 'character' },
        { id: 'hy-f', label: 'ֆ', value: 'ֆ', shiftValue: 'Ֆ', code: 'KeyF', type: 'character' },
        { id: 'hy-g', label: 'գ', value: 'գ', shiftValue: 'Գ', code: 'KeyG', type: 'character' },
        { id: 'hy-h', label: 'հ', value: 'հ', shiftValue: 'Հ', code: 'KeyH', type: 'character' },
        { id: 'hy-j', label: 'ձ', value: 'ձ', shiftValue: 'Ձ', code: 'KeyJ', type: 'character' },
        { id: 'hy-k', label: 'կ', value: 'կ', shiftValue: 'Կ', code: 'KeyK', type: 'character' },
        { id: 'hy-l', label: 'լ', value: 'լ', shiftValue: 'Լ', code: 'KeyL', type: 'character' },
        { id: 'hy-semicolon', label: ';', value: ';', shiftValue: ':', code: 'Semicolon', type: 'character' },
        { id: 'hy-quote', label: "'", value: "'", shiftValue: '"', code: 'Quote', type: 'character' },
      ],
    },
    // Row 4: Bottom letter row
    {
      keys: [
        { id: 'hy-shift-left', label: '⇧', value: 'Shift', code: 'ShiftLeft', type: 'modifier', width: 1.5 },
        { id: 'hy-z', label: 'զ', value: 'զ', shiftValue: 'Զ', code: 'KeyZ', type: 'character' },
        { id: 'hy-x', label: 'ղ', value: 'ղ', shiftValue: 'Ղ', code: 'KeyX', type: 'character' },
        { id: 'hy-c', label: 'ծ', value: 'ծ', shiftValue: 'Ծ', code: 'KeyC', type: 'character' },
        { id: 'hy-v', label: 'վ', value: 'վ', shiftValue: 'Վ', code: 'KeyV', type: 'character' },
        { id: 'hy-b', label: 'բ', value: 'բ', shiftValue: 'Բ', code: 'KeyB', type: 'character' },
        { id: 'hy-n', label: 'ն', value: 'ն', shiftValue: 'Ն', code: 'KeyN', type: 'character' },
        { id: 'hy-m', label: 'մ', value: 'մ', shiftValue: 'Մ', code: 'KeyM', type: 'character' },
        { id: 'hy-comma', label: ',', value: ',', shiftValue: '<', code: 'Comma', type: 'character' },
        { id: 'hy-period', label: '.', value: '.', shiftValue: '>', code: 'Period', type: 'character' },
        { id: 'hy-slash', label: '/', value: '/', shiftValue: '?', code: 'Slash', type: 'character' },
        { id: 'hy-shift-right', label: '⇧', value: 'Shift', code: 'ShiftRight', type: 'modifier', width: 1.5 },
      ],
    },
    // Row 5: Space bar with additional letters
    {
      keys: [
        { id: 'hy-ch', label: 'չ', value: 'չ', shiftValue: 'Չ', type: 'character', width: 1.5 },
        { id: 'hy-zh', label: 'ժ', value: 'ժ', shiftValue: 'Ժ', type: 'character', width: 1.5 },
        { id: 'hy-sh', label: 'շ', value: 'շ', shiftValue: 'Շ', type: 'character', width: 1.5 },
        { id: 'hy-ts', label: 'ց', value: 'ց', shiftValue: 'Ց', type: 'character', width: 1.5 },
        { id: 'hy-space', label: 'Space', value: ' ', code: 'Space', type: 'space', width: 3 },
        { id: 'hy-yo', label: 'յ', value: 'յ', shiftValue: 'Յ', type: 'character', width: 1.5 },
        { id: 'hy-rev', label: 'ռ', value: 'ռ', shiftValue: 'Ռ', type: 'character', width: 1.5 },
      ],
    },
  ],
  physicalKeyMap: {
    // Number row
    'Backquote': '՝',
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
    'Equal': 'ևա',
    // Top letter row
    'KeyQ': 'խ',
    'KeyW': 'փ',
    'KeyE': 'ե',
    'KeyR': 'ր',
    'KeyT': 'տ',
    'KeyY': 'ը',
    'KeyU': 'ու',
    'KeyI': 'ի',
    'KeyO': 'օ',
    'KeyP': 'պ',
    'BracketLeft': '«',
    'BracketRight': '»',
    'Backslash': '\\',
    // Home row
    'KeyA': 'ա',
    'KeyS': 'ս',
    'KeyD': 'դ',
    'KeyF': 'ֆ',
    'KeyG': 'գ',
    'KeyH': 'հ',
    'KeyJ': 'ձ',
    'KeyK': 'կ',
    'KeyL': 'լ',
    'Semicolon': ';',
    'Quote': "'",
    // Bottom row
    'KeyZ': 'զ',
    'KeyX': 'ղ',
    'KeyC': 'ծ',
    'KeyV': 'վ',
    'KeyB': 'բ',
    'KeyN': 'ն',
    'KeyM': 'մ',
    'Comma': ',',
    'Period': '.',
    'Slash': '/',
    'Space': ' ',
  },
};
