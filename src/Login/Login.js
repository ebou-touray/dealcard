import React from 'react';
import { Link } from 'react-router-dom'

import './Login.css'

const Login = () => {
    return (
        <div className="login-pg">
            <h1>Deal Card</h1>
            <input type="text" placeholder="Enter username"></input>
            <Link to="/home"> <button className="btn login">Login</button></Link>
        </div>
    );
}

export default Login;
