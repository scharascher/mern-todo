import createReducer from 'common/helpers/createReducer';
import { CHECK_AUTH_SUCCESS, SET_IS_AUTH } from 'features/auth/authActions';

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
