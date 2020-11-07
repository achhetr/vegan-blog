import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = (props) => {
	const { component: Component, ...options } = props;
	const authToken = useSelector((state) => state.auth.authToken);
	console.log(authToken, 'Authentication token');
	return (
		<div>
			{authToken ? (
				<Route {...options} render={(props) => <Component />} />
			) : (
				<Redirect to="/home" />
			)}
		</div>
	);
};

export default PrivateRoute;
