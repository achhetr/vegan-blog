import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import headerCarouselStyle from './headerCarousel.module.scss';

const HeaderCarousel = (props) => {
	return (
		<div className={headerCarouselStyle.Container}>
			<div onClick={props.onCarouselSelect.bind(this, 'up')}>
				<FontAwesomeIcon
					icon={faAngleLeft}
					className={headerCarouselStyle.FAIcon}
				/>
			</div>
			<div onClick={props.onCarouselSelect.bind(this, 'down')}>
				<FontAwesomeIcon
					icon={faAngleRight}
					className={headerCarouselStyle.FAIcon}
				/>
			</div>
		</div>
	);
};

export default HeaderCarousel;
