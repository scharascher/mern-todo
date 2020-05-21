import React from 'react';
import 'common/components/Routes/Routes.scss';
import { Route, Switch } from 'react-router-dom';
import Home from 'common/components/Home/Home';
import TodosWrapper from 'features/todos/containers/TodosWrapper';
import Register from 'features/auth/containers/Register';
import Login from 'features/auth/containers/Login';
import AddTodo from 'features/todos/containers/AddTodo';
import EditTodo from 'features/todos/containers/EditTodo';
import PrivateRoute from 'common/components/PrivateRoute/PrivateRoute';
import TodoTypesWrapper from 'features/todoTypes/containers/TodoTypesWrapper';

const Routes: React.FC = () => {
    return (
        <Switch>
            <PrivateRoute path="/todos">
                <TodosWrapper />
            </PrivateRoute>
            <PrivateRoute path="/todo-types">
                <TodoTypesWrapper />
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
