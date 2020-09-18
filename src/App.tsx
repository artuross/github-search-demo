import React from 'react';
import { Button } from './components/form/Button';
import { SearchInput } from './components/form/SearchInput';

export const App = () => {
	return (
		<div>
			<SearchInput />
			<Button text={'Search'} />
		</div>
	);
};
