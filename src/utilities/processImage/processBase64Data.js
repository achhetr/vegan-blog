import { v4 as uuidv4 } from 'uuid';
import b64toBlob from './b64tofile';

const processBase64Data = (ImageURL) => {
	//Processing the BAse64 data after previous cleaning
	var block = ImageURL.split(';');
	// Get the content type of the image
	var contentType = block[0].split(':')[1]; // In this case "image/gif"
	// get the real base64 content of the file
	var realData = block[1].split(',')[1];

	// Convert it to a blob to upload
	/// To Chhetri You can use Blob as well File..

	//Creating Blob from the data
	var blob = b64toBlob(realData, contentType);

	//Creating the File using the blob and uuid name is hard coded as of now
	const fileType = blob.type.split('/')[1];
	const file = new File([blob], `${uuidv4()}.${fileType}`);

	// Below code snippet is just for the testing in browser.. It is just getting the variable file and saving it in local...
	// It should be removed and the file should be used to store in s3

	// //local demo snippet starts
	// var a = document.createElement("a");
	// a.download = 'name.jpg';
	// a.href = URL.createObjectURL(file);
	// document.body.appendChild(a);
	// a.click();
	// document.body.removeChild(a);
	// // Local demo snippet stops
	return file;
};

export default processBase64Data;
