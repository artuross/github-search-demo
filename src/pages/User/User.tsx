import React, { Fragment, VoidFunctionComponent } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useFetchUser } from '../../hooks/useFetchUser';
import { useFetchUserRepositories } from '../../hooks/useFetchUserRepositories';
import { TopRepositories } from './components/TopRepositories';
import { UserHeader } from './components/UserHeader';

interface Props extends RouteComponentProps<{ user: string }> {}

export const User: VoidFunctionComponent<Props> = ({
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
