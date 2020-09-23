import React, { VoidFunctionComponent } from 'react';
import { Avatar } from '../../../components/Avatar';
import styles from './UserHeader.module.scss';

interface Props {
	name: string;
	avatarUrl: string;
	description: string | null;
}

export const UserHeader: VoidFunctionComponent<Props> = ({
	avatarUrl,
	name,
	description,
}) => {
	return (
		<div className={styles.container}>
			<div className={styles.mainContainer}>
				<Avatar src={avatarUrl} alt={name} variant={'large'} />
				<span className={styles.name}>{name}</span>
			</div>

			{description && (
				<span className={styles.description}>{description}</span>
			)}
		</div>
	);
};
