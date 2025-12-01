import type { LanguageCode } from '@/types/keyboard';
import { languageInfo } from '@/data/layouts';

interface StructuredDataProps {
  languageCode: LanguageCode;
  uiLanguage: 'en' | 'fr';
}

export function StructuredData({ languageCode, uiLanguage }: StructuredDataProps) {
  const info = languageInfo[languageCode]!;
  const baseUrl = 'https://type-native.com';
  const slug = uiLanguage === 'en' ? info.enSlug : info.frSlug;
  const url = `${baseUrl}/${slug}/`;

  // WebApplication Schema
  const webAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: `${info.name} Keyboard Online`,
    url,
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'Any',
    browserRequirements: 'Requires JavaScript',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    featureList: [
      'Virtual keyboard',
      'Physical keyboard mapping',
      'Auto-save to browser',
      'Copy to clipboard',
      'Google search integration',
      'YouTube search integration',
    ],
    inLanguage: [uiLanguage, languageCode],
  };

  // BreadcrumbList Schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: baseUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: `${info.name} Keyboard`,
        item: url,
      },
    ],
  };

  // FAQPage Schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name:
          uiLanguage === 'en'
            ? `How do I type in ${info.name}?`
            : `Comment taper en ${info.name}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            uiLanguage === 'en'
              ? `Click the virtual keys or type on your physical keyboard when the text box is focused. Your keystrokes will be converted to ${info.name} characters automatically.`
              : `Cliquez sur les touches virtuelles ou tapez sur votre clavier physique lorsque la zone de texte est active. Vos frappes seront converties en caractères ${info.name} automatiquement.`,
        },
      },
      {
        '@type': 'Question',
        name:
          uiLanguage === 'en'
            ? 'Is my text saved?'
            : 'Mon texte est-il sauvegardé?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            uiLanguage === 'en'
              ? 'Yes! Your text is automatically saved in your browser and will be restored when you return. We never send your text to any server.'
              : 'Oui! Votre texte est automatiquement sauvegardé dans votre navigateur et sera restauré à votre retour. Nous n\'envoyons jamais votre texte à aucun serveur.',
        },
      },
      {
        '@type': 'Question',
        name:
          uiLanguage === 'en'
            ? 'Does this work on mobile?'
            : 'Cela fonctionne-t-il sur mobile?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            uiLanguage === 'en'
              ? 'Yes! The virtual keyboard is optimized for touch screens and works great on phones and tablets.'
              : 'Oui! Le clavier virtuel est optimisé pour les écrans tactiles et fonctionne parfaitement sur téléphones et tablettes.',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
