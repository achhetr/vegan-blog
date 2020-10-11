import { LOGIN_USER } from '../actions/authActionTypes';

const defaultState = {
	userId: '',
	loggedIn: false,
};

export default (state = { ...defaultState }, action) => {
	switch (action.type) {
		case LOGIN_USER:
			return {
				userId: '123',
				loggedIn: true,
			};
		default:
			return state;
	}
};
