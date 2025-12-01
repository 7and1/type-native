
import { KeyboardLayout, KeyDefinition } from '../../types';

// --- Helpers ---
const k = (code: string, char: string, shift: string = '', width: number = 1): KeyDefinition => ({
  code, char, shift: shift || char.toUpperCase(), type: 'char', width
});

const action = (code: string, label: string, width: number = 1): KeyDefinition => ({
  code, char: '', label, type: 'action', width
});

// Common Action Rows
const row0Common = [action('Backspace', '⌫', 1.5)];
const row2EndCommon = [action('Enter', 'Enter', 1.8)];
const row3Common = [action('ShiftLeft', 'Shift', 2.3)];
const row3EndCommon = [action('ShiftRight', 'Shift', 2.3)];
const row4Common = [action('Space', ' ', 6)];

// ==========================================
// 1. WESTERN & NORTHERN EUROPE
// ==========================================

// --- ENGLISH (US) ---
const enRows: KeyDefinition[][] = [
  [k('Backquote', '`', '~'), k('Digit1', '1', '!'), k('Digit2', '2', '@'), k('Digit3', '3', '#'), k('Digit4', '4', '$'), k('Digit5', '5', '%'), k('Digit6', '6', '^'), k('Digit7', '7', '&'), k('Digit8', '8', '*'), k('Digit9', '9', '('), k('Digit0', '0', ')'), k('Minus', '-', '_'), k('Equal', '=', '+'), ...row0Common],
  [action('Tab', 'Tab', 1.5), k('KeyQ', 'q'), k('KeyW', 'w'), k('KeyE', 'e'), k('KeyR', 'r'), k('KeyT', 't'), k('KeyY', 'y'), k('KeyU', 'u'), k('KeyI', 'i'), k('KeyO', 'o'), k('KeyP', 'p'), k('BracketLeft', '[', '{'), k('BracketRight', ']', '}')],
  [action('CapsLock', 'Caps', 1.8), k('KeyA', 'a'), k('KeyS', 's'), k('KeyD', 'd'), k('KeyF', 'f'), k('KeyG', 'g'), k('KeyH', 'h'), k('KeyJ', 'j'), k('KeyK', 'k'), k('KeyL', 'l'), k('Semicolon', ';', ':'), k('Quote', "'", '"'), ...row2EndCommon],
  [...row3Common, k('KeyZ', 'z'), k('KeyX', 'x'), k('KeyC', 'c'), k('KeyV', 'v'), k('KeyB', 'b'), k('KeyN', 'n'), k('KeyM', 'm'), k('Comma', ',', '<'), k('Period', '.', '>'), k('Slash', '/', '?'), ...row3EndCommon],
  row4Common
];

// --- ENGLISH (UK) ---
const enGbRows: KeyDefinition[][] = [
  [k('Backquote', '`', '¬'), k('Digit1', '1', '!'), k('Digit2', '2', '"'), k('Digit3', '3', '£'), k('Digit4', '4', '$'), k('Digit5', '5', '%'), k('Digit6', '6', '^'), k('Digit7', '7', '&'), k('Digit8', '8', '*'), k('Digit9', '9', '('), k('Digit0', '0', ')'), k('Minus', '-', '_'), k('Equal', '=', '+'), ...row0Common],
  [action('Tab', 'Tab', 1.5), k('KeyQ', 'q'), k('KeyW', 'w'), k('KeyE', 'e'), k('KeyR', 'r'), k('KeyT', 't'), k('KeyY', 'y'), k('KeyU', 'u'), k('KeyI', 'i'), k('KeyO', 'o'), k('KeyP', 'p'), k('BracketLeft', '[', '{'), k('BracketRight', ']', '}')],
  [action('CapsLock', 'Caps', 1.8), k('KeyA', 'a'), k('KeyS', 's'), k('KeyD', 'd'), k('KeyF', 'f'), k('KeyG', 'g'), k('KeyH', 'h'), k('KeyJ', 'j'), k('KeyK', 'k'), k('KeyL', 'l'), k('Semicolon', ';', ':'), k('Quote', "'", '@'), ...row2EndCommon],
  [...row3Common, k('KeyZ', 'z'), k('KeyX', 'x'), k('KeyC', 'c'), k('KeyV', 'v'), k('KeyB', 'b'), k('KeyN', 'n'), k('KeyM', 'm'), k('Comma', ',', '<'), k('Period', '.', '>'), k('Slash', '/', '?'), ...row3EndCommon],
  row4Common
];

// --- ICELANDIC ---
const isRows: KeyDefinition[][] = [
  [k('Backquote', 'ö', 'Ö'), k('Digit1', '1', '!'), k('Digit2', '2', '"'), k('Digit3', '3', '#'), k('Digit4', '4', '$'), k('Digit5', '5', '%'), k('Digit6', '6', '&'), k('Digit7', '7', '/'), k('Digit8', '8', '('), k('Digit9', '9', ')'), k('Digit0', '0', '='), k('Minus', 'ð', 'Ð'), k('Equal', '-', '_'), ...row0Common],
  [action('Tab', 'Tab', 1.5), k('KeyQ', 'q'), k('KeyW', 'w'), k('KeyE', 'e'), k('KeyR', 'r'), k('KeyT', 't'), k('KeyY', 'y'), k('KeyU', 'u'), k('KeyI', 'i'), k('KeyO', 'o'), k('KeyP', 'p'), k('BracketLeft', 'ð', 'Ð'), k('BracketRight', "'", '?')],
  [action('CapsLock', 'Caps', 1.8), k('KeyA', 'a'), k('KeyS', 's'), k('KeyD', 'd'), k('KeyF', 'f'), k('KeyG', 'g'), k('KeyH', 'h'), k('KeyJ', 'j'), k('KeyK', 'k'), k('KeyL', 'l'), k('Semicolon', 'æ', 'Æ'), k('Quote', '´', '"'), ...row2EndCommon],
  [...row3Common, k('KeyZ', 'z'), k('KeyX', 'x'), k('KeyC', 'c'), k('KeyV', 'v'), k('KeyB', 'b'), k('KeyN', 'n'), k('KeyM', 'm'), k('Comma', ',', ';'), k('Period', '.', ':'), k('Slash', 'þ', 'Þ'), ...row3EndCommon],
  row4Common
];

// --- FRENCH (AZERTY) ---
const frRows: KeyDefinition[][] = [
  [k('Backquote', '²', '³'), k('Digit1', '&', '1'), k('Digit2', 'é', '2'), k('Digit3', '"', '3'), k('Digit4', "'", '4'), k('Digit5', '(', '5'), k('Digit6', '-', '6'), k('Digit7', 'è', '7'), k('Digit8', '_', '8'), k('Digit9', 'ç', '9'), k('Digit0', 'à', '0'), k('Minus', ')', '°'), k('Equal', '=', '+'), ...row0Common],
  [action('Tab', 'Tab', 1.5), k('KeyQ', 'a'), k('KeyW', 'z'), k('KeyE', 'e'), k('KeyR', 'r'), k('KeyT', 't'), k('KeyY', 'y'), k('KeyU', 'u'), k('KeyI', 'i'), k('KeyO', 'o'), k('KeyP', 'p'), k('BracketLeft', '^', '¨'), k('BracketRight', '$', '£')],
  [action('CapsLock', 'Caps', 1.8), k('KeyA', 'q'), k('KeyS', 's'), k('KeyD', 'd'), k('KeyF', 'f'), k('KeyG', 'g'), k('KeyH', 'h'), k('KeyJ', 'j'), k('KeyK', 'k'), k('KeyL', 'l'), k('Semicolon', 'm'), k('Quote', 'ù', '%'), ...row2EndCommon],
  [...row3Common, k('KeyZ', 'w'), k('KeyX', 'x'), k('KeyC', 'c'), k('KeyV', 'v'), k('KeyB', 'b'), k('KeyN', 'n'), k('KeyM', ','), k('Comma', ';', '.'), k('Period', ':', '/'), k('Slash', '!', '§'), ...row3EndCommon],
  row4Common
];

// --- SWISS FRENCH/GERMAN (QWERTZ) ---
const chRows: KeyDefinition[][] = [
  [k('Backquote', '§', '°'), k('Digit1', '1', '+'), k('Digit2', '2', '"'), k('Digit3', '3', '*'), k('Digit4', '4', 'ç'), k('Digit5', '5', '%'), k('Digit6', '6', '&'), k('Digit7', '7', '/'), k('Digit8', '8', '('), k('Digit9', '9', ')'), k('Digit0', '0', '='), k('Minus', "'", '?'), k('Equal', '^', '`'), ...row0Common],
  [action('Tab', 'Tab', 1.5), k('KeyQ', 'q'), k('KeyW', 'w'), k('KeyE', 'e'), k('KeyR', 'r'), k('KeyT', 't'), k('KeyY', 'z'), k('KeyU', 'u'), k('KeyI', 'i'), k('KeyO', 'o'), k('KeyP', 'p'), k('BracketLeft', 'è', 'ü'), k('BracketRight', '!', '¨')],
  [action('CapsLock', 'Caps', 1.8), k('KeyA', 'a'), k('KeyS', 's'), k('KeyD', 'd'), k('KeyF', 'f'), k('KeyG', 'g'), k('KeyH', 'h'), k('KeyJ', 'j'), k('KeyK', 'k'), k('KeyL', 'l'), k('Semicolon', 'é', 'ö'), k('Quote', 'à', 'ä'), ...row2EndCommon],
  [...row3Common, k('KeyZ', 'y'), k('KeyX', 'x'), k('KeyC', 'c'), k('KeyV', 'v'), k('KeyB', 'b'), k('KeyN', 'n'), k('KeyM', 'm'), k('Comma', ',', ';'), k('Period', '.', ':'), k('Slash', '-', '_'), ...row3EndCommon],
  row4Common
];

// --- GERMAN (QWERTZ) ---
const deRows: KeyDefinition[][] = [
  [k('Backquote', '^', '°'), k('Digit1', '1', '!'), k('Digit2', '2', '"'), k('Digit3', '3', '§'), k('Digit4', '4', '$'), k('Digit5', '5', '%'), k('Digit6', '6', '&'), k('Digit7', '7', '/'), k('Digit8', '8', '('), k('Digit9', '9', ')'), k('Digit0', '0', '='), k('Minus', 'ß', '?'), k('Equal', '´', '`'), ...row0Common],
  [action('Tab', 'Tab', 1.5), k('KeyQ', 'q'), k('KeyW', 'w'), k('KeyE', 'e'), k('KeyR', 'r'), k('KeyT', 't'), k('KeyY', 'z'), k('KeyU', 'u'), k('KeyI', 'i'), k('KeyO', 'o'), k('KeyP', 'p'), k('BracketLeft', 'ü', 'Ü'), k('BracketRight', '+', '*')],
  [action('CapsLock', 'Caps', 1.8), k('KeyA', 'a'), k('KeyS', 's'), k('KeyD', 'd'), k('KeyF', 'f'), k('KeyG', 'g'), k('KeyH', 'h'), k('KeyJ', 'j'), k('KeyK', 'k'), k('KeyL', 'l'), k('Semicolon', 'ö', 'Ö'), k('Quote', 'ä', 'Ä'), ...row2EndCommon],
  [...row3Common, k('KeyZ', 'y'), k('KeyX', 'x'), k('KeyC', 'c'), k('KeyV', 'v'), k('KeyB', 'b'), k('KeyN', 'n'), k('KeyM', 'm'), k('Comma', ',', ';'), k('Period', '.', ':'), k('Slash', '-', '_'), ...row3EndCommon],
  row4Common
];

// --- ITALIAN ---
const itRows: KeyDefinition[][] = [
  [k('Backquote', '\\', '|'), k('Digit1', '1', '!'), k('Digit2', '2', '"'), k('Digit3', '3', '£'), k('Digit4', '4', '$'), k('Digit5', '5', '%'), k('Digit6', '6', '&'), k('Digit7', '7', '/'), k('Digit8', '8', '('), k('Digit9', '9', ')'), k('Digit0', '0', '='), k('Minus', "'", '?'), k('Equal', 'ì', '^'), ...row0Common],
  [action('Tab', 'Tab', 1.5), k('KeyQ', 'q'), k('KeyW', 'w'), k('KeyE', 'e'), k('KeyR', 'r'), k('KeyT', 't'), k('KeyY', 'y'), k('KeyU', 'u'), k('KeyI', 'i'), k('KeyO', 'o'), k('KeyP', 'p'), k('BracketLeft', 'è', 'é'), k('BracketRight', '+', '*')],
  [action('CapsLock', 'Caps', 1.8), k('KeyA', 'a'), k('KeyS', 's'), k('KeyD', 'd'), k('KeyF', 'f'), k('KeyG', 'g'), k('KeyH', 'h'), k('KeyJ', 'j'), k('KeyK', 'k'), k('KeyL', 'l'), k('Semicolon', 'ò', 'ç'), k('Quote', 'à', '°'), ...row2EndCommon],
  [...row3Common, k('KeyZ', 'z'), k('KeyX', 'x'), k('KeyC', 'c'), k('KeyV', 'v'), k('KeyB', 'b'), k('KeyN', 'n'), k('KeyM', 'm'), k('Comma', ',', ';'), k('Period', '.', ':'), k('Slash', '-', '_'), ...row3EndCommon],
  row4Common
];

// --- SPANISH (ES) ---
const esRows: KeyDefinition[][] = [
  [k('Backquote', 'º', 'ª'), k('Digit1', '1', '!'), k('Digit2', '2', '"'), k('Digit3', '3', '·'), k('Digit4', '4', '$'), k('Digit5', '5', '%'), k('Digit6', '6', '&'), k('Digit7', '7', '/'), k('Digit8', '8', '('), k('Digit9', '9', ')'), k('Digit0', '0', '='), k('Minus', "'", '?'), k('Equal', '¡', '¿'), ...row0Common],
  [action('Tab', 'Tab', 1.5), k('KeyQ', 'q'), k('KeyW', 'w'), k('KeyE', 'e'), k('KeyR', 'r'), k('KeyT', 't'), k('KeyY', 'y'), k('KeyU', 'u'), k('KeyI', 'i'), k('KeyO', 'o'), k('KeyP', 'p'), k('BracketLeft', '`', '^'), k('BracketRight', '+', '*')],
  [action('CapsLock', 'Caps', 1.8), k('KeyA', 'a'), k('KeyS', 's'), k('KeyD', 'd'), k('KeyF', 'f'), k('KeyG', 'g'), k('KeyH', 'h'), k('KeyJ', 'j'), k('KeyK', 'k'), k('KeyL', 'l'), k('Semicolon', 'ñ', 'Ñ'), k('Quote', '´', '¨'), ...row2EndCommon],
  [...row3Common, k('KeyZ', 'z'), k('KeyX', 'x'), k('KeyC', 'c'), k('KeyV', 'v'), k('KeyB', 'b'), k('KeyN', 'n'), k('KeyM', 'm'), k('Comma', ',', ';'), k('Period', '.', ':'), k('Slash', '-', '_'), ...row3EndCommon],
  row4Common
];

