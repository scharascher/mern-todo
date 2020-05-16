import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

export default createSlice({
    name: 'auth',
    initialState: { isAuthenticated: null, userId: '' },
    reducers: {
        setAuthenticated: {
            reducer: (state: any, action: any) => action.payload,
            prepare: (isAuthenticated: boolean) => ({
                payload: {
                    isAuthenticated,
                    userId: isAuthenticated ? Cookies.get('userId') : '',
                },
            }),
        },
    },
});
