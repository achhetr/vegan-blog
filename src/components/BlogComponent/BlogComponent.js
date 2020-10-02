import React from 'react';
import BlogLayout from '../BlogLayout/BlogLayout';

const BlogComponent = (props) => (
	<div className="blog-container">
		{props.blogList.map((blog, index) => (
			<BlogLayout blog={blog} key={index} />
		))}
	</div>
);

export default BlogComponent;
