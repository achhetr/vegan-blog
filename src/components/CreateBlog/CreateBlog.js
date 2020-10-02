import React, { useState } from 'react';
import Spinner from 'react-spinner-material';
// import { uploadFile } from 'react-s3';
import { Redirect } from 'react-router-dom';

import BlogRichEditor from '../BlogRichEditor/BlogRichEditor';
// import CONFIG from '../../config/config';
import ImageGetter from '../ImageGetter/ImageGetter';

const CreateBlog = (props) => {
	const [title, setTitle] = useState('');
	const [blogBody, setBlogBody] = useState('');
	const [redirect, setRedirect] = useState(false);
	const [imageUploaded, setImageUploaded] = useState(null);
	const [loadingSpinner, setLoadingSpinner] = useState(false);

	const resetHandler = () => {
		setTitle('');
		setBlogBody('');
		setRedirect(true);
		setImageUploaded(null);
		setLoadingSpinner(false);
	};

	const handleCreatePost = async (e) => {
		e.preventDefault();
		setLoadingSpinner(true);
		if (!!title && !!blogBody && !!imageUploaded) {
			try {
				// setting default not aws uploading function
				const resp = {
					location:
						'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F1023678802%2F960x0.jpg%3Ffit%3Dscale',
				};
				setTimeout(() => {}, 1500);
				// comment above and uncomment below to include AWS upload

				// const resp = await uploadFile(imageUploaded, CONFIG);
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

	if (loadingSpinner)
		return (
			<div>
				<Spinner
					size={120}
					spinnerColor={'#333'}
					spinnerWidth={2}
					visible={true}
				/>
			</div>
		);
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
