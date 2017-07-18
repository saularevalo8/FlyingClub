import { combineReducers } from 'redux';
import pages from './pagesReducer';
import users from './userReducer';

const reducers = combineReducers({
    pages,
    users
});

export default reducers;