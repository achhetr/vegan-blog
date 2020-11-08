import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Input from '../../Input/Input';
import { loginWithEmail, logout } from '../../../redux-store/actions/auth';
import loginStyle from './login.module.scss';

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
		dispatch(loginWithEmail({ email, password }));
	};

	return (
		<>
			<h2>Sign in</h2>
			<form onSubmit={() => {}} className={loginStyle.FormContainer}>
				<Input type="text" placeholder="Email address" />
				<Input type="password" placeholder="Password" />
				<div className={loginStyle.BtnContainer}>
					<input
						type="submit"
						value="Sign in"
						className={loginStyle.SubmitBtn}
					/>
					<input
						type="button"
						value="I dont' have account"
						className={loginStyle.ChangeLink}
					/>
				</div>

				<div className={loginStyle.SocialBtnContainer}>
					<button>
						<img
							src="https://www.flaticon.com/svg/static/icons/svg/281/281764.svg"
							alt="google"
						/>
						Sign in
					</button>
					<button>
						<img
							src="https://www.flaticon.com/svg/static/icons/svg/733/733547.svg"
							alt="google"
						/>
						Sign in
					</button>
				</div>
			</form>
		</>
	);
};

export default LoginUser;

{
	/* <div className={loginStyle.Container}>
<form onSubmit={onSubmitLogin}>
	<input
		id="input-email"
		name="Enter Email"
		type="text"
		value={email}
		onChange={emailHandler}
		placeholder="Enter username"
	/>
	<input
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
<button onClick={() => dispatch(logout())}>Sign out</button>
</div> */
}
