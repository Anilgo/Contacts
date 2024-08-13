import React from 'react';
import './SideNavBar.css';

const SideNavBar = () => {
  return (
    <div className="side-nav-bar">
      <ul>
        <li><a href="/home">Contacts</a></li>
        <li><a href="/create-contact">Create Contact</a></li>
        <li><a href="#">empty</a></li>
        <li><a href="#">empty</a></li>
      </ul>
    </div>
  );
};

export default SideNavBar;
