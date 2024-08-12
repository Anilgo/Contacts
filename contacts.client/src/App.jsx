import React, { useState } from 'react';
import './App.css';
import TopSearchBar from './Components/TopSearchBar';
import SideNavBar from './Components/SideNavBar';
import MainContent from './Components/MainContent';

function App() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleReset = () => {
        setSearchTerm('');
        window.location.reload(); // Reload the page to reset the state
    };

    return (
        <div className="App">
            <SideNavBar />
            <div className="main-area">
                <TopSearchBar onSearch={setSearchTerm} onReset={handleReset} />
                <MainContent searchTerm={searchTerm} />
            </div>
        </div>
    );
}

export default App;
