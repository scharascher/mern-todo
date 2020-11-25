import React, { useMemo } from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { DropdownValue, Option } from 'types/Option';

const Dropdown: React.FC<{
    id?: string;
    labelId?: string;
    placeholder?: string;
    options: Option[];
    onChange: (e: React.ChangeEvent<{ value: any }>) => void;
    value: DropdownValue;
}> = ({ id, labelId, placeholder, options, onChange, value }) => {
    const items = useMemo(
        () =>
            options.map((option: Option) => {
                return (
                    <MenuItem key={`${option.value}`} value={`${option.value}`}>
                        {option.label}
                    </MenuItem>
                );
            }),
        [options],
    );

    return (
        <FormControl style={{ width: '100%' }} margin="normal">
            <InputLabel id={labelId}>{placeholder}</InputLabel>
            <Select value={value} onChange={onChange} id={id} labelId={labelId}>
                {items}
            </Select>
        </FormControl>
    );
};

export default Dropdown;
