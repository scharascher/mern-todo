import React from 'react';
import 'common/components/PrivateRoute/PrivateRoute.scss';
import { Redirect, Route, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';

import { RootState } from 'app/rootReducer';

interface Props {
    isAuthenticated: boolean | undefined;
}

const PrivateRoute: React.FC<Props & any> = ({ isAuthenticated, children, ...rest }) => {
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

const mapStateToProps = (state: RootState): Props => ({
    isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(PrivateRoute);
