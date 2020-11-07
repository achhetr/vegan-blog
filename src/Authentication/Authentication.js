import React, { useState, useEffect } from 'react';
import { Auth, Hub } from 'aws-amplify';

import MainApp from '../components/MainApp/MainApp';

const Authentication = () => {
	const [user, setUser] = useState(undefined);

	const getAuthenticatedUser = async () => {
		try {
			const currentUser = await Auth.currentAuthenticatedUser();
			if (currentUser) {
				setUser(() => currentUser);
				console.log(currentUser, 'authentication');
			}
		} catch (error) {
			console.error('Error: User not authenticated', error);
		}
		return;
	};

	const hubListener = (data) => {
		const { payload } = data;
		console.log('A new auth event has happened: ', data, payload.event);
		switch (payload.event) {
			case 'signIn':
				getAuthenticatedUser();
				console.log('a user has signed in!');
				break;
			case 'signOut':
				console.log('a user has signed out!');
				break;
			default:
				console.log(payload.event, 'switch k andar');
		}
	};

	useEffect(() => {
		console.log('check me for authentication');
		Hub.listen('auth', hubListener);
	}, []);

	return (
		<>
			<MainApp user={user} />
		</>
	);
};

export default Authentication;
