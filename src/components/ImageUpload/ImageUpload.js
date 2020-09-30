import React from 'react';
import { uploadFile } from 'react-s3';
import imageCompression from 'browser-image-compression';

import CONFIG from '../../config/config';

const ImageUpload = (props) => {
	const handleImageUpload = async (e) => {
		const file = e.target.files[0];
		const options = {
			maxSizeMB: 1,
			maxWidthOrHeight: 1920,
			useWebWorker: true,
		};

		try {
			const compressedFile = await imageCompression(file, options);
			const resp = await uploadFile(compressedFile, CONFIG);
			props.uploadHandler(resp.location);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div>
			<input
				type="file"
				accept="image/*"
				onChange={async (e) => await handleImageUpload(e)}
			/>
		</div>
	);
};

export default ImageUpload;
