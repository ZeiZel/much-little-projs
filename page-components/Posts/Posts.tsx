import React, { useEffect, useMemo, useRef, useState } from 'react';
import styles from './Posts.module.scss';
import { Button, Loader, Modal, Pagination, PostFilter } from '@/components';
import { PostForm } from '@/components';
import { PostList } from '@/components';
import { IPost } from '@/page-components/Posts/Posts.interface';
import { IFilter } from '@/components/PostFilter/PostFilter.props';
import { usePosts } from '@/hooks/usePosts';
import PostService from '@/API/post.service';
import { useFetching } from '@/hooks/useFetching';
import { getPageCount, getPagesArray } from '@/utilities/pages.utility';

export const Posts = () => {
	const [posts, setPosts] = useState('');
	const [filter, setFilter] = useState<IFilter>({ query: '', sort: 'title' });
	const [modal, setModal] = useState(false);

	// состояние, которое хранит общее колчиество постов
	const [totalPages, setTotalPages] = useState<number>(0);
	// состояние лимита постов
	const [limit, setLimit] = useState<number>(10);
	// состояние страницы постов
	const [page, setPage] = useState<number>(1);

	const [fetchPosts, isPostLoading, postsError] = useFetching(async () => {
		const response = await PostService.getAll(limit, page);
		setPosts(response.data);

		// общее количество постов получаем из хедера запроса
		const totalCount = response.headers['x-total-count'];

		// получаем общее количество страниц
		setTotalPages(getPageCount(totalCount, limit));
	});

	// тут мы будем устанавливать в состояние выбранную страницу пользователя
	const changePage = (page: number) => {
		setPage(page);
	};

	useEffect(() => {
		fetchPosts();
	}, [page]);

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

			{postsError && <h1>Произошла ошибка {postsError}</h1>}

			{isPostLoading ? (
				<div className={styles.loadPosition}>
					<Loader>Идёт загрузка...</Loader>
				</div>
			) : (
				<PostList
					className={styles.list}
					posts={sortedAndSearchedPosts}
					remove={removePost}
				/>
			)}

			<Pagination totalPages={totalPages} page={page} changePage={changePage} />
		</div>
	);
};
