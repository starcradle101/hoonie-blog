import type { Post } from '@/types/posts';
import PostListItem from './PostListItem';

interface PostListProps {
	posts: Post[];
}

export default function PostList({ posts }: PostListProps) {
	return (
		<div className='divide-y divide-gray-700'>
			{posts.map((post) => (
				<PostListItem key={post.slug} post={post} />
			))}
		</div>
	);
}
