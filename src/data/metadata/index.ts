/**
 * SEO Metadata for all keyboard pages
 * Bilingual support: English and French
 */

import type { LanguageCode } from '@/types/keyboard';

interface PageMetadata {
  title: string;
  description: string;
  keywords: string[];
  h1: string;
  intro: string;
}

type MetadataByLanguage = {
  en: PageMetadata;
  fr: PageMetadata;
};

export const pageMetadata: Partial<Record<LanguageCode, MetadataByLanguage>> = {
  en: {
    en: {
      title: 'English Keyboard Online - Type English Free | Type-Native',
      description: 'Free online English keyboard. Type in English instantly. No download required. Works on all devices.',
      keywords: ['english keyboard', 'type english online', 'english typing'],
      h1: 'English Keyboard Online - Type in English',
      intro: 'Type English text instantly with our free online keyboard. No installation needed - works directly in your browser.',
    },
    fr: {
      title: 'Clavier Anglais en Ligne - Écrire en Anglais Gratuit | Type-Native',
      description: 'Clavier anglais gratuit en ligne. Tapez en anglais instantanément. Aucun téléchargement requis.',
      keywords: ['clavier anglais', 'taper en anglais', 'clavier anglais en ligne'],
      h1: 'Clavier Anglais en Ligne - Tapez en Anglais',
      intro: 'Tapez du texte anglais instantanément avec notre clavier en ligne gratuit. Fonctionne sur tous les appareils.',
    },
  },
  fr: {
    en: {
      title: 'French Keyboard Online - Type French Free | Type-Native',
      description: 'Free online French keyboard. Type in French (Français) with accents instantly. No download required.',
      keywords: ['french keyboard', 'type french online', 'french typing', 'français'],
      h1: 'French Keyboard Online - Type in Français',
      intro: 'Type French text with accents instantly with our free online keyboard.',
    },
    fr: {
      title: 'Clavier Français en Ligne - Écrire en Français Gratuit | Type-Native',
      description: 'Clavier français gratuit en ligne. Tapez en français avec accents instantanément.',
      keywords: ['clavier français', 'taper en français', 'clavier français en ligne'],
      h1: 'Clavier Français en Ligne - Tapez en Français',
      intro: 'Tapez du texte français avec accents instantanément avec notre clavier en ligne gratuit.',
    },
  },
  ar: {
    en: {
      title: 'Arabic Keyboard Online - Type Arabic Letters Free | Type-Native',
      description:
        'Free online Arabic keyboard. Type in Arabic (العربية) instantly in your browser. No download required. Works on all devices.',
      keywords: ['arabic keyboard', 'arabic typing', 'clavier arabe', 'type arabic online'],
      h1: 'Arabic Keyboard Online - Type in العربية',
      intro:
        'Type Arabic text instantly with our free online keyboard. No installation needed - works directly in your browser on any device.',
    },
    fr: {
      title: 'Clavier Arabe en Ligne - Écrire en Arabe Gratuit | Type-Native',
      description:
        'Clavier arabe gratuit en ligne. Tapez en arabe (العربية) instantanément. Aucun téléchargement requis.',
      keywords: ['clavier arabe', 'clavier arabe en ligne', 'écrire en arabe', 'taper arabe'],
      h1: 'Clavier Arabe en Ligne - Tapez en العربية',
      intro:
        'Tapez du texte arabe instantanément avec notre clavier en ligne gratuit. Fonctionne sur tous les appareils.',
    },
  },
  ru: {
    en: {
      title: 'Russian Keyboard Online - Type Cyrillic Letters Free | Type-Native',
      description:
        'Free online Russian keyboard. Type in Russian (Русский) instantly. No download required. Works on all devices.',
      keywords: ['russian keyboard', 'cyrillic keyboard', 'type russian online', 'russian typing'],
      h1: 'Russian Keyboard Online - Type in Русский',
      intro:
        'Type Russian text instantly with our free online Cyrillic keyboard. Works directly in your browser.',
    },
    fr: {
      title: 'Clavier Russe en Ligne - Écrire en Russe Gratuit | Type-Native',
      description:
        'Clavier russe gratuit en ligne. Tapez en russe (Русский) instantanément. Aucun téléchargement.',
      keywords: ['clavier russe', 'clavier cyrillique', 'taper en russe'],
      h1: 'Clavier Russe en Ligne - Tapez en Русский',
      intro:
        'Tapez du texte russe instantanément avec notre clavier cyrillique en ligne gratuit.',
    },
  },
  he: {
    en: {
      title: 'Hebrew Keyboard Online - Type Hebrew Letters Free | Type-Native',
      description:
        'Free online Hebrew keyboard. Type in Hebrew (עברית) instantly. No download required. Full RTL support.',
      keywords: ['hebrew keyboard', 'hebrew typing', 'type hebrew online', 'עברית keyboard'],
      h1: 'Hebrew Keyboard Online - Type in עברית',
      intro:
        'Type Hebrew text instantly with full right-to-left support. Free online keyboard for your browser.',
    },
    fr: {
      title: 'Clavier Hébreu en Ligne - Écrire en Hébreu Gratuit | Type-Native',
      description:
        'Clavier hébreu gratuit en ligne. Tapez en hébreu (עברית) instantanément avec support RTL.',
      keywords: ['clavier hébreu', 'clavier hebreu', 'taper en hébreu'],
      h1: 'Clavier Hébreu en Ligne - Tapez en עברית',
      intro: 'Tapez du texte hébreu instantanément avec support droite-à-gauche complet.',
    },
  },
  ja: {
    en: {
      title: 'Japanese Keyboard Online - Type Hiragana Free | Type-Native',
      description:
        'Free online Japanese keyboard. Type Hiragana (ひらがな) instantly. No download required.',
      keywords: ['japanese keyboard', 'hiragana keyboard', 'type japanese online', 'にほんご'],
      h1: 'Japanese Keyboard Online - Type in 日本語',
      intro:
        'Type Japanese Hiragana text instantly with our free online keyboard. Perfect for learners.',
    },
    fr: {
      title: 'Clavier Japonais en Ligne - Écrire en Hiragana Gratuit | Type-Native',
      description:
        'Clavier japonais gratuit en ligne. Tapez en hiragana (ひらがな) instantanément.',
      keywords: ['clavier japonais', 'clavier hiragana', 'taper en japonais'],
      h1: 'Clavier Japonais en Ligne - Tapez en 日本語',
      intro: 'Tapez du texte japonais Hiragana instantanément avec notre clavier en ligne.',
    },
  },
  ko: {
    en: {
      title: 'Korean Keyboard Online - Type Hangul Free | Type-Native',
      description:
        'Free online Korean keyboard. Type Hangul (한글) instantly. No download required.',
      keywords: ['korean keyboard', 'hangul keyboard', 'type korean online', '한국어'],
      h1: 'Korean Keyboard Online - Type in 한국어',
      intro: 'Type Korean Hangul text instantly with our free online keyboard.',
    },
    fr: {
      title: 'Clavier Coréen en Ligne - Écrire en Hangul Gratuit | Type-Native',
      description: 'Clavier coréen gratuit en ligne. Tapez en hangul (한글) instantanément.',
      keywords: ['clavier coréen', 'clavier hangul', 'taper en coréen'],
      h1: 'Clavier Coréen en Ligne - Tapez en 한국어',
      intro: 'Tapez du texte coréen Hangul instantanément avec notre clavier en ligne.',
    },
  },
  am: {
    en: {
      title: 'Amharic Keyboard Online - Type Ethiopic Free | Type-Native',
      description:
        'Free online Amharic keyboard. Type in Amharic (አማርኛ) with Ethiopic script instantly.',
      keywords: ['amharic keyboard', 'ethiopic keyboard', 'type amharic online', 'አማርኛ'],
      h1: 'Amharic Keyboard Online - Type in አማርኛ',
      intro: 'Type Amharic text with Ethiopic script instantly. Free online keyboard.',
    },
    fr: {
      title: 'Clavier Amharique en Ligne - Écrire en Éthiopique | Type-Native',
      description: 'Clavier amharique gratuit en ligne. Tapez en amharique (አማርኛ) instantanément.',
      keywords: ['clavier amharique', 'clavier éthiopique', 'taper en amharique'],
      h1: 'Clavier Amharique en Ligne - Tapez en አማርኛ',
      intro: "Tapez du texte amharique avec l'écriture éthiopique instantanément.",
    },
  },
  th: {
    en: {
      title: 'Thai Keyboard Online - Type Thai Script Free | Type-Native',
      description: 'Free online Thai keyboard. Type in Thai (ไทย) script instantly.',
      keywords: ['thai keyboard', 'type thai online', 'thai typing', 'ไทย keyboard'],
      h1: 'Thai Keyboard Online - Type in ไทย',
      intro: 'Type Thai text instantly with our free online keyboard.',
    },
    fr: {
      title: 'Clavier Thai en Ligne - Écrire en Thaï Gratuit | Type-Native',
      description: 'Clavier thaï gratuit en ligne. Tapez en thaï (ไทย) instantanément.',
      keywords: ['clavier thai', 'clavier thaïlandais', 'taper en thai'],
      h1: 'Clavier Thai en Ligne - Tapez en ไทย',
      intro: 'Tapez du texte thaï instantanément avec notre clavier en ligne.',
    },
  },
  el: {
    en: {
      title: 'Greek Keyboard Online - Type Greek Letters Free | Type-Native',
      description:
        'Free online Greek keyboard. Type in Greek (Ελληνικά) instantly. Perfect for students.',
      keywords: ['greek keyboard', 'greek letters', 'type greek online', 'Ελληνικά'],
      h1: 'Greek Keyboard Online - Type in Ελληνικά',
      intro: 'Type Greek text instantly with our free online keyboard.',
    },
    fr: {
      title: 'Clavier Grec en Ligne - Écrire en Grec Gratuit | Type-Native',
      description: 'Clavier grec gratuit en ligne. Tapez en grec (Ελληνικά) instantanément.',
      keywords: ['clavier grec', 'lettres grecques', 'taper en grec'],
      h1: 'Clavier Grec en Ligne - Tapez en Ελληνικά',
      intro: 'Tapez du texte grec instantanément avec notre clavier en ligne.',
    },
  },
  hi: {
    en: {
      title: 'Hindi Keyboard Online - Type Devanagari Free | Type-Native',
      description:
        'Free online Hindi keyboard. Type in Hindi (हिन्दी) with Devanagari script instantly.',
      keywords: ['hindi keyboard', 'devanagari keyboard', 'type hindi online', 'हिन्दी'],
      h1: 'Hindi Keyboard Online - Type in हिन्दी',
      intro: 'Type Hindi text with Devanagari script instantly. Free online keyboard.',
    },
    fr: {
      title: 'Clavier Hindi en Ligne - Écrire en Devanagari | Type-Native',
      description: 'Clavier hindi gratuit en ligne. Tapez en hindi (हिन्दी) instantanément.',
      keywords: ['clavier hindi', 'clavier devanagari', 'taper en hindi'],
      h1: 'Clavier Hindi en Ligne - Tapez en हिन्दी',
      intro: 'Tapez du texte hindi avec le script Devanagari instantanément.',
    },
  },
  ur: {
    en: {
      title: 'Urdu Keyboard Online - Type Urdu Script Free | Type-Native',
      description: 'Free online Urdu keyboard. Type in Urdu (اردو) with full RTL support.',
      keywords: ['urdu keyboard', 'type urdu online', 'urdu typing', 'اردو'],
      h1: 'Urdu Keyboard Online - Type in اردو',
      intro: 'Type Urdu text instantly with full right-to-left support.',
    },
    fr: {
      title: 'Clavier Ourdou en Ligne - Écrire en Ourdou Gratuit | Type-Native',
      description: 'Clavier ourdou gratuit en ligne. Tapez en ourdou (اردو) avec support RTL.',
      keywords: ['clavier ourdou', 'clavier urdu', 'taper en ourdou'],
      h1: 'Clavier Ourdou en Ligne - Tapez en اردو',
      intro: 'Tapez du texte ourdou instantanément avec support droite-à-gauche.',
    },
  },
  fa: {
    en: {
      title: 'Persian Keyboard Online - Type Farsi Free | Type-Native',
      description: 'Free online Persian/Farsi keyboard. Type in Persian (فارسی) instantly.',
      keywords: ['persian keyboard', 'farsi keyboard', 'type persian online', 'فارسی'],
      h1: 'Persian Keyboard Online - Type in فارسی',
      intro: 'Type Persian (Farsi) text instantly with full RTL support.',
    },
    fr: {
      title: 'Clavier Persan en Ligne - Écrire en Farsi Gratuit | Type-Native',
      description: 'Clavier persan gratuit en ligne. Tapez en persan (فارسی) instantanément.',
      keywords: ['clavier persan', 'clavier farsi', 'taper en persan'],
      h1: 'Clavier Persan en Ligne - Tapez en فارسی',
      intro: 'Tapez du texte persan (farsi) instantanément.',
    },
  },
  uk: {
    en: {
      title: 'Ukrainian Keyboard Online - Type Ukrainian Free | Type-Native',
      description: 'Free online Ukrainian keyboard. Type in Ukrainian (Українська) instantly.',
      keywords: ['ukrainian keyboard', 'type ukrainian online', 'cyrillic keyboard', 'Українська'],
      h1: 'Ukrainian Keyboard Online - Type in Українська',
      intro: 'Type Ukrainian text instantly with our free online Cyrillic keyboard.',
    },
    fr: {
      title: 'Clavier Ukrainien en Ligne - Écrire en Ukrainien | Type-Native',
      description: 'Clavier ukrainien gratuit en ligne. Tapez en ukrainien (Українська).',
      keywords: ['clavier ukrainien', 'clavier cyrillique', 'taper en ukrainien'],
      h1: 'Clavier Ukrainien en Ligne - Tapez en Українська',
      intro: 'Tapez du texte ukrainien instantanément avec notre clavier cyrillique.',
    },
  },
  tr: {
    en: {
      title: 'Turkish Keyboard Online - Type Turkish Free | Type-Native',
      description:
        'Free online Turkish keyboard. Type in Turkish (Türkçe) with special characters.',
      keywords: ['turkish keyboard', 'type turkish online', 'türkçe keyboard'],
      h1: 'Turkish Keyboard Online - Type in Türkçe',
      intro: 'Type Turkish text with special characters (ğ, ı, ö, ş, ü, ç) instantly.',
    },
    fr: {
      title: 'Clavier Turc en Ligne - Écrire en Turc Gratuit | Type-Native',
      description: 'Clavier turc gratuit en ligne. Tapez en turc (Türkçe) instantanément.',
      keywords: ['clavier turc', 'taper en turc', 'caractères turcs'],
      h1: 'Clavier Turc en Ligne - Tapez en Türkçe',
      intro: 'Tapez du texte turc avec les caractères spéciaux instantanément.',
    },
  },
  vi: {
    en: {
      title: 'Vietnamese Keyboard Online - Type Vietnamese Free | Type-Native',
      description:
        'Free online Vietnamese keyboard. Type in Vietnamese (Tiếng Việt) with diacritics.',
      keywords: ['vietnamese keyboard', 'type vietnamese online', 'tieng viet keyboard'],
      h1: 'Vietnamese Keyboard Online - Type in Tiếng Việt',
      intro: 'Type Vietnamese text with tone marks and diacritics instantly.',
    },
    fr: {
      title: 'Clavier Vietnamien en Ligne - Écrire en Vietnamien | Type-Native',
      description: 'Clavier vietnamien gratuit en ligne. Tapez en vietnamien (Tiếng Việt).',
      keywords: ['clavier vietnamien', 'taper en vietnamien'],
      h1: 'Clavier Vietnamien en Ligne - Tapez en Tiếng Việt',
      intro: 'Tapez du texte vietnamien avec les signes diacritiques instantanément.',
    },
  },
  bn: {
    en: {
      title: 'Bengali Keyboard Online - Type Bangla Free | Type-Native',
      description: 'Free online Bengali keyboard. Type in Bengali (বাংলা) instantly.',
      keywords: ['bengali keyboard', 'bangla keyboard', 'type bengali online', 'বাংলা'],
      h1: 'Bengali Keyboard Online - Type in বাংলা',
      intro: 'Type Bengali (Bangla) text instantly with our free online keyboard.',
    },
    fr: {
      title: 'Clavier Bengali en Ligne - Écrire en Bangla Gratuit | Type-Native',
      description: 'Clavier bengali gratuit en ligne. Tapez en bengali (বাংলা) instantanément.',
      keywords: ['clavier bengali', 'clavier bangla', 'taper en bengali'],
      h1: 'Clavier Bengali en Ligne - Tapez en বাংলা',
      intro: 'Tapez du texte bengali instantanément avec notre clavier en ligne.',
    },
  },
  ta: {
    en: {
      title: 'Tamil Keyboard Online - Type Tamil Script Free | Type-Native',
      description: 'Free online Tamil keyboard. Type in Tamil (தமிழ்) instantly.',
      keywords: ['tamil keyboard', 'type tamil online', 'tamil typing', 'தமிழ்'],
      h1: 'Tamil Keyboard Online - Type in தமிழ்',
      intro: 'Type Tamil text instantly with our free online keyboard.',
    },
    fr: {
      title: 'Clavier Tamoul en Ligne - Écrire en Tamoul Gratuit | Type-Native',
      description: 'Clavier tamoul gratuit en ligne. Tapez en tamoul (தமிழ்) instantanément.',
      keywords: ['clavier tamoul', 'clavier tamil', 'taper en tamoul'],
      h1: 'Clavier Tamoul en Ligne - Tapez en தமிழ்',
      intro: 'Tapez du texte tamoul instantanément avec notre clavier en ligne.',
    },
  },
  ps: {
    en: {
      title: 'Pashto Keyboard Online - Type Pashto Free | Type-Native',
      description: 'Free online Pashto keyboard. Type in Pashto (پښتو) instantly.',
      keywords: ['pashto keyboard', 'type pashto online', 'پښتو keyboard'],
      h1: 'Pashto Keyboard Online - Type in پښتو',
      intro: 'Type Pashto text instantly with full RTL support.',
    },
    fr: {
      title: 'Clavier Pachto en Ligne - Écrire en Pachto Gratuit | Type-Native',
      description: 'Clavier pachto gratuit en ligne. Tapez en pachto (پښتو) instantanément.',
      keywords: ['clavier pachto', 'clavier pashto', 'taper en pachto'],
      h1: 'Clavier Pachto en Ligne - Tapez en پښتو',
      intro: 'Tapez du texte pachto instantanément avec support droite-à-gauche.',
    },
  },
  ti: {
    en: {
      title: 'Tigrinya Keyboard Online - Type Tigrinya Free | Type-Native',
      description: 'Free online Tigrinya keyboard. Type in Tigrinya (ትግርኛ) with Ethiopic script.',
      keywords: ['tigrinya keyboard', 'type tigrinya online', 'ethiopic keyboard', 'ትግርኛ'],
      h1: 'Tigrinya Keyboard Online - Type in ትግርኛ',
      intro: 'Type Tigrinya text with Ethiopic script instantly.',
    },
    fr: {
      title: 'Clavier Tigrigna en Ligne - Écrire en Tigrigna | Type-Native',
      description: 'Clavier tigrigna gratuit en ligne. Tapez en tigrigna (ትግርኛ) instantanément.',
      keywords: ['clavier tigrigna', 'clavier éthiopique', 'taper en tigrigna'],
      h1: 'Clavier Tigrigna en Ligne - Tapez en ትግርኛ',
      intro: "Tapez du texte tigrigna avec l'écriture éthiopique instantanément.",
    },
  },
  hy: {
    en: {
      title: 'Armenian Keyboard Online - Type Armenian Free | Type-Native',
      description: 'Free online Armenian keyboard. Type in Armenian (Հdelays) instantly.',
      keywords: ['armenian keyboard', 'type armenian online', 'armenian alphabet', 'Հdelays'],
      h1: 'Armenian Keyboard Online - Type in Հdelays',
      intro: 'Type Armenian text instantly with our free online keyboard.',
    },
    fr: {
      title: 'Clavier Arménien en Ligne - Écrire en Arménien | Type-Native',
      description: 'Clavier arménien gratuit en ligne. Tapez en arménien instantanément.',
      keywords: ['clavier arménien', 'alphabet arménien', 'taper en arménien'],
      h1: 'Clavier Arménien en Ligne - Tapez en Arménien',
      intro: 'Tapez du texte arménien instantanément avec notre clavier en ligne.',
    },
  },
  ka: {
    en: {
      title: 'Georgian Keyboard Online - Type Georgian Free | Type-Native',
      description: 'Free online Georgian keyboard. Type in Georgian (ქართული) instantly.',
      keywords: ['georgian keyboard', 'type georgian online', 'georgian script', 'ქართული'],
      h1: 'Georgian Keyboard Online - Type in ქართული',
      intro: 'Type Georgian text with Mkhedruli script instantly.',
    },
    fr: {
      title: 'Clavier Géorgien en Ligne - Écrire en Géorgien | Type-Native',
      description: 'Clavier géorgien gratuit en ligne. Tapez en géorgien (ქართული).',
      keywords: ['clavier géorgien', 'écriture géorgienne', 'taper en géorgien'],
      h1: 'Clavier Géorgien en Ligne - Tapez en ქართული',
      intro: 'Tapez du texte géorgien instantanément avec notre clavier en ligne.',
    },
  },
  'en-gb': {
    en: {
      title: 'English (UK) Keyboard Online - Type English (UK) Free | Type-Native',
      description: 'Free online English (UK) keyboard. Type in English (UK) (English (UK)) instantly. No download required. Works on all devices.',
      keywords: ["english (uk) keyboard","type english (uk) online","english (uk) typing","English (UK)"],
      h1: 'English (UK) Keyboard Online - Type in English (UK)',
      intro: 'Type English (UK) text instantly with our free online keyboard. No installation needed - works directly in your browser.',
    },
    fr: {
      title: 'Clavier Anglais en Ligne - Écrire en Anglais Gratuit | Type-Native',
      description: 'Clavier anglais gratuit en ligne. Tapez en anglais (English (UK)) instantanément. Aucun téléchargement requis.',
      keywords: ["clavier anglais","taper en anglais","clavier anglais en ligne"],
      h1: 'Clavier Anglais en Ligne - Tapez en English (UK)',
      intro: 'Tapez du texte anglais instantanément avec notre clavier en ligne gratuit. Fonctionne sur tous les appareils.',
    },
  },
  'de': {
    en: {
      title: 'German Keyboard Online - Type German Free | Type-Native',
      description: 'Free online German keyboard. Type in German (Deutsch) instantly. No download required. Works on all devices.',
      keywords: ["german keyboard","type german online","german typing","Deutsch"],
      h1: 'German Keyboard Online - Type in Deutsch',
      intro: 'Type German text instantly with our free online keyboard. No installation needed - works directly in your browser.',
    },
    fr: {
      title: 'Clavier Allemand en Ligne - Écrire en Allemand Gratuit | Type-Native',
      description: 'Clavier allemand gratuit en ligne. Tapez en allemand (Deutsch) instantanément. Aucun téléchargement requis.',
      keywords: ["clavier allemand","taper en allemand","clavier allemand en ligne"],
      h1: 'Clavier Allemand en Ligne - Tapez en Deutsch',
      intro: 'Tapez du texte allemand instantanément avec notre clavier en ligne gratuit. Fonctionne sur tous les appareils.',
    },
  },
  'es': {
    en: {
      title: 'Spanish Keyboard Online - Type Spanish Free | Type-Native',
      description: 'Free online Spanish keyboard. Type in Spanish (Español) instantly. No download required. Works on all devices.',
      keywords: ["spanish keyboard","type spanish online","spanish typing","Español"],
      h1: 'Spanish Keyboard Online - Type in Español',
      intro: 'Type Spanish text instantly with our free online keyboard. No installation needed - works directly in your browser.',
    },
    fr: {
      title: 'Clavier Espagnol en Ligne - Écrire en Espagnol Gratuit | Type-Native',
      description: 'Clavier espagnol gratuit en ligne. Tapez en espagnol (Español) instantanément. Aucun téléchargement requis.',
      keywords: ["clavier espagnol","taper en espagnol","clavier espagnol en ligne"],
      h1: 'Clavier Espagnol en Ligne - Tapez en Español',
      intro: 'Tapez du texte espagnol instantanément avec notre clavier en ligne gratuit. Fonctionne sur tous les appareils.',
    },
  },
  'it': {
    en: {
      title: 'Italian Keyboard Online - Type Italian Free | Type-Native',
      description: 'Free online Italian keyboard. Type in Italian (Italiano) instantly. No download required. Works on all devices.',
      keywords: ["italian keyboard","type italian online","italian typing","Italiano"],
      h1: 'Italian Keyboard Online - Type in Italiano',
      intro: 'Type Italian text instantly with our free online keyboard. No installation needed - works directly in your browser.',
    },
    fr: {
      title: 'Clavier Italien en Ligne - Écrire en Italien Gratuit | Type-Native',
      description: 'Clavier italien gratuit en ligne. Tapez en italien (Italiano) instantanément. Aucun téléchargement requis.',
      keywords: ["clavier italien","taper en italien","clavier italien en ligne"],
      h1: 'Clavier Italien en Ligne - Tapez en Italiano',
      intro: 'Tapez du texte italien instantanément avec notre clavier en ligne gratuit. Fonctionne sur tous les appareils.',
    },
  },
  'pt': {
    en: {
      title: 'Portuguese Keyboard Online - Type Portuguese Free | Type-Native',
      description: 'Free online Portuguese keyboard. Type in Portuguese (Português) instantly. No download required. Works on all devices.',
      keywords: ["portuguese keyboard","type portuguese online","portuguese typing","Português"],
      h1: 'Portuguese Keyboard Online - Type in Português',
      intro: 'Type Portuguese text instantly with our free online keyboard. No installation needed - works directly in your browser.',
    },
    fr: {
      title: 'Clavier Portugais en Ligne - Écrire en Portugais Gratuit | Type-Native',
      description: 'Clavier portugais gratuit en ligne. Tapez en portugais (Português) instantanément. Aucun téléchargement requis.',
      keywords: ["clavier portugais","taper en portugais","clavier portugais en ligne"],
      h1: 'Clavier Portugais en Ligne - Tapez en Português',
      intro: 'Tapez du texte portugais instantanément avec notre clavier en ligne gratuit. Fonctionne sur tous les appareils.',
    },
  },
  'nl': {
    en: {
      title: 'Dutch Keyboard Online - Type Dutch Free | Type-Native',
      description: 'Free online Dutch keyboard. Type in Dutch (Nederlands) instantly. No download required. Works on all devices.',
      keywords: ["dutch keyboard","type dutch online","dutch typing","Nederlands"],
      h1: 'Dutch Keyboard Online - Type in Nederlands',
      intro: 'Type Dutch text instantly with our free online keyboard. No installation needed - works directly in your browser.',
    },
    fr: {
      title: 'Clavier Néerlandais en Ligne - Écrire en Néerlandais Gratuit | Type-Native',
      description: 'Clavier néerlandais gratuit en ligne. Tapez en néerlandais (Nederlands) instantanément. Aucun téléchargement requis.',
      keywords: ["clavier néerlandais","taper en néerlandais","clavier néerlandais en ligne"],
      h1: 'Clavier Néerlandais en Ligne - Tapez en Nederlands',
      intro: 'Tapez du texte néerlandais instantanément avec notre clavier en ligne gratuit. Fonctionne sur tous les appareils.',
    },
  },
  'sv': {
    en: {
      title: 'Swedish Keyboard Online - Type Swedish Free | Type-Native',
      description: 'Free online Swedish keyboard. Type in Swedish (Svenska) instantly. No download required. Works on all devices.',
      keywords: ["swedish keyboard","type swedish online","swedish typing","Svenska"],
      h1: 'Swedish Keyboard Online - Type in Svenska',
      intro: 'Type Swedish text instantly with our free online keyboard. No installation needed - works directly in your browser.',
    },
    fr: {
      title: 'Clavier Suédois en Ligne - Écrire en Suédois Gratuit | Type-Native',
      description: 'Clavier suédois gratuit en ligne. Tapez en suédois (Svenska) instantanément. Aucun téléchargement requis.',
      keywords: ["clavier suédois","taper en suédois","clavier suédois en ligne"],
      h1: 'Clavier Suédois en Ligne - Tapez en Svenska',
      intro: 'Tapez du texte suédois instantanément avec notre clavier en ligne gratuit. Fonctionne sur tous les appareils.',
    },
  },
  'da': {
    en: {
      title: 'Danish Keyboard Online - Type Danish Free | Type-Native',
      description: 'Free online Danish keyboard. Type in Danish (Dansk) instantly. No download required. Works on all devices.',
      keywords: ["danish keyboard","type danish online","danish typing","Dansk"],
      h1: 'Danish Keyboard Online - Type in Dansk',
      intro: 'Type Danish text instantly with our free online keyboard. No installation needed - works directly in your browser.',
    },
    fr: {
      title: 'Clavier Danois en Ligne - Écrire en Danois Gratuit | Type-Native',
      description: 'Clavier danois gratuit en ligne. Tapez en danois (Dansk) instantanément. Aucun téléchargement requis.',
      keywords: ["clavier danois","taper en danois","clavier danois en ligne"],
      h1: 'Clavier Danois en Ligne - Tapez en Dansk',
      intro: 'Tapez du texte danois instantanément avec notre clavier en ligne gratuit. Fonctionne sur tous les appareils.',
    },
  },
  'no': {
    en: {
      title: 'Norwegian Keyboard Online - Type Norwegian Free | Type-Native',
      description: 'Free online Norwegian keyboard. Type in Norwegian (Norsk) instantly. No download required. Works on all devices.',
      keywords: ["norwegian keyboard","type norwegian online","norwegian typing","Norsk"],
      h1: 'Norwegian Keyboard Online - Type in Norsk',
      intro: 'Type Norwegian text instantly with our free online keyboard. No installation needed - works directly in your browser.',
    },
    fr: {
      title: 'Clavier Norvégien en Ligne - Écrire en Norvégien Gratuit | Type-Native',
      description: 'Clavier norvégien gratuit en ligne. Tapez en norvégien (Norsk) instantanément. Aucun téléchargement requis.',
      keywords: ["clavier norvégien","taper en norvégien","clavier norvégien en ligne"],
      h1: 'Clavier Norvégien en Ligne - Tapez en Norsk',
      intro: 'Tapez du texte norvégien instantanément avec notre clavier en ligne gratuit. Fonctionne sur tous les appareils.',
    },
  },
  'fi': {
    en: {
      title: 'Finnish Keyboard Online - Type Finnish Free | Type-Native',
      description: 'Free online Finnish keyboard. Type in Finnish (Suomi) instantly. No download required. Works on all devices.',
      keywords: ["finnish keyboard","type finnish online","finnish typing","Suomi"],
      h1: 'Finnish Keyboard Online - Type in Suomi',
      intro: 'Type Finnish text instantly with our free online keyboard. No installation needed - works directly in your browser.',
    },
    fr: {
      title: 'Clavier Finnois en Ligne - Écrire en Finnois Gratuit | Type-Native',
      description: 'Clavier finnois gratuit en ligne. Tapez en finnois (Suomi) instantanément. Aucun téléchargement requis.',
      keywords: ["clavier finnois","taper en finnois","clavier finnois en ligne"],
      h1: 'Clavier Finnois en Ligne - Tapez en Suomi',
      intro: 'Tapez du texte finnois instantanément avec notre clavier en ligne gratuit. Fonctionne sur tous les appareils.',
    },
  },
  'pl': {
    en: {
      title: 'Polish Keyboard Online - Type Polish Free | Type-Native',
      description: 'Free online Polish keyboard. Type in Polish (Polski) instantly. No download required. Works on all devices.',
      keywords: ["polish keyboard","type polish online","polish typing","Polski"],
      h1: 'Polish Keyboard Online - Type in Polski',
      intro: 'Type Polish text instantly with our free online keyboard. No installation needed - works directly in your browser.',
    },
    fr: {
      title: 'Clavier Polonais en Ligne - Écrire en Polonais Gratuit | Type-Native',
      description: 'Clavier polonais gratuit en ligne. Tapez en polonais (Polski) instantanément. Aucun téléchargement requis.',
      keywords: ["clavier polonais","taper en polonais","clavier polonais en ligne"],
      h1: 'Clavier Polonais en Ligne - Tapez en Polski',
      intro: 'Tapez du texte polonais instantanément avec notre clavier en ligne gratuit. Fonctionne sur tous les appareils.',
    },
  },
  'ga': {
    en: {
      title: 'Irish Keyboard Online - Type Irish Free | Type-Native',
      description: 'Free online Irish keyboard. Type in Irish (Gaeilge) instantly. No download required. Works on all devices.',
      keywords: ["irish keyboard","type irish online","irish typing","Gaeilge"],
      h1: 'Irish Keyboard Online - Type in Gaeilge',
      intro: 'Type Irish text instantly with our free online keyboard. No installation needed - works directly in your browser.',
    },
    fr: {
      title: 'Clavier Irlandais en Ligne - Écrire en Irlandais Gratuit | Type-Native',
      description: 'Clavier irlandais gratuit en ligne. Tapez en irlandais (Gaeilge) instantanément. Aucun téléchargement requis.',
      keywords: ["clavier irlandais","taper en irlandais","clavier irlandais en ligne"],
      h1: 'Clavier Irlandais en Ligne - Tapez en Gaeilge',
      intro: 'Tapez du texte irlandais instantanément avec notre clavier en ligne gratuit. Fonctionne sur tous les appareils.',
    },
  },
  'cy': {
    en: {
      title: 'Welsh Keyboard Online - Type Welsh Free | Type-Native',
      description: 'Free online Welsh keyboard. Type in Welsh (Cymraeg) instantly. No download required. Works on all devices.',
      keywords: ["welsh keyboard","type welsh online","welsh typing","Cymraeg"],
      h1: 'Welsh Keyboard Online - Type in Cymraeg',
      intro: 'Type Welsh text instantly with our free online keyboard. No installation needed - works directly in your browser.',
    },
    fr: {
      title: 'Clavier Gallois en Ligne - Écrire en Gallois Gratuit | Type-Native',
      description: 'Clavier gallois gratuit en ligne. Tapez en gallois (Cymraeg) instantanément. Aucun téléchargement requis.',
      keywords: ["clavier gallois","taper en gallois","clavier gallois en ligne"],
      h1: 'Clavier Gallois en Ligne - Tapez en Cymraeg',
      intro: 'Tapez du texte gallois instantanément avec notre clavier en ligne gratuit. Fonctionne sur tous les appareils.',
    },
  },
  'is': {
    en: {
      title: 'Icelandic Keyboard Online - Type Icelandic Free | Type-Native',
      description: 'Free online Icelandic keyboard. Type in Icelandic (Íslenska) instantly. No download required. Works on all devices.',
      keywords: ["icelandic keyboard","type icelandic online","icelandic typing","Íslenska"],
      h1: 'Icelandic Keyboard Online - Type in Íslenska',
      intro: 'Type Icelandic text instantly with our free online keyboard. No installation needed - works directly in your browser.',
    },
    fr: {
      title: 'Clavier Islandais en Ligne - Écrire en Islandais Gratuit | Type-Native',
      description: 'Clavier islandais gratuit en ligne. Tapez en islandais (Íslenska) instantanément. Aucun téléchargement requis.',
      keywords: ["clavier islandais","taper en islandais","clavier islandais en ligne"],
      h1: 'Clavier Islandais en Ligne - Tapez en Íslenska',
      intro: 'Tapez du texte islandais instantanément avec notre clavier en ligne gratuit. Fonctionne sur tous les appareils.',
    },
  },
  'et': {
    en: {
      title: 'Estonian Keyboard Online - Type Estonian Free | Type-Native',
      description: 'Free online Estonian keyboard. Type in Estonian (Eesti) instantly. No download required. Works on all devices.',
      keywords: ["estonian keyboard","type estonian online","estonian typing","Eesti"],
      h1: 'Estonian Keyboard Online - Type in Eesti',
      intro: 'Type Estonian text instantly with our free online keyboard. No installation needed - works directly in your browser.',
    },
    fr: {
      title: 'Clavier Estonien en Ligne - Écrire en Estonien Gratuit | Type-Native',
      description: 'Clavier estonien gratuit en ligne. Tapez en estonien (Eesti) instantanément. Aucun téléchargement requis.',
      keywords: ["clavier estonien","taper en estonien","clavier estonien en ligne"],
      h1: 'Clavier Estonien en Ligne - Tapez en Eesti',
      intro: 'Tapez du texte estonien instantanément avec notre clavier en ligne gratuit. Fonctionne sur tous les appareils.',
    },
  },
  'lv': {
    en: {
      title: 'Latvian Keyboard Online - Type Latvian Free | Type-Native',
      description: 'Free online Latvian keyboard. Type in Latvian (Latviešu) instantly. No download required. Works on all devices.',
      keywords: ["latvian keyboard","type latvian online","latvian typing","Latviešu"],
      h1: 'Latvian Keyboard Online - Type in Latviešu',
      intro: 'Type Latvian text instantly with our free online keyboard. No installation needed - works directly in your browser.',
    },
    fr: {
      title: 'Clavier Letton en Ligne - Écrire en Letton Gratuit | Type-Native',
      description: 'Clavier letton gratuit en ligne. Tapez en letton (Latviešu) instantanément. Aucun téléchargement requis.',
      keywords: ["clavier letton","taper en letton","clavier letton en ligne"],
      h1: 'Clavier Letton en Ligne - Tapez en Latviešu',
      intro: 'Tapez du texte letton instantanément avec notre clavier en ligne gratuit. Fonctionne sur tous les appareils.',
    },
  },
  'lt': {
    en: {
      title: 'Lithuanian Keyboard Online - Type Lithuanian Free | Type-Native',
      description: 'Free online Lithuanian keyboard. Type in Lithuanian (Lietuvių) instantly. No download required. Works on all devices.',
      keywords: ["lithuanian keyboard","type lithuanian online","lithuanian typing","Lietuvių"],
      h1: 'Lithuanian Keyboard Online - Type in Lietuvių',
      intro: 'Type Lithuanian text instantly with our free online keyboard. No installation needed - works directly in your browser.',
    },
    fr: {
      title: 'Clavier Lituanien en Ligne - Écrire en Lituanien Gratuit | Type-Native',
      description: 'Clavier lituanien gratuit en ligne. Tapez en lituanien (Lietuvių) instantanément. Aucun téléchargement requis.',
      keywords: ["clavier lituanien","taper en lituanien","clavier lituanien en ligne"],
      h1: 'Clavier Lituanien en Ligne - Tapez en Lietuvių',
      intro: 'Tapez du texte lituanien instantanément avec notre clavier en ligne gratuit. Fonctionne sur tous les appareils.',
    },
  },
  'cs': {
    en: {
      title: 'Czech Keyboard Online - Type Czech Free | Type-Native',
      description: 'Free online Czech keyboard. Type in Czech (Čeština) instantly. No download required. Works on all devices.',
      keywords: ["czech keyboard","type czech online","czech typing","Čeština"],
      h1: 'Czech Keyboard Online - Type in Čeština',
      intro: 'Type Czech text instantly with our free online keyboard. No installation needed - works directly in your browser.',
    },
    fr: {
      title: 'Clavier Tchèque en Ligne - Écrire en Tchèque Gratuit | Type-Native',
      description: 'Clavier tchèque gratuit en ligne. Tapez en tchèque (Čeština) instantanément. Aucun téléchargement requis.',
      keywords: ["clavier tchèque","taper en tchèque","clavier tchèque en ligne"],
      h1: 'Clavier Tchèque en Ligne - Tapez en Čeština',
      intro: 'Tapez du texte tchèque instantanément avec notre clavier en ligne gratuit. Fonctionne sur tous les appareils.',
    },
  },
  'hu': {
    en: {
      title: 'Hungarian Keyboard Online - Type Hungarian Free | Type-Native',
      description: 'Free online Hungarian keyboard. Type in Hungarian (Magyar) instantly. No download required. Works on all devices.',
      keywords: ["hungarian keyboard","type hungarian online","hungarian typing","Magyar"],
      h1: 'Hungarian Keyboard Online - Type in Magyar',
      intro: 'Type Hungarian text instantly with our free online keyboard. No installation needed - works directly in your browser.',
    },
    fr: {
      title: 'Clavier Hongrois en Ligne - Écrire en Hongrois Gratuit | Type-Native',
      description: 'Clavier hongrois gratuit en ligne. Tapez en hongrois (Magyar) instantanément. Aucun téléchargement requis.',
      keywords: ["clavier hongrois","taper en hongrois","clavier hongrois en ligne"],
      h1: 'Clavier Hongrois en Ligne - Tapez en Magyar',
      intro: 'Tapez du texte hongrois instantanément avec notre clavier en ligne gratuit. Fonctionne sur tous les appareils.',
    },
  },
  'ro': {
    en: {
      title: 'Romanian Keyboard Online - Type Romanian Free | Type-Native',
      description: 'Free online Romanian keyboard. Type in Romanian (Română) instantly. No download required. Works on all devices.',
      keywords: ["romanian keyboard","type romanian online","romanian typing","Română"],
      h1: 'Romanian Keyboard Online - Type in Română',
      intro: 'Type Romanian text instantly with our free online keyboard. No installation needed - works directly in your browser.',
    },
    fr: {
      title: 'Clavier Roumain en Ligne - Écrire en Roumain Gratuit | Type-Native',
      description: 'Clavier roumain gratuit en ligne. Tapez en roumain (Română) instantanément. Aucun téléchargement requis.',
      keywords: ["clavier roumain","taper en roumain","clavier roumain en ligne"],
      h1: 'Clavier Roumain en Ligne - Tapez en Română',
      intro: 'Tapez du texte roumain instantanément avec notre clavier en ligne gratuit. Fonctionne sur tous les appareils.',
    },
  },
  'hr': {
    en: {
      title: 'Croatian Keyboard Online - Type Croatian Free | Type-Native',
      description: 'Free online Croatian keyboard. Type in Croatian (Hrvatski) instantly. No download required. Works on all devices.',
      keywords: ["croatian keyboard","type croatian online","croatian typing","Hrvatski"],
      h1: 'Croatian Keyboard Online - Type in Hrvatski',
      intro: 'Type Croatian text instantly with our free online keyboard. No installation needed - works directly in your browser.',
    },
    fr: {
      title: 'Clavier Croate en Ligne - Écrire en Croate Gratuit | Type-Native',
      description: 'Clavier croate gratuit en ligne. Tapez en croate (Hrvatski) instantanément. Aucun téléchargement requis.',
      keywords: ["clavier croate","taper en croate","clavier croate en ligne"],
      h1: 'Clavier Croate en Ligne - Tapez en Hrvatski',
      intro: 'Tapez du texte croate instantanément avec notre clavier en ligne gratuit. Fonctionne sur tous les appareils.',
    },
  },
  'sk': {
    en: {
      title: 'Slovak Keyboard Online - Type Slovak Free | Type-Native',
      description: 'Free online Slovak keyboard. Type in Slovak (Slovenčina) instantly. No download required. Works on all devices.',
      keywords: ["slovak keyboard","type slovak online","slovak typing","Slovenčina"],
      h1: 'Slovak Keyboard Online - Type in Slovenčina',
      intro: 'Type Slovak text instantly with our free online keyboard. No installation needed - works directly in your browser.',
    },
    fr: {
      title: 'Clavier Slovaque en Ligne - Écrire en Slovaque Gratuit | Type-Native',
      description: 'Clavier slovaque gratuit en ligne. Tapez en slovaque (Slovenčina) instantanément. Aucun téléchargement requis.',
      keywords: ["clavier slovaque","taper en slovaque","clavier slovaque en ligne"],
      h1: 'Clavier Slovaque en Ligne - Tapez en Slovenčina',
      intro: 'Tapez du texte slovaque instantanément avec notre clavier en ligne gratuit. Fonctionne sur tous les appareils.',
    },
  },
  'sl': {
    en: {
      title: 'Slovenian Keyboard Online - Type Slovenian Free | Type-Native',
      description: 'Free online Slovenian keyboard. Type in Slovenian (Slovenščina) instantly. No download required. Works on all devices.',
      keywords: ["slovenian keyboard","type slovenian online","slovenian typing","Slovenščina"],
      h1: 'Slovenian Keyboard Online - Type in Slovenščina',
      intro: 'Type Slovenian text instantly with our free online keyboard. No installation needed - works directly in your browser.',
    },
    fr: {
      title: 'Clavier Slovène en Ligne - Écrire en Slovène Gratuit | Type-Native',
      description: 'Clavier slovène gratuit en ligne. Tapez en slovène (Slovenščina) instantanément. Aucun téléchargement requis.',
      keywords: ["clavier slovène","taper en slovène","clavier slovène en ligne"],
      h1: 'Clavier Slovène en Ligne - Tapez en Slovenščina',
      intro: 'Tapez du texte slovène instantanément avec notre clavier en ligne gratuit. Fonctionne sur tous les appareils.',
    },
  },
  'sr': {
    en: {
      title: 'Serbian Keyboard Online - Type Serbian Free | Type-Native',
      description: 'Free online Serbian keyboard. Type in Serbian (Srpski) instantly. No download required. Works on all devices.',
      keywords: ["serbian keyboard","type serbian online","serbian typing","Srpski"],
      h1: 'Serbian Keyboard Online - Type in Srpski',
      intro: 'Type Serbian text instantly with our free online keyboard. No installation needed - works directly in your browser.',
    },
    fr: {
      title: 'Clavier Serbe en Ligne - Écrire en Serbe Gratuit | Type-Native',
      description: 'Clavier serbe gratuit en ligne. Tapez en serbe (Srpski) instantanément. Aucun téléchargement requis.',
      keywords: ["clavier serbe","taper en serbe","clavier serbe en ligne"],
      h1: 'Clavier Serbe en Ligne - Tapez en Srpski',
      intro: 'Tapez du texte serbe instantanément avec notre clavier en ligne gratuit. Fonctionne sur tous les appareils.',
    },
  },
  'bs': {
    en: {
      title: 'Bosnian Keyboard Online - Type Bosnian Free | Type-Native',
      description: 'Free online Bosnian keyboard. Type in Bosnian (Bosanski) instantly. No download required. Works on all devices.',
      keywords: ["bosnian keyboard","type bosnian online","bosnian typing","Bosanski"],
      h1: 'Bosnian Keyboard Online - Type in Bosanski',
      intro: 'Type Bosnian text instantly with our free online keyboard. No installation needed - works directly in your browser.',
    },
    fr: {
      title: 'Clavier Bosniaque en Ligne - Écrire en Bosniaque Gratuit | Type-Native',
      description: 'Clavier bosniaque gratuit en ligne. Tapez en bosniaque (Bosanski) instantanément. Aucun téléchargement requis.',
      keywords: ["clavier bosniaque","taper en bosniaque","clavier bosniaque en ligne"],
      h1: 'Clavier Bosniaque en Ligne - Tapez en Bosanski',
      intro: 'Tapez du texte bosniaque instantanément avec notre clavier en ligne gratuit. Fonctionne sur tous les appareils.',
    },
  },
  'bg': {
    en: {
      title: 'Bulgarian Keyboard Online - Type Bulgarian Free | Type-Native',
      description: 'Free online Bulgarian keyboard. Type in Bulgarian (Български) instantly. No download required. Works on all devices.',
      keywords: ["bulgarian keyboard","type bulgarian online","bulgarian typing","Български"],
      h1: 'Bulgarian Keyboard Online - Type in Български',
      intro: 'Type Bulgarian text instantly with our free online keyboard. No installation needed - works directly in your browser.',
    },
    fr: {
      title: 'Clavier Bulgare en Ligne - Écrire en Bulgare Gratuit | Type-Native',
      description: 'Clavier bulgare gratuit en ligne. Tapez en bulgare (Български) instantanément. Aucun téléchargement requis.',
      keywords: ["clavier bulgare","taper en bulgare","clavier bulgare en ligne"],
      h1: 'Clavier Bulgare en Ligne - Tapez en Български',
      intro: 'Tapez du texte bulgare instantanément avec notre clavier en ligne gratuit. Fonctionne sur tous les appareils.',
    },
  },
  'be': {
    en: {
      title: 'Belarusian Keyboard Online - Type Belarusian Free | Type-Native',
      description: 'Free online Belarusian keyboard. Type in Belarusian (Беларуская) instantly. No download required. Works on all devices.',
      keywords: ["belarusian keyboard","type belarusian online","belarusian typing","Беларуская"],
      h1: 'Belarusian Keyboard Online - Type in Беларуская',
      intro: 'Type Belarusian text instantly with our free online keyboard. No installation needed - works directly in your browser.',
    },
    fr: {
      title: 'Clavier Biélorusse en Ligne - Écrire en Biélorusse Gratuit | Type-Native',
      description: 'Clavier biélorusse gratuit en ligne. Tapez en biélorusse (Беларуская) instantanément. Aucun téléchargement requis.',
      keywords: ["clavier biélorusse","taper en biélorusse","clavier biélorusse en ligne"],
      h1: 'Clavier Biélorusse en Ligne - Tapez en Беларуская',
      intro: 'Tapez du texte biélorusse instantanément avec notre clavier en ligne gratuit. Fonctionne sur tous les appareils.',
    },
  },
  'mt': {
    en: {
      title: 'Maltese Keyboard Online - Type Maltese Free | Type-Native',
      description: 'Free online Maltese keyboard. Type in Maltese (Malti) instantly. No download required. Works on all devices.',
      keywords: ["maltese keyboard","type maltese online","maltese typing","Malti"],
      h1: 'Maltese Keyboard Online - Type in Malti',
      intro: 'Type Maltese text instantly with our free online keyboard. No installation needed - works directly in your browser.',
    },
    fr: {
      title: 'Clavier Maltais en Ligne - Écrire en Maltais Gratuit | Type-Native',
      description: 'Clavier maltais gratuit en ligne. Tapez en maltais (Malti) instantanément. Aucun téléchargement requis.',
      keywords: ["clavier maltais","taper en maltais","clavier maltais en ligne"],
      h1: 'Clavier Maltais en Ligne - Tapez en Malti',
      intro: 'Tapez du texte maltais instantanément avec notre clavier en ligne gratuit. Fonctionne sur tous les appareils.',
    },
  },
  'sq': {
    en: {
      title: 'Albanian Keyboard Online - Type Albanian Free | Type-Native',
      description: 'Free online Albanian keyboard. Type in Albanian (Shqip) instantly. No download required. Works on all devices.',
      keywords: ["albanian keyboard","type albanian online","albanian typing","Shqip"],
      h1: 'Albanian Keyboard Online - Type in Shqip',
      intro: 'Type Albanian text instantly with our free online keyboard. No installation needed - works directly in your browser.',
    },
    fr: {
      title: 'Clavier Albanais en Ligne - Écrire en Albanais Gratuit | Type-Native',
      description: 'Clavier albanais gratuit en ligne. Tapez en albanais (Shqip) instantanément. Aucun téléchargement requis.',
      keywords: ["clavier albanais","taper en albanais","clavier albanais en ligne"],
      h1: 'Clavier Albanais en Ligne - Tapez en Shqip',
      intro: 'Tapez du texte albanais instantanément avec notre clavier en ligne gratuit. Fonctionne sur tous les appareils.',
    },
  },
  'mk': {
    en: {
      title: 'Macedonian Keyboard Online - Type Macedonian Free | Type-Native',
      description: 'Free online Macedonian keyboard. Type in Macedonian (Македонски) instantly. No download required. Works on all devices.',
      keywords: ["macedonian keyboard","type macedonian online","macedonian typing","Македонски"],
      h1: 'Macedonian Keyboard Online - Type in Македонски',
      intro: 'Type Macedonian text instantly with our free online keyboard. No installation needed - works directly in your browser.',
    },
    fr: {
      title: 'Clavier Macédonien en Ligne - Écrire en Macédonien Gratuit | Type-Native',
      description: 'Clavier macédonien gratuit en ligne. Tapez en macédonien (Македонски) instantanément. Aucun téléchargement requis.',
      keywords: ["clavier macédonien","taper en macédonien","clavier macédonien en ligne"],
      h1: 'Clavier Macédonien en Ligne - Tapez en Македонски',
      intro: 'Tapez du texte macédonien instantanément avec notre clavier en ligne gratuit. Fonctionne sur tous les appareils.',
    },
  },
  'kk': {
    en: {
      title: 'Kazakh Keyboard Online - Type Kazakh Free | Type-Native',
      description: 'Free online Kazakh keyboard. Type in Kazakh (Қазақша) instantly. No download required. Works on all devices.',
      keywords: ["kazakh keyboard","type kazakh online","kazakh typing","Қазақша"],
      h1: 'Kazakh Keyboard Online - Type in Қазақша',
      intro: 'Type Kazakh text instantly with our free online keyboard. No installation needed - works directly in your browser.',
    },
    fr: {
      title: 'Clavier Kazakh en Ligne - Écrire en Kazakh Gratuit | Type-Native',
      description: 'Clavier kazakh gratuit en ligne. Tapez en kazakh (Қазақша) instantanément. Aucun téléchargement requis.',
      keywords: ["clavier kazakh","taper en kazakh","clavier kazakh en ligne"],
      h1: 'Clavier Kazakh en Ligne - Tapez en Қазақша',
      intro: 'Tapez du texte kazakh instantanément avec notre clavier en ligne gratuit. Fonctionne sur tous les appareils.',
    },
  },
  'tg': {
    en: {
      title: 'Tajik Keyboard Online - Type Tajik Free | Type-Native',
      description: 'Free online Tajik keyboard. Type in Tajik (Тоҷикӣ) instantly. No download required. Works on all devices.',
      keywords: ["tajik keyboard","type tajik online","tajik typing","Тоҷикӣ"],
      h1: 'Tajik Keyboard Online - Type in Тоҷикӣ',
      intro: 'Type Tajik text instantly with our free online keyboard. No installation needed - works directly in your browser.',
    },
    fr: {
      title: 'Clavier Tadjik en Ligne - Écrire en Tadjik Gratuit | Type-Native',
      description: 'Clavier tadjik gratuit en ligne. Tapez en tadjik (Тоҷикӣ) instantanément. Aucun téléchargement requis.',
      keywords: ["clavier tadjik","taper en tadjik","clavier tadjik en ligne"],
      h1: 'Clavier Tadjik en Ligne - Tapez en Тоҷикӣ',
      intro: 'Tapez du texte tadjik instantanément avec notre clavier en ligne gratuit. Fonctionne sur tous les appareils.',
    },
  },
  'uz': {
    en: {
      title: 'Uzbek Keyboard Online - Type Uzbek Free | Type-Native',
      description: 'Free online Uzbek keyboard. Type in Uzbek (Ўзбекча) instantly. No download required. Works on all devices.',
      keywords: ["uzbek keyboard","type uzbek online","uzbek typing","Ўзбекча"],
      h1: 'Uzbek Keyboard Online - Type in Ўзбекча',
      intro: 'Type Uzbek text instantly with our free online keyboard. No installation needed - works directly in your browser.',
    },
    fr: {
      title: 'Clavier Ouzbek en Ligne - Écrire en Ouzbek Gratuit | Type-Native',
      description: 'Clavier ouzbek gratuit en ligne. Tapez en ouzbek (Ўзбекча) instantanément. Aucun téléchargement requis.',
      keywords: ["clavier ouzbek","taper en ouzbek","clavier ouzbek en ligne"],
      h1: 'Clavier Ouzbek en Ligne - Tapez en Ўзбекча',
      intro: 'Tapez du texte ouzbek instantanément avec notre clavier en ligne gratuit. Fonctionne sur tous les appareils.',
    },
  },
  'ky': {
    en: {
      title: 'Kyrgyz Keyboard Online - Type Kyrgyz Free | Type-Native',
      description: 'Free online Kyrgyz keyboard. Type in Kyrgyz (Кыргызча) instantly. No download required. Works on all devices.',
      keywords: ["kyrgyz keyboard","type kyrgyz online","kyrgyz typing","Кыргызча"],
      h1: 'Kyrgyz Keyboard Online - Type in Кыргызча',
      intro: 'Type Kyrgyz text instantly with our free online keyboard. No installation needed - works directly in your browser.',
    },
    fr: {
      title: 'Clavier Kirghize en Ligne - Écrire en Kirghize Gratuit | Type-Native',
      description: 'Clavier kirghize gratuit en ligne. Tapez en kirghize (Кыргызча) instantanément. Aucun téléchargement requis.',
      keywords: ["clavier kirghize","taper en kirghize","clavier kirghize en ligne"],
      h1: 'Clavier Kirghize en Ligne - Tapez en Кыргызча',
      intro: 'Tapez du texte kirghize instantanément avec notre clavier en ligne gratuit. Fonctionne sur tous les appareils.',
    },
  },
  'tk': {
    en: {
      title: 'Turkmen Keyboard Online - Type Turkmen Free | Type-Native',
      description: 'Free online Turkmen keyboard. Type in Turkmen (Türkmençe) instantly. No download required. Works on all devices.',
      keywords: ["turkmen keyboard","type turkmen online","turkmen typing","Türkmençe"],
      h1: 'Turkmen Keyboard Online - Type in Türkmençe',
      intro: 'Type Turkmen text instantly with our free online keyboard. No installation needed - works directly in your browser.',
    },
    fr: {
      title: 'Clavier Turkmène en Ligne - Écrire en Turkmène Gratuit | Type-Native',
      description: 'Clavier turkmène gratuit en ligne. Tapez en turkmène (Türkmençe) instantanément. Aucun téléchargement requis.',
      keywords: ["clavier turkmène","taper en turkmène","clavier turkmène en ligne"],
      h1: 'Clavier Turkmène en Ligne - Tapez en Türkmençe',
      intro: 'Tapez du texte turkmène instantanément avec notre clavier en ligne gratuit. Fonctionne sur tous les appareils.',
    },
  },
  'mn': {
    en: {
      title: 'Mongolian Keyboard Online - Type Mongolian Free | Type-Native',
      description: 'Free online Mongolian keyboard. Type in Mongolian (Монгол) instantly. No download required. Works on all devices.',
      keywords: ["mongolian keyboard","type mongolian online","mongolian typing","Монгол"],
      h1: 'Mongolian Keyboard Online - Type in Монгол',
      intro: 'Type Mongolian text instantly with our free online keyboard. No installation needed - works directly in your browser.',
    },
    fr: {
      title: 'Clavier Mongol en Ligne - Écrire en Mongol Gratuit | Type-Native',
      description: 'Clavier mongol gratuit en ligne. Tapez en mongol (Монгол) instantanément. Aucun téléchargement requis.',
      keywords: ["clavier mongol","taper en mongol","clavier mongol en ligne"],
      h1: 'Clavier Mongol en Ligne - Tapez en Монгол',
      intro: 'Tapez du texte mongol instantanément avec notre clavier en ligne gratuit. Fonctionne sur tous les appareils.',
    },
  },
  'ckb': {
    en: {
      title: 'Kurdish (Sorani) Keyboard Online - Type Kurdish (Sorani) Free | Type-Native',
      description: 'Free online Kurdish (Sorani) keyboard. Type in Kurdish (Sorani) (کوردی) instantly. No download required. Works on all devices.',
      keywords: ["kurdish (sorani) keyboard","type kurdish (sorani) online","kurdish (sorani) typing","کوردی"],
      h1: 'Kurdish (Sorani) Keyboard Online - Type in کوردی',
      intro: 'Type Kurdish (Sorani) text instantly with full right-to-left support. Free online keyboard for your browser.',
    },
    fr: {
      title: 'Clavier Kurde en Ligne - Écrire en Kurde Gratuit | Type-Native',
      description: 'Clavier kurde gratuit en ligne. Tapez en kurde (کوردی) instantanément. Aucun téléchargement requis.',
      keywords: ["clavier kurde","taper en kurde","clavier kurde en ligne"],
      h1: 'Clavier Kurde en Ligne - Tapez en کوردی',
      intro: 'Tapez du texte kurde instantanément avec support droite-à-gauche complet.',
    },
  },
  'ku': {
    en: {
      title: 'Kurdish (Kurmanji) Keyboard Online - Type Kurdish (Kurmanji) Free | Type-Native',
      description: 'Free online Kurdish (Kurmanji) keyboard. Type in Kurdish (Kurmanji) (Kurmancî) instantly. No download required. Works on all devices.',
      keywords: ["kurdish (kurmanji) keyboard","type kurdish (kurmanji) online","kurdish (kurmanji) typing","Kurmancî"],
      h1: 'Kurdish (Kurmanji) Keyboard Online - Type in Kurmancî',
      intro: 'Type Kurdish (Kurmanji) text instantly with full right-to-left support. Free online keyboard for your browser.',
    },
    fr: {
      title: 'Clavier Kurde en Ligne - Écrire en Kurde Gratuit | Type-Native',
      description: 'Clavier kurde gratuit en ligne. Tapez en kurde (Kurmancî) instantanément. Aucun téléchargement requis.',
      keywords: ["clavier kurde","taper en kurde","clavier kurde en ligne"],
      h1: 'Clavier Kurde en Ligne - Tapez en Kurmancî',
      intro: 'Tapez du texte kurde instantanément avec support droite-à-gauche complet.',
    },
  },
  'zgh': {
    en: {
      title: 'Tifinagh (Berber) Keyboard Online - Type Tifinagh (Berber) Free | Type-Native',
      description: 'Free online Tifinagh (Berber) keyboard. Type in Tifinagh (Berber) (ⵜⴰⵎⴰⵣⵉⵖⵜ) instantly. No download required. Works on all devices.',
      keywords: ["tifinagh (berber) keyboard","type tifinagh (berber) online","tifinagh (berber) typing","ⵜⴰⵎⴰⵣⵉⵖⵜ"],
      h1: 'Tifinagh (Berber) Keyboard Online - Type in ⵜⴰⵎⴰⵣⵉⵖⵜ',
      intro: 'Type Tifinagh (Berber) text instantly with our free online keyboard. No installation needed - works directly in your browser.',
    },
    fr: {
      title: 'Clavier Tifinagh en Ligne - Écrire en Tifinagh Gratuit | Type-Native',
      description: 'Clavier tifinagh gratuit en ligne. Tapez en tifinagh (ⵜⴰⵎⴰⵣⵉⵖⵜ) instantanément. Aucun téléchargement requis.',
      keywords: ["clavier tifinagh","taper en tifinagh","clavier tifinagh en ligne"],
      h1: 'Clavier Tifinagh en Ligne - Tapez en ⵜⴰⵎⴰⵣⵉⵖⵜ',
      intro: 'Tapez du texte tifinagh instantanément avec notre clavier en ligne gratuit. Fonctionne sur tous les appareils.',
    },
  },
  'pa': {
    en: {
      title: 'Punjabi Keyboard Online - Type Punjabi Free | Type-Native',
      description: 'Free online Punjabi keyboard. Type in Punjabi (ਪੰਜਾਬੀ) instantly. No download required. Works on all devices.',
      keywords: ["punjabi keyboard","type punjabi online","punjabi typing","ਪੰਜਾਬੀ"],
      h1: 'Punjabi Keyboard Online - Type in ਪੰਜਾਬੀ',
      intro: 'Type Punjabi text instantly with our free online keyboard. No installation needed - works directly in your browser.',
    },
    fr: {
      title: 'Clavier Pendjabi en Ligne - Écrire en Pendjabi Gratuit | Type-Native',
      description: 'Clavier pendjabi gratuit en ligne. Tapez en pendjabi (ਪੰਜਾਬੀ) instantanément. Aucun téléchargement requis.',
      keywords: ["clavier pendjabi","taper en pendjabi","clavier pendjabi en ligne"],
      h1: 'Clavier Pendjabi en Ligne - Tapez en ਪੰਜਾਬੀ',
      intro: 'Tapez du texte pendjabi instantanément avec notre clavier en ligne gratuit. Fonctionne sur tous les appareils.',
    },
  },
  'gu': {
    en: {
      title: 'Gujarati Keyboard Online - Type Gujarati Free | Type-Native',
      description: 'Free online Gujarati keyboard. Type in Gujarati (ગુજરાતી) instantly. No download required. Works on all devices.',
      keywords: ["gujarati keyboard","type gujarati online","gujarati typing","ગુજરાતી"],
      h1: 'Gujarati Keyboard Online - Type in ગુજરાતી',
      intro: 'Type Gujarati text instantly with our free online keyboard. No installation needed - works directly in your browser.',
    },
    fr: {
      title: 'Clavier Gujarati en Ligne - Écrire en Gujarati Gratuit | Type-Native',
      description: 'Clavier gujarati gratuit en ligne. Tapez en gujarati (ગુજરાતી) instantanément. Aucun téléchargement requis.',
      keywords: ["clavier gujarati","taper en gujarati","clavier gujarati en ligne"],
      h1: 'Clavier Gujarati en Ligne - Tapez en ગુજરાતી',
      intro: 'Tapez du texte gujarati instantanément avec notre clavier en ligne gratuit. Fonctionne sur tous les appareils.',
    },
  },
  'te': {
    en: {
      title: 'Telugu Keyboard Online - Type Telugu Free | Type-Native',
      description: 'Free online Telugu keyboard. Type in Telugu (తెలుగు) instantly. No download required. Works on all devices.',
      keywords: ["telugu keyboard","type telugu online","telugu typing","తెలుగు"],
      h1: 'Telugu Keyboard Online - Type in తెలుగు',
      intro: 'Type Telugu text instantly with our free online keyboard. No installation needed - works directly in your browser.',
    },
    fr: {
      title: 'Clavier Télougou en Ligne - Écrire en Télougou Gratuit | Type-Native',
      description: 'Clavier télougou gratuit en ligne. Tapez en télougou (తెలుగు) instantanément. Aucun téléchargement requis.',
      keywords: ["clavier télougou","taper en télougou","clavier télougou en ligne"],
      h1: 'Clavier Télougou en Ligne - Tapez en తెలుగు',
      intro: 'Tapez du texte télougou instantanément avec notre clavier en ligne gratuit. Fonctionne sur tous les appareils.',
    },
  },
  'kn': {
    en: {
      title: 'Kannada Keyboard Online - Type Kannada Free | Type-Native',
      description: 'Free online Kannada keyboard. Type in Kannada (ಕನ್ನಡ) instantly. No download required. Works on all devices.',
      keywords: ["kannada keyboard","type kannada online","kannada typing","ಕನ್ನಡ"],
      h1: 'Kannada Keyboard Online - Type in ಕನ್ನಡ',
      intro: 'Type Kannada text instantly with our free online keyboard. No installation needed - works directly in your browser.',
    },
    fr: {
      title: 'Clavier Kannada en Ligne - Écrire en Kannada Gratuit | Type-Native',
      description: 'Clavier kannada gratuit en ligne. Tapez en kannada (ಕನ್ನಡ) instantanément. Aucun téléchargement requis.',
      keywords: ["clavier kannada","taper en kannada","clavier kannada en ligne"],
      h1: 'Clavier Kannada en Ligne - Tapez en ಕನ್ನಡ',
      intro: 'Tapez du texte kannada instantanément avec notre clavier en ligne gratuit. Fonctionne sur tous les appareils.',
    },
  },
  'ml': {
    en: {
      title: 'Malayalam Keyboard Online - Type Malayalam Free | Type-Native',
      description: 'Free online Malayalam keyboard. Type in Malayalam (മലയാളം) instantly. No download required. Works on all devices.',
      keywords: ["malayalam keyboard","type malayalam online","malayalam typing","മലയാളം"],
      h1: 'Malayalam Keyboard Online - Type in മലയാളം',
      intro: 'Type Malayalam text instantly with our free online keyboard. No installation needed - works directly in your browser.',
    },
    fr: {
      title: 'Clavier Malayalam en Ligne - Écrire en Malayalam Gratuit | Type-Native',
      description: 'Clavier malayalam gratuit en ligne. Tapez en malayalam (മലയാളം) instantanément. Aucun téléchargement requis.',
      keywords: ["clavier malayalam","taper en malayalam","clavier malayalam en ligne"],
      h1: 'Clavier Malayalam en Ligne - Tapez en മലയാളം',
      intro: 'Tapez du texte malayalam instantanément avec notre clavier en ligne gratuit. Fonctionne sur tous les appareils.',
    },
  },
  'or': {
    en: {
      title: 'Odia Keyboard Online - Type Odia Free | Type-Native',
      description: 'Free online Odia keyboard. Type in Odia (ଓଡ଼ିଆ) instantly. No download required. Works on all devices.',
      keywords: ["odia keyboard","type odia online","odia typing","ଓଡ଼ିଆ"],
      h1: 'Odia Keyboard Online - Type in ଓଡ଼ିଆ',
      intro: 'Type Odia text instantly with our free online keyboard. No installation needed - works directly in your browser.',
    },
    fr: {
      title: 'Clavier Odia en Ligne - Écrire en Odia Gratuit | Type-Native',
      description: 'Clavier odia gratuit en ligne. Tapez en odia (ଓଡ଼ିଆ) instantanément. Aucun téléchargement requis.',
      keywords: ["clavier odia","taper en odia","clavier odia en ligne"],
      h1: 'Clavier Odia en Ligne - Tapez en ଓଡ଼ିଆ',
      intro: 'Tapez du texte odia instantanément avec notre clavier en ligne gratuit. Fonctionne sur tous les appareils.',
    },
  },
  'km': {
    en: {
      title: 'Khmer Keyboard Online - Type Khmer Free | Type-Native',
      description: 'Free online Khmer keyboard. Type in Khmer (ខ្មែរ) instantly. No download required. Works on all devices.',
      keywords: ["khmer keyboard","type khmer online","khmer typing","ខ្មែរ"],
      h1: 'Khmer Keyboard Online - Type in ខ្មែរ',
      intro: 'Type Khmer text instantly with our free online keyboard. No installation needed - works directly in your browser.',
    },
    fr: {
      title: 'Clavier Khmer en Ligne - Écrire en Khmer Gratuit | Type-Native',
      description: 'Clavier khmer gratuit en ligne. Tapez en khmer (ខ្មែរ) instantanément. Aucun téléchargement requis.',
      keywords: ["clavier khmer","taper en khmer","clavier khmer en ligne"],
      h1: 'Clavier Khmer en Ligne - Tapez en ខ្មែរ',
      intro: 'Tapez du texte khmer instantanément avec notre clavier en ligne gratuit. Fonctionne sur tous les appareils.',
    },
  },
  'my': {
    en: {
      title: 'Burmese Keyboard Online - Type Burmese Free | Type-Native',
      description: 'Free online Burmese keyboard. Type in Burmese (မြန်မာ) instantly. No download required. Works on all devices.',
      keywords: ["burmese keyboard","type burmese online","burmese typing","မြန်မာ"],
      h1: 'Burmese Keyboard Online - Type in မြန်မာ',
      intro: 'Type Burmese text instantly with our free online keyboard. No installation needed - works directly in your browser.',
    },
    fr: {
      title: 'Clavier Birman en Ligne - Écrire en Birman Gratuit | Type-Native',
      description: 'Clavier birman gratuit en ligne. Tapez en birman (မြန်မာ) instantanément. Aucun téléchargement requis.',
      keywords: ["clavier birman","taper en birman","clavier birman en ligne"],
      h1: 'Clavier Birman en Ligne - Tapez en မြန်မာ',
      intro: 'Tapez du texte birman instantanément avec notre clavier en ligne gratuit. Fonctionne sur tous les appareils.',
    },
  },
  'id': {
    en: {
      title: 'Indonesian Keyboard Online - Type Indonesian Free | Type-Native',
      description: 'Free online Indonesian keyboard. Type in Indonesian (Bahasa Indonesia) instantly. No download required. Works on all devices.',
      keywords: ["indonesian keyboard","type indonesian online","indonesian typing","Bahasa Indonesia"],
      h1: 'Indonesian Keyboard Online - Type in Bahasa Indonesia',
      intro: 'Type Indonesian text instantly with our free online keyboard. No installation needed - works directly in your browser.',
    },
    fr: {
      title: 'Clavier Indonésien en Ligne - Écrire en Indonésien Gratuit | Type-Native',
      description: 'Clavier indonésien gratuit en ligne. Tapez en indonésien (Bahasa Indonesia) instantanément. Aucun téléchargement requis.',
      keywords: ["clavier indonésien","taper en indonésien","clavier indonésien en ligne"],
      h1: 'Clavier Indonésien en Ligne - Tapez en Bahasa Indonesia',
      intro: 'Tapez du texte indonésien instantanément avec notre clavier en ligne gratuit. Fonctionne sur tous les appareils.',
    },
  },
  'ms': {
    en: {
      title: 'Malay Keyboard Online - Type Malay Free | Type-Native',
      description: 'Free online Malay keyboard. Type in Malay (Bahasa Melayu) instantly. No download required. Works on all devices.',
      keywords: ["malay keyboard","type malay online","malay typing","Bahasa Melayu"],
      h1: 'Malay Keyboard Online - Type in Bahasa Melayu',
      intro: 'Type Malay text instantly with our free online keyboard. No installation needed - works directly in your browser.',
    },
    fr: {
      title: 'Clavier Malais en Ligne - Écrire en Malais Gratuit | Type-Native',
      description: 'Clavier malais gratuit en ligne. Tapez en malais (Bahasa Melayu) instantanément. Aucun téléchargement requis.',
      keywords: ["clavier malais","taper en malais","clavier malais en ligne"],
      h1: 'Clavier Malais en Ligne - Tapez en Bahasa Melayu',
      intro: 'Tapez du texte malais instantanément avec notre clavier en ligne gratuit. Fonctionne sur tous les appareils.',
    },
  },
  'tl': {
    en: {
      title: 'Tagalog Keyboard Online - Type Tagalog Free | Type-Native',
      description: 'Free online Tagalog keyboard. Type in Tagalog (Tagalog) instantly. No download required. Works on all devices.',
      keywords: ["tagalog keyboard","type tagalog online","tagalog typing","Tagalog"],
      h1: 'Tagalog Keyboard Online - Type in Tagalog',
      intro: 'Type Tagalog text instantly with our free online keyboard. No installation needed - works directly in your browser.',
    },
    fr: {
      title: 'Clavier Tagalog en Ligne - Écrire en Tagalog Gratuit | Type-Native',
      description: 'Clavier tagalog gratuit en ligne. Tapez en tagalog (Tagalog) instantanément. Aucun téléchargement requis.',
      keywords: ["clavier tagalog","taper en tagalog","clavier tagalog en ligne"],
      h1: 'Clavier Tagalog en Ligne - Tapez en Tagalog',
      intro: 'Tapez du texte tagalog instantanément avec notre clavier en ligne gratuit. Fonctionne sur tous les appareils.',
    },
  },
  'si': {
    en: {
      title: 'Sinhala Keyboard Online - Type Sinhala Free | Type-Native',
      description: 'Free online Sinhala keyboard. Type in Sinhala (සිංහල) instantly. No download required. Works on all devices.',
      keywords: ["sinhala keyboard","type sinhala online","sinhala typing","සිංහල"],
      h1: 'Sinhala Keyboard Online - Type in සිංහල',
      intro: 'Type Sinhala text instantly with our free online keyboard. No installation needed - works directly in your browser.',
    },
    fr: {
      title: 'Clavier Singhalais en Ligne - Écrire en Singhalais Gratuit | Type-Native',
      description: 'Clavier singhalais gratuit en ligne. Tapez en singhalais (සිංහල) instantanément. Aucun téléchargement requis.',
      keywords: ["clavier singhalais","taper en singhalais","clavier singhalais en ligne"],
      h1: 'Clavier Singhalais en Ligne - Tapez en සිංහල',
      intro: 'Tapez du texte singhalais instantanément avec notre clavier en ligne gratuit. Fonctionne sur tous les appareils.',
    },
  },
  'dv': {
    en: {
      title: 'Divehi Keyboard Online - Type Divehi Free | Type-Native',
      description: 'Free online Divehi keyboard. Type in Divehi (ދިވެހި) instantly. No download required. Works on all devices.',
      keywords: ["divehi keyboard","type divehi online","divehi typing","ދިވެހި"],
      h1: 'Divehi Keyboard Online - Type in ދިވެހި',
      intro: 'Type Divehi text instantly with our free online keyboard. No installation needed - works directly in your browser.',
    },
    fr: {
      title: 'Clavier Divehi en Ligne - Écrire en Divehi Gratuit | Type-Native',
      description: 'Clavier divehi gratuit en ligne. Tapez en divehi (ދިވެހި) instantanément. Aucun téléchargement requis.',
      keywords: ["clavier divehi","taper en divehi","clavier divehi en ligne"],
      h1: 'Clavier Divehi en Ligne - Tapez en ދިވެހި',
      intro: 'Tapez du texte divehi instantanément avec notre clavier en ligne gratuit. Fonctionne sur tous les appareils.',
    },
  },
  'ne': {
    en: {
      title: 'Nepali Keyboard Online - Type Nepali Free | Type-Native',
      description: 'Free online Nepali keyboard. Type in Nepali (नेपाली) instantly. No download required. Works on all devices.',
      keywords: ["nepali keyboard","type nepali online","nepali typing","नेपाली"],
      h1: 'Nepali Keyboard Online - Type in नेपाली',
      intro: 'Type Nepali text instantly with our free online keyboard. No installation needed - works directly in your browser.',
    },
    fr: {
      title: 'Clavier Népalais en Ligne - Écrire en Népalais Gratuit | Type-Native',
      description: 'Clavier népalais gratuit en ligne. Tapez en népalais (नेपाली) instantanément. Aucun téléchargement requis.',
      keywords: ["clavier népalais","taper en népalais","clavier népalais en ligne"],
      h1: 'Clavier Népalais en Ligne - Tapez en नेपाली',
      intro: 'Tapez du texte népalais instantanément avec notre clavier en ligne gratuit. Fonctionne sur tous les appareils.',
    },
  },
  'bo': {
    en: {
      title: 'Tibetan Keyboard Online - Type Tibetan Free | Type-Native',
      description: 'Free online Tibetan keyboard. Type in Tibetan (བོད་སྐད་) instantly. No download required. Works on all devices.',
      keywords: ["tibetan keyboard","type tibetan online","tibetan typing","བོད་སྐད་"],
      h1: 'Tibetan Keyboard Online - Type in བོད་སྐད་',
      intro: 'Type Tibetan text instantly with our free online keyboard. No installation needed - works directly in your browser.',
    },
    fr: {
      title: 'Clavier Tibétain en Ligne - Écrire en Tibétain Gratuit | Type-Native',
      description: 'Clavier tibétain gratuit en ligne. Tapez en tibétain (བོད་སྐད་) instantanément. Aucun téléchargement requis.',
      keywords: ["clavier tibétain","taper en tibétain","clavier tibétain en ligne"],
      h1: 'Clavier Tibétain en Ligne - Tapez en བོད་སྐད་',
      intro: 'Tapez du texte tibétain instantanément avec notre clavier en ligne gratuit. Fonctionne sur tous les appareils.',
    },
  },
  'ha': {
    en: {
      title: 'Hausa Keyboard Online - Type Hausa Free | Type-Native',
      description: 'Free online Hausa keyboard. Type in Hausa (Hausa) instantly. No download required. Works on all devices.',
      keywords: ["hausa keyboard","type hausa online","hausa typing","Hausa"],
      h1: 'Hausa Keyboard Online - Type in Hausa',
      intro: 'Type Hausa text instantly with our free online keyboard. No installation needed - works directly in your browser.',
    },
    fr: {
      title: 'Clavier Haoussa en Ligne - Écrire en Haoussa Gratuit | Type-Native',
      description: 'Clavier haoussa gratuit en ligne. Tapez en haoussa (Hausa) instantanément. Aucun téléchargement requis.',
      keywords: ["clavier haoussa","taper en haoussa","clavier haoussa en ligne"],
      h1: 'Clavier Haoussa en Ligne - Tapez en Hausa',
      intro: 'Tapez du texte haoussa instantanément avec notre clavier en ligne gratuit. Fonctionne sur tous les appareils.',
    },
  },
  'sw': {
    en: {
      title: 'Swahili Keyboard Online - Type Swahili Free | Type-Native',
      description: 'Free online Swahili keyboard. Type in Swahili (Kiswahili) instantly. No download required. Works on all devices.',
      keywords: ["swahili keyboard","type swahili online","swahili typing","Kiswahili"],
      h1: 'Swahili Keyboard Online - Type in Kiswahili',
      intro: 'Type Swahili text instantly with our free online keyboard. No installation needed - works directly in your browser.',
    },
    fr: {
      title: 'Clavier Swahili en Ligne - Écrire en Swahili Gratuit | Type-Native',
      description: 'Clavier swahili gratuit en ligne. Tapez en swahili (Kiswahili) instantanément. Aucun téléchargement requis.',
      keywords: ["clavier swahili","taper en swahili","clavier swahili en ligne"],
      h1: 'Clavier Swahili en Ligne - Tapez en Kiswahili',
      intro: 'Tapez du texte swahili instantanément avec notre clavier en ligne gratuit. Fonctionne sur tous les appareils.',
    },
  },
  'yo': {
    en: {
      title: 'Yoruba Keyboard Online - Type Yoruba Free | Type-Native',
      description: 'Free online Yoruba keyboard. Type in Yoruba (Yorùbá) instantly. No download required. Works on all devices.',
      keywords: ["yoruba keyboard","type yoruba online","yoruba typing","Yorùbá"],
      h1: 'Yoruba Keyboard Online - Type in Yorùbá',
      intro: 'Type Yoruba text instantly with our free online keyboard. No installation needed - works directly in your browser.',
    },
    fr: {
      title: 'Clavier Yoruba en Ligne - Écrire en Yoruba Gratuit | Type-Native',
      description: 'Clavier yoruba gratuit en ligne. Tapez en yoruba (Yorùbá) instantanément. Aucun téléchargement requis.',
      keywords: ["clavier yoruba","taper en yoruba","clavier yoruba en ligne"],
      h1: 'Clavier Yoruba en Ligne - Tapez en Yorùbá',
      intro: 'Tapez du texte yoruba instantanément avec notre clavier en ligne gratuit. Fonctionne sur tous les appareils.',
    },
  },
  'ig': {
    en: {
      title: 'Igbo Keyboard Online - Type Igbo Free | Type-Native',
      description: 'Free online Igbo keyboard. Type in Igbo (Igbo) instantly. No download required. Works on all devices.',
      keywords: ["igbo keyboard","type igbo online","igbo typing","Igbo"],
      h1: 'Igbo Keyboard Online - Type in Igbo',
      intro: 'Type Igbo text instantly with our free online keyboard. No installation needed - works directly in your browser.',
    },
    fr: {
      title: 'Clavier Igbo en Ligne - Écrire en Igbo Gratuit | Type-Native',
      description: 'Clavier igbo gratuit en ligne. Tapez en igbo (Igbo) instantanément. Aucun téléchargement requis.',
      keywords: ["clavier igbo","taper en igbo","clavier igbo en ligne"],
      h1: 'Clavier Igbo en Ligne - Tapez en Igbo',
      intro: 'Tapez du texte igbo instantanément avec notre clavier en ligne gratuit. Fonctionne sur tous les appareils.',
    },
  },
  'zu': {
    en: {
      title: 'Zulu Keyboard Online - Type Zulu Free | Type-Native',
      description: 'Free online Zulu keyboard. Type in Zulu (isiZulu) instantly. No download required. Works on all devices.',
      keywords: ["zulu keyboard","type zulu online","zulu typing","isiZulu"],
      h1: 'Zulu Keyboard Online - Type in isiZulu',
      intro: 'Type Zulu text instantly with our free online keyboard. No installation needed - works directly in your browser.',
    },
    fr: {
      title: 'Clavier Zoulou en Ligne - Écrire en Zoulou Gratuit | Type-Native',
      description: 'Clavier zoulou gratuit en ligne. Tapez en zoulou (isiZulu) instantanément. Aucun téléchargement requis.',
      keywords: ["clavier zoulou","taper en zoulou","clavier zoulou en ligne"],
      h1: 'Clavier Zoulou en Ligne - Tapez en isiZulu',
      intro: 'Tapez du texte zoulou instantanément avec notre clavier en ligne gratuit. Fonctionne sur tous les appareils.',
    },
  },
  'xh': {
    en: {
      title: 'Xhosa Keyboard Online - Type Xhosa Free | Type-Native',
      description: 'Free online Xhosa keyboard. Type in Xhosa (isiXhosa) instantly. No download required. Works on all devices.',
      keywords: ["xhosa keyboard","type xhosa online","xhosa typing","isiXhosa"],
      h1: 'Xhosa Keyboard Online - Type in isiXhosa',
      intro: 'Type Xhosa text instantly with our free online keyboard. No installation needed - works directly in your browser.',
    },
    fr: {
      title: 'Clavier Xhosa en Ligne - Écrire en Xhosa Gratuit | Type-Native',
      description: 'Clavier xhosa gratuit en ligne. Tapez en xhosa (isiXhosa) instantanément. Aucun téléchargement requis.',
      keywords: ["clavier xhosa","taper en xhosa","clavier xhosa en ligne"],
      h1: 'Clavier Xhosa en Ligne - Tapez en isiXhosa',
      intro: 'Tapez du texte xhosa instantanément avec notre clavier en ligne gratuit. Fonctionne sur tous les appareils.',
    },
  },
  'af': {
    en: {
      title: 'Afrikaans Keyboard Online - Type Afrikaans Free | Type-Native',
      description: 'Free online Afrikaans keyboard. Type in Afrikaans (Afrikaans) instantly. No download required. Works on all devices.',
      keywords: ["afrikaans keyboard","type afrikaans online","afrikaans typing","Afrikaans"],
      h1: 'Afrikaans Keyboard Online - Type in Afrikaans',
      intro: 'Type Afrikaans text instantly with our free online keyboard. No installation needed - works directly in your browser.',
    },
    fr: {
      title: 'Clavier Afrikaans en Ligne - Écrire en Afrikaans Gratuit | Type-Native',
      description: 'Clavier afrikaans gratuit en ligne. Tapez en afrikaans (Afrikaans) instantanément. Aucun téléchargement requis.',
      keywords: ["clavier afrikaans","taper en afrikaans","clavier afrikaans en ligne"],
      h1: 'Clavier Afrikaans en Ligne - Tapez en Afrikaans',
      intro: 'Tapez du texte afrikaans instantanément avec notre clavier en ligne gratuit. Fonctionne sur tous les appareils.',
    },
  },
  'mi': {
    en: {
      title: 'Maori Keyboard Online - Type Maori Free | Type-Native',
      description: 'Free online Maori keyboard. Type in Maori (Māori) instantly. No download required. Works on all devices.',
      keywords: ["maori keyboard","type maori online","maori typing","Māori"],
      h1: 'Maori Keyboard Online - Type in Māori',
      intro: 'Type Maori text instantly with our free online keyboard. No installation needed - works directly in your browser.',
    },
    fr: {
      title: 'Clavier Maori en Ligne - Écrire en Maori Gratuit | Type-Native',
      description: 'Clavier maori gratuit en ligne. Tapez en maori (Māori) instantanément. Aucun téléchargement requis.',
      keywords: ["clavier maori","taper en maori","clavier maori en ligne"],
      h1: 'Clavier Maori en Ligne - Tapez en Māori',
      intro: 'Tapez du texte maori instantanément avec notre clavier en ligne gratuit. Fonctionne sur tous les appareils.',
    },
  },
  'fj': {
    en: {
      title: 'Fijian Keyboard Online - Type Fijian Free | Type-Native',
      description: 'Free online Fijian keyboard. Type in Fijian (Vosa Vakaviti) instantly. No download required. Works on all devices.',
      keywords: ["fijian keyboard","type fijian online","fijian typing","Vosa Vakaviti"],
      h1: 'Fijian Keyboard Online - Type in Vosa Vakaviti',
      intro: 'Type Fijian text instantly with our free online keyboard. No installation needed - works directly in your browser.',
    },
    fr: {
      title: 'Clavier Fidjien en Ligne - Écrire en Fidjien Gratuit | Type-Native',
      description: 'Clavier fidjien gratuit en ligne. Tapez en fidjien (Vosa Vakaviti) instantanément. Aucun téléchargement requis.',
      keywords: ["clavier fidjien","taper en fidjien","clavier fidjien en ligne"],
      h1: 'Clavier Fidjien en Ligne - Tapez en Vosa Vakaviti',
      intro: 'Tapez du texte fidjien instantanément avec notre clavier en ligne gratuit. Fonctionne sur tous les appareils.',
    },
  },
  'sm': {
    en: {
      title: 'Samoan Keyboard Online - Type Samoan Free | Type-Native',
      description: 'Free online Samoan keyboard. Type in Samoan (Gagana Samoa) instantly. No download required. Works on all devices.',
      keywords: ["samoan keyboard","type samoan online","samoan typing","Gagana Samoa"],
      h1: 'Samoan Keyboard Online - Type in Gagana Samoa',
      intro: 'Type Samoan text instantly with our free online keyboard. No installation needed - works directly in your browser.',
    },
    fr: {
      title: 'Clavier Samoan en Ligne - Écrire en Samoan Gratuit | Type-Native',
      description: 'Clavier samoan gratuit en ligne. Tapez en samoan (Gagana Samoa) instantanément. Aucun téléchargement requis.',
      keywords: ["clavier samoan","taper en samoan","clavier samoan en ligne"],
      h1: 'Clavier Samoan en Ligne - Tapez en Gagana Samoa',
      intro: 'Tapez du texte samoan instantanément avec notre clavier en ligne gratuit. Fonctionne sur tous les appareils.',
    },
  },
  'en-ca': {
    en: {
      title: 'English (Canada) Keyboard Online - Type English (Canada) Free | Type-Native',
      description: 'Free online English (Canada) keyboard. Type in English (Canada) (English (Canada)) instantly. No download required. Works on all devices.',
      keywords: ["english (canada) keyboard","type english (canada) online","english (canada) typing","English (Canada)"],
      h1: 'English (Canada) Keyboard Online - Type in English (Canada)',
      intro: 'Type English (Canada) text instantly with our free online keyboard. No installation needed - works directly in your browser.',
    },
    fr: {
      title: 'Clavier Anglais en Ligne - Écrire en Anglais Gratuit | Type-Native',
      description: 'Clavier anglais gratuit en ligne. Tapez en anglais (English (Canada)) instantanément. Aucun téléchargement requis.',
      keywords: ["clavier anglais","taper en anglais","clavier anglais en ligne"],
      h1: 'Clavier Anglais en Ligne - Tapez en English (Canada)',
      intro: 'Tapez du texte anglais instantanément avec notre clavier en ligne gratuit. Fonctionne sur tous les appareils.',
    },
  },
  'fr-ca': {
    en: {
      title: 'French (Canada) Keyboard Online - Type French (Canada) Free | Type-Native',
      description: 'Free online French (Canada) keyboard. Type in French (Canada) (Français (Canada)) instantly. No download required. Works on all devices.',
      keywords: ["french (canada) keyboard","type french (canada) online","french (canada) typing","Français (Canada)"],
      h1: 'French (Canada) Keyboard Online - Type in Français (Canada)',
      intro: 'Type French (Canada) text instantly with our free online keyboard. No installation needed - works directly in your browser.',
    },
    fr: {
      title: 'Clavier Français en Ligne - Écrire en Français Gratuit | Type-Native',
      description: 'Clavier français gratuit en ligne. Tapez en français (Français (Canada)) instantanément. Aucun téléchargement requis.',
      keywords: ["clavier français","taper en français","clavier français en ligne"],
      h1: 'Clavier Français en Ligne - Tapez en Français (Canada)',
      intro: 'Tapez du texte français instantanément avec notre clavier en ligne gratuit. Fonctionne sur tous les appareils.',
    },
  },
  'es-mx': {
    en: {
      title: 'Spanish (Mexico) Keyboard Online - Type Spanish (Mexico) Free | Type-Native',
      description: 'Free online Spanish (Mexico) keyboard. Type in Spanish (Mexico) (Español (México)) instantly. No download required. Works on all devices.',
      keywords: ["spanish (mexico) keyboard","type spanish (mexico) online","spanish (mexico) typing","Español (México)"],
      h1: 'Spanish (Mexico) Keyboard Online - Type in Español (México)',
      intro: 'Type Spanish (Mexico) text instantly with our free online keyboard. No installation needed - works directly in your browser.',
    },
    fr: {
      title: 'Clavier Espagnol en Ligne - Écrire en Espagnol Gratuit | Type-Native',
      description: 'Clavier espagnol gratuit en ligne. Tapez en espagnol (Español (México)) instantanément. Aucun téléchargement requis.',
      keywords: ["clavier espagnol","taper en espagnol","clavier espagnol en ligne"],
      h1: 'Clavier Espagnol en Ligne - Tapez en Español (México)',
      intro: 'Tapez du texte espagnol instantanément avec notre clavier en ligne gratuit. Fonctionne sur tous les appareils.',
    },
  },
  'pt-br': {
    en: {
      title: 'Portuguese (Brazil) Keyboard Online - Type Portuguese (Brazil) Free | Type-Native',
      description: 'Free online Portuguese (Brazil) keyboard. Type in Portuguese (Brazil) (Português (Brasil)) instantly. No download required. Works on all devices.',
      keywords: ["portuguese (brazil) keyboard","type portuguese (brazil) online","portuguese (brazil) typing","Português (Brasil)"],
      h1: 'Portuguese (Brazil) Keyboard Online - Type in Português (Brasil)',
      intro: 'Type Portuguese (Brazil) text instantly with our free online keyboard. No installation needed - works directly in your browser.',
    },
    fr: {
      title: 'Clavier Portugais en Ligne - Écrire en Portugais Gratuit | Type-Native',
      description: 'Clavier portugais gratuit en ligne. Tapez en portugais (Português (Brasil)) instantanément. Aucun téléchargement requis.',
      keywords: ["clavier portugais","taper en portugais","clavier portugais en ligne"],
      h1: 'Clavier Portugais en Ligne - Tapez en Português (Brasil)',
      intro: 'Tapez du texte portugais instantanément avec notre clavier en ligne gratuit. Fonctionne sur tous les appareils.',
    },
  },
  'de-ch': {
    en: {
      title: 'German (Switzerland) Keyboard Online - Type German (Switzerland) Free | Type-Native',
      description: 'Free online German (Switzerland) keyboard. Type in German (Switzerland) (Deutsch (Schweiz)) instantly. No download required. Works on all devices.',
      keywords: ["german (switzerland) keyboard","type german (switzerland) online","german (switzerland) typing","Deutsch (Schweiz)"],
      h1: 'German (Switzerland) Keyboard Online - Type in Deutsch (Schweiz)',
      intro: 'Type German (Switzerland) text instantly with our free online keyboard. No installation needed - works directly in your browser.',
    },
    fr: {
      title: 'Clavier Allemand en Ligne - Écrire en Allemand Gratuit | Type-Native',
      description: 'Clavier allemand gratuit en ligne. Tapez en allemand (Deutsch (Schweiz)) instantanément. Aucun téléchargement requis.',
      keywords: ["clavier allemand","taper en allemand","clavier allemand en ligne"],
      h1: 'Clavier Allemand en Ligne - Tapez en Deutsch (Schweiz)',
      intro: 'Tapez du texte allemand instantanément avec notre clavier en ligne gratuit. Fonctionne sur tous les appareils.',
    },
  },
  'de-at': {
    en: {
      title: 'German (Austria) Keyboard Online - Type German (Austria) Free | Type-Native',
      description: 'Free online German (Austria) keyboard. Type in German (Austria) (Deutsch (Österreich)) instantly. No download required. Works on all devices.',
      keywords: ["german (austria) keyboard","type german (austria) online","german (austria) typing","Deutsch (Österreich)"],
      h1: 'German (Austria) Keyboard Online - Type in Deutsch (Österreich)',
      intro: 'Type German (Austria) text instantly with our free online keyboard. No installation needed - works directly in your browser.',
    },
    fr: {
      title: 'Clavier Allemand en Ligne - Écrire en Allemand Gratuit | Type-Native',
      description: 'Clavier allemand gratuit en ligne. Tapez en allemand (Deutsch (Österreich)) instantanément. Aucun téléchargement requis.',
      keywords: ["clavier allemand","taper en allemand","clavier allemand en ligne"],
      h1: 'Clavier Allemand en Ligne - Tapez en Deutsch (Österreich)',
      intro: 'Tapez du texte allemand instantanément avec notre clavier en ligne gratuit. Fonctionne sur tous les appareils.',
    },
  },
  'fr-be': {
    en: {
      title: 'French (Belgium) Keyboard Online - Type French (Belgium) Free | Type-Native',
      description: 'Free online French (Belgium) keyboard. Type in French (Belgium) (Français (Belgique)) instantly. No download required. Works on all devices.',
      keywords: ["french (belgium) keyboard","type french (belgium) online","french (belgium) typing","Français (Belgique)"],
      h1: 'French (Belgium) Keyboard Online - Type in Français (Belgique)',
      intro: 'Type French (Belgium) text instantly with our free online keyboard. No installation needed - works directly in your browser.',
    },
    fr: {
      title: 'Clavier Français en Ligne - Écrire en Français Gratuit | Type-Native',
      description: 'Clavier français gratuit en ligne. Tapez en français (Français (Belgique)) instantanément. Aucun téléchargement requis.',
      keywords: ["clavier français","taper en français","clavier français en ligne"],
      h1: 'Clavier Français en Ligne - Tapez en Français (Belgique)',
      intro: 'Tapez du texte français instantanément avec notre clavier en ligne gratuit. Fonctionne sur tous les appareils.',
    },
  },
  'fr-ch': {
    en: {
      title: 'French (Switzerland) Keyboard Online - Type French (Switzerland) Free | Type-Native',
      description: 'Free online French (Switzerland) keyboard. Type in French (Switzerland) (Français (Suisse)) instantly. No download required. Works on all devices.',
      keywords: ["french (switzerland) keyboard","type french (switzerland) online","french (switzerland) typing","Français (Suisse)"],
      h1: 'French (Switzerland) Keyboard Online - Type in Français (Suisse)',
      intro: 'Type French (Switzerland) text instantly with our free online keyboard. No installation needed - works directly in your browser.',
    },
    fr: {
      title: 'Clavier Français en Ligne - Écrire en Français Gratuit | Type-Native',
      description: 'Clavier français gratuit en ligne. Tapez en français (Français (Suisse)) instantanément. Aucun téléchargement requis.',
      keywords: ["clavier français","taper en français","clavier français en ligne"],
      h1: 'Clavier Français en Ligne - Tapez en Français (Suisse)',
      intro: 'Tapez du texte français instantanément avec notre clavier en ligne gratuit. Fonctionne sur tous les appareils.',
    },
  },
  'nl-be': {
    en: {
      title: 'Dutch (Belgium) Keyboard Online - Type Dutch (Belgium) Free | Type-Native',
      description: 'Free online Dutch (Belgium) keyboard. Type in Dutch (Belgium) (Nederlands (België)) instantly. No download required. Works on all devices.',
      keywords: ["dutch (belgium) keyboard","type dutch (belgium) online","dutch (belgium) typing","Nederlands (België)"],
      h1: 'Dutch (Belgium) Keyboard Online - Type in Nederlands (België)',
      intro: 'Type Dutch (Belgium) text instantly with our free online keyboard. No installation needed - works directly in your browser.',
    },
    fr: {
      title: 'Clavier Néerlandais en Ligne - Écrire en Néerlandais Gratuit | Type-Native',
      description: 'Clavier néerlandais gratuit en ligne. Tapez en néerlandais (Nederlands (België)) instantanément. Aucun téléchargement requis.',
      keywords: ["clavier néerlandais","taper en néerlandais","clavier néerlandais en ligne"],
      h1: 'Clavier Néerlandais en Ligne - Tapez en Nederlands (België)',
      intro: 'Tapez du texte néerlandais instantanément avec notre clavier en ligne gratuit. Fonctionne sur tous les appareils.',
    },
  },
  'es-es': {
    en: {
      title: 'Spanish (Spain) Keyboard Online - Type Spanish (Spain) Free | Type-Native',
      description: 'Free online Spanish (Spain) keyboard. Type in Spanish (Spain) (Español (España)) instantly. No download required. Works on all devices.',
      keywords: ["spanish (spain) keyboard","type spanish (spain) online","spanish (spain) typing","Español (España)"],
      h1: 'Spanish (Spain) Keyboard Online - Type in Español (España)',
      intro: 'Type Spanish (Spain) text instantly with our free online keyboard. No installation needed - works directly in your browser.',
    },
    fr: {
      title: 'Clavier Espagnol en Ligne - Écrire en Espagnol Gratuit | Type-Native',
      description: 'Clavier espagnol gratuit en ligne. Tapez en espagnol (Español (España)) instantanément. Aucun téléchargement requis.',
      keywords: ["clavier espagnol","taper en espagnol","clavier espagnol en ligne"],
      h1: 'Clavier Espagnol en Ligne - Tapez en Español (España)',
      intro: 'Tapez du texte espagnol instantanément avec notre clavier en ligne gratuit. Fonctionne sur tous les appareils.',
    },
  },
  'es-ar': {
    en: {
      title: 'Spanish (Argentina) Keyboard Online - Type Spanish (Argentina) Free | Type-Native',
      description: 'Free online Spanish (Argentina) keyboard. Type in Spanish (Argentina) (Español (Argentina)) instantly. No download required. Works on all devices.',
      keywords: ["spanish (argentina) keyboard","type spanish (argentina) online","spanish (argentina) typing","Español (Argentina)"],
      h1: 'Spanish (Argentina) Keyboard Online - Type in Español (Argentina)',
      intro: 'Type Spanish (Argentina) text instantly with our free online keyboard. No installation needed - works directly in your browser.',
    },
    fr: {
      title: 'Clavier Espagnol en Ligne - Écrire en Espagnol Gratuit | Type-Native',
      description: 'Clavier espagnol gratuit en ligne. Tapez en espagnol (Español (Argentina)) instantanément. Aucun téléchargement requis.',
      keywords: ["clavier espagnol","taper en espagnol","clavier espagnol en ligne"],
      h1: 'Clavier Espagnol en Ligne - Tapez en Español (Argentina)',
      intro: 'Tapez du texte espagnol instantanément avec notre clavier en ligne gratuit. Fonctionne sur tous les appareils.',
    },
  },
  'es-co': {
    en: {
      title: 'Spanish (Colombia) Keyboard Online - Type Spanish (Colombia) Free | Type-Native',
      description: 'Free online Spanish (Colombia) keyboard. Type in Spanish (Colombia) (Español (Colombia)) instantly. No download required. Works on all devices.',
      keywords: ["spanish (colombia) keyboard","type spanish (colombia) online","spanish (colombia) typing","Español (Colombia)"],
      h1: 'Spanish (Colombia) Keyboard Online - Type in Español (Colombia)',
      intro: 'Type Spanish (Colombia) text instantly with our free online keyboard. No installation needed - works directly in your browser.',
    },
    fr: {
      title: 'Clavier Espagnol en Ligne - Écrire en Espagnol Gratuit | Type-Native',
      description: 'Clavier espagnol gratuit en ligne. Tapez en espagnol (Español (Colombia)) instantanément. Aucun téléchargement requis.',
      keywords: ["clavier espagnol","taper en espagnol","clavier espagnol en ligne"],
      h1: 'Clavier Espagnol en Ligne - Tapez en Español (Colombia)',
      intro: 'Tapez du texte espagnol instantanément avec notre clavier en ligne gratuit. Fonctionne sur tous les appareils.',
    },
  },
  'es-pe': {
    en: {
      title: 'Spanish (Peru) Keyboard Online - Type Spanish (Peru) Free | Type-Native',
      description: 'Free online Spanish (Peru) keyboard. Type in Spanish (Peru) (Español (Perú)) instantly. No download required. Works on all devices.',
      keywords: ["spanish (peru) keyboard","type spanish (peru) online","spanish (peru) typing","Español (Perú)"],
      h1: 'Spanish (Peru) Keyboard Online - Type in Español (Perú)',
      intro: 'Type Spanish (Peru) text instantly with our free online keyboard. No installation needed - works directly in your browser.',
    },
    fr: {
      title: 'Clavier Espagnol en Ligne - Écrire en Espagnol Gratuit | Type-Native',
      description: 'Clavier espagnol gratuit en ligne. Tapez en espagnol (Español (Perú)) instantanément. Aucun téléchargement requis.',
      keywords: ["clavier espagnol","taper en espagnol","clavier espagnol en ligne"],
      h1: 'Clavier Espagnol en Ligne - Tapez en Español (Perú)',
      intro: 'Tapez du texte espagnol instantanément avec notre clavier en ligne gratuit. Fonctionne sur tous les appareils.',
    },
  },
  'es-ve': {
    en: {
      title: 'Spanish (Venezuela) Keyboard Online - Type Spanish (Venezuela) Free | Type-Native',
      description: 'Free online Spanish (Venezuela) keyboard. Type in Spanish (Venezuela) (Español (Venezuela)) instantly. No download required. Works on all devices.',
      keywords: ["spanish (venezuela) keyboard","type spanish (venezuela) online","spanish (venezuela) typing","Español (Venezuela)"],
      h1: 'Spanish (Venezuela) Keyboard Online - Type in Español (Venezuela)',
      intro: 'Type Spanish (Venezuela) text instantly with our free online keyboard. No installation needed - works directly in your browser.',
    },
    fr: {
      title: 'Clavier Espagnol en Ligne - Écrire en Espagnol Gratuit | Type-Native',
      description: 'Clavier espagnol gratuit en ligne. Tapez en espagnol (Español (Venezuela)) instantanément. Aucun téléchargement requis.',
      keywords: ["clavier espagnol","taper en espagnol","clavier espagnol en ligne"],
      h1: 'Clavier Espagnol en Ligne - Tapez en Español (Venezuela)',
      intro: 'Tapez du texte espagnol instantanément avec notre clavier en ligne gratuit. Fonctionne sur tous les appareils.',
    },
  },
  'es-cl': {
    en: {
      title: 'Spanish (Chile) Keyboard Online - Type Spanish (Chile) Free | Type-Native',
      description: 'Free online Spanish (Chile) keyboard. Type in Spanish (Chile) (Español (Chile)) instantly. No download required. Works on all devices.',
      keywords: ["spanish (chile) keyboard","type spanish (chile) online","spanish (chile) typing","Español (Chile)"],
      h1: 'Spanish (Chile) Keyboard Online - Type in Español (Chile)',
      intro: 'Type Spanish (Chile) text instantly with our free online keyboard. No installation needed - works directly in your browser.',
    },
    fr: {
      title: 'Clavier Espagnol en Ligne - Écrire en Espagnol Gratuit | Type-Native',
      description: 'Clavier espagnol gratuit en ligne. Tapez en espagnol (Español (Chile)) instantanément. Aucun téléchargement requis.',
      keywords: ["clavier espagnol","taper en espagnol","clavier espagnol en ligne"],
      h1: 'Clavier Espagnol en Ligne - Tapez en Español (Chile)',
      intro: 'Tapez du texte espagnol instantanément avec notre clavier en ligne gratuit. Fonctionne sur tous les appareils.',
    },
  },
  'ar-sa': {
    en: {
      title: 'Arabic (Saudi Arabia) Keyboard Online - Type Arabic (Saudi Arabia) Free | Type-Native',
      description: 'Free online Arabic (Saudi Arabia) keyboard. Type in Arabic (Saudi Arabia) (العربية (السعودية)) instantly. No download required. Works on all devices.',
      keywords: ["arabic (saudi arabia) keyboard","type arabic (saudi arabia) online","arabic (saudi arabia) typing","العربية (السعودية)"],
      h1: 'Arabic (Saudi Arabia) Keyboard Online - Type in العربية (السعودية)',
      intro: 'Type Arabic (Saudi Arabia) text instantly with full right-to-left support. Free online keyboard for your browser.',
    },
    fr: {
      title: 'Clavier Arabe en Ligne - Écrire en Arabe Gratuit | Type-Native',
      description: 'Clavier arabe gratuit en ligne. Tapez en arabe (العربية (السعودية)) instantanément. Aucun téléchargement requis.',
      keywords: ["clavier arabe","taper en arabe","clavier arabe en ligne"],
      h1: 'Clavier Arabe en Ligne - Tapez en العربية (السعودية)',
      intro: 'Tapez du texte arabe instantanément avec support droite-à-gauche complet.',
    },
  },
  'ar-eg': {
    en: {
      title: 'Arabic (Egypt) Keyboard Online - Type Arabic (Egypt) Free | Type-Native',
      description: 'Free online Arabic (Egypt) keyboard. Type in Arabic (Egypt) (العربية (مصر)) instantly. No download required. Works on all devices.',
      keywords: ["arabic (egypt) keyboard","type arabic (egypt) online","arabic (egypt) typing","العربية (مصر)"],
      h1: 'Arabic (Egypt) Keyboard Online - Type in العربية (مصر)',
      intro: 'Type Arabic (Egypt) text instantly with full right-to-left support. Free online keyboard for your browser.',
    },
    fr: {
      title: 'Clavier Arabe en Ligne - Écrire en Arabe Gratuit | Type-Native',
      description: 'Clavier arabe gratuit en ligne. Tapez en arabe (العربية (مصر)) instantanément. Aucun téléchargement requis.',
      keywords: ["clavier arabe","taper en arabe","clavier arabe en ligne"],
      h1: 'Clavier Arabe en Ligne - Tapez en العربية (مصر)',
      intro: 'Tapez du texte arabe instantanément avec support droite-à-gauche complet.',
    },
  },
  'ar-ae': {
    en: {
      title: 'Arabic (UAE) Keyboard Online - Type Arabic (UAE) Free | Type-Native',
      description: 'Free online Arabic (UAE) keyboard. Type in Arabic (UAE) (العربية (الإمارات)) instantly. No download required. Works on all devices.',
      keywords: ["arabic (uae) keyboard","type arabic (uae) online","arabic (uae) typing","العربية (الإمارات)"],
      h1: 'Arabic (UAE) Keyboard Online - Type in العربية (الإمارات)',
      intro: 'Type Arabic (UAE) text instantly with full right-to-left support. Free online keyboard for your browser.',
    },
    fr: {
      title: 'Clavier Arabe en Ligne - Écrire en Arabe Gratuit | Type-Native',
      description: 'Clavier arabe gratuit en ligne. Tapez en arabe (العربية (الإمارات)) instantanément. Aucun téléchargement requis.',
      keywords: ["clavier arabe","taper en arabe","clavier arabe en ligne"],
      h1: 'Clavier Arabe en Ligne - Tapez en العربية (الإمارات)',
      intro: 'Tapez du texte arabe instantanément avec support droite-à-gauche complet.',
    },
  },
  'ar-ma': {
    en: {
      title: 'Arabic (Morocco) Keyboard Online - Type Arabic (Morocco) Free | Type-Native',
      description: 'Free online Arabic (Morocco) keyboard. Type in Arabic (Morocco) (العربية (المغرب)) instantly. No download required. Works on all devices.',
      keywords: ["arabic (morocco) keyboard","type arabic (morocco) online","arabic (morocco) typing","العربية (المغرب)"],
      h1: 'Arabic (Morocco) Keyboard Online - Type in العربية (المغرب)',
      intro: 'Type Arabic (Morocco) text instantly with full right-to-left support. Free online keyboard for your browser.',
    },
    fr: {
      title: 'Clavier Arabe en Ligne - Écrire en Arabe Gratuit | Type-Native',
      description: 'Clavier arabe gratuit en ligne. Tapez en arabe (العربية (المغرب)) instantanément. Aucun téléchargement requis.',
      keywords: ["clavier arabe","taper en arabe","clavier arabe en ligne"],
      h1: 'Clavier Arabe en Ligne - Tapez en العربية (المغرب)',
      intro: 'Tapez du texte arabe instantanément avec support droite-à-gauche complet.',
    },
  },
  'ar-dz': {
    en: {
      title: 'Arabic (Algeria) Keyboard Online - Type Arabic (Algeria) Free | Type-Native',
      description: 'Free online Arabic (Algeria) keyboard. Type in Arabic (Algeria) (العربية (الجزائر)) instantly. No download required. Works on all devices.',
      keywords: ["arabic (algeria) keyboard","type arabic (algeria) online","arabic (algeria) typing","العربية (الجزائر)"],
      h1: 'Arabic (Algeria) Keyboard Online - Type in العربية (الجزائر)',
      intro: 'Type Arabic (Algeria) text instantly with full right-to-left support. Free online keyboard for your browser.',
    },
    fr: {
      title: 'Clavier Arabe en Ligne - Écrire en Arabe Gratuit | Type-Native',
      description: 'Clavier arabe gratuit en ligne. Tapez en arabe (العربية (الجزائر)) instantanément. Aucun téléchargement requis.',
      keywords: ["clavier arabe","taper en arabe","clavier arabe en ligne"],
      h1: 'Clavier Arabe en Ligne - Tapez en العربية (الجزائر)',
      intro: 'Tapez du texte arabe instantanément avec support droite-à-gauche complet.',
    },
  },
  'bn-bd': {
    en: {
      title: 'Bengali (Bangladesh) Keyboard Online - Type Bengali (Bangladesh) Free | Type-Native',
      description: 'Free online Bengali (Bangladesh) keyboard. Type in Bengali (Bangladesh) (বাংলা (বাংলাদেশ)) instantly. No download required. Works on all devices.',
      keywords: ["bengali (bangladesh) keyboard","type bengali (bangladesh) online","bengali (bangladesh) typing","বাংলা (বাংলাদেশ)"],
      h1: 'Bengali (Bangladesh) Keyboard Online - Type in বাংলা (বাংলাদেশ)',
      intro: 'Type Bengali (Bangladesh) text instantly with our free online keyboard. No installation needed - works directly in your browser.',
    },
    fr: {
      title: 'Clavier Bengali en Ligne - Écrire en Bengali Gratuit | Type-Native',
      description: 'Clavier bengali gratuit en ligne. Tapez en bengali (বাংলা (বাংলাদেশ)) instantanément. Aucun téléchargement requis.',
      keywords: ["clavier bengali","taper en bengali","clavier bengali en ligne"],
      h1: 'Clavier Bengali en Ligne - Tapez en বাংলা (বাংলাদেশ)',
      intro: 'Tapez du texte bengali instantanément avec notre clavier en ligne gratuit. Fonctionne sur tous les appareils.',
    },
  },
  'zh-tw': {
    en: {
      title: 'Chinese (Taiwan) Keyboard Online - Type Chinese (Taiwan) Free | Type-Native',
      description: 'Free online Chinese (Taiwan) keyboard. Type in Chinese (Taiwan) (中文 (台灣)) instantly. No download required. Works on all devices.',
      keywords: ["chinese (taiwan) keyboard","type chinese (taiwan) online","chinese (taiwan) typing","中文 (台灣)"],
      h1: 'Chinese (Taiwan) Keyboard Online - Type in 中文 (台灣)',
      intro: 'Type Chinese (Taiwan) text instantly with our free online keyboard. No installation needed - works directly in your browser.',
    },
    fr: {
      title: 'Clavier Chinois en Ligne - Écrire en Chinois Gratuit | Type-Native',
      description: 'Clavier chinois gratuit en ligne. Tapez en chinois (中文 (台灣)) instantanément. Aucun téléchargement requis.',
      keywords: ["clavier chinois","taper en chinois","clavier chinois en ligne"],
      h1: 'Clavier Chinois en Ligne - Tapez en 中文 (台灣)',
      intro: 'Tapez du texte chinois instantanément avec notre clavier en ligne gratuit. Fonctionne sur tous les appareils.',
    },
  },
  'iu': {
    en: {
      title: 'Inuktitut Keyboard Online - Type Inuktitut Free | Type-Native',
      description: 'Free online Inuktitut keyboard. Type in Inuktitut (ᐃᓄᒃᑎᑐᑦ) instantly. No download required. Works on all devices.',
      keywords: ["inuktitut keyboard","type inuktitut online","inuktitut typing","ᐃᓄᒃᑎᑐᑦ"],
      h1: 'Inuktitut Keyboard Online - Type in ᐃᓄᒃᑎᑐᑦ',
      intro: 'Type Inuktitut text instantly with our free online keyboard. No installation needed - works directly in your browser.',
    },
    fr: {
      title: 'Clavier Inuktitut en Ligne - Écrire en Inuktitut Gratuit | Type-Native',
      description: 'Clavier inuktitut gratuit en ligne. Tapez en inuktitut (ᐃᓄᒃᑎᑐᑦ) instantanément. Aucun téléchargement requis.',
      keywords: ["clavier inuktitut","taper en inuktitut","clavier inuktitut en ligne"],
      h1: 'Clavier Inuktitut en Ligne - Tapez en ᐃᓄᒃᑎᑐᑦ',
      intro: 'Tapez du texte inuktitut instantanément avec notre clavier en ligne gratuit. Fonctionne sur tous les appareils.',
    },
  },
};

export function getPageMetadata(
  languageCode: LanguageCode,
  uiLanguage: 'en' | 'fr'
): PageMetadata {
  return pageMetadata[languageCode]![uiLanguage];
}
