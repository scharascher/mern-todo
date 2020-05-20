import { AuthState } from 'features/auth/auth';
import { RootState } from 'app/rootReducer';

export function getAuth(state: RootState): AuthState {
    return state.auth;
}

export function getIsAuthenticated(state: RootState): boolean | undefined {
    return state.auth.isAuthenticated;
}
