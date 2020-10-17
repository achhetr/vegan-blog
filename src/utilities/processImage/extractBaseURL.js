export default (data) => {
	//Saving image URL into List
	const baseURLs = [];

	//Getting the image data using regex
	const patt = /<img[^>]+src="([^">]+)"/g;
	let res = data.match(patt);
	const quotePAtt = /"(.*?[^\\])"/i;
	//Loop to handle multiple images
	for (let i = 0; i < res.length; i++) {
		let tempRes = res[i].match(quotePAtt);
		// processBase64Data(tempRes[1]);
		//adding each url in list
		baseURLs.push(tempRes[1]);
	}
	//console.log(res[0], 'Processed data');
	return baseURLs;
};
