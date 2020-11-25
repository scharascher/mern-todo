import React from 'react';
import LoginForm, { LoginData } from 'features/auth/components/LoginForm';
import { useHistory, useLocation } from 'react-router-dom';
import { login } from 'features/auth/authEffects';
import { useAppDispatch } from 'app/store';

const Login: React.FC = () => {
    const history = useHistory();
    const location = useLocation();
    const locationFrom = (location.state as { from: { pathname: string } })?.from || {
        pathname: '/',
    };
    const from = locationFrom.pathname !== '/' ? locationFrom : { pathname: '/todos' };
    const dispatch = useAppDispatch();

    const handleSubmit = (data: LoginData): void => {
        dispatch(login(data)).then(() => {
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