// --- NORDIC (SV/FI) ---
const svRows: KeyDefinition[][] = [
  [k('Backquote', '§', '½'), k('Digit1', '1', '!'), k('Digit2', '2', '"'), k('Digit3', '3', '#'), k('Digit4', '4', '¤'), k('Digit5', '5', '%'), k('Digit6', '6', '&'), k('Digit7', '7', '/'), k('Digit8', '8', '('), k('Digit9', '9', ')'), k('Digit0', '0', '='), k('Minus', '+', '?'), k('Equal', '´', '`'), ...row0Common],
  [action('Tab', 'Tab', 1.5), k('KeyQ', 'q'), k('KeyW', 'w'), k('KeyE', 'e'), k('KeyR', 'r'), k('KeyT', 't'), k('KeyY', 'y'), k('KeyU', 'u'), k('KeyI', 'i'), k('KeyO', 'o'), k('KeyP', 'p'), k('BracketLeft', 'å', 'Å'), k('BracketRight', '¨', '^')],
  [action('CapsLock', 'Caps', 1.8), k('KeyA', 'a'), k('KeyS', 's'), k('KeyD', 'd'), k('KeyF', 'f'), k('KeyG', 'g'), k('KeyH', 'h'), k('KeyJ', 'j'), k('KeyK', 'k'), k('KeyL', 'l'), k('Semicolon', 'ö', 'Ö'), k('Quote', 'ä', 'Ä'), ...row2EndCommon],
  [...row3Common, k('KeyZ', 'z'), k('KeyX', 'x'), k('KeyC', 'c'), k('KeyV', 'v'), k('KeyB', 'b'), k('KeyN', 'n'), k('KeyM', 'm'), k('Comma', ',', ';'), k('Period', '.', ':'), k('Slash', '-', '_'), ...row3EndCommon],
  row4Common
];

// --- DANISH/NORWEGIAN (DA/NO) ---
const daRows: KeyDefinition[][] = [
  [k('Backquote', '½', '§'), k('Digit1', '1', '!'), k('Digit2', '2', '"'), k('Digit3', '3', '#'), k('Digit4', '4', '¤'), k('Digit5', '5', '%'), k('Digit6', '6', '&'), k('Digit7', '7', '/'), k('Digit8', '8', '('), k('Digit9', '9', ')'), k('Digit0', '0', '='), k('Minus', '+', '?'), k('Equal', '´', '`'), ...row0Common],
  [action('Tab', 'Tab', 1.5), k('KeyQ', 'q'), k('KeyW', 'w'), k('KeyE', 'e'), k('KeyR', 'r'), k('KeyT', 't'), k('KeyY', 'y'), k('KeyU', 'u'), k('KeyI', 'i'), k('KeyO', 'o'), k('KeyP', 'p'), k('BracketLeft', 'å', 'Å'), k('BracketRight', '¨', '^')],
  [action('CapsLock', 'Caps', 1.8), k('KeyA', 'a'), k('KeyS', 's'), k('KeyD', 'd'), k('KeyF', 'f'), k('KeyG', 'g'), k('KeyH', 'h'), k('KeyJ', 'j'), k('KeyK', 'k'), k('KeyL', 'l'), k('Semicolon', 'æ', 'Æ'), k('Quote', 'ø', 'Ø'), ...row2EndCommon],
  [...row3Common, k('KeyZ', 'z'), k('KeyX', 'x'), k('KeyC', 'c'), k('KeyV', 'v'), k('KeyB', 'b'), k('KeyN', 'n'), k('KeyM', 'm'), k('Comma', ',', ';'), k('Period', '.', ':'), k('Slash', '-', '_'), ...row3EndCommon],
  row4Common
];

// --- ESTONIAN ---
const etRows: KeyDefinition[][] = [
  [k('Backquote', 'ˇ', '~'), k('Digit1', '1', '!'), k('Digit2', '2', '"'), k('Digit3', '3', '#'), k('Digit4', '4', '¤'), k('Digit5', '5', '%'), k('Digit6', '6', '&'), k('Digit7', '7', '/'), k('Digit8', '8', '('), k('Digit9', '9', ')'), k('Digit0', '0', '='), k('Minus', '+', '?'), k('Equal', '´', '`'), ...row0Common],
  [action('Tab', 'Tab', 1.5), k('KeyQ', 'q'), k('KeyW', 'w'), k('KeyE', 'e'), k('KeyR', 'r'), k('KeyT', 't'), k('KeyY', 'y'), k('KeyU', 'u'), k('KeyI', 'i'), k('KeyO', 'o'), k('KeyP', 'p'), k('BracketLeft', 'ü', 'Ü'), k('BracketRight', 'õ', 'Õ')],
  [action('CapsLock', 'Caps', 1.8), k('KeyA', 'a'), k('KeyS', 's'), k('KeyD', 'd'), k('KeyF', 'f'), k('KeyG', 'g'), k('KeyH', 'h'), k('KeyJ', 'j'), k('KeyK', 'k'), k('KeyL', 'l'), k('Semicolon', 'ö', 'Ö'), k('Quote', 'ä', 'Ä'), ...row2EndCommon],
  [...row3Common, k('KeyZ', 'z'), k('KeyX', 'x'), k('KeyC', 'c'), k('KeyV', 'v'), k('KeyB', 'b'), k('KeyN', 'n'), k('KeyM', 'm'), k('Comma', ',', ';'), k('Period', '.', ':'), k('Slash', '-', '_'), ...row3EndCommon],
  row4Common
];

// --- PORTUGUESE (PT) ---
const ptRows: KeyDefinition[][] = [
  [k('Backquote', '\\', '|'), k('Digit1', '1', '!'), k('Digit2', '2', '"'), k('Digit3', '3', '#'), k('Digit4', '4', '$'), k('Digit5', '5', '%'), k('Digit6', '6', '&'), k('Digit7', '7', '/'), k('Digit8', '8', '('), k('Digit9', '9', ')'), k('Digit0', '0', '='), k('Minus', "'", '?'), k('Equal', '«', '»'), ...row0Common],
  [action('Tab', 'Tab', 1.5), k('KeyQ', 'q'), k('KeyW', 'w'), k('KeyE', 'e'), k('KeyR', 'r'), k('KeyT', 't'), k('KeyY', 'y'), k('KeyU', 'u'), k('KeyI', 'i'), k('KeyO', 'o'), k('KeyP', 'p'), k('BracketLeft', '+', '*'), k('BracketRight', '´', '`')],
  [action('CapsLock', 'Caps', 1.8), k('KeyA', 'a'), k('KeyS', 's'), k('KeyD', 'd'), k('KeyF', 'f'), k('KeyG', 'g'), k('KeyH', 'h'), k('KeyJ', 'j'), k('KeyK', 'k'), k('KeyL', 'l'), k('Semicolon', 'ç', 'Ç'), k('Quote', 'º', 'ª'), ...row2EndCommon],
  [...row3Common, k('KeyZ', 'z'), k('KeyX', 'x'), k('KeyC', 'c'), k('KeyV', 'v'), k('KeyB', 'b'), k('KeyN', 'n'), k('KeyM', 'm'), k('Comma', ',', ';'), k('Period', '.', ':'), k('Slash', '-', '_'), ...row3EndCommon],
  row4Common
];

// --- MALTESE ---
const mtRows: KeyDefinition[][] = [
  [k('Backquote', '`', '~'), k('Digit1', '1', '!'), k('Digit2', '2', '@'), k('Digit3', '3', '£'), k('Digit4', '4', '$'), k('Digit5', '5', '%'), k('Digit6', '6', '^'), k('Digit7', '7', '&'), k('Digit8', '8', '*'), k('Digit9', '9', '('), k('Digit0', '0', ')'), k('Minus', '-', '_'), k('Equal', '=', '+'), ...row0Common],
  [action('Tab', 'Tab', 1.5), k('KeyQ', 'q'), k('KeyW', 'w'), k('KeyE', 'e'), k('KeyR', 'r'), k('KeyT', 't'), k('KeyY', 'y'), k('KeyU', 'u'), k('KeyI', 'i'), k('KeyO', 'o'), k('KeyP', 'p'), k('BracketLeft', 'ġ', 'Ġ'), k('BracketRight', 'ħ', 'Ħ')],
  [action('CapsLock', 'Caps', 1.8), k('KeyA', 'a'), k('KeyS', 's'), k('KeyD', 'd'), k('KeyF', 'f'), k('KeyG', 'g'), k('KeyH', 'h'), k('KeyJ', 'j'), k('KeyK', 'k'), k('KeyL', 'l'), k('Semicolon', 'ż', 'Ż'), k('Quote', 'ċ', 'Ċ'), ...row2EndCommon],
  [...row3Common, k('KeyZ', 'z'), k('KeyX', 'x'), k('KeyC', 'c'), k('KeyV', 'v'), k('KeyB', 'b'), k('KeyN', 'n'), k('KeyM', 'm'), k('Comma', ',', '<'), k('Period', '.', '>'), k('Slash', '/', '?'), ...row3EndCommon],
  row4Common
];

// --- ALBANIAN ---
const sqRows: KeyDefinition[][] = [
  [k('Backquote', '|', '¬'), k('Digit1', '1', '!'), k('Digit2', '2', '"'), k('Digit3', '3', '#'), k('Digit4', '4', '$'), k('Digit5', '5', '%'), k('Digit6', '6', '&'), k('Digit7', '7', '/'), k('Digit8', '8', '('), k('Digit9', '9', ')'), k('Digit0', '0', '='), k('Minus', "'", '?'), k('Equal', 'ì', '^'), ...row0Common],
  [action('Tab', 'Tab', 1.5), k('KeyQ', 'q'), k('KeyW', 'w'), k('KeyE', 'e'), k('KeyR', 'r'), k('KeyT', 't'), k('KeyY', 'z'), k('KeyU', 'u'), k('KeyI', 'i'), k('KeyO', 'o'), k('KeyP', 'p'), k('BracketLeft', 'ç', 'Ç'), k('BracketRight', 'é', 'É')],
  [action('CapsLock', 'Caps', 1.8), k('KeyA', 'a'), k('KeyS', 's'), k('KeyD', 'd'), k('KeyF', 'f'), k('KeyG', 'g'), k('KeyH', 'h'), k('KeyJ', 'j'), k('KeyK', 'k'), k('KeyL', 'l'), k('Semicolon', 'ë', 'Ë'), k('Quote', 'à', 'À'), ...row2EndCommon],
  [...row3Common, k('KeyZ', 'y'), k('KeyX', 'x'), k('KeyC', 'c'), k('KeyV', 'v'), k('KeyB', 'b'), k('KeyN', 'n'), k('KeyM', 'm'), k('Comma', ',', ';'), k('Period', '.', ':'), k('Slash', '-', '_'), ...row3EndCommon],
  row4Common
];

// ==========================================
// 2. CENTRAL & EASTERN EUROPE
// ==========================================

// --- RUSSIAN (CYRILLIC) ---
const ruRows: KeyDefinition[][] = [
  [k('Backquote', 'ё', 'Ё'), k('Digit1', '1', '!'), k('Digit2', '2', '"'), k('Digit3', '3', '№'), k('Digit4', '4', ';'), k('Digit5', '5', '%'), k('Digit6', '6', ':'), k('Digit7', '7', '?'), k('Digit8', '8', '*'), k('Digit9', '9', '('), k('Digit0', '0', ')'), k('Minus', '-', '_'), k('Equal', '=', '+'), ...row0Common],
  [action('Tab', 'Tab', 1.5), k('KeyQ', 'й', 'Й'), k('KeyW', 'ц', 'Ц'), k('KeyE', 'у', 'У'), k('KeyR', 'к', 'К'), k('KeyT', 'е', 'Е'), k('KeyY', 'н', 'Н'), k('KeyU', 'г', 'Г'), k('KeyI', 'ш', 'Ш'), k('KeyO', 'щ', 'Щ'), k('KeyP', 'з', 'З'), k('BracketLeft', 'х', 'Х'), k('BracketRight', 'ъ', 'Ъ')],
  [action('CapsLock', 'Caps', 1.8), k('KeyA', 'ф', 'Ф'), k('KeyS', 'ы', 'Ы'), k('KeyD', 'в', 'В'), k('KeyF', 'а', 'А'), k('KeyG', 'п', 'П'), k('KeyH', 'р', 'Р'), k('KeyJ', 'о', 'О'), k('KeyK', 'л', 'Л'), k('KeyL', 'д', 'Д'), k('Semicolon', 'ж', 'Ж'), k('Quote', 'э', 'Э'), ...row2EndCommon],
  [...row3Common, k('KeyZ', 'я', 'Я'), k('KeyX', 'ч', 'Ч'), k('KeyC', 'с', 'С'), k('KeyV', 'м', 'М'), k('KeyB', 'и', 'И'), k('KeyN', 'т', 'Т'), k('KeyM', 'ь', 'Ь'), k('Comma', 'б', 'Б'), k('Period', 'ю', 'Ю'), k('Slash', '.', ','), ...row3EndCommon],
  row4Common
];

// --- UKRAINIAN ---
const ukRows: KeyDefinition[][] = [
  [k('Backquote', "'", '₴'), k('Digit1', '1', '!'), k('Digit2', '2', '"'), k('Digit3', '3', '№'), k('Digit4', '4', ';'), k('Digit5', '5', '%'), k('Digit6', '6', ':'), k('Digit7', '7', '?'), k('Digit8', '8', '*'), k('Digit9', '9', '('), k('Digit0', '0', ')'), k('Minus', '-', '_'), k('Equal', '=', '+'), ...row0Common],
  [action('Tab', 'Tab', 1.5), k('KeyQ', 'й', 'Й'), k('KeyW', 'ц', 'Ц'), k('KeyE', 'у', 'У'), k('KeyR', 'к', 'К'), k('KeyT', 'е', 'Е'), k('KeyY', 'н', 'Н'), k('KeyU', 'г', 'Г'), k('KeyI', 'ш', 'Ш'), k('KeyO', 'щ', 'Щ'), k('KeyP', 'з', 'З'), k('BracketLeft', 'х', 'Х'), k('BracketRight', 'ї', 'Ї')],
  [action('CapsLock', 'Caps', 1.8), k('KeyA', 'ф', 'Ф'), k('KeyS', 'і', 'І'), k('KeyD', 'в', 'В'), k('KeyF', 'а', 'А'), k('KeyG', 'п', 'П'), k('KeyH', 'р', 'Р'), k('KeyJ', 'о', 'О'), k('KeyK', 'л', 'Л'), k('KeyL', 'д', 'Д'), k('Semicolon', 'ж', 'Ж'), k('Quote', 'є', 'Є'), ...row2EndCommon],
  [...row3Common, k('KeyZ', 'я', 'Я'), k('KeyX', 'ч', 'Ч'), k('KeyC', 'с', 'С'), k('KeyV', 'м', 'М'), k('KeyB', 'и', 'И'), k('KeyN', 'т', 'Т'), k('KeyM', 'ь', 'Ь'), k('Comma', 'б', 'Б'), k('Period', 'ю', 'Ю'), k('Slash', '.', ','), ...row3EndCommon],
  row4Common
];

// --- CZECH (QWERTZ) ---
const csRows: KeyDefinition[][] = [
  [k('Backquote', ';', '°'), k('Digit1', '+', '1'), k('Digit2', 'ě', '2'), k('Digit3', 'š', '3'), k('Digit4', 'č', '4'), k('Digit5', 'ř', '5'), k('Digit6', 'ž', '6'), k('Digit7', 'ý', '7'), k('Digit8', 'á', '8'), k('Digit9', 'í', '9'), k('Digit0', 'é', '0'), k('Minus', '=', '%'), k('Equal', '´', 'ˇ'), ...row0Common],
  [action('Tab', 'Tab', 1.5), k('KeyQ', 'q'), k('KeyW', 'w'), k('KeyE', 'e'), k('KeyR', 'r'), k('KeyT', 't'), k('KeyY', 'z'), k('KeyU', 'u'), k('KeyI', 'i'), k('KeyO', 'o'), k('KeyP', 'p'), k('BracketLeft', 'ú', '/'), k('BracketRight', ')', '(')],
  [action('CapsLock', 'Caps', 1.8), k('KeyA', 'a'), k('KeyS', 's'), k('KeyD', 'd'), k('KeyF', 'f'), k('KeyG', 'g'), k('KeyH', 'h'), k('KeyJ', 'j'), k('KeyK', 'k'), k('KeyL', 'l'), k('Semicolon', 'ů', '"'), k('Quote', '§', '!'), ...row2EndCommon],
  [...row3Common, k('KeyZ', 'y'), k('KeyX', 'x'), k('KeyC', 'c'), k('KeyV', 'v'), k('KeyB', 'b'), k('KeyN', 'n'), k('KeyM', 'm'), k('Comma', ',', '?'), k('Period', '.', ':'), k('Slash', '-', '_'), ...row3EndCommon],
  row4Common
];

