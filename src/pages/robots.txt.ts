import type { APIRoute } from 'astro';

const SITE_URL = 'https://www.seelenruhe.com';

export const GET: APIRoute = async () => {
  const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml`;

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
    }
  });
};
