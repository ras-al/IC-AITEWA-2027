import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
      },
    ],
    sitemap: 'https://ic-aitewa-2027.tkmce.ac.in/sitemap.xml',
    host: 'https://ic-aitewa-2027.tkmce.ac.in',
  }
}
