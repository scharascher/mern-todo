import React, { useEffect } from 'react';
import Todos from 'features/todos/components/Todos';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from 'features/todos/todosEffects';
import { getTodos, getTodosItems } from 'features/todos/todosSelectors';
import { getIsAuthenticated } from 'features/auth/authSelectors';
import { fetchTodoTypes } from 'features/todoTypes/todoTypesEffects';

const TodosWrapper: React.FC = () => {
    const dispatch = useDispatch();
    const { isFetching } = useSelector(getTodos);
    const items = useSelector(getTodosItems);
    const isAuthenticated = useSelector(getIsAuthenticated);

    useEffect(() => {
        dispatch(fetchTodos());
        dispatch(fetchTodoTypes());
    });

    if (!isAuthenticated == null) return null;

    return <Todos todos={items} isFetching={isFetching} />;
};

export default TodosWrapper;
