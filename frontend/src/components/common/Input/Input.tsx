import React from 'react';
import './Input.scss';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';

const Input: React.FC<{
    id?: string;
    placeholder?: string;
    type?: string;
    value: string | number;
    onChange: (e: React.ChangeEvent<{ value: string }>) => void;
}> = (props) => {
    return (
        <FormControl style={{ width: '100%' }} margin="normal">
            <TextField
                name={props.id}
                value={props.value}
                onChange={props.onChange}
                id={props.id}
                label={props.placeholder}
                type={props.type}
            />
        </FormControl>
    );
};

export default Input;
