import fs from 'fs';
import path from 'path';
import type { Post } from '@/types/posts';

const POSTS_DIR = path.join(process.cwd(), 'src/content/posts');

export async function getAllPosts(): Promise<Post[]> {
	const files = fs
		.readdirSync(POSTS_DIR)
		.filter((file) => file.endsWith('.mdx'))
		.map((file) => file.replace(/\.mdx$/, ''));

	const posts = await Promise.all(
		files.map(async (slug) => {
			const { metadata } = await import(`@/content/posts/${slug}.mdx`);
			return {
				...metadata,
				slug,
				date: new Date(metadata.date).toISOString().split('T')[0],
			};
		}),
	);

	return posts.sort(
		(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
	);
}

export async function getRecentPosts(limit: number = 3): Promise<Post[]> {
	const allPosts = await getAllPosts();
	return allPosts.slice(0, limit);
}

export async function getPostBySlug(slug: string) {
	try {
		const postModule = await import(`@/content/posts/${slug}.mdx`);
		const metadata = {
			...postModule.metadata,
			slug,
			date: new Date(postModule.metadata.date).toISOString().split('T')[0],
		};

		return {
			postModule,
			metadata,
		};
	} catch (error) {
		if (process.env.NODE_ENV === 'development') {
			console.error(`Failed to load post ${slug}:`, error);
		}
		return null;
	}
}