// --- HUNGARIAN ---
const huRows: KeyDefinition[][] = [
  [k('Backquote', '0', '§'), k('Digit1', '1', "'"), k('Digit2', '2', '"'), k('Digit3', '3', '+'), k('Digit4', '4', '!'), k('Digit5', '5', '%'), k('Digit6', '6', '/'), k('Digit7', '7', '='), k('Digit8', '8', '('), k('Digit9', '9', ')'), k('Digit0', 'ö', 'Ö'), k('Minus', 'ü', 'Ü'), k('Equal', 'ó', 'Ó'), ...row0Common],
  [action('Tab', 'Tab', 1.5), k('KeyQ', 'q'), k('KeyW', 'w'), k('KeyE', 'e'), k('KeyR', 'r'), k('KeyT', 't'), k('KeyY', 'z'), k('KeyU', 'u'), k('KeyI', 'i'), k('KeyO', 'o'), k('KeyP', 'p'), k('BracketLeft', 'ő', 'Ő'), k('BracketRight', 'ú', 'Ú')],
  [action('CapsLock', 'Caps', 1.8), k('KeyA', 'a'), k('KeyS', 's'), k('KeyD', 'd'), k('KeyF', 'f'), k('KeyG', 'g'), k('KeyH', 'h'), k('KeyJ', 'j'), k('KeyK', 'k'), k('KeyL', 'l'), k('Semicolon', 'é', 'É'), k('Quote', 'á', 'Á'), ...row2EndCommon],
  [...row3Common, k('KeyZ', 'y'), k('KeyX', 'x'), k('KeyC', 'c'), k('KeyV', 'v'), k('KeyB', 'b'), k('KeyN', 'n'), k('KeyM', 'm'), k('Comma', ',', '?'), k('Period', '.', ':'), k('Slash', '-', '_'), ...row3EndCommon],
  row4Common
];

// --- ROMANIAN ---
const roRows: KeyDefinition[][] = [
  [k('Backquote', '`', '~'), k('Digit1', '1', '!'), k('Digit2', '2', '@'), k('Digit3', '3', '#'), k('Digit4', '4', '$'), k('Digit5', '5', '%'), k('Digit6', '6', '^'), k('Digit7', '7', '&'), k('Digit8', '8', '*'), k('Digit9', '9', '('), k('Digit0', '0', ')'), k('Minus', '-', '_'), k('Equal', '=', '+'), ...row0Common],
  [action('Tab', 'Tab', 1.5), k('KeyQ', 'q'), k('KeyW', 'w'), k('KeyE', 'e'), k('KeyR', 'r'), k('KeyT', 't'), k('KeyY', 'y'), k('KeyU', 'u'), k('KeyI', 'i'), k('KeyO', 'o'), k('KeyP', 'p'), k('BracketLeft', 'ă', 'Ă'), k('BracketRight', 'î', 'Î')],
  [action('CapsLock', 'Caps', 1.8), k('KeyA', 'a'), k('KeyS', 's'), k('KeyD', 'd'), k('KeyF', 'f'), k('KeyG', 'g'), k('KeyH', 'h'), k('KeyJ', 'j'), k('KeyK', 'k'), k('KeyL', 'l'), k('Semicolon', 'ș', 'Ș'), k('Quote', 'ț', 'Ț'), ...row2EndCommon],
  [...row3Common, k('KeyZ', 'z'), k('KeyX', 'x'), k('KeyC', 'c'), k('KeyV', 'v'), k('KeyB', 'b'), k('KeyN', 'n'), k('KeyM', 'm'), k('Comma', ',', ';'), k('Period', '.', ':'), k('Slash', '/', '?'), ...row3EndCommon],
  row4Common
];

// --- BALKAN (HR/SR/SL) ---
const hrRows: KeyDefinition[][] = [
  [k('Backquote', '¸', '¨'), k('Digit1', '1', '!'), k('Digit2', '2', '"'), k('Digit3', '3', '#'), k('Digit4', '4', '$'), k('Digit5', '5', '%'), k('Digit6', '6', '&'), k('Digit7', '7', '/'), k('Digit8', '8', '('), k('Digit9', '9', ')'), k('Digit0', '0', '='), k('Minus', "'", '?'), k('Equal', '+', '*'), ...row0Common],
  [action('Tab', 'Tab', 1.5), k('KeyQ', 'q'), k('KeyW', 'w'), k('KeyE', 'e'), k('KeyR', 'r'), k('KeyT', 't'), k('KeyY', 'z'), k('KeyU', 'u'), k('KeyI', 'i'), k('KeyO', 'o'), k('KeyP', 'p'), k('BracketLeft', 'š', 'Š'), k('BracketRight', 'đ', 'Đ')],
  [action('CapsLock', 'Caps', 1.8), k('KeyA', 'a'), k('KeyS', 's'), k('KeyD', 'd'), k('KeyF', 'f'), k('KeyG', 'g'), k('KeyH', 'h'), k('KeyJ', 'j'), k('KeyK', 'k'), k('KeyL', 'l'), k('Semicolon', 'č', 'Č'), k('Quote', 'ć', 'Ć'), ...row2EndCommon],
  [...row3Common, k('KeyZ', 'y'), k('KeyX', 'x'), k('KeyC', 'c'), k('KeyV', 'v'), k('KeyB', 'b'), k('KeyN', 'n'), k('KeyM', 'm'), k('Comma', ',', ';'), k('Period', '.', ':'), k('Slash', '-', '_'), ...row3EndCommon],
  row4Common
];

// --- TURKISH (Q) ---
const trRows: KeyDefinition[][] = [
  [k('Backquote', '"', 'é'), k('Digit1', '1', '!'), k('Digit2', '2', "'"), k('Digit3', '3', '^'), k('Digit4', '4', '+'), k('Digit5', '5', '%'), k('Digit6', '6', '&'), k('Digit7', '7', '/'), k('Digit8', '8', '('), k('Digit9', '9', ')'), k('Digit0', '0', '='), k('Minus', '*', '?'), k('Equal', '-', '_'), ...row0Common],
  [action('Tab', 'Tab', 1.5), k('KeyQ', 'q'), k('KeyW', 'w'), k('KeyE', 'e'), k('KeyR', 'r'), k('KeyT', 't'), k('KeyY', 'y'), k('KeyU', 'u'), k('KeyI', 'ı', 'I'), k('KeyO', 'o'), k('KeyP', 'p'), k('BracketLeft', 'ğ', 'Ğ'), k('BracketRight', 'ü', 'Ü')],
  [action('CapsLock', 'Caps', 1.8), k('KeyA', 'a'), k('KeyS', 's'), k('KeyD', 'd'), k('KeyF', 'f'), k('KeyG', 'g'), k('KeyH', 'h'), k('KeyJ', 'j'), k('KeyK', 'k'), k('KeyL', 'l'), k('Semicolon', 'ş', 'Ş'), k('Quote', 'i', 'İ'), ...row2EndCommon],
  [...row3Common, k('KeyZ', 'z'), k('KeyX', 'x'), k('KeyC', 'c'), k('KeyV', 'v'), k('KeyB', 'b'), k('KeyN', 'n'), k('KeyM', 'm'), k('Comma', 'ö', 'Ö'), k('Period', 'ç', 'Ç'), k('Slash', '.', ':'), ...row3EndCommon],
  row4Common
];

// --- GREEK ---
const elRows: KeyDefinition[][] = [
  [k('Backquote', '`', '~'), k('Digit1', '1', '!'), k('Digit2', '2', '@'), k('Digit3', '3', '#'), k('Digit4', '4', '$'), k('Digit5', '5', '%'), k('Digit6', '6', '^'), k('Digit7', '7', '&'), k('Digit8', '8', '*'), k('Digit9', '9', '('), k('Digit0', '0', ')'), k('Minus', '-', '_'), k('Equal', '=', '+'), ...row0Common],
  [action('Tab', 'Tab', 1.5), k('KeyQ', ';', ':'), k('KeyW', 'ς', '΅'), k('KeyE', 'ε', 'Ε'), k('KeyR', 'ρ', 'Ρ'), k('KeyT', 'τ', 'Τ'), k('KeyY', 'υ', 'Υ'), k('KeyU', 'θ', 'Θ'), k('KeyI', 'ι', 'Ι'), k('KeyO', 'ο', 'Ο'), k('KeyP', 'π', 'Π'), k('BracketLeft', '[', '{'), k('BracketRight', ']', '}')],
  [action('CapsLock', 'Caps', 1.8), k('KeyA', 'α', 'Α'), k('KeyS', 'σ', 'Σ'), k('KeyD', 'δ', 'Δ'), k('KeyF', 'φ', 'Φ'), k('KeyG', 'γ', 'Γ'), k('KeyH', 'η', 'Η'), k('KeyJ', 'ξ', 'Ξ'), k('KeyK', 'κ', 'Κ'), k('KeyL', 'λ', 'Λ'), k('Semicolon', '¨', '΄'), k('Quote', "'", '"'), ...row2EndCommon],
  [...row3Common, k('KeyZ', 'ζ', 'Ζ'), k('KeyX', 'χ', 'Χ'), k('KeyC', 'ψ', 'Ψ'), k('KeyV', 'ω', 'Ω'), k('KeyB', 'β', 'Β'), k('KeyN', 'ν', 'Ν'), k('KeyM', 'μ', 'Μ'), k('Comma', ',', '<'), k('Period', '.', '>'), k('Slash', '/', '?'), ...row3EndCommon],
  row4Common
];

// ==========================================
// 3. MIDDLE EAST & CENTRAL ASIA
// ==========================================

// --- ARABIC ---
const arRows: KeyDefinition[][] = [
  [k('Backquote', 'ذ', 'ّ'), k('Digit1', '١', '!'), k('Digit2', '٢', '@'), k('Digit3', '٣', '#'), k('Digit4', '٤', '$'), k('Digit5', '٥', '%'), k('Digit6', '٦', '^'), k('Digit7', '٧', '&'), k('Digit8', '٨', '*'), k('Digit9', '٩', ')'), k('Digit0', '٠', '('), ...row0Common],
  [action('Tab', 'Tab', 1.5), k('KeyQ', 'ض', 'َ'), k('KeyW', 'ص', 'ً'), k('KeyE', 'ث', 'ُ'), k('KeyR', 'ق', 'ٍ'), k('KeyT', 'ف', ' لإ'), k('KeyY', 'غ', 'إ'), k('KeyU', 'ع', '‘'), k('KeyI', 'ه', '÷'), k('KeyO', 'خ', '×'), k('KeyP', 'ح', '؛'), k('BracketLeft', 'ج', '<'), k('BracketRight', 'د', '>')],
  [action('CapsLock', 'Caps', 1.8), k('KeyA', 'ش', 'ِ'), k('KeyS', 'س', 'ٍ'), k('KeyD', 'ي', ']'), k('KeyF', 'ب', '['), k('KeyG', 'ل', 'لأ'), k('KeyH', 'ا', 'أ'), k('KeyJ', 'ت', 'ـ'), k('KeyK', 'ن', '،'), k('KeyL', 'م', '/'), k('Semicolon', 'ك', ':'), k('Quote', 'ط', '"'), ...row2EndCommon],
  [...row3Common, k('KeyZ', 'ئ', '~'), k('KeyX', 'ء', 'ْ'), k('KeyC', 'ؤ', '}'), k('KeyV', 'ر', '{'), k('KeyB', 'لا', 'لآ'), k('KeyN', 'ى', 'آ'), k('KeyM', 'ة', '\''), k('Comma', 'و', ','), k('Period', 'ز', '.'), k('Slash', 'ظ', '؟'), ...row3EndCommon],
  row4Common
];

// --- HEBREW ---
const heRows: KeyDefinition[][] = [
  [k('Backquote', ';', '~'), k('Digit1', '1', '!'), k('Digit2', '2', '@'), k('Digit3', '3', '#'), k('Digit4', '4', '$'), k('Digit5', '5', '%'), k('Digit6', '6', '^'), k('Digit7', '7', '&'), k('Digit8', '8', '*'), k('Digit9', '9', ')'), k('Digit0', '0', '('), k('Minus', '-', '_'), k('Equal', '=', '+'), ...row0Common],
  [action('Tab', 'Tab', 1.5), k('KeyQ', '/', 'Q'), k('KeyW', "'", 'W'), k('KeyE', 'ק', 'E'), k('KeyR', 'ר', 'R'), k('KeyT', 'א', 'T'), k('KeyY', 'ט', 'Y'), k('KeyU', 'ו', 'U'), k('KeyI', 'ן', 'I'), k('KeyO', 'ם', 'O'), k('KeyP', 'פ', 'P'), k('BracketLeft', ']', '{'), k('BracketRight', '[', '}')],
  [action('CapsLock', 'Caps', 1.8), k('KeyA', 'ש', 'A'), k('KeyS', 'ד', 'S'), k('KeyD', 'ג', 'D'), k('KeyF', 'כ', 'F'), k('KeyG', 'ע', 'G'), k('KeyH', 'י', 'H'), k('KeyJ', 'ח', 'J'), k('KeyK', 'ל', 'K'), k('KeyL', 'ך', 'L'), k('Semicolon', 'ף', ':'), k('Quote', ',', '"'), ...row2EndCommon],
  [...row3Common, k('KeyZ', 'ז', 'Z'), k('KeyX', 'ס', 'X'), k('KeyC', 'ב', 'C'), k('KeyV', 'ה', 'V'), k('KeyB', 'נ', 'B'), k('KeyN', 'מ', 'N'), k('KeyM', 'צ', 'M'), k('Comma', 'ת', '>'), k('Period', 'ץ', '<'), k('Slash', '.', '?'), ...row3EndCommon],
  row4Common
];

// --- PERSIAN (FARSI) ---
const faRows: KeyDefinition[][] = [
  [k('Backquote', '÷', '×'), k('Digit1', '۱', '!'), k('Digit2', '۲', '@'), k('Digit3', '۳', '#'), k('Digit4', '۴', '$'), k('Digit5', '۵', '%'), k('Digit6', '۶', '^'), k('Digit7', '۷', '&'), k('Digit8', '۸', '*'), k('Digit9', '۹', ')'), k('Digit0', '۰', '('), k('Minus', '-', '_'), k('Equal', '=', '+'), ...row0Common],
  [action('Tab', 'Tab', 1.5), k('KeyQ', 'ض', 'ْ'), k('KeyW', 'ص', 'ٌ'), k('KeyE', 'ث', 'ٍ'), k('KeyR', 'ق', 'ً'), k('KeyT', 'ف', 'ُ'), k('KeyY', 'غ', 'ِ'), k('KeyU', 'ع', 'َ'), k('KeyI', 'ه', 'ّ'), k('KeyO', 'خ', ']'), k('KeyP', 'ح', '['), k('BracketLeft', 'ج', '}'), k('BracketRight', 'چ', '{')],
  [action('CapsLock', 'Caps', 1.8), k('KeyA', 'ش', 'ؤ'), k('KeyS', 'س', 'ئ'), k('KeyD', 'ی', 'ي'), k('KeyF', 'ب', 'إ'), k('KeyG', 'ل', 'أ'), k('KeyH', 'ا', 'آ'), k('KeyJ', 'ت', 'ة'), k('KeyK', 'ن', '«'), k('KeyL', 'م', '»'), k('Semicolon', 'ک', ':'), k('Quote', 'گ', '؛'), ...row2EndCommon],
  [...row3Common, k('KeyZ', 'ظ', 'ك'), k('KeyX', 'ط', 'ٓ'), k('KeyC', 'ز', 'ژ'), k('KeyV', 'ر', 'ٰ'), k('KeyB', 'ذ', '‌'), k('KeyN', 'د', 'ٔ'), k('KeyM', 'پ', 'ء'), k('Comma', 'و', '<'), k('Period', '.', '>'), k('Slash', '/', '؟'), ...row3EndCommon],
  row4Common
];

