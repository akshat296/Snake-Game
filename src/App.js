import React, { Component } from 'react';
import './App.css';
import { 
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Register from './components/Register';
import SignIn from './components/SignIn';

class App extends Component {

  render() {
     return (
      <Router>
        <div>
          <Route exact path = "/" component = {SignIn} />
          <Route path = "/register" component = {Register} />
          <Route path = "/signin" component = {SignIn} />
        </div>
      </Router>
     );
    }
  }

export default (App);
