import Api from 'common/helpers/api';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { newTodo, Todo } from 'features/todos/Todo';
import { RootState } from 'app/rootReducer';

function decodeTodo(todo: any): Todo {
    return {
        ...todo,
        createdAt: new Date(todo.createdAt).getTime(),
        updatedAt: new Date(todo.updatedAt).getTime(),
    };
}

export const fetchTodos = createAsyncThunk(
    'todos/fetch',
    async () => ({
        items: (await Api.authorizedRequest('todos')).map(decodeTodo),
        lastUpdated: Date.now(),
    }),
    {
        condition(arg, { getState }): boolean {
            const { todos } = getState() as RootState;
            return !todos.isFetching && !todos.lastUpdated;
        },
    },
);

export const addTodo = createAsyncThunk('todos/addTodo', async (todo: newTodo) => {
    return decodeTodo(await Api.authorizedRequest('todos', 'PUT', todo));
});

export const editTodo = createAsyncThunk('todos/editTodo', async (todo: newTodo) => {
    return decodeTodo(await Api.authorizedRequest(`todos/${todo._id}`, 'POST', todo));
});

export const deleteTodo = createAsyncThunk('todos/deleteTodo', async (_id: string) => {
    await Api.authorizedRequest(`todos/${_id}`, 'DELETE');
    return _id;
});
