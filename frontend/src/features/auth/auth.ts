import { createSlice } from '@reduxjs/toolkit';
import { checkAuth } from 'features/auth/authEffects';
import { prepareSetAuthenticated, setAuthenticatedReducer } from 'features/auth/authHelper';

export const setAuthenticated = {
    reducer: setAuthenticatedReducer,
    prepare: prepareSetAuthenticated,
};

export default createSlice({
    name: 'auth',
    initialState: { isAuthenticated: null, userId: '' },
    reducers: {
        setAuthenticated,
    },
    extraReducers: (builder) => {
        builder.addCase(checkAuth.fulfilled, setAuthenticatedReducer);
    },
});
