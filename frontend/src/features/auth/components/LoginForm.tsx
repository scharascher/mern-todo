import React, { useState } from 'react';
import Submit from 'common/Submit';
import Input from 'common/Input';

interface Props {
    onSubmit: (data: LoginData) => void;
}

const LoginForm: React.FC<Props> = ({ onSubmit, children }) => {
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
