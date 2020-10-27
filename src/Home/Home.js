import React from 'react';

const Home = () => {
    return (
        <div className="home-pg">
            <button className="btn add">Add new deal card</button>
            <button className="btn search">Search a card</button>
            <input type="text" placeholder="search..."></input>

        </div>
    );
}

export default Home;
