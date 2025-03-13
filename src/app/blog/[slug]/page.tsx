import { getAllPosts, getPostBySlug } from '@/lib/posts';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { BASE_URL } from '@/app/sitemap';

interface PostPageProps {
	params: Promise<{
		slug: string;
	}>;
}

export async function generateMetadata({
	params,
}: PostPageProps): Promise<Metadata> {
	const paramsData = await params;
	const slug = paramsData.slug;

	const result = await getPostBySlug(slug);

	if (!result) {
		return {
			title: 'Post Not Found',
			description: '게시글이 존재하지 않습니다',
		};
	}

	const { title, description, date } = result.metadata;

	return {
		title,
		description,
		alternates: {
			canonical: `/blog/${slug}`,
		},
		openGraph: {
			title,
			description,
			type: 'article',
			publishedTime: date,
			url: `${BASE_URL}/blog/${slug}`,
		},
	};
}

export async function generateStaticParams() {
	const posts = await getAllPosts();

	return posts.map((post) => ({
		slug: post.slug,
	}));
}

export default async function PostPage({ params }: PostPageProps) {
	const paramsData = await params;
	const slug = paramsData.slug;

	const result = await getPostBySlug(slug);

	if (!result) {
		notFound();
	}

	const PostContent = result.postModule.default;
	return <PostContent />;
}
