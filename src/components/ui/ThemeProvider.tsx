'use client';
import { createContext, useContext, useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

type ThemeContextType = {
	theme: Theme;
	toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({
	children,
	initialTheme,
}: {
	children: React.ReactNode;
	initialTheme: Theme;
}) {
	const [theme, setTheme] = useState<Theme>(initialTheme);

	useEffect(() => {
		const maxAge = 7 * 24 * 60 * 60;
		document.cookie = `theme=${initialTheme}; path=/; max-age=${maxAge}; SameSite=Lax`;
	}, [initialTheme]);

	const toggleTheme = () => {
		const newTheme = theme === 'light' ? 'dark' : 'light';
		setTheme(newTheme);
		const maxAge = 7 * 24 * 60 * 60;
		document.cookie = `theme=${newTheme}; path=/; max-age=${maxAge}; SameSite=Lax`;
		document.documentElement.classList.toggle('dark');
	};

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
