import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo } from 'features/todos/todosEffects';

interface Props {
    _id: string;
}

const DeleteTodo: React.FC<Props> = ({ _id }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(deleteTodo(_id));
    }, [dispatch, _id]);

    return <></>;
};

export default DeleteTodo;
