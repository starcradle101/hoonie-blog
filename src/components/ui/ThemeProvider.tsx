'use client';
import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

type ThemeContextType = {
	theme: Theme;
	toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
	const [theme, setTheme] = useState<Theme | undefined>(undefined);

	useEffect(() => {
		const savedTheme = localStorage.getItem('theme') as Theme | null;
		const prefersDark = window.matchMedia(
			'(prefers-color-scheme: dark)',
		).matches;

		const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
		setTheme(initialTheme);
		document.documentElement.classList.toggle('dark', initialTheme === 'dark');
	}, []);

	const toggleTheme = () => {
		if (!theme) return;

		const newTheme = theme === 'light' ? 'dark' : 'light';
		setTheme(newTheme);
		document.documentElement.classList.toggle('dark');
		localStorage.setItem('theme', newTheme);
	};

	if (theme === undefined) return null;

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
}

export function useTheme() {
	const context = useContext(ThemeContext);
	if (context === undefined) {
		throw new Error('useTheme must be used within a ThemeProvider');
	}
	return context;
}
