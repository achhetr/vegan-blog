import { v4 as uuidv4 } from 'uuid';

import * as actionTypes from '../actions/blogActionTypes';
import Blog from '../model/Blog';

const defaultBlogStore = [];

const blogReducers = (state = defaultBlogStore, action) => {
	switch (action.type) {
		case actionTypes.CREATE_NEW_BLOG:
			console.log('CREATE_NEW_BLOG');
			const id = uuidv4();
			const newBlog = new Blog(
				id,
				action.blogData.title,
				action.blogData.blogBody,
				action.blogData.imageUrl,
				action.blogData.tags
			);

			return state.concat(newBlog);

		default:
			console.log('DEFAULT');
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
