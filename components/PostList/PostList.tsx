import React from 'react';
import styles from './PostList.module.scss';
import { Button, PostItem } from '@/components';
import cn from 'classnames';
import { PostListProps } from '@/components/PostList/PostList.props';

export const PostList = ({ remove, posts, className, ...props }: PostListProps) => {
	return (
		<div className={cn(styles.wrapper, className)} {...props}>
			{/* выводим полностью отфильтрованный конечный массив */}
			{posts.length ? (
				posts.map(p => <PostItem remove={remove} key={p.id} post={p} />)
			) : (
				<h2 style={{ textAlign: 'center' }}>Посты не добавлены</h2>
			)}
		</div>
	);
};