// --- URDU ---
const urRows: KeyDefinition[][] = [
  [k('Backquote', '`', '~'), k('Digit1', '۱', '!'), k('Digit2', '۲', '@'), k('Digit3', '۳', '#'), k('Digit4', '۴', '$'), k('Digit5', '۵', '%'), k('Digit6', '۶', '^'), k('Digit7', '۷', '&'), k('Digit8', '۸', '*'), k('Digit9', '۹', ')'), k('Digit0', '۰', '('), k('Minus', '-', '_'), k('Equal', '=', '+'), ...row0Common],
  [action('Tab', 'Tab', 1.5), k('KeyQ', 'ط', 'ظ'), k('KeyW', 'ص', 'ض'), k('KeyE', 'ھ', 'ہ'), k('KeyR', 'ر', 'ڑ'), k('KeyT', 'ت', 'ٹ'), k('KeyY', 'ے', 'ۓ'), k('KeyU', 'ء', 'ئ'), k('KeyI', 'ی', 'ي'), k('KeyO', 'ہ', 'ۃ'), k('KeyP', 'پ', 'ُ'), k('BracketLeft', '[', '{'), k('BracketRight', ']', '}')],
  [action('CapsLock', 'Caps', 1.8), k('KeyA', 'ا', 'آ'), k('KeyS', 'س', 'ص'), k('KeyD', 'd', 'ڈ'), k('KeyF', 'ف', 'ڈ'), k('KeyG', 'گ', 'غ'), k('KeyH', 'ح', 'ھ'), k('KeyJ', 'ج', 'ض'), k('KeyK', 'ک', 'خ'), k('KeyL', 'ل', 'رحمۃ'), k('Semicolon', '؛', ':'), k('Quote', "'", '"'), ...row2EndCommon],
  [...row3Common, k('KeyZ', 'ز', 'ذ'), k('KeyX', 'ش', 'ژ'), k('KeyC', 'چ', 'ث'), k('KeyV', 'و', 'ؤ'), k('KeyB', 'ب', 'إ'), k('KeyN', 'ن', 'ں'), k('KeyM', 'م', 'أ'), k('Comma', '،', '<'), k('Period', '۔', '>'), k('Slash', '/', '؟'), ...row3EndCommon],
  row4Common
];

// --- PASHTO ---
const psRows: KeyDefinition[][] = [
  [k('Backquote', '`', '~'), k('Digit1', '۱', '!'), k('Digit2', '۲', '@'), k('Digit3', '۳', '#'), k('Digit4', '۴', '$'), k('Digit5', '۵', '%'), k('Digit6', '۶', '^'), k('Digit7', '۷', '&'), k('Digit8', '۸', '*'), k('Digit9', '۹', ')'), k('Digit0', '۰', '('), k('Minus', '-', '_'), k('Equal', '=', '+'), ...row0Common],
  [action('Tab', 'Tab', 1.5), k('KeyQ', 'ض', 'ْ'), k('KeyW', 'ص', 'ً'), k('KeyE', 'ث', 'ٍ'), k('KeyR', 'ق', 'ً'), k('KeyT', 'ف', 'ُ'), k('KeyY', 'غ', 'ِ'), k('KeyU', 'ع', 'َ'), k('KeyI', 'ه', 'ّ'), k('KeyO', 'خ', ']'), k('KeyP', 'ح', '['), k('BracketLeft', 'ج', '}'), k('BracketRight', 'چ', '{')],
  [action('CapsLock', 'Caps', 1.8), k('KeyA', 'ش', 'ؤ'), k('KeyS', 'س', 'ئ'), k('KeyD', 'ی', 'ي'), k('KeyF', 'ب', 'إ'), k('KeyG', 'ل', 'أ'), k('KeyH', 'ا', 'آ'), k('KeyJ', 'ت', 'ة'), k('KeyK', 'ن', '«'), k('KeyL', 'م', '»'), k('Semicolon', 'ک', ':'), k('Quote', 'ګ', '؛'), ...row2EndCommon],
  [...row3Common, k('KeyZ', 'ظ', 'ك'), k('KeyX', 'ط', 'ٓ'), k('KeyC', 'ز', 'ژ'), k('KeyV', 'ر', 'ٰ'), k('KeyB', 'ذ', '‌'), k('KeyN', 'د', 'ٔ'), k('KeyM', 'پ', 'ء'), k('Comma', 'و', '<'), k('Period', 'ټ', '>'), k('Slash', 'ډ', '؟'), ...row3EndCommon],
  row4Common
];

// --- KURDISH (SORANI) ---
const ckbRows: KeyDefinition[][] = [
  [k('Backquote', '`', '~'), k('Digit1', '1', '!'), k('Digit2', '2', '@'), k('Digit3', '3', '#'), k('Digit4', '4', '$'), k('Digit5', '5', '%'), k('Digit6', '6', '^'), k('Digit7', '7', '&'), k('Digit8', '8', '*'), k('Digit9', '9', '('), k('Digit0', '0', ')'), k('Minus', '-', '_'), k('Equal', '=', '+'), ...row0Common],
  [action('Tab', 'Tab', 1.5), k('KeyQ', 'ق', 'ڤ'), k('KeyW', 'و', 'ۆ'), k('KeyE', 'ە', 'ێ'), k('KeyR', 'ر', 'ڕ'), k('KeyT', 'ت', 'ط'), k('KeyY', 'य', 'غ'), k('KeyU', 'ع', '‘'), k('KeyI', 'ی', 'Í'), k('KeyO', 'خ', '×'), k('KeyP', 'ح', '÷'), k('BracketLeft', 'ج', '}'), k('BracketRight', 'چ', '{')],
  [action('CapsLock', 'Caps', 1.8), k('KeyA', 'ا', 'آ'), k('KeyS', 'س', 'ص'), k('KeyD', 'د', 'ڈ'), k('KeyF', 'ف', 'ڤ'), k('KeyG', 'گ', 'ڭ'), k('KeyH', 'ه', 'ھ'), k('KeyJ', 'ژ', 'ض'), k('KeyK', 'ک', 'ك'), k('KeyL', 'ل', 'ڵ'), k('Semicolon', ';', ':'), k('Quote', "'", '"'), ...row2EndCommon],
  [...row3Common, k('KeyZ', 'ز', 'ظ'), k('KeyX', 'خ', 'غ'), k('KeyC', 'ج', 'چ'), k('KeyV', 'ڤ', 'ۋ'), k('KeyB', 'ب', 'پ'), k('KeyN', 'ن', 'ں'), k('KeyM', 'م', 'ṃ'), k('Comma', ',', '<'), k('Period', '.', '>'), k('Slash', '/', '?'), ...row3EndCommon],
  row4Common
];

// ==========================================
// 4. SOUTH ASIA
// ==========================================

// --- HINDI (Inscript) ---
const hiRows: KeyDefinition[][] = [
  [k('Backquote', '़', 'ऍ'), k('Digit1', '1', 'ॅ'), k('Digit2', '2', 'ॲ'), k('Digit3', '3', '्र'), k('Digit4', '4', 'र्'), k('Digit5', '5', 'ज्ञ'), k('Digit6', '6', 'त्र'), k('Digit7', '7', 'क्ष'), k('Digit8', '8', 'श्र'), k('Digit9', '9', '('), k('Digit0', '0', ')'), k('Minus', '-', 'ः'), k('Equal', 'ृ', 'ऋ'), ...row0Common],
  [action('Tab', 'Tab', 1.5), k('KeyQ', 'ौ', 'औ'), k('KeyW', 'ै', 'ऐ'), k('KeyE', 'ा', 'आ'), k('KeyR', 'ी', 'ई'), k('KeyT', 'ू', 'ऊ'), k('KeyY', 'ब', 'भ'), k('KeyU', 'ह', 'ङ'), k('KeyI', 'ग', 'घ'), k('KeyO', 'द', 'ध'), k('KeyP', 'ज', 'झ'), k('BracketLeft', 'ड', 'ढ'), k('BracketRight', '़', 'ञ')],
  [action('CapsLock', 'Caps', 1.8), k('KeyA', 'ो', 'ओ'), k('KeyS', 'े', 'ए'), k('KeyD', '्', 'अ'), k('KeyF', 'ि', 'इ'), k('KeyG', 'ु', 'उ'), k('KeyH', 'प', 'फ'), k('KeyJ', 'र', 'ऱ'), k('KeyK', 'क', 'ख'), k('KeyL', 'त', 'थ'), k('Semicolon', 'च', 'छ'), k('Quote', 'ट', 'ठ'), ...row2EndCommon],
  [...row3Common, k('KeyZ', 'े', 'ऎ'), k('KeyX', 'ं', 'ँ'), k('KeyC', 'म', 'ण'), k('KeyV', 'न', 'ऩ'), k('KeyB', 'व', 'ऑ'), k('KeyN', 'ल', 'ळ'), k('KeyM', 'स', 'श'), k('Comma', ',', 'ष'), k('Period', '.', '।'), k('Slash', 'य', 'य़'), ...row3EndCommon],
  row4Common
];

// --- BENGALI ---
const bnRows: KeyDefinition[][] = [
  [k('Backquote', '়', '়'), k('Digit1', '১', '!'), k('Digit2', '২', '@'), k('Digit3', '৩', '#'), k('Digit4', '৪', '$'), k('Digit5', '৫', '%'), k('Digit6', '৬', '^'), k('Digit7', '৭', '&'), k('Digit8', '৮', '*'), k('Digit9', '৯', '('), k('Digit0', '০', ')'), k('Minus', '-', '_'), k('Equal', 'ৃ', 'ঋ'), ...row0Common],
  [action('Tab', 'Tab', 1.5), k('KeyQ', 'ৌ', 'ঔ'), k('KeyW', 'ৈ', 'ঐ'), k('KeyE', 'া', 'আ'), k('KeyR', 'ী', 'ঈ'), k('KeyT', 'ূ', 'ঊ'), k('KeyY', 'ব', 'ভ'), k('KeyU', 'হ', 'ঙ'), k('KeyI', 'গ', 'ঘ'), k('KeyO', 'দ', 'ধ'), k('KeyP', 'জ', 'ঝ'), k('BracketLeft', 'ড', 'ঢ'), k('BracketRight', 'য়', 'ঞ')],
  [action('CapsLock', 'Caps', 1.8), k('KeyA', 'ো', 'ও'), k('KeyS', 'ে', 'এ'), k('KeyD', '্', 'অ'), k('KeyF', 'ি', 'ই'), k('KeyG', 'ু', 'উ'), k('KeyH', 'প', 'ফ'), k('KeyJ', 'র', 'র'), k('KeyK', 'ক', 'খ'), k('KeyL', 'ত', 'থ'), k('Semicolon', 'চ', 'ছ'), k('Quote', 'ট', 'ঠ'), ...row2EndCommon],
  [...row3Common, k('KeyZ', 'ে', 'এ'), k('KeyX', 'ং', 'ঁ'), k('KeyC', 'ম', 'ণ'), k('KeyV', 'ন', 'ন'), k('KeyB', 'ব', 'ব'), k('KeyN', 'ল', 'ল'), k('KeyM', 'স', 'শ'), k('Comma', ',', 'ষ'), k('Period', '.', '।'), k('Slash', 'য়', 'য়'), ...row3EndCommon],
  row4Common
];

// --- PUNJABI (GURMUKHI) ---
const paRows: KeyDefinition[][] = [
  [k('Backquote', 'ੑ', 'ੴ'), k('Digit1', '੧', '!'), k('Digit2', '੨', '@'), k('Digit3', '੩', '#'), k('Digit4', '੪', '$'), k('Digit5', '੫', '%'), k('Digit6', '੬', '^'), k('Digit7', '੭', '&'), k('Digit8', '੮', '*'), k('Digit9', '੯', '('), k('Digit0', '੦', ')'), k('Minus', '-', '_'), k('Equal', '੍ਰ', '੃'), ...row0Common],
  [action('Tab', 'Tab', 1.5), k('KeyQ', 'ੌ', 'ਔ'), k('KeyW', 'ੈ', 'ਐ'), k('KeyE', 'ਾ', 'ਆ'), k('KeyR', 'ੀ', ' ಈ'), k('KeyT', 'ੂ', 'ਊ'), k('KeyY', 'ਬ', 'ਭ'), k('KeyU', 'ਹ', 'ਙ'), k('KeyI', 'ਗ', 'ਘ'), k('KeyO', 'ਦ', 'ਧ'), k('KeyP', 'ਜ', 'ਝ'), k('BracketLeft', 'ਡ', 'ਢ'), k('BracketRight', 'ਞ', 'ਞ')],
  [action('CapsLock', 'Caps', 1.8), k('KeyA', 'ੋ', 'ਓ'), k('KeyS', 'ੇ', 'ਏ'), k('KeyD', '੍', 'ਅ'), k('KeyF', 'ਿ', 'ਇ'), k('KeyG', 'ੁ', 'ਉ'), k('KeyH', 'ਪ', 'ਫ'), k('KeyJ', 'ਰ', 'ੜ'), k('KeyK', 'ਕ', 'ਖ'), k('KeyL', 'ਤ', 'ਥ'), k('Semicolon', 'ਚ', 'ਛ'), k('Quote', 'ਟ', 'ਠ'), ...row2EndCommon],
  [...row3Common, k('KeyZ', 'ੵ', 'ਗ਼'), k('KeyX', 'ੰ', 'ਂ'), k('KeyC', 'ਮ', 'ਣ'), k('KeyV', 'ਨ', 'ਨਾ'), k('KeyB', 'ਵ', 'ਵ'), k('KeyN', 'ਲ', 'ਲ਼'), k('KeyM', 'ਸ', 'ਸ਼'), k('Comma', ',', 'ਖ਼'), k('Period', '.', '।'), k('Slash', 'ਯ', 'ਜ਼'), ...row3EndCommon],
  row4Common
];

// --- GUJARATI ---
const guRows: KeyDefinition[][] = [
  [k('Backquote', '૰', '૱'), k('Digit1', '1', 'ૅ'), k('Digit2', '2', 'ઍ'), k('Digit3', '3', '્ર'), k('Digit4', '4', 'ર્'), k('Digit5', '5', 'જ્ઞ'), k('Digit6', '6', 'ત્ર'), k('Digit7', '7', 'ક્ષ'), k('Digit8', '8', 'શ્ર'), k('Digit9', '9', '('), k('Digit0', '0', ')'), k('Minus', '-', 'ઃ'), k('Equal', 'ૃ', 'ઋ'), ...row0Common],
  [action('Tab', 'Tab', 1.5), k('KeyQ', 'ૌ', 'ઔ'), k('KeyW', 'ૈ', 'ઐ'), k('KeyE', 'ા', 'આ'), k('KeyR', 'ી', 'ઈ'), k('KeyT', 'ૂ', 'ઊ'), k('KeyY', 'બ', 'ભ'), k('KeyU', 'હ', 'ઙ'), k('KeyI', 'ગ', 'ઘ'), k('KeyO', 'દ', 'ધ'), k('KeyP', 'જ', 'ઝ'), k('BracketLeft', 'ડ', 'ઢ'), k('BracketRight', '઼', 'ઞ')],
  [action('CapsLock', 'Caps', 1.8), k('KeyA', 'ો', 'ઓ'), k('KeyS', 'ે', 'એ'), k('KeyD', '્', 'અ'), k('KeyF', 'િ', 'ઇ'), k('KeyG', 'ુ', 'ઉ'), k('KeyH', 'પ', 'ફ'), k('KeyJ', 'ર', 'ૠ'), k('KeyK', 'ક', 'ખ'), k('KeyL', 'ત', 'થ'), k('Semicolon', 'ચ', 'છ'), k('Quote', 'ટ', 'ઠ'), ...row2EndCommon],
  [...row3Common, k('KeyZ', 'ે', 'ઍ'), k('KeyX', 'ં', 'ઁ'), k('KeyC', 'મ', 'ણ'), k('KeyV', 'ન', 'ન'), k('KeyB', 'વ', 'વ'), k('KeyN', 'લ', 'ળ'), k('KeyM', 'સ', 'શ'), k('Comma', ',', 'ષ'), k('Period', '.', '।'), k('Slash', 'ય', 'ય'), ...row3EndCommon],
  row4Common
];

