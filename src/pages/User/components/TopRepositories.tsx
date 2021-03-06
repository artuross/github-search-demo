import React, { VoidFunctionComponent } from 'react';
import { ErrorMessage } from '../../../components/ErrorMessage';
import { Loader } from '../../../components/Loader';
import { RepositoryCard } from '../../../components/RepositoryCard';
import { UserRepository } from '../../../hooks/useFetchUserRepositories';
import { ApiError } from '../../../util/apiError';
import styles from './TopRepositories.module.scss';

interface Props {
	loading: boolean;
	error: ApiError | Error | null;
	repositiories: UserRepository[];
}

export const TopRepositories: VoidFunctionComponent<Props> = ({
	loading,
	error,
	repositiories,
}) => {
	if (error) {
		return <ErrorMessage error={error} />;
	}

	if (loading) {
		return <Loader delayMs={500} />;
	}

	if (repositiories.length === 0) {
		return (
			<div className={styles.container}>
				<i>this user doesn't have any public repositories</i>
			</div>
		);
	}

	return (
		<div className={styles.container}>
			<h2 className={styles.header}>Top repositories</h2>

			{repositiories.map(repo => (
				<RepositoryCard key={repo.id} name={repo.name} url={repo.url} />
			))}
		</div>
	);
};
