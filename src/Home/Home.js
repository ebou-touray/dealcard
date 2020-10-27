import React from 'react';
import './Home.css'

const Home = () => {
    return (
        <div className="home-pg">
            <button className="btn add">Add new deal card</button>
            <h3> OR </h3>
            <div className="search-area">
                <button className="btn search">Search a card</button>
                <input className="search-input" type="text" placeholder="search..."></input>
            </div>

        </div>
    );
}

export default Home;
