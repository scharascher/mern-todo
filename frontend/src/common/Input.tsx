import React from 'react';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';

interface Props {
    id: string;
    placeholder?: string;
    type?: string;
    value: string | number;
    onChange: (e: React.ChangeEvent<{ value: string }>) => void;
}

const Input: React.FC<Props & Record<string, any>> = (props) => {
    return (
        <FormControl style={{ width: '100%' }} margin="normal">
            <TextField
                {...props}
                name={props.id}
                onChange={props.onChange}
                label={props.placeholder}
            />
        </FormControl>
    );
};

export default Input;
