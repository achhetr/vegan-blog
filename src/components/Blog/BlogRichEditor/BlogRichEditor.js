import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const BlogRichEditor = (props) => {
	const [value, setValue] = useState('');

	const handleEditorChange = (text) => {
		setValue(text);
		props.enterBlogBody(text);
	};

	return (
		<ReactQuill
			theme="snow"
			value={value}
			onChange={handleEditorChange}
			placeholder="Enter Blog"
		/>
	);
};

export default BlogRichEditor;
