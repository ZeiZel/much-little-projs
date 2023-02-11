import React from 'react';
import styles from './Pagination.module.scss';
import { Button } from '@/components';
import cn from 'classnames';
import { IPaginationProps } from '@/components/Pagination/Pagination.props';
import { getPagesArray } from '@/utilities/pages.utility';

export const Pagination = ({ totalPages, page, changePage }: IPaginationProps) => {
	let pagesArray: number[] = getPagesArray(totalPages);

	return (
		<div className={styles.buttonBlock}>
			{pagesArray.map(p => (
				<Button
					onClick={() => changePage(p)}
					key={p}
					className={cn(styles.buttonPage, {
						[styles.buttonPage__current]: page === p,
					})}
					buttonType={'gray'}
				>
					{p}
				</Button>
			))}
		</div>
	);
};
