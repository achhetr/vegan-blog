import { uploadFile } from 'react-s3';
import CONFIG from '../../config/config';

const uploadAws = async (file) => {
	try {
		const resp = await uploadFile(file, CONFIG);
		return resp.location;
	} catch (e) {
		console.log(e, 'error');
		return '';
	}
};

export default uploadAws;