// --- ODIA (Oriya) ---
const orRows: KeyDefinition[][] = [
  [k('Backquote', '୰', '୰'), k('Digit1', '୧', '!'), k('Digit2', '୨', '@'), k('Digit3', '୩', '#'), k('Digit4', '୪', '$'), k('Digit5', '୫', '%'), k('Digit6', '୬', '^'), k('Digit7', '୭', '&'), k('Digit8', '୮', '*'), k('Digit9', '୯', '('), k('Digit0', '୦', ')'), k('Minus', '-', 'ଃ'), k('Equal', 'ୃ', 'ଋ'), ...row0Common],
  [action('Tab', 'Tab', 1.5), k('KeyQ', 'ୌ', 'ଔ'), k('KeyW', 'ୈ', 'ଐ'), k('KeyE', 'ା', 'ଆ'), k('KeyR', 'ୀ', 'ଈ'), k('KeyT', 'ୂ', 'ଊ'), k('KeyY', 'ବ', 'ଭ'), k('KeyU', 'ହ', 'ଙ'), k('KeyI', 'ଗ', 'ଘ'), k('KeyO', 'ଦ', 'ଧ'), k('KeyP', 'ଜ', 'ଝ'), k('BracketLeft', 'ଡ', 'ଢ'), k('BracketRight', '଼', 'ଞ')],
  [action('CapsLock', 'Caps', 1.8), k('KeyA', 'ୋ', 'ଓ'), k('KeyS', 'େ', 'ଏ'), k('KeyD', '୍', 'ଅ'), k('KeyF', 'ି', 'ଇ'), k('KeyG', 'ୁ', 'ଉ'), k('KeyH', 'ପ', 'ଫ'), k('KeyJ', 'ର', 'ଋ'), k('KeyK', 'କ', 'ଖ'), k('KeyL', 'ତ', 'ଥ'), k('Semicolon', 'ଚ', 'ଛ'), k('Quote', 'ଟ', 'ଠ'), ...row2EndCommon],
  [...row3Common, k('KeyZ', 'େ', 'ଏ'), k('KeyX', 'ଂ', 'ଁ'), k('KeyC', 'ମ', 'ଣ'), k('KeyV', 'ନ', 'ନ'), k('KeyB', 'ୱ', 'ୱ'), k('KeyN', 'ଲ', 'ଳ'), k('KeyM', 'ସ', 'ଶ'), k('Comma', ',', 'ଷ'), k('Period', '.', '।'), k('Slash', 'ୟ', 'ୟ'), ...row3EndCommon],
  row4Common
];

// --- MALAYALAM ---
const mlRows: KeyDefinition[][] = [
  [k('Backquote', 'ൊ', 'ഒ'), k('Digit1', '1', '1'), k('Digit2', '2', '2'), k('Digit3', '3', '3'), k('Digit4', '4', '4'), k('Digit5', '5', '5'), k('Digit6', '6', '6'), k('Digit7', '7', '7'), k('Digit8', '8', '8'), k('Digit9', '9', '9'), k('Digit0', '0', '0'), k('Minus', '-', '_'), k('Equal', 'ൃ', 'ഋ'), ...row0Common],
  [action('Tab', 'Tab', 1.5), k('KeyQ', 'ൌ', 'ഔ'), k('KeyW', 'ൈ', 'ഐ'), k('KeyE', 'ാ', 'ആ'), k('KeyR', 'ീ', 'ഈ'), k('KeyT', 'ൂ', 'ഊ'), k('KeyY', 'ബ', 'ഭ'), k('KeyU', 'ഹ', 'ങ'), k('KeyI', 'ഗ', 'ഘ'), k('KeyO', 'ദ', 'ധ'), k('KeyP', 'ജ', 'ഝ'), k('BracketLeft', 'ഡ', 'ഢ'), k('BracketRight', 'ഞ', 'ഞ')],
  [action('CapsLock', 'Caps', 1.8), k('KeyA', 'ോ', 'ഓ'), k('KeyS', 'േ', 'ഏ'), k('KeyD', '്', 'അ'), k('KeyF', 'ി', 'ഇ'), k('KeyG', 'ു', 'ഉ'), k('KeyH', 'പ', 'ഫ'), k('KeyJ', 'ര', 'റ'), k('KeyK', 'ക', 'ഖ'), k('KeyL', 'ത', 'ഥ'), k('Semicolon', 'ച', 'ഛ'), k('Quote', 'ട', 'ഠ'), ...row2EndCommon],
  [...row3Common, k('KeyZ', 'െ', 'എ'), k('KeyX', 'ം', 'ം'), k('KeyC', 'മ', 'ണ'), k('KeyV', 'ന', 'ന'), k('KeyB', 'വ', 'വ'), k('KeyN', 'ല', 'ള'), k('KeyM', 'സ', 'ശ'), k('Comma', ',', 'ഷ'), k('Period', '.', '।'), k('Slash', 'യ', 'യ'), ...row3EndCommon],
  row4Common
];

// --- KANNADA ---
const knRows: KeyDefinition[][] = [
  [k('Backquote', 'ೊ', 'ಒ'), k('Digit1', '1', '1'), k('Digit2', '2', '2'), k('Digit3', '3', '3'), k('Digit4', '4', '4'), k('Digit5', '5', '5'), k('Digit6', '6', '6'), k('Digit7', '7', '7'), k('Digit8', '8', '8'), k('Digit9', '9', '9'), k('Digit0', '0', '0'), k('Minus', '-', '_'), k('Equal', 'ೃ', 'ೠ'), ...row0Common],
  [action('Tab', 'Tab', 1.5), k('KeyQ', 'ೌ', 'ಔ'), k('KeyW', 'ೈ', 'ಐ'), k('KeyE', 'ಾ', 'ಆ'), k('KeyR', 'ೀ', 'ಈ'), k('KeyT', 'ೂ', 'ಊ'), k('KeyY', 'ಬ', 'ಭ'), k('KeyU', 'ಹ', 'ಙ'), k('KeyI', 'ಗ', 'ಘ'), k('KeyO', 'ದ', 'ಧ'), k('KeyP', 'ಜ', 'ಝ'), k('BracketLeft', 'ಡ', 'ಢ'), k('BracketRight', 'ಞ', 'ಞ')],
  [action('CapsLock', 'Caps', 1.8), k('KeyA', 'ೋ', 'ಓ'), k('KeyS', 'ೇ', 'ಏ'), k('KeyD', '್', 'ಅ'), k('KeyF', 'ಿ', 'ಇ'), k('KeyG', 'ು', 'ಉ'), k('KeyH', 'ಪ', 'ಫ'), k('KeyJ', 'ರ', 'ಱ'), k('KeyK', 'ಕ', 'ಖ'), k('KeyL', 'ತ', 'ಥ'), k('Semicolon', 'ಚ', 'ಛ'), k('Quote', 'ಟ', 'ಠ'), ...row2EndCommon],
  [...row3Common, k('KeyZ', 'ೆ', 'ಎ'), k('KeyX', 'ಂ', 'ಂ'), k('KeyC', 'ಮ', 'ಣ'), k('KeyV', 'ನ', 'ನ'), k('KeyB', 'ವ', 'ವ'), k('KeyN', 'ಲ', 'ಳ'), k('KeyM', 'ಸ', 'ಶ'), k('Comma', ',', 'ಷ'), k('Period', '.', '।'), k('Slash', 'ಯ', 'ಯ'), ...row3EndCommon],
  row4Common
];

// --- TAMIL ---
const taRows: KeyDefinition[][] = [
  [k('Backquote', 'ஃ', 'ஃ'), k('Digit1', '1', '!'), k('Digit2', '2', '@'), k('Digit3', '3', '#'), k('Digit4', '4', '$'), k('Digit5', '5', '%'), k('Digit6', '6', '^'), k('Digit7', '7', '&'), k('Digit8', '8', '*'), k('Digit9', '9', '('), k('Digit0', '0', ')'), k('Minus', '-', '_'), k('Equal', '=', '+'), ...row0Common],
  [action('Tab', 'Tab', 1.5), k('KeyQ', 'ௌ', 'ஔ'), k('KeyW', 'ை', 'ஐ'), k('KeyE', 'ா', 'ஆ'), k('KeyR', 'ீ', 'ஈ'), k('KeyT', 'ூ', 'ஊ'), k('KeyY', 'ப', 'ப'), k('KeyU', 'ஹ', 'ஹ'), k('KeyI', 'க', 'க'), k('KeyO', 'த', 'த'), k('KeyP', 'ஜ', 'ஜ'), k('BracketLeft', 'ட', 'ட'), k('BracketRight', 'ஞ', 'ஞ')],
  [action('CapsLock', 'Caps', 1.8), k('KeyA', 'ோ', 'ஓ'), k('KeyS', 'ே', 'ஏ'), k('KeyD', '்', 'அ'), k('KeyF', 'ி', 'இ'), k('KeyG', 'ு', 'உ'), k('KeyH', 'ப', 'ப'), k('KeyJ', 'ர', 'ற'), k('KeyK', 'க', 'க'), k('KeyL', 'த', 'த'), k('Semicolon', 'ச', 'ச'), k('Quote', 'ட', 'ட'), ...row2EndCommon],
  [...row3Common, k('KeyZ', 'ெ', 'எ'), k('KeyX', 'ம்', 'ம்'), k('KeyC', 'ம', 'ண'), k('KeyV', 'ந', 'ன'), k('KeyB', 'வ', 'வ'), k('KeyN', 'ல', 'ள'), k('KeyM', 'ஸ', 'ஷ'), k('Comma', ',', 'ஷ'), k('Period', '.', 'ஸ்ரீ'), k('Slash', 'ய', 'ய'), ...row3EndCommon],
  row4Common
];

// --- TELUGU ---
const teRows: KeyDefinition[][] = [
  [k('Backquote', 'ొ', 'ఒ'), k('Digit1', '1', '1'), k('Digit2', '2', '2'), k('Digit3', '3', '3'), k('Digit4', '4', '4'), k('Digit5', '5', '5'), k('Digit6', '6', '6'), k('Digit7', '7', '7'), k('Digit8', '8', '8'), k('Digit9', '9', '9'), k('Digit0', '0', '0'), k('Minus', '-', '_'), k('Equal', 'ృ', 'ఋ'), ...row0Common],
  [action('Tab', 'Tab', 1.5), k('KeyQ', 'ౌ', 'ఔ'), k('KeyW', 'ై', 'ఐ'), k('KeyE', 'ా', 'ఆ'), k('KeyR', 'ీ', 'ఈ'), k('KeyT', 'ూ', 'ఊ'), k('KeyY', 'బ', 'భ'), k('KeyU', 'హ', 'ఙ'), k('KeyI', 'గ', 'ఘ'), k('KeyO', 'ద', 'ధ'), k('KeyP', 'జ', 'ఝ'), k('BracketLeft', 'డ', 'ఢ'), k('BracketRight', 'ఞ', 'ఞ')],
  [action('CapsLock', 'Caps', 1.8), k('KeyA', 'ో', 'ఓ'), k('KeyS', 'ే', 'ఏ'), k('KeyD', '్', 'అ'), k('KeyF', 'ి', 'ఇ'), k('KeyG', 'ు', 'ఉ'), k('KeyH', 'ప', 'ఫ'), k('KeyJ', 'ర', 'ఱ'), k('KeyK', 'క', 'ఖ'), k('KeyL', 'త', 'థ'), k('Semicolon', 'చ', 'ఛ'), k('Quote', 'ట', 'ఠ'), ...row2EndCommon],
  [...row3Common, k('KeyZ', 'ె', 'ఎ'), k('KeyX', 'ం', 'ఁ'), k('KeyC', 'మ', 'ಣ'), k('KeyV', 'న', 'న'), k('KeyB', 'వ', 'వ'), k('KeyN', 'ల', 'ళ'), k('KeyM', 'స', 'శ'), k('Comma', ',', 'ష'), k('Period', '.', '।'), k('Slash', 'య', 'య'), ...row3EndCommon],
  row4Common
];

// --- SINHALA (Sri Lanka) ---
const siRows: KeyDefinition[][] = [
  [k('Backquote', '`', '්‍ර'), k('Digit1', '1', '!'), k('Digit2', '2', '@'), k('Digit3', '3', '#'), k('Digit4', '4', '$'), k('Digit5', '5', '%'), k('Digit6', '6', '^'), k('Digit7', '7', '&'), k('Digit8', '8', '*'), k('Digit9', '9', '('), k('Digit0', '0', ')'), k('Minus', '-', '_'), k('Equal', '=', '+'), ...row0Common],
  [action('Tab', 'Tab', 1.5), k('KeyQ', 'ූ', 'ු'), k('KeyW', 'ඖ', 'ෞ'), k('KeyE', 'ඇ', 'ෑ'), k('KeyR', 'ර', 'ඍ'), k('KeyT', 'එ', 'ඒ'), k('KeyY', 'හ', 'ශ'), k('KeyU', 'ම', 'ඹ'), k('KeyI', 'ස', 'ෂ'), k('KeyO', 'ද', 'ධ'), k('KeyP', 'ච', 'ඡ'), k('BracketLeft', 'ඤ', 'ඥ'), k('BracketRight', ';', ':')],
  [action('CapsLock', 'Caps', 1.8), k('KeyA', '්', 'අ'), k('KeyS', 'ි', 'ී'), k('KeyD', 'ා', 'ආ'), k('KeyF', 'ෙ', 'ේ'), k('KeyG', 'ට', 'ඨ'), k('KeyH', 'ය', '්‍ය'), k('KeyJ', 'ව', 'ඪ'), k('KeyK', 'න', 'ණ'), k('KeyL', 'ක', 'ඛ'), k('Semicolon', 'ත', 'ථ'), k('Quote', '.', ','), ...row2EndCommon],
  [...row3Common, k('KeyZ', 'ැ', 'ඈ'), k('KeyX', 'ං', 'ඃ'), k('KeyC', 'ජ', 'ඣ'), k('KeyV', 'ඩ', 'ඝ'), k('KeyB', 'ඉ', 'ඊ'), k('KeyN', 'බ', 'භ'), k('KeyM', 'ප', 'ඵ'), k('Comma', 'ල', 'ළ'), k('Period', 'ග', 'ඟ'), k('Slash', '/', '?'), ...row3EndCommon],
  row4Common
];

