import styles from './Divider.module.scss';
import cn from 'classnames';
import { IDividerProps } from '@/components/Divider/Divider.props';

export const Divider = ({ className, ...props }: IDividerProps): JSX.Element => {
	return <hr className={cn(className, styles.hr)} {...props} />;
};
