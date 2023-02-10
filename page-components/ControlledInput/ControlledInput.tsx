import React from 'react';
import { useState } from 'react';
import styles from './ControlledInput.module.scss';
import cn from 'classnames';
import Link from 'next/link';
import { Button } from '@/components';
import { Input } from '@/components/Input/Input';

export const ControlledInput = (): JSX.Element => {
	let [value, setValue] = useState<string>('Значение');

	return (
		<div className={styles.wrapper}>
			<h1>{value}</h1>
			<Input
				value={value}
				placeholder={'Пиши в меня:)'}
				onChange={e => setValue(e.target.value)}
			/>
		</div>
	);
};
