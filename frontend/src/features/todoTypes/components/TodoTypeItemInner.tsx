import React from 'react';
import { Button, Typography } from '@material-ui/core';
import { TodoType } from 'types/TodoType';
import DeleteTodoTypeLink from 'features/todoTypes/components/DeleteTodoTypeLink';

interface Props {
    item: TodoType;
    onEditClick: () => void;
}

const TodoTypeItemInner: React.FC<Props> = ({ item, onEditClick }) => {
    return (
        <div>
            <Typography variant="h4" gutterBottom>
                {item.name}
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
                {item._id}
                <Button color="primary" onClick={onEditClick}>
                    Edit
                </Button>
                <DeleteTodoTypeLink _id={item._id} />
            </Typography>
        </div>
    );
};

export default TodoTypeItemInner;
