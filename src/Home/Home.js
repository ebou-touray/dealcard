import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DataTable from '../DataTable';
import './Home.css';
import axios from 'axios';

const Home = () => {
  const [dbResult, setDBResult] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  const getData = async () => {
    try {
      const res = await axios.get('/getAllDeals');
      setDBResult(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const searchHandler = (e) => {
    setSearchInput(e.target.value);
  };

  const filteredData = dbResult.filter((data) => {
    return data.salesman.toLowerCase().includes(searchInput.toLowerCase());
  });
  return (
    <div className="home-pg">
      <Link to="/form">
        {' '}
        <button className="btn add">Add new deal card</button>
      </Link>
      <h3> OR </h3>
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
      <DataTable data={filteredData} />
    </div>
  );
};

export default Home;
