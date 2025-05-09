import Link from 'next/link';
import { ArrowLeftIcon, ArrowRightIcon } from './Icons';
import { getPaginationNumbers, MAX_VISIBLE_PAGES } from '@/lib/paginationUtils';

interface PaginationProps {
	totalPages: number;
	currentPage: number;
	basePath: string;
}

const Pagination: React.FC<PaginationProps> = ({
	totalPages,
	currentPage,
	basePath,
}) => {
	if (totalPages <= 1) {
		return null;
	}

	const pageNumbers = getPaginationNumbers(
		currentPage,
		totalPages,
		MAX_VISIBLE_PAGES,
	);

	const createPageURL = (pageNumber: number | string): string => {
		if (typeof pageNumber === 'number') {
			if (pageNumber === 1) {
				return basePath;
			}
			return `${basePath}/${pageNumber}`;
		}
		return createPageURL(currentPage);
	};

	const isFirstPage = currentPage === 1;
	const isLastPage = currentPage === totalPages;

	const prevPageHref = createPageURL(
		isFirstPage ? currentPage : currentPage - 1,
	);
	const nextPageHref = createPageURL(
		isLastPage ? currentPage : currentPage + 1,
	);

	return (
		<nav
			aria-label='게시글 페이지 네비게이션'
			className='mt-12 flex items-center justify-center space-x-2'
		>
			<Link
				href={prevPageHref}
				aria-disabled={isFirstPage}
				aria-label='이전 페이지로 이동'
				className={`rounded-md p-2 ${
					isFirstPage
						? 'pointer-events-none text-gray-400 dark:text-gray-600'
						: 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
				}`}
			>
				<ArrowLeftIcon size={20} />
			</Link>

			<ul className='flex items-center space-x-1'>
				{pageNumbers.map((page, index) => {
					const isCurrent = page === currentPage;
					if (page === '...') {
						return (
							<li key={`ellipsis-${index}`}>
								<span className='px-3 py-2 text-gray-500 dark:text-gray-400'>
									...
								</span>
							</li>
						);
					}
					return (
						<li key={page}>
							<Link
								href={createPageURL(page as number)}
								aria-current={isCurrent ? 'page' : undefined}
								className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
									isCurrent
										? 'pointer-events-none bg-gray-500 text-white dark:bg-gray-600 dark:text-white'
										: 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
								}`}
							>
								{page}
							</Link>
						</li>
					);
				})}
			</ul>

			<Link
				href={nextPageHref}
				aria-disabled={isLastPage}
				aria-label='다음 페이지로 이동'
				className={`rounded-md p-2 ${
					isLastPage
						? 'pointer-events-none text-gray-400 dark:text-gray-600'
						: 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
				}`}
			>
				<ArrowRightIcon size={20} />
			</Link>
		</nav>
	);
};

export default Pagination;
