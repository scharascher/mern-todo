import React, { useState } from 'react';
import { TodoType } from 'types/TodoType';
import TodoTypeItemInner from 'features/todoTypes/components/TodoTypeItemInner';
import EditTodoType from 'features/todoTypes/components/EditTodoType';

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
