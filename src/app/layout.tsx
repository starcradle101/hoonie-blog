import localFont from 'next/font/local';

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
		<html lang='en' className={pretendard.className}>
			<body className='font-pretendard'>{children}</body>
		</html>
	);
}
