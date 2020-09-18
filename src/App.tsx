import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home';

export const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path={'/'} component={Home} />
				{/*<Route path={'/search/:search'} component={Search} />*/}
				{/*<Route path={'/user/:user'} component={User} />*/}
				<Redirect to={'/'} />
			</Switch>
		</BrowserRouter>
	);
};
