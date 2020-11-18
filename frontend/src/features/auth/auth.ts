import { createSlice } from '@reduxjs/toolkit';

export interface AuthStateType {
    userId: string;
    isAuthenticated: boolean | undefined;
}

export type AuthState = Readonly<AuthStateType>;

const initialState: AuthState = {
    userId: '',
    isAuthenticated: undefined,
};

const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthenticated: (state, action: PayloadAction<AuthStateType>) => {
            state = { ...action.payload };
        },
    },
});

export const { setAuthenticated } = auth.actions;
export default auth;
