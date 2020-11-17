import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <div className="navBar">
      <Link to="/">
        <button className="btn">Home</button>
      </Link>
      <Link to="/form">
        <button className="btn add">Add new deal card</button>
      </Link>
    </div>
  );
};

export default NavBar;
