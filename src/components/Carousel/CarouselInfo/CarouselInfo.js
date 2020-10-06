import React from 'react';

import carouselStyle from '../carousel.module.scss';
import infoStyle from './info.module.scss';

const CarouselInfo = () => {
	return (
		<div>
			<div className={`${carouselStyle.Background} ${infoStyle.Info}`} />
			<h1>This is Info Carousel</h1>
		</div>
	);
};

export default CarouselInfo;
