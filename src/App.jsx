import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CurrentEmployees from './pages/CurrentEmployees';
import Home from './pages/Home';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/employees" element={<CurrentEmployees />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
