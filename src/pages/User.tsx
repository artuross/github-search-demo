import React, { Fragment, FunctionComponent } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { UserHeader } from '../components/UserHeader';
import { useFetchUser } from '../hooks/useFetchUser';
import { useFetchUserRepositories } from '../hooks/useFetchUserRepositories';
import { TopRepositories } from './User/TopRepositories';

interface Props extends RouteComponentProps<{ user: string }> {}

export const User: FunctionComponent<Props> = ({
	match: {
		params: { user },
	},
}) => {
	const { result, loading, error } = useFetchUser(user);
	const {
		results: repos,
		loading: reposLoading,
		error: reposError,
	} = useFetchUserRepositories(user);

	if (loading) {
		return <div>loading...</div>;
	}

	if (error || result === undefined) {
		return <div>{error}</div>;
	}

	return (
		<Fragment>
			<UserHeader
				name={result.name || result.login}
				avatarUrl={result.avatarUrl}
				description={result.description}
			/>

			<TopRepositories
				loading={reposLoading}
				error={reposError}
				repositiories={repos}
			/>
		</Fragment>
	);
};
