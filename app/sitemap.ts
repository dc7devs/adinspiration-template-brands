import { braindInfo } from '@/content/braind';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${braindInfo.site_url}/`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1
    }
  ];
}
