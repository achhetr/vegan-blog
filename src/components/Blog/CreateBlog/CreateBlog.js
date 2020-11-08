import React, { useReducer } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Editor from '../../Editor/Editor';
import { createBlog } from '../../../redux-store/actions/blog';
import convertBlogBody from '../../../utilities/processImage/convertBlogBody';
import createBlogStyle from './createBlog.module.scss';
import './quill.scss';

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
			history.push('/');
		}, 0);
	};

	return (
		<div className={createBlogStyle.Container}>
			<div className={createBlogStyle.LeftContainer}>
				<form
					onSubmit={onSubmitHandler}
					className={createBlogStyle.FormContainer}
				>
					<input
						placeholder="Blog Title &#xf040;"
						value={blogData.title}
						onChange={onSetTitleHandler}
					/>
					<input
						placeholder="Tags &#xf02c;"
						value={blogData.tags}
						onChange={onSetTags}
					/>
					<div className={createBlogStyle.EditorContainer}>
						<Editor onContentChange={onSetBlogBody} />
					</div>

					<button type="submit">Submit</button>
				</form>
			</div>
			<div className={createBlogStyle.RightContainer}>
				this is right container
			</div>
		</div>
	);
};

export default CreateBlog;
