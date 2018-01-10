import React, { Component } from 'react';
import './App.css';
import { 
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Register from './components/Register';
import SignIn from './components/SignIn';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import io from 'socket.io-client';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages:[]
    };
    this.handleSubmit = this.handleSubmit.bind(this);
   
  }
 
  componentDidMount(){
    this.socket = io('/')
    this.socket.on('message',message=>{
      this.setState({
        messages:[message,...this.state.messages]
      })
    })
  }
handleSubmit(event){
  const body= event.target.value;
  if(event.keyCode === 13 && body)
  {
    const message = {
      body,
      from:'Me: '
    }
    this.setState({messages: [message,...this.state.messages]});
    this.socket.emit('message',body)
    event.target.value = '';
  }
}
  render() {
    
    const messages = this.state.messages.map((message,index) => {
      return <li key={index}><b>{message.from}</b>{message.body}</li>})
    // return (
    //  <Router>
    //    <div>
    //      <Route exact path = "/" component = {SignIn} />
    //      <Route path = "/register" component = {Register} />
    //      <Route path = "/signin" component = {SignIn} />
    //    </div>
    //  </Router>
    // );
    return (<div>
      test
      <input type="text" placeholder="Enter a value..." onKeyUp={this.handleSubmit}/>
      {messages}
    </div>);
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
