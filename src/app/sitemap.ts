// src/app/sitemap.ts
import { MetadataRoute } from 'next'
import { siteConfig } from '@/data/shathigroup'
import { ventures } from '@/data/shathigroup'
import { companies } from '@/data/companies'

const YEARLY = 'yearly' as const

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = siteConfig.canonicalUrl

  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: YEARLY,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/cortexio`,
      lastModified: new Date(),
      changeFrequency: YEARLY,
      priority: 0.9,
    },
    // Top-level sections
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: YEARLY,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/careers`,
      lastModified: new Date(),
      changeFrequency: YEARLY,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ceravo`,
      lastModified: new Date(),
      changeFrequency: YEARLY,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/esg`,
      lastModified: new Date(),
      changeFrequency: YEARLY,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/leadership`,
      lastModified: new Date(),
      changeFrequency: YEARLY,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/velorix`,
      lastModified: new Date(),
      changeFrequency: YEARLY,
      priority: 0.8,
    },
    // Subsidiary sections (ventures)
    ...ventures.map(venture => ({
      url: `${baseUrl}${venture.route}`,
      lastModified: new Date(),
      changeFrequency: YEARLY,
      priority: 0.7,
    })),
    // Company pages (from companies data)
    ...companies.map(company => ({
      url: `${baseUrl}/companies/${company.slug}`,
      lastModified: new Date(),
      changeFrequency: YEARLY,
      priority: 0.7,
    })),
    // Engineer pages (under cortex-softsolutions)
    {
      url: `${baseUrl}/companies/cortex-softsolutions/engineers/sarker-adhara`,
      lastModified: new Date(),
      changeFrequency: YEARLY,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/companies/cortex-softsolutions/engineers/maskat-md-mahadi-hassan`,
      lastModified: new Date(),
      changeFrequency: YEARLY,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/companies/cortex-softsolutions/engineers/sm-shahriar-walid`,
      lastModified: new Date(),
      changeFrequency: YEARLY,
      priority: 0.6,
    },
  ]

  return routes
}