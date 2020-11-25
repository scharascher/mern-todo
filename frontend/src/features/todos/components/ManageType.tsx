import React, { useCallback, useState } from 'react';
import Button from '@material-ui/core/Button';
import { Redirect } from 'react-router-dom';

const ManageType: React.FC = () => {
    const [redirect, setRedirect] = useState(false);
    const onClick = useCallback((): void => {
        setRedirect(true);
    }, []);
    return (
        <>
            {redirect && <Redirect to="/todo-types" />}
            <Button variant="contained" color="primary" onClick={onClick}>
                Add type
            </Button>
        </>
    );
};

export default ManageType;
