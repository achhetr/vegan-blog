import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const PrivateRoute = (props) => {
	const { component: Component, ...options } = props;
	// const authToken = useSelector((state) => state.reducers.auth);
	const authToken = true;
	return (
		<div>
			{authToken ? (
				<Route {...options} render={(props) => <Component />} />
			) : (
				<Redirect to="/login" />
			)}
		</div>
	);
};
