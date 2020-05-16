import React from 'react';
import 'common/components/Routes/Routes.scss';
import { Switch, Route } from 'react-router-dom';
import Home from 'common/components/Home/Home';
import TodosWrapper from 'features/todos/containers/TodosWrapper/TodosWrapper';
import Register from 'features/auth/Register/Register';
import Login from 'features/auth/Login/Login';
import AddTodo from 'features/todos/containers/AddTodo/AddTodo';
import EditTodo from 'features/todos/containers/EditTodo/EditTodo';
import PrivateRoute from 'common/components/PrivateRoute/PrivateRoute';

const Routes: React.FC = () => {
    return (
        <Switch>
            <PrivateRoute path="/todos">
                <TodosWrapper />
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
