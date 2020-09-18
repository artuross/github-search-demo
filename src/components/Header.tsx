import React, { useCallback, useState } from 'react';
import { generateSearchUri } from '../util/url';
import { Button } from './form/Button';
import { FormGroup } from './form/FormGroup';
import { SearchInput } from './form/SearchInput';
import styles from './Header.module.scss';
import { Container } from './layout/Container';

interface Props {}

export const Header: React.FunctionComponent<Props> = () => {
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
