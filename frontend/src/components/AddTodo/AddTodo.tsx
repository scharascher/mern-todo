import React, { useState } from 'react';
import './AddTodo.scss';
import TodoForm from './TodoForm/TodoForm';
import { Container } from '@material-ui/core';
import { Todo } from '../Todos/TodoHelper';
import Alert from '../common/Alert/Alert';

const AddTodo: React.FC<{}> = () => {
    const [open, setOpen] = useState(false);

    const onSubmit = (data: Todo): void => {
        setOpen(true);
        fetch('http://localhost:5001/todos/', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
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
                <Alert open={open} setOpen={setOpen} severity="success" autoHideDuration={4000}>
                    Form added successfully!
                </Alert>
            </div>
        </Container>
    );
};

export default AddTodo;
