import * as actionTypes from './blogActionTypes';

export const createBlog = (blogData) => {
	return {
		payload: { ...blogData },
		type: actionTypes.CREATE_NEW_BLOG,
	};
};
