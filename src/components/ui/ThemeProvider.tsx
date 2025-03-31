'use client';
import { createContext, useContext, useState, useEffect } from 'react';
import { THEME, type Theme } from '@/constants/theme';

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
		document.cookie = `${THEME.COOKIE.NAME}=${initialTheme}; max-age=${THEME.COOKIE.MAX_AGE}; ${THEME.COOKIE.OPTIONS}`;
	}, [initialTheme]);

	const toggleTheme = () => {
		const newTheme =
			theme === THEME.VALUES.LIGHT ? THEME.VALUES.DARK : THEME.VALUES.LIGHT;
		setTheme(newTheme);
		document.cookie = `${THEME.COOKIE.NAME}=${newTheme}; max-age=${THEME.COOKIE.MAX_AGE}; ${THEME.COOKIE.OPTIONS}`;
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
