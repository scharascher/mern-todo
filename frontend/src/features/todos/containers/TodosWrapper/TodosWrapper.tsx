import React, { useEffect } from 'react';
import 'features/todos/containers/TodosWrapper/TodosWrapper.scss';
import Todos from 'features/todos/components/Todos/Todos';
import { connect, DispatchProp } from 'react-redux';
import { fetchTodos } from 'features/todos/todosEffects';
import { TodosState, TodosStateType } from 'features/todos/todos';
import { RootState } from 'app/rootReducer';

type Props = Omit<TodosStateType, 'lastUpdated'>;

const TodosWrapper: React.FC<Props & DispatchProp<any>> = ({ dispatch, items, isFetching }) => {
    useEffect(() => {
        dispatch(fetchTodos());
    });

    return <Todos todos={items} isFetching={isFetching} />;
};

const mapStateToProps = (state: RootState): TodosState => {
    return state.todos;
};

export default connect(mapStateToProps)(TodosWrapper);
