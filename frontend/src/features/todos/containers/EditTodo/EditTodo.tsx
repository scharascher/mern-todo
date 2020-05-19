import React, { useEffect, useState } from 'react';
import 'features/todos/containers/EditTodo/EditTodo.scss';
import TodoForm from 'features/todos/containers/TodoForm/TodoForm';
import { Container } from '@material-ui/core';
import { Todo } from 'features/todos/Todo';
import Alert from 'common/components/Alert/Alert';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { editTodo } from 'features/todos/todosEffects';
import { fetchTodos } from 'features/todos/todosEffects';

const getTodoByMatchId = (state: any, props: any) => {
    const id = props.match?.params?.id;
    return state.todos.items.find((todo: Todo) => todo._id === id);
};

const mapStateToProps = (state: any, props: any) => {
    return {
        todo: getTodoByMatchId(state, props),
    };
};

const EditTodo: React.FC<any> = ({ dispatch, todo }) => {
    const [open, setOpen] = useState<boolean>(false);

    useEffect(() => {
        if (!todo) {
            dispatch(fetchTodos());
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
                <Alert open={open} setOpen={setOpen} severity="success" autoHideDuration={2000}>
                    Form edited successfully!
                </Alert>
            </div>
        </Container>
    );
};

export default withRouter(connect(mapStateToProps)(EditTodo));
