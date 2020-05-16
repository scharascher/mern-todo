import React, { useEffect } from 'react';
import 'features/todos/containers/DeleteTodo/DeleteTodo.scss';
import { connect } from 'react-redux';
import { deleteTodo } from 'features/todos/todosActions';

const DeleteTodo: React.FC<any> = ({ dispatch, _id }) => {
    useEffect(() => {
        dispatch(deleteTodo(_id));
    }, [dispatch, _id]);

    return <></>;
};

export default connect()(DeleteTodo);
