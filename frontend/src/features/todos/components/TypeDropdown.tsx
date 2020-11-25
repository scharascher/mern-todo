import React, { useEffect } from 'react';
import Dropdown from 'common/Dropdown';
import { useSelector } from 'react-redux';
import { getTodoTypesOptions } from 'features/todoTypes/todoTypesSelectors';
import { fetchTodoTypes } from 'features/todoTypes/todoTypesEffects';
import { useAppDispatch } from 'app/store';

interface Props {
    handleTypeChange: (event: React.ChangeEvent<{ value: string }>) => void;
    value: string;
}
const TypeDropdown: React.FC<Props> = ({ handleTypeChange, value }) => {
    const types = useSelector(getTodoTypesOptions);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchTodoTypes());
    });
    return (
        <>
            <Dropdown
                options={types}
                value={value}
                onChange={handleTypeChange}
                placeholder="Type"
            />
        </>
    );
};

export default TypeDropdown;
