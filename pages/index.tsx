import Link from 'next/link';
import React from 'react';
import { Button } from '@/components';
import styles from '../styles/Home.module.scss';
import { withLayout } from '@/layout/Layout';

function Home() {
	return (
		<div className={styles.wrapper}>
			<h1>React фундаментальный</h1>
			<div className={styles.links}>
				<Link href={'fundamentals/state'}>
					<Button buttonType={'purple'}>Состояния React</Button>
				</Link>
				<Link href={'fundamentals/controlledInput'}>
					<Button buttonType={'purple'}>Управляемый инпут</Button>
				</Link>
				<Link href={'fundamentals/classCounter'}>
					<Button buttonType={'purple'}>Классовый компонент</Button>
				</Link>
				<Link href={'fundamentals/postsPage'}>
					<Button buttonType={'purple'}>Посты</Button>
				</Link>
			</div>
		</div>
	);
}

export default Home;
