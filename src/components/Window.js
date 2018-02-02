import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import io from 'socket.io-client';
import Game from './Game'
import Chat from './Chat'

class Window extends Component {

    
    render() {
        return (<div>
            <center>
                <Game />
            </center>
            <div style={{position:'fixed',top:'0px',right:'0px',marginRight:'0 px',marginTop:'0px'}}>
                <Chat />
            </div>
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
