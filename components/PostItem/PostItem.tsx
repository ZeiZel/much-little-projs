import React from 'react';
import styles from './PostItem.module.scss';
import { Button } from '@/components';
import { PostItemProps } from '@/components/PostItem/PostItem.props';
import { Paragraph } from '@/components/Paragraph/Paragraph';
import cn from 'classnames';

export const PostItem = ({ remove, post, className, ...props }: PostItemProps) => {
	return (
		<div className={cn(styles.wrapper, className)} {...props}>
			<div className={styles.post}>
				<div className={styles.post__content}>
					<h2>{post.title}</h2>
					<Paragraph size={'l'}>{post.body}</Paragraph>
				</div>
				<Button
					onClick={() => remove(post)}
					buttonType={'purple'}
					className={styles.post__button}
				>
					Удалить пост
				</Button>
			</div>
		</div>
	);
};
