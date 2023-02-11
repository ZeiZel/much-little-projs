import React from 'react';
import styles from './Modal.module.scss';
import cn from 'classnames';
import { IModalProps } from '@/components/Modal/Modal.props';

export const Modal = ({
	children,
	className,
	visible,
	setVisible,
	...props
}: IModalProps): JSX.Element => {
	return (
		<div
			className={cn(styles.modal, className, {
				[styles.active]: visible,
				[styles.disabled]: !visible,
			})}
			onClick={() => setVisible(false)}
		>
			<div className={styles.modal__content} onClick={e => e.stopPropagation()}>
				{children}
			</div>
		</div>
	);
};
