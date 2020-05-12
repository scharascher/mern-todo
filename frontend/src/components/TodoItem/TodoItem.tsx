import React from 'react';
import './TodoItem.scss';
import { Todo } from 'helpers/TodoHelper';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const TodoItem: React.FC<{ item: Todo }> = ({ item }) => {
    return (
        <div>
            <Typography variant="h4" gutterBottom>
                {item.title}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
                {item.description}
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
                {item.duration}
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
                {`${new Date(item.date)}`}
            </Typography>

            <Typography variant="caption" display="block" gutterBottom>
                <Link to={`/edit-todo/${item._id}`}>Edit</Link>
            </Typography>
        </div>
    );
};

export default TodoItem;