// --- DIVEHI (Maldives) ---
const dvRows: KeyDefinition[][] = [
  [k('Backquote', '`', '~'), k('Digit1', '1', '!'), k('Digit2', '2', '@'), k('Digit3', '3', '#'), k('Digit4', '4', '$'), k('Digit5', '5', '%'), k('Digit6', '6', '^'), k('Digit7', '7', '&'), k('Digit8', '8', '*'), k('Digit9', '9', '('), k('Digit0', '0', ')'), k('Minus', '-', '_'), k('Equal', '=', '+'), ...row0Common],
  [action('Tab', 'Tab', 1.5), k('KeyQ', 'ޤ', '°'), k('KeyW', 'ވ', 'އ'), k('KeyE', 'ެ', 'ޭ'), k('KeyR', 'ރ', 'ޜ'), k('KeyT', 'ތ', 'ޓ'), k('KeyY', 'ޔ', 'ޠ'), k('KeyU', 'ު', 'ޫ'), k('KeyI', 'ި', 'ީ'), k('KeyO', 'ޮ', 'ޯ'), k('KeyP', 'ޕ', '÷'), k('BracketLeft', ']', '×'), k('BracketRight', '[', 'ތ')],
  [action('CapsLock', 'Caps', 1.8), k('KeyA', 'ަ', 'ާ'), k('KeyS', 'ސ', 'ށ'), k('KeyD', 'ދ', 'ޑ'), k('KeyF', 'ފ', 'ﷲ'), k('KeyG', 'ގ', 'ޣ'), k('KeyH', 'ހ', 'ޙ'), k('KeyJ', 'ޖ', 'ޛ'), k('KeyK', 'ކ', 'ޚ'), k('KeyL', 'ލ', 'ޅ'), k('Semicolon', '؛', ':'), k('Quote', "'", '"'), ...row2EndCommon],
  [...row3Common, k('KeyZ', 'ޒ', 'ޡ'), k('KeyX', '×', 'ޘ'), k('KeyC', 'ޗ', 'ޢ'), k('KeyV', 'ވ', 'ޥ'), k('KeyB', 'ބ', 'ޞ'), k('KeyN', 'ނ', 'ޏ'), k('KeyM', 'މ', 'ޟ'), k('Comma', '،', '<'), k('Period', '.', '>'), k('Slash', '/', '؟'), ...row3EndCommon],
  row4Common
];

// --- TIBETAN (Standard) ---
const boRows: KeyDefinition[][] = [
  [k('Backquote', '༊', '༉'), k('Digit1', '༡', '༪'), k('Digit2', '༢', '༫'), k('Digit3', '༣', '༬'), k('Digit4', '༤', '༭'), k('Digit5', '༥', '༮'), k('Digit6', '༦', '༯'), k('Digit7', '༧', '༰'), k('Digit8', '༨', '༱'), k('Digit9', '༩', '༲'), k('Digit0', '༠', '༳'), k('Minus', '-', ' '), k('Equal', '༆', '༴'), ...row0Common],
  [action('Tab', 'Tab', 1.5), k('KeyQ', 'ོ', 'ཽ'), k('KeyW', 'ེ', 'ཻ'), k('KeyE', 'ྲ', 'ྲ'), k('KeyR', 'ར', 'ཪ'), k('KeyT', 'ཏ', 'ཊ'), k('KeyY', 'ཡ', 'ྈ'), k('KeyU', 'ུ', 'ཱུ'), k('KeyI', 'ི', 'ཱི'), k('KeyO', 'ོ', 'ཽ'), k('KeyP', 'པ', 'ཎ'), k('BracketLeft', 'ཁ', 'ཁ'), k('BracketRight', 'ག', 'ག')],
  [action('CapsLock', 'Caps', 1.8), k('KeyA', 'འ', 'ཨ'), k('KeyS', 'ས', 'ཥ'), k('KeyD', 'ད', 'ཌ'), k('KeyF', 'ཕ', 'ཕ'), k('KeyG', 'ག', 'ག'), k('KeyH', 'ཧ', 'ཧ'), k('KeyJ', 'ཇ', 'ཇ'), k('KeyK', 'ཀ', 'ཀ'), k('KeyL', 'ལ', 'ལ'), k('Semicolon', ';', ':'), k('Quote', '་', '།'), ...row2EndCommon],
  [...row3Common, k('KeyZ', 'ཟ', 'ཛྷ'), k('KeyX', 'ཟ', 'ཟ'), k('KeyC', 'ཅ', 'ཅ'), k('KeyV', 'བ', 'བ'), k('KeyB', 'བ', 'བྷ'), k('KeyN', 'ན', 'ཎ'), k('KeyM', 'མ', 'མ'), k('Comma', ',', '<'), k('Period', '.', '>'), k('Slash', '/', '?'), ...row3EndCommon],
  row4Common
];

// ==========================================
// 5. SOUTHEAST ASIA
// ==========================================

// --- THAI (Kedmanee) ---
const thRows: KeyDefinition[][] = [
  [k('Backquote', '_', '%'), k('Digit1', 'ๅ', '+'), k('Digit2', '/', '๑'), k('Digit3', '-', '๒'), k('Digit4', 'ภ', '๓'), k('Digit5', 'ถ', '๔'), k('Digit6', 'ุ', 'ู'), k('Digit7', 'ึ', '฿'), k('Digit8', 'ค', '๕'), k('Digit9', 'ต', '๖'), k('Digit0', 'จ', '๗'), k('Minus', 'ข', '๘'), k('Equal', 'ช', '๙'), ...row0Common],
  [action('Tab', 'Tab', 1.5), k('KeyQ', 'ๆ', '๐'), k('KeyW', 'ไ', '"'), k('KeyE', 'ำ', 'ฎ'), k('KeyR', 'พ', 'ฑ'), k('KeyT', 'ะ', 'ธ'), k('KeyY', 'ั', 'ํ'), k('KeyU', 'ี', '๊'), k('KeyI', 'ร', 'ณ'), k('KeyO', 'น', 'ฯ'), k('KeyP', 'ย', 'ญ'), k('BracketLeft', 'บ', 'ฐ'), k('BracketRight', 'ล', ',')],
  [action('CapsLock', 'Caps', 1.8), k('KeyA', 'ฟ', 'ฤ'), k('KeyS', 'ห', 'ฆ'), k('KeyD', 'ก', 'ฏ'), k('KeyF', 'ด', 'โ'), k('KeyG', 'เ', 'ฌ'), k('KeyH', '้', '็'), k('KeyJ', '่', '๋'), k('KeyK', 'า', 'ษ'), k('KeyL', 'ส', 'ศ'), k('Semicolon', 'ว', 'ซ'), k('Quote', 'ง', '.'), ...row2EndCommon],
  [...row3Common, k('KeyZ', 'ผ', '('), k('KeyX', 'ป', ')'), k('KeyC', 'แ', 'ฉ'), k('KeyV', 'อ', 'ฮ'), k('KeyB', 'ิ', 'ฺ'), k('KeyN', 'ื', '์'), k('KeyM', 'ท', '?'), k('Comma', 'ม', 'ฒ'), k('Period', 'ใ', 'ฬ'), k('Slash', 'ฝ', 'ฦ'), ...row3EndCommon],
  row4Common
];

// --- KHMER ---
const kmRows: KeyDefinition[][] = [
  [k('Backquote', '«', '»'), k('Digit1', '1', '!'), k('Digit2', '2', 'ໆ'), k('Digit3', '3', 'ື'), k('Digit4', '4', '¥'), k('Digit5', '5', '%'), k('Digit6', '6', 'ແ'), k('Digit7', '7', 'ັ'), k('Digit8', '8', '໊'), k('Digit9', '9', '('), k('Digit0', '0', ')'), k('Minus', '່', 'ຶ'), k('Equal', '=', '໌'), ...row0Common],
  [action('Tab', 'Tab', 1.5), k('KeyQ', 'ឆ', 'ឈ'), k('KeyW', 'ឹ', 'ឺ'), k('KeyE', 'េ', 'ែ'), k('KeyR', 'រ', 'ឫ'), k('KeyT', 'ត', 'ទ'), k('KeyY', 'យ', 'ឬ'), k('KeyU', 'ុ', 'ូ'), k('KeyI', 'ិ', 'ី'), k('KeyO', 'ោ', 'ៅ'), k('KeyP', 'ផ', 'ភ'), k('BracketLeft', 'ៀ', 'ឿ'), k('BracketRight', 'ឪ', 'ឧ')],
  [action('CapsLock', 'Caps', 1.8), k('KeyA', 'ា', 'ាំ'), k('KeyS', 'ស', 'ៃ'), k('KeyD', 'ដ', 'ឌ'), k('KeyF', 'ថ', 'ធ'), k('KeyG', 'ង', 'អ'), k('KeyH', 'ហ', 'ះ'), k('KeyJ', '្', 'ញ'), k('KeyK', 'ក', 'គ'), k('KeyL', 'ល', 'ឡ'), k('Semicolon', ';', ':'), k('Quote', "'", '"'), ...row2EndCommon],
  [...row3Common, k('KeyZ', 'ឋ', 'ឍ'), k('KeyX', 'ខ', 'ឃ'), k('KeyC', 'ច', 'ជ'), k('KeyV', 'វ', 'ព'), k('KeyB', 'ប', 'ព'), k('KeyN', 'ន', 'ណ'), k('KeyM', 'ម', 'ំ'), k('Comma', ',', '<'), k('Period', '.', '>'), k('Slash', '/', '?'), ...row3EndCommon],
  row4Common
];

// --- BURMESE (Myanmar) ---
const myRows: KeyDefinition[][] = [
  [k('Backquote', '`', '~'), k('Digit1', '၁', 'ဍ'), k('Digit2', '၂', 'ဎ'), k('Digit3', '၃', 'ဋ'), k('Digit4', '၄', 'ၐ'), k('Digit5', '၅', 'ၑ'), k('Digit6', '၆', 'ဝ'), k('Digit7', '၇', 'ရ'), k('Digit8', '၈', '*'), k('Digit9', '၉', '('), k('Digit0', '၀', ')'), k('Minus', '-', '_'), k('Equal', '=', '+'), ...row0Common],
  [action('Tab', 'Tab', 1.5), k('KeyQ', 'ဆ', 'ဈ'), k('KeyW', 'တ', 'ဝ'), k('KeyE', 'န', 'ဣ'), k('KeyR', 'မ', 'ဤ'), k('KeyT', 'အ', 'ဥ'), k('KeyY', 'ပ', '၌'), k('KeyU', 'က', 'ဥ'), k('KeyI', 'င', '၍'), k('KeyO', 'သ', 'ဿ'), k('KeyP', 'စ', 'ဏ'), k('BracketLeft', 'ဟ', 'ဧ'), k('BracketRight', 'ဩ', 'ဪ')],
  [action('CapsLock', 'Caps', 1.8), k('KeyA', 'ေ', 'ဗ'), k('KeyS', 'ျ', 'ှ'), k('KeyD', 'ိ', 'ီ'), k('KeyF', '်', '္'), k('KeyG', 'ါ', 'ွ'), k('KeyH', '့', 'ှ'), k('KeyJ', 'ြ', 'ြ'), k('KeyK', 'ု', 'ူ'), k('KeyL', 'ူ', 'ဲ'), k('Semicolon', 'း', 'ဒ'), k('Quote', 'ဒ', 'ဓ'), ...row2EndCommon],
  [...row3Common, k('KeyZ', 'ဖ', 'ဇ'), k('KeyX', 'ထ', 'ဌ'), k('KeyC', 'ခ', 'ဃ'), k('KeyV', 'လ', 'ဠ'), k('KeyB', 'ဘ', 'ယ'), k('KeyN', 'ည', 'ဉ'), k('KeyM', 'ာ', 'ဦ'), k('Comma', 'ယ', 'ရ'), k('Period', '.', '>'), k('Slash', '/', '?'), ...row3EndCommon],
  row4Common
];

// ==========================================
// 6. OTHER SCRIPTS & REGIONS
// ==========================================

// --- KOREAN (Hangul 2-Set) ---
const koRows: KeyDefinition[][] = [
  [k('Backquote', '`', '~'), k('Digit1', '1', '!'), k('Digit2', '2', '@'), k('Digit3', '3', '#'), k('Digit4', '4', '$'), k('Digit5', '5', '%'), k('Digit6', '6', '^'), k('Digit7', '7', '&'), k('Digit8', '8', '*'), k('Digit9', '9', '('), k('Digit0', '0', ')'), k('Minus', '-', '_'), k('Equal', '=', '+'), ...row0Common],
  [action('Tab', 'Tab', 1.5), k('KeyQ', 'ㅂ', 'ㅃ'), k('KeyW', 'ㅈ', 'ㅉ'), k('KeyE', 'ㄷ', 'ㄸ'), k('KeyR', 'ㄱ', 'ㄲ'), k('KeyT', 'ㅅ', 'ㅆ'), k('KeyY', 'ㅛ', 'ㅛ'), k('KeyU', 'ㅕ', 'ㅕ'), k('KeyI', 'ㅑ', 'ㅑ'), k('KeyO', 'ㅐ', 'ㅒ'), k('KeyP', 'ㅔ', 'ㅖ'), k('BracketLeft', '[', '{'), k('BracketRight', ']', '}')],
  [action('CapsLock', 'Caps', 1.8), k('KeyA', 'ㅁ', 'ㅁ'), k('KeyS', 'ㄴ', 'ㄴ'), k('KeyD', 'ㅇ', 'ㅇ'), k('KeyF', 'ㄹ', 'ㄹ'), k('KeyG', 'ㅎ', 'ㅎ'), k('KeyH', 'ㅗ', 'ㅗ'), k('KeyJ', 'ㅓ', 'ㅓ'), k('KeyK', 'ㅏ', 'ㅏ'), k('KeyL', 'ㅣ', 'ㅣ'), k('Semicolon', ';', ':'), k('Quote', "'", '"'), ...row2EndCommon],
  [...row3Common, k('KeyZ', 'ㅋ', 'ㅋ'), k('KeyX', 'ㅌ', 'ㅌ'), k('KeyC', 'ㅊ', 'ㅊ'), k('KeyV', 'ㅍ', 'ㅍ'), k('KeyB', 'ㅠ', 'ㅠ'), k('KeyN', 'ㅜ', 'ㅜ'), k('KeyM', 'ㅡ', 'ㅡ'), k('Comma', ',', '<'), k('Period', '.', '>'), k('Slash', '/', '?'), ...row3EndCommon],
  row4Common
];

// --- GEORGIAN ---
const kaRows: KeyDefinition[][] = [
  [k('Backquote', '„', '“'), k('Digit1', '1', '!'), k('Digit2', '2', '@'), k('Digit3', '3', '#'), k('Digit4', '4', '$'), k('Digit5', '5', '%'), k('Digit6', '6', '^'), k('Digit7', '7', '&'), k('Digit8', '8', '*'), k('Digit9', '9', '('), k('Digit0', '0', ')'), k('Minus', '-', '_'), k('Equal', '=', '+'), ...row0Common],
  [action('Tab', 'Tab', 1.5), k('KeyQ', 'ქ', 'Q'), k('KeyW', 'წ', 'ჭ'), k('KeyE', 'ე', 'E'), k('KeyR', 'რ', 'ღ'), k('KeyT', 'ტ', 'თ'), k('KeyY', 'ყ', 'Y'), k('KeyU', 'უ', 'U'), k('KeyI', 'ი', 'I'), k('KeyO', 'ო', 'O'), k('KeyP', 'პ', 'P'), k('BracketLeft', '[', '{'), k('BracketRight', ']', '}')],
  [action('CapsLock', 'Caps', 1.8), k('KeyA', 'ა', 'A'), k('KeyS', 'ს', 'შ'), k('KeyD', 'დ', 'D'), k('KeyF', 'ფ', 'F'), k('KeyG', 'გ', 'G'), k('KeyH', 'ჰ', 'H'), k('KeyJ', 'ჯ', 'ჟ'), k('KeyK', 'კ', 'K'), k('KeyL', 'ლ', 'L'), k('Semicolon', ';', ':'), k('Quote', "'", '"'), ...row2EndCommon],
  [...row3Common, k('KeyZ', 'ზ', 'ძ'), k('KeyX', 'ხ', 'X'), k('KeyC', 'ც', 'ჩ'), k('KeyV', 'ვ', 'V'), k('KeyB', 'ბ', 'B'), k('KeyN', 'ნ', 'N'), k('KeyM', 'მ', 'M'), k('Comma', ',', '<'), k('Period', '.', '>'), k('Slash', '/', '?'), ...row3EndCommon],
  row4Common
];

