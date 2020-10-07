// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import Spinner from 'react-spinner-material';
// // import { uploadFile } from 'react-s3';
// import { Redirect } from 'react-router-dom';

// import BlogRichEditor from '../BlogRichEditor/BlogRichEditor';
// // import CONFIG from '../../config/config';
// import ImageGetter from '../ImageGetter/ImageGetter';
// import { createBlog } from '../../redux-store/actions/blog';

// const CreateBlog = (props) => {
// 	const [title, setTitle] = useState('');
// 	const [blogBody, setBlogBody] = useState('');
// 	const [redirect, setRedirect] = useState(false);
// 	const [imageUploaded, setImageUploaded] = useState(null);
// 	const [loadingSpinner, setLoadingSpinner] = useState(false);

// 	const dispatch = useDispatch();

// 	const resetHandler = () => {
// 		setTitle('');
// 		setBlogBody('');
// 		setRedirect(true);
// 		setImageUploaded(null);
// 		setLoadingSpinner(false);
// 	};

// 	const handleCreatePost = async (e) => {
// 		e.preventDefault();
// 		// setLoadingSpinner(true);
// 		if (!!title && !!blogBody && !!imageUploaded) {
// 			try {
// 				// setting default not aws uploading function
// 				const resp = {
// 					location:
// 						'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F1023678802%2F960x0.jpg%3Ffit%3Dscale',
// 				};
// 				setTimeout(() => {}, 1500);
// 				// comment above and uncomment below to include AWS upload

// 				// const resp = await uploadFile(imageUploaded, CONFIG);
// 				const result = dispatch(
// 					createBlog({
// 						title,
// 						blogBody,
// 						imageUrl: resp.location,
// 						tags: '',
// 					})
// 				);
// 				console.log('Order dispatch', result);
// 				// props.addBlogListHandler({
// 				// 	title,
// 				// 	blogBody,
// 				// 	imageUploaded: resp.location,
// 				// });
// 				resetHandler();
// 			} catch (error) {
// 				console.log(error);
// 			}
// 		}
// 	};

// 	const enterBlogBody = (text) => {
// 		setBlogBody(text);
// 	};

// 	const uploadHandler = (image) => {
// 		setImageUploaded(image);
// 	};

// 	if (loadingSpinner)
// 		return (
// 			<div>
// 				<Spinner
// 					size={120}
// 					spinnerColor={'#333'}
// 					spinnerWidth={2}
// 					visible={true}
// 				/>
// 			</div>
// 		);
// 	if (redirect) return <Redirect to="/" />;

// 	return (
// 		<div>
// 			<h1>Create new blog here</h1>
// 			<div>
// 				<form onSubmit={handleCreatePost}>
// 					<input
// 						name="title"
// 						value={title}
// 						onChange={(e) => setTitle(e.target.value)}
// 						placeholder="Enter blog title"
// 					/>
// 					<ImageGetter uploadHandler={uploadHandler} />
// 					<BlogRichEditor enterBlogBody={enterBlogBody} />
// 					<input value="create" type="submit" />
// 					<input
// 						value="cancel"
// 						type="button"
// 						onClick={resetHandler}
// 					/>
// 				</form>
// 			</div>
// 		</div>
// 	);
// };

// export default CreateBlog;

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createBlog } from '../../redux-store/actions/blog';
import { useHistory } from 'react-router-dom';

import BlogRichEditor from '../BlogRichEditor/BlogRichEditor';

const CreateBlog = (props) => {
	const [title, setTitle] = useState('');
	const [blogBody, setBlogBody] = useState('');
	const [imageUrl, setImageUrl] = useState('');
	const [tags, setTags] = useState('');

	const dispatch = useDispatch();
	const history = useHistory();

	const onSetTitle = (e) => {
		const result = e.target.value;
		setTitle(() => result);
	};
	const onSetBlogBody = (text) => {
		console.log(text, 'desi bro');
		setBlogBody(() => text);
	};
	const onSetImageUrl = (e) => {
		const result = e.target.value;
		setImageUrl(() => result);
	};
	const onSetTags = (e) => {
		const result = e.target.value;
		setTags(() => result);
	};

	const onSubmitHandler = (e) => {
		e.preventDefault();
		const blogData = { title, blogBody, imageUrl, tags };
		dispatch(createBlog({ blogData }));
		history.push('/');
	};

	return (
		<div>
			<form onSubmit={onSubmitHandler}>
				<input
					placeholder="Title"
					value={title}
					onChange={onSetTitle}
				/>
				<BlogRichEditor enterBlogBody={onSetBlogBody} />
				<input
					placeholder="Image URL"
					value={imageUrl}
					onChange={onSetImageUrl}
				/>
				<input placeholder="Tags" value={tags} onChange={onSetTags} />
				<input type="submit" value="Submit" />
			</form>
		</div>
	);
};

export default CreateBlog;
