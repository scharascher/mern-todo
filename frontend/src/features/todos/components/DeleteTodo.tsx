import React, { useEffect } from 'react';
import { deleteTodo } from 'features/todos/todosEffects';
import { useAppDispatch } from 'app/store';

interface Props {
    _id: string;
}

const DeleteTodo: React.FC<Props> = ({ _id }) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(deleteTodo(_id));
    }, [dispatch, _id]);

    return <></>;
};

export default DeleteTodo;
