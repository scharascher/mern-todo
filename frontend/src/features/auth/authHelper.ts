import Cookies from 'js-cookie';

export const createAuthObject = (isAuthenticated: boolean) => ({
    isAuthenticated,
    userId: isAuthenticated ? Cookies.get('userId') : '',
});

export const prepareSetAuthenticated = (isAuthenticated: boolean) => {
    return {
        payload: createAuthObject(isAuthenticated),
    };
};

export const setAuthenticatedReducer = (state: any, action: any) => {
    return action.payload;
};
