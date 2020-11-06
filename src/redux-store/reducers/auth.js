import * as actionTypes from '../actions/authActionTypes';

const defaultUser = {
	userAuthenticated: null,
	authToken: false,
	userSaved: null,
};

const reducers = (state = { ...defaultUser }, action) => {
	switch (action.type) {
		// case actionTypes.LOGIN:
		// 	return {
		// 		email: action.payload.email,
		// 		auth: true,
		// 	};

		// case actionTypes.REGISTER:
		// 	return {
		// 		email: action.payload.email,
		// 		auth: true,
		// 	};
		// case actionTypes.LOGOUT:
		// 	return {
		// 		...defaultUser,
		// 	};

		default:
			return state;
	}
};

export default reducers;
