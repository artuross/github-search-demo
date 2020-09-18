import React, { ComponentProps } from 'react';
import { SearchIcon } from '../icons/SearchIcon';
import { Input } from './Input';

interface Props extends ComponentProps<typeof Input> {}

export const SearchInput: React.FunctionComponent<Props> = props => {
	return (
		<Input Icon={SearchIcon} placeholder={'Search for users'} {...props} />
	);
};
