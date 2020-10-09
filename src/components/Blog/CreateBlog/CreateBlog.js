import React, { useState, useReducer } from 'react';
import { useDispatch } from 'react-redux';
import { createBlog } from '../../../redux-store/actions/blog';
import { useHistory } from 'react-router-dom';
import Spinner from 'react-spinner-material';
// import { uploadFile } from 'react-s3';
// import CONFIG from '../../config/config';

import BlogRichEditor from '../BlogRichEditor/BlogRichEditor';
import ImageGetter from './ImageGetter/ImageGetter';
import BlogLayout from '../BlogComponent/BlogLayout/BlogLayout';

const defaultState = { title: '', blogBody: '', imageUrl: '', tags: '' };
const stateReducer = (state, action) => {
	switch (action.type) {
		case 'ADD_TITLE':
			return {
				...state,
				title: action.payload,
			};

		case 'ADD_BLOG_BODY':
			return {
				...state,
				blogBody: action.payload,
			};

		case 'ADD_IMAGE_URL':
			return {
				...state,
				imageUrl: action.payload,
			};
		case 'ADD_TAGS':
			return {
				...state,
				tags: action.payload,
			};

		case 'ADD_IMAGE_CONTAINER':
			const imageContainer =
				'<div>' +
				'<img' +
				"style={{ width: '20rem', height: '20rem' }}" +
				'src={props.blog.imageUrl}' +
				'alt={props.blog.imageUrl} /> </div>';
			return {
				...state,
				blogBody: state.blogBody + ' ' + imageContainer + ' ',
			};

		default:
			return state;
	}
};

const CreateBlog = (props) => {
	const [loadingSpinner, setLoadingSpinner] = useState(false);
	const [blogData, dispatchBlog] = useReducer(stateReducer, defaultState);

	const dispatch = useDispatch();
	const history = useHistory();

	const onSetTitleHandler = (e) => {
		const result = e.target.value;
		dispatchBlog({ type: 'ADD_TITLE', payload: result });
	};
	const onSetBlogBody = (text) => {
		dispatchBlog({ type: 'ADD_BLOG_BODY', payload: text });
	};
	const onSetImageUrl = (imageUrl) => {
		dispatchBlog({ type: 'ADD_IMAGE_URL', payload: imageUrl });
	};
	const onSetTags = (e) => {
		const result = e.target.value;
		dispatchBlog({ type: 'ADD_TAGS', payload: result });
	};
	// const onAddImageContainer = () => {
	// 	dispatchBlog({ type: 'ADD_IMAGE_CONTAINER', payload: '' });
	// };

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

	const onSubmitHandler = (e) => {
		e.preventDefault();
		setLoadingSpinner(() => true);
		dispatch(createBlog({ ...blogData }));

		// this aync call is only used to replicate image uploading time in AWS
		setTimeout(() => {
			setLoadingSpinner(() => false);
			history.push('/');
		}, 1500);
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
				<div
					style={{
						display: 'flex',
						flexDirection: 'row',
					}}
				>
					<div>
						<BlogLayout blog={blogData} />
					</div>
					<form onSubmit={onSubmitHandler}>
						<input
							placeholder="Title"
							value={blogData.title}
							onChange={onSetTitleHandler}
						/>
						<input
							placeholder="Tags"
							value={blogData.tags}
							onChange={onSetTags}
						/>
						<ImageGetter uploadHandler={onImageUploadHandler} />
						<BlogRichEditor enterBlogBody={onSetBlogBody} />
						<input type="submit" value="Submit" />
					</form>
				</div>
			)}
		</>
	);
};

export default CreateBlog;
