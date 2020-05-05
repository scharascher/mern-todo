import React from 'react';
import './Login.scss';
import { Link } from 'react-router-dom';

const Login: React.FC = () => {
    return (
        <>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/todos">Todos</Link>
                </li>
                <li>
                    <Link to="/user-info">User info</Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link to="/register">Register</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
            </ul>
        </>
    );
};

export default Login;
