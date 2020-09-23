import { useEffect, useState } from 'react';
import { get } from '../util/get';

interface UserResponse {
	login: string;
	id: number;
	avatar_url: string;
	name: string | null;
	bio: string | null;
}

interface UserResult {
	id: number;
	name: string | null;
	login: string;
	description: string | null;
	avatarUrl: string;
}

interface UseFetchUser {
	result?: UserResult;
	loading: boolean;
	error: string | null;
}

const fetchUser = async (login: string): Promise<UserResult> => {
	const body: UserResponse = await get(
		`https://api.github.com/users/${login}`
	);

	// we can just force TS to use the values, as we handle errors in hook below
	// ideally we would actually check the fields we need
	const user: UserResult = {
		id: body.id,
		login: body.login,
		name: body.name,
		description: body.bio,
		avatarUrl: body.avatar_url,
	};

	return user;
};

export const useFetchUser = (login: string): UseFetchUser => {
	const [result, setResult] = useState<UserResult | undefined>(undefined);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		setLoading(true);

		fetchUser(login)
			.then(result => {
				setResult(result);
			})
			.catch(error => {
				setError(error.message);
			})
			.finally(() => {
				setLoading(false);
			});
	}, [login]);

	return { result, loading, error };
};
