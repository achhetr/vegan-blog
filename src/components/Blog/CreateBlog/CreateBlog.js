import React, { useState, useReducer, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { createBlog } from '../../../redux-store/actions/blog';
import { useHistory } from 'react-router-dom';
import Spinner from 'react-spinner-material';
import { uploadFile } from 'react-s3';
import imageCompression from 'browser-image-compression';
import base64ToImage from 'base64-to-image';
import ReactQuill from 'react-quill';

import 'react-quill/dist/quill.snow.css';
import CONFIG from '../../../config/config';
import BlogLayout from '../BlogComponent/BlogLayout/BlogLayout';
import base from '../../../tes';

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
	let quill = useRef(null);

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
			const resp = await uploadFile(compressedFile, CONFIG);
			return resp;
		} catch (error) {
			return error;
		}
	};

	const onImageDataProcess = async () => {
		console.log('on handler');
		// const input = document.createElement('input');

		// input.setAttribute('type', 'file');
		// input.setAttribute('accept', 'image/*');
		// input.click();

		// input.onchange = async () => {
		// 	console.log('entered');
		// 	const url = await onFileCompressUploadAWS(input.files[0]);
		// 	const range = quill.getEditorSelection(true);
		// 	console.log(url, 'url obejct');
		// 	console.log(range, 'range');
		// 	quill.insertEmbed(range.index, 'image', url);
		// };
		// var base64Str = base;
		// var path = '';
		// var optionalObj = { fileName: 'imageFileName', type: 'jpeg' };
		// const out = base64ToImage(base64Str, path, optionalObj);
		// console.log(out, 'poutpit');

		const url = await onFileCompressUploadAWS(base);
		console.log(url);
		console.log(base);
	};

	const onSubmitHandler = async (e) => {
		e.preventDefault();
		setLoadingSpinner(() => true);
		await onImageDataProcess(blogData.blogBody);

		dispatch(createBlog({ ...blogData }));
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
			// handlers: {
			// 	image: () => onImageHandler(),
			// },
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
						/>
						<input
							placeholder="Tags"
							value={blogData.tags}
							onChange={onSetTags}
						/>
						<div className="text-editor">
							<ReactQuill
								ref={(el) => (quill = el)}
								value={blogData.blogBody}
								onChange={onSetBlogBody}
								theme="snow"
								modules={modules}
								formats={formats}
							/>
						</div>
						<input type="submit" value="Submit" />
					</form>
				</div>
			)}
		</>
	);
};

export default CreateBlog;
