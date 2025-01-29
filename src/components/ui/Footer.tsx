import { GitHubIcon } from './icons';

export default function Footer() {
	return (
		<footer className='flex flex-col gap-2 py-8'>
			<div className='flex justify-center gap-4'>
				<a href='https://github.com/starcradle101'>
					<GitHubIcon />
				</a>
			</div>
			<span className='block text-center text-sm break-keep'>
				© 2025. Hoonie.
			</span>
		</footer>
	);
}
