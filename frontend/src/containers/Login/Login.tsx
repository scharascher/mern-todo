import React from 'react';
import './Login.scss';
import Api from 'helpers/api';
import LoginForm, { LoginData } from 'containers/LoginForm/LoginForm';
import { useHistory, useLocation } from 'react-router-dom';
import { setIsAuth } from '../../actions/auth';
import { connect } from 'react-redux';

const Login: React.FC<any> = ({ dispatch }) => {
    const history = useHistory();
    const location = useLocation();
    const locationFrom = (location.state as { from: { pathname: string } })?.from || {
        pathname: '/',
    };
    const from = locationFrom.pathname !== '/' ? locationFrom : { pathname: '/todos' };

    const handleSubmit = (data: LoginData): void => {
        Api.authorizedRequest('login', 'POST', data).then(() => {
            dispatch(setIsAuth(true));
            history.replace(from);
        });
    };

    return (
        <>
            <LoginForm onSubmit={handleSubmit}>Login</LoginForm>
        </>
    );
};

export default connect()(Login);
