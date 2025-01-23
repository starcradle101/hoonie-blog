import createMDX from '@next/mdx';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	/* config options here */
	pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
};

const withMDX = createMDX({
	/* 필요한 플러그인 이후 추가
  remarkGfm, rehype...
  */
	options: {
		remarkPlugins: [],
		rehypePlugins: [],
	},
});

export default withMDX(nextConfig);
