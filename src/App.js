import React, { Component } from 'react';
import './App.css';
import Main from './Main';
import Navigation from './Navigation';
import { connect } from 'react-redux';
import { createCourses, deleteCourses, doneCourses, editCourses } from './actions/courseActions';
import { bindActionCreators } from 'redux';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    username:"",
    password:""  
    };
     this.username = this.username.bind(this);
     this.password = this.password.bind(this);
  }
username(event){
  this.setState({username:event.target.value});
}
password(event){
  this.setState({password:event.target.value});
}

  render() {
    return (
      <div className="App">
        <Navigation />
        <Main />
        <div className="row">
          <div className="col-lg-3" id = "parent">
            <h2>Login</h2><br/>
            <input className = "center-text textfield"       
                   type = "text"
                   name = "email"
                   placeholder = "Username or Email"
                   value = {this.state.username} 
                   onChange= {this.username}/>
            <br/>
            <input className = "center-text textfield"      
                   type = "text"
                   name = "password" 
                   placeholder = "Password"
                   value = {this.state.password} 
                   onChange={this.password} />
            <br/><br/>
            <input className = "center-text submit btn btn-primary" 
                   type = "submit" 
                   value = "Login"/><br/>
            <a href = "./components/Register.js">Not registered yet! Sign Up!</a>
        </div>
      </div>
      </div>

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
    createCourses: createCourses
   
  }, dispatch);

}

export default connect(mapStateToProps, mapDispatchToProps)(App);
