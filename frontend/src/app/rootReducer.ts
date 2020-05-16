import { combineReducers } from 'redux';
import todos from 'features/todos/todos';
import auth from 'features/auth/auth';

export default combineReducers({
    todos: todos.reducer,
    auth: auth.reducer,
});
