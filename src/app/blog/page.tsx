import type { Metadata } from 'next';
import { getAllPosts } from '@/lib/posts';
import PostList from '@/components/post/PostList';
import Pagination from '@/components/common/Pagination';
import { POSTS_PER_PAGE } from '@/lib/paginationUtils';

export const metadata: Metadata = {
	title: '기록 모음',
	description: '후니훈의 기록 모음',
	alternates: {
		canonical: '/blog',
	},
};

export default async function BlogPage() {
	const allPosts = await getAllPosts();
	const totalPosts = allPosts.length;
	const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);
	const currentPage = 1;

	const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
	const endIndex = startIndex + POSTS_PER_PAGE;
	const postsToShow = allPosts.slice(startIndex, endIndex);

	return (
		<>
			<h1 className='mb-4 text-3xl font-bold'>기록 모음</h1>
			{postsToShow.length > 0 ? (
				<>
					<PostList posts={postsToShow} />
					{totalPages > 1 && (
						<Pagination
							totalPages={totalPages}
							currentPage={currentPage}
							basePath='/blog'
						/>
					)}
				</>
			) : (
				<p className='mt-8 text-center text-gray-500 dark:text-gray-400'>
					표시할 게시글이 없습니다.
				</p>
			)}
		</>
	);
}
