import React, { useEffect } from 'react';
import './CheckAuth.scss';
import { connect } from 'react-redux';
import { checkAuth } from '../../actions/auth';

const CheckAuth: React.FC<any> = ({ dispatch }) => {
    useEffect(() => {
        dispatch(checkAuth());
    });

    return <></>;
};

export default connect()(CheckAuth);
