import React from 'react';
import 'common/components/PrivateRoute/PrivateRoute.scss';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

interface Props {
    isAuthenticated: boolean;
}

const PrivateRoute: React.FC<Props & any> = ({ isAuthenticated, children, ...rest }) => {
    const render = ({ location }: { location: string }): React.ReactElement => {
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

const mapStateToProps = (state: any) => ({
    isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(PrivateRoute);
