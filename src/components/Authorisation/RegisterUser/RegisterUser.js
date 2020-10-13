import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { registerUser } from '../../../redux-store/actions/auth';
import Input from '../../Utils/Input/Input';
import registerStyle from './register.module.scss';
import authorisationStyle from '../authorisation.module.scss';

const RegisterUser = (props) => {
	const [email, setEmail] = useState('');
	const [name, setName] = useState('');
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
	const nameHandler = (e) => {
		const name = e.target.value;
		setName(() => name);
	};

	const onSubmitRegister = (e) => {
		e.preventDefault();
		dispatch(registerUser({ name, email, password }));
	};

	const registerChange = () => {
		props.onChange();
	};

	return (
		<div className={registerStyle.Container}>
			<h2>Register</h2>
			<fieldset className={registerStyle.FieldContainer}>
				<legend>
					<h4>Let's get you on board'</h4>
				</legend>

				<form
					onSubmit={onSubmitRegister}
					className={authorisationStyle.FormContainer}
				>
					<Input
						id="input-fullname"
						name="Full Name *"
						value={name}
						onChange={nameHandler}
						placeholder="Enter Your Name"
					/>
					<Input
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
				</form>
			</fieldset>
			<button
				onClick={registerChange}
				className={authorisationStyle.BtnToggle}
			>
				Already User Click Here
			</button>
		</div>
	);
};

export default RegisterUser;
