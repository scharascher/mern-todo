import React from 'react';
import './Routes.scss';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Todos from '../Todos/Todos';
import Register from '../Register/Register';
import Login from '../Login/Login';
import AddTodo from '../AddTodo/AddTodo';

const Routes: React.FC = () => {
    return (
        <Switch>
            <Route path="/user-info">
                <Home />
            </Route>
            <Route path="/todos">
                <Todos />
            </Route>
            <Route path="/add-todo">
                <AddTodo />
            </Route>
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
