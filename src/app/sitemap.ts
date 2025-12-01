import { MetadataRoute } from 'next';
import { languageInfo, languageCodes } from '@/data/layouts';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://type-native.com';

  // Homepage
  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
  ];

  // All keyboard pages (English and French)
  languageCodes.forEach((code) => {
    const info = languageInfo[code]!;

    // English version
    routes.push({
      url: `${baseUrl}/${info.enSlug}/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    });

    // French version
    routes.push({
      url: `${baseUrl}/${info.frSlug}/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    });
  });

  return routes;
}
