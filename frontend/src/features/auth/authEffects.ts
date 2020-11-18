import Api from 'utils/api';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setAuthenticated } from './auth';
import Cookies from 'js-cookie';

export const checkAuth = createAsyncThunk('checkAuth', async (data, { dispatch }) => {
    const isAuthenticated = await Api.authorizedRequest('checkAuth');
    dispatch(
        setAuthenticated({
            isAuthenticated,
            userId: isAuthenticated ? Cookies.get('userId') || '' : '',
        }),
    );
});
