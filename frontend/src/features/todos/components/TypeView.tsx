import React from 'react';
import { useSelector } from 'react-redux';
import { returnGetTodoTypeById } from 'features/todoTypes/todoTypesSelectors';

interface Props {
    _id: string;
}
const TypeView: React.FC<Props> = ({ _id }) => {
    const type = useSelector(returnGetTodoTypeById(_id));
    return <>Type: {type?.name}</>;
};

export default TypeView;
