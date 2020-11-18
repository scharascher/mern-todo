import { AuthState } from 'features/auth/auth';
import { RootState } from 'app/rootReducer';
import { createSelector } from '@reduxjs/toolkit';

export function getAuth(state: RootState): AuthState {
    return state.auth;
}

export const getIsAuthenticated = createSelector(getAuth, (auth) => auth.isAuthenticated);
