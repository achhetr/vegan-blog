import React, { useState, useReducer } from 'react';
import { useDispatch } from 'react-redux';
import { createBlog } from '../../../redux-store/actions/blog';
import { useHistory } from 'react-router-dom';
import Spinner from 'react-spinner-material';

import BlogLayout from '../BlogComponent/BlogLayout/BlogLayout';
import Editor from '../../Editor/Editor';
import Input from '../../Utils/Input/Input';

import { uploadFile } from 'react-s3';
import imageCompression from 'browser-image-compression';
import b64toBlob from '../../../utilities/b64tofile';
const defaultState = { title: '', blogBody: '', imageUrl: '', tags: '' };
const stateReducer = (state, action) => {
	switch (action.type) {
		case 'ADD_TITLE':
			return {
				...state,
				title: action.payload,
			};

		case 'ADD_BLOG_BODY':
			let data = action.payload;
			return {
				...state,
				blogBody: data,
			};

		case 'ADD_TAGS':
			return {
				...state,
				tags: action.payload,
			};

		default:
			return state;
	}
};

const CreateBlog = (props) => {
	const [blogData, dispatchBlog] = useReducer(stateReducer, defaultState);

	const [loadingSpinner, setLoadingSpinner] = useState(false);

	const dispatch = useDispatch();
	const history = useHistory();

	const onSetTitleHandler = (e) => {
		const result = e.target.value;
		dispatchBlog({ type: 'ADD_TITLE', payload: result });
	};
	const onSetBlogBody = (text) => {
		dispatchBlog({ type: 'ADD_BLOG_BODY', payload: text });
	};

	const onSetTags = (e) => {
		const result = e.target.value;
		dispatchBlog({ type: 'ADD_TAGS', payload: result });
	};
	const processBlogData =  async (data) => {
		//Getting the image data using regex
		const patt = /<img[^>]+src="([^">]+)"/g;
		console.log(data,'data is');
		let res = data.blogBody.match(patt);
		const quotePAtt = /"(.*?[^\\])"/i;
		//Loop to handle multiple images
		for(let i=0;i<res.length;i++) {
			console.log(res[i], 'before text');
			let tempRes = res[i].match(quotePAtt);
			console.log(tempRes[1]);
			console.log('kya chalra h ye');

			//Processing the current image data
			//TODO it should return the image url from s3 and that should be used for the current base64 encoded string
			processBase64Data(tempRes[1]);
		}
		//console.log(res[0], 'Processed data');
	};

	const processBase64Data = (ImageURL) => {
		//Processing the BAse64 data after previous cleaning
		var block = ImageURL.split(";");
		// Get the content type of the image
		var contentType = block[0].split(":")[1];// In this case "image/gif"
		// get the real base64 content of the file
		var realData = block[1].split(",")[1];
		// Convert it to a blob to upload

		/// To Chhetri You can use Blob as well File.. 

		//Creating Blob from the data
		
		var blob = b64toBlob(realData, contentType);
		console.log('BLOB Data');
		console.log(blob)


		//Creating the File using the blob and name is hard coded as of now
		var file = new File([blob], "name.jpg");
		console.log('file data is');
		console.log(file);
		
		// Below code snippet is just for the testing in browser.. It is just getting the variable file and saving it in local...
		// It should be removed and the file should be used to store in s3

		//local demo snippet starts
		var a = document.createElement("a");
		a.download = 'name.jpg';
		a.href = URL.createObjectURL(file);
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
		// Local demo snippet stops


	} 
	const onSubmitHandler = async (e) => {
		e.preventDefault();
		setLoadingSpinner(() => true);
		console.log(blogData, 'This is blog html');
		//Processing the blog data
		await processBlogData(blogData);
		dispatch(createBlog({ ...blogData }));
		setTimeout(() => {
			setLoadingSpinner(() => false);
			history.push('/');
		}, 1000);
	};

	return (
		<>
			{loadingSpinner ? (
				<Spinner
					radius={60}
					color={'#d64747'}
					stroke={2}
					visible={true}
				/>
			) : (
				<div
					style={{
						display: 'flex',
						flexDirection: 'row',
					}}
				>
					<div>
						<BlogLayout blog={blogData} />
					</div>
					<form onSubmit={onSubmitHandler}>
						<h2>CREATE BLOG</h2>
						<Input
							id="input-title"
							name="Blog Title"
							placeholder="Title"
							value={blogData.title}
							onChange={onSetTitleHandler}
						/>
						<Input
							id="input-tags"
							name="Enter Tags"
							placeholder="Tags"
							value={blogData.tags}
							onChange={onSetTags}
						/>
						<Editor onContentChange={onSetBlogBody} />

						<input type="submit" value="submit" />
					</form>
				</div>
			)}
		</>
	);
};

export default CreateBlog;
