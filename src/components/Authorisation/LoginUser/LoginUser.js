import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Input from '../../Input/Input';
import Loading from '../../Loading/Loading';
import {
	loginWithEmail,
	loginWithGoogle,
	loginWithFacebook,
} from '../../../redux-store/actions/auth';
import loginStyle from './login.module.scss';

const LoginUser = () => {
	const history = useHistory();
	const [loading, setLoading] = useState(false);
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
		setLoading(() => true);
		dispatch(loginWithEmail({ email, password }));
	};

	if (loading) return <Loading />;

	return (
		<>
			<h2>Sign in</h2>
			<form onSubmit={onSubmitLogin} className={loginStyle.FormContainer}>
				<Input
					type="text"
					placeholder="Email address"
					value={email}
					onChange={emailHandler}
				/>
				<Input
					type="password"
					placeholder="Password"
					value={password}
					onChange={passwordHandler}
				/>
				<div className={loginStyle.BtnContainer}>
					<input
						type="submit"
						value="Sign in"
						className={loginStyle.SubmitBtn}
					/>
					<input
						type="button"
						value="I dont' have an account"
						className={loginStyle.ChangeLink}
						onClick={() => {
							history.push('/register');
						}}
					/>
				</div>
			</form>
			<div className={loginStyle.SocialBtnContainer}>
				<button onClick={() => dispatch(loginWithGoogle())}>
					<img
						src="https://www.flaticon.com/svg/static/icons/svg/281/281764.svg"
						alt="google"
					/>
					Sign in
				</button>

				<button onClick={() => dispatch(loginWithFacebook())}>
					<img
						src="https://www.flaticon.com/svg/static/icons/svg/733/733547.svg"
						alt="facebook"
					/>
					Sign in
				</button>
			</div>
		</>
	);
};

export default LoginUser;
