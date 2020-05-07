import React, { useState } from 'react';
import './Login.scss';
import api from '../../helpers/api';
import LoginForm, { LoginData } from '../../components/LoginForm/LoginForm';
import { Redirect } from 'react-router-dom';

const Login: React.FC = () => {
    const [success, setSuccess] = useState<boolean>(false);

    const handleSubmit = (data: LoginData): void => {
        api('login', 'POST', data, { credentials: 'include' }).then((response) => {
            if (response.success) {
                setSuccess(true);
            } else {
                setSuccess(false);
            }
        });
    };

    return (
        <>
            {success && <Redirect to="/todos" />}
            <LoginForm onSubmit={handleSubmit}>Login</LoginForm>
        </>
    );
};

export default Login;
