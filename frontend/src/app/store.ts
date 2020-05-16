import rootReducer from 'app/rootReducer';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

const middleware: any[] = [];
// if (process.env.NODE_ENV !== 'production') {
//     middleware.push(
//         createLogger({
//
//         }),
//     );
// }
export default () => {
    return configureStore({
        reducer: rootReducer,
        middleware: [...getDefaultMiddleware(), ...middleware],
    });
};
