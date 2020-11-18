import React, { useState } from 'react';
import Alert from 'common/components/Alert';
import { useDispatch } from 'react-redux';
import TodoTypeForm from 'features/todoTypes/containers/TodoTypeForm';
import { newTodoType } from 'types/TodoType';
import { addTodoType } from 'features/todoTypes/todoTypesEffects';

const AddTodoType: React.FC = () => {
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const onSubmit = (data: newTodoType): void => {
        setOpen(true);
        delete data._id;
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
