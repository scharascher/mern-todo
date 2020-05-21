import React, { useEffect, useState } from 'react';
import TodoForm from 'features/todos/containers/TodoForm';
import { Container } from '@material-ui/core';
import Alert from 'common/components/Alert/Alert';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { editTodo, fetchTodos } from 'features/todos/todosEffects';
import { returnGetTodoById } from 'features/todos/todosSelector';
import { newTodo } from 'features/todos/Todo';

const EditTodo: React.FC<RouteComponentProps<{ id: string }>> = (props) => {
    const [open, setOpen] = useState<boolean>(false);
    const dispatch = useDispatch();
    const todo = useSelector(returnGetTodoById(props.match.params.id));

    useEffect(() => {
        if (!todo) {
            dispatch(fetchTodos());
        }
    });

    const onSubmit = (data: newTodo): void => {
        setOpen(true);
        dispatch(editTodo(data));
    };

    return (
        <Container maxWidth="md">
            <h2>Edit todo</h2>
            <Link to="/todos">Back to todos</Link>
            <div>
                <TodoForm onSubmit={onSubmit} todo={todo} />
                <Alert open={open} setOpen={setOpen} severity="success" autoHideDuration={2000}>
                    Form edited successfully!
                </Alert>
            </div>
        </Container>
    );
};

export default withRouter(EditTodo);
