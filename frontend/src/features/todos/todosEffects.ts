import { Todo } from 'features/todos/Todo';
import Api from 'common/helpers/api';
import todos from 'features/todos/todos';

const fetchTodos = () => {
    return (dispatch: any) => {
        dispatch(todos.actions.load());
        return Api.authorizedRequest('todos').then((json) =>
            dispatch(todos.actions.save(json)),
        );
    };
};

const shouldFetchTodos = (state: any) => {
    return !state.todos?.isFetching && !state.todos?.lastUpdated;
};

export const addTodo = (todo: Omit<Todo, '_id'>) => {
    return (dispatch: any) => {
        return Api.authorizedRequest('todos', 'PUT', todo).then(({ _id }) => {
            dispatch(todos.actions.addSuccess({ ...todo, _id }));
        });
    };
};

export const editTodo = (todo: Todo) => {
    return (dispatch: any) => {
        return Api.authorizedRequest(`todos/${todo._id}`, 'POST', todo).then(() => {
            dispatch(todos.actions.editSuccess(todo));
        });
    };
};

// export const getTodo = (_id: string) => {
//     return (dispatch: any) => {
//         return Api.authorizedRequest(`todos/${_id}`).then((todo: Todo) => {
//             dispatch(todos.actions.getSuccess(todo));
//         });
//     };
// };

export const deleteTodo = (_id: string) => {
    return (dispatch: any) => {
        return Api.authorizedRequest(`todos/${_id}`, 'DELETE').then(() => {
            dispatch(todos.actions.deleteSuccess(_id));
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
