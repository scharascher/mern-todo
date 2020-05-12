import React from 'react';
import './Routes.scss';
import { Switch, Route } from 'react-router-dom';
import Home from 'components/Home/Home';
import Todos from 'containers/Todos/Todos';
import Register from 'containers/Register/Register';
import Login from 'containers/Login/Login';
import AddTodo from 'containers/AddTodo/AddTodo';
import EditTodo from 'containers/EditTodo/EditTodo';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';

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
