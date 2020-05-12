import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import Navbar from 'components/Navbar/Navbar';
import Routes from 'components/Routes/Routes';

const App: React.FC = () => {
    return (
        <Router>
            <div>
                <Navbar />
            </div>
            <div>
                <Routes />
            </div>
        </Router>
    );
};

export default App;
