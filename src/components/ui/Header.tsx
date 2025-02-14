import Link from 'next/link';
import { GitHubIcon } from './icons';
import ThemeToggle from './ThemeToggle';

export default function Header() {
	return (
		<header className='w-full px-4 py-4 md:px-0'>
			<nav className='flex items-center justify-between'>
				<div className='flex gap-6'>
					<Link className='font-medium hover:opacity-80' href='/'>
						home
					</Link>
					<Link className='font-medium hover:opacity-80' href='/blog'>
						blog
					</Link>
				</div>
				<div className='flex items-center gap-6'>
					<a
						href='https://github.com/starcradle101'
						aria-label='GitHub 프로필로 이동하기'
						title='GitHub 프로필로 이동하기'
					>
						<GitHubIcon aria-hidden='true' />
						<span className='sr-only'>GitHub</span>
					</a>
					<ThemeToggle />
				</div>
			</nav>
		</header>
	);
}
