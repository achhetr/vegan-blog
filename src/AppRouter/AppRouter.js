import React from 'react';
import { Provider } from 'react-redux';

import createStore from '../redux-store/store/createStore';
import Authentication from '../Authentication/Authentication';

const AppRouter = () => {
	const store = createStore;
	return (
		<Provider store={store}>
			<Authentication />
		</Provider>
	);
};

export default AppRouter;
