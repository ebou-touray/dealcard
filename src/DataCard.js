import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const DataCard = () => {
  const [dealCard, setDealCard] = useState([]);
  const { id } = useParams();
  let creationDate = undefined;
  let startingDate = undefined;

  const loadDeals = async () => {
    try {
      const res = await axios.get(`/${id}`);
      console.log(res.data)
      setDealCard(res.data);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadDeals();
  }, []);

  creationDate = new Date(dealCard.date).toLocaleDateString('nb-NO')
  startingDate = new Date(dealCard.startingDate).toLocaleDateString('nb-NO')



  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 py-5 mx-auto">
            <h1
              className="text-success text-uppercase py-2"
              style={{ letterSpacing: '2px' }}
            >
              Deal Details
            </h1>
            <div className="card mx-auto shadow-lg bg-white bg-gradient p-2 rounded">
              <ul className="list-group list-group-flush">
                <div className="card-header">
                  <span className="font-weight-bold">Date:</span>{' '}
                  {creationDate}
                </div>
                <div className="card-header">
                  <span
                    className="font-weight-bold text-uppercase"
                    style={{ letterSpacing: '2px' }}
                  >
                    Salesman:
                  </span>{' '}
                  {dealCard.salesman}
                </div>
              </ul>
              <div
                className="card-header text-center text-uppercase my-1"
                style={{ letterSpacing: '2px' }}
              >
                Information
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <span className="font-weight-bold">Broker:</span>{' '}
                  {dealCard.broker}
                </li>
                <li className="list-group-item">
                  <span className="font-weight-bold">End Customer:</span>{' '}
                  {dealCard.endCustomer}
                </li>
                <li className="list-group-item">
                  <span className="font-weight-bold">Price:</span>{' '}
                  {dealCard.price + ' €/h'}
                </li>
                <li className="list-group-item">
                  <span className="font-weight-bold">Allocation:</span>{' '}
                  {dealCard.allocation + ' %'}
                </li>
                <li className="list-group-item">
                  <span className="font-weight-bold">Payment Terms:</span>{' '}
                  {dealCard.paymentTerms}
                </li>
                <li className="list-group-item">
                  <span className="font-weight-bold">Other Terms:</span>{' '}
                  {dealCard.otherTerms}
                </li>
                <li className="list-group-item">
                  <span className="font-weight-bold">Starting Date:</span>{' '}
                  {startingDate}
                </li>
              </ul>
              <div
                className="card-header text-center text-uppercase my-1"
                style={{ letterSpacing: '2px' }}
              >
                Contact Person
              </div>
              <div className="card-footer">
                <span className="font-weight-bold">Sub Contractor Name:</span>{' '}
                {dealCard.subContractorName}
              </div>
              <div className="card-footer">
                <span className="font-weight-bold" id="price2">Price:</span>{' '}
                {dealCard.price2 !== null ? dealCard.price2 + ' €/h' : ''}

              </div>
              <div className="card-footer">
                <span className="font-weight-bold">Other Info:</span>{' '}
                {dealCard.otherInfo}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DataCard;
