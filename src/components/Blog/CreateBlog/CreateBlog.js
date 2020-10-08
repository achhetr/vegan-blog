import React, { useState, useReducer } from 'react';
import { useDispatch } from 'react-redux';
import { createBlog } from '../../../redux-store/actions/blog';
import { useHistory } from 'react-router-dom';
import Spinner from 'react-spinner-material';
// import { uploadFile } from 'react-s3';
// import CONFIG from '../../config/config';

import BlogRichEditor from '../BlogRichEditor/BlogRichEditor';
import ImageGetter from './ImageGetter/ImageGetter';

const defaultState = { title: '', blogBody: '', imageUrl: '', tags: '' };
const stateReducer = (state, action) => {
	switch (action.type) {
		case 'BLOG_CONTENT_ADDED':
			const blog = action.payload;
			console.log(blog);
			return {
				...state,
				...blog,
			};
		default:
			return state;
	}
};

const CreateBlog = (props) => {
	const [title, setTitle] = useState('');
	const [blogBody, setBlogBody] = useState('');
	const [imageUrl, setImageUrl] = useState('');
	const [tags, setTags] = useState('');
	const [loadingSpinner, setLoadingSpinner] = useState(false);

	const [blogData, dispatchBlog] = useReducer(stateReducer, defaultState);

	const dispatch = useDispatch();
	const history = useHistory();

	const onSetTitle = (e) => {
		const result = e.target.value;
		setTitle(() => result);
	};
	const onSetBlogBody = (text) => {
		setBlogBody(() => text);
	};
	const onSetImageUrl = (imageUrl) => {
		setImageUrl(() => imageUrl);
	};
	const onSetTags = (e) => {
		const result = e.target.value;
		setTags(() => result);
	};

	const onImageUploadHandler = (file) => {
		try {
			const resp = {
				location:
					'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F1023678802%2F960x0.jpg%3Ffit%3Dscale',
			};
			// comment above and uncomment below to include AWS upload
			// const resp = await uploadFile(imageUploaded, CONFIG);
			onSetImageUrl(resp.location);
		} catch (error) {
			console.log('ERROR AAYA', error);
		}
	};

	const onSaveHandler = (e) => {
		e.preventDefault();
		setLoadingSpinner(() => true);
		const blogDataEntered = { title, blogBody, imageUrl, tags };
		dispatchBlog({
			type: 'BLOG_CONTENT_ADDED',
			payload: { ...blogDataEntered },
		});
		// this aync call is only used to replicate image uploading time in AWS
		setTimeout(() => {
			setLoadingSpinner(() => false);
		}, 1500);
	};

	const onSubmitHandler = () => {
		console.log(blogData);
		dispatch(createBlog({ ...blogData }));
		history.push('/');
	};

	return (
		<>
			{loadingSpinner ? (
				<Spinner
					radius={60}
					color={'#d64747'}
					stroke={2}
					visible={true}
				/>
			) : (
				<div>
					<form onSubmit={onSaveHandler}>
						<input
							placeholder="Title"
							value={title}
							onChange={onSetTitle}
						/>
						<input
							placeholder="Tags"
							value={tags}
							onChange={onSetTags}
						/>
						<BlogRichEditor enterBlogBody={onSetBlogBody} />
						<ImageGetter uploadHandler={onImageUploadHandler} />

						<input type="submit" value="Save" />
					</form>
					<button type="button" onClick={onSubmitHandler}>
						Submit
					</button>
					<button type="button" onClick={() => {}}>
						Preview
					</button>
				</div>
			)}
		</>
	);
};

export default CreateBlog;
