import React, { VoidFunctionComponent } from 'react';
import styles from './RepositoryCard.module.scss';

interface Props {
	name: string;
	url: string;
}

export const RepositoryCard: VoidFunctionComponent<Props> = ({ name, url }) => {
	return (
		<div className={styles.container}>
			<a className={styles.link} href={url}>
				{name}
			</a>
		</div>
	);
};
