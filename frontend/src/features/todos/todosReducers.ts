import {
    ADD_TODO_SUCCESS,
    DELETE_TODO_SUCCESS,
    EDIT_TODO_SUCCESS,
    LOAD_TODOS,
    SAVE_TODOS,
} from 'features/todos/todosActions';
import { Todo } from 'features/todos/Todo';
import createReducer from 'common/helpers/createReducer';

const getNewState = (state: any) => {
    const newState = { ...state };
    if (!newState.items) {
        newState.items = [];
    }
    return newState;
};

const addTodoSuccess = (state: any, action: any) => {
    const newState = getNewState(state);
    newState.items.push(action.todo);
    return newState;
};
const editTodoSuccess = (state: any, action: any) => {
    const newState = getNewState(state);
    const index = newState.items.findIndex((item: Todo) => item._id === action._id);
    if (index > -1) {
        newState.item[index] = action.todo;
    }
    return newState;
};
const deleteTodoSuccess = (state: any, action: any) => {
    const newState = getNewState(state);
    newState.items.splice(
        newState.items.findIndex((item: Todo) => item._id === action._id),
        1,
    );
    newState.items = [...newState.items];
    return newState;
};
const loadTodos = (state: any, action: any) => {
    const newState = getNewState(state);
    newState.isFetching = true;
    return newState;
};
const saveTodos = (state: any, action: any) => {
    const newState = getNewState(state);
    newState.isFetching = false;
    newState.lastUpdated = action.lastUpdated;
    newState.items = action.items;
    return newState;
};

export default createReducer(null, {
    [ADD_TODO_SUCCESS]: addTodoSuccess,
    [EDIT_TODO_SUCCESS]: editTodoSuccess,
    [LOAD_TODOS]: loadTodos,
    [SAVE_TODOS]: saveTodos,
    [DELETE_TODO_SUCCESS]: deleteTodoSuccess,
});
