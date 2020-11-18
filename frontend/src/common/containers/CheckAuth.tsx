import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { checkAuth } from 'features/auth/authEffects';

const CheckAuth: React.FC = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(checkAuth());
    }, [dispatch]);

    return <></>;
};

export default CheckAuth;
