import React, { useEffect } from 'react';
import { deleteTodoType } from 'features/todoTypes/todoTypesEffects';
import { useAppDispatch } from 'app/store';

interface Props {
    _id: string;
}

const DeleteTodoType: React.FC<Props> = ({ _id }) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(deleteTodoType(_id));
    }, [dispatch, _id]);

    return <></>;
};

export default DeleteTodoType;
