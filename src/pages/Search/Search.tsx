import React, { Fragment, FunctionComponent } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { UserCard } from '../../components/UserCard';
import { useFetchUsers } from '../../hooks/useFetchUsers';
import { Alert } from '../../components/Alert';
import styles from './Search.module.scss';

interface Props extends RouteComponentProps<{ search: string }> {}

export const Search: FunctionComponent<Props> = ({
	match: {
		params: { search },
	},
}) => {
	const { results, total, hasMore, loading, error } = useFetchUsers(search);

	if (error) {
		return <div>{error}</div>;
	}

	if (loading) {
		return <div>loading...</div>;
	}

	return (
		<Fragment>
			{results.length > 0 && (
				<div className={styles.results}>
					{results.map(user => (
						<UserCard key={user.id} {...user} />
					))}
				</div>
			)}

			{total === 0 && (
				<Alert variant={'info'}>
					It looks like there isn't any user with matching name.
					Perhaps try something else?
				</Alert>
			)}

			{hasMore && (
				<Alert variant={'info'}>
					It looks like there is a total of <b>{total}</b> users
					matching that name. You may want to narrow down your query.
				</Alert>
			)}
		</Fragment>
	);
};
