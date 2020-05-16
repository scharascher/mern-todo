import { combineReducers } from 'redux';
import todos from 'reducers/todos';
import auth from './auth';

export default combineReducers({
    todos,
    auth,
});
