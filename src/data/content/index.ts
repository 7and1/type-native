import type { LanguagePageContent } from './types';
import type { LanguageCode } from '@/types/keyboard';

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
    const module = await import(`./${uiLang}/${code}`);
    return module.default || module.content;
  } catch (error) {
    // Content file doesn't exist yet (normal during phased rollout)
    console.warn(`Content not found for ${code} (${uiLang})`);
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
  try {
    // Synchronous require for build-time imports
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const module = require(`./${uiLang}/${code}`);
    return module.default || module.content;
  } catch (error) {
    // Content file doesn't exist yet (normal during phased rollout)
    return null;
  }
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
  try {
    require.resolve(`./${uiLang}/${code}`);
    return true;
  } catch {
    return false;
  }
}
