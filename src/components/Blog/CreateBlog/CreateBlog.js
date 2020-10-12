import React, { useState, useReducer, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { createBlog } from '../../../redux-store/actions/blog';
import { useHistory } from 'react-router-dom';
import Spinner from 'react-spinner-material';
// import { uploadFile } from 'react-s3';
import imageCompression from 'browser-image-compression';
import ReactQuill from 'react-quill';

import 'react-quill/dist/quill.snow.css';
// import CONFIG from '../../../config/config';
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
	let quillRef = useRef(null);
	// let quillReact = ReactQuill;

	const [loadingSpinner, setLoadingSpinner] = useState(false);
	const [blogData, dispatchBlog] = useReducer(stateReducer, defaultState);

	const dispatch = useDispatch();
	const history = useHistory();

	useEffect(() => {
		alert(
			'this is to test the text editor, and it will use Bear image, to save aws update, this editor has bug and we are on it to fix it'
		);
	}, []);

	useEffect(() => {
		document.getElementById('title').focus();
	}, [blogData.title]);
	useEffect(() => {
		document.getElementById('tags').focus();
	}, [blogData.tags]);
	// useEffect(() => {
	// 	document.getElementById('editor').focus();
	// }, [blogData.editor]);
	useEffect(() => {
		var selection = document.getSelection();
		console.log(selection, 'selection ka bhosda');
	});

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

	const onFileCompressUploadAWS = async (file) => {
		const options = {
			maxSizeMB: 4,
			maxWidthOrHeight: 1920,
			useWebWorker: true,
		};
		try {
			const compressedFile = await imageCompression(file, options);
			// const resp = await uploadFile(compressedFile, CONFIG);
			// return resp;
			return !!compressedFile;
		} catch (error) {
			return error;
		}
	};

	const onImageHandler = async () => {
		const input = document.createElement('input');
		input.setAttribute('type', 'file');
		input.setAttribute('accept', 'image/*');
		input.click();
		input.onchange = async () => {
			const file = input.files ? input.files[0] : null;
			if (file) {
				// const url = await onFileCompressUploadAWS(file);
				const url = {
					location:
						'https://i.guim.co.uk/img/media/86c3481516dce247943ac2978b4f48d16a3ac265/0_170_5120_3074/master/5120.jpg?width=620&quality=85&auto=format&fit=max&s=d73e0c12a90e9da24736865e9274ef17',
				};
				let quill = quillRef.current.getEditor();
				const range = quill.getSelection(true);
				quill.insertEmbed(range.index, 'image', url.location);
			}
		};
	};

	const onSubmitHandler = async (e) => {
		e.preventDefault();
		setLoadingSpinner(() => true);
		onFileCompressUploadAWS(null);
		dispatch(createBlog({ ...blogData }));
		console.log(blogData, 'check karo');
		setLoadingSpinner(() => false);
		history.push('/');
	};

	const modules = {
		toolbar: {
			container: [
				[{ header: [1, 2, false] }],
				['bold', 'italic', 'underline', 'strike', 'blockquote'],
				[
					{ list: 'ordered' },
					{ list: 'bullet' },
					{ indent: '-1' },
					{ indent: '+1' },
				],
				['link', 'image', 'video'],
				['code-block'],
			],
			handlers: {
				image: () => onImageHandler(),
			},
		},

		clipboard: {
			matchVisual: false,
		},
	};

	const formats = [
		'header',
		'bold',
		'italic',
		'underline',
		'strike',
		'blockquote',
		'list',
		'bullet',
		'indent',
		'link',
		'image',
		'code-block',
		'video',
	];

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
							id="title"
						/>
						<input
							placeholder="Tags"
							value={blogData.tags}
							onChange={onSetTags}
							id="tags"
						/>
						{/* <div className="text-editor"> */}
						<ReactQuill
							ref={quillRef}
							value={blogData.blogBody}
							onChange={onSetBlogBody}
							theme="snow"
							modules={modules}
							formats={formats}
						/>
						{/* </div> */}
						<input type="submit" value="Submit" />
					</form>
				</div>
			)}
		</>
	);
};

export default CreateBlog;
