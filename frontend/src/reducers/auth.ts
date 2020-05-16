import createReducer from '../helpers/createReducer';
import { CHECK_AUTH_SUCCESS, SET_IS_AUTH } from '../actions/auth';

export default createReducer(
    { isAuthenticated: null, userId: '' },
    {
        [SET_IS_AUTH]: (state: any, action: any) => {
            return {
                isAuthenticated: action.isAuthenticated,
                userId: action.userId,
            };
        },
        [CHECK_AUTH_SUCCESS]: (state: any, action: any) => ({ ...state, isAuthenticated: true }),
    },
);
