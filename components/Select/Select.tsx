import React from 'react';
import cn from 'classnames';
import styles from './Select.module.scss';
import { SelectProps } from '@/components/Select/Select.props';

export const Select = ({
	defaultValue,
	options,
	className,
	value,
	onChange,
	...props
}: SelectProps): JSX.Element => {
	return (
		<select
			value={value}
			onChange={event => onChange(event.target.value)}
			className={styles.select}
		>
			<option disabled value=''>
				{defaultValue}
			</option>
			{options.map(option => (
				<option key={option.value} value={option.value}>
					{option.name}
				</option>
			))}
		</select>
	);
};
