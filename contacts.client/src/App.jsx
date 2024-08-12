import React, { useState } from 'react';
import './App.css';
import TopSearchBar from './Components/TopSearchBar';
import SideNavBar from './Components/SideNavBar';
import MainContent from './Components/MainContent';

function App() {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div className="App">
            <SideNavBar />
            <div className="main-area">
                <TopSearchBar onSearch={setSearchTerm} />
                <MainContent searchTerm={searchTerm} />
            </div>
        </div>
    );
}

export default App;
