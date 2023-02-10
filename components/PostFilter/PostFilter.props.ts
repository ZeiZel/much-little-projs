import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import { IPost } from '@/page-components/Posts/Posts.interface';

export interface IPostFilterProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	filter: IFilter;
	setFilter: (filter: IFilter) => void;
}

export interface IFilter {
	sort: 'title' | 'body';
	query: string;
}
