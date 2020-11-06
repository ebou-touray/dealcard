import axios from 'axios';
import React, { useState } from 'react';
import './Form.css';
import { useHistory } from 'react-router-dom';

const Form = () => {
  const [newCard, setNewCard] = useState({
    date: '',
    salesman: '',
    consultantName: '',
    broker: '',
    endCustomer: '',
    price: '',
    allocation: '',
    paymentTerms: '',
    otherTerms: '',
    startingDate: '',
    duration: '',
    contactPerson: '',
    subContractorName: '',
    otherInfo: '',
  });
  const [checkbox, setCheckbox] = useState(false);
  const history = useHistory();

  let {
    date,
    salesman,
    consultantName,
    broker,
    endCustomer,
    price,
    allocation,
    paymentTerms,
    otherTerms,
    startingDate,
    duration,
    contactPerson,
    subContractorName,
    price2,
    otherInfo,
  } = newCard;

  const checkboxHandler = () => {
    setCheckbox(!checkbox);
  };

  const changeValueHandler = (e) => {
    setNewCard({
      ...newCard,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(newCard);

    await axios
      .post('/postDeal', newCard)
      .then((response) => {
        console.log('new card added');
        console.log(response.data);
        alert('sent');
        history.push('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div>
        <form onSubmit={submitHandler}>
          <p>* = information is required</p>
          <div className="date-area">
            <label htmlFor="date" id="date">
              {' '}
              Date:
            </label>
            <input
              type="date"
              value={date}
              name="date"
              onChange={changeValueHandler}
            />
            <p> Date when modified</p>
            <label htmlFor="salesman">Salesperson name * </label>
            <input
              type="text"
              value={salesman}
              name="salesman"
              onChange={changeValueHandler}
              required
            />
          </div>
          <div className="information-area">
            <h2>Information</h2>
            <div className="form-group">
              <label htmlFor="consultantName">Consultant name * </label>
              <input
                type="text"
                value={consultantName}
                name="consultantName"
                onChange={changeValueHandler}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="broker">Broker name * </label>
              <input
                type="text"
                value={broker}
                name="broker"
                onChange={changeValueHandler}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="endCustomer">End customer * </label>
              <input
                type="text"
                value={endCustomer}
                name="endCustomer"
                onChange={changeValueHandler}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="price">Price (€/h) * </label>
              <input
                type="number"
                step=".01"
                value={price}
                name="price"
                onChange={changeValueHandler}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="allocation">Allocation (%) * </label>
              <input
                type="number"
                value={allocation}
                name="allocation"
                onChange={changeValueHandler}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="paymentTerms">Payment term * </label>
              <input
                type="text"
                value={paymentTerms}
                name="paymentTerms"
                onChange={changeValueHandler}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="otherTerms">Other terms</label>
              <textarea
                type="text"
                value={otherTerms}
                name="otherTerms"
                onChange={changeValueHandler}
              />
            </div>
            <div className="form-group">
              <label htmlFor="startingDate">Starting date </label>
              <input
                type="date"
                value={startingDate}
                name="startingDate"
                onChange={changeValueHandler}
              />
            </div>
            <div className="form-group">
              <label htmlFor="duration">Duration</label>
              <input
                type="text"
                value={duration}
                name="duration"
                onChange={changeValueHandler}
              />
            </div>
            <div className="form-group">
              <label htmlFor="contactPerson">Contact person</label>
              <input
                type="text"
                value={contactPerson}
                name="contactPerson"
                onChange={changeValueHandler}
              />
            </div>
            <div className="form-group">
              <label htmlFor="checkbox">Contractor is internal</label>
              <input
                type="checkbox"
                id="checkbox"
                name="checkbox"
                onClick={checkboxHandler}
              />
            </div>
          </div>
          {checkbox && (
            <div className="subcontractor-area" id="subcontractor-area">
              <h3>Internal contractor information</h3>
              <div className="form-group">
                <label htmlFor="subContractorName">Contractor name * </label>
                <input
                  type="text"
                  value={subContractorName}
                  className="subContractorName"
                  name="subContractorName"
                  onChange={changeValueHandler}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="price2">Price * </label>
                <input
                  type="number"
                  value={price2}
                  className="price2"
                  name="price2"
                  onChange={changeValueHandler}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="otherInfo">Other info</label>
                <textarea
                  type="text"
                  value={otherInfo}
                  className="otherInfo"
                  name="otherInfo"
                  onChange={changeValueHandler}
                />
              </div>
            </div>
          )}

          <button type="submit" className="btn send">
            Send
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
