import React from 'react';
import './SideNavBar.css';

const SideNavBar = () => {
  return (
    <div className="side-nav-bar">
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#contacts">Contacts</a></li>
        <li><a href="#about">About</a></li>
      </ul>
    </div>
  );
};

export default SideNavBar;
