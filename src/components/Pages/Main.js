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
    };
    this.toggleMenu=this.toggleMenu.bind(this);
  }
  toggleMenu(){
    
   if(  document.getElementById("side-menu").style.width>3){
    document.getElementById("side-menu").style.width="0px";
    document.getElementById("main").style.marginLeft="0px";
   }
else{
  document.getElementById("side-menu").style.transition="0.5s";
  document.getElementById("main").style.marginLeft="250px";
}
 document.getElementById("side-menu").style.marginLeft="250px";
  }
  render() {
    return (
      <div className="parent">
        <Navigation id="side-menu" toggleMenu={this.toggleMenu}/>
        <div className="main" id="main">
          <div className="col-1">
            <Sidebar />
          </div>
          <div className="col-2">
            <Game />
          </div>
          <div className="col-3">
            <Chat />
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

export default connect(mapStateToProps, mapDispatchToProps)(Main);
