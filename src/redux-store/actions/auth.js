import { LOGIN_USER, REGISTER_USER } from './authActionTypes';

export const loginUser = ({ username, password }) => {
	return {
		payload: {
			username,
			password,
		},
		type: LOGIN_USER,
	};
};

export const registerUser = ({ username, password }) => {
	return {
		payload: {
			username,
			password,
		},
		type: REGISTER_USER,
	};
};
