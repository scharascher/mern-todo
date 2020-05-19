import rootReducer, { RootState } from 'app/rootReducer';
import { configureStore, ThunkAction } from '@reduxjs/toolkit';
import { Action } from 'typesafe-actions';

const store = configureStore({
    reducer: rootReducer,
});

if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept('./rootReducer', () => {
        const newRootReducer = require('./rootReducer').default;
        store.replaceReducer(newRootReducer);
    });
}

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
export type AppDispatch = typeof store.dispatch;
export default store;
