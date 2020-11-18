import React, { useEffect } from 'react';
import Dropdown from 'common/components/Dropdown';
import { useDispatch, useSelector } from 'react-redux';
import { getTodoTypesOptions } from 'features/todoTypes/todoTypesSelector';
import { fetchTodoTypes } from 'features/todoTypes/todoTypesEffects';

interface Props {
    handleTypeChange: (event: React.ChangeEvent<{ value: string }>) => void;
    value: string;
}
const TypeDropdown: React.FC<Props> = ({ handleTypeChange, value }) => {
    const types = useSelector(getTodoTypesOptions);
    const dispatch = useDispatch();
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
