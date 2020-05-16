import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import Navbar from 'components/Navbar/Navbar';
import Routes from 'components/Routes/Routes';
import { Provider } from 'react-redux';
import configureStore from './store';
import CheckAuth from './containers/CheckAuth/CheckAuth';

const store = configureStore();

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <Router>
                <CheckAuth />
                <div>
                    <Navbar />
                </div>
                <div>
                    <Routes />
                </div>
            </Router>
        </Provider>
    );
};

export default App;
