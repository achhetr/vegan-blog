// import React, { useState } from 'react';
// import { BrowserRouter, Switch, Route } from 'react-router-dom';

// import Header from '../Header/Header';
// import CreateBlog from '../CreateBlog/CreateBlog';
// import HomePage from '../HomePage/HomePage';
// import UserInfo from '../UserInfo/UserInfo';
// import Footer from '../Footer/Footer';

// // const MainApp = () => {
// // 	const [blogList, setBlogList] = useState([
// // 		{
// // 			title: 'This is a header',
// // 			blogBody: '<p>This is a description of nothing</p>',
// // 			imageUploaded:
// // 				'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F1023678802%2F960x0.jpg%3Ffit%3Dscale',
// // 		},
// // 	]);

// // 	const addBlogListHandler = (blog) => {
// // 		setBlogList((prevState) => prevState.concat(blog));
// // 	};

// // 	return (
// // 		<BrowserRouter>
// // 			<div>
// // 				<Header />
// // 				<div className="app-container-width">
// // 					<div className="app-container__section">
// // 						<div className="app-container__section--container app-container__section--left">
// // 							<UserInfo />
// // 						</div>
// // 						<div className="app-container__section--container app-container__section--mainpage">
// // 							<Switch>
// // 								<Route exact path="/">
// // 									<HomePage blogList={blogList} />
// // 								</Route>
// // 								<Route path="/create">
// // 									<CreateBlog
// // 										addBlogListHandler={addBlogListHandler}
// // 									/>
// // 								</Route>
// // 							</Switch>
// // 						</div>
// // 						<div className="app-container__section--container app-container__section--right">
// // 							<Footer />
// // 						</div>
// // 					</div>
// // 				</div>
// // 			</div>
// // 		</BrowserRouter>
// // 	);
// // };

// export default MainApp;

import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from '../Layout/Layout';
import HomePage from '../HomePage/HomePage';
import CreateBlog from '../CreateBlog/CreateBlog';

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
				</Switch>
			</Layout>
		</BrowserRouter>
	);
};

export default MainApp;
