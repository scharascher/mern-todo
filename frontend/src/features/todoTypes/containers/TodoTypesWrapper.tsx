import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getIsAuthenticated } from 'features/auth/authSelectors';
import TodoTypes from 'features/todoTypes/components/TodoTypes';
import { fetchTodoTypes } from 'features/todoTypes/todoTypesEffects';
import { getTodoTypes, getTodoTypesItems } from 'features/todoTypes/todoTypesSelectors';

const TodoTypesWrapper: React.FC = () => {
    const dispatch = useDispatch();
    const { isFetching } = useSelector(getTodoTypes);
    const items = useSelector(getTodoTypesItems);
    const isAuthenticated = useSelector(getIsAuthenticated);

    useEffect(() => {
        dispatch(fetchTodoTypes());
    });

    if (!isAuthenticated == null) return null;

    return <TodoTypes isFetching={isFetching} todoTypes={items} />;
};

export default TodoTypesWrapper;
