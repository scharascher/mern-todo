import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import DeleteTodo from 'features/todos/components/DeleteTodo';

interface Props {
    _id: string;
}

const DeleteTodoLink: React.FC<Props> = ({ _id }) => {
    const [remove, setRemove] = useState<boolean>(false);
    const onClick = (): void => setRemove(true);
    return (
        <>
            {remove && <DeleteTodo _id={_id} />}
            <Button color="primary" onClick={onClick}>
                Delete
            </Button>
        </>
    );
};

export default DeleteTodoLink;
