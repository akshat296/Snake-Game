import React, { Component } from 'react';
import './Main.css';

import { connect } from 'react-redux';
import Navigation from '../Navigation';
import { bindActionCreators } from 'redux';
import Sidebar from '../Sidebar';
import Game from '../Game'
import Chat from '../Chat'

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sidebar: true
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }
  toggleMenu() {

    if (this.state.sidebar === true) {
      document.getElementById("col-1").style.animationName = "sidebar";
      document.getElementById("col-1").style.animationDuration = "0.5s";
      document.getElementById("col-1").style.animationIterationCount = 1;
      document.getElementById("col-1").style.animationTimingFunction = "linear";
      document.getElementById("col-2").style.animationName = "main-content";
      document.getElementById("col-2").style.animationDuration = "0.5s";
      document.getElementById("col-2").style.animationIterationCount = 1;
      document.getElementById("col-2").style.animationTimingFunction = "linear";
      setTimeout(() => {
        document.getElementById("col-1").style.display = "none";
        document.getElementById("main").style.gridTemplateColumns = "2fr 2fr";
        this.setState({ sidebar: false });
      }, 500);
    }
    else {
      document.getElementById("col-1").style.display = "block";
      document.getElementById("main").style.gridTemplateColumns = "1fr 2fr 2fr";
      document.getElementById("col-1").style.animationName = "sidebar-entry";
      document.getElementById("col-1").style.animationDuration = "0.5s";
      document.getElementById("col-1").style.animationIterationCount = 1;
      document.getElementById("col-1").style.animationTimingFunction = "linear";
      document.getElementById("col-2").style.animationName = "main-content-entry";
      document.getElementById("col-2").style.animationDuration = "0.5s";
      document.getElementById("col-2").style.animationIterationCount = 1;
      document.getElementById("col-2").style.animationTimingFunction = "linear";
      
      setTimeout(() => {
        this.setState({ sidebar: true });
      }, 500);

    }
  }
  render() {
    return (
      <div className="parent">
        <Navigation id="side-menu" toggleMenu={this.toggleMenu} />
        <div className="main" id="main">
          <div className="col-1" id="col-1">
            <Sidebar />
          </div>
          <div className="col-2" id="col-2">
            <Game username = {this.props.username} type = {this.props.type}/>
          </div>
          <div className="col-3 pull-right">
            <Chat username = {this.props.username} type = {this.props.type}/>
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state, ownProps) {
  
if(JSON.stringify(state.login) !== '{}'){
  return {
    username:state.login.login[0].name,
    type:state.login.type
  };}
  return {

  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({

  }, dispatch);

}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
