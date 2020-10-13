import React, { useState } from 'react';

import LoginUser from './LoginUser/LoginUser';
import RegisterUser from './RegisterUser/RegisterUser';

import authorisationStyle from './authorisation.module.scss';

const Authorisation = () => {
	const [register, setRegister] = useState(false);

	const onChangeLoginOrRegisterHandler = () => {
		setRegister((prevState) => !prevState);
	};

	return (
		<div className={authorisationStyle.Container}>
			{register ? (
				<RegisterUser onChange={onChangeLoginOrRegisterHandler} />
			) : (
				<LoginUser onChange={onChangeLoginOrRegisterHandler} />
			)}
		</div>
	);
};

export default Authorisation;
