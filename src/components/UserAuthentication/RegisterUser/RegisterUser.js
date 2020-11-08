import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { registerWithEmail } from '../../../redux-store/actions/auth';
import Input from '../../Input/Input';
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
		<>
			<h2>Sign Up</h2>
			<form
				onSubmit={onSubmitRegister}
				className={registerStyle.FormContainer}
			>
				<Input type="text" placeholder="Email address" />
				<Input type="password" placeholder="Password" />
				<Input type="password" placeholder="Confirm Password" />
				<div className={registerStyle.FormCheckBox}>
					<input type="checkbox" id="condition" />
					<label for="condition">
						I agree all statements in{' '}
						<span>terms and conditions</span>
					</label>
				</div>
				<div className={registerStyle.BtnContainer}>
					<input
						type="submit"
						value="Sign up"
						className={registerStyle.SubmitBtn}
					/>
					<input
						type="button"
						value="I'm already member"
						className={registerStyle.ChangeLink}
					/>
				</div>
			</form>
		</>
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
