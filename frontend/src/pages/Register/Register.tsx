import React, { useState } from 'react';
import './Register.scss';
import api from '../../helpers/api';
import { Redirect } from 'react-router-dom';
import LoginForm, { LoginData } from '../../components/LoginForm/LoginForm';

const Register: React.FC = () => {
    const [success, setSuccess] = useState<boolean>(false);

    const handleSubmit = (data: LoginData): void => {
        api('register', 'POST', data).then((response) => {
            if (response.success) {
                setSuccess(true);
            } else {
                setSuccess(false);
            }
        });
    };

    return (
        <>
            {success && <Redirect to="/login" />}
            <LoginForm onSubmit={handleSubmit}>Register</LoginForm>
        </>
    );
};

export default Register;
