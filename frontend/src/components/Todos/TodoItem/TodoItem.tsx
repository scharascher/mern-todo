import React from 'react';
import './TodoItem.scss';
import { Todo } from '../TodoHelper';
import { Typography } from '@material-ui/core';

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
                {item.date}
            </Typography>
        </div>
    );
};

export default TodoItem;
