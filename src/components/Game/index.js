import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import io from 'socket.io-client';
import Player from './Player'

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            games: []
        };
        this.games=<div></div>
        this.handleGame = this.handleGame.bind(this)
    }

    componentDidMount() {
        this.socket = io('/game')
       
        this.socket.on('game', game => {
            this.setState({
                games: [game, ...this.state.games]
            })
        })
        
    }
    handleGame(event) {
        const name = event.target.value;
        if (event.keyCode === 13 && name) {
            const game = {
                name
            }
            this.setState({ games: [game, ...this.state.games] });
            this.socket.emit('game', name)//1
            event.target.value = '';
        }
    }
    
    render() {
        const games = this.state.games.map((game,index) => {
            return (<div key={index}>
                        <br/>
                        <Player name={game.name}/>
                        <br/>
                        <b>{game.name}</b>
                        </div>)
                        });

        return (<div>
            <center>
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

export default connect(mapStateToProps, mapDispatchToProps)(Game);