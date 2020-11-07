import * as actionTypes from '../actions/authActionTypes';

const defaultUser = {
	userAuthenticated: false,
	authToken: false,
	user: null,
	loginBy: '',
};

const reducers = (state = { ...defaultUser }, action) => {
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
			return {
				...defaultUser,
			};

		default:
			return state;
	}
};

export default reducers;
