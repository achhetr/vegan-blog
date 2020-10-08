import React from 'react';

const BlogLayout = (props) => {
	return (
		<div>
			<h3>{props.blog.title}</h3>
			<p dangerouslySetInnerHTML={{ __html: props.blog.blogBody }} />
			<p>{props.blog.tags}</p>
			<div>
				<img
					style={{ width: '20rem', height: '20rem' }}
					src={props.blog.imageUrl}
					alt={props.blog.imageUrl}
				/>
			</div>
		</div>
	);
};

export default BlogLayout;
