import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getIsAuthenticated } from 'features/auth/authSelectors';
import TodoTypes from 'features/todoTypes/components/TodoTypes';
import { fetchTodoTypes } from 'features/todoTypes/todoTypesEffects';
import { getTodoTypes, getTodoTypesItems } from 'features/todoTypes/todoTypesSelectors';
import { useAppDispatch } from 'app/store';

const TodoTypesWrapper: React.FC = () => {
    const dispatch = useAppDispatch();
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
