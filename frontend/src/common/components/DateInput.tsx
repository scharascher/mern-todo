import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';

interface Props {
    id?: string;
    placeholder?: string;
    type?: string;
    value: number;
    onChange: (date: MaterialUiPickersDate, value: string | null | undefined) => void;
}

const DateInput: React.FC<Props> = (props) => {
    return (
        <FormControl style={{ width: '100%' }} margin="normal">
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="dd/MM/yyyy"
                    margin="normal"
                    id={props.id}
                    label={props.placeholder}
                    value={new Date(props.value)}
                    onChange={props.onChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                />
            </MuiPickersUtilsProvider>
        </FormControl>
    );
};

export default DateInput;
