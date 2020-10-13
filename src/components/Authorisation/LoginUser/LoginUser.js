import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { loginUser } from '../../../redux-store/actions/auth';
import authorisationStyle from '../authorisation.module.scss';
import loginStyle from './login.module.scss';
import Input from '../../Utils/Input/Input';

const LoginUser = (props) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const dispatch = useDispatch();

	const emailHandler = (e) => {
		const userEmail = e.target.value;
		setEmail(() => userEmail);
	};
	const passwordHandler = (e) => {
		const pass = e.target.value;
		setPassword(() => pass);
	};

	const onSubmitLogin = (e) => {
		e.preventDefault();
		dispatch(loginUser({ email, password }));
	};

	const registerChange = () => {
		props.onChange();
	};

	return (
		<div className={loginStyle.Container}>
			<form
				onSubmit={onSubmitLogin}
				className={authorisationStyle.FormContainer}
			>
				<Input
					id="input-email"
					name="Enter Email"
					type="text"
					value={email}
					onChange={emailHandler}
					placeholder="Enter username"
				/>
				<Input
					type="password"
					id="input-password"
					name="Enter Password"
					value={password}
					onChange={passwordHandler}
					placeholder="Enter password"
				/>
				<input
					type="submit"
					value="login"
					className={loginStyle.BtnRegister}
				/>
			</form>
			<button
				onClick={registerChange}
				className={authorisationStyle.BtnToggle}
			>
				New User Click Here
			</button>
		</div>
	);
};

export default LoginUser;
