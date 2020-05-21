import Api from 'common/helpers/api';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from 'app/rootReducer';
import { newTodoType, TodoType } from 'features/todoTypes/TodoType';

function decodeTodoType(todoType: any): TodoType {
    return {
        ...todoType,
        createdAt: new Date(todoType.createdAt).getTime(),
        updatedAt: new Date(todoType.updatedAt).getTime(),
    };
}

export const fetchTodoTypes = createAsyncThunk(
    'todoTypes/fetch',
    async () => ({
        items: (await Api.authorizedRequest('todoTypes')).map(decodeTodoType),
        lastUpdated: Date.now(),
    }),
    {
        condition(arg, { getState }): boolean {
            const { todoTypes } = getState() as RootState;
            return !todoTypes.isFetching && !todoTypes.lastUpdated;
        },
    },
);

export const addTodoType = createAsyncThunk(
    'todoTypes/addTodoType',
    async (todoType: newTodoType) => {
        return decodeTodoType(await Api.authorizedRequest('todoTypes', 'PUT', todoType));
    },
);

export const editTodoType = createAsyncThunk(
    'todoTypes/editTodoType',
    async (todoType: newTodoType) => {
        return decodeTodoType(
            await Api.authorizedRequest(`todoTypes/${todoType._id}`, 'POST', todoType),
        );
    },
);

export const deleteTodoType = createAsyncThunk('todoTypes/deleteTodoType', async (_id: string) => {
    await Api.authorizedRequest(`todoTypes/${_id}`, 'DELETE');
    return _id;
});
