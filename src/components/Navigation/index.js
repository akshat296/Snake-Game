import React, { Component } from 'react';
import '../../App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import './navigation.css';
import logo from "../../resources/images/jumla.svg"
class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (

      <div className="nav-bar">
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <ul className="nav navbar-nav">
              <li className="navbar-logo">
             <img src={logo} height="50px" alt="Failed to Load Logo" width="30px" />
              </li>
              <li className="active">
              <a href="#">Home</a>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li><Link to='/register'><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li>
              <li><Link to='/login'><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
            </ul>
          </div>
        </nav>
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

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
