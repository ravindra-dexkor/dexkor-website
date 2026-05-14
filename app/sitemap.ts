import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date('2026-05-14')

  return [
    {
      url: 'https://dexkor.com/',
      lastModified: lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://dexkor.com/terms-of-service',
      lastModified: lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: 'https://dexkor.com/dpa',
      lastModified: lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: 'https://dexkor.com/privacy-policy',
      lastModified: lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}
