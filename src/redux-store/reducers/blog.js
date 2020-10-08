import { v4 as uuidv4 } from 'uuid';

import * as actionTypes from '../actions/blogActionTypes';
import Blog from '../model/Blog';

const defaultBlogStore = [];

const blogReducers = (state = defaultBlogStore, action) => {
	switch (action.type) {
		case actionTypes.CREATE_NEW_BLOG:
			const id = uuidv4();
			const newBlog = new Blog(
				id,
				action.payload.title,
				action.payload.blogBody,
				action.payload.imageUrl,
				action.payload.tags
			);
			return state.concat(newBlog);

		default:
			return state;
	}
};

export default blogReducers;

// {
//     id: '',
//     title: '',
//     blogBody: '',
//     imageUrl: '',
//     tags: '',
// },
