import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { Redirect } from 'react-router-dom';

const ManageType: React.FC = () => {
    const [redirect, setRedirect] = useState(false);

    return (
        <>
            {redirect && <Redirect to="/todo-types" />}
            <Button variant="contained" color="primary" onClick={(): void => setRedirect(true)}>
                Add type
            </Button>
        </>
    );
};

export default ManageType;
