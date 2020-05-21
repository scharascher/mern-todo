import { combineReducers } from 'redux';
import todos from 'features/todos/todos';
import auth from 'features/auth/auth';
import todoTypes from 'features/todoTypes/todoTypes';

const rootReducer = combineReducers({
    todos: todos.reducer,
    auth: auth.reducer,
    todoTypes: todoTypes.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
