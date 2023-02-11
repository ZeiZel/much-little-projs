import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface IModalProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children: ReactNode;
	visible: boolean;
	setVisible: (visible: boolean) => void;
}
