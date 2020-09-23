import React, { FunctionComponent } from 'react';
import { RepositoryCard } from '../../components/RepositoryCard';
import { UserRepository } from '../../hooks/useFetchUserRepositories';
import styles from './TopRepositories.module.scss';

interface Props {
	loading: boolean;
	error: string | null;
	repositiories: UserRepository[];
}

export const TopRepositories: FunctionComponent<Props> = ({
	loading,
	error,
	repositiories,
}) => {
	if (error) {
		return <div>{error}</div>;
	}

	if (loading) {
		return <div>loading...</div>;
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
