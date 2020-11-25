import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
    isAuthenticated: boolean | undefined;
}

const initialState: AuthState = {
    isAuthenticated: undefined,
};

const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthenticated: (state, action: PayloadAction<boolean>) => {
            state.isAuthenticated = action.payload;
        },
    },
});

export const { setAuthenticated } = auth.actions;
export default auth;
