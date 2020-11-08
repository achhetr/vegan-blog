import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { registerWithEmail } from '../../../redux-store/actions/auth';
import Input from '../../Input/Input';
import registerStyle from './register.module.scss';

const Authorisation = (props) => {
	return (
		<div className={registerStyle.Container}>
			<div className={registerStyle.LeftContainer}>
				<h1 className={registerStyle.LeftContainerTitle}>
					Welcome to <span>Vegan World</span>
				</h1>
				<p className={registerStyle.LeftContainerContent}>
					This community is currently with 50,000+ active users
				</p>
			</div>
			<div className={registerStyle.RightContainer}></div>
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
