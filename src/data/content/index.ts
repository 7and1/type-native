import type { LanguagePageContent } from './types';
import type { LanguageCode } from '@/types/keyboard';

type ContentModule = {
  default?: LanguagePageContent;
  content?: LanguagePageContent;
};

const eagerContentModules = import.meta.glob<ContentModule>(
  './{en,fr}/*.ts',
  { eager: true }
);

const resolveContentModule = (mod?: ContentModule) => {
  if (!mod) return null;
  return mod.default || mod.content || null;
};

/**
 * Get language content for a specific language and UI language
 *
 * This function dynamically imports content files to enable code splitting.
 * Only the content for the current page is loaded, not all 218 files.
 *
 * @param code - Language code (e.g., 'ar', 'ru', 'ja')
 * @param uiLang - UI language ('en' or 'fr')
 * @returns Language content or null if not found
 *
 * @example
 * ```ts
 * const content = await getLanguageContent('ar', 'en');
 * if (content) {
 *   console.log(`Loaded ${content.totalWords} words for Arabic`);
 * }
 * ```
 */
export async function getLanguageContent(
  code: LanguageCode,
  uiLang: 'en' | 'fr'
): Promise<LanguagePageContent | null> {
  try {
    // Dynamic import enables code splitting
    // Only this specific language's content is loaded
    const contentModule = await import(`./${uiLang}/${code}`);
    return contentModule.default || (contentModule as ContentModule).content || null;
  } catch (error) {
    // Content file doesn't exist yet (normal during phased rollout)
    console.warn(`Content not found for ${code} (${uiLang})`, error);
    return null;
  }
}

/**
 * Synchronously get language content (for server-side rendering)
 *
 * This function is used during build time when all imports are resolved
 * statically. Better for SEO as content is in initial HTML.
 *
 * @param code - Language code
 * @param uiLang - UI language
 * @returns Language content or null if not found
 *
 * @example
 * ```ts
 * // In a Next.js page component
 * const content = getLanguageContentSync('ar', 'en');
 * ```
 */
export function getLanguageContentSync(
  code: LanguageCode,
  uiLang: 'en' | 'fr'
): LanguagePageContent | null {
  const key = `./${uiLang}/${code}.ts`;
  const mod = eagerContentModules[key];
  return resolveContentModule(mod) ?? null;
}

/**
 * Check if content exists for a language
 *
 * @param code - Language code
 * @param uiLang - UI language
 * @returns true if content file exists
 */
export function hasContent(
  code: LanguageCode,
  uiLang: 'en' | 'fr'
): boolean {
  const key = `./${uiLang}/${code}.ts`;
  return Boolean(eagerContentModules[key]);
}
