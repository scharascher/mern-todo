import React, { useEffect, useState } from 'react';
import 'common/containers/LogoutRedirect/LogoutRedirect.scss';
import Api from 'common/helpers/api';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setIsAuth } from 'features/auth/authActions';
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
