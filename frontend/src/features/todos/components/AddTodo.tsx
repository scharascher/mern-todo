import React, { useState } from 'react';
import TodoForm from 'features/todos/components/TodoForm';
import { Container } from '@material-ui/core';
import { newTodo } from 'types/Todo';
import Alert from 'common/Alert';
import { addTodo } from 'features/todos/todosEffects';
import { useAppDispatch } from 'app/store';

const AddTodo: React.FC = () => {
    const [open, setOpen] = useState(false);
    const dispatch = useAppDispatch();
    const onSubmit = (data: newTodo): void => {
        setOpen(true);
        dispatch(addTodo(data));
    };

    return (
        <Container maxWidth="md">
            <h2>Add todo</h2>
            <div>
                <TodoForm onSubmit={onSubmit} />
                <Alert open={open} setOpen={setOpen} severity="success" autoHideDuration={2000}>
                    Form added successfully!
                </Alert>
            </div>
        </Container>
    );
};

export default AddTodo;
