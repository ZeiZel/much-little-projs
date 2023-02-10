import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import { IPost } from '@/page-components/Posts/Posts.interface';

export interface PostListProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	remove: (post: IPost) => void;
	posts: IPost[];
}
