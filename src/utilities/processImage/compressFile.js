import imageCompression from 'browser-image-compression';

export default async (file) => {
	const options = {
		maxSizeMB: 1,
		maxWidthOrHeight: 1920,
		useWebWorker: true,
	};
	try {
		const compressedFile = await imageCompression(file, options);
		return compressedFile;
	} catch (err) {
		console.log(err, 'super hero');
		return '';
	}
};
