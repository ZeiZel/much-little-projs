import React, { useState } from 'react';
import styles from './PostFilter.module.scss';
import { IPostFilterProps } from '@/components/PostFilter/PostFilter.props';
import { Input } from '@/components/Input/Input';
import { Divider } from '@/components/Divider/Divider';
import { Select } from '@/components/Select/Select';

export const PostFilter = ({ filter, setFilter }: IPostFilterProps) => {
	return (
		<div className={styles.wrapper}>
			<Input
				className={styles.search}
				placeholder={'Поиск...'}
				value={filter.query}
				onChange={e => setFilter({ ...filter, query: e.target.value })}
			/>

			<Divider />

			<Select
				value={filter.sort}
				onChange={(selectedSort: 'title' | 'body') =>
					setFilter({ ...filter, sort: selectedSort })
				}
				defaultValue={'Сортировка'}
				options={[
					{ value: 'title', name: 'По заголовку' },
					{ value: 'body', name: 'По описанию' },
				]}
			/>
		</div>
	);
};
