import React, { useState } from 'react';
import './Login.scss';
import Api from '../../helpers/api';
import LoginForm, { LoginData } from '../../components/LoginForm/LoginForm';
import { Redirect } from 'react-router-dom';

const Login: React.FC = () => {
    const [success, setSuccess] = useState<boolean>(false);

    const handleSubmit = (data: LoginData): void => {
        Api.authorizedRequest('login', 'POST', data).then((response) => {
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
