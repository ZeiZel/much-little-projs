import { useMemo } from 'react';
import { IPost } from '@/page-components/Posts/Posts.interface';

const useSortedPosts = (posts: IPost[], sort: 'title' | 'body') => {
	return useMemo<IPost[]>(() => {
		return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
	}, [sort, posts]);
};

export const usePosts = (posts: IPost[], sort: 'title' | 'body', query: string) => {
	const sortedPosts = useSortedPosts(posts, sort);

	return useMemo<IPost[]>(() => {
		return sortedPosts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()));
	}, [query, sortedPosts]);
};
