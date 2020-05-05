import React from 'react';
import './Todos.scss';
import TodoList from './TodoList/TodoList';
import TodoFilter from './TodoFilter/TodoFilter';
import { Container } from '@material-ui/core';
import { Todo } from './TodoHelper';
import api from '../../helpers/api';
import { Link } from 'react-router-dom';

class Todos extends React.Component<{}, { todos: Todo[] }> {
    constructor(props: {}) {
        super(props);
        this.state = {
            todos: [],
        };
    }

    componentDidMount(): void {
        api('todos').then((data) => {
            this.setState(() => ({ todos: data }));
        });
    }

    render(): React.ReactNode {
        return (
            <Container maxWidth="md">
                <h1>Todos:</h1>
                <TodoFilter />
                <Link to="/add-todo">Add more</Link>
                <TodoList items={this.state.todos} />
            </Container>
        );
    }
}

export default Todos;