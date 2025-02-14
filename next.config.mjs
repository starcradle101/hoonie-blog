import createMDX from '@next/mdx';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeUnwrapImages from 'rehype-unwrap-images';

const nextConfig = {
	/* config options here */
	pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
};

const withMDX = createMDX({
	extension: /\.mdx?$/,
	options: {
		remarkPlugins: [remarkGfm],
		rehypePlugins: [rehypeSlug, rehypeUnwrapImages],
	},
});

export default withMDX(nextConfig);
