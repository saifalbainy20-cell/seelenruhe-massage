import type { APIRoute } from 'astro';
import { languages } from '../lib/i18n';
import servicesData from '../content/services.json';

const SITE_URL = 'https://www.seelenruhe.com';

export const GET: APIRoute = async () => {
  const langs = Object.keys(languages);
  
  // Generate URLs for all pages
  const urls: string[] = [];
  
  // Home pages
  langs.forEach(lang => {
    urls.push(`${SITE_URL}/${lang}`);
  });
  
  // Services index pages
  langs.forEach(lang => {
    urls.push(`${SITE_URL}/${lang}/services`);
  });
  
  // Individual service pages
  langs.forEach(lang => {
    servicesData.forEach(service => {
      urls.push(`${SITE_URL}/${lang}/services/${service.id}`);
    });
  });
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${url}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600'
    }
  });
};
