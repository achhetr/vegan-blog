import * as actionTypes from './authActionTypes';
import { Auth } from 'aws-amplify';

export const loginUser = ({ email }) => {
	return {
		type: actionTypes.LOGIN,
		payload: {
			email,
		},
	};
};

export const registerUser = ({ email }) => {
	return {
		type: actionTypes.REGISTER,
		payload: {
			email,
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

// error in this step
export const loginWithGoogle = () => {
	return async (dispatch) => {
		try {
			const result = await Auth.federatedSignIn({ provider: 'Google' });
			const user = await Auth.currentAuthenticatedUser();
			const email = user.attributes.email;

			// console.log(result, 'Result from google');

			return dispatch(loginUser({ email }));
		} catch (error) {
			console.log('User is not logged in');
		}
	};
};

export const loginWithAuth = ({ email, password }) => {
	return async (dispatch) => {
		console.log('I am working from login auth');
		await Auth.signIn(email, password);
		return dispatch(loginUser({ email }));
	};
};
export const registerWithAuth = ({ email, password }) => {
	return async (dispatch) => {
		console.log('I am working from register auth');
		await Auth.signUp({
			username: email,
			password,
			attributes: {
				email,
			},
		});
		return dispatch(registerUser({ email }));
	};
};
