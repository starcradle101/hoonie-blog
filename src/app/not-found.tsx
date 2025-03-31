import Link from 'next/link';

export default function NotFound() {
	return (
		<section
			className='flex flex-1 flex-col items-center justify-center px-4 text-center'
			aria-label='페이지를 찾을 수 없음'
		>
			<h1 className='mb-4 text-5xl font-bold md:text-6xl' id='not-found-title'>
				404
			</h1>

			<p className='mb-8 text-xl md:text-2xl' id='not-found-description'>
				페이지를 찾을 수 없습니다
			</p>

			<p
				className='mb-8 w-full max-w-[280px] text-base text-gray-600 md:max-w-none md:text-lg dark:text-gray-400'
				id='not-found-detail'
			>
				요청하신 페이지가 삭제되었거나 주소가 변경되었을 수 있습니다
			</p>

			<Link
				href='/'
				className='rounded-md bg-black px-6 py-3 font-medium text-white transition-opacity hover:opacity-90 dark:bg-white dark:text-black'
				aria-describedby='not-found-title not-found-description not-found-detail'
			>
				홈으로 돌아가기
			</Link>
		</section>
	);
}
