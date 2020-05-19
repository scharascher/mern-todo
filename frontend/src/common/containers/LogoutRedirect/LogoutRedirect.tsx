import React, { useEffect, useState } from 'react';
import 'common/containers/LogoutRedirect/LogoutRedirect.scss';
import Api from 'common/helpers/api';
import { Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
import { setAuthenticated } from 'features/auth/auth';

const LogoutRedirect: React.FC = () => {
    const [success, setSuccess] = useState<boolean>(false);
    const dispatch = useDispatch();
    useEffect(() => {
        Api.authorizedRequest('logout')
            .then(() => {
                setSuccess(true);
                Cookies.remove('userId');
                dispatch(setAuthenticated(false));
            })
            .catch();
    }, [dispatch]);

    return <>{success && <Redirect to="/" />}</>;
};

export default LogoutRedirect;
