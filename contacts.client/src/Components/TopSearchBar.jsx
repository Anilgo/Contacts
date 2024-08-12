import React from 'react';
import './TopSearchBar.css';

const TopSearchBar = ({ onSearch }) => {
  return (
    <div className="top-search-bar">
      <input
        type="text"
        placeholder="Search contacts..."
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default TopSearchBar;
