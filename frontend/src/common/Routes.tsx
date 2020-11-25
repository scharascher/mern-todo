import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from 'common/Home';
import TodosWrapper from 'features/todos/components/TodosWrapper';
import Register from 'features/auth/components/Register';
import Login from 'features/auth/components/Login';
import AddTodo from 'features/todos/components/AddTodo';
import EditTodo from 'features/todos/components/EditTodo';
import PrivateRoute from 'common/PrivateRoute';
import TodoTypesWrapper from 'features/todoTypes/components/TodoTypesWrapper';

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
