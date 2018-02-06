import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getUsername } from '../../actions/loginActions';
import { Link } from 'react-router-dom';
import './Sidebar.css';
class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
        username: "test",
        password: "12345"
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
      console.log("akshatq",this.props.user.login[0].name);
    }
    checkUser(){
      this.props.getUsername(this.state.username,this.state.password);
      setTimeout(this.function2, 3000);
      console.log("username func",this.props);
      }
    
    render() {
        return ( 
        <div className="loginWrapper">
            <h2 className="heading">Login</h2><br/>
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
        </div>);
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

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
