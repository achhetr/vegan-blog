import React from 'react';
import authStyle from './auth.module.scss';

import LoginUser from './LoginUser/LoginUser';
import RegisterUser from './RegisterUser/RegisterUser';

const Authorisation = ({ login }) => {
	return (
		<div className={authStyle.Container}>
			<div className={authStyle.LeftContainer}>
				<h1 className={authStyle.LeftContainerTitle}>
					Welcome to <span>Vegan World</span>
				</h1>
				<p className={authStyle.LeftContainerContent}>
					This community is currently active with 50,000+ users
				</p>
			</div>
			<div className={authStyle.RightContainer}>
				{login ? <LoginUser /> : <RegisterUser />}
			</div>
		</div>
	);
};

export default Authorisation;
