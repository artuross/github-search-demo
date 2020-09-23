import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Container } from './components/layout/Container';
import { Home } from './pages/Home/Home';
import { Search } from './pages/Search/Search';
import { User } from './pages/User/User';

export const App = () => {
	return (
		<BrowserRouter>
			<Header />

			<Container>
				<Switch>
					<Route exact path={'/'} component={Home} />
					<Route path={'/search/:search'} component={Search} />
					<Route path={'/user/:user'} component={User} />
					<Redirect to={'/'} />
				</Switch>
			</Container>
		</BrowserRouter>
	);
};
