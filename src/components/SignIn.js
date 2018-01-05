import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Navigation from './Navigation';
import { bindActionCreators } from 'redux';

class SignIn extends Component {
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
        <div className="row">
          <div className="col-lg-3" id="parent">
          <Navigation/>
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
          <Link to='/register'>Not registered yet! Sign Up!</Link>
        </div>
      </div>
      </div>
    );
  }
}

export default SignIn;
