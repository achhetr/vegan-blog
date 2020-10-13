import React, { useState, useRef, useMemo } from 'react';
import JoditEditor from 'jodit-react';

// import { uploadFile } from 'react-s3';
// import imageCompression from 'browser-image-compression';

import 'react-quill/dist/quill.snow.css';
// import CONFIG from '../../../config/config';

const Editor = (props) => {
	let quillRef = useRef(null);
	const [content, setContent] = useState('');

	const onBlogContentChange = (text) => {
		setContent(text);
		props.onContentChange(text);
	};
	const config = {
		readonly: false,
	};

	return useMemo(
		() => (
			<JoditEditor
				ref={quillRef}
				value={content}
				config={config}
				tabIndex={1}
				onChange={onBlogContentChange}
			/>
		),
		[]
	);
};

export default Editor;
