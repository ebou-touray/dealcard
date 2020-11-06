import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  const [searchInput, setSearchInput] = useState('');
  const searchHandler = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <div className="navBar">
      <Link to="/">
        <button className="btn">Home</button>
      </Link>
      <Link to="/form">
        <button className="btn add">Add new deal card</button>
      </Link>
      <div className="search-area">
        <button className="btn search">Search a card</button>
        <input
          className="search-input"
          type="text"
          placeholder="search..."
          onChange={searchHandler}
          value={searchInput}
        ></input>
      </div>
    </div>
  );
};

export default NavBar;
