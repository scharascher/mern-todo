import React, { useState } from 'react';
import './Register.scss';

const Register: React.FC = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    return (
        <form className="form">
            <div className="form__row">
                <label htmlFor="register">
                    Username:&nbsp;
                    <input
                        id="register"
                        type="text"
                        value={username}
                        onChange={(e): void => setUsername(e.target.value)}
                    />
                </label>
            </div>
            <div className="form__row">
                <label htmlFor="password">
                    Password:&nbsp;
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e): void => setPassword(e.target.value)}
                    />
                </label>
            </div>
        </form>
    );
};

export default Register;
