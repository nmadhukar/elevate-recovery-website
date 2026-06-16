import type { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/site-data'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url
  const now = new Date()

  const routes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] }[] = [
    { path: '/', priority: 1, changeFrequency: 'weekly' },
    { path: '/programs', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/admissions', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/locations', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/about', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/contact', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/privacy-policy', priority: 0.3, changeFrequency: 'yearly' },
    { path: '/privacy', priority: 0.3, changeFrequency: 'yearly' },
    { path: '/termsandconditions', priority: 0.3, changeFrequency: 'yearly' },
    { path: '/hipaa', priority: 0.3, changeFrequency: 'yearly' },
  ]

  return routes.map((route) => ({
    url: `${base}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}
