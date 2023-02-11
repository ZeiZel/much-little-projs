import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface IPaginationProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	totalPages: number;
	page: number;
	changePage: (page: number) => void;
}
