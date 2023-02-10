import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import { IPost } from '@/page-components/Posts/Posts.interface';

export interface PostFormProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	create: (newPost: IPost) => void;
}
