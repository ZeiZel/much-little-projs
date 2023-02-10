import React from 'react';
import styles from './Button.module.scss';
import cn from 'classnames';
import { ButtonProps } from './Button.props';

export const Button = ({
	buttonType = 'gray',
	className,
	children,
	...props
}: ButtonProps): JSX.Element => {
	return (
		<button
			className={cn(styles.button, className, {
				[styles.gray]: buttonType == 'gray',
				[styles.ghost]: buttonType == 'ghost',
				[styles.purple]: buttonType == 'purple',
			})}
			{...props}
		>
			{children}
		</button>
	);
};
