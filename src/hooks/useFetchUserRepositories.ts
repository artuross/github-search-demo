import { useEffect, useState } from 'react';
import { ApiError } from '../util/apiError';
import { get } from '../util/get';

interface UserRepositoriesResponse {
	items: {
		id: number;
		html_url: string;
		name: string;
	}[];
}

export interface UserRepository {
	id: number;
	url: string;
	name: string;
}

interface UseFetchUserRepositories {
	results: UserRepository[];
	loading: boolean;
	error: ApiError | Error | null;
}

const fetchUserRepositories = async (
	login: string
): Promise<UserRepository[]> => {
	const body: UserRepositoriesResponse = await get(
		`https://api.github.com/search/repositories?q=user:${login}&sort=stars&order=desc`
	);

	// we can just force TS to use the values, as we handle errors in hook below
	// ideally we would actually check the fields we need
	const user: UserRepository[] = body.items.map(item => ({
		id: item.id,
		name: item.name,
		url: item.html_url,
	}));

	return user;
};

export const useFetchUserRepositories = (
	login: string
): UseFetchUserRepositories => {
	const [results, setResult] = useState<UserRepository[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<ApiError | Error | null>(null);

	useEffect(() => {
		setLoading(true);

		fetchUserRepositories(login)
			.then(result => {
				// take only top 3
				setResult(result.slice(0, 3));
			})
			.catch(error => {
				setError(error);
			})
			.finally(() => {
				setLoading(false);
			});
	}, [login]);

	return { results, loading, error };
};
