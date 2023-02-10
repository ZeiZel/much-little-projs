import React, { useMemo, useRef, useState } from 'react';
import styles from './Posts.module.scss';
import { PostFilter } from '@/components';
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

	// состояние селекта и строки поиска
	const [filter, setFilter] = useState<IFilter>({ query: '', sort: 'title' });

	// получаем отсортированный массив
	const sortedPosts = useMemo<IPost[]>(() => {
		return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
	}, [filter.sort, posts]);

	// сортируем массив по строке поиска
	const sortedAndSearchedPosts = useMemo<IPost[]>(() => {
		return sortedPosts.filter(post =>
			post.title.toLowerCase().includes(filter.query.toLowerCase()),
		);
	}, [filter.query, sortedPosts]);

	const createPost = (newPost: IPost): void => {
		setPosts([...posts, newPost]);
	};

	const removePost = (post: IPost): void => {
		setPosts(posts.filter(p => p.id !== post.id));
	};

	return (
		<div className={styles.wrapper}>
			<PostForm create={createPost} />
			<PostFilter filter={filter} setFilter={setFilter} />
			<PostList className={styles.list} posts={sortedAndSearchedPosts} remove={removePost} />
		</div>
	);
};
