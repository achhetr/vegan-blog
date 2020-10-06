import React from 'react';

import carouselStyle from '../carousel.module.scss';
import productStyle from './product.module.scss';

const CarouselProduct = () => {
	return (
		<div>
			<div
				className={`${carouselStyle.Background} ${productStyle.Product}`}
			/>
			<h1>This is product Carousel</h1>
		</div>
	);
};

export default CarouselProduct;
