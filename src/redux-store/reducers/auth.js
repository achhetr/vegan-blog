import * as actionTypes from '../actions/authActionTypes';
import { Auth } from 'aws-amplify';

const defaultUser = {
	userAuthenticated: false,
	authToken: true,
	user: null,
	loginBy: '',
};

const reducers = (state = { ...defaultUser }, action) => {
	const getAuthenticatedUser = async () => {
		try {
			const user = await Auth.currentAuthenticatedUser();
			console.log(user, 'value is there');
		} catch (err) {
			console.log('Check User after sign out ', err);
		}
	};

	switch (action.type) {
		case actionTypes.LOGIN:
			return {
				user: action.payload.user,
				authToken: true,
				loginBy: action.payload.loginBy,
			};

		case actionTypes.REGISTER:
			return {
				user: action.payload.user,
				authToken: true,
				loginBy: action.payload.loginBy,
			};

		case actionTypes.LOGOUT:
			console.log('Inside logout');
			getAuthenticatedUser();
			return {
				...defaultUser,
			};

		default:
			return state;
	}
};

export default reducers;
