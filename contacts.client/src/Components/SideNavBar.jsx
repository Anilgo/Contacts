import React from 'react';
import './SideNavBar.css';
import { Link } from 'react-router-dom';

const SideNavBar = () => {
  return (
    <div className="side-nav-bar">
      <ul>
        <li><Link to="/home">Contacts</Link></li>
        <li><Link to="/create-contact">Create Contact</Link></li>
        <li><Link to="#">empty</Link></li>
        <li><Link to="#">empty</Link></li>
      </ul>
    </div>
  );
};

export default SideNavBar;
