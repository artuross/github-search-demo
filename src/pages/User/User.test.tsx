import React from 'react';
import { shallow } from 'enzyme';
import { User } from './User';
import { StaticRouter, Route } from 'react-router-dom';
import { useFetchUser } from '../../hooks/useFetchUser';

jest.mock('../../hooks/useFetchUser', () => ({
	useFetchUser: jest.fn(),
}));

const createWrapper = (path: string) => {
	return (
		shallow(<Route path={'/user/:user'} component={User} />, {
			wrappingComponent: StaticRouter,
			wrappingComponentProps: {
				location: path,
			},
		})
			// dive into component
			.dive()
			.dive()
			.dive()
	);
};

describe('<User />', () => {
	test('should render Loader when loading = true', () => {
		(useFetchUser as jest.Mock).mockReturnValue({
			loading: true,
			error: null,
			result: undefined,
		});

		const wrapper = createWrapper('/user/test');
		expect(wrapper.find('Loader').exists()).toBeTruthy();
		expect(wrapper.find('Loader').props()).toStrictEqual({});
	});

	test('should render ErrorMessage when error is not null', () => {
		(useFetchUser as jest.Mock).mockReturnValue({
			loading: false,
			error: 'test',
			result: undefined,
		});

		const wrapper = createWrapper('/user/test');
		expect(wrapper.find('ErrorMessage').exists()).toBeTruthy();
		expect(wrapper.find('ErrorMessage').props()).toStrictEqual({
			error: 'test',
		});
	});

	test('should render content', () => {
		(useFetchUser as jest.Mock).mockReturnValue({
			loading: false,
			error: null,
			result: {
				name: 'test',
				avatarUrl: 'https://example.org/avatar.png',
				description: 'This is example description',
			},
		});

		const wrapper = createWrapper('/user/test');
		expect(wrapper.find('UserHeader').exists()).toBeTruthy();
		expect(wrapper.find('UserHeader').props()).toStrictEqual({
			name: 'test',
			avatarUrl: 'https://example.org/avatar.png',
			description: 'This is example description',
		});
	});
});
