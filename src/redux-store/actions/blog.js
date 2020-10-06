import * as actionTypes from './blogActionTypes';

export const createBlog = ({ blogData }) => {
	console.log(blogData, 'value from god');
	return {
		blogData,
		type: actionTypes.CREATE_NEW_BLOG,
	};
};
