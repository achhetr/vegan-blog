import React, { useState, useReducer } from 'react';
import { useDispatch } from 'react-redux';
import { createBlog } from '../../../redux-store/actions/blog';
import { useHistory } from 'react-router-dom';
import Spinner from 'react-spinner-material';

import BlogLayout from '../BlogComponent/BlogLayout/BlogLayout';
import Editor from '../../Editor/Editor';

import convertBlogBody from '../../../utilities/processImage/convertBlogBody';

const defaultState = { title: '', blogBody: '', imageUrl: '', tags: '' };
const stateReducer = (state, action) => {
	switch (action.type) {
		case 'ADD_TITLE':
			return {
				...state,
				title: action.payload,
			};

		case 'ADD_BLOG_BODY':
			let data = action.payload;
			return {
				...state,
				blogBody: data,
			};

		case 'ADD_TAGS':
			return {
				...state,
				tags: action.payload,
			};

		default:
			return state;
	}
};

const CreateBlog = (props) => {
	const [blogData, dispatchBlog] = useReducer(stateReducer, defaultState);

	const [loadingSpinner, setLoadingSpinner] = useState(false);

	const dispatch = useDispatch();
	const history = useHistory();

	const onSetTitleHandler = (e) => {
		const result = e.target.value;
		dispatchBlog({ type: 'ADD_TITLE', payload: result });
	};
	const onSetBlogBody = (text) => {
		dispatchBlog({ type: 'ADD_BLOG_BODY', payload: text });
	};

	const onSetTags = (e) => {
		const result = e.target.value;
		dispatchBlog({ type: 'ADD_TAGS', payload: result });
	};

	const onSubmitHandler = async (e) => {
		e.preventDefault();
		setLoadingSpinner(() => true);
		//Processing the blog data
		const blogBody = await convertBlogBody(blogData.blogBody);

		// passing new blogBody with aws url
		const blog = {
			...blogData,
			blogBody,
		};
		console.log(blog);
		dispatch(createBlog(blog));
		setTimeout(() => {
			setLoadingSpinner(() => false);
			history.push('/');
		}, 1000);
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
						<h2>CREATE BLOG</h2>
						<input
							id="input-title"
							name="Blog Title"
							placeholder="Title"
							value={blogData.title}
							onChange={onSetTitleHandler}
						/>
						<input
							id="input-tags"
							name="Enter Tags"
							placeholder="Tags"
							value={blogData.tags}
							onChange={onSetTags}
						/>
						<Editor onContentChange={onSetBlogBody} />

						<input type="submit" value="submit" />
					</form>
				</div>
			)}
		</>
	);
};

export default CreateBlog;
