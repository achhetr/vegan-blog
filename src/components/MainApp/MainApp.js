import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from '../Layout/Layout';
import HomePage from '../HomePage/HomePage';
import CreateBlog from '../Blog/CreateBlog/CreateBlog';
import Blog from '../Blog/Blog';

const MainApp = () => {
	return (
		<BrowserRouter>
			<Layout>
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
			</Layout>
		</BrowserRouter>
	);
};

export default MainApp;
