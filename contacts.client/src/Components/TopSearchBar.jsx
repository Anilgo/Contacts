import React from 'react';
import './TopSearchBar.css';

const TopSearchBar = ({ onSearch, onReset }) => {
  return (
    <div className="top-search-bar">
      <button className="reset-button" onClick={onReset}>=</button>
      <input
        type="text"
        placeholder="Search contacts..."
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default TopSearchBar;
