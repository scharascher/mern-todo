import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import LogoutRedirect from 'common/containers/LogoutRedirect';

const LogoutButton: React.FC = () => {
    const [logout, setLogout] = useState<boolean>(false);

    return (
        <>
            {logout && <LogoutRedirect />}
            <Button
                variant="contained"
                onClick={(): void => {
                    setLogout(true);
                }}
            >
                Logout
            </Button>
        </>
    );
};

export default LogoutButton;
