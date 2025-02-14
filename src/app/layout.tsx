import { cookies } from 'next/headers';
import localFont from 'next/font/local';
import { ThemeProvider } from '@/components/ui/ThemeProvider';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import './globals.css';

const pretendard = localFont({
	src: '../fonts/PretendardVariable.woff2',
	display: 'swap',
	variable: '--font-pretendard',
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
				className={`font-pretendard mx-auto flex min-h-dvh max-w-2xl flex-col bg-white text-black transition-colors duration-200 dark:bg-[#121212] dark:text-white`}
			>
				<ThemeProvider initialTheme={initialTheme}>
					<Header />
					<main className='w-full grow px-4 md:px-0'>{children}</main>
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
