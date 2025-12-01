import Link from 'next/link';
import { languageInfo } from '@/data/layouts';
import type { LanguageCode } from '@/types/keyboard';

// Group languages by region/type
const languageGroups = {
  'Middle Eastern': ['ar', 'he', 'fa', 'ur', 'ps'] as LanguageCode[],
  'Cyrillic': ['ru', 'uk'] as LanguageCode[],
  'Asian': ['ja', 'ko', 'th', 'hi', 'bn', 'ta', 'vi'] as LanguageCode[],
  'African': ['am', 'ti'] as LanguageCode[],
  'Other': ['el', 'tr', 'hy', 'ka'] as LanguageCode[],
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/30 mt-auto">
      <div className="container mx-auto px-4 py-8">
        {/* Keyboard Links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mb-8">
          {Object.entries(languageGroups).map(([group, codes]) => (
            <div key={group}>
              <h4 className="font-semibold mb-3 text-sm text-muted-foreground">
                {group}
              </h4>
              <ul className="space-y-1.5">
                {codes.map((code) => {
                  const info = languageInfo[code]!;
                  return (
                    <li key={code}>
                      <Link
                        href={`/${info.enSlug}/`}
                        className="text-sm text-foreground/70 hover:text-foreground transition-colors"
                      >
                        {info.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            {year} Type-Native. Free virtual keyboards for 20+ languages.
          </p>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <span>No tracking. No ads. Privacy-first.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
