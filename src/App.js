import React, { useState, useEffect } from 'react';
import Amplify, { Auth } from 'aws-amplify';

import AppRouter from './AppRouter/AppRouter';
import awsExports from './aws-exports';
import './styles/styles.scss';

Amplify.configure(awsExports);

const App = () => {
	const [user, setUser] = useState(undefined);

	// return <AppRouter />;

	return (
		<>
			<button
				onClick={() => Auth.federatedSignIn({ provider: 'Google' })}
			>
				Sign in with Google
			</button>
			<button onClick={() => Auth.signIn()}>Sign in</button>
		</>
	);
};

export default App;
