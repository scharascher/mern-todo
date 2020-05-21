import React from 'react';
import TodoList from 'features/todos/components/TodoList';
import TodoFilter from 'features/todos/components/TodoFilter';
import { Container } from '@material-ui/core';
import { Todo } from 'features/todos/Todo';
import { Link } from 'react-router-dom';

interface Props {
    todos: Todo[];
    isFetching: boolean;
}

const Todos: React.FC<Props> = ({ todos, isFetching }) => {
    return (
        <Container maxWidth="md">
            {isFetching ? (
                <h1>LOADING...</h1>
            ) : (
                <>
                    <h1>Todos:</h1>
                    <TodoFilter />
                    <Link to="/add-todo">Add more</Link>
                    <TodoList items={todos} />
                </>
            )}
        </Container>
    );
};

export default Todos;
