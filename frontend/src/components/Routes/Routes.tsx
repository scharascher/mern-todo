import React from 'react';
import './Routes.scss';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import Todos from '../../pages/Todos/Todos';
import Register from '../../pages/Register/Register';
import Login from '../../pages/Login/Login';
import AddTodo from '../../pages/AddTodo/AddTodo';
import EditTodo from '../../pages/EditTodo/EditTodo';
import Cookies from 'js-cookie';

const Routes: React.FC = () => {
    return (
        <Switch>
            <PrivateRoute path="/user-info">
                <Home />
            </PrivateRoute>
            <PrivateRoute path="/todos">
                <Todos />
            </PrivateRoute>
            <PrivateRoute path="/add-todo">
                <AddTodo />
            </PrivateRoute>
            <PrivateRoute path="/edit-todo/:id">
                <EditTodo />
            </PrivateRoute>
            <Route path="/register">
                <Register />
            </Route>
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    );
};

export default Routes;

const PrivateRoute: React.FC<any> = ({ children, ...rest }) => {
    return (
        <Route
            {...rest}
            render={({ location }) =>
                Cookies.get('userId') ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    );
};
