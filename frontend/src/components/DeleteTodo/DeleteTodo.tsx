import React, { useEffect } from 'react';
import './DeleteTodo.scss';
import { connect } from 'react-redux';
import { deleteTodo } from '../../actions/todos';

const DeleteTodo: React.FC<any> = ({ dispatch, _id }) => {
    useEffect(() => {
        dispatch(deleteTodo(_id));
    }, [dispatch, _id]);

    return <></>;
};

export default connect()(DeleteTodo);
