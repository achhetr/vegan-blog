import React, { useState } from 'react';
import { uploadFile } from 'react-s3';
import { Redirect } from 'react-router-dom';

import BlogRichEditor from '../BlogRichEditor/BlogRichEditor';
import CONFIG from '../../config/config';
import ImageGetter from '../ImageGetter/ImageGetter';

const CreateBlog = (props) => {
	const [title, setTitle] = useState('');
	const [blogBody, setBlogBody] = useState('');
	const [redirect, setRedirect] = useState(false);
	const [imageUploaded, setImageUploaded] = useState(null);

	const resetHandler = () => {
		setTitle('');
		setBlogBody('');
		setRedirect(true);
		setImageUploaded(null);
	};

	const handleCreatePost = async (e) => {
		e.preventDefault();
		if (!!title && !!blogBody && !!imageUploaded) {
			try {
				const resp = await uploadFile(imageUploaded, CONFIG);
				props.addBlogListHandler({
					title,
					blogBody,
					imageUploaded: resp.location,
				});
				resetHandler();
			} catch (error) {
				console.log(error);
			}
		}
	};

	const enterBlogBody = (text) => {
		setBlogBody(text);
	};

	const uploadHandler = (image) => {
		setImageUploaded(image);
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
					<ImageGetter uploadHandler={uploadHandler} />
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
