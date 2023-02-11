import React from 'react';
import cn from 'classnames';
import styles from './Loader.module.scss';
import { ILoaderProps } from '@/components/Loader/Loader.props';

export const Loader = ({ children, className }: ILoaderProps) => {
	return <div className={cn(styles.loader, className)}>{children}</div>;
};
