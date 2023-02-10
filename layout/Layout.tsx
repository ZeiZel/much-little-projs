import styles from './Layout.module.scss';
import { LayoutProps } from '@/layout/Layout.props';
import React, { FunctionComponent } from 'react';
import Header from '@/layout/Header/Header';
import Sidebar from '@/layout/Sidebar/Sidebar';
import Footer from '@/layout/Footer/Footer';
import { Button } from '@/components';
import Link from 'next/link';

const Layout = ({ children }: LayoutProps): JSX.Element => {
	return (
		<div className={styles.wrapper}>
			<Header className={styles.header} />

			<Link href={'/'}>
				<Button buttonType={'ghost'}>Обратно</Button>
			</Link>

			<Sidebar className={styles.sidebar} />

			<div className={styles.body}>{children}</div>

			<Footer className={styles.footer} />
		</div>
	);
};

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
	return function withLayoutComponent(props: T): JSX.Element {
		return (
			<Layout>
				<Component {...props} />
			</Layout>
		);
	};
};
