import React from 'react';
import styles from './PostList.module.scss';
import { Button, PostItem } from '@/components';
import cn from 'classnames';
import { PostListProps } from '@/components/PostList/PostList.props';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

export const PostList = ({ remove, posts, className, ...props }: PostListProps) => {
	return (
		<div className={cn(styles.wrapper, className)} {...props}>
			{posts.length ? (
				<TransitionGroup className='post-list'>
					{posts.map(p => (
						<CSSTransition key={p.id} timeout={500} classNames='post'>
							<PostItem remove={remove} post={p} />
						</CSSTransition>
					))}
				</TransitionGroup>
			) : (
				<h2 style={{ textAlign: 'center' }}>Посты не добавлены</h2>
			)}
		</div>
	);
};
