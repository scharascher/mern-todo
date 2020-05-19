import { Todo } from 'features/todos/Todo';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { addTodo, deleteTodo, editTodo, fetchTodos } from 'features/todos/todosEffects';

export interface TodosStateType {
    items: Todo[];
    isFetching: boolean;
    lastUpdated?: number | undefined;
}

export type TodosState = Readonly<TodosStateType>;

const initialState: TodosState = {
    items: [],
    isFetching: false,
};

const addTodoSuccess = (state: TodosStateType, action: PayloadAction<Todo>): void => {
    state.items.push(action.payload);
};
const editTodoSuccess = (state: TodosStateType, action: PayloadAction<Todo>): void => {
    const index = state.items.findIndex((item: Todo) => item._id === action.payload._id);
    if (index > -1) {
        state.items[index] = action.payload;
    }
};
const deleteTodoSuccess = (state: TodosStateType, action: PayloadAction<string>): void => {
    state.items.splice(
        state.items.findIndex((item: Todo) => item._id === action.payload),
        1,
    );
};
const loadTodos = (state: TodosStateType): void => {
    state.isFetching = true;
};
const saveTodos = (
    state: TodosStateType,
    action: PayloadAction<{ items: Todo[]; lastUpdated: number }>,
): void => {
    state.isFetching = false;
    state.lastUpdated = action.payload.lastUpdated || undefined;
    state.items = action.payload.items || [];
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
