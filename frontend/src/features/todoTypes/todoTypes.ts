import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TodoType } from 'types/TodoType';
import { addTodoType, deleteTodoType, editTodoType, fetchTodoTypes, } from 'features/todoTypes/todoTypesEffects';

export interface TodoTypesState {
    items: Record<string, TodoType>;
    ids: string[];
    isFetching: boolean;
    lastUpdated?: number | undefined;
}

const initialState: TodoTypesState = {
    items: {},
    ids: [],
    isFetching: false,
};

const addTodoTypeSuccess = (state: TodoTypesState, action: PayloadAction<TodoType>): void => {
    state.items[action.payload._id] = action.payload;
};
const editTodoTypeSuccess = (state: TodoTypesState, action: PayloadAction<TodoType>): void => {
    state.items[action.payload._id] = action.payload;
};
const deleteTodoTypeSuccess = (state: TodoTypesState, action: PayloadAction<string>): void => {
    delete state.items[action.payload as string];
};
const loadTodoTypes = (state: TodoTypesState): void => {
    state.isFetching = true;
};
const saveTodoTypes = (
    state: TodoTypesState,
    action: PayloadAction<{ items: TodoType[]; lastUpdated: number }>,
): void => {
    state.isFetching = false;
    state.lastUpdated = action.payload.lastUpdated || undefined;
    state.ids = action.payload.items.map((item) => item._id);
    state.items =
        action.payload.items?.reduce((acc: Record<string, TodoType>, current: TodoType) => {
            acc[current._id] = current;
            return acc;
        }, {}) || {};
};

export default createSlice({
    name: 'todoTypes',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(addTodoType.fulfilled, addTodoTypeSuccess);
        builder.addCase(editTodoType.fulfilled, editTodoTypeSuccess);
        builder.addCase(deleteTodoType.fulfilled, deleteTodoTypeSuccess);
        builder.addCase(fetchTodoTypes.fulfilled, saveTodoTypes);
        builder.addCase(fetchTodoTypes.pending, loadTodoTypes);
    },
});
