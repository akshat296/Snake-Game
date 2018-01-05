import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import App from './App';
import Register from './components/Register'
const Navigation = () => (
    <Router>
      <div>
      <nav >
        <ul style = {{display:'inline'}}  >
          <li><Link to="/">Home</Link></li>
          <li><Link to='/register'>Register</Link></li>
          <li><Link to='/signin'>Sign In</Link></li>
        </ul>
      </nav>
      <hr/>
      <Route exact path="/" component={Register}/>
      <Route path="/register" component={Register}/>
      <Route path="/signin" component={App}/>
    </div>
    </Router>
  )

  export default Navigation;