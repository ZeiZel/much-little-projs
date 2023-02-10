import React from 'react';
import { withLayout } from '@/layout/Layout';
import { Posts } from '@/page-components/Posts/Posts';

const postsPage = () => {
	return <Posts />;
};

export default withLayout(postsPage);
