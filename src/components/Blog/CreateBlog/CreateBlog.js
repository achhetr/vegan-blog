import React, { useState, useReducer } from 'react';
import { useDispatch } from 'react-redux';
import { createBlog } from '../../../redux-store/actions/blog';
import { useHistory } from 'react-router-dom';

import BlogLayout from '../BlogComponent/BlogLayout/BlogLayout';
import Editor from '../../Editor/Editor';
import Input from '../../Input/Input';

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
	const [title, setTitle] = useState('');
	const [tags, setTags] = useState('');
	const [blogBody, setBlogBody] = useState('');

	const dispatch = useDispatch();
	const history = useHistory();

	const onSetTitleHandler = (e) => {
		e.preventDefault();
		const result = e.target.value;
		setTitle(() => result);
	};
	const onSetBlogBody = (text) => {
		setBlogBody(() => text);
	};

	const onSetTags = (e) => {
		e.preventDefault();
		const result = e.target.value;
		setTags(() => result);
	};

	const onSubmitHandler = () => {
		const blogData = { title, tags, blogBody };
		dispatch(createBlog({ ...blogData }));
		history.push('/');
	};

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'row',
			}}
		>
			<div>
				<BlogLayout blog={{ title, tags, blogBody }} />
			</div>
			<form onSubmit={onSubmitHandler}>
				<Input
					placeholder="Title"
					value={title}
					onChange={onSetTitleHandler}
				/>
				<Input placeholder="Tags" value={tags} onChange={onSetTags} />
				<Editor onContentChange={onSetBlogBody} />

				<input type="submit" value="submit" />
			</form>
		</div>
	);
};

export default CreateBlog;
