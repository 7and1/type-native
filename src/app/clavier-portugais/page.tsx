import { Metadata } from 'next';
import { layouts, languageInfo } from '@/data/layouts';
import { getPageMetadata } from '@/data/metadata';
import { KeyboardPageClient } from '@/components/KeyboardPageClient';
import { StructuredData } from '@/components/seo/StructuredData';

const LANG_CODE = 'pt';
const UI_LANG = 'fr';

const layout = layouts[LANG_CODE]!;
const info = languageInfo[LANG_CODE]!;
const meta = getPageMetadata(LANG_CODE, UI_LANG);

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  keywords: meta.keywords,
  alternates: {
    canonical: `https://type-native.com/${info.frSlug}/`,
    languages: {
      'en': `https://type-native.com/${info.enSlug}/`,
      'fr': `https://type-native.com/${info.frSlug}/`,
      'x-default': `https://type-native.com/${info.enSlug}/`,
    },
  },
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: `https://type-native.com/${info.frSlug}/`,
    siteName: 'Type-Native',
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function Page() {
  return (
    <>
      <StructuredData languageCode={LANG_CODE} uiLanguage={UI_LANG} />
      <KeyboardPageClient
        layout={layout}
        uiLanguage={UI_LANG}
        h1={meta.h1}
        intro={meta.intro}
      />
    </>
  );
}
