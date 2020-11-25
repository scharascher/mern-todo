import React, { useEffect } from 'react';
import { checkAuth } from 'features/auth/authEffects';
import { useAppDispatch } from 'app/store';

const CheckAuth: React.FC = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(checkAuth());
    }, [dispatch]);

    return <></>;
};

export default CheckAuth;
