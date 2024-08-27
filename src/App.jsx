import React from 'react';
import { Route, Routes, HashRouter} from 'react-router-dom';
import CurrentEmployees from './pages/CurrentEmployees';
import Home from './pages/Home';

function App() {
    return (
            <HashRouter>
                <div className="App">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/employees" element={<CurrentEmployees />} />
                    </Routes>
                </div>
            </HashRouter>
    );
}

export default App;