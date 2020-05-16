import Api from '../helpers/api';

export const SET_IS_AUTH = 'SET_IS_AUTH';
export const CHECK_AUTH_REQUEST = 'CHECK_AUTH_REQUEST';
export const CHECK_AUTH_SUCCESS = 'CHECK_AUTH_SUCCESS';
export const CHECK_AUTH_FAILURE = 'CHECK_AUTH_FAILURE';

export const setIsAuth = (isAuthenticated: boolean, userId = '') => ({
    type: SET_IS_AUTH,
    isAuthenticated,
    userId,
});

export const checkAuthRequest = () => ({ type: CHECK_AUTH_REQUEST });
export const checkAuthSuccess = () => ({ type: CHECK_AUTH_SUCCESS });
// export const checkAuthFailure = () => ({
//     type: CHECK_AUTH_SUCCESS,
//     isAuthenticated: false,
// });

export const checkAuth = () => {
    return (dispatch: any) => {
        dispatch(checkAuthRequest());
        return Api.authorizedRequest('checkAuth', 'GET').then((data) => {
            if (data === true) {
                dispatch(checkAuthSuccess());
            }
        });
    };
};
