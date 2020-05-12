import React, { useState } from 'react';
import './LoginForm.scss';
import Submit from 'components/Submit/Submit';
import Input from 'components/Input/Input';

const LoginForm: React.FC<{ onSubmit: (data: LoginData) => void }> = ({ onSubmit, children }) => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleSubmit = (e: React.SyntheticEvent): void => {
        e.preventDefault();
        onSubmit({ username, password });
    };

    const handleUsernameChange = (e: React.ChangeEvent<{ value: string }>): void => {
        setUsername(e.target.value);
    };
    const handlePasswordChange = (e: React.ChangeEvent<{ value: string }>): void => {
        setPassword(e.target.value);
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <Input
                value={username}
                onChange={handleUsernameChange}
                autoComplete="off"
                id="register"
                placeholder="Username"
            />
            <Input
                value={password}
                onChange={handlePasswordChange}
                autoComplete="off"
                id="password"
                type="password"
                placeholder="Password"
            />
            <Submit>{children}</Submit>
        </form>
    );
};

export default LoginForm;

export interface LoginData {
    username: string;
    password: string;
}
