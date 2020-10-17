import React, { useState, useRef } from 'react';
import ReactQuill from 'react-quill';

import 'react-quill/dist/quill.snow.css';

const Editor = (props) => {
	let quillRef = useRef(null);
	const [content, setContent] = useState('');

	const onBlogContentChange = (text) => {
		setContent(text);
		props.onContentChange(text);
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
		<ReactQuill
			ref={quillRef}
			value={content}
			onChange={onBlogContentChange}
			theme="snow"
			modules={modules}
			formats={formats}
		/>
	);
};

export default Editor;
