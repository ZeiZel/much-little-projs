import React from 'react';
import { useState } from 'react';
import styles from './State.module.scss';
import cn from 'classnames';
import Link from 'next/link';

export const State = (): JSX.Element => {
	let [counter, setCounter] = useState<number>(0);

	return (
		<div>
			<Link href={'/'}>
				<button>Обратно</button>
			</Link>
			<div className={styles.wrapper}>
				<h2 className={styles.title}>Счётчик:</h2>
				<h1 className={styles.num}>{counter}</h1>
				<button className={styles.reduce} onClick={() => setCounter(counter--)}>
					Уменьшить
				</button>
				<button className={styles.increase} onClick={() => setCounter(counter++)}>
					Увеличить
				</button>
			</div>
		</div>
	);
};
