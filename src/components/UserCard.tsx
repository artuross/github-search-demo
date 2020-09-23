import React, { VoidFunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { generateUserUri } from '../util/url';
import { Avatar } from './Avatar';
import styles from './UserCard.module.scss';

interface Props {
	login: string;
	avatarUrl: string;
}

export const UserCard: VoidFunctionComponent<Props> = ({
	login,
	avatarUrl,
}) => {
	return (
		<Link className={styles.container} to={generateUserUri(login)}>
			<Avatar src={avatarUrl} alt={login} variant={'small'} />
			<span className={styles.name}>{login}</span>
		</Link>
	);
};
