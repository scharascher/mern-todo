import React, { useEffect, useState } from 'react';
import './LogoutRedirect.scss';
import Api from 'helpers/api';
import { Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';

const LogoutRedirect: React.FC = () => {
    const [success, setSuccess] = useState<boolean>(false);

    useEffect(() => {
        Api.authorizedRequest('logout')
            .then(() => {
                setSuccess(true);
                Cookies.remove('userId');
            })
            .catch();
    }, []);

    return (
        <>
            {success && <Redirect to="/" />}
        </>
    );
};

export default LogoutRedirect;
