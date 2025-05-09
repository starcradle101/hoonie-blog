export const POSTS_PER_PAGE = 5;
export const MAX_VISIBLE_PAGES = 5;

export const getPaginationNumbers = (
	currentPage: number,
	totalPages: number,
	visiblePageCount: number = MAX_VISIBLE_PAGES,
): (number | '...')[] => {
	if (totalPages <= visiblePageCount) {
		return Array.from({ length: totalPages }, (_, i) => i + 1);
	}

	const halfVisible = Math.floor(visiblePageCount / 2);
	let startPage = Math.max(1, currentPage - halfVisible);
	const endPage = Math.min(totalPages, startPage + visiblePageCount - 1);

	if (endPage - startPage + 1 < visiblePageCount) {
		startPage = Math.max(1, endPage - visiblePageCount + 1);
	}

	const pages: (number | '...')[] = [];

	const currentGroup = Math.ceil(currentPage / visiblePageCount);
	const groupStartPage = (currentGroup - 1) * visiblePageCount + 1;
	const groupEndPage = Math.min(currentGroup * visiblePageCount, totalPages);

	for (let i = groupStartPage; i <= groupEndPage; i++) {
		pages.push(i);
	}

	return pages;
};

export const getCurrentPageFromQuery = (
	pageQuery: string | string[] | undefined,
	totalPages: number,
): number => {
	let page = 1;
	if (pageQuery) {
		const parsedPage = parseInt(
			Array.isArray(pageQuery) ? pageQuery[0] : pageQuery,
			10,
		);
		if (!isNaN(parsedPage) && parsedPage > 0) {
			page = parsedPage;
		}
	}

	if (page > totalPages && totalPages > 0) {
		return totalPages;
	}
	if (page <= 0 && totalPages > 0) {
		return 1;
	}
	return page;
};
