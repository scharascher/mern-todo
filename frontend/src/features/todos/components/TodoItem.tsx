import React from 'react';
import { Todo } from 'types/Todo';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import DeleteTodoLink from 'features/todos/components/DeleteTodoLink';
import TypeView from 'features/todos/containers/TypeView';

interface Props {
    item: Todo;
}

const TodoItem: React.FC<Props> = ({ item }) => {
    return (
        <div>
            <Typography variant="h4" gutterBottom>
                {item.title}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
                {item.description}
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
                Duration: {item.duration}
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
                Date: {`${new Date(item.date)}`}
                <br />
                <TypeView _id={item.typeId} />
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
                ID: {item._id}
                <br />
                <Link to={`/edit-todo/${item._id}`}>Edit</Link>
                <DeleteTodoLink _id={item._id} />
            </Typography>
        </div>
    );
};

export default TodoItem;
