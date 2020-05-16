import React, { useEffect } from 'react';
import 'common/containers/CheckAuth/CheckAuth.scss';
import { connect } from 'react-redux';
import { checkAuth } from 'features/auth/authEffects';

const CheckAuth: React.FC<any> = ({ dispatch }) => {
    useEffect(() => {
        dispatch(checkAuth());
    });

    return <></>;
};

export default connect()(CheckAuth);
