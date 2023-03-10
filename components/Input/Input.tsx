import { InputProps } from './Input.props';
import styles from './Input.module.scss';
import cn from 'classnames';

export const Input = ({ className, ...props }: InputProps): JSX.Element => {
	// здесь передаём в качестве атрибута ссылку рефа ref={ref}
	return <input className={cn(className, styles.input)} {...props} />;
};
