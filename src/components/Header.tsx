import React from 'react';
import { Button } from './form/Button';
import { FormGroup } from './form/FormGroup';
import { SearchInput } from './form/SearchInput';

import styles from './Header.module.scss';
import { Container } from './layout/Container';

interface Props {}

export const Header: React.FunctionComponent<Props> = ({ children }) => {
	return (
		<div className={styles.container}>
			<Container>
				<FormGroup>
					<SearchInput />
					<Button text={'Search'} />
				</FormGroup>
			</Container>
		</div>
	);
};
