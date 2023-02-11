import { useState } from 'react';

export const useFetching = (callback: Function): [Function, boolean, string] => {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState<string>('');

	const fetching = async (): Promise<void> => {
		try {
			setIsLoading(true);
			await callback();
		} catch (e: unknown) {
			setError(e.message as string);
		} finally {
			setIsLoading(false);
		}
	};

	return [fetching, isLoading, error];
};
