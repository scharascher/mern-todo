import { RootState } from 'app/rootReducer';
import { TodoTypesState } from 'features/todoTypes/todoTypes';
import { TodoType } from 'features/todoTypes/TodoType';
import { Option } from 'common/helpers/Option';

export function getTodoTypes(state: RootState): TodoTypesState {
    return state.todoTypes;
}

export function getTodoTypesItems(state: RootState): TodoType[] {
    return Object.values(state.todoTypes.items).sort((a, b) => {
        return b.createdAt - a.createdAt;
    });
}

export function getTodoTypesOptions(state: RootState): Option[] {
    return getTodoTypesItems(state).map((item: TodoType) => ({
        value: item._id,
        label: item.name,
    }));
}

export function returnGetTodoTypeById(_id: string) {
    return (state: RootState): TodoType | undefined => {
        return state.todoTypes.items[_id];
    };
}
