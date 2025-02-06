'use client';

import { useTheme } from './ThemeProvider';
import { MoonIcon, SunIcon } from './icons';

export default function ThemeToggle() {
	const { theme, toggleTheme } = useTheme();

	return (
		<button
			onClick={toggleTheme}
			className='cursor-pointer rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-800'
			aria-label={
				theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'
			}
		>
			{theme === 'light' ? <MoonIcon /> : <SunIcon />}
		</button>
	);
}
