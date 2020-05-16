import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'app/App.scss';
import Navbar from 'common/components/Navbar/Navbar';
import Routes from 'common/components/Routes/Routes';
import { Provider } from 'react-redux';
import configureStore from 'app/store';
import CheckAuth from 'common/containers/CheckAuth/CheckAuth';

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
