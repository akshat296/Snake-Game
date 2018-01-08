import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import Navigation from './Navigation';
import { bindActionCreators } from 'redux';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
    username: "",
    password: "",
    confirm_password: "",
    email: ""  
    };
     this.username = this.username.bind(this);
     this.password = this.password.bind(this);
  }
username(event){
  this.setState({username: event.target.value});
}
password(event){
  this.setState({password: event.target.value});
}
confirm_password(event){
    this.setState({confirm_password: event.target.value});
  }
email(event){
    this.setState({email: event.target.value});
  }
  render() {
    return (
      <div className="App">
        <div className="row">
          <div className="col-lg-3" id="parent">
          <Navigation/>
            <h2>Register</h2><br/>
            <input className = "center-text textfield"       
                   type = "text"
                   name = "email"
                   placeholder = "Username"
                   value = {this.state.username} 
                   onChange= {this.username}/>
            <br/>
            <input className = "center-text textfield"      
                   type = "password"
                   name = "password" 
                   placeholder = "Password"
                   value = {this.state.password} 
                   onChange={this.password} />
            <input className = "center-text textfield"      
                   type = "password"
                   name = "confirm_password" 
                   placeholder = "Confirm Password"
                   value = {this.state.confirm_password} 
                   onChange={this.password} />
            <input className = "center-text textfield"      
                   type = "text"
                   name = "email" 
                   placeholder = "Email"
                   value = {this.state.email} 
                   onChange={this.password} />
            <br/><br/>
            <input className = "center-text submit btn btn-primary" 
                   type = "submit" 
                   value = "Sign up"/><br/>
        </div>
       </div>
      </div>

    );
  }
}

function mapStateToProps(state, ownProps) {

  return {
    //courses: state.courses,
   // statusToast: state.statusToast

  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
  //  getUsername: getUsername
   
  }, dispatch);

}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
