import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TodoType } from 'features/todoTypes/TodoType';
import { addTodoType, deleteTodoType, editTodoType, fetchTodoTypes } from 'features/todoTypes/todoTypesEffects';

export interface TodoTypesStateType {
    items: Record<string, TodoType>;
    ids: string[];
    isFetching: boolean;
    lastUpdated?: number | undefined;
}

export type TodoTypesState = Readonly<TodoTypesStateType>;

const initialState: TodoTypesState = {
    items: {},
    ids: [],
    isFetching: false,
};

const addTodoTypeSuccess = (state: TodoTypesStateType, action: PayloadAction<TodoType>): void => {
    state.items[action.payload._id] = action.payload;
};
const editTodoTypeSuccess = (state: TodoTypesStateType, action: PayloadAction<TodoType>): void => {
    state.items[action.payload._id] = action.payload;
};
const deleteTodoTypeSuccess = (state: TodoTypesStateType, action: PayloadAction<string>): void => {
    delete state.items[action.payload as string];
};
const loadTodoTypes = (state: TodoTypesStateType): void => {
    state.isFetching = true;
};
const saveTodoTypes = (
    state: TodoTypesStateType,
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
    name: 'todos',
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
