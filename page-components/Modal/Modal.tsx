import React from 'react';
import { useState } from 'react';
import styles from './Modal.module.scss';
import cn from 'classnames';
import Link from 'next/link';

export const Modal = (): JSX.Element => {
	let [counter, setCounter] = useState<number>(0);

	return (
		<div>
			<Link href={'/'}>
				<button>Обратно</button>
			</Link>
			<div className={styles.wrapper}>
				<button>Модальное окно</button>
			</div>
		</div>
	);
};
