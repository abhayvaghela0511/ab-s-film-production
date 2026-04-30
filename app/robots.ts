import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    const baseUrl = 'https://absfilm.agency'

    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/api/', '/_next/', '/private/'],
            },
            {
                // Allow Googlebot full access for rich results & image indexing
                userAgent: 'Googlebot',
                allow: '/',
            },
            {
                // Allow Google image bot to index portfolio/hero images
                userAgent: 'Googlebot-Image',
                allow: ['/images/', '/portfolio/'],
            },
        ],
        sitemap: `${baseUrl}/sitemap.xml`,
        host: baseUrl,
    }
}