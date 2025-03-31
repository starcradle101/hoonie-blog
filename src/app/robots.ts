import { SITE } from '@/constants/site';
import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: '*',
			allow: '/',
		},
		sitemap: `${SITE.BASE_URL}/sitemap.xml`,
		host: SITE.BASE_URL,
	};
}
