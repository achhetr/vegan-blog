import React, { useState, useEffect } from 'react';

import LoginUser from './LoginUser/LoginUser';
import RegisterUser from './RegisterUser/RegisterUser';

const Authorisation = () => {
	const [register, setRegister] = useState(false);

	const onChangeLoginOrRegisterHandler = () => {
		setRegister((prevState) => !prevState);
	};

	useEffect(() => {
		alert(
			'This first page is a login/register feature, enter anything for username and password to enter the website :)'
		);
	}, []);
	return (
		<div>
			{register ? (
				<RegisterUser onChange={onChangeLoginOrRegisterHandler} />
			) : (
				<LoginUser onChange={onChangeLoginOrRegisterHandler} />
			)}
		</div>
	);
};

export default Authorisation;
