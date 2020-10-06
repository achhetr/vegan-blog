import * as actionTypes from './blogActionTypes';

export const createBlog = (blogData) => ({
	blogData,
	types: actionTypes.CREATE_NEW_BLOG,
});
