import React from 'react';
import { BrowserRouter, Switch, Route as PublicRoute } from 'react-router-dom';

import Layout from '../Layout/Layout';
import HomePage from '../HomePage/HomePage';
import CreateBlog from '../Blog/CreateBlog/CreateBlog';
import Blog from '../Blog/Blog';
import PrivateRoute from '../../AppRouter/PrivateRoute';

const MainApp = () => (
	<BrowserRouter>
		<Layout>
			<Switch>
				<PublicRoute exact path="/" component={HomePage} />
				<PrivateRoute path="/create" component={CreateBlog} />
				<PrivateRoute path="/blog" component={Blog} />
			</Switch>
		</Layout>
	</BrowserRouter>
);

export default MainApp;
