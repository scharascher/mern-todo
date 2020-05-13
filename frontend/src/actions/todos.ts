import { Todo } from 'helpers/Todo';
import Api from 'helpers/api';
export const ADD_TODO_REQUEST = 'ADD_TODO_REQUEST';
export const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS';
export const LOAD_TODOS = 'LOAD_TODOS';
export const SAVE_TODOS = 'SAVE_TODOS';
export const DELETE_TODO_REQUEST = 'DELETE_TODO_REQUEST';
export const DELETE_TODO_SUCCESS = 'DELETE_TODO_SUCCESS';
export const EDIT_TODO_REQUEST = 'EDIT_TODO_REQUEST';
export const EDIT_TODO_SUCCESS = 'EDIT_TODO_SUCCESS';
export const GET_TODO_REQUEST = 'GET_TODO_REQUEST';
export const GET_TODO_SUCCESS = 'GET_TODO_SUCCESS';

export const addTodoRequest = () => ({ type: ADD_TODO_REQUEST });
export const addTodoSuccess = (todo: Todo) => ({ type: ADD_TODO_SUCCESS, todo });

export const editTodoRequest = () => ({ type: EDIT_TODO_REQUEST });
export const editTodoSuccess = (todo: Todo) => ({ type: EDIT_TODO_SUCCESS, todo });

export const getTodoRequest = () => ({ type: GET_TODO_REQUEST });
export const getTodoSuccess = (todo: Todo) => ({ type: GET_TODO_SUCCESS, todo });

export const deleteTodoRequest = () => ({ type: DELETE_TODO_REQUEST });
export const deleteTodoSuccess = (_id: string) => ({ type: DELETE_TODO_SUCCESS, _id });

export const loadTodos = () => ({ type: LOAD_TODOS });

export const saveTodos = (todos: Todo[]) => ({
    type: SAVE_TODOS,
    items: todos,
    lastUpdated: Date.now(),
});

const fetchTodos = () => {
    return (dispatch: any) => {
        dispatch(loadTodos());
        return Api.authorizedRequest('todos').then((json) => dispatch(saveTodos(json)));
    };
};

const shouldFetchTodos = (state: any) => {
    return !state.todos?.isFetching && !state.todos?.lastUpdated;
};

export const addTodo = (todo: Omit<Todo, '_id'>) => {
    return (dispatch: any) => {
        dispatch(addTodoRequest());
        return Api.authorizedRequest('todos', 'PUT', todo).then(({ _id }) => {
            dispatch(addTodoSuccess({ ...todo, _id }));
        });
    };
};

export const editTodo = (todo: Todo) => {
    return (dispatch: any) => {
        dispatch(editTodoRequest());
        return Api.authorizedRequest('todos', 'POST', todo).then(() => {
            dispatch(editTodoSuccess(todo));
        });
    };
};

export const getTodo = (_id: string) => {
    return (dispatch: any) => {
        dispatch(getTodoRequest());
        return Api.authorizedRequest(`todos/${_id}`).then((todo: Todo) => {
            dispatch(getTodoSuccess(todo));
        });
    };
};

export const deleteTodo = (_id: string) => {
    return (dispatch: any) => {
        dispatch(deleteTodoRequest());
        return Api.authorizedRequest(`todos/${_id}`, 'DELETE').then(() => {
            dispatch(deleteTodoSuccess(_id));
        });
    };
};

export const fetchTodosIfNeeded = () => {
    return (dispatch: any, getState: any) => {
        if (shouldFetchTodos(getState())) {
            return dispatch(fetchTodos());
        }
    };
};
