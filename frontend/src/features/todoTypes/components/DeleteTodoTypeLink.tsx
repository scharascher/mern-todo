import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import DeleteTodoType from 'features/todoTypes/containers/DeleteTodoType';

interface Props {
    _id: string;
}

const DeleteTodoTypeLink: React.FC<Props> = ({ _id }) => {
    const [remove, setRemove] = useState<boolean>(false);

    return (
        <>
            {remove && <DeleteTodoType _id={_id} />}
            <Button color="primary" onClick={(): void => setRemove(true)}>
                Delete
            </Button>
        </>
    );
};

export default DeleteTodoTypeLink;
