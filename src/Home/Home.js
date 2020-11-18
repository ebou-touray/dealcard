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
    const priceFilter = item.price
      .toString()
      .toLowerCase()
      .includes(searchInput.toLowerCase());
    const subContractorNameFilter = item.subContractorName
      .toString()
      .toLowerCase()
      .includes(searchInput.toLowerCase());

    return (
      brokerFilter +
      consultantNameFilter +
      endCustomerFilter +
      salesFilter +
      paymentFilter +
      startDateFilter +
      priceFilter +
      subContractorNameFilter
    );
  });
  return (
    <>
      <div className="home-pg">
        <div className="container">
          <div className="pt-4">
            <input
              className="d-flex m-0"
              type="text"
              placeholder="Search..."
              onChange={searchHandler}
              value={searchInput}
            ></input>
          </div>

          {filterDeals.length > 0 && (
            <DataTable
              data={filterDeals}
              onClick={deleteDeal}
              searchInput={searchInput}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
