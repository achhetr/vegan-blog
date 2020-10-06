import React from 'react';

import carouselStyle from '../carousel.module.scss';
import homeStyle from './home.module.scss';

const CarouselHome = () => {
	return (
		<div>
			<div className={`${carouselStyle.Background} ${homeStyle.Home}`} />
			<div className="carousel-component">
				<div className="carousel-component__container">
					<button className="carousel-component__container--home-button">
						This is home
					</button>
					<button className="carousel-component__container--button">
						This is login
					</button>
				</div>
			</div>
		</div>
	);
};

export default CarouselHome;
