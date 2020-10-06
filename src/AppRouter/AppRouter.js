import React from 'react';
import { Provider } from 'react-redux';

import createStore from '../redux-store/store/createStore';
import MainApp from '../components/MainApp/MainApp';

const AppRouter = () => {
	const store = createStore;
	return (
		<Provider store={store}>
			<MainApp />
		</Provider>
	);
};

export default AppRouter;
