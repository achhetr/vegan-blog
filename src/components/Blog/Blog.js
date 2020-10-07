import React from 'react';
import { useSelector } from 'react-redux';
import BlogComponent from './BlogComponent/BlogComponent';

const Blog = () => {
	const blogList = useSelector((state) => state.blog);
	return (
		<div>
			<h2>Blog Title</h2>
			<BlogComponent blogList={blogList} />
		</div>
	);
};

export default Blog;
