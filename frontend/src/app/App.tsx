import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from 'common/components/Navbar';
import Routes from 'common/components/Routes';
import { Provider } from 'react-redux';
import CheckAuth from 'common/containers/CheckAuth';
import store from 'app/store';

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
