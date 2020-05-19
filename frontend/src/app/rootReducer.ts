import { combineReducers } from 'redux';
import todos from 'features/todos/todos';
import auth from 'features/auth/auth';

const rootReducer = combineReducers({
    todos: todos.reducer,
    auth: auth.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
