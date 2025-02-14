import type { MDXComponents } from 'mdx/types';
import PostTitle from './components/post/PostTitle';
import Link from 'next/link';
import Image from 'next/image';
import { highlight } from 'sugar-high';

export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
		wrapper: ({ children }) => (
			<section className='prose prose-sm md:prose-base dark:prose-invert max-w-none break-keep'>
				{children}
			</section>
		),
		code: ({ children, className, ...props }) => {
			if (typeof children === 'string' && !className) {
				return <code {...props}>{children}</code>;
			}
			const codeHTML = highlight(children as string);
			return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
		},
		img: (props) => {
			return (
				<Image
					src={`/images/posts/${props.src}`}
					alt={props.alt || ''}
					width={600}
					height={600}
					quality={75}
					loading='lazy'
					style={{ width: '100%', height: 'auto' }}
				/>
			);
		},
		a: ({ href = '', ...props }) => (
			<Link href={href} target='blank' {...props} />
		),
		PostTitle,
		...components,
	};
}
