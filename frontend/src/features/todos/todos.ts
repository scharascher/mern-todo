import { Todo } from 'features/todos/Todo';
import { createSlice } from '@reduxjs/toolkit';
import { addTodo, deleteTodo, editTodo, fetchTodos } from 'features/todos/todosEffects';

const addTodoSuccess = (state: any, action: any) => {
    state.items.push(action.payload);
};
const editTodoSuccess = (state: any, action: any) => {
    const index = state.items.findIndex((item: Todo) => item._id === action.payload._id);
    if (index > -1) {
        state.items[index] = action.payload;
    }
};
const deleteTodoSuccess = (state: any, action: any) => {
    state.items.splice(
        state.items.findIndex((item: Todo) => item._id === action.payload),
        1,
    );
};
const loadTodos = (state: any) => {
    state.isFetching = true;
};
const saveTodos = (state: any, action: any) => {
    state.isFetching = false;
    state.lastUpdated = action.payload.lastUpdated;
    state.items = action.payload.items;
};

export default createSlice({
    name: 'todos',
    initialState: { items: [], isFetching: false },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(addTodo.fulfilled, addTodoSuccess);
        builder.addCase(editTodo.fulfilled, editTodoSuccess);
        builder.addCase(deleteTodo.fulfilled, deleteTodoSuccess);
        builder.addCase(fetchTodos.fulfilled, saveTodos);
        builder.addCase(fetchTodos.pending, loadTodos);
    },
});
