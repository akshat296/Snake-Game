import React, { Component } from 'react';
import './Main.css';

import { connect } from 'react-redux';
import Navigation from '../Navigation';
import { bindActionCreators } from 'redux';
import Window from './Window';
import Sidebar from '../Sidebar';

class Main extends Component {
  

  render() {
    return (
        <div className = "App">
        <hr />
        <div className = "row">
        <Navigation />
          <div className = "col-lg-3" id = "parent">
         <Sidebar /> 
        </div>
        <div className="col-lg-9">
        <Window />
        </div>
      </div>
      </div>
    );
  }
}
function mapStateToProps(state, ownProps) {
    return {
    };
  }
  function mapDispatchToProps(dispatch) {
    return bindActionCreators({
     
    }, dispatch);
  
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(Main);
  