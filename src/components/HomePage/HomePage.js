import React, { useState } from 'react';

import HeaderCarousel from '../HeaderCarousel/HeaderCarousel';
import Carousel from '../Carousel/Carousel';

const HomePage = () => {
	const [carousel, setCarousel] = useState(0);

	const onCarouselSelect = (selection) => {
		if (selection === 'up') {
			setCarousel((prevState) => (prevState >= 2 ? 0 : prevState + 1));
		} else if (selection === 'down') {
			setCarousel((prevState) => (prevState <= 0 ? 2 : prevState - 1));
		}
	};

	// setInterval(() => {
	// 	setCarousel((prevState) => (prevState <= 0 ? 2 : prevState - 1));
	// }, 5000);

	return (
		<div className="homepage">
			<HeaderCarousel onCarouselSelect={onCarouselSelect} />
			<h2>This is a home page</h2>
			<Carousel number={carousel} />
		</div>
	);
};

export default HomePage;
