import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

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
        <div className="bottom-space">
        <ul className = 'center-text'>
          <li><Link to="/">Home</Link></li>
          <li><Link to='/register'>Register</Link></li>
          <li><Link to='/signin'>Sign In</Link></li>
        </ul>
<hr/>   
</div>
    );
  }
}

function mapStateToProps(state, ownProps) {

  return {
    //courses: state.courses,
    //statusToast: state.statusToast

  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
  //createCourses: createCourses
   
  }, dispatch);

}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
