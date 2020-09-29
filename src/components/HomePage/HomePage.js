import React from 'react';
import BlogComponent from '../BlogComponent/BlogComponent';

const HomePage = (props) => {
	return (
		<div>
			<h2>Home Pages</h2>
			<BlogComponent blogList={props.blogList} />
		</div>
	);
};

export default HomePage;
