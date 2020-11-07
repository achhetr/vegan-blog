import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { registerWithEmail } from '../../../redux-store/actions/auth';
import registerStyle from './register.module.scss';

const RegisterUser = (props) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const dispatch = useDispatch();

	const emailHandler = (e) => {
		const userEmail = e.target.value;
		setEmail(() => userEmail);
	};
	const passwordHandler = (e) => {
		const pass = e.target.value;
		setPassword(() => pass);
	};
	const confirmPasswordHandler = (e) => {
		const pass = e.target.value;
		setConfirmPassword(() => pass);
	};

	const onSubmitRegister = (e) => {
		e.preventDefault();
		console.log(confirmPassword, password, email);
		if (confirmPassword === password && password.length > 0 && email) {
			dispatch(registerWithEmail({ email, password }));
		} else {
			alert('Check karo kuch');
		}
	};
	useEffect(() => {
		console.log('from register');
	});

	return (
		<div className={registerStyle.Container}>
			<div className={registerStyle.LeftContainer}>
				<h1>
					Welcome to Vegan Community, this community is currently with
					50,000+ active users
				</h1>
			</div>
			<div className={registerStyle.RightContainer}>
				<h2>Sign Up</h2>
				<form
					onSubmit={onSubmitRegister}
					className={registerStyle.FormContainer}
				>
					<input placeholder="Email address" />
					<input placeholder="Password" />
					<input type="submit" value="Sign up" />
				</form>
			</div>
		</div>
	);
};

export default RegisterUser;

{
	/* <Input
					id="input-email"
					name="Email *"
					type="email"
					value={email}
					onChange={emailHandler}
					placeholder="Enter email"
				/>
				<Input
					id="input-password"
					name="Password *"
					type="password"
					value={password}
					onChange={passwordHandler}
					placeholder="Enter password"
				/>

				<Input
					id="input-confirm-password"
					name="Confirm Password *"
					type="password"
					value={confirmPassword}
					onChange={confirmPasswordHandler}
					placeholder="Enter password"
				/>
				<input
					type="submit"
					value="Sign Up"
					className={registerStyle.BtnRegister}
				/>
			</form> */
}
