import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './Login/Login'
import Home from './Home/Home'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">

        <Switch>

          <Route path="/" exact component={Login} />
          <Route path="/home" component={Home} />

        </Switch>
      </div>
    </Router>
  );
}

export default App;