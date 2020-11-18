import { RootState } from 'app/rootReducer';
import { TodoTypesState } from 'features/todoTypes/todoTypes';
import { TodoType } from 'types/TodoType';
import { Option } from 'types/Option';
import { createSelector } from '@reduxjs/toolkit';

export function getTodoTypes(state: RootState): TodoTypesState {
    return state.todoTypes;
}

export const getTodoTypesItems = createSelector(getTodoTypes, (todoTypes) => {
    return Object.values(todoTypes.items).sort((a, b) => {
        return b.createdAt - a.createdAt;
    });
});

export const getTodoTypesOptions = createSelector(getTodoTypesItems, (items): Option[] => {
    return items.map((item: TodoType) => ({
        value: item._id,
        label: item.name,
    }));
});

export function returnGetTodoTypeById(_id: string) {
    return createSelector(getTodoTypes, (todoTypes) => {
        return todoTypes.items[_id];
    });
}
