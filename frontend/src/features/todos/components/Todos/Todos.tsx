import React from 'react';
import 'features/todos/components/Todos/Todos.scss';
import TodoList from 'features/todos/components/TodoList/TodoList';
import TodoFilter from 'features/todos/components/TodoFilter/TodoFilter';
import { Container } from '@material-ui/core';
import { Todo } from 'features/todos/Todo';
import { Link } from 'react-router-dom';

const Todos: React.FC<{ todos: Todo[]; isFetching: boolean }> = ({ todos, isFetching }) => {
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
