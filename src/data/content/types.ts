import type { LanguageCode } from '@/types/keyboard';

/**
 * Research data point with source citation
 * Used for displaying statistics tables with E-E-A-T compliance
 */
export interface ResearchData {
  /** The statistic being measured (e.g., "Total speakers") */
  statistic: string;

  /** The numerical value (e.g., "420 million") */
  value: string;

  /** Source name (e.g., "Ethnologue (2024)") */
  source: string;

  /** Optional URL to source for citation */
  sourceUrl?: string;

  /** Year of data collection */
  year?: string;
}

/**
 * Content section with heading and HTML content
 * Represents a single section (H2 or H3) in the page content
 */
export interface LanguageContentSection {
  /** Unique ID for anchor links (kebab-case, e.g., "about-arabic-language") */
  id: string;

  /** Heading text (e.g., "About the Arabic Language") */
  heading: string;

  /** Heading level (2 for H2, 3 for H3) */
  level: 2 | 3;

  /** HTML content string (includes paragraphs, lists, sub-headings) */
  content: string;

  /** Optional word count for this section (for validation) */
  wordCount?: number;
}

/**
 * Complete content data for a language keyboard page
 * Contains all educational content, research data, and metadata
 */
export interface LanguagePageContent {
  /** Language code (e.g., "ar", "ru", "ja") */
  languageCode: LanguageCode;

  /** UI language (English or French) */
  uiLanguage: 'en' | 'fr';

  /** Research data points with citations */
  research: ResearchData[];

  /** Main content sections (5-7 sections per page) */
  sections: LanguageContentSection[];

  /** Internal links to related keyboard pages */
  internalLinks?: {
    /** Link text (e.g., "Persian keyboard") */
    text: string;

    /** Link href (e.g., "/persian-keyboard/") */
    href: string;

    /** Optional context for link relationships */
    context?: 'related_language_family' | 'related_language' | 'same_region';
  }[];

  /** Total word count across all sections (for validation, should be >= 1000) */
  totalWords: number;

  /** Last updated timestamp (ISO 8601 format) */
  lastUpdated: string;
}
