import React, { useState, useRef, useMemo } from 'react';

// import { uploadFile } from 'react-s3';
import imageCompression from 'browser-image-compression';
import ReactQuill from 'react-quill';

import 'react-quill/dist/quill.snow.css';
// import CONFIG from '../../../config/config';

const Editor = (props) => {
	let quillRef = useRef(null);
	const [content, setContent] = useState('');

	const onBlogContentChange = (text) => {
		setContent(text);
		props.onContentChange(text);
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

	const onImageHandler = () => {
		const input = document.createElement('input');
		input.setAttribute('type', 'file');
		input.setAttribute('accept', 'image/*');
		input.click();
		input.onchange = async () => {
			const file = input.files ? input.files[0] : null;
			if (file) {
				// const url = await onFileCompressUploadAWS(file);
				const f = onFileCompressUploadAWS(null);
				console.log(f);
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
				image: onImageHandler,
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
	return useMemo(
		() => (
			<ReactQuill
				ref={quillRef}
				value={content}
				onChange={onBlogContentChange}
				theme="snow"
				modules={modules}
				formats={formats}
			/>
		),
		[]
	);
};

export default Editor;
