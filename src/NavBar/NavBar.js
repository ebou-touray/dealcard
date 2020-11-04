import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {
    return (

        <div className="navBar">
            <Link to="/form">  <button className="btn add">Add new deal card</button></Link>
            <div className="search-area">
                <button className="btn search">Search a card</button>
                <input className="search-input" type="text" placeholder="search..."></input>
            </div>

        </div>


    );
}

export default NavBar;
