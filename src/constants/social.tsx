import type { ReactElement } from 'react';
import { GitHubIcon, MailIcon } from '@/components/ui/icons';

export interface SocialLink {
	icon: ReactElement;
	href: string;
	text: string;
}

export const SOCIAL_LINKS: SocialLink[] = [
	{
		icon: <GitHubIcon />,
		href: 'https://github.com/starcradle101',
		text: 'GitHub',
	},
	{
		icon: <MailIcon />,
		href: 'mailto:dreamerdev12@gmail.com',
		text: 'dreamerdev12@gmail.com',
	},
];
