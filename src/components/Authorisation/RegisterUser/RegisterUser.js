import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { registerUser } from '../../../redux-store/actions/auth';

const RegisterUser = (props) => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const dispatch = useDispatch();

	const usernameHandler = (e) => {
		const user = e.target.value;
		setUsername(() => user);
	};
	const passwordHandler = (e) => {
		const pass = e.target.value;
		setPassword(() => pass);
	};

	const onSubmitRegister = (e) => {
		e.preventDefault();
		dispatch(registerUser({ username, password }));
	};

	const registerChange = () => {
		props.onChange();
	};

	return (
		<div>
			<form onSubmit={onSubmitRegister}>
				<input
					type="text"
					value={username}
					onChange={usernameHandler}
					placeholder="Enter username"
				/>
				<input
					type="password"
					value={password}
					onChange={passwordHandler}
					placeholder="Enter password"
				/>
				<input type="submit" value="register" />
			</form>
			<button onClick={registerChange}>Already User Click Here</button>
		</div>
	);
};

export default RegisterUser;
