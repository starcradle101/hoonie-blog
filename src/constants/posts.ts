import path from 'path';

export const POSTS = {
	DIR: path.join(process.cwd(), 'src/content/posts'),
	RECENT_POSTS_LIMIT: 3,
} as const;
