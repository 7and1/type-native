import type { LanguagePageContent } from '@/data/content/types';
import { ExternalLink } from 'lucide-react';

interface LanguageContentProps {
  content: LanguagePageContent | null;
}

/**
 * LanguageContent - Displays educational content for keyboard pages
 *
 * This server component renders 1000+ words of unique content including:
 * - Language background and cultural context
 * - Typing tips and tutorials
 * - Use cases and applications
 * - Research data with citations
 * - FAQ section
 *
 * Server-side rendering ensures:
 * - Content in initial HTML (SEO)
 * - No client-side loading delay
 * - Better Core Web Vitals
 */
export function LanguageContent({ content }: LanguageContentProps) {
  // If no content exists yet (phased rollout), don't render anything
  if (!content) {
    return null;
  }

  return (
    <article className="mx-auto max-w-4xl px-4 py-12">
      {/* Content Sections */}
      {content.sections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className="mb-10 scroll-mt-20"
        >
          {section.level === 2 ? (
            <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
              {section.heading}
            </h2>
          ) : (
            <h3 className="mb-3 text-xl font-semibold sm:text-2xl">
              {section.heading}
            </h3>
          )}

          <div
            className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-semibold prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3 prose-p:mb-4 prose-p:leading-relaxed prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-ul:my-4 prose-ul:list-disc prose-ul:pl-6 prose-li:mb-2"
            dangerouslySetInnerHTML={{ __html: section.content }}
          />
        </section>
      ))}

      {/* Research Data Table */}
      {content.research && content.research.length > 0 && (
        <section className="mb-10">
          <h3 className="mb-4 text-xl font-semibold">
            {content.uiLanguage === 'en'
              ? 'Statistics & Data'
              : 'Statistiques et Données'}
          </h3>

          <div className="overflow-x-auto rounded-lg border">
            <table className="w-full table-auto border-collapse">
              <thead>
                <tr className="bg-muted/50">
                  <th className="border-b px-4 py-3 text-left font-semibold">
                    {content.uiLanguage === 'en' ? 'Statistic' : 'Statistique'}
                  </th>
                  <th className="border-b px-4 py-3 text-left font-semibold">
                    {content.uiLanguage === 'en' ? 'Value' : 'Valeur'}
                  </th>
                  <th className="border-b px-4 py-3 text-left font-semibold">
                    Source
                  </th>
                </tr>
              </thead>
              <tbody>
                {content.research.map((data, idx) => (
                  <tr
                    key={idx}
                    className="transition-colors hover:bg-muted/30"
                  >
                    <td className="border-b px-4 py-3 text-muted-foreground">
                      {data.statistic}
                    </td>
                    <td className="border-b px-4 py-3 font-semibold">
                      {data.value}
                    </td>
                    <td className="border-b px-4 py-3">
                      {data.sourceUrl ? (
                        <a
                          href={data.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-primary transition-colors hover:underline"
                        >
                          {data.source}
                          {data.year && ` (${data.year})`}
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      ) : (
                        <span className="text-muted-foreground">
                          {data.source}
                          {data.year && ` (${data.year})`}
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* Sources / Citations Section */}
      {content.research && content.research.length > 0 && (
        <section className="mt-12 border-t pt-6">
          <h3 className="mb-3 text-lg font-semibold">
            {content.uiLanguage === 'en' ? 'Sources' : 'Sources'}
          </h3>
          <ul className="space-y-1 text-sm text-muted-foreground">
            {content.research
              .filter((r) => r.sourceUrl)
              .map((data, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-muted-foreground" />
                  <a
                    href={data.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground hover:underline"
                  >
                    {data.source} - {data.statistic}
                    {data.year && ` (${data.year})`}
                  </a>
                </li>
              ))}
          </ul>
        </section>
      )}
    </article>
  );
}
