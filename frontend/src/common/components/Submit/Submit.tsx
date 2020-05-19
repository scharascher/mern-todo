import React from 'react';
import 'common/components/Submit/Submit.scss';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';

const Submit: React.FC = ({ children }) => {
    return (
        <FormControl style={{ float: 'right' }} margin="normal">
            <Button variant="contained" type="submit">
                {children}
            </Button>
        </FormControl>
    );
};

export default Submit;
