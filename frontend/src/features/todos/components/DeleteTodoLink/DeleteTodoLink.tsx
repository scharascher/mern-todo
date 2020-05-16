import React, { useState } from 'react';
import 'features/todos/components/DeleteTodoLink/DeleteTodoLink.scss';
import Button from '@material-ui/core/Button';
import DeleteTodo from 'features/todos/containers/DeleteTodo/DeleteTodo';

const DeleteTodoLink: React.FC<any> = ({ _id }) => {
    const [remove, setRemove] = useState<boolean>(false);

    return (
        <>
            {remove && <DeleteTodo _id={_id} />}
            <Button color="primary" onClick={() => setRemove(true)}>
                Delete
            </Button>
        </>
    );
};

export default DeleteTodoLink;