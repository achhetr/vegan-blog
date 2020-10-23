import extractBaseURL from './extractBaseURL';
import processBase64Data from './processBase64Data';
import compressFile from './compressFile';
import uploadAws from './uploadAws';

const processImage = async (file) => {
	// get list of base url
	let fileData = extractBaseURL(file);

	//compress URL list to file then compressed file and upload to aws
	const uploadURL = fileData.map(async (baseUrl) => {
		// get file from base url
		const fileData = processBase64Data(baseUrl);

		console.log(fileData, 'this is fileData');

		//get compressed file from file
		const compressedFile = await compressFile(fileData);

		//upload file to aws and get aws url
		// const awsUrl = await uploadAws(compressedFile);
		const awsUrl = await uploadAws(fileData);
		return awsUrl;
	});
	const resolvePromise = await Promise.all(uploadURL);

	return {
		fileData,
		resolvePromise,
	};
};

export default processImage;
