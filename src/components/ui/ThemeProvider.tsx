'use client';
import { createContext, useContext, useState } from 'react';

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

	const toggleTheme = () => {
		const newTheme = theme === 'light' ? 'dark' : 'light';
		setTheme(newTheme);
		document.cookie = `theme=${newTheme}; path=/`;
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
