import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import io from 'socket.io-client';
import Game from './Game'

class Window extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            games: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        //this.games = this.games.bind(this)
        this.games=<div></div>
        this.handleGame = this.handleGame.bind(this)
    }

    componentDidMount() {
        this.socket = io('/')
        this.socket.on('message', message => {
            console.log("adding state of message:  ",message);
            this.setState({
                messages: [message, ...this.state.messages]
            })
            console.log("state of messages:  ",this.state.messages)
        })
        this.socket.on('game', game => {
            console.log("adding state of game:  ",game)
            console.log('3');
            this.setState({
                games: [game, ...this.state.games]
            })
        })
        this.socket.on('sync', sync => {
            console.log("3 sync ",sync)
            this.setState({
                messages: sync
            })
        })
    }

    handleSubmit(event) {
        const body = event.target.value;
        if (event.keyCode === 13 && body) {
            const message = {
                body,
                from: 'Me: '
            }
            this.setState({ messages: [message, ...this.state.messages] });
            this.socket.emit('message', body)//1
            event.target.value = '';
        }
    }

    handleGame(event) {
        const name = event.target.value;
        if (event.keyCode === 13 && name) {
            const game = {
                name
            }
            console.log('1');
            this.setState({ games: [game, ...this.state.games] });
            this.socket.emit('game', name)//1
            event.target.value = '';
        }
    }

    syncGame(event) {
            const syncMsg = this.state.messages;
            const syncGame = this.state.games;
            this.socket.emit('sync', syncMsg )//1
        }
    
    render() {
        console.log("in render message",this.state)
        const messages = this.state.messages.map((message, index) => {
            return <div><li key={index}><b>{message.from}</b>{message.body}</li><br/></div>;
        })
        const games = this.state.games.map((game,index) => {
            return <div key={index}><br/><Game name={game.name}/><br/><b>{game.name}</b></div>})

        return (<div>
            <center>
                {/* <button onClick={this.syncGame} >sync</button> */}
                <input type="text" placeholder="Enter a value..." onKeyUp={this.handleSubmit} />
                {messages}
                <input type="text" placeholder="Enter a name..." onKeyUp={this.handleGame} />
                {games}
            </center>
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
