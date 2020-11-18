import React from 'react';
import Api from 'utils/api';
import LoginForm, { LoginData } from 'features/auth/containers/LoginForm';
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setAuthenticated } from 'features/auth/auth';

const Login: React.FC = () => {
    const history = useHistory();
    const location = useLocation();
    const locationFrom = (location.state as { from: { pathname: string } })?.from || {
        pathname: '/',
    };
    const from = locationFrom.pathname !== '/' ? locationFrom : { pathname: '/todos' };
    const dispatch = useDispatch();

    const handleSubmit = (data: LoginData): void => {
        Api.authorizedRequest('login', 'POST', data).then(() => {
            dispatch(setAuthenticated(true));
            history.replace(from);
        });
    };

    return (
        <>
            <LoginForm onSubmit={handleSubmit}>Login</LoginForm>
        </>
    );
};

export default Login;
