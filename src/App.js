import React, { useEffect } from 'react';
import Amplify from 'aws-amplify';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import Aos from 'aos';

import 'aos/dist/aos.css';

import awsExports from './aws-exports';
import './styles/styles.scss';
import AppRouter from './AppRouter/AppRouter';

Amplify.configure(awsExports);
library.add(fab, fas);

const App = () => {
	useEffect(() => {
		Aos.init({ delay: 50, duration: 1000 });
	}, []);
	return <AppRouter />;
};

export default App;