// --- ARMENIAN ---
const hyRows: KeyDefinition[][] = [
  [k('Backquote', '՝', '՜'), k('Digit1', '1', '!'), k('Digit2', '2', '@'), k('Digit3', '3', '#'), k('Digit4', '4', '$'), k('Digit5', '5', '%'), k('Digit6', '6', '^'), k('Digit7', '7', '&'), k('Digit8', '8', '*'), k('Digit9', '9', '('), k('Digit0', '0', ')'), k('Minus', '-', '_'), k('Equal', 'և', '+'), ...row0Common],
  [action('Tab', 'Tab', 1.5), k('KeyQ', 'ք', 'Ք'), k('KeyW', 'ո', 'Ո'), k('KeyE', 'ե', 'Ե'), k('KeyR', 'ր', 'Ր'), k('KeyT', 'տ', 'Տ'), k('KeyY', 'ը', 'Ը'), k('KeyU', 'ւ', 'Ւ'), k('KeyI', 'ի', 'Ի'), k('KeyO', 'օ', 'Օ'), k('KeyP', 'պ', 'Պ'), k('BracketLeft', 'խ', 'Խ'), k('BracketRight', 'ծ', 'Ծ')],
  [action('CapsLock', 'Caps', 1.8), k('KeyA', 'ա', 'Ա'), k('KeyS', 'ս', 'Ս'), k('KeyD', 'դ', 'Դ'), k('KeyF', 'ֆ', 'Ֆ'), k('KeyG', 'գ', 'Գ'), k('KeyH', 'հ', 'Հ'), k('KeyJ', 'յ', 'Յ'), k('KeyK', 'կ', 'Կ'), k('KeyL', 'լ', 'Լ'), k('Semicolon', ';', ':'), k('Quote', "'", '"'), ...row2EndCommon],
  [...row3Common, k('KeyZ', 'զ', 'Զ'), k('KeyX', 'ղ', 'Ղ'), k('KeyC', 'ց', 'Ց'), k('KeyV', 'վ', 'Վ'), k('KeyB', 'բ', 'Բ'), k('KeyN', 'ն', 'Ն'), k('KeyM', 'մ', 'Մ'), k('Comma', 'շ', 'Շ'), k('Period', 'ռ', 'Ռ'), k('Slash', 'ժ', 'Ժ'), ...row3EndCommon],
  row4Common
];

// --- AMHARIC ---
const amRows: KeyDefinition[][] = [
  [k('Backquote', '`', '~'), k('Digit1', '1', '!'), k('Digit2', '2', '@'), k('Digit3', '3', '#'), k('Digit4', '4', '$'), k('Digit5', '5', '%'), k('Digit6', '6', '^'), k('Digit7', '7', '&'), k('Digit8', '8', '*'), k('Digit9', '9', '('), k('Digit0', '0', ')'), k('Minus', '-', '_'), k('Equal', '=', '+'), ...row0Common],
  [action('Tab', 'Tab', 1.5), k('KeyQ', 'ቅ', 'ቕ'), k('KeyW', 'ው', 'ዎ'), k('KeyE', 'እ', 'አ'), k('KeyR', 'ር', 'ረ'), k('KeyT', 'ት', 'ተ'), k('KeyY', 'ይ', 'የ'), k('KeyU', 'ኡ', 'ዐ'), k('KeyI', 'ኢ', 'ዒ'), k('KeyO', 'ኦ', 'ዖ'), k('KeyP', 'ፕ', 'ጵ'), k('BracketLeft', '[', '{'), k('BracketRight', ']', '}')],
  [action('CapsLock', 'Caps', 1.8), k('KeyA', 'ኣ', 'አ'), k('KeyS', 'ስ', 'ሰ'), k('KeyD', 'ድ', 'ደ'), k('KeyF', 'ፍ', 'ፈ'), k('KeyG', 'ግ', 'ገ'), k('KeyH', 'ህ', 'ሀ'), k('KeyJ', 'ጅ', 'ጀ'), k('KeyK', 'ክ', 'ከ'), k('KeyL', 'ል', 'ለ'), k('Semicolon', '፤', ':'), k('Quote', "'", '"'), ...row2EndCommon],
  [...row3Common, k('KeyZ', 'ዝ', 'ዘ'), k('KeyX', 'ሽ', 'ሸ'), k('KeyC', 'ች', 'ቸ'), k('KeyV', 'ቭ', 'ቨ'), k('KeyB', 'ብ', 'በ'), k('KeyN', 'ን', 'ነ'), k('KeyM', 'ም', 'መ'), k('Comma', '፣', '<'), k('Period', '።', '>'), k('Slash', '/', '?'), ...row3EndCommon],
  row4Common
];

// --- TIFINAGH (Berber) ---
const zghRows: KeyDefinition[][] = [
  [k('Backquote', '`', '~'), k('Digit1', '1', '!'), k('Digit2', '2', '@'), k('Digit3', '3', '#'), k('Digit4', '4', '$'), k('Digit5', '5', '%'), k('Digit6', '6', '^'), k('Digit7', '7', '&'), k('Digit8', '8', '*'), k('Digit9', '9', '('), k('Digit0', '0', ')'), k('Minus', '-', '_'), k('Equal', '=', '+'), ...row0Common],
  [action('Tab', 'Tab', 1.5), k('KeyQ', 'ⴰ', 'ⴰ'), k('KeyW', 'ⵣ', 'ⵣ'), k('KeyE', 'ⴻ', 'ⴻ'), k('KeyR', 'ⵔ', 'ⵔ'), k('KeyT', 'ⵜ', 'ⵜ'), k('KeyY', 'ⵢ', 'ⵢ'), k('KeyU', 'ⵓ', 'ⵓ'), k('KeyI', 'ⵉ', 'ⵉ'), k('KeyO', 'ⵄ', 'ⵄ'), k('KeyP', 'ⵃ', 'ⵃ'), k('BracketLeft', 'ⵯ', 'ⵯ'), k('BracketRight', 'ⵖ', 'ⵖ')],
  [action('CapsLock', 'Caps', 1.8), k('KeyA', 'ⵇ', 'ⵇ'), k('KeyS', 'ⵙ', 'ⵚ'), k('KeyD', 'ⴷ', 'ⴹ'), k('KeyF', 'ⴼ', 'ⴼ'), k('KeyG', 'ⴳ', 'ⴳ'), k('KeyH', 'ⵀ', 'ⵀ'), k('KeyJ', 'ⵊ', 'ⵊ'), k('KeyK', 'ⴽ', 'ⴽ'), k('KeyL', 'ⵍ', 'ⵍ'), k('Semicolon', 'ⵎ', 'ⵎ'), k('Quote', 'ⵏ', 'ⵏ'), ...row2EndCommon],
  [...row3Common, k('KeyZ', 'ⵡ', 'ⵡ'), k('KeyX', 'ⵅ', 'ⵅ'), k('KeyC', 'ⵛ', 'ⵛ'), k('KeyV', 'ⵖ', 'ⵖ'), k('KeyB', 'ⴱ', 'ⴱ'), k('KeyN', 'ⵏ', 'ⵏ'), k('KeyM', 'ⵎ', 'ⵎ'), k('Comma', ',', '<'), k('Period', '.', '>'), k('Slash', '/', '?'), ...row3EndCommon],
  row4Common
];

// --- INUKTITUT (Canada) ---
const iuRows: KeyDefinition[][] = [
  [k('Backquote', 'ᐁ', 'ᐁ'), k('Digit1', '1', '!'), k('Digit2', '2', '@'), k('Digit3', '3', '#'), k('Digit4', '4', '$'), k('Digit5', '5', '%'), k('Digit6', '6', '^'), k('Digit7', '7', '&'), k('Digit8', '8', '*'), k('Digit9', '9', '('), k('Digit0', '0', ')'), k('Minus', '-', '_'), k('Equal', '=', '+'), ...row0Common],
  [action('Tab', 'Tab', 1.5), k('KeyQ', 'ᖅ', 'ᖠ'), k('KeyW', 'ᐃ', 'ᖡ'), k('KeyE', 'ᐄ', 'ᕂ'), k('KeyR', 'ᑭ', 'ᕃ'), k('KeyT', 'ᑎ', 'ᖢ'), k('KeyY', 'ᓯ', 'ᖤ'), k('KeyU', 'ᒋ', 'ᖥ'), k('KeyI', 'ᓕ', 'ᖦ'), k('KeyO', 'ᒥ', 'ᖧ'), k('KeyP', 'ᓂ', 'ᖨ'), k('BracketLeft', 'ᐱ', 'ᖩ'), k('BracketRight', 'ᕿ', 'ᖪ')],
  [action('CapsLock', 'Caps', 1.8), k('KeyA', 'ᐊ', 'ᖫ'), k('KeyS', 'ᐋ', 'ᖬ'), k('KeyD', 'ᑲ', 'ᖭ'), k('KeyF', 'ᑕ', 'ᖮ'), k('KeyG', 'ᓴ', 'ᖯ'), k('KeyH', 'ᒐ', 'ᖰ'), k('KeyJ', 'ᓚ', 'ᖱ'), k('KeyK', 'ᒪ', 'ᖲ'), k('KeyL', 'ᓇ', 'ᖳ'), k('Semicolon', 'ᐸ', 'ᖴ'), k('Quote', 'ᖃ', 'ᖵ'), ...row2EndCommon],
  [...row3Common, k('KeyZ', 'ᕃ', 'ᖶ'), k('KeyX', 'ᕆ', 'ᖷ'), k('KeyC', 'ᕈ', 'ᖸ'), k('KeyV', 'ᕋ', 'ᖹ'), k('KeyB', 'ᖬ', 'ᖺ'), k('KeyN', 'ᖯ', 'ᖻ'), k('KeyM', 'ᖰ', 'ᖼ'), k('Comma', ',', '<'), k('Period', '.', '>'), k('Slash', '/', '?'), ...row3EndCommon],
  row4Common
];

// --- REGISTRY ---

