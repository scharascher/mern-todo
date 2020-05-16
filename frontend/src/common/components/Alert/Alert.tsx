import React, { Dispatch, SetStateAction } from 'react';
import 'common/components/Alert/Alert.scss';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { Color } from '@material-ui/lab/Alert';

const Alert: React.FC<{
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    severity: Color;
    autoHideDuration: number;
    children: React.ReactNode;
}> = (props) => {
    const handleClose = (event?: React.SyntheticEvent, reason?: string): void => {
        if (reason === 'clickaway') {
            return;
        }

        props.setOpen(false);
    };
    return (
        <Snackbar open={props.open} autoHideDuration={props.autoHideDuration} onClose={handleClose}>
            <MuiAlert onClose={handleClose} severity="success" elevation={6} variant="filled">
                {props.children}
            </MuiAlert>
        </Snackbar>
    );
};

export default Alert;
