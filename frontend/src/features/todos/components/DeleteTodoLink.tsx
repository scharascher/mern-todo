import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import DeleteTodo from 'features/todos/containers/DeleteTodo';

interface Props {
    _id: string;
}

const DeleteTodoLink: React.FC<Props> = ({ _id }) => {
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
