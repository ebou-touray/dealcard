import React, { useEffect, useState } from 'react';
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

  const deleteDeal = async (id) => {
    try {
      await axios.delete(`/deals/${id}`);
      getData();
    } catch (error) {
      console.error(error);
    }
  };

  const searchHandler = (e) => {
    setSearchInput(e.target.value);
  };

  var filterDeals = dbResult.filter((item) => {
    const brokerFilter = item.broker
      .toString()
      .toLowerCase()
      .includes(searchInput.toLowerCase());
    const consultantNameFilter = item.consultantName
      .toString()
      .toLowerCase()
      .includes(searchInput.toLowerCase());
    const endCustomerFilter = item.endCustomer
      .toString()
      .toLowerCase()
      .includes(searchInput.toLowerCase());
    const salesFilter = item.salesman
      .toString()
      .toLowerCase()
      .includes(searchInput.toLowerCase());
    const paymentFilter = item.paymentTerms
      .toString()
      .toLowerCase()
      .includes(searchInput.toLowerCase());
    const startDateFilter = item.startingDate
      .toString()
      .toLowerCase()
      .includes(searchInput.toLowerCase());

    return (
      brokerFilter +
      consultantNameFilter +
      endCustomerFilter +
      salesFilter +
      paymentFilter +
      startDateFilter
    );
  });

  return (
    <>
      <div className="home-pg">
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
        {filterDeals.length > 0 && (
          <DataTable data={filterDeals} onClick={deleteDeal} />
        )}
      </div>
    </>
  );
};

export default Home;
