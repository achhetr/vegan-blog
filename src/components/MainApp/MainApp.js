import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from '../Header/Header';
import CreateBlog from '../CreateBlog/CreateBlog';
import HomePage from '../HomePage/HomePage';

const MainApp = () => {
	const [blogList, setBlogList] = useState([
		{
			title: 'This is a header',
			blogBody: '<p>This is a description of nothing</p>',
			imageUploaded:
				'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F1023678802%2F960x0.jpg%3Ffit%3Dscale',
		},
	]);

	const addBlogListHandler = (blog) => {
		setBlogList((prevState) => prevState.concat(blog));
	};

	return (
		<BrowserRouter>
			<div>
				<Header />
				<div className="app-container-width">
					<Switch>
						<Route exact path="/">
							<HomePage blogList={blogList} />
						</Route>
						<Route path="/create">
							<CreateBlog
								addBlogListHandler={addBlogListHandler}
							/>
						</Route>
					</Switch>
				</div>
			</div>
		</BrowserRouter>
	);
};

export default MainApp;
