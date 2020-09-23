import { useEffect, useState } from 'react';
import { ApiError } from '../util/apiError';
import { get } from '../util/get';

interface SearchUserResponse {
	total_count: number;
	items: {
		id: number;
		login: string;
		avatar_url: string;
	}[];
}

interface UserSearchResult {
	id: number;
	login: string;
	avatarUrl: string;
}

interface UseFetchUsers {
	results: UserSearchResult[];
	total: number;
	hasMore: boolean;
	loading: boolean;
	error: ApiError | Error | null;
}

const fetchUsers = async (
	search: string
): Promise<[UserSearchResult[], number, boolean]> => {
	const encodedTerm = encodeURIComponent(search);
	const body: SearchUserResponse = await get(
		`https://api.github.com/search/users?q=${encodedTerm}`
	);

	// we can just force TS to use the values, as we handle errors in hook below
	// ideally we would actually check the fields we need
	const total = body.total_count;
	const results = body.items.map(
		(item): UserSearchResult => ({
			id: item.id,
			login: item.login,
			avatarUrl: item.avatar_url,
		})
	);
	const hasMore = total > results.length;

	return [results, total, hasMore];
};

export const useFetchUsers = (search: string): UseFetchUsers => {
	const [results, setResults] = useState<UserSearchResult[]>([]);
	const [total, setTotal] = useState(0);
	const [hasMore, setHasMore] = useState(false);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<ApiError | Error | null>(null);

	useEffect(() => {
		setLoading(true);

		fetchUsers(search)
			.then(([results, total, hasMore]) => {
				setResults(results);
				setTotal(total);
				setHasMore(hasMore);
			})
			.catch(error => {
				setError(error);
			})
			.finally(() => {
				setLoading(false);
			});
	}, [search]);

	return { results, total, hasMore, loading, error };
};
