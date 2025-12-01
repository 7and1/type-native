/**
 * Keyboard Layouts Index
 * Central registry for all supported language keyboards
 */

import type { KeyboardLayout, LanguageCode, LanguageInfo } from '@/types/keyboard';

// Western & Northern Europe
import { englishLayout } from './en';
import { englishUkLayout } from './en-gb';
import { englishCanadaLayout } from './en-ca';
import { germanLayout } from './de';
import { germanSwissLayout } from './de-ch';
import { germanAustriaLayout } from './de-at';
import { frenchLayout } from './fr';
import { frenchCanadaLayout } from './fr-ca';
import { frenchBelgiumLayout } from './fr-be';
import { frenchSwissLayout } from './fr-ch';
import { spanishLayout } from './es';
import { spanishSpainLayout } from './es-es';
import { spanishMexicoLayout } from './es-mx';
import { spanishArgentinaLayout } from './es-ar';
import { spanishColombiaLayout } from './es-co';
import { spanishPeruLayout } from './es-pe';
import { spanishVenezuelaLayout } from './es-ve';
import { spanishChileLayout } from './es-cl';
import { italianLayout } from './it';
import { portugueseLayout } from './pt';
import { portugueseBrazilLayout } from './pt-br';
import { dutchLayout } from './nl';
import { dutchBelgiumLayout } from './nl-be';
import { swedishLayout } from './sv';
import { danishLayout } from './da';
import { norwegianLayout } from './no';
import { finnishLayout } from './fi';
import { polishLayout } from './pl';
import { irishLayout } from './ga';
import { welshLayout } from './cy';
import { icelandicLayout } from './is';
import { estonianLayout } from './et';
import { latvianLayout } from './lv';
import { lithuanianLayout } from './lt';

// Southern & Eastern Europe
import { greekLayout } from './el';
import { turkishLayout } from './tr';
import { russianLayout } from './ru';
import { ukrainianLayout } from './uk';
import { czechLayout } from './cs';
import { hungarianLayout } from './hu';
import { romanianLayout } from './ro';
import { croatianLayout } from './hr';
import { slovakLayout } from './sk';
import { slovenianLayout } from './sl';
import { serbianLayout } from './sr';
import { bosnianLayout } from './bs';
import { bulgarianLayout } from './bg';
import { belarusianLayout } from './be';
import { malteseLayout } from './mt';
import { albanianLayout } from './sq';
import { macedonianLayout } from './mk';

// Middle East & North Africa
import { arabicLayout } from './ar';
import { arabicSaudiLayout } from './ar-sa';
import { arabicEgyptLayout } from './ar-eg';
import { arabicUAELayout } from './ar-ae';
import { arabicMoroccoLayout } from './ar-ma';
import { arabicAlgeriaLayout } from './ar-dz';
import { hebrewLayout } from './he';
import { persianLayout } from './fa';
import { urduLayout } from './ur';
import { pashtoLayout } from './ps';
import { kurdishSoraniLayout } from './ckb';
import { kurdishKurmanjiLayout } from './ku';
import { tifinaghLayout } from './zgh';

// Central Asia
import { kazakhLayout } from './kk';
import { tajikLayout } from './tg';
import { uzbekLayout } from './uz';
import { kyrgyzLayout } from './ky';
import { turkmenLayout } from './tk';
import { mongolianLayout } from './mn';

// South Asia
import { hindiLayout } from './hi';
import { bengaliLayout } from './bn';
import { bengaliBangladeshLayout } from './bn-bd';
import { tamilLayout } from './ta';
import { punjabiLayout } from './pa';
import { gujaratiLayout } from './gu';
import { teluguLayout } from './te';
import { kannadaLayout } from './kn';
import { malayalamLayout } from './ml';
import { odiaLayout } from './or';
import { sinhalaLayout } from './si';
import { divehiLayout } from './dv';
import { nepaliLayout } from './ne';
import { tibetanLayout } from './bo';

// East & Southeast Asia
import { japaneseLayout } from './ja';
import { koreanLayout } from './ko';
import { chineseTraditionalLayout } from './zh-tw';
import { thaiLayout } from './th';
import { vietnameseLayout } from './vi';
import { khmerLayout } from './km';
import { burmeseLayout } from './my';
import { indonesianLayout } from './id';
import { malayLayout } from './ms';
import { tagalogLayout } from './tl';

// Americas (Indigenous)
import { inuktitutLayout } from './iu';

// Africa
import { amharicLayout } from './am';
import { tigrinyaLayout } from './ti';
import { hausaLayout } from './ha';
import { swahiliLayout } from './sw';
import { yorubaLayout } from './yo';
import { igboLayout } from './ig';
import { zuluLayout } from './zu';
import { xhosaLayout } from './xh';
import { afrikaansLayout } from './af';

// Oceania
import { maoriLayout } from './mi';
import { fijianLayout } from './fj';
import { samoanLayout } from './sm';

// Caucasus
import { armenianLayout } from './hy';
import { georgianLayout } from './ka';

