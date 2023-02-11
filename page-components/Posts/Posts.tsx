import React, { useMemo, useRef, useState } from 'react';
import styles from './Posts.module.scss';
import { Button, Modal, PostFilter } from '@/components';
import { PostForm } from '@/components';
import { PostList } from '@/components';
import { IPost } from '@/page-components/Posts/Posts.interface';
import { IFilter } from '@/components/PostFilter/PostFilter.props';

export const Posts = () => {
	const [posts, setPosts] = useState<IPost[]>([
		{ id: 'asd1', title: 'Javascript', body: 'Лучший язык на Земле' },
		{ id: 'adsgsa2', title: 'C#', body: 'Хроший язык' },
		{ id: 'fsdagha3', title: 'Python', body: 'Почему бы и нет?' },
	]);

	const [filter, setFilter] = useState<IFilter>({ query: '', sort: 'title' });

	// состояние модального окна
	const [modal, setModal] = useState(false);

	const sortedPosts = useMemo<IPost[]>(() => {
		return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
	}, [filter.sort, posts]);

	const sortedAndSearchedPosts = useMemo<IPost[]>(() => {
		return sortedPosts.filter(post =>
			post.title.toLowerCase().includes(filter.query.toLowerCase()),
		);
	}, [filter.query, sortedPosts]);

	const createPost = (newPost: IPost): void => {
		setPosts([...posts, newPost]);

		// после создания модалки, оно закроется
		setModal(false);
	};

	const removePost = (post: IPost): void => {
		setPosts(posts.filter(p => p.id !== post.id));
	};

	return (
		<div className={styles.wrapper}>
			<Button className={styles.button} buttonType={'purple'} onClick={() => setModal(true)}>
				Создать пост
			</Button>

			<Modal visible={modal} setVisible={setModal}>
				<PostForm create={createPost} />
			</Modal>

			<PostFilter filter={filter} setFilter={setFilter} />

			<PostList className={styles.list} posts={sortedAndSearchedPosts} remove={removePost} />
		</div>
	);
};
