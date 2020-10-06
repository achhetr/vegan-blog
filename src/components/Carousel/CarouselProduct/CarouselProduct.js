import React from 'react';

import HomeInformation from '../HomeInformation/HomeInformation';
import carouselStyle from '../carousel.module.scss';
import productStyle from './product.module.scss';

const CarouselProduct = () => {
	const productHeader = {
		header: 'Vegan Blog with connect you with Vegans',
		buttonLeft: 'Learn More',
		buttonRight: 'Go Vegan',
	};
	return (
		<>
			<div
				className={`${carouselStyle.Background} ${productStyle.Product}`}
			/>
			<HomeInformation
				header={productHeader.header}
				buttonLeft={productHeader.buttonLeft}
				buttonRight={productHeader.buttonRight}
			/>
		</>
	);
};

export default CarouselProduct;
