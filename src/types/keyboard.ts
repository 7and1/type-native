/**
 * Core keyboard type definitions for Type-Native.com
 * Custom keyboard engine - NO external libraries
 */

// All supported language codes (ISO 639-1 and regional variants)
export type LanguageCode =
  // Original Tier 1-3
  | 'ar' | 'ru' | 'he' | 'ja' | 'ko'
  | 'am' | 'th' | 'el' | 'hi' | 'ur' | 'fa' | 'uk'
  | 'tr' | 'vi' | 'bn' | 'ta' | 'ps' | 'ti' | 'hy' | 'ka'
  // North America
  | 'en' | 'en-ca' | 'fr-ca' | 'iu' | 'es-mx'
  // South America
  | 'es' | 'pt-br' | 'es-ar' | 'es-co' | 'es-pe' | 'es-ve' | 'es-cl'
  // Western Europe
  | 'en-gb' | 'ga' | 'cy' | 'fr' | 'fr-be' | 'fr-ch' | 'de' | 'de-ch' | 'de-at' | 'nl' | 'nl-be'
  // Northern Europe
  | 'sv' | 'da' | 'no' | 'fi' | 'is' | 'et' | 'lv' | 'lt'
  // Southern Europe
  | 'it' | 'pt' | 'es-es' | 'mt' | 'sq' | 'hr' | 'sl' | 'sr' | 'mk' | 'bs'
  // Eastern Europe
  | 'be' | 'bg' | 'pl' | 'cs' | 'sk' | 'hu' | 'ro'
  // Middle East & North Africa
  | 'ar-sa' | 'ar-eg' | 'ar-ae' | 'ar-ma' | 'ar-dz' | 'ckb' | 'ku' | 'zgh'
  // Central Asia
  | 'kk' | 'tg' | 'uz' | 'ky' | 'tk' | 'mn'
  // South Asia
  | 'bn-bd' | 'pa' | 'gu' | 'or' | 'te' | 'kn' | 'ml' | 'si' | 'dv' | 'ne' | 'bo'
  // Southeast Asia
  | 'km' | 'my' | 'id' | 'ms' | 'tl'
  // East Asia
  | 'zh-tw'
  // Sub-Saharan Africa
  | 'ha' | 'sw' | 'yo' | 'ig' | 'zu' | 'xh' | 'af'
  // Oceania
  | 'mi' | 'fj' | 'sm';

// Key types for styling and behavior
export type KeyType = 'character' | 'modifier' | 'action' | 'space';

// Individual key definition
export interface KeyDefinition {
  id: string;              // Unique identifier for the key
  label: string;           // Display label on the key
  value: string;           // Character output when pressed
  shiftValue?: string;     // Character output when Shift is active
  code?: string;           // Physical keyboard code (e.g., 'KeyQ')
  type: KeyType;           // Type of key for styling
  width?: number;          // Relative width (1 = standard, 1.5 = wider, etc.)
}

// A row of keys on the keyboard
export interface KeyboardRow {
  keys: KeyDefinition[];
}

// Complete keyboard layout for a language
export interface KeyboardLayout {
  id: LanguageCode;           // Language code
  name: string;               // English name (e.g., "Arabic")
  nativeName: string;         // Native name (e.g., "العربية")
  direction: 'ltr' | 'rtl';   // Text direction
  fontFamily?: string;        // Optional custom font
  rows: KeyboardRow[];        // Array of keyboard rows
  physicalKeyMap?: Record<string, string>;  // QWERTY to target mapping
}

// Keyboard state for managing modifiers
export interface KeyboardState {
  shift: boolean;
  capsLock: boolean;
  currentLayout: LanguageCode;
}

// Route metadata for SEO
export interface RouteMetadata {
  languageCode: LanguageCode;
  uiLanguage: 'en' | 'fr';
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl: string;
  alternateUrls: {
    en: string;
    fr: string;
  };
}

// Language info for hub page display
export interface LanguageInfo {
  code: LanguageCode;
  name: string;
  nativeName: string;
  direction: 'ltr' | 'rtl';
  script: string;
  speakers: string;
  countries: number;
  enSlug: string;
  frSlug: string;
}

// RTL languages constant
export const RTL_LANGUAGES: LanguageCode[] = ['ar', 'ar-sa', 'ar-eg', 'ar-ae', 'ar-ma', 'ar-dz', 'he', 'ur', 'fa', 'ps', 'dv', 'ckb'];

// Helper function to check if a language is RTL
export function isRTL(code: LanguageCode): boolean {
  return RTL_LANGUAGES.includes(code);
}

// Helper function to get text direction
export function getTextDirection(code: LanguageCode): 'ltr' | 'rtl' {
  return isRTL(code) ? 'rtl' : 'ltr';
}
