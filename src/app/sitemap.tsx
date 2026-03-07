import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://bennyh.io',
      lastModified: '2026-03-06',
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://bennyh.io/about',
      lastModified: '2026-03-06',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://bennyh.io/portfolio',
      lastModified: '2026-03-06',
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://bennyh.io/blog',
      lastModified: '2026-03-06',
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: 'https://bennyh.io/resume',
      lastModified: '2026-03-06',
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ]
}