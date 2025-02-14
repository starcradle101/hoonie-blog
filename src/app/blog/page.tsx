import { getAllPosts } from '@/lib/posts';
import PostList from '@/components/post/PostList';

export const metadata = {
	title: '블로그',
	description: '기술 블로그 글 목록',
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
