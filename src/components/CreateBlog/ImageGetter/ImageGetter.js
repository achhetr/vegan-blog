import React from 'react';
import imageCompression from 'browser-image-compression';

const ImageGetter = (props) => {
	const handleImageUpload = async (e) => {
		const file = e.target.files[0];
		const options = {
			maxSizeMB: 1,
			maxWidthOrHeight: 1920,
			useWebWorker: true,
		};

		try {
			const compressedFile = await imageCompression(file, options);
			props.uploadHandler(compressedFile);
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

export default ImageGetter;
