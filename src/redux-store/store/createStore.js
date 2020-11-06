// import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import blog from '../reducers/blog';
import auth from '../reducers/auth';

const rootReducers = combineReducers({
	blog,
	auth,
});

// uncomment below to use in production
export default createStore(rootReducers, applyMiddleware(thunk));

// comment below to remove redux dev tool

// export default createStore(
// 	rootReducer,
// 	compose(
// 		applyMiddleware(thunk),
// 		window.devToolsExtension ? window.devToolsExtension() : (f) => f
// 	)
// );
