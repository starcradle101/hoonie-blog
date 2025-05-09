// src/components/post/PostListItem.tsx
import Link from 'next/link';
import type { Post } from '@/types/posts';
import { DATE_FORMAT } from '@/constants/date';

interface PostListItemProps {
	post: Post;
}

export default function PostListItem({ post }: PostListItemProps) {
	return (
		<article className='space-y-2 py-3'>
			<Link href={`/post/${post.slug}`}>
				<h2 className='truncate text-xl font-semibold hover:opacity-80'>
					{post.title}
				</h2>
				<p className='truncate text-gray-600 dark:text-gray-400'>
					{post.description}
				</p>
				<time
					className='text-sm text-gray-600 dark:text-gray-400'
					dateTime={post.date}
				>
					{new Date(post.date).toLocaleDateString(
						DATE_FORMAT.LOCALE,
						DATE_FORMAT.OPTIONS,
					)}
				</time>
			</Link>
		</article>
	);
}
