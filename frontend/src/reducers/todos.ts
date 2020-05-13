import {
    ADD_TODO_SUCCESS,
    DELETE_TODO_SUCCESS,
    EDIT_TODO_SUCCESS,
    LOAD_TODOS,
    SAVE_TODOS,
} from 'actions/todos';
import { Todo } from '../helpers/Todo';

export default function (state: Record<string, any> = {}, action: any): any {
    const newState = { ...state };
    if (!newState.items) {
        newState.items = [];
    }
    switch (action.type) {
        case ADD_TODO_SUCCESS:
            newState.items.push(action.todo);
            return newState;
        case EDIT_TODO_SUCCESS:
            const index = newState.items.findIndex((item: Todo) => item._id === action._id);
            if (index > -1) {
                newState.item[index] = action.todo;
            }
            return newState;
        case LOAD_TODOS:
            newState.isFetching = true;
            return newState;
        case SAVE_TODOS:
            newState.isFetching = false;
            newState.lastUpdated = action.lastUpdated;
            newState.items = action.items;
            return newState;
        case DELETE_TODO_SUCCESS:
            newState.items.splice(
                newState.items.findIndex((item: Todo) => item._id === action._id),
                1,
            );
            newState.items = [...newState.items];
            return newState;
        default:
            return state;
    }
}
