import React from 'react';
import loadingStyle from './loading.module.scss';

const Loading = () => (
	<div className={loadingStyle.LoaderContainer}>
		<div className={loadingStyle.Loader}></div>
	</div>
);

export default Loading;
