import Api from 'utils/api';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setAuthenticated } from './auth';
import { LoginData } from 'features/auth/components/LoginForm';

export const checkAuth = createAsyncThunk('checkAuth', async (data, { dispatch }) => {
    const isAuthenticated = await Api.authorizedRequest('checkAuth');
    dispatch(setAuthenticated(isAuthenticated));
});
export const login = createAsyncThunk('login', async (data: LoginData, { dispatch }) => {
    Api.authorizedRequest('login', 'POST', data).then(() => {
        dispatch(setAuthenticated(true));
    });
});
export const logout = createAsyncThunk('logout', async (data, { dispatch }) => {
    Api.authorizedRequest('logout', 'POST', data).then(() => {
        dispatch(setAuthenticated(false));
    });
});
