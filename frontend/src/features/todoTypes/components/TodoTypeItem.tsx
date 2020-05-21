import React, { useState } from 'react';
import { TodoType } from 'features/todoTypes/TodoType';
import TodoTypeItemInner from 'features/todoTypes/components/TodoTypeItemInner';
import EditTodoType from 'features/todoTypes/containers/EditTodoType';

interface Props {
    item: TodoType;
}

const TodoTypeItem: React.FC<Props> = ({ item }) => {
    const [edit, setEdit] = useState(false);

    return (
        <>
            {edit && (
                <EditTodoType
                    todoType={item}
                    onEditSuccess={(): void => {
                        setEdit(false);
                    }}
                />
            )}
            {!edit && (
                <TodoTypeItemInner
                    item={item}
                    onEditClick={(): void => {
                        setEdit(true);
                    }}
                />
            )}
        </>
    );
};

export default TodoTypeItem;
