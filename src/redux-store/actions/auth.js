import { LOGIN_USER } from './authActionTypes';

export const loginUser = ({ username, password }) => {
	return {
		payload: {
			username,
			password,
		},
		type: LOGIN_USER,
	};
};
