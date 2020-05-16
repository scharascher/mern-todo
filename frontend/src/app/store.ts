import { applyMiddleware, createStore } from 'redux';
import rootReducer from 'app/rootReducer';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

const middleware: any[] = [thunk];
if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
}
export default () => {
    return createStore(
        rootReducer,
        { todos: null, auth: { isAuthenticated: null, userId: ''} },
        composeWithDevTools(applyMiddleware(...middleware)),
    );
};
