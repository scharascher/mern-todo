import React, { useEffect } from 'react';
import 'features/todos/containers/TodosWrapper/TodosWrapper.scss';
import Todos from 'features/todos/components/Todos/Todos';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from 'features/todos/todosEffects';
import { getTodos } from 'features/todos/todosSelector';
import { getIsAuthenticated } from 'features/auth/authSelectors';

const TodosWrapper: React.FC = () => {
    const dispatch = useDispatch();
    const { items, isFetching } = useSelector(getTodos);
    const isAuthenticated = useSelector(getIsAuthenticated);

    useEffect(() => {
        dispatch(fetchTodos());
    });

    if (!isAuthenticated == null) return null;

    return <Todos todos={items} isFetching={isFetching} />;
};

export default TodosWrapper;
