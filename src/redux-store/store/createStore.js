import { createStore, combineReducers } from 'redux';
import blog from '../reducers/blog';

const rootReducers = combineReducers({
	blog,
});

const store = createStore(rootReducers);

export default store;
