import React from 'react';

const BlogLayout = (props) => {
	return (
		<div className="blog-layout">
			<h3 className="blog-layout__title">{props.blog.title}</h3>
			<p
				className="blog-layout__body"
				dangerouslySetInnerHTML={{ __html: props.blog.blogBody }}
			/>
			<div className="blog-layout__image-container">
				<img
					className="blog-layout__image"
					src={props.blog.imageUploaded}
					alt={props.blog.imageUploaded}
				/>
			</div>
		</div>
	);
};

export default BlogLayout;
