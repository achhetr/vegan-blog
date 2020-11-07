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
	return async (dispatch) => {
		try {
			await Auth.signOut();
			return dispatch({
				type: actionTypes.LOGOUT,
			});
		} catch (error) {
			console.error('Error in sign out', error);
		}
	};
};

export const loginWithEmail = ({ email, password }) => {
	return async (dispatch) => {
		try {
			const user = await Auth.signIn(email, password);
			return dispatch(loginUser({ user, loginBy: 'email' }));
		} catch (error) {
			console.error('Error in login', error);
		}
	};
};

export const registerWithEmail = ({ email, password }) => {
	return async (dispatch) => {
		try {
			const user = await Auth.signUp({
				username: email,
				password,
				attributes: {
					email,
				},
			});
			return dispatch(registerUser({ user, loginBy: 'email' }));
		} catch (error) {
			console.error('Error in register', error);
		}
	};
};

export const loginWithGoogle = () => {
	return async (dispatch) => {
		try {
			await Auth.federatedSignIn({ provider: 'Google' });
			const user = await Auth.currentAuthenticatedUser();
			return dispatch(loginUser({ user, loginBy: 'google' }));
		} catch (error) {
			console.error('Error in user login by google', error);
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
			console.error('Error in user login by facebook', error);
		}
	};
};
