import fs from 'fs';
import path from 'path';
import type { Post } from '@/types/posts';

const POSTS_DIR = path.join(process.cwd(), 'src/app/blog/(posts)');

export async function getAllPosts(): Promise<Post[]> {
	const dirs = fs
		.readdirSync(POSTS_DIR, { withFileTypes: true })
		.filter((dirent) => dirent.isDirectory())
		.map((dirent) => dirent.name);

	const posts = await Promise.all(
		dirs.map(async (dir) => {
			const { metadata } = await import(`@/app/blog/(posts)/${dir}/page.mdx`);
			return {
				...metadata,
				slug: dir,
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
