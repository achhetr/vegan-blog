import imageCompression from 'browser-image-compression';

export default async (file) => {
	const options = {
		maxSizeMB: 1,
		maxWidthOrHeight: 1920,
		useWebWorker: true,
	};
	try {
		console.log(file, 'this is from compress');
		const compressedFile = await imageCompression(file, options);
		console.log(
			'compressedFile instanceof Blob',
			compressedFile instanceof Blob
		); // true

		console.log(
			`compressedFile size ${compressedFile.size / 1024 / 1024} MB`
		); // smaller than maxSizeMB

		return compressedFile;
	} catch (err) {
		console.log(err, 'super hero');
		return '';
	}
};