// Layouts registry by language code
export const layouts: Partial<Record<LanguageCode, KeyboardLayout>> = {
  // Western & Northern Europe
  en: englishLayout,
  'en-gb': englishUkLayout,
  'en-ca': englishCanadaLayout,
  de: germanLayout,
  'de-ch': germanSwissLayout,
  'de-at': germanAustriaLayout,
  fr: frenchLayout,
  'fr-ca': frenchCanadaLayout,
  'fr-be': frenchBelgiumLayout,
  'fr-ch': frenchSwissLayout,
  es: spanishLayout,
  'es-es': spanishSpainLayout,
  'es-mx': spanishMexicoLayout,
  'es-ar': spanishArgentinaLayout,
  'es-co': spanishColombiaLayout,
  'es-pe': spanishPeruLayout,
  'es-ve': spanishVenezuelaLayout,
  'es-cl': spanishChileLayout,
  it: italianLayout,
  pt: portugueseLayout,
  'pt-br': portugueseBrazilLayout,
  nl: dutchLayout,
  'nl-be': dutchBelgiumLayout,
  sv: swedishLayout,
  da: danishLayout,
  no: norwegianLayout,
  fi: finnishLayout,
  pl: polishLayout,
  ga: irishLayout,
  cy: welshLayout,
  is: icelandicLayout,
  et: estonianLayout,
  lv: latvianLayout,
  lt: lithuanianLayout,

  // Southern & Eastern Europe
  el: greekLayout,
  tr: turkishLayout,
  ru: russianLayout,
  uk: ukrainianLayout,
  cs: czechLayout,
  hu: hungarianLayout,
  ro: romanianLayout,
  hr: croatianLayout,
  sk: slovakLayout,
  sl: slovenianLayout,
  sr: serbianLayout,
  bs: bosnianLayout,
  bg: bulgarianLayout,
  be: belarusianLayout,
  mt: malteseLayout,
  sq: albanianLayout,
  mk: macedonianLayout,

  // Middle East & North Africa
  ar: arabicLayout,
  'ar-sa': arabicSaudiLayout,
  'ar-eg': arabicEgyptLayout,
  'ar-ae': arabicUAELayout,
  'ar-ma': arabicMoroccoLayout,
  'ar-dz': arabicAlgeriaLayout,
  he: hebrewLayout,
  fa: persianLayout,
  ur: urduLayout,
  ps: pashtoLayout,
  ckb: kurdishSoraniLayout,
  ku: kurdishKurmanjiLayout,
  zgh: tifinaghLayout,

  // Central Asia
  kk: kazakhLayout,
  tg: tajikLayout,
  uz: uzbekLayout,
  ky: kyrgyzLayout,
  tk: turkmenLayout,
  mn: mongolianLayout,

  // South Asia
  hi: hindiLayout,
  bn: bengaliLayout,
  'bn-bd': bengaliBangladeshLayout,
  ta: tamilLayout,
  pa: punjabiLayout,
  gu: gujaratiLayout,
  te: teluguLayout,
  kn: kannadaLayout,
  ml: malayalamLayout,
  or: odiaLayout,
  si: sinhalaLayout,
  dv: divehiLayout,
  ne: nepaliLayout,
  bo: tibetanLayout,

  // East & Southeast Asia
  ja: japaneseLayout,
  ko: koreanLayout,
  'zh-tw': chineseTraditionalLayout,
  th: thaiLayout,
  vi: vietnameseLayout,
  km: khmerLayout,
  my: burmeseLayout,
  id: indonesianLayout,
  ms: malayLayout,
  tl: tagalogLayout,

  // Americas (Indigenous)
  iu: inuktitutLayout,

  // Africa
  am: amharicLayout,
  ti: tigrinyaLayout,
  ha: hausaLayout,
  sw: swahiliLayout,
  yo: yorubaLayout,
  ig: igboLayout,
  zu: zuluLayout,
  xh: xhosaLayout,
  af: afrikaansLayout,

  // Oceania
  mi: maoriLayout,
  fj: fijianLayout,
  sm: samoanLayout,

  // Caucasus
  hy: armenianLayout,
  ka: georgianLayout,
};

// Get layout by code
export function getLayout(code: LanguageCode): KeyboardLayout | undefined {
  return layouts[code];
}

// All language codes
export const languageCodes = Object.keys(layouts) as LanguageCode[];

