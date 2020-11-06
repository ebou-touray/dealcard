import React, { useEffect, useState } from 'react';
import DataTable from '../DataTable';
import './Home.css';
import axios from 'axios';

const Home = () => {
  const [dbResult, setDBResult] = useState([]);

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

  return (
    <>
      <div className="home-pg">
        {dbResult.length > 0 && (
          <DataTable data={dbResult} onClick={deleteDeal} />
        )}
      </div>
    </>
  );
};

export default Home;
