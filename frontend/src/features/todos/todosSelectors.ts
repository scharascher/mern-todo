import { RootState } from 'app/rootReducer';
import { createSelector } from '@reduxjs/toolkit';

export function getTodos(state: RootState) {
    return state.todos;
}

export const getTodosItems = createSelector(getTodos, (todos) => {
    return Object.values(todos.items).sort((a, b) => {
        return b.createdAt - a.createdAt;
    });
});

export function returnGetTodoById(_id: string) {
    return createSelector(getTodos, (todos) => {
        return todos.items[_id];
    });
}
