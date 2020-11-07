import React from 'react';
import Amplify from 'aws-amplify';

import awsExports from './aws-exports';
import './styles/styles.scss';
import AppRouter from './AppRouter/AppRouter';

Amplify.configure(awsExports);

const App = () => <AppRouter />;

export default App;
