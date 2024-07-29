import { braindInfo } from '@/content/braind';
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/'
    },
    sitemap: `${braindInfo.site_url}/sitemap.xml`
  };
}
