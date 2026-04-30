import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://absfilm.agency'

    return [
        // Homepage — main landing page with all sections
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
            images: [
                `${baseUrl}/images/wedding.avif`,
                `${baseUrl}/images/drone.webp`,
                `${baseUrl}/images/event.avif`,
                `${baseUrl}/images/car-delivery.avif`,
                `${baseUrl}/images/night-lights.avif`,
                `${baseUrl}/portfolio/grand-royal-wedding.avif`,
            ],
        },
        // Anchor sections — helps crawlers understand page structure
        // Services section
        {
            url: `${baseUrl}/#services`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        // Portfolio gallery
        {
            url: `${baseUrl}/#portfolio`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        // Booking / Contact form
        {
            url: `${baseUrl}/#contact`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        // Contact details (location, phone, email, socials)
        {
            url: `${baseUrl}/#contact-details`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.7,
        },
    ]
}