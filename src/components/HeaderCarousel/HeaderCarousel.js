import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import headerCarouselStyle from './headerCarousel.module.scss';

const HeaderCarousel = (props) => {
	return (
		<div className={headerCarouselStyle.Container}>
			<div onClick={props.onCarouselSelect.bind(this, 'up')}>
				<FontAwesomeIcon
					icon={faAngleUp}
					className={headerCarouselStyle.FAIcon}
				/>
			</div>
			<div onClick={props.onCarouselSelect.bind(this, 'down')}>
				<FontAwesomeIcon
					icon={faAngleDown}
					className={headerCarouselStyle.FAIcon}
				/>
			</div>
		</div>
	);
};

export default HeaderCarousel;