// Language info with SEO data
export const languageInfo: Partial<Record<LanguageCode, LanguageInfo>> = {
  // Western & Northern Europe
  en: {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    direction: 'ltr',
    script: 'Latin',
    speakers: '1.5 billion',
    countries: 67,
    enSlug: 'english-keyboard',
    frSlug: 'clavier-anglais',
  },
  'en-gb': {
    code: 'en-gb',
    name: 'English (UK)',
    nativeName: 'English (UK)',
    direction: 'ltr',
    script: 'Latin',
    speakers: '67 million',
    countries: 1,
    enSlug: 'english-uk-keyboard',
    frSlug: 'clavier-anglais-uk',
  },
  de: {
    code: 'de',
    name: 'German',
    nativeName: 'Deutsch',
    direction: 'ltr',
    script: 'Latin',
    speakers: '130 million',
    countries: 6,
    enSlug: 'german-keyboard',
    frSlug: 'clavier-allemand',
  },
  fr: {
    code: 'fr',
    name: 'French',
    nativeName: 'Français',
    direction: 'ltr',
    script: 'Latin',
    speakers: '310 million',
    countries: 29,
    enSlug: 'french-keyboard',
    frSlug: 'clavier-francais',
  },
  es: {
    code: 'es',
    name: 'Spanish',
    nativeName: 'Español',
    direction: 'ltr',
    script: 'Latin',
    speakers: '560 million',
    countries: 21,
    enSlug: 'spanish-keyboard',
    frSlug: 'clavier-espagnol',
  },
  it: {
    code: 'it',
    name: 'Italian',
    nativeName: 'Italiano',
    direction: 'ltr',
    script: 'Latin',
    speakers: '68 million',
    countries: 4,
    enSlug: 'italian-keyboard',
    frSlug: 'clavier-italien',
  },
  pt: {
    code: 'pt',
    name: 'Portuguese',
    nativeName: 'Português',
    direction: 'ltr',
    script: 'Latin',
    speakers: '260 million',
    countries: 10,
    enSlug: 'portuguese-keyboard',
    frSlug: 'clavier-portugais',
  },
  nl: {
    code: 'nl',
    name: 'Dutch',
    nativeName: 'Nederlands',
    direction: 'ltr',
    script: 'Latin',
    speakers: '25 million',
    countries: 3,
    enSlug: 'dutch-keyboard',
    frSlug: 'clavier-neerlandais',
  },
  sv: {
    code: 'sv',
    name: 'Swedish',
    nativeName: 'Svenska',
    direction: 'ltr',
    script: 'Latin',
    speakers: '10 million',
    countries: 2,
    enSlug: 'swedish-keyboard',
    frSlug: 'clavier-suedois',
  },
  da: {
    code: 'da',
    name: 'Danish',
    nativeName: 'Dansk',
    direction: 'ltr',
    script: 'Latin',
    speakers: '6 million',
    countries: 2,
    enSlug: 'danish-keyboard',
    frSlug: 'clavier-danois',
  },
  no: {
    code: 'no',
    name: 'Norwegian',
    nativeName: 'Norsk',
    direction: 'ltr',
    script: 'Latin',
    speakers: '5 million',
    countries: 1,
    enSlug: 'norwegian-keyboard',
    frSlug: 'clavier-norvegien',
  },
  fi: {
    code: 'fi',
    name: 'Finnish',
    nativeName: 'Suomi',
    direction: 'ltr',
    script: 'Latin',
    speakers: '5 million',
    countries: 1,
    enSlug: 'finnish-keyboard',
    frSlug: 'clavier-finnois',
  },
  pl: {
    code: 'pl',
    name: 'Polish',
    nativeName: 'Polski',
    direction: 'ltr',
    script: 'Latin',
    speakers: '45 million',
    countries: 1,
    enSlug: 'polish-keyboard',
    frSlug: 'clavier-polonais',
  },
  ga: {
    code: 'ga',
    name: 'Irish',
    nativeName: 'Gaeilge',
    direction: 'ltr',
    script: 'Latin',
    speakers: '1.7 million',
    countries: 1,
    enSlug: 'irish-keyboard',
    frSlug: 'clavier-irlandais',
  },
  cy: {
    code: 'cy',
    name: 'Welsh',
    nativeName: 'Cymraeg',
    direction: 'ltr',
    script: 'Latin',
    speakers: '750 thousand',
    countries: 1,
    enSlug: 'welsh-keyboard',
    frSlug: 'clavier-gallois',
  },
  is: {
    code: 'is',
    name: 'Icelandic',
    nativeName: 'Íslenska',
    direction: 'ltr',
    script: 'Latin',
    speakers: '350 thousand',
    countries: 1,
    enSlug: 'icelandic-keyboard',
    frSlug: 'clavier-islandais',
  },
  et: {
    code: 'et',
    name: 'Estonian',
    nativeName: 'Eesti',
    direction: 'ltr',
    script: 'Latin',
    speakers: '1.1 million',
    countries: 1,
    enSlug: 'estonian-keyboard',
    frSlug: 'clavier-estonien',
  },
  lv: {
    code: 'lv',
    name: 'Latvian',
    nativeName: 'Latviešu',
    direction: 'ltr',
    script: 'Latin',
    speakers: '1.7 million',
    countries: 1,
    enSlug: 'latvian-keyboard',
    frSlug: 'clavier-letton',
  },
  lt: {
    code: 'lt',
    name: 'Lithuanian',
    nativeName: 'Lietuvių',
    direction: 'ltr',
    script: 'Latin',
    speakers: '3 million',
    countries: 1,
    enSlug: 'lithuanian-keyboard',
    frSlug: 'clavier-lituanien',
  },

  // Southern & Eastern Europe
  el: {
    code: 'el',
    name: 'Greek',
    nativeName: 'Ελληνικά',
    direction: 'ltr',
    script: 'Greek',
    speakers: '13 million',
    countries: 2,
    enSlug: 'greek-keyboard',
    frSlug: 'clavier-grec',
  },
  tr: {
    code: 'tr',
    name: 'Turkish',
    nativeName: 'Türkçe',
    direction: 'ltr',
    script: 'Latin',
    speakers: '88 million',
    countries: 1,
    enSlug: 'turkish-keyboard',
    frSlug: 'clavier-turc',
  },
  ru: {
    code: 'ru',
    name: 'Russian',
    nativeName: 'Русский',
    direction: 'ltr',
    script: 'Cyrillic',
    speakers: '258 million',
    countries: 4,
    enSlug: 'russian-keyboard',
    frSlug: 'clavier-russe',
  },
  uk: {
    code: 'uk',
    name: 'Ukrainian',
    nativeName: 'Українська',
    direction: 'ltr',
    script: 'Cyrillic',
    speakers: '40 million',
    countries: 1,
    enSlug: 'ukrainian-keyboard',
    frSlug: 'clavier-ukrainien',
  },
  cs: {
    code: 'cs',
    name: 'Czech',
    nativeName: 'Čeština',
    direction: 'ltr',
    script: 'Latin',
    speakers: '10 million',
    countries: 1,
    enSlug: 'czech-keyboard',
    frSlug: 'clavier-tcheque',
  },
  hu: {
    code: 'hu',
    name: 'Hungarian',
    nativeName: 'Magyar',
    direction: 'ltr',
    script: 'Latin',
    speakers: '13 million',
    countries: 1,
    enSlug: 'hungarian-keyboard',
    frSlug: 'clavier-hongrois',
  },
  ro: {
    code: 'ro',
    name: 'Romanian',
    nativeName: 'Română',
    direction: 'ltr',
    script: 'Latin',
    speakers: '26 million',
    countries: 2,
    enSlug: 'romanian-keyboard',
    frSlug: 'clavier-roumain',
  },
  hr: {
    code: 'hr',
    name: 'Croatian',
    nativeName: 'Hrvatski',
    direction: 'ltr',
    script: 'Latin',
    speakers: '5 million',
    countries: 1,
    enSlug: 'croatian-keyboard',
    frSlug: 'clavier-croate',
  },
  sk: {
    code: 'sk',
    name: 'Slovak',
    nativeName: 'Slovenčina',
    direction: 'ltr',
    script: 'Latin',
    speakers: '5 million',
    countries: 1,
    enSlug: 'slovak-keyboard',
    frSlug: 'clavier-slovaque',
  },
  sl: {
    code: 'sl',
    name: 'Slovenian',
    nativeName: 'Slovenščina',
    direction: 'ltr',
    script: 'Latin',
    speakers: '2.5 million',
    countries: 1,
    enSlug: 'slovenian-keyboard',
    frSlug: 'clavier-slovene',
  },
  sr: {
    code: 'sr',
    name: 'Serbian',
    nativeName: 'Srpski',
    direction: 'ltr',
    script: 'Latin',
    speakers: '12 million',
    countries: 4,
    enSlug: 'serbian-keyboard',
    frSlug: 'clavier-serbe',
  },
  bs: {
    code: 'bs',
    name: 'Bosnian',
    nativeName: 'Bosanski',
    direction: 'ltr',
    script: 'Latin',
    speakers: '2.5 million',
    countries: 1,
    enSlug: 'bosnian-keyboard',
    frSlug: 'clavier-bosniaque',
  },
  bg: {
    code: 'bg',
    name: 'Bulgarian',
    nativeName: 'Български',
    direction: 'ltr',
    script: 'Cyrillic',
    speakers: '8 million',
    countries: 1,
    enSlug: 'bulgarian-keyboard',
    frSlug: 'clavier-bulgare',
  },
  be: {
    code: 'be',
    name: 'Belarusian',
    nativeName: 'Беларуская',
    direction: 'ltr',
    script: 'Cyrillic',
    speakers: '5 million',
    countries: 1,
    enSlug: 'belarusian-keyboard',
    frSlug: 'clavier-bielorusse',
  },
  mt: {
    code: 'mt',
    name: 'Maltese',
    nativeName: 'Malti',
    direction: 'ltr',
    script: 'Latin',
    speakers: '520 thousand',
    countries: 1,
    enSlug: 'maltese-keyboard',
    frSlug: 'clavier-maltais',
  },
  sq: {
    code: 'sq',
    name: 'Albanian',
    nativeName: 'Shqip',
    direction: 'ltr',
    script: 'Latin',
    speakers: '7.5 million',
    countries: 3,
    enSlug: 'albanian-keyboard',
    frSlug: 'clavier-albanais',
  },
  mk: {
    code: 'mk',
    name: 'Macedonian',
    nativeName: 'Македонски',
    direction: 'ltr',
    script: 'Cyrillic',
    speakers: '2 million',
    countries: 1,
    enSlug: 'macedonian-keyboard',
    frSlug: 'clavier-macedonien',
  },

  // Middle East & North Africa
  ar: {
    code: 'ar',
    name: 'Arabic',
    nativeName: 'العربية',
    direction: 'rtl',
    script: 'Arabic',
    speakers: '420 million',
    countries: 26,
    enSlug: 'arabic-keyboard',
    frSlug: 'clavier-arabe',
  },
  he: {
    code: 'he',
    name: 'Hebrew',
    nativeName: 'עברית',
    direction: 'rtl',
    script: 'Hebrew',
    speakers: '9 million',
    countries: 1,
    enSlug: 'hebrew-keyboard',
    frSlug: 'clavier-hebreu',
  },
  ja: {
    code: 'ja',
    name: 'Japanese',
    nativeName: '日本語',
    direction: 'ltr',
    script: 'Hiragana',
    speakers: '125 million',
    countries: 1,
    enSlug: 'japanese-keyboard',
    frSlug: 'clavier-japonais',
  },
  ko: {
    code: 'ko',
    name: 'Korean',
    nativeName: '한국어',
    direction: 'ltr',
    script: 'Hangul',
    speakers: '77 million',
    countries: 2,
    enSlug: 'korean-keyboard',
    frSlug: 'clavier-coreen',
  },
  am: {
    code: 'am',
    name: 'Amharic',
    nativeName: 'አማርኛ',
    direction: 'ltr',
    script: 'Ethiopic',
    speakers: '32 million',
    countries: 1,
    enSlug: 'amharic-keyboard',
    frSlug: 'clavier-amharique',
  },
  th: {
    code: 'th',
    name: 'Thai',
    nativeName: 'ไทย',
    direction: 'ltr',
    script: 'Thai',
    speakers: '60 million',
    countries: 1,
    enSlug: 'thai-keyboard',
    frSlug: 'clavier-thai',
  },
  hi: {
    code: 'hi',
    name: 'Hindi',
    nativeName: 'हिन्दी',
    direction: 'ltr',
    script: 'Devanagari',
    speakers: '602 million',
    countries: 1,
    enSlug: 'hindi-keyboard',
    frSlug: 'clavier-hindi',
  },
  ur: {
    code: 'ur',
    name: 'Urdu',
    nativeName: 'اردو',
    direction: 'rtl',
    script: 'Arabic',
    speakers: '231 million',
    countries: 2,
    enSlug: 'urdu-keyboard',
    frSlug: 'clavier-ourdou',
  },
  fa: {
    code: 'fa',
    name: 'Persian',
    nativeName: 'فارسی',
    direction: 'rtl',
    script: 'Persian',
    speakers: '110 million',
    countries: 3,
    enSlug: 'persian-keyboard',
    frSlug: 'clavier-persan',
  },
  vi: {
    code: 'vi',
    name: 'Vietnamese',
    nativeName: 'Tiếng Việt',
    direction: 'ltr',
    script: 'Latin',
    speakers: '85 million',
    countries: 1,
    enSlug: 'vietnamese-keyboard',
    frSlug: 'clavier-vietnamien',
  },
  bn: {
    code: 'bn',
    name: 'Bengali',
    nativeName: 'বাংলা',
    direction: 'ltr',
    script: 'Bengali',
    speakers: '272 million',
    countries: 2,
    enSlug: 'bengali-keyboard',
    frSlug: 'clavier-bengali',
  },
  ta: {
    code: 'ta',
    name: 'Tamil',
    nativeName: 'தமிழ்',
    direction: 'ltr',
    script: 'Tamil',
    speakers: '80 million',
    countries: 2,
    enSlug: 'tamil-keyboard',
    frSlug: 'clavier-tamoul',
  },
  ps: {
    code: 'ps',
    name: 'Pashto',
    nativeName: 'پښتو',
    direction: 'rtl',
    script: 'Arabic',
    speakers: '60 million',
    countries: 2,
    enSlug: 'pashto-keyboard',
    frSlug: 'clavier-pachto',
  },
  ti: {
    code: 'ti',
    name: 'Tigrinya',
    nativeName: 'ትግርኛ',
    direction: 'ltr',
    script: 'Ethiopic',
    speakers: '9 million',
    countries: 2,
    enSlug: 'tigrinya-keyboard',
    frSlug: 'clavier-tigrigna',
  },
  hy: {
    code: 'hy',
    name: 'Armenian',
    nativeName: 'Հայերեն',
    direction: 'ltr',
    script: 'Armenian',
    speakers: '6 million',
    countries: 1,
    enSlug: 'armenian-keyboard',
    frSlug: 'clavier-armenien',
  },
  ka: {
    code: 'ka',
    name: 'Georgian',
    nativeName: 'ქართული',
    direction: 'ltr',
    script: 'Georgian',
    speakers: '4 million',
    countries: 1,
    enSlug: 'georgian-keyboard',
    frSlug: 'clavier-georgien',
  },

  // Central Asia
  kk: {
    code: 'kk',
    name: 'Kazakh',
    nativeName: 'Қазақша',
    direction: 'ltr',
    script: 'Cyrillic',
    speakers: '13 million',
    countries: 1,
    enSlug: 'kazakh-keyboard',
    frSlug: 'clavier-kazakh',
  },
  tg: {
    code: 'tg',
    name: 'Tajik',
    nativeName: 'Тоҷикӣ',
    direction: 'ltr',
    script: 'Cyrillic',
    speakers: '8 million',
    countries: 1,
    enSlug: 'tajik-keyboard',
    frSlug: 'clavier-tadjik',
  },
  uz: {
    code: 'uz',
    name: 'Uzbek',
    nativeName: 'Ўзбекча',
    direction: 'ltr',
    script: 'Cyrillic',
    speakers: '35 million',
    countries: 1,
    enSlug: 'uzbek-keyboard',
    frSlug: 'clavier-ouzbek',
  },
  ky: {
    code: 'ky',
    name: 'Kyrgyz',
    nativeName: 'Кыргызча',
    direction: 'ltr',
    script: 'Cyrillic',
    speakers: '4 million',
    countries: 1,
    enSlug: 'kyrgyz-keyboard',
    frSlug: 'clavier-kirghize',
  },
  tk: {
    code: 'tk',
    name: 'Turkmen',
    nativeName: 'Türkmençe',
    direction: 'ltr',
    script: 'Latin',
    speakers: '7 million',
    countries: 1,
    enSlug: 'turkmen-keyboard',
    frSlug: 'clavier-turkmene',
  },
  mn: {
    code: 'mn',
    name: 'Mongolian',
    nativeName: 'Монгол',
    direction: 'ltr',
    script: 'Cyrillic',
    speakers: '6 million',
    countries: 1,
    enSlug: 'mongolian-keyboard',
    frSlug: 'clavier-mongol',
  },

  // Middle East (Kurdish & Berber)
  ckb: {
    code: 'ckb',
    name: 'Kurdish (Sorani)',
    nativeName: 'کوردی',
    direction: 'rtl',
    script: 'Arabic',
    speakers: '7 million',
    countries: 2,
    enSlug: 'kurdish-sorani-keyboard',
    frSlug: 'clavier-kurde-sorani',
  },
  ku: {
    code: 'ku',
    name: 'Kurdish (Kurmanji)',
    nativeName: 'Kurmancî',
    direction: 'ltr',
    script: 'Latin',
    speakers: '15 million',
    countries: 4,
    enSlug: 'kurdish-kurmanji-keyboard',
    frSlug: 'clavier-kurde-kurmandji',
  },
  zgh: {
    code: 'zgh',
    name: 'Tifinagh (Berber)',
    nativeName: 'ⵜⴰⵎⴰⵣⵉⵖⵜ',
    direction: 'ltr',
    script: 'Tifinagh',
    speakers: '25 million',
    countries: 5,
    enSlug: 'tifinagh-keyboard',
    frSlug: 'clavier-tifinagh',
  },

  // South Asia (New)
  pa: {
    code: 'pa',
    name: 'Punjabi',
    nativeName: 'ਪੰਜਾਬੀ',
    direction: 'ltr',
    script: 'Gurmukhi',
    speakers: '125 million',
    countries: 2,
    enSlug: 'punjabi-keyboard',
    frSlug: 'clavier-pendjabi',
  },
  gu: {
    code: 'gu',
    name: 'Gujarati',
    nativeName: 'ગુજરાતી',
    direction: 'ltr',
    script: 'Gujarati',
    speakers: '55 million',
    countries: 1,
    enSlug: 'gujarati-keyboard',
    frSlug: 'clavier-gujarati',
  },
  te: {
    code: 'te',
    name: 'Telugu',
    nativeName: 'తెలుగు',
    direction: 'ltr',
    script: 'Telugu',
    speakers: '83 million',
    countries: 1,
    enSlug: 'telugu-keyboard',
    frSlug: 'clavier-telugu',
  },
  kn: {
    code: 'kn',
    name: 'Kannada',
    nativeName: 'ಕನ್ನಡ',
    direction: 'ltr',
    script: 'Kannada',
    speakers: '45 million',
    countries: 1,
    enSlug: 'kannada-keyboard',
    frSlug: 'clavier-kannada',
  },
  ml: {
    code: 'ml',
    name: 'Malayalam',
    nativeName: 'മലയാളം',
    direction: 'ltr',
    script: 'Malayalam',
    speakers: '38 million',
    countries: 1,
    enSlug: 'malayalam-keyboard',
    frSlug: 'clavier-malayalam',
  },
  or: {
    code: 'or',
    name: 'Odia',
    nativeName: 'ଓଡ଼ିଆ',
    direction: 'ltr',
    script: 'Odia',
    speakers: '35 million',
    countries: 1,
    enSlug: 'odia-keyboard',
    frSlug: 'clavier-odia',
  },
  km: {
    code: 'km',
    name: 'Khmer',
    nativeName: 'ខ្មែរ',
    direction: 'ltr',
    script: 'Khmer',
    speakers: '16 million',
    countries: 1,
    enSlug: 'khmer-keyboard',
    frSlug: 'clavier-khmer',
  },
  my: {
    code: 'my',
    name: 'Burmese',
    nativeName: 'မြန်မာ',
    direction: 'ltr',
    script: 'Myanmar',
    speakers: '33 million',
    countries: 1,
    enSlug: 'burmese-keyboard',
    frSlug: 'clavier-birman',
  },
  id: {
    code: 'id',
    name: 'Indonesian',
    nativeName: 'Bahasa Indonesia',
    direction: 'ltr',
    script: 'Latin',
    speakers: '199 million',
    countries: 1,
    enSlug: 'indonesian-keyboard',
    frSlug: 'clavier-indonesien',
  },
  ms: {
    code: 'ms',
    name: 'Malay',
    nativeName: 'Bahasa Melayu',
    direction: 'ltr',
    script: 'Latin',
    speakers: '290 million',
    countries: 4,
    enSlug: 'malay-keyboard',
    frSlug: 'clavier-malais',
  },
  tl: {
    code: 'tl',
    name: 'Tagalog',
    nativeName: 'Tagalog',
    direction: 'ltr',
    script: 'Latin',
    speakers: '85 million',
    countries: 1,
    enSlug: 'tagalog-keyboard',
    frSlug: 'clavier-tagalog',
  },
  si: {
    code: 'si',
    name: 'Sinhala',
    nativeName: 'සිංහල',
    direction: 'ltr',
    script: 'Sinhala',
    speakers: '17 million',
    countries: 1,
    enSlug: 'sinhala-keyboard',
    frSlug: 'clavier-singhalais',
  },
  dv: {
    code: 'dv',
    name: 'Divehi',
    nativeName: 'ދިވެހި',
    direction: 'rtl',
    script: 'Thaana',
    speakers: '350 thousand',
    countries: 1,
    enSlug: 'divehi-keyboard',
    frSlug: 'clavier-divehi',
  },
  ne: {
    code: 'ne',
    name: 'Nepali',
    nativeName: 'नेपाली',
    direction: 'ltr',
    script: 'Devanagari',
    speakers: '32 million',
    countries: 2,
    enSlug: 'nepali-keyboard',
    frSlug: 'clavier-nepalais',
  },
  bo: {
    code: 'bo',
    name: 'Tibetan',
    nativeName: 'བོད་སྐད་',
    direction: 'ltr',
    script: 'Tibetan',
    speakers: '6 million',
    countries: 2,
    enSlug: 'tibetan-keyboard',
    frSlug: 'clavier-tibetain',
  },

  // Africa (continued)
  ha: {
    code: 'ha',
    name: 'Hausa',
    nativeName: 'Hausa',
    direction: 'ltr',
    script: 'Latin',
    speakers: '77 million',
    countries: 2,
    enSlug: 'hausa-keyboard',
    frSlug: 'clavier-haoussa',
  },
  sw: {
    code: 'sw',
    name: 'Swahili',
    nativeName: 'Kiswahili',
    direction: 'ltr',
    script: 'Latin',
    speakers: '100 million',
    countries: 4,
    enSlug: 'swahili-keyboard',
    frSlug: 'clavier-swahili',
  },
  yo: {
    code: 'yo',
    name: 'Yoruba',
    nativeName: 'Yorùbá',
    direction: 'ltr',
    script: 'Latin',
    speakers: '47 million',
    countries: 2,
    enSlug: 'yoruba-keyboard',
    frSlug: 'clavier-yoruba',
  },
  ig: {
    code: 'ig',
    name: 'Igbo',
    nativeName: 'Igbo',
    direction: 'ltr',
    script: 'Latin',
    speakers: '45 million',
    countries: 1,
    enSlug: 'igbo-keyboard',
    frSlug: 'clavier-igbo',
  },
  zu: {
    code: 'zu',
    name: 'Zulu',
    nativeName: 'isiZulu',
    direction: 'ltr',
    script: 'Latin',
    speakers: '27 million',
    countries: 1,
    enSlug: 'zulu-keyboard',
    frSlug: 'clavier-zoulou',
  },
  xh: {
    code: 'xh',
    name: 'Xhosa',
    nativeName: 'isiXhosa',
    direction: 'ltr',
    script: 'Latin',
    speakers: '19 million',
    countries: 1,
    enSlug: 'xhosa-keyboard',
    frSlug: 'clavier-xhosa',
  },
  af: {
    code: 'af',
    name: 'Afrikaans',
    nativeName: 'Afrikaans',
    direction: 'ltr',
    script: 'Latin',
    speakers: '7 million',
    countries: 2,
    enSlug: 'afrikaans-keyboard',
    frSlug: 'clavier-afrikaans',
  },

  // Oceania
  mi: {
    code: 'mi',
    name: 'Maori',
    nativeName: 'Māori',
    direction: 'ltr',
    script: 'Latin',
    speakers: '185 thousand',
    countries: 1,
    enSlug: 'maori-keyboard',
    frSlug: 'clavier-maori',
  },
  fj: {
    code: 'fj',
    name: 'Fijian',
    nativeName: 'Vosa Vakaviti',
    direction: 'ltr',
    script: 'Latin',
    speakers: '350 thousand',
    countries: 1,
    enSlug: 'fijian-keyboard',
    frSlug: 'clavier-fidjien',
  },
  sm: {
    code: 'sm',
    name: 'Samoan',
    nativeName: 'Gagana Samoa',
    direction: 'ltr',
    script: 'Latin',
    speakers: '510 thousand',
    countries: 2,
    enSlug: 'samoan-keyboard',
    frSlug: 'clavier-samoan',
  },

  // Regional Variants - Americas & Europe
  'en-ca': {
    code: 'en-ca',
    name: 'English (Canada)',
    nativeName: 'English (Canada)',
    direction: 'ltr',
    script: 'Latin',
    speakers: '26 million',
    countries: 1,
    enSlug: 'english-canada-keyboard',
    frSlug: 'clavier-anglais-canada',
  },
  'fr-ca': {
    code: 'fr-ca',
    name: 'French (Canada)',
    nativeName: 'Français (Canada)',
    direction: 'ltr',
    script: 'Latin',
    speakers: '7 million',
    countries: 1,
    enSlug: 'french-canada-keyboard',
    frSlug: 'clavier-francais-canada',
  },
  'es-mx': {
    code: 'es-mx',
    name: 'Spanish (Mexico)',
    nativeName: 'Español (México)',
    direction: 'ltr',
    script: 'Latin',
    speakers: '130 million',
    countries: 1,
    enSlug: 'spanish-mexico-keyboard',
    frSlug: 'clavier-espagnol-mexique',
  },
  'pt-br': {
    code: 'pt-br',
    name: 'Portuguese (Brazil)',
    nativeName: 'Português (Brasil)',
    direction: 'ltr',
    script: 'Latin',
    speakers: '215 million',
    countries: 1,
    enSlug: 'portuguese-brazil-keyboard',
    frSlug: 'clavier-portugais-bresil',
  },
  'de-ch': {
    code: 'de-ch',
    name: 'German (Switzerland)',
    nativeName: 'Deutsch (Schweiz)',
    direction: 'ltr',
    script: 'Latin',
    speakers: '5 million',
    countries: 1,
    enSlug: 'german-switzerland-keyboard',
    frSlug: 'clavier-allemand-suisse',
  },
  'de-at': {
    code: 'de-at',
    name: 'German (Austria)',
    nativeName: 'Deutsch (Österreich)',
    direction: 'ltr',
    script: 'Latin',
    speakers: '9 million',
    countries: 1,
    enSlug: 'german-austria-keyboard',
    frSlug: 'clavier-allemand-autriche',
  },
  'fr-be': {
    code: 'fr-be',
    name: 'French (Belgium)',
    nativeName: 'Français (Belgique)',
    direction: 'ltr',
    script: 'Latin',
    speakers: '4 million',
    countries: 1,
    enSlug: 'french-belgium-keyboard',
    frSlug: 'clavier-francais-belgique',
  },
  'fr-ch': {
    code: 'fr-ch',
    name: 'French (Switzerland)',
    nativeName: 'Français (Suisse)',
    direction: 'ltr',
    script: 'Latin',
    speakers: '2 million',
    countries: 1,
    enSlug: 'french-switzerland-keyboard',
    frSlug: 'clavier-francais-suisse',
  },
  'nl-be': {
    code: 'nl-be',
    name: 'Dutch (Belgium)',
    nativeName: 'Nederlands (België)',
    direction: 'ltr',
    script: 'Latin',
    speakers: '6 million',
    countries: 1,
    enSlug: 'dutch-belgium-keyboard',
    frSlug: 'clavier-neerlandais-belgique',
  },
  'es-es': {
    code: 'es-es',
    name: 'Spanish (Spain)',
    nativeName: 'Español (España)',
    direction: 'ltr',
    script: 'Latin',
    speakers: '47 million',
    countries: 1,
    enSlug: 'spanish-spain-keyboard',
    frSlug: 'clavier-espagnol-espagne',
  },
  'es-ar': {
    code: 'es-ar',
    name: 'Spanish (Argentina)',
    nativeName: 'Español (Argentina)',
    direction: 'ltr',
    script: 'Latin',
    speakers: '45 million',
    countries: 1,
    enSlug: 'spanish-argentina-keyboard',
    frSlug: 'clavier-espagnol-argentine',
  },
  'es-co': {
    code: 'es-co',
    name: 'Spanish (Colombia)',
    nativeName: 'Español (Colombia)',
    direction: 'ltr',
    script: 'Latin',
    speakers: '51 million',
    countries: 1,
    enSlug: 'spanish-colombia-keyboard',
    frSlug: 'clavier-espagnol-colombie',
  },
  'es-pe': {
    code: 'es-pe',
    name: 'Spanish (Peru)',
    nativeName: 'Español (Perú)',
    direction: 'ltr',
    script: 'Latin',
    speakers: '33 million',
    countries: 1,
    enSlug: 'spanish-peru-keyboard',
    frSlug: 'clavier-espagnol-perou',
  },
  'es-ve': {
    code: 'es-ve',
    name: 'Spanish (Venezuela)',
    nativeName: 'Español (Venezuela)',
    direction: 'ltr',
    script: 'Latin',
    speakers: '32 million',
    countries: 1,
    enSlug: 'spanish-venezuela-keyboard',
    frSlug: 'clavier-espagnol-venezuela',
  },
  'es-cl': {
    code: 'es-cl',
    name: 'Spanish (Chile)',
    nativeName: 'Español (Chile)',
    direction: 'ltr',
    script: 'Latin',
    speakers: '19 million',
    countries: 1,
    enSlug: 'spanish-chile-keyboard',
    frSlug: 'clavier-espagnol-chili',
  },
  'ar-sa': {
    code: 'ar-sa',
    name: 'Arabic (Saudi Arabia)',
    nativeName: 'العربية (السعودية)',
    direction: 'rtl',
    script: 'Arabic',
    speakers: '35 million',
    countries: 1,
    enSlug: 'arabic-saudi-keyboard',
    frSlug: 'clavier-arabe-arabie',
  },
  'ar-eg': {
    code: 'ar-eg',
    name: 'Arabic (Egypt)',
    nativeName: 'العربية (مصر)',
    direction: 'rtl',
    script: 'Arabic',
    speakers: '103 million',
    countries: 1,
    enSlug: 'arabic-egypt-keyboard',
    frSlug: 'clavier-arabe-egypte',
  },
  'ar-ae': {
    code: 'ar-ae',
    name: 'Arabic (UAE)',
    nativeName: 'العربية (الإمارات)',
    direction: 'rtl',
    script: 'Arabic',
    speakers: '10 million',
    countries: 1,
    enSlug: 'arabic-uae-keyboard',
    frSlug: 'clavier-arabe-emirats',
  },
  'ar-ma': {
    code: 'ar-ma',
    name: 'Arabic (Morocco)',
    nativeName: 'العربية (المغرب)',
    direction: 'rtl',
    script: 'Arabic',
    speakers: '37 million',
    countries: 1,
    enSlug: 'arabic-morocco-keyboard',
    frSlug: 'clavier-arabe-maroc',
  },
  'ar-dz': {
    code: 'ar-dz',
    name: 'Arabic (Algeria)',
    nativeName: 'العربية (الجزائر)',
    direction: 'rtl',
    script: 'Arabic',
    speakers: '44 million',
    countries: 1,
    enSlug: 'arabic-algeria-keyboard',
    frSlug: 'clavier-arabe-algerie',
  },
  'bn-bd': {
    code: 'bn-bd',
    name: 'Bengali (Bangladesh)',
    nativeName: 'বাংলা (বাংলাদেশ)',
    direction: 'ltr',
    script: 'Bengali',
    speakers: '165 million',
    countries: 1,
    enSlug: 'bengali-bangladesh-keyboard',
    frSlug: 'clavier-bengali-bangladesh',
  },
  'zh-tw': {
    code: 'zh-tw',
    name: 'Chinese (Taiwan)',
    nativeName: '中文 (台灣)',
    direction: 'ltr',
    script: 'Traditional Chinese',
    speakers: '24 million',
    countries: 1,
    enSlug: 'chinese-taiwan-keyboard',
    frSlug: 'clavier-chinois-taiwan',
  },
  iu: {
    code: 'iu',
    name: 'Inuktitut',
    nativeName: 'ᐃᓄᒃᑎᑐᑦ',
    direction: 'ltr',
    script: 'Canadian Aboriginal Syllabics',
    speakers: '39 thousand',
    countries: 1,
    enSlug: 'inuktitut-keyboard',
    frSlug: 'clavier-inuktitut',
  },
};

