import React from 'react';

import homeInformationStyle from './homeInformation.module.scss';

const HomeInformation = (props) => {
	return (
		<div className={homeInformationStyle.Container}>
			<h1>{props.header}</h1>
			<div className={homeInformationStyle.ButtonContainer}>
				<button
					className={`${homeInformationStyle.Button} ${homeInformationStyle.LeftButton}`}
				>
					{props.buttonLeft}
				</button>
				<button
					className={`${homeInformationStyle.Button} ${homeInformationStyle.RightButton}`}
				>
					{props.buttonRight}
				</button>
			</div>
		</div>
	);
};

export default HomeInformation;
