import React from 'react';
import { ClassCounter } from '@/components/ClassCounter/ClassCounter';
import { withLayout } from '@/layout/Layout';

const classCounter = () => {
	return (
		<div>
			<ClassCounter />
		</div>
	);
};

export default withLayout(classCounter);
