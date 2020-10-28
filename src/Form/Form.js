import React from 'react';
import './Form.css'

const Form = () => {
    /*     let today = new Date().toLocaleDateString('en-GB');
        console.log(today) */


    return (
        <div>
            <form>
                <div className="date-area">
                    <p>  Date when created </p>

                    <p> Date when modified</p>
                    <label htmlFor="salesman">Salesman </label>
                    <input type="text" id="salesman" name="salesman"></input>

                </div>

                <div className="information-area">
                    <h2>Information</h2>
                    <label for="consultant">Consultant name </label>
                    <input type="text" id="consultant" name="consultant" />
                    <br />
                    <label htmlFor="broker">Broker </label>
                    <input type="text" id="broker" name="broker" />
                    <br />
                    <label htmlFor="customer">End customer </label>
                    <input type="text" id="customer" name="customer" />
                    <br />
                    <label htmlFor="price">Price €/hr </label>
                    <input type="text" id="price" name="price" />
                    <br />
                    <label htmlFor="allocation">Allocation % </label>
                    <input type="number" id="allocation" name="allocation" />
                    <br />
                    <label htmlFor="payment-term">Payment term </label>
                    <input type="text" id="payment-term" name="payment-term" />
                    <br />
                    <label htmlFor="other-terms">Other terms</label>
                    <input type="textarea" id="other-terms" name="other-terms" />
                    <br />
                    <label htmlFor="starting-date">Starting date </label>
                    <input type="date" id="starting-date" name="starting-date" />
                    <br />
                    <label htmlFor="duration">Duration</label>
                    <input type="text" id="duration" name="duration" />
                    <br />
                    <label htmlFor="contact-person">External contact person </label>
                    <input type="checkbox" id="contact-person" name="contact-person" />

                </div>

                <div className="subcontractor-area" >
                    <h3>External sub contractor information</h3>
                    <label htmlFor="contractor-name">Contractor name </label>
                    <input type="text" id="contractor-name" name="contractor-name" disabled />
                    <br />
                    <label htmlFor="price-2">Price </label>
                    <input type="text" id="price-2" name="price-2" disabled />
                    <br />
                    <label htmlFor="other-info">Other info</label>
                    <input type="textarea" id="other-info" name="other-info" disabled />

                </div>
            </form>
        </div>
    );
}

export default Form;
