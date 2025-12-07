'use client';

import { EditorContainer } from '@/components/editor/EditorContainer';
import { LanguageContent } from '@/components/content/LanguageContent';
import type { KeyboardLayout } from '@/types/keyboard';
import type { LanguagePageContent } from '@/data/content/types';
import { languageInfo } from '@/data/layouts';

interface KeyboardPageClientProps {
  layout: KeyboardLayout;
  uiLanguage: 'en' | 'fr';
  h1: string;
  intro: string;
  content?: LanguagePageContent | null;
}

export function KeyboardPageClient({
  layout,
  uiLanguage,
  h1,
  intro,
  content,
}: KeyboardPageClientProps) {
  const info = languageInfo[layout.id]!;

  return (
    <main className="container mx-auto px-4 py-6 sm:py-8">
      {/* Header Section */}
      <header className="mb-6 sm:mb-8 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
          {h1}
        </h1>
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
          {intro}
        </p>
      </header>

      {/* Main Editor */}
      <section className="mb-8 sm:mb-12">
        <EditorContainer key={layout.id} layout={layout} />
      </section>

      {/* Language Info Section */}
      <section className="max-w-3xl mx-auto">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">
          {uiLanguage === 'en' ? `About ${info.name}` : `À propos du ${info.name}`}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
          <div className="bg-muted rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-primary">{info.speakers}</div>
            <div className="text-sm text-muted-foreground">
              {uiLanguage === 'en' ? 'Speakers' : 'Locuteurs'}
            </div>
          </div>
          <div className="bg-muted rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-primary">{info.countries}</div>
            <div className="text-sm text-muted-foreground">
              {uiLanguage === 'en' ? 'Countries' : 'Pays'}
            </div>
          </div>
          <div className="bg-muted rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-primary">{info.script}</div>
            <div className="text-sm text-muted-foreground">
              {uiLanguage === 'en' ? 'Script' : 'Écriture'}
            </div>
          </div>
          <div className="bg-muted rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-primary uppercase">{info.direction}</div>
            <div className="text-sm text-muted-foreground">
              {uiLanguage === 'en' ? 'Direction' : 'Direction'}
            </div>
          </div>
        </div>

        {/* Features */}
        <h3 className="text-lg font-semibold mb-3">
          {uiLanguage === 'en' ? 'Features' : 'Fonctionnalités'}
        </h3>
        <ul className="grid sm:grid-cols-2 gap-2 text-muted-foreground">
          <li className="flex items-center gap-2">
            <span className="text-green-500">✓</span>
            {uiLanguage === 'en' ? 'Virtual keyboard with touch support' : 'Clavier virtuel avec support tactile'}
          </li>
          <li className="flex items-center gap-2">
            <span className="text-green-500">✓</span>
            {uiLanguage === 'en' ? 'Physical keyboard mapping' : 'Mappage du clavier physique'}
          </li>
          <li className="flex items-center gap-2">
            <span className="text-green-500">✓</span>
            {uiLanguage === 'en' ? 'Auto-save in browser' : 'Sauvegarde automatique'}
          </li>
          <li className="flex items-center gap-2">
            <span className="text-green-500">✓</span>
            {uiLanguage === 'en' ? 'Copy to clipboard' : 'Copier dans le presse-papiers'}
          </li>
          <li className="flex items-center gap-2">
            <span className="text-green-500">✓</span>
            {uiLanguage === 'en' ? 'Search Google, YouTube, Amazon & Twitter' : 'Rechercher sur Google, YouTube, Amazon et Twitter'}
          </li>
          <li className="flex items-center gap-2">
            <span className="text-green-500">✓</span>
            {uiLanguage === 'en' ? 'No installation required' : 'Aucune installation requise'}
          </li>
        </ul>
      </section>

      {/* Extended SEO Content - 1000+ words educational content */}
      {content && <LanguageContent content={content} />}
    </main>
  );
}
