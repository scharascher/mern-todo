import React, { useEffect } from 'react';
import 'features/todos/containers/TodosWrapper/TodosWrapper.scss';
import Todos from 'features/todos/components/Todos/Todos';
import { connect } from 'react-redux';
import { fetchTodos } from 'features/todos/todosEffects';

const TodosWrapper: React.FC<any> = ({ dispatch, items, isFetching }) => {
    useEffect(() => {
        dispatch(fetchTodos());
    });

    return <Todos todos={items} isFetching={isFetching} />;
};

const mapStateToProps = (state: any) => {
    return state.todos;
};

export default connect(mapStateToProps)(TodosWrapper);
