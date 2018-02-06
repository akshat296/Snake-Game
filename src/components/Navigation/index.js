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
        <nav class="navbar navbar-inverse">
          <div class="container-fluid">
            <div class="navbar-header">
              <a class="navbar-brand" href="#"><span>
                <img src={logo} height="30px" width="50px" alt="Loading Failed" /></span>Snakers</a>
            </div>
            <ul class="nav navbar-nav">
              <li class="active"><a href="#">Home</a></li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
              <li><Link to='/register'><span class="glyphicon glyphicon-user"></span> Sign Up</Link></li>
              <li><Link to='/login'><span class="glyphicon glyphicon-log-in"></span> Login</Link></li>
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
