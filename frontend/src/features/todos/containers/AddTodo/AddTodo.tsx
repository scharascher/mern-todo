import React, { useState } from 'react';
import 'features/todos/containers/AddTodo/AddTodo.scss';
import TodoForm from 'features/todos/containers/TodoForm/TodoForm';
import { Container } from '@material-ui/core';
import { Todo } from 'features/todos/Todo';
import Alert from 'common/components/Alert/Alert';
import { addTodo } from 'features/todos/todosActions';
import { connect } from 'react-redux';

const AddTodo: React.FC<any> = ({ dispatch }) => {
    const [open, setOpen] = useState(false);

    const onSubmit = (data: Omit<Todo, '_id'>): void => {
        setOpen(true);
        dispatch(addTodo(data));
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

export default connect()(AddTodo);
