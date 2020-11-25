import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useAppDispatch } from 'app/store';
import { logout } from 'features/auth/authEffects';

const LogoutRedirect: React.FC = () => {
    const [success, setSuccess] = useState<boolean>(false);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(logout()).then(() => {
            setSuccess(true);
            Cookies.remove('userId');
        });
    }, [dispatch]);

    return <>{success && <Redirect to="/" />}</>;
};

export default LogoutRedirect;
