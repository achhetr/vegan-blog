import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Layout from '../Layout/Layout';
import Authorisation from '../Authorisation/Authorisation';
import HomePage from '../HomePage/HomePage';
import CreateBlog from '../Blog/CreateBlog/CreateBlog';
import Blog from '../Blog/Blog';

const MainApp = () => {
	const loggedIn = useSelector((state) => state.auth.loggedIn);
	return (
		<BrowserRouter>
			<Layout>
				{!loggedIn ? (
					<Authorisation />
				) : (
					<Switch>
						<Route exact path="/">
							<HomePage />
						</Route>
						<Route path="/create">
							<CreateBlog />
						</Route>
						<Route path="/blog">
							<Blog />
						</Route>
					</Switch>
				)}
			</Layout>
		</BrowserRouter>
	);
};

export default MainApp;
