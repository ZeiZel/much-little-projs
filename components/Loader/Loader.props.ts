import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface ILoaderProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children: ReactNode;
}
