import React from 'react';
import { useState } from 'react';
import styles from './State.module.scss';
import cn from 'classnames';
import Link from 'next/link';
import { Button } from '@/components';

export const State = (): JSX.Element => {
	let [counter, setCounter] = useState<number>(0);

	return (
		<div className={styles.wrapper}>
			<h2 className={styles.title}>Счётчик:</h2>
			<h1 className={styles.num}>{counter}</h1>
			<Button
				buttonType={'gray'}
				className={styles.reduce}
				onClick={() => setCounter(counter--)}
			>
				Уменьшить
			</Button>
			<Button
				buttonType={'purple'}
				className={styles.increase}
				onClick={() => setCounter(counter++)}
			>
				Увеличить
			</Button>
		</div>
	);
};
