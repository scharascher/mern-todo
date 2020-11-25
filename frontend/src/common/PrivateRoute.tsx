import React, { useCallback } from 'react';
import { Redirect, Route, RouteComponentProps, RouteProps } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsAuthenticated } from 'features/auth/authSelectors';

const PrivateRoute: React.FC<RouteProps> = ({ children, ...rest }) => {
    const isAuthenticated = useSelector(getIsAuthenticated);

    const render = useCallback(
        ({ location }: RouteComponentProps): React.ReactNode => {
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
        },
        [isAuthenticated, children],
    );

    return <Route {...rest} render={render} />;
};

export default PrivateRoute;
