import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';

const HeaderCarousel = (props) => {
	return (
		<div className="carousel__container">
			<div onClick={props.onCarouselSelect.bind(this, 'up')}>
				<FontAwesomeIcon
					icon={faAngleUp}
					className="carousel__container--icon"
				/>
			</div>
			<div onClick={props.onCarouselSelect.bind(this, 'down')}>
				<FontAwesomeIcon
					icon={faAngleDown}
					className="carousel__container--icon"
				/>
			</div>
		</div>
	);
};

export default HeaderCarousel;
