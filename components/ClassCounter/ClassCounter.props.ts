import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface ClassCounterProps
	extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	children: ReactNode;
	buttonType: 'gray' | 'purple' | 'ghost';
}
