import { createStore, combineReducers } from 'redux';
import blog from '../reducers/blog';
import auth from '../reducers/auth';

const rootReducers = combineReducers({
	blog,
	auth,
});

const store = createStore(rootReducers);

export default store;
