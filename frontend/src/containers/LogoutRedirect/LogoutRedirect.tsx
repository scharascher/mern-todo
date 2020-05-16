import React, { useEffect, useState } from 'react';
import './LogoutRedirect.scss';
import Api from 'helpers/api';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setIsAuth } from '../../actions/auth';
import Cookies from 'js-cookie';

const LogoutRedirect: React.FC<any> = ({ dispatch }) => {
    const [success, setSuccess] = useState<boolean>(false);

    useEffect(() => {
        Api.authorizedRequest('logout')
            .then(() => {
                setSuccess(true);
                Cookies.remove('userId');
                dispatch(setIsAuth(false));
            })
            .catch();
    }, [dispatch]);

    return <>{success && <Redirect to="/" />}</>;
};

export default connect()(LogoutRedirect);
