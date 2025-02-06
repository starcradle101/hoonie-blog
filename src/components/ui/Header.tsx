import Link from 'next/link';
import { GitHubIcon } from './icons';
import ThemeToggle from './ThemeToggle';

export default function Header() {
	return (
		<header className='sticky top-0 z-10 flex w-full items-center justify-between border-b-2 backdrop-blur-md'>
			<div className='mx-auto flex max-w-3xl grow justify-between p-4'>
				<Link className='text-2xl font-semibold' href='/'>
					hoonie-blog
				</Link>
				<nav className='flex items-center gap-4'>
					<Link className='font-medium' href='/'>
						home
					</Link>
					<Link className='font-medium' href='/blog'>
						blog
					</Link>
					<a
						href='https://github.com/starcradle101'
						aria-label='GitHub 프로필로 이동하기'
						title='GitHub 프로필로 이동하기'
					>
						<GitHubIcon aria-hidden='true' />
						<span className='sr-only'>GitHub</span>
					</a>
					<ThemeToggle />
				</nav>
			</div>
		</header>
	);
}
