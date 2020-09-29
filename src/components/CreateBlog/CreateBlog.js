import React, { useState } from 'react';

import BlogRichEditor from '../BlogRichEditor/BlogRichEditor';
import { Redirect } from 'react-router-dom';

const CreateBlog = (props) => {
	const [title, setTitle] = useState();
	const [blogBody, setBlogBody] = useState();
	const [redirect, setRedirect] = useState(false);

	const resetHandler = () => {
		setTitle();
		setBlogBody();
		setRedirect(true);
	};

	const handleCreatePost = (e) => {
		e.preventDefault();
		props.addBlogListHandler({
			title,
			blogBody,
		});
		resetHandler();
	};

	const enterBlogBody = (text) => {
		setBlogBody(text);
	};

	if (redirect) return <Redirect to="/" />;

	return (
		<div>
			<h1>Create new blog here</h1>
			<div>
				<form onSubmit={handleCreatePost}>
					<input
						name="title"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						placeholder="Enter blog title"
					/>
					<BlogRichEditor enterBlogBody={enterBlogBody} />
					<input value="create" type="submit" />
					<input
						value="cancel"
						type="button"
						onClick={resetHandler}
					/>
				</form>
			</div>
		</div>
	);
};

export default CreateBlog;
