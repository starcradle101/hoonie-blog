import type { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/posts';

export const BASE_URL = 'https://hoonieblog.xyz';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const posts = await getAllPosts();

	const blogPosts = posts.map((post) => ({
		url: `${BASE_URL}/blog/${post.slug}`,
		lastModified: post.date,
		changeFrequency: 'weekly' as const,
		priority: 0.6,
	}));

	return [
		{
			url: BASE_URL,
			lastModified: new Date(),
			changeFrequency: 'weekly' as const,
			priority: 1.0,
		},
		{
			url: `${BASE_URL}/blog`,
			lastModified: new Date(),
			changeFrequency: 'weekly' as const,
			priority: 0.8,
		},
		...blogPosts,
	];
}
