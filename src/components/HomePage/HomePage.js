import React, { useState } from 'react';

import HeaderCarousel from './HeaderCarousel/HeaderCarousel';
import Carousel from './Carousel/Carousel';

import homeStyle from './home.module.scss';

const HomePage = () => {
	const [carousel, setCarousel] = useState(0);

	const onCarouselSelect = (selection) => {
		if (selection === 'up') {
			setCarousel((prevState) => (prevState >= 2 ? 0 : prevState + 1));
		} else if (selection === 'down') {
			setCarousel((prevState) => (prevState <= 0 ? 2 : prevState - 1));
		}
	};

	// useEffect(() => {
	// 	const interval = setInterval(() => {
	// 		setCarousel((prevState) => (prevState <= 0 ? 2 : prevState - 1));
	// 	}, 10000);
	// 	return () => clearInterval(interval);
	// }, []);

	return (
		<div className={homeStyle.Home}>
			<HeaderCarousel onCarouselSelect={onCarouselSelect} />
			<Carousel number={carousel} />
		</div>
	);
};

export default HomePage;
