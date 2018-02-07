import React, { Component } from 'react';
import './App.css';
import { 
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Register from './components/Pages/Register';
import Main from './components/Pages/Main';

class App extends Component {

  render() {
     return (
      <Router>
        <div className="parent">
          <Route exact path = "/" component = {Main} />
          <Route path = "/register" component = {Register} />
          <Route path = "/login" component = {Main} />
        </div>
      </Router>
     );
    }
  }

export default (App);
