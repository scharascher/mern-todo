import Cookies from 'js-cookie';
import { AuthState } from 'features/auth/auth';
import { PayloadAction } from '@reduxjs/toolkit';

export const createAuthObject = (
    isAuthenticated: boolean | undefined,
): AuthState => ({
    isAuthenticated,
    userId: isAuthenticated ? Cookies.get('userId') || '' : '',
});

export const prepareSetAuthenticated = (
    isAuthenticated: boolean | undefined,
): { payload: AuthState } => {
    return {
        payload: createAuthObject(isAuthenticated),
    };
};

export const setAuthenticatedReducer = (
    state: AuthState,
    action: PayloadAction<AuthState>,
): AuthState => {
    return action.payload;
};
