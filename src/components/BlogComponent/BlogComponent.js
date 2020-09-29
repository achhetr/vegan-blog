import React from 'react';
import BlogLayout from '../BlogLayout/BlogLayout';

const BlogComponent = (props) => {
	return (
		<div>
			{props.blogList.map((blog, index) => (
				<BlogLayout blog={blog} key={index} />
			))}
		</div>
	);
};

export default BlogComponent;
