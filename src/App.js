import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Login/Login';
import Home from './Home/Home';
import Form from './Form/Form';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/form" component={Form} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