// Get language info by code
export function getLanguageInfo(code: LanguageCode): LanguageInfo | undefined {
  return languageInfo[code];
}

// Get all language infos as array
export function getAllLanguageInfos(): LanguageInfo[] {
  return Object.values(languageInfo).filter((info): info is LanguageInfo => info !== undefined);
}

// Re-export individual layouts
export {
  // Western & Northern Europe
  englishLayout,
  englishUkLayout,
  germanLayout,
  frenchLayout,
  spanishLayout,
  italianLayout,
  portugueseLayout,
  dutchLayout,
  swedishLayout,
  danishLayout,
  norwegianLayout,
  finnishLayout,
  polishLayout,
  irishLayout,
  welshLayout,
  icelandicLayout,
  estonianLayout,
  latvianLayout,
  lithuanianLayout,
  // Southern & Eastern Europe
  greekLayout,
  turkishLayout,
  russianLayout,
  ukrainianLayout,
  czechLayout,
  hungarianLayout,
  romanianLayout,
  croatianLayout,
  slovakLayout,
  slovenianLayout,
  serbianLayout,
  bosnianLayout,
  bulgarianLayout,
  belarusianLayout,
  malteseLayout,
  albanianLayout,
  macedonianLayout,
  // Middle East & North Africa
  arabicLayout,
  hebrewLayout,
  persianLayout,
  urduLayout,
  pashtoLayout,
  // South Asia
  hindiLayout,
  bengaliLayout,
  tamilLayout,
  // East & Southeast Asia
  japaneseLayout,
  koreanLayout,
  thaiLayout,
  vietnameseLayout,
  // Africa
  amharicLayout,
  tigrinyaLayout,
  // Caucasus
  armenianLayout,
  georgianLayout,
};
