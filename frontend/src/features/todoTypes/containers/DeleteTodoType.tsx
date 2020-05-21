import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodoType } from 'features/todoTypes/todoTypesEffects';

interface Props {
    _id: string;
}

const DeleteTodoType: React.FC<Props> = ({ _id }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(deleteTodoType(_id));
    }, [dispatch, _id]);

    return <></>;
};

export default DeleteTodoType;
