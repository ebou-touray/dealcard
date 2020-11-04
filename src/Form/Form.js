import axios from 'axios';
import React, { useState } from 'react';
import './Form.css';

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
    subContractorName: '',
    otherInfo: '',
    price2: '',
  });
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
    subContractorName,
    price2,
    otherInfo,
  } = newCard;

  // enables the subcontractor info area if checkbox is checked
  // does not work properly at the moment
  /*     const checkHandler = () => {
            let checkBox = document.getElementById('contactPerson');
            let x = document.getElementById('subcontractor-area')
            if (checkBox.checked) {
                console.log('checked')
                x.querySelector('.subContractorName').disabled = false;
            } else {
                x.querySelector('.subContractorName').disabled = true;
            }
        } */

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
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="date-area">
          <label htmlFor="date" id="date">
            {' '}
            Date:{' '}
          </label>
          <input
            type="date"
            name="date"
            value={date}
            onChange={changeValueHandler}
          />

          <label htmlFor="salesman">Salesman </label>
          <input
            type="text"
            value={salesman}
            name="salesman"
            onChange={changeValueHandler}
          ></input>
        </div>
        <div className="information-area">
          <h2>Information</h2>
          <div>
            <label htmlFor="consultantName">Consultant name </label>
            <input
              type="text"
              value={consultantName}
              name="consultantName"
              onChange={changeValueHandler}
            />
          </div>
          <div>
            <label htmlFor="broker">Broker </label>
            <input
              type="text"
              value={broker}
              name="broker"
              onChange={changeValueHandler}
            />
          </div>
          <div>
            <label htmlFor="endCustomer">End customer </label>
            <input
              type="text"
              value={endCustomer}
              name="endCustomer"
              onChange={changeValueHandler}
              required
            />
          </div>
          <div>
            <label htmlFor="price">Price €/hr </label>
            <input
              type="number"
              step=".01"
              value={price}
              name="price"
              onChange={changeValueHandler}
            />
          </div>
          <label htmlFor="allocation">Allocation % </label>
          <input
            type="number"
            value={allocation}
            name="allocation"
            onChange={changeValueHandler}
          />
          <div>
            <label htmlFor="paymentTerms">Payment term </label>
            <input
              type="text"
              value={paymentTerms}
              name="paymentTerms"
              onChange={changeValueHandler}
            />
          </div>
          <div>
            <label htmlFor="otherTerms">Other terms</label>
            <textarea
              type="text"
              value={otherTerms}
              name="otherTerms"
              onChange={changeValueHandler}
            />
          </div>
          <div>
            <label htmlFor="startingDate">Starting date </label>
            <input
              type="date"
              value={startingDate}
              name="startingDate"
              onChange={changeValueHandler}
            />
          </div>
          <div>
            <label htmlFor="duration">Duration</label>
            <input
              type="text"
              value={duration}
              name="duration"
              onChange={changeValueHandler}
            />
          </div>

          <div>
            <label htmlFor="checkbox">Internal contact person </label>
            <input
              type="checkbox"
              id="checkbox"
              name="checkbox" /* onClick={checkHandler} */
            />
          </div>
        </div>

        <div className="subcontractor-area" id="subcontractor-area">
          <h3>Internal sub contractor information</h3>
          <div>
            <label htmlFor="subContractorName">Contractor name </label>
            <input
              type="text"
              value={subContractorName}
              className="subContractorName"
              name="subContractorName"
              onChange={changeValueHandler}
            />
          </div>
          <div>
            <label htmlFor="price2">Price </label>
            <input
              type="text"
              value={price2}
              className="price2"
              name="price2"
              onChange={changeValueHandler}
            />
          </div>
          <div>
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

        <button type="submit" className="btn send">
          Send
        </button>
      </form>
    </div>
  );
};

export default Form;
