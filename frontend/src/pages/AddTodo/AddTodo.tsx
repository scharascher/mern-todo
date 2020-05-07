import React, { useEffect, useState } from 'react';
import './AddTodo.scss';
import TodoForm from '../../components/TodoForm/TodoForm';
import { Container } from '@material-ui/core';
import { Todo } from '../Todos/TodoHelper';
import Alert from '../../components/common/Alert/Alert';
import Api from '../../helpers/api';
import Cookies from 'js-cookie';

const AddTodo: React.FC<{}> = () => {
    let userId;
    const [open, setOpen] = useState(false);

    useEffect(() => {
        userId = Cookies.get('userId');
        if (!userId) {
            console.error('userId unknown');
        }
    }, []);

    const onSubmit = (data: Omit<Todo, '_id'>): void => {
        setOpen(true);
        Api.authorizedRequest('todos', 'PUT', data).then((data) => {
            if (data.success) {
                setOpen(true);
            }
        });
    };

    return (
        <Container maxWidth="md">
            <h2>Add todo</h2>
            <div>
                <TodoForm onSubmit={onSubmit} />
                <Alert open={open} setOpen={setOpen} severity="success" autoHideDuration={4000}>
                    Form added successfully!
                </Alert>
            </div>
        </Container>
    );
};

export default AddTodo;
