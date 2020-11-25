import React from 'react';
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
