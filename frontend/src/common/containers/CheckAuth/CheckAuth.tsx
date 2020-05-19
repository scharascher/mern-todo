import React, { useEffect } from 'react';
import 'common/containers/CheckAuth/CheckAuth.scss';
import { useDispatch } from 'react-redux';
import { checkAuth } from 'features/auth/authEffects';

const CheckAuth: React.FC = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(checkAuth());
    });

    return <></>;
};

export default CheckAuth;
