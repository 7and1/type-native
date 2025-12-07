import type { LanguagePageContent } from './types';
import type { LanguageCode } from '@/types/keyboard';

// Static imports for all content files (Next.js compatible)
// English content
import * as en_am from './en/am';
import * as en_ar from './en/ar';
import * as en_bn from './en/bn';
import * as en_da from './en/da';
import * as en_el from './en/el';
import * as en_fa from './en/fa';
import * as en_fi from './en/fi';
import * as en_he from './en/he';
import * as en_hi from './en/hi';
import * as en_hy from './en/hy';
import * as en_ja from './en/ja';
import * as en_ka from './en/ka';
import * as en_ko from './en/ko';
import * as en_nl from './en/nl';
import * as en_no from './en/no';
import * as en_pl from './en/pl';
import * as en_ps from './en/ps';
import * as en_ru from './en/ru';
import * as en_sv from './en/sv';
import * as en_sw from './en/sw';
import * as en_ta from './en/ta';
import * as en_te from './en/te';
import * as en_th from './en/th';
import * as en_ti from './en/ti';
import * as en_tr from './en/tr';
import * as en_uk from './en/uk';
import * as en_ur from './en/ur';
import * as en_vi from './en/vi';
import * as en_yo from './en/yo';

// French content
import * as fr_am from './fr/am';
import * as fr_ar from './fr/ar';
import * as fr_bn from './fr/bn';
import * as fr_da from './fr/da';
import * as fr_el from './fr/el';
import * as fr_fa from './fr/fa';
import * as fr_fi from './fr/fi';
import * as fr_he from './fr/he';
import * as fr_hi from './fr/hi';
import * as fr_hy from './fr/hy';
import * as fr_ja from './fr/ja';
import * as fr_ka from './fr/ka';
import * as fr_ko from './fr/ko';
import * as fr_nl from './fr/nl';
import * as fr_no from './fr/no';
import * as fr_pl from './fr/pl';
import * as fr_ps from './fr/ps';
import * as fr_ru from './fr/ru';
import * as fr_sv from './fr/sv';
import * as fr_sw from './fr/sw';
import * as fr_ta from './fr/ta';
import * as fr_te from './fr/te';
import * as fr_th from './fr/th';
import * as fr_ti from './fr/ti';
import * as fr_tr from './fr/tr';
import * as fr_uk from './fr/uk';
import * as fr_ur from './fr/ur';
import * as fr_vi from './fr/vi';
import * as fr_yo from './fr/yo';

type ContentModule = {
  default?: LanguagePageContent;
  content?: LanguagePageContent;
};

// Content registry
const contentModules: Record<string, ContentModule> = {
  // English
  './en/am.ts': en_am,
  './en/ar.ts': en_ar,
  './en/bn.ts': en_bn,
  './en/da.ts': en_da,
  './en/el.ts': en_el,
  './en/fa.ts': en_fa,
  './en/fi.ts': en_fi,
  './en/he.ts': en_he,
  './en/hi.ts': en_hi,
  './en/hy.ts': en_hy,
  './en/ja.ts': en_ja,
  './en/ka.ts': en_ka,
  './en/ko.ts': en_ko,
  './en/nl.ts': en_nl,
  './en/no.ts': en_no,
  './en/pl.ts': en_pl,
  './en/ps.ts': en_ps,
  './en/ru.ts': en_ru,
  './en/sv.ts': en_sv,
  './en/sw.ts': en_sw,
  './en/ta.ts': en_ta,
  './en/te.ts': en_te,
  './en/th.ts': en_th,
  './en/ti.ts': en_ti,
  './en/tr.ts': en_tr,
  './en/uk.ts': en_uk,
  './en/ur.ts': en_ur,
  './en/vi.ts': en_vi,
  './en/yo.ts': en_yo,
  // French
  './fr/am.ts': fr_am,
  './fr/ar.ts': fr_ar,
  './fr/bn.ts': fr_bn,
  './fr/da.ts': fr_da,
  './fr/el.ts': fr_el,
  './fr/fa.ts': fr_fa,
  './fr/fi.ts': fr_fi,
  './fr/he.ts': fr_he,
  './fr/hi.ts': fr_hi,
  './fr/hy.ts': fr_hy,
  './fr/ja.ts': fr_ja,
  './fr/ka.ts': fr_ka,
  './fr/ko.ts': fr_ko,
  './fr/nl.ts': fr_nl,
  './fr/no.ts': fr_no,
  './fr/pl.ts': fr_pl,
  './fr/ps.ts': fr_ps,
  './fr/ru.ts': fr_ru,
  './fr/sv.ts': fr_sv,
  './fr/sw.ts': fr_sw,
  './fr/ta.ts': fr_ta,
  './fr/te.ts': fr_te,
  './fr/th.ts': fr_th,
  './fr/ti.ts': fr_ti,
  './fr/tr.ts': fr_tr,
  './fr/uk.ts': fr_uk,
  './fr/ur.ts': fr_ur,
  './fr/vi.ts': fr_vi,
  './fr/yo.ts': fr_yo,
};

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
  const mod = contentModules[key];
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
  return Boolean(contentModules[key]);
}
