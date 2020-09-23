import React, { ComponentProps, VoidFunctionComponent } from 'react';
import { SearchIcon } from '../icons/SearchIcon';
import { Input } from './Input';

interface Props extends ComponentProps<typeof Input> {}

export const SearchInput: VoidFunctionComponent<Props> = props => {
	return (
		<Input Icon={SearchIcon} placeholder={'Search for users'} {...props} />
	);
};
