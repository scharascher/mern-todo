import Api from 'common/helpers/api';
import auth from 'features/auth/auth';

export const checkAuth = () => {
    return (dispatch: any) => {
        return Api.authorizedRequest('checkAuth', 'GET').then((isAuthenticated: boolean) => {
            dispatch(auth.actions.setAuthenticated(isAuthenticated));
        });
    };
};
