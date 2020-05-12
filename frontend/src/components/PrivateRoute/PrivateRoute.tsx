import React from 'react';
import './PrivateRoute.scss';
import { Route, Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';

const PrivateRoute: React.FC<any> = ({ children, ...rest }) => {
    const render = ({ location }: { location: string }): React.ReactElement =>
        Cookies.get('userId') ? (
            children
        ) : (
            <Redirect
                to={{
                    pathname: '/login',
                    state: { from: location },
                }}
            />
        );

    return <Route {...rest} render={render} />;
};

export default PrivateRoute;
