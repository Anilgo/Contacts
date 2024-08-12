import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import TopSearchBar from './Components/TopSearchBar';
import SideNavBar from './Components/SideNavBar';
import MainContent from './Components/MainContent';
import ContactDetails from './Components/ContactDetails';

function App() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleReset = () => {
        setSearchTerm('');
        window.location.reload(); // Reload the page to reset the state
    };

    return (
        <Router>
            <div className="App">
                <SideNavBar />
                <div className="main-area">
                    <TopSearchBar onSearch={setSearchTerm} onReset={handleReset} />
                    <Routes>
                        <Route path="/contact/:id" element={<ContactDetails />} />
                        <Route path="/" element={<MainContent searchTerm={searchTerm} />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
