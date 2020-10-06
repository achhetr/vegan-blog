import React from 'react';

import CarouselHome from './CarouselHome/CarouselHome';
import CarouselInfo from './CarouselInfo/CarouselInfo';
import CarouselProduct from './CarouselProduct/CarouselProduct';

const Carousel = (props) => {
	const SelectedComponent = ({ number }) => {
		if (number === 0) {
			return <CarouselHome />;
		} else if (number === 1) {
			return <CarouselProduct />;
		} else if (number === 2) {
			return <CarouselInfo />;
		}
	};
	return (
		<div className="carousel__component">
			<>
				<SelectedComponent number={props.number} />
			</>
		</div>
	);
};

export default Carousel;
