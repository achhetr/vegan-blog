import React from 'react';

import HomeInformation from '../HomeInformation/HomeInformation';
import carouselStyle from '../carousel.module.scss';
import infoStyle from './info.module.scss';

const CarouselInfo = () => {
	const infoHeader = {
		header: 'We have animal free products',
		buttonLeft: 'Learn More',
		buttonRight: 'Go Vegan',
	};
	return (
		<>
			<div className={`${carouselStyle.Background} ${infoStyle.Info}`} />
			<HomeInformation
				header={infoHeader.header}
				buttonLeft={infoHeader.buttonLeft}
				buttonRight={infoHeader.buttonRight}
			/>
		</>
	);
};

export default CarouselInfo;