export const layouts: Record<string, KeyboardLayout> = {
  // --- North America ---
  en: { id: 'en', name: 'English (US)', nativeName: 'English (US)', region: 'North America', dir: 'ltr', fontFamily: 'font-sans', rows: enRows },
  'en-ca': { id: 'en-ca', name: 'English (Canada)', nativeName: 'English (Canada)', region: 'North America', dir: 'ltr', fontFamily: 'font-sans', rows: enRows },
  'fr-ca': { id: 'fr-ca', name: 'French (Canada)', nativeName: 'Français (Canada)', region: 'North America', dir: 'ltr', fontFamily: 'font-sans', rows: enRows },
  iu: { id: 'iu', name: 'Inuktitut (Canada)', nativeName: 'ᐃᓄᒃᑎᑐᑦ', region: 'North America', dir: 'ltr', fontFamily: 'font-sans', rows: iuRows },
  'es-mx': { id: 'es-mx', name: 'Spanish (Mexico)', nativeName: 'Español (México)', region: 'North America', dir: 'ltr', fontFamily: 'font-sans', rows: esRows },

  // --- South America ---
  es: { id: 'es', name: 'Spanish (Latin America)', nativeName: 'Español (Latinoamérica)', region: 'South America', dir: 'ltr', fontFamily: 'font-sans', rows: esRows },
  'pt-br': { id: 'pt-br', name: 'Portuguese (Brazil)', nativeName: 'Português (Brasil)', region: 'South America', dir: 'ltr', fontFamily: 'font-sans', rows: enRows }, // BR uses QWERTY+Accents usually
  'es-ar': { id: 'es-ar', name: 'Spanish (Argentina)', nativeName: 'Español (Argentina)', region: 'South America', dir: 'ltr', fontFamily: 'font-sans', rows: esRows },
  'es-co': { id: 'es-co', name: 'Spanish (Colombia)', nativeName: 'Español (Colombia)', region: 'South America', dir: 'ltr', fontFamily: 'font-sans', rows: esRows },
  'es-pe': { id: 'es-pe', name: 'Spanish (Peru)', nativeName: 'Español (Perú)', region: 'South America', dir: 'ltr', fontFamily: 'font-sans', rows: esRows },
  'es-ve': { id: 'es-ve', name: 'Spanish (Venezuela)', nativeName: 'Español (Venezuela)', region: 'South America', dir: 'ltr', fontFamily: 'font-sans', rows: esRows },
  'es-cl': { id: 'es-cl', name: 'Spanish (Chile)', nativeName: 'Español (Chile)', region: 'South America', dir: 'ltr', fontFamily: 'font-sans', rows: esRows },

  // --- Western Europe ---
  'en-gb': { id: 'en-gb', name: 'English (UK)', nativeName: 'English (UK)', region: 'Western Europe', dir: 'ltr', fontFamily: 'font-sans', rows: enGbRows },
  ga: { id: 'ga', name: 'Irish (Gaelic)', nativeName: 'Gaeilge', region: 'Western Europe', dir: 'ltr', fontFamily: 'font-sans', rows: enGbRows },
  cy: { id: 'cy', name: 'Welsh', nativeName: 'Cymraeg', region: 'Western Europe', dir: 'ltr', fontFamily: 'font-sans', rows: enGbRows },
  fr: { id: 'fr', name: 'French', nativeName: 'Français', region: 'Western Europe', dir: 'ltr', fontFamily: 'font-sans', rows: frRows },
  'fr-be': { id: 'fr-be', name: 'French (Belgium)', nativeName: 'Français (Belgique)', region: 'Western Europe', dir: 'ltr', fontFamily: 'font-sans', rows: frRows },
  'fr-ch': { id: 'fr-ch', name: 'French (Switzerland)', nativeName: 'Français (Suisse)', region: 'Western Europe', dir: 'ltr', fontFamily: 'font-sans', rows: chRows },
  de: { id: 'de', name: 'German', nativeName: 'Deutsch', region: 'Western Europe', dir: 'ltr', fontFamily: 'font-sans', rows: deRows },
  'de-ch': { id: 'de-ch', name: 'German (Switzerland)', nativeName: 'Deutsch (Schweiz)', region: 'Western Europe', dir: 'ltr', fontFamily: 'font-sans', rows: chRows },
  'de-at': { id: 'de-at', name: 'German (Austria)', nativeName: 'Deutsch (Österreich)', region: 'Western Europe', dir: 'ltr', fontFamily: 'font-sans', rows: deRows },
  nl: { id: 'nl', name: 'Dutch', nativeName: 'Nederlands', region: 'Western Europe', dir: 'ltr', fontFamily: 'font-sans', rows: enRows },
  'nl-be': { id: 'nl-be', name: 'Dutch (Belgium)', nativeName: 'Nederlands (België)', region: 'Western Europe', dir: 'ltr', fontFamily: 'font-sans', rows: frRows }, // AZERTY variant common

  // --- Northern Europe ---
  sv: { id: 'sv', name: 'Swedish', nativeName: 'Svenska', region: 'Northern Europe', dir: 'ltr', fontFamily: 'font-sans', rows: svRows },
  da: { id: 'da', name: 'Danish', nativeName: 'Dansk', region: 'Northern Europe', dir: 'ltr', fontFamily: 'font-sans', rows: daRows },
  no: { id: 'no', name: 'Norwegian', nativeName: 'Norsk', region: 'Northern Europe', dir: 'ltr', fontFamily: 'font-sans', rows: daRows },
  fi: { id: 'fi', name: 'Finnish', nativeName: 'Suomi', region: 'Northern Europe', dir: 'ltr', fontFamily: 'font-sans', rows: svRows },
  is: { id: 'is', name: 'Icelandic', nativeName: 'Íslenska', region: 'Northern Europe', dir: 'ltr', fontFamily: 'font-sans', rows: isRows },
  et: { id: 'et', name: 'Estonian', nativeName: 'Eesti', region: 'Northern Europe', dir: 'ltr', fontFamily: 'font-sans', rows: etRows },
  lv: { id: 'lv', name: 'Latvian', nativeName: 'Latviešu', region: 'Northern Europe', dir: 'ltr', fontFamily: 'font-sans', rows: etRows },
  lt: { id: 'lt', name: 'Lithuanian', nativeName: 'Lietuvių', region: 'Northern Europe', dir: 'ltr', fontFamily: 'font-sans', rows: etRows },

  // --- Southern Europe ---
  it: { id: 'it', name: 'Italian', nativeName: 'Italiano', region: 'Southern Europe', dir: 'ltr', fontFamily: 'font-sans', rows: itRows },
  pt: { id: 'pt', name: 'Portuguese', nativeName: 'Português', region: 'Southern Europe', dir: 'ltr', fontFamily: 'font-sans', rows: ptRows },
  'es-es': { id: 'es-es', name: 'Spanish (Spain)', nativeName: 'Español (España)', region: 'Southern Europe', dir: 'ltr', fontFamily: 'font-sans', rows: esRows },
  el: { id: 'el', name: 'Greek', nativeName: 'Ελληνικά', region: 'Southern Europe', dir: 'ltr', fontFamily: 'font-sans', rows: elRows },
  mt: { id: 'mt', name: 'Maltese', nativeName: 'Malti', region: 'Southern Europe', dir: 'ltr', fontFamily: 'font-sans', rows: mtRows },
  sq: { id: 'sq', name: 'Albanian', nativeName: 'Shqip', region: 'Southern Europe', dir: 'ltr', fontFamily: 'font-sans', rows: sqRows },
  hr: { id: 'hr', name: 'Croatian', nativeName: 'Hrvatski', region: 'Southern Europe', dir: 'ltr', fontFamily: 'font-sans', rows: hrRows },
  sl: { id: 'sl', name: 'Slovenian', nativeName: 'Slovenščina', region: 'Southern Europe', dir: 'ltr', fontFamily: 'font-sans', rows: hrRows },
  sr: { id: 'sr', name: 'Serbian (Latin)', nativeName: 'Srpski (Latinica)', region: 'Southern Europe', dir: 'ltr', fontFamily: 'font-sans', rows: hrRows },
  mk: { id: 'mk', name: 'Macedonian', nativeName: 'Македонски', region: 'Southern Europe', dir: 'ltr', fontFamily: 'font-sans', rows: ruRows }, // Cyrillic base
  bs: { id: 'bs', name: 'Bosnian', nativeName: 'Bosanski', region: 'Southern Europe', dir: 'ltr', fontFamily: 'font-sans', rows: hrRows },
  
  // --- Eastern Europe ---
  ru: { id: 'ru', name: 'Russian', nativeName: 'Русский', region: 'Eastern Europe', dir: 'ltr', fontFamily: 'font-sans', rows: ruRows },
  uk: { id: 'uk', name: 'Ukrainian', nativeName: 'Українська', region: 'Eastern Europe', dir: 'ltr', fontFamily: 'font-sans', rows: ukRows },
  be: { id: 'be', name: 'Belarusian', nativeName: 'Беларуская', region: 'Eastern Europe', dir: 'ltr', fontFamily: 'font-sans', rows: ruRows },
  bg: { id: 'bg', name: 'Bulgarian', nativeName: 'Български', region: 'Eastern Europe', dir: 'ltr', fontFamily: 'font-sans', rows: ruRows },
  pl: { id: 'pl', name: 'Polish', nativeName: 'Polski', region: 'Eastern Europe', dir: 'ltr', fontFamily: 'font-sans', rows: enRows },
  cs: { id: 'cs', name: 'Czech', nativeName: 'Čeština', region: 'Eastern Europe', dir: 'ltr', fontFamily: 'font-sans', rows: csRows },
  sk: { id: 'sk', name: 'Slovak', nativeName: 'Slovenčina', region: 'Eastern Europe', dir: 'ltr', fontFamily: 'font-sans', rows: csRows },
  hu: { id: 'hu', name: 'Hungarian', nativeName: 'Magyar', region: 'Eastern Europe', dir: 'ltr', fontFamily: 'font-sans', rows: huRows },
  ro: { id: 'ro', name: 'Romanian', nativeName: 'Română', region: 'Eastern Europe', dir: 'ltr', fontFamily: 'font-sans', rows: roRows },
  ka: { id: 'ka', name: 'Georgian', nativeName: 'ქართული', region: 'Eastern Europe', dir: 'ltr', fontFamily: 'font-sans', rows: kaRows },
  hy: { id: 'hy', name: 'Armenian', nativeName: 'Հայերեն', region: 'Eastern Europe', dir: 'ltr', fontFamily: 'font-sans', rows: hyRows },

  // --- Middle East & North Africa ---
  ar: { id: 'ar', name: 'Arabic', nativeName: 'العربية', region: 'Middle East', dir: 'rtl', fontFamily: 'font-arabic', rows: arRows },
  'ar-sa': { id: 'ar-sa', name: 'Arabic (Saudi Arabia)', nativeName: 'العربية (السعودية)', region: 'Middle East', dir: 'rtl', fontFamily: 'font-arabic', rows: arRows },
  'ar-eg': { id: 'ar-eg', name: 'Arabic (Egypt)', nativeName: 'العربية (مصر)', region: 'Middle East', dir: 'rtl', fontFamily: 'font-arabic', rows: arRows },
  'ar-ae': { id: 'ar-ae', name: 'Arabic (UAE)', nativeName: 'العربية (الإمارات)', region: 'Middle East', dir: 'rtl', fontFamily: 'font-arabic', rows: arRows },
  he: { id: 'he', name: 'Hebrew', nativeName: 'עברית', region: 'Middle East', dir: 'rtl', fontFamily: 'font-sans', rows: heRows },
  fa: { id: 'fa', name: 'Persian (Farsi)', nativeName: 'فارسی', region: 'Middle East', dir: 'rtl', fontFamily: 'font-arabic', rows: faRows },
  tr: { id: 'tr', name: 'Turkish', nativeName: 'Türkçe', region: 'Middle East', dir: 'ltr', fontFamily: 'font-sans', rows: trRows },
  ur: { id: 'ur', name: 'Urdu', nativeName: 'اردو', region: 'Middle East', dir: 'rtl', fontFamily: 'font-arabic', rows: urRows },
  ps: { id: 'ps', name: 'Pashto', nativeName: 'پښتو', region: 'Middle East', dir: 'rtl', fontFamily: 'font-arabic', rows: psRows },
  ckb: { id: 'ckb', name: 'Kurdish (Sorani)', nativeName: 'کوردی', region: 'Middle East', dir: 'rtl', fontFamily: 'font-arabic', rows: ckbRows },
  ku: { id: 'ku', name: 'Kurdish (Kurmanji)', nativeName: 'Kurmancî', region: 'Middle East', dir: 'ltr', fontFamily: 'font-sans', rows: trRows },
  zgh: { id: 'zgh', name: 'Tifinagh (Berber)', nativeName: 'ⵜⴰⵎⴰⵣⵉⵖⵜ', region: 'North Africa', dir: 'ltr', fontFamily: 'font-sans', rows: zghRows },
  'ar-ma': { id: 'ar-ma', name: 'Arabic (Morocco)', nativeName: 'العربية (المغرب)', region: 'North Africa', dir: 'rtl', fontFamily: 'font-arabic', rows: arRows },
  'ar-dz': { id: 'ar-dz', name: 'Arabic (Algeria)', nativeName: 'العربية (الجزائر)', region: 'North Africa', dir: 'rtl', fontFamily: 'font-arabic', rows: arRows },

  // --- Central Asia ---
  kk: { id: 'kk', name: 'Kazakh', nativeName: 'Қазақша', region: 'Central Asia', dir: 'ltr', fontFamily: 'font-sans', rows: ruRows },
  tg: { id: 'tg', name: 'Tajik', nativeName: 'Тоҷикӣ', region: 'Central Asia', dir: 'ltr', fontFamily: 'font-sans', rows: ruRows },
  uz: { id: 'uz', name: 'Uzbek (Cyrillic)', nativeName: 'Ўзбекча', region: 'Central Asia', dir: 'ltr', fontFamily: 'font-sans', rows: ruRows },
  ky: { id: 'ky', name: 'Kyrgyz', nativeName: 'Кыргызча', region: 'Central Asia', dir: 'ltr', fontFamily: 'font-sans', rows: ruRows },
  tk: { id: 'tk', name: 'Turkmen', nativeName: 'Türkmençe', region: 'Central Asia', dir: 'ltr', fontFamily: 'font-sans', rows: trRows },
  mn: { id: 'mn', name: 'Mongolian', nativeName: 'Монгол', region: 'Central Asia', dir: 'ltr', fontFamily: 'font-sans', rows: ruRows },

  // --- South Asia ---
  hi: { id: 'hi', name: 'Hindi', nativeName: 'हिन्दी', region: 'South Asia', dir: 'ltr', fontFamily: 'font-sans', rows: hiRows },
  bn: { id: 'bn', name: 'Bengali', nativeName: 'বাংলা', region: 'South Asia', dir: 'ltr', fontFamily: 'font-sans', rows: bnRows },
  'bn-bd': { id: 'bn-bd', name: 'Bengali (Bangladesh)', nativeName: 'বাংলা (বাংলাদেশ)', region: 'South Asia', dir: 'ltr', fontFamily: 'font-sans', rows: bnRows },
  pa: { id: 'pa', name: 'Punjabi (Gurmukhi)', nativeName: 'ਪੰਜਾਬੀ', region: 'South Asia', dir: 'ltr', fontFamily: 'font-sans', rows: paRows },
  gu: { id: 'gu', name: 'Gujarati', nativeName: 'ગુજરાતી', region: 'South Asia', dir: 'ltr', fontFamily: 'font-sans', rows: guRows },
  or: { id: 'or', name: 'Odia', nativeName: 'ଓଡ଼ିଆ', region: 'South Asia', dir: 'ltr', fontFamily: 'font-sans', rows: orRows },
  ta: { id: 'ta', name: 'Tamil', nativeName: 'தமிழ்', region: 'South Asia', dir: 'ltr', fontFamily: 'font-sans', rows: taRows },
  te: { id: 'te', name: 'Telugu', nativeName: 'తెలుగు', region: 'South Asia', dir: 'ltr', fontFamily: 'font-sans', rows: teRows },
  kn: { id: 'kn', name: 'Kannada', nativeName: 'ಕನ್ನಡ', region: 'South Asia', dir: 'ltr', fontFamily: 'font-sans', rows: knRows },
  ml: { id: 'ml', name: 'Malayalam', nativeName: 'മലയാളം', region: 'South Asia', dir: 'ltr', fontFamily: 'font-sans', rows: mlRows },
  si: { id: 'si', name: 'Sinhala', nativeName: 'සිංහල', region: 'South Asia', dir: 'ltr', fontFamily: 'font-sans', rows: siRows },
  dv: { id: 'dv', name: 'Divehi', nativeName: 'ދިވެހި', region: 'South Asia', dir: 'rtl', fontFamily: 'font-arabic', rows: dvRows },
  ne: { id: 'ne', name: 'Nepali', nativeName: 'नेपाली', region: 'South Asia', dir: 'ltr', fontFamily: 'font-sans', rows: hiRows },
  bo: { id: 'bo', name: 'Tibetan', nativeName: 'བོད་སྐད་', region: 'South Asia', dir: 'ltr', fontFamily: 'font-sans', rows: boRows },

  // --- Southeast Asia ---
  th: { id: 'th', name: 'Thai', nativeName: 'ไทย', region: 'Southeast Asia', dir: 'ltr', fontFamily: 'font-sans', rows: thRows },
  km: { id: 'km', name: 'Khmer', nativeName: 'ខ្មែរ', region: 'Southeast Asia', dir: 'ltr', fontFamily: 'font-sans', rows: kmRows },
  my: { id: 'my', name: 'Burmese', nativeName: 'မြန်မာ', region: 'Southeast Asia', dir: 'ltr', fontFamily: 'font-sans', rows: myRows },
  vi: { id: 'vi', name: 'Vietnamese', nativeName: 'Tiếng Việt', region: 'Southeast Asia', dir: 'ltr', fontFamily: 'font-sans', rows: enRows },
  id: { id: 'id', name: 'Indonesian', nativeName: 'Bahasa Indonesia', region: 'Southeast Asia', dir: 'ltr', fontFamily: 'font-sans', rows: enRows },
  ms: { id: 'ms', name: 'Malay', nativeName: 'Bahasa Melayu', region: 'Southeast Asia', dir: 'ltr', fontFamily: 'font-sans', rows: enRows },
  tl: { id: 'tl', name: 'Tagalog', nativeName: 'Tagalog', region: 'Southeast Asia', dir: 'ltr', fontFamily: 'font-sans', rows: esRows },

  // --- East Asia ---
  ko: { id: 'ko', name: 'Korean', nativeName: '한국어', region: 'East Asia', dir: 'ltr', fontFamily: 'font-sans', rows: koRows },
  'zh-tw': { id: 'zh-tw', name: 'Chinese (Traditional/Zhuyin)', nativeName: '繁體中文 (注音)', region: 'East Asia', dir: 'ltr', fontFamily: 'font-sans', rows: enRows }, // Placeholder for future IME
  ja: { id: 'ja', name: 'Japanese (Romaji)', nativeName: '日本語', region: 'East Asia', dir: 'ltr', fontFamily: 'font-sans', rows: enRows }, // Placeholder

  // --- Sub-Saharan Africa ---
  am: { id: 'am', name: 'Amharic', nativeName: 'አማርኛ', region: 'Sub-Saharan Africa', dir: 'ltr', fontFamily: 'font-sans', rows: amRows },
  ti: { id: 'ti', name: 'Tigrinya', nativeName: 'ትግርኛ', region: 'Sub-Saharan Africa', dir: 'ltr', fontFamily: 'font-sans', rows: amRows },
  ha: { id: 'ha', name: 'Hausa', nativeName: 'Hausa', region: 'Sub-Saharan Africa', dir: 'ltr', fontFamily: 'font-sans', rows: enRows },
  sw: { id: 'sw', name: 'Swahili', nativeName: 'Kiswahili', region: 'Sub-Saharan Africa', dir: 'ltr', fontFamily: 'font-sans', rows: enRows },
  yo: { id: 'yo', name: 'Yoruba', nativeName: 'Yorùbá', region: 'Sub-Saharan Africa', dir: 'ltr', fontFamily: 'font-sans', rows: enRows },
  ig: { id: 'ig', name: 'Igbo', nativeName: 'Igbo', region: 'Sub-Saharan Africa', dir: 'ltr', fontFamily: 'font-sans', rows: enRows },
  zu: { id: 'zu', name: 'Zulu', nativeName: 'isiZulu', region: 'Sub-Saharan Africa', dir: 'ltr', fontFamily: 'font-sans', rows: enRows },
  xh: { id: 'xh', name: 'Xhosa', nativeName: 'isiXhosa', region: 'Sub-Saharan Africa', dir: 'ltr', fontFamily: 'font-sans', rows: enRows },
  af: { id: 'af', name: 'Afrikaans', nativeName: 'Afrikaans', region: 'Sub-Saharan Africa', dir: 'ltr', fontFamily: 'font-sans', rows: enRows },

  // --- Oceania ---
  mi: { id: 'mi', name: 'Maori', nativeName: 'Māori', region: 'Oceania', dir: 'ltr', fontFamily: 'font-sans', rows: enRows },
  fj: { id: 'fj', name: 'Fijian', nativeName: 'Vosa Vakaviti', region: 'Oceania', dir: 'ltr', fontFamily: 'font-sans', rows: enRows },
  sm: { id: 'sm', name: 'Samoan', nativeName: 'Gagana Samoa', region: 'Oceania', dir: 'ltr', fontFamily: 'font-sans', rows: enRows },
};

export const getLayout = (id: string): KeyboardLayout => layouts[id] || layouts.en;
