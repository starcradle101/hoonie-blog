export interface PostMetadata {
	title: string;
	description: string;
	date: string;
	thumbnailUrl?: string;
}

export interface Post extends PostMetadata {
	slug: string;
}
