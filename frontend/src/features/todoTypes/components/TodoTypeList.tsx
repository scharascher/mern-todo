import React from 'react';
import { TodoType } from 'features/todoTypes/TodoType';
import TodoTypeItem from 'features/todoTypes/components/TodoTypeItem';

interface Props {
    items: TodoType[];
}

const TodoTypeList: React.FC<Props> = (props) => {
    const todos = props.items?.map((todoType: TodoType) => {
        return <TodoTypeItem item={todoType} key={todoType._id} />;
    });

    return <div>{todos}</div>;
};

export default TodoTypeList;
