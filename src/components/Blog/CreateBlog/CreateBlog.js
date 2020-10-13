import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createBlog } from '../../../redux-store/actions/blog';
import { useHistory } from 'react-router-dom';

import BlogLayout from '../BlogComponent/BlogLayout/BlogLayout';
import Editor from '../../Editor/Editor';
import Input from '../../Input/Input';

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
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
				}}
			>
				<Input
					placeholder="Title"
					value={title}
					onChange={onSetTitleHandler}
					key="2"
				/>
				<Input
					placeholder="Tags"
					value={tags}
					onChange={onSetTags}
					key="3"
				/>
				<Editor onContentChange={onSetBlogBody} key="41" />

				<button onClick={onSubmitHandler}>Submit</button>
			</div>
		</div>
	);
};

export default CreateBlog;
