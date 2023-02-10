import React from 'react';
import { State } from '../../page-components/';
import { withLayout } from '@/layout/Layout';

const state = (): JSX.Element => {
	return <State />;
};

export default withLayout(state);
