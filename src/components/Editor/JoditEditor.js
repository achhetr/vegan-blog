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
		// console.log(text, 'check');
		setContent(text);
		props.onContentChange(text);
	};

	const onImageHandler = (args) => {
		console.log('SUCCESS!', args);
		return 'https://cdn.pixabay.com/photo/2020/06/17/18/03/lights-5310589_960_720.jpg';
	};

	const config = {
		buttons: ['bold', 'fontsize', '|', 'image', 'video'],
		uploader: {
			url:
				'https://cdn.pixabay.com/photo/2020/06/17/18/03/lights-5310589_960_720.jpg',
			insertImageAsBase64URI: true,
			defaultHandlerSuccess: onImageHandler,
		},
		readonly: false,
		toolbarAdaptive: false,
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
