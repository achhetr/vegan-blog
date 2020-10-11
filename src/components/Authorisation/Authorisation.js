import React, { useState } from 'react';

import LoginUser from './LoginUser/LoginUser';
import RegisterUser from './RegisterUser/RegisterUser';

const Authorisation = () => {
	const [register, setRegister] = useState(false);

	const onChangeLoginOrRegisterHandler = () => {
		setRegister((prevState) => !prevState);
	};
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
