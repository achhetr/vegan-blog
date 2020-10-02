import React from 'react';

import BlogComponent from '../BlogComponent/BlogComponent';

const HomePage = (props) => {
	return (
		<div className="homepage__container">
			<h2>Home Pages</h2>
			{props.blogList.length > 0 && (
				<BlogComponent blogList={props.blogList} />
			)}
		</div>
	);
};

export default HomePage;
