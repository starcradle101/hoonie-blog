interface IconProps extends React.SVGProps<SVGSVGElement> {
	size?: number;
}

export const ArrowLeftIcon: React.FC<IconProps> = ({
	size = 24,
	className,
	...props
}) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={size}
		height={size}
		viewBox='0 0 24 24'
		fill='none'
		stroke='currentColor'
		strokeWidth='2'
		strokeLinecap='round'
		strokeLinejoin='round'
		className={className}
		{...props}
	>
		<path d='m15 18-6-6 6-6' />
	</svg>
);

export const ArrowRightIcon: React.FC<IconProps> = ({
	size = 24,
	className,
	...props
}) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={size}
		height={size}
		viewBox='0 0 24 24'
		fill='none'
		stroke='currentColor'
		strokeWidth='2'
		strokeLinecap='round'
		strokeLinejoin='round'
		className={className}
		{...props}
	>
		<path d='m9 18 6-6-6-6' />
	</svg>
);
