import type { Metadata } from 'next';
import { getAllPosts } from '@/lib/posts';
import PostList from '@/components/post/PostList';

export const metadata: Metadata = {
	title: '기록 모음',
	description: '후니훈의 기록 모음',
	alternates: {
		canonical: '/blog',
	},
};

export default async function BlogPage() {
	const posts = await getAllPosts();

	return (
		<>
			<h1 className='mb-4 text-3xl font-bold'>기록 모음</h1>
			{posts.length > 0 ? (
				<PostList posts={posts} />
			) : (
				<p>아직 작성된 글이 없습니다.</p>
			)}
		</>
	);
}
