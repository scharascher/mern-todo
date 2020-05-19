import React from 'react';
import 'common/components/Select/Dropdown.scss';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { DropdownValue, Option } from 'common/helpers/Option';

const Dropdown: React.FC<{
    id?: string;
    labelId?: string;
    placeholder?: string;
    options: Option[];
    onChange: (e: React.ChangeEvent<any>) => void;
    value: DropdownValue;
}> = (props) => {
    const items = props.options.map((option: Option) => {
        return (
            <MenuItem key={`${option.value}`} value={`${option.value}`}>
                {option.label}
            </MenuItem>
        );
    });

    return (
        <FormControl style={{ width: '100%' }} margin="normal">
            <InputLabel id={props.labelId}>{props.placeholder}</InputLabel>
            <Select
                value={props.value}
                onChange={props.onChange}
                id={props.id}
                labelId={props.labelId}
            >
                {items}
            </Select>
        </FormControl>
    );
};

export default Dropdown;
