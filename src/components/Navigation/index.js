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

        <ul className='center-text'>
        <div className="pull-left logo"><img src={logo} height="30px" width="50px" alt="Loading Failed"/>Snakers</div>
          <li><Link to="/">Home</Link></li>
          <li><Link to='/register'>Register</Link></li>
          <li><Link to='/login'>Login</Link></li>
        </ul>
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
