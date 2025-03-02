import type { Metadata } from 'next';
import { GitHubIcon, MailIcon } from '@/components/ui/icons';
import { getRecentPosts } from '@/lib/posts';
import PostList from '@/components/post/PostList';

export const metadata: Metadata = {
	title: 'hoonie-blog',
	description: '코드 너머를 바라보는 후니훈의 블로그',
	verification: {
		google: 'hE6ljPDz_HkblzT3uh9NlwS0VuRTzedUsLg8kKSbaMQ',
	},
};

const socialLinks = [
	{
		icon: <GitHubIcon />,
		href: 'https://github.com/starcradle101',
		text: 'GitHub',
	},
	{
		icon: <MailIcon />,
		href: 'mailto:dreamerdev12@gmail.com',
		text: 'dreamerdev12@gmail.com',
	},
];

export default async function Home() {
	const recentPosts = await getRecentPosts();

	return (
		<>
			<section className='mb-8'>
				<h1 className='mb-4 text-3xl font-bold md:text-4xl'>hoonie-blog</h1>
				<p className='text-lg'>
					기록하는 개발자 <strong className='font-semibold'>후니훈</strong>
					입니다
				</p>
			</section>

			<article className='mb-16'>
				<p className='leading-loose tracking-wide break-keep'>
					매일 수많은 사람들이 웹을 통해 다양한 서비스를 이용합니다. 저는 이러한
					일상적인 경험들을 더 나은 방향으로 변화시키는 프론트엔드 개발자를
					꿈꾸고 있습니다. 다양한 커뮤니티 활동을 통해 인사이트를 얻고, 지식
					공유를 통해 함께 성장하는 개발 문화를 만들어가고자 합니다.
				</p>
			</article>

			<address className='mb-16'>
				<h2 className='mb-4 text-2xl font-semibold'>Contact</h2>
				<ul className='space-y-3'>
					{socialLinks.map((link, index) => (
						<li key={index} className='flex items-center gap-3'>
							<span className='text-gray-700 dark:text-gray-200'>
								{link.icon}
							</span>
							<a href={link.href} className='hover:underline hover:opacity-80'>
								{link.text}
							</a>
						</li>
					))}
				</ul>
			</address>

			<section>
				<h2 className='text-2xl font-semibold'>최신글</h2>
				<PostList posts={recentPosts} />
			</section>
		</>
	);
}
