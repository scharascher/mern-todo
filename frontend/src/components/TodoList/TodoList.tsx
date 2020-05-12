import React from 'react';
import './TodoList.scss';
import TodoItem from 'components/TodoItem/TodoItem';
import { Todo } from 'helpers/TodoHelper';

const TodoList: React.FC<{ items: Todo[] }> = (props) => {
    const todos = props.items?.map((todo: Todo) => {
        return <TodoItem item={todo} key={todo.title} />;
    });

    return <div>{todos}</div>;
};

export default TodoList;
