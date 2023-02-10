import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface SelectProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLSelectElement>, HTMLSelectElement> {
	options: { value: string; name: string }[];
	defaultValue: string;
	value: string;
}
