import React from 'react';
import 'features/todos/components/TodoList/TodoList.scss';
import TodoItem from 'features/todos/components/TodoItem/TodoItem';
import { Todo } from 'features/todos/Todo';

interface Props {
    items: Todo[];
}

const TodoList: React.FC<Props> = (props) => {
    const todos = props.items?.map((todo: Todo) => {
        return <TodoItem item={todo} key={todo._id} />;
    });

    return <div>{todos}</div>;
};

export default TodoList;
