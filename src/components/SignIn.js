import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Navigation from './Navigation';
import { bindActionCreators } from 'redux';
import { getUsername } from '../actions/loginActions';
import Game from './Game';
import Window from './Window'

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
    username: "akshat",
    password: "test"  ,c:1
    };
     this.username = this.username.bind(this);
     this.function2 = this.function2.bind(this);
     this.checkUser = this.checkUser.bind(this);
     this.password = this.password.bind(this);
  }
username(event){
  this.setState({username: event.target.value});
}
password(event){
  this.setState({password: event.target.value});
}
function2(){
  console.log("akshatq",this.props.user.login.name);
}
checkUser(){
  setTimeout(this.function2, 3000);

  console.log(this.props.getUsername(this.state.username,this.state.password));
  }

  render() {
    return (
        <div className = "App">
        <div className = "row">
        <Window />
          <div className = "col-lg-3" id = "parent">
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
                   onChange = {this.password} />
            <br/><br/>
            <input className = "center-text submit btn btn-primary"
                   type = "submit" 
                   value = "Login" onClick ={this.checkUser}/><br/>
          <Link to = '/register'>Not registered yet! Sign Up!</Link>
        </div>
      </div>
      </div>
    );
  }
}
function mapStateToProps(state, ownProps) {
  
    return {
      user: state.pika
    };
  }
  function mapDispatchToProps(dispatch) {
    return bindActionCreators({
      getUsername: getUsername
    }, dispatch);
  
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(SignIn);
  