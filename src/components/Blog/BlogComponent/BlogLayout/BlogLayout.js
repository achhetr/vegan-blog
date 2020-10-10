import React from 'react';

const BlogLayout = (props) => {
	return (
		<div>
			<h3>{props.blog.title}</h3>
			<p>{props.blog.tags}</p>
			<div style={{ width: '20rem', height: '20rem' }}>
				<p dangerouslySetInnerHTML={{ __html: props.blog.blogBody }} />
			</div>
		</div>
	);
};

export default BlogLayout;
