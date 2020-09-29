import React from 'react';

const BlogLayout = (props) => {
	return (
		<div>
			<h3>{props.blog.title}</h3>
			<p dangerouslySetInnerHTML={{ __html: props.blog.blogBody }} />
		</div>
	);
};

export default BlogLayout;
