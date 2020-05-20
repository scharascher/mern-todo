import React from 'react';
import 'common/components/PrivateRoute/PrivateRoute.scss';
import { Redirect, Route, RouteComponentProps } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsAuthenticated } from 'features/auth/authSelectors';

const PrivateRoute: React.FC<any> = ({ children, ...rest }) => {
    const isAuthenticated = useSelector(getIsAuthenticated);

    const render = ({ location }: RouteComponentProps): React.ReactNode => {
        if (isAuthenticated) {
            return children;
        } else if (isAuthenticated === false) {
            return (
                <Redirect
                    to={{
                        pathname: '/login',
                        state: { from: location },
                    }}
                />
            );
        }
        return <></>;
    };

    return <Route {...rest} render={render} />;
};

export default PrivateRoute;
