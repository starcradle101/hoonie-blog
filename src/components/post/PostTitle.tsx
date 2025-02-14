interface PostTitleProps {
	title: string;
	date: string;
}

export default function PostTitle({ title, date }: PostTitleProps) {
	const formattedDate = new Date(date).toLocaleDateString('ko-KR', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	});

	return (
		<>
			<h1 className='post-title'>{title}</h1>
			<p className='post-date'>{formattedDate}</p>
		</>
	);
}
