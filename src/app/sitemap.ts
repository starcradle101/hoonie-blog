import type { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/posts';
import { SITE } from '@/constants/site';
import { POSTS_PER_PAGE } from '@/lib/paginationUtils';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const posts = await getAllPosts();

	const blogPosts = posts.map((post) => ({
		url: `${SITE.BASE_URL}/post/${post.slug}`,
		lastModified: post.date,
		changeFrequency: 'weekly' as const,
		priority: 0.6,
	}));

	const numTotalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
	const blogListPages: MetadataRoute.Sitemap = [];

	for (let i = 2; i <= numTotalPages; i++) {
		blogListPages.push({
			url: `${SITE.BASE_URL}/blog/${i}`,
			lastModified: new Date(),
			changeFrequency: 'weekly' as const,
			priority: 0.7,
		});
	}

	return [
		{
			url: SITE.BASE_URL,
			lastModified: new Date(),
			changeFrequency: 'weekly' as const,
			priority: 1.0,
		},
		{
			url: `${SITE.BASE_URL}/blog`,
			lastModified: new Date(),
			changeFrequency: 'weekly' as const,
			priority: 0.8,
		},
		...blogListPages,
		...blogPosts,
	];
}
