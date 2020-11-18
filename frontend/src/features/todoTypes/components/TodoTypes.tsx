import React from 'react';
import { Container } from '@material-ui/core';
import { TodoType } from 'types/TodoType';
import TodoTypeList from 'features/todoTypes/components/TodoTypeList';
import AddTodoType from 'features/todoTypes/containers/AddTodoType';

interface Props {
    todoTypes: TodoType[];
    isFetching: boolean;
}

const TodoTypes: React.FC<Props> = ({ todoTypes, isFetching }) => {
    return (
        <Container maxWidth="md">
            {isFetching ? (
                <h1>LOADING...</h1>
            ) : (
                <>
                    <h1>Todo types:</h1>
                    <AddTodoType />
                    <TodoTypeList items={todoTypes} />
                </>
            )}
        </Container>
    );
};

export default TodoTypes;
