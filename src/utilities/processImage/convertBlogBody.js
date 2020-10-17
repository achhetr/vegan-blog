import processImage from './processImage';

export default async (file) => {
	const { fileData, uploadURL } = await processImage(file);

	for (var i = 0; i < fileData.length; i++) {
		file.replace(fileData[i], uploadURL[i]);
	}

	return file;
};
