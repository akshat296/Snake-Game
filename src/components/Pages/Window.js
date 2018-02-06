import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Game from '../Game'
import Chat from '../Chat'
import './Window.css';
class Window extends Component {

    
    render() {
        return (<div className="test">
         <Chat />
                <Game />
            
               
           
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

export default connect(mapStateToProps, mapDispatchToProps)(Window);
