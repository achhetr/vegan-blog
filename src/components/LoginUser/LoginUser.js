import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { loginUser } from '../../redux-store/actions/auth';

const LoginUser = () => {
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

	const onSubmitLogin = (e) => {
		e.preventDefault();
		dispatch(loginUser({ username, password }));
	};

	return (
		<div>
			<form onSubmit={onSubmitLogin}>
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
				<input type="submit" value="login" />
			</form>
		</div>
	);
};

export default LoginUser;
