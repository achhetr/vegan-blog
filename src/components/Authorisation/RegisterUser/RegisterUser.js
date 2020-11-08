import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { registerWithEmail } from '../../../redux-store/actions/auth';
import Input from '../../Input/Input';
import Loading from '../../Loading/Loading';
import registerStyle from './register.module.scss';

const RegisterUser = () => {
	const history = useHistory();
	const [loading, setLoading] = useState(false);
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
		if (confirmPassword === password && password.length > 0 && email) {
			setLoading(() => true);
			dispatch(registerWithEmail({ email, password }));
		} else {
			alert('Something is incorrect');
		}
	};

	if (loading) return <Loading />;

	return (
		<>
			<h2>Sign Up</h2>
			<form
				onSubmit={onSubmitRegister}
				className={registerStyle.FormContainer}
			>
				<Input
					type="text"
					placeholder="Email address"
					value={email}
					onChange={emailHandler}
					required={true}
				/>
				<Input
					type="password"
					placeholder="Password"
					value={password}
					onChange={passwordHandler}
					required={true}
				/>
				<Input
					type="password"
					placeholder="Confirm Password"
					value={confirmPassword}
					onChange={confirmPasswordHandler}
					required={true}
				/>
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
						onClick={() => {
							history.push('/login');
						}}
					/>
				</div>
			</form>
		</>
	);
};

export default RegisterUser;
