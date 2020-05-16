import React, { useEffect, useState } from 'react';
import 'common/containers/LogoutRedirect/LogoutRedirect.scss';
import Api from 'common/helpers/api';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Cookies from 'js-cookie';
import auth from 'features/auth/auth';

const LogoutRedirect: React.FC<any> = ({ dispatch }) => {
    const [success, setSuccess] = useState<boolean>(false);

    useEffect(() => {
        Api.authorizedRequest('logout')
            .then(() => {
                setSuccess(true);
                Cookies.remove('userId');
                dispatch(auth.actions.setAuthenticated(false));
            })
            .catch();
    }, [dispatch]);

    return <>{success && <Redirect to="/" />}</>;
};

export default connect()(LogoutRedirect);
