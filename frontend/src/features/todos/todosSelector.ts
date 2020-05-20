import { RootState } from 'app/rootReducer';
import { TodosState } from 'features/todos/todos';
import { Todo } from 'features/todos/Todo';

export function getTodos(state: RootState): TodosState {
    return state.todos;
}

export function getTodosItems(state: RootState): Todo[] {
    return state.todos.items;
}

export function returnGetTodoById(_id: string) {
    return (state: RootState): Todo | undefined => {
        return state.todos.items.find((todo: Todo) => todo._id === _id);
    };
}
