import React from 'react';
import './Routes.scss';
import { Switch, Route } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import Todos from '../../pages/Todos/Todos';
import Register from '../../pages/Register/Register';
import Login from '../../pages/Login/Login';
import AddTodo from '../../pages/AddTodo/AddTodo';
import EditTodo from '../../pages/EditTodo/EditTodo';

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
            <Route path="/edit-todo/:id">
                <EditTodo />
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
