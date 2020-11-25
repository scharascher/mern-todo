import React, { useState } from 'react';
import Alert from 'common/Alert';
import TodoTypeForm from 'features/todoTypes/components/TodoTypeForm';
import { newTodoType } from 'types/TodoType';
import { addTodoType } from 'features/todoTypes/todoTypesEffects';
import { useAppDispatch } from 'app/store';

const AddTodoType: React.FC = () => {
    const [open, setOpen] = useState(false);
    const dispatch = useAppDispatch();
    const onSubmit = (data: newTodoType): void => {
        setOpen(true);
        dispatch(addTodoType(data));
    };

    return (
        <>
            <h2>Add new one:</h2>
            <div>
                <TodoTypeForm onSubmit={onSubmit} />
                <Alert open={open} setOpen={setOpen} severity="success" autoHideDuration={2000}>
                    Form added successfully!
                </Alert>
            </div>
        </>
    );
};

export default AddTodoType;
