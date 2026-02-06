import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://worldcaddesign.com';

  const routes = [
    '',
    '/about',
    '/services',
    '/portfolio',
    '/blogs',
    '/careers',
    '/contact',
    '/services/solar-design-service',
    '/services/roofing-design-service',
    '/privacy-policy',
    '/terms-of-service',
    '/refund-policy',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return routes;
}
