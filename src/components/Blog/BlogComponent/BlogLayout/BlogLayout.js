import React from 'react';
import blogLayoutStyle from './bloglayout.module.scss';

const BlogLayout = (props) => {
	return (
		<div className={blogLayoutStyle.BlogLayoutContainer}>
			<h3 className={blogLayoutStyle.Title}>{props.blog.title}</h3>
			<p>{props.blog.tags}</p>
			<div className={blogLayoutStyle.BlogContainer}>
				<p dangerouslySetInnerHTML={{ __html: props.blog.blogBody }} />
			</div>
		</div>
	);
};

export default BlogLayout;
