import { CaseReducerWithPrepare, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { checkAuth } from 'features/auth/authEffects';
import { prepareSetAuthenticated, setAuthenticatedReducer } from 'features/auth/authHelper';

export interface AuthStateType {
    userId: string;
    isAuthenticated: boolean | undefined;
}

export type AuthState = Readonly<AuthStateType>;

const setAuthenticatedFn: CaseReducerWithPrepare<AuthState, PayloadAction<any>> = {
    reducer: setAuthenticatedReducer,
    prepare: prepareSetAuthenticated,
};

const initialState: AuthState = {
    userId: '',
    isAuthenticated: undefined,
};

const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthenticated: setAuthenticatedFn,
    },
    extraReducers: (builder) => {
        builder.addCase(checkAuth.fulfilled, setAuthenticatedReducer);
    },
});

export const { setAuthenticated } = auth.actions;
export default auth;
