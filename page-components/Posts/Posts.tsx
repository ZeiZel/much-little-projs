import React, { useEffect, useMemo, useRef, useState } from 'react';
import axios from 'axios';
import styles from './Posts.module.scss';
import { Button, Modal, PostFilter } from '@/components';
import { PostForm } from '@/components';
import { PostList } from '@/components';
import { IPost } from '@/page-components/Posts/Posts.interface';
import { IFilter } from '@/components/PostFilter/PostFilter.props';
import { usePosts } from '@/hooks/usePosts';
import PostService from '@/API/post.service';

export const Posts = () => {
	const [posts, setPosts] = useState('');

	const fetchPosts = async () => {
		const posts = await PostService.getAll();
		setPosts(posts);
	};

	useEffect(() => {
		fetchPosts();
	}, []);

	const [filter, setFilter] = useState<IFilter>({ query: '', sort: 'title' });

	const [modal, setModal] = useState(false);

	const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

	const createPost = (newPost: IPost): void => {
		setPosts([...posts, newPost]);

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
