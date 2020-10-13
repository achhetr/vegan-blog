import { v4 as uuidv4 } from 'uuid';

import { LOGIN_USER, REGISTER_USER } from '../actions/authActionTypes';
import User from '../model/User';

const defaultState = {
	userId: '',
	loggedIn: false,
};

export default (state = { ...defaultState }, action) => {
	switch (action.type) {
		case LOGIN_USER:
			console.log('You are now logged in');
			return {
				userId: '123',
				loggedIn: true,
			};
		case REGISTER_USER:
			const user = new User(
				uuidv4(),
				action.payload.username,
				action.payload.password
			);
			console.log(
				`You are now registered and logged in with user id ${user.id}`
			);
			return {
				userId: user.id,
				loggedIn: true,
			};
		default:
			return state;
	}
};
