import { Todo } from 'types/Todo';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { addTodo, deleteTodo, editTodo, fetchTodos } from 'features/todos/todosEffects';

export interface TodosState {
    items: Record<string, Todo>;
    ids: string[];
    isFetching: boolean;
    lastUpdated?: number | undefined;
}

const initialState: TodosState = {
    items: {},
    ids: [],
    isFetching: false,
};

const addTodoSuccess = (state: TodosState, action: PayloadAction<Todo>): void => {
    state.items[action.payload._id] = action.payload;
};
const editTodoSuccess = (state: TodosState, action: PayloadAction<Todo>): void => {
    state.items[action.payload._id] = action.payload;
};
const deleteTodoSuccess = (state: TodosState, action: PayloadAction<string>): void => {
    delete state.items[action.payload as string];
};
const loadTodos = (state: TodosState): void => {
    state.isFetching = true;
};
const saveTodos = (
    state: TodosState,
    action: PayloadAction<{ items: Todo[]; lastUpdated: number }>,
): void => {
    state.isFetching = false;
    state.lastUpdated = action.payload.lastUpdated || undefined;
    state.ids = action.payload.items.map((item) => item._id);
    state.items =
        action.payload.items?.reduce((acc: Record<string, Todo>, current: Todo) => {
            acc[current._id] = current;
            return acc;
        }, {}) || {};
};

export default createSlice({
    name: 'todos',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(addTodo.fulfilled, addTodoSuccess);
        builder.addCase(editTodo.fulfilled, editTodoSuccess);
        builder.addCase(deleteTodo.fulfilled, deleteTodoSuccess);
        builder.addCase(fetchTodos.fulfilled, saveTodos);
        builder.addCase(fetchTodos.pending, loadTodos);
    },
});
