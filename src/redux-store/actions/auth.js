import * as actionTypes from './authActionTypes';
import { Auth } from 'aws-amplify';

const loginUser = ({ user, loginBy }) => {
	return {
		type: actionTypes.LOGIN,
		payload: {
			user,
			loginBy,
		},
	};
};
const registerUser = ({ user, loginBy }) => {
	return {
		type: actionTypes.REGISTER,
		payload: {
			user,
			loginBy,
		},
	};
};

export const logout = () => {
	return (dispatch) => {
		Auth.signOut();
		return dispatch({
			type: actionTypes.LOGOUT,
		});
	};
};

export const loginWithEmail = ({ email, password }) => {
	return async (dispatch) => {
		const user = await Auth.signIn(email, password);
		console.log(user, 'login user');
		return dispatch(loginUser({ user, loginBy: 'email' }));
	};
};

export const registerWithEmail = ({ email, password }) => {
	return async (dispatch) => {
		const user = await Auth.signUp({
			username: email,
			password,
			attributes: {
				email,
			},
		});
		return dispatch(registerUser({ user, loginBy: 'email' }));
	};
};

// error in this step
export const loginWithGoogle = () => {
	return async (dispatch) => {
		try {
			await Auth.federatedSignIn({ provider: 'Google' });
			const user = await Auth.currentAuthenticatedUser();

			return dispatch(loginUser({ user, loginBy: 'google' }));
		} catch (error) {
			console.log('User is not logged in by google');
		}
	};
};

export const loginWithFacebook = () => {
	return async (dispatch) => {
		try {
			await Auth.federatedSignIn({ provider: 'Facebook' });
			const user = await Auth.currentAuthenticatedUser();

			return dispatch(loginUser({ user, loginBy: 'facebook' }));
		} catch (error) {
			console.log('User is not logged in by facebook');
		}
	};
};
