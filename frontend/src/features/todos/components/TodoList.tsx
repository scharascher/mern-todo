import React from 'react';
import TodoItem from 'features/todos/components/TodoItem';
import { Todo } from 'types/Todo';

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
