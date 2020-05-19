import Api from 'common/helpers/api';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Todo } from 'features/todos/Todo';
import { RootState } from 'app/rootReducer';

export const fetchTodos = createAsyncThunk(
    'todos/fetch',
    async () => ({ items: await Api.authorizedRequest('todos'), lastUpdated: Date.now() }),
    {
        condition(arg, { getState }): boolean {
            const { todos } = getState() as RootState;
            return !todos.isFetching && !todos.lastUpdated;
        },
    },
);

export const addTodo = createAsyncThunk('todos/addTodo', async (todo: Omit<Todo, '_id'>) => {
    const { _id } = await Api.authorizedRequest('todos', 'PUT', todo);
    return { ...todo, _id };
});

export const editTodo = createAsyncThunk('todos/editTodo', async (todo: Todo) => {
    await Api.authorizedRequest(`todos/${todo._id}`, 'POST', todo);
    return todo;
});

export const deleteTodo = createAsyncThunk('todos/deleteTodo', async (_id: string) => {
    await Api.authorizedRequest(`todos/${_id}`, 'DELETE');
    return _id;
});
