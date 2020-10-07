import React from 'react';
import BlogLayout from './BlogLayout/BlogLayout';

const BlogComponent = (props) => (
	<div className="blog-container">
		{props.blogList.map((blog) => (
			<BlogLayout blog={blog} key={blog.id} />
		))}
	</div>
);

export default BlogComponent;
