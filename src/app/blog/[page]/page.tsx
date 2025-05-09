// src/app/blog/[page]/page.tsx
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllPosts } from '@/lib/posts';
import PostList from '@/components/post/PostList';
import Pagination from '@/components/common/Pagination';
import { POSTS_PER_PAGE } from '@/lib/paginationUtils';

export async function generateStaticParams() {
	const allPosts = await getAllPosts();
	const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE);

	if (totalPages <= 1) {
		return [];
	}

	const paths = Array.from({ length: totalPages - 1 }, (_, i) => ({
		page: String(i + 2),
	}));
	return paths;
}

export async function generateMetadata({
	params,
}: {
	params: { page: string };
}): Promise<Metadata> {
	const awaitedParams = await params;
	const pageNumber = parseInt(awaitedParams.page, 10);

	if (isNaN(pageNumber) || pageNumber <= 1) {
		return {
			title: '잘못된 페이지 번호',
			description: '요청하신 페이지를 찾을 수 없습니다.',
		};
	}

	const allPosts = await getAllPosts(); // totalPages를 다시 계산해야 함
	const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE);

	if (pageNumber > totalPages) {
		return {
			title: '페이지를 찾을 수 없음',
			description: '요청하신 페이지 번호가 존재하지 않습니다.',
		};
	}

	const title = `기록 모음 - Page ${pageNumber}`;
	const description = `후니훈의 기술 블로그 기록 모음 - ${pageNumber} 페이지`;
	const canonicalUrl = `/blog/${pageNumber}`;

	return {
		title,
		description,
		alternates: {
			canonical: canonicalUrl,
		},
	};
}

export default async function BlogListPageByPageNumber({
	params,
}: {
	params: { page: string };
}) {
	const awaitedParams = await params;
	const currentPageNumber = parseInt(awaitedParams.page, 10);

	if (isNaN(currentPageNumber) || currentPageNumber <= 1) {
		notFound();
	}

	const allPosts = await getAllPosts();
	const totalPosts = allPosts.length;
	const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);

	if (currentPageNumber > totalPages) {
		notFound();
	}

	const startIndex = (currentPageNumber - 1) * POSTS_PER_PAGE;
	const endIndex = startIndex + POSTS_PER_PAGE;
	const postsToShow = allPosts.slice(startIndex, endIndex);

	if (postsToShow.length === 0 && currentPageNumber > 1) {
		notFound();
	}

	return (
		<>
			<h1 className='mb-4 text-3xl font-bold'>기록 모음</h1>
			{postsToShow.length > 0 ? (
				<>
					<PostList posts={postsToShow} />
					{totalPages > 1 && (
						<Pagination
							totalPages={totalPages}
							currentPage={currentPageNumber}
							basePath='/blog'
						/>
					)}
				</>
			) : (
				<p className='mt-8 text-center text-gray-500 dark:text-gray-400'>
					표시할 게시글이 없습니다. (이 메시지는 표시되지 않아야 정상입니다)
				</p>
			)}
		</>
	);
}
