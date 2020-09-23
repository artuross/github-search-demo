import React, { useCallback, useState, VoidFunctionComponent } from 'react';
import { generateSearchUri } from '../../util/url';
import { Button } from '../form/Button';
import { FormGroup } from '../form/FormGroup';
import { SearchInput } from '../form/SearchInput';
import { Container } from './Container';
import styles from './Header.module.scss';

interface Props {}

export const Header: VoidFunctionComponent<Props> = () => {
	const [search, setSearch] = useState('');

	const onChange = useCallback(evt => setSearch(evt.currentTarget.value), []);

	return (
		<div className={styles.container}>
			<Container>
				<FormGroup>
					<SearchInput value={search} onChange={onChange} />
					<Button to={generateSearchUri(search)} text={'Search'} />
				</FormGroup>
			</Container>
		</div>
	);
};
