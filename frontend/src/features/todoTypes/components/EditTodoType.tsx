import React, { useState } from 'react';
import Alert from 'common/Alert';
import { Link } from 'react-router-dom';
import { newTodoType, TodoType } from 'types/TodoType';
import { editTodoType } from 'features/todoTypes/todoTypesEffects';
import TodoTypeForm from 'features/todoTypes/components/TodoTypeForm';
import { useAppDispatch } from 'app/store';

interface Props {
    todoType: TodoType;
    onEditSuccess: () => void;
}

const EditTodoType: React.FC<Props> = ({ todoType, onEditSuccess }) => {
    const [open, setOpen] = useState<boolean>(false);
    const dispatch = useAppDispatch();

    const onSubmit = (data: newTodoType): void => {
        setOpen(true);
        onEditSuccess();
        dispatch(editTodoType(data));
    };

    return (
        <>
            <h2>Edit todo</h2>
            <Link to="/todos">Back to todos</Link>
            <div>
                <TodoTypeForm onSubmit={onSubmit} todoType={todoType} />
                <Alert open={open} setOpen={setOpen} severity="success" autoHideDuration={2000}>
                    Form edited successfully!
                </Alert>
            </div>
        </>
    );
};

export default EditTodoType;
