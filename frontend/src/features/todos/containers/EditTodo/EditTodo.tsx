import React, { useEffect, useState } from 'react';
import 'features/todos/containers/EditTodo/EditTodo.scss';
import TodoForm from 'features/todos/containers/TodoForm/TodoForm';
import { Container } from '@material-ui/core';
import { Todo } from 'features/todos/Todo';
import Alert from 'common/components/Alert/Alert';
import { Link } from 'react-router-dom';
import { editTodo, fetchTodosIfNeeded } from 'features/todos/todosActions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state: any, ownProps: any) => {
    const todos = state.todos?.items || [];
    const id = ownProps.match?.params?.id;
    const todo = todos.find((todo: Todo) => todo._id === id);
    return {
        todo,
    };
};

const EditTodo: React.FC<any> = ({ dispatch, todo }) => {
    const [open, setOpen] = useState<boolean>(false);

    useEffect(() => {
        if (!todo) {
            dispatch(fetchTodosIfNeeded());
        }
    });

    const onSubmit = (data: Todo): void => {
        setOpen(true);
        dispatch(editTodo(data));
    };

    return (
        <Container maxWidth="md">
            <h2>Edit todo</h2>
            <Link to="/todos">Back to todos</Link>
            <div>
                <TodoForm onSubmit={onSubmit} todo={todo} />
                <Alert open={open} setOpen={setOpen} severity="success" autoHideDuration={4000}>
                    Form edited successfully!
                </Alert>
            </div>
        </Container>
    );
};

export default withRouter(connect(mapStateToProps)(EditTodo));
