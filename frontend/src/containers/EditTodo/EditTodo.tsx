import React, { useEffect, useState } from 'react';
import './EditTodo.scss';
import TodoForm from 'containers/TodoForm/TodoForm';
import { Container } from '@material-ui/core';
import { Todo } from 'helpers/TodoHelper';
import Alert from 'components/Alert/Alert';
import { Link, useParams } from 'react-router-dom';
import Api from 'helpers/api';

const EditTodo: React.FC<{}> = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [todo, setTodo] = useState<Todo | null>(null);
    const { id } = useParams();
    const onSubmit = (data: Omit<Todo, '_id'>): void => {
        setOpen(true);
        Api.authorizedRequest(`todos/${id}`, 'POST', data).then((data) => {
            if (data.success) {
                setOpen(true);
            }
        });
    };

    useEffect(() => {
        Api.authorizedRequest(`todos/${id}`).then((data: Todo) => {
            setTodo(data);
        });
    }, []);

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

export default EditTodo;
