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

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang='en'
			className={`${pretendard.className}`}
			suppressHydrationWarning
		>
			<body
				className={`font-pretendard flex min-h-dvh flex-col bg-white text-black transition-colors duration-200 dark:bg-[#121212] dark:text-white`}
			>
				<ThemeProvider>
					<Header />
					<main className='mx-auto w-full max-w-3xl flex-grow p-4'>
						{children}
					</main>
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
