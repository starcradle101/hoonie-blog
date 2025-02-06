import { GitHubIcon } from './icons';

export default function Footer() {
	return (
		<footer className='flex flex-col gap-2 py-8'>
			<div className='flex justify-center gap-4'>
				<a
					href='https://github.com/starcradle101'
					aria-label='GitHub 프로필로 이동하기'
					title='GitHub 프로필로 이동하기'
				>
					<GitHubIcon aria-hidden='true' />
					<span className='sr-only'>GitHub</span>
				</a>
			</div>
			<span className='block text-center text-sm break-keep'>
				© 2025. Hoonie.
			</span>
		</footer>
	);
}
