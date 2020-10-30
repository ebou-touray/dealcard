import React, { useState } from 'react';
import './Form.css'

const Form = () => {


    // enables the subcontractor info area if checkbox is checked
    // does not work properly at the moment
    const checkHandler = () => {
        let checkBox = document.getElementById('contact-person');
        let x = document.getElementById('subcontractor-area')
        if (checkBox.checked) {
            console.log('checked')
            x.querySelectorAll('.contractor-name .price-2').disabled = false;
        } else {
            x.querySelectorAll('.contractor-name .price-2').disabled = true;
        }
    }

    return (
        <div>
            <form>
                <div className="date-area">
                    <p id="date">  Date when created </p>

                    <p> Date when modified</p>
                    <label htmlFor="salesman">Salesman </label>
                    <input type="text" id="salesman" name="salesman"></input>
                </div>
                <div className="information-area">
                    <h2>Information</h2>
                    <div>
                        <label htmlFor="consultant">Consultant name </label>
                        <input type="text" id="consultant" name="consultant" />
                    </div>
                    <div>
                        <label htmlFor="broker">Broker </label>
                        <input type="text" id="broker" name="broker" />
                    </div>
                    <div>
                        <label htmlFor="customer">End customer </label>
                        <input type="text" id="customer" name="customer" />
                    </div>
                    <div>
                        <label htmlFor="price">Price €/hr </label>
                        <input type="text" id="price" name="price" />
                    </div>
                    <label htmlFor="allocation">Allocation % </label>
                    <input type="number" id="allocation" name="allocation" />
                    <div>
                        <label htmlFor="payment-term">Payment term </label>
                        <input type="text" id="payment-term" name="payment-term" />
                    </div>
                    <div>
                        <label htmlFor="other-terms">Other terms</label>
                        <textarea type="text" id="other-terms" name="other-terms" />
                    </div>
                    <div>
                        <label htmlFor="starting-date">Starting date </label>
                        <input type="date" id="starting-date" name="starting-date" />
                    </div>
                    <div>
                        <label htmlFor="duration">Duration</label>
                        <input type="text" id="duration" name="duration" />
                    </div>
                    <div>
                        <label htmlFor="contact-person">Internal contact person </label>
                        <input type="checkbox" id="contact-person" name="contact-person" onClick={checkHandler} />
                    </div>

                </div>

                <div className="subcontractor-area" id="subcontractor-area" >
                    <h3>Internal sub contractor information</h3>
                    <div>
                        <label htmlFor="contractor-name">Contractor name </label>
                        <input type="text" id="contractor-name" className="contractor-name" name="contractor-name" disabled />
                    </div>
                    <div>
                        <label htmlFor="price-2">Price </label>
                        <input type="text" id="price-2" className="price-2" name="price-2" disabled />
                    </div>
                    <div>
                        <label htmlFor="other-info">Other info</label>
                        <textarea type="text" id="other-info" className="other-info" name="other-info" disabled />
                    </div>
                </div>

                <button className="btn send">Send</button>
            </form>
        </div>
    );
}

export default Form;
