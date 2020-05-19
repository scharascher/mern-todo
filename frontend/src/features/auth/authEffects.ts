import Api from 'common/helpers/api';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { createAuthObject } from 'features/auth/authHelper';

export const checkAuth = createAsyncThunk('checkAuth', async () => {
    return createAuthObject(await Api.authorizedRequest('checkAuth'));
});
