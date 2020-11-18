import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home/Home';
import Form from './Form/Form';
import NavBar from './NavBar/NavBar';
import DataCard from './DataCard';
import EditDeal from './EditDeal';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/form" component={Form} />
          <Route exact path="/edit/:id" component={EditDeal} />
          <Route path="/:id" component={DataCard} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
