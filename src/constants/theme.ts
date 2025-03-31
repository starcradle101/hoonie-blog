export type Theme = 'light' | 'dark';

export const THEME = {
	COOKIE: {
		NAME: 'theme',
		MAX_AGE: 7 * 24 * 60 * 60, // 7일
		OPTIONS: 'path=/; SameSite=Lax',
	},
	VALUES: {
		LIGHT: 'light' as const,
		DARK: 'dark' as const,
	},
} as const;
