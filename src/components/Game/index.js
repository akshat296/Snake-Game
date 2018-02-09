import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import io from 'socket.io-client';
import Player from './Player';
import './Game.css'

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            games: [
                {px: 10, py: 10, gs: 20, tc: 20, xv: 0, yv: 0, trail: [], tail: 5, ax: 15, ay: 15, name: this.props.username}
            ],
            numUsers:1
        };
        this.games = <div></div>
        this.handleGame = this.handleGame.bind(this)
    }

    componentDidMount() {
        this.socket.on('progress game', games => {
            this.setState({
                games:games
            });
            //array of objects comming from server
        });
        

    }
    componentWillMount() {
        this.socket = io('/game');
        this.socket.on('user joined', games => {
            console.log('games in client==>',games);
            
            this.setState({
                games:games.games
            });
            //array of objects coming from server
        });
        if(this.props.username){
            this.socket.emit('add user', this.props.username);
            
        }
    }
    
    handleGame(event) {

        }
    

    render() 
    {
        console.log('test game state==>',this.state.games);
        
        const games = this.state.games.map((game, index) => {
            return (
            <div key={index}>
                <Player {...game}/>
                <br />
                <b>{game.name}</b>
                <br />
            </div>);
        });

        return (<div className="center">
            <h2>Gamer</h2>
            <br />
            <div className="size"></div>
            {games}

        </div>);
    }
}

function mapStateToProps(state, ownProps) {

    return {

    };}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);
