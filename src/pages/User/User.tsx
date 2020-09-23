import React, { Fragment, VoidFunctionComponent } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { ErrorMessage } from '../../components/ErrorMessage';
import { Loader } from '../../components/Loader';
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
		return <Loader />;
	}

	if (error) {
		return <ErrorMessage error={error} />;
	}

	// we know the values are set
	const userResult = result!;

	return (
		<Fragment>
			<UserHeader
				name={userResult.name || userResult.login}
				avatarUrl={userResult.avatarUrl}
				description={userResult.description}
			/>

			<TopRepositories
				loading={reposLoading}
				error={reposError}
				repositiories={repos}
			/>
		</Fragment>
	);
};
