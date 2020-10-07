import React from 'react';
import logoStyle from './logo.module.scss';

const Logo = (props) => {
	return (
		<div className={logoStyle.LogoContainer}>
			<img
				alt="vegan logo"
				src={require('../../../../images/logo.png')}
				className={logoStyle.Logo}
			/>
		</div>
	);
};

export default Logo;
