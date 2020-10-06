import React from 'react';

import HomeInformation from '../HomeInformation/HomeInformation';

import carouselStyle from '../carousel.module.scss';
import homeStyle from './home.module.scss';

const CarouselHome = () => {
	const homeHeader = {
		header: 'Eat Healthy Vegan Foods',
		buttonLeft: 'Learn More',
		buttonRight: 'Go Vegan',
	};
	return (
		<>
			<div className={`${carouselStyle.Background} ${homeStyle.Home}`} />
			<HomeInformation
				header={homeHeader.header}
				buttonLeft={homeHeader.buttonLeft}
				buttonRight={homeHeader.buttonRight}
				className={carouselStyle.InformationContainer}
			/>
		</>
	);
};

export default CarouselHome;
