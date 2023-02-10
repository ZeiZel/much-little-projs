import React from 'react';
import { ControlledInput } from '../../page-components';
import { withLayout } from '@/layout/Layout';

const controlledInput = (): JSX.Element => {
	return <ControlledInput />;
};

export default withLayout(controlledInput);
