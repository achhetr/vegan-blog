import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './mainApp.module.scss';
import Header from '../Header/Header';
import CreateBlog from '../CreateBlog/CreateBlog';
import HomePage from '../HomePage/HomePage';

const MainApp = () => {
	const [blogList, setBlogList] = useState([]);

	const addBlogListHandler = (blog) => {
		setBlogList((prevState) => prevState.concat(blog));
	};

	return (
		<BrowserRouter>
			<div>
				<Header />
				<Switch>
					<Route exact path="/">
						<HomePage blogList={blogList} />
					</Route>
					<Route path="/create">
						<CreateBlog addBlogListHandler={addBlogListHandler} />
					</Route>
				</Switch>
			</div>
		</BrowserRouter>
	);
};

export default MainApp;
