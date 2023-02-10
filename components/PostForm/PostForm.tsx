import React, { useState } from 'react';
import styles from './PostForm.module.scss';
import { Input } from '@/components/Input/Input';
import { Button } from '@/components';
import { PostFormProps } from '@/components/PostForm/PostForm.props';

export const PostForm = ({ create }: PostFormProps) => {
	const [post, setPost] = useState<{ title: string; body: string }>({
		title: '',
		body: '',
	});

	const addNewPost = (event: any): void => {
		event.preventDefault();

		if (post.body.length === 0 || post.title.length === 0) {
			return;
		}

		const newPost = {
			...post,
			id: `${Date.now()}`,
		};

		// вызываем функцию родителя, в которую передаём новый пост
		create(newPost);

		setPost({
			title: '',
			body: '',
		});
	};

	return (
		<div className={styles.formBlock}>
			<form className={styles.form}>
				<Input
					value={post.title}
					onChange={e => setPost({ ...post, title: e.target.value })}
					className={styles.form__input}
					type='text'
					placeholder={'Название поста'}
				/>
				<Input
					value={post.body}
					onChange={e => setPost({ ...post, body: e.target.value })}
					className={styles.form__input}
					type='text'
					placeholder={'Описание поста'}
				/>
				<Button className={styles.form__button} buttonType={'purple'} onClick={addNewPost}>
					Добавить пост
				</Button>
			</form>
		</div>
	);
};
