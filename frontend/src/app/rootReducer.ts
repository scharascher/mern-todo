import { combineReducers } from 'redux';
import todos from 'features/todos/todosReducers';
import auth from 'features/auth/authReducers';

export default combineReducers({
    todos,
    auth,
});
