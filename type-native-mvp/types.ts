
export type KeyboardLayoutId = string;

export interface KeyDefinition {
  code: string;       // Physical key code (e.g., 'KeyQ', 'Backquote')
  char: string;       // The character to insert (e.g., 'ض')
  shift?: string;     // The character when Shift is held (e.g., 'َ')
  alt?: string;       // AltGr character
  label?: string;     // If different from char (e.g., 'Enter', 'Space')
  width?: number;     // 1 = standard, 2+ = wider keys
  type?: 'char' | 'action' | 'modifier'; // specific key type
}

export type Region = 
  | 'North America' 
  | 'South America' 
  | 'Western Europe' 
  | 'Northern Europe' 
  | 'Southern Europe' 
  | 'Eastern Europe' 
  | 'Middle East' 
  | 'North Africa' 
  | 'Sub-Saharan Africa' 
  | 'Central Asia' 
  | 'South Asia' 
  | 'East Asia' 
  | 'Southeast Asia' 
  | 'Oceania';

export interface KeyboardLayout {
  id: KeyboardLayoutId;
  name: string;       // e.g., "Arabic"
  nativeName?: string; // e.g., "العربية"
  region: Region;
  dir: 'ltr' | 'rtl'; // Direction
  fontFamily: string; // e.g., "Noto Sans Arabic"
  rows: KeyDefinition[][]; // 4-5 rows of keys
}

export interface AppState {
  currentText: string;
  activeLayoutId: KeyboardLayoutId;
  isShift: boolean;
  isCaps: boolean;
}
