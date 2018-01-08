import React, { Component } from 'react';
import './App.css';
import { 
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Register from './components/Register';
import SignIn from './components/SignIn';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.username = this.username.bind(this);
    this.password = this.password.bind(this);
  }
  username(event) {
    this.setState({ username: event.target.value });
  }
  password(event) {
    this.setState({ password: event.target.value });
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={SignIn} />
          <Route path="/register" component={Register} />
          <Route path="/signin" component={SignIn} />
        </div>
      </Router>
    );
  }
}


function mapStateToProps(state, ownProps) {

  return {
    courses: state.courses,
    statusToast: state.statusToast
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
   
  }, dispatch);

}

export default connect(mapStateToProps, mapDispatchToProps)(App);
