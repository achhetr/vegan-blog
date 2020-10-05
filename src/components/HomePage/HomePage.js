// import React from 'react';

// import BlogComponent from '../BlogComponent/BlogComponent';

// const HomePage = (props) => {
// 	return (
// 		<div className="homepage__container">
// 			<h2>Home Pages</h2>
// 			{props.blogList.length > 0 && (
// 				<BlogComponent blogList={props.blogList} />
// 			)}
// 		</div>
// 	);
// };

// export default HomePage;

import React, { useState } from 'react';
import HeaderCarousel from '../HeaderCarousel/HeaderCarousel';
import carouselList from '../../constant/carousel';

const HomePage = () => {
	const [carousel, setCarousel] = useState(0);

	console.log(carouselList);

	const onCarouselSelect = (selection) => {
		console.log(carousel, 'carousel');
		if (selection === 'up') {
			setCarousel((prevState) => (prevState >= 2 ? 0 : prevState + 1));
		} else if (selection === 'down') {
			setCarousel((prevState) => (prevState <= 0 ? 2 : prevState - 1));
		}
	};

	return (
		<div className="homepage">
			<div className="background-iamge">
				<img
					src={carouselList[0].images}
					alt={carouselList[1].description}
				/>
			</div>
			<HeaderCarousel onCarouselSelect={onCarouselSelect} />
			<h2>This is a home page</h2>
		</div>
	);
};

export default HomePage;
