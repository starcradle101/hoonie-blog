import type { Metadata } from 'next';
import { BASE_URL } from './sitemap';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { cookies } from 'next/headers';
import localFont from 'next/font/local';
import { ThemeProvider } from '@/components/ui/ThemeProvider';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import './globals.css';

export const metadata: Metadata = {
	title: 'hoonie-blog',
	description: '코드 너머를 바라보는 후니훈의 블로그',
	metadataBase: new URL(BASE_URL),
};

const pretendard = localFont({
	src: '../fonts/PretendardVariable.woff2',
	display: 'swap',
});

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const cookieStore = await cookies();
	const theme = cookieStore.get('theme');
	const initialTheme = theme?.value === 'dark' ? 'dark' : 'light';

	return (
		<html
			lang='en'
			className={`${pretendard.className} ${initialTheme === 'dark' ? 'dark' : ''}`}
			suppressHydrationWarning
		>
			<body
				className={`mx-auto flex min-h-dvh max-w-2xl flex-col bg-white text-[#212529] dark:bg-[#121212] dark:text-[#ECECEC]`}
			>
				<ThemeProvider initialTheme={initialTheme}>
					<Header />
					<main className='flex w-full grow flex-col px-4 md:px-0' role='main'>
						{children}
					</main>
					<Footer />
				</ThemeProvider>
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	);
}
