import React from 'react';
import './Todos.scss';
import TodoList from './TodoList/TodoList';
import TodoFilter from './TodoFilter/TodoFilter';
import { Container } from '@material-ui/core';
import { Todo } from './TodoHelper';

class Todos extends React.Component<{}, { todos: Todo[] }> {
    constructor(props: {}) {
        super(props);
        this.state = {
            todos: [],
        };
    }

    componentDidMount(): void {
        fetch('http://localhost:5001/todos/')
            .then((response) => response.json())
            .then((data) => {
                this.setState(() => ({ todos: data }));
            });
    }

    render(): React.ReactNode {
        return (
            <Container maxWidth="md">
                <h1>Todos:</h1>
                <TodoFilter />
                <TodoList items={this.state.todos} />
            </Container>
        );
    }
}

export default Todos;
