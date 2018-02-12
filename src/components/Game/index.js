import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import io from 'socket.io-client';
import Player from './Player';
import './Game.css'
import DummyPlayer from './DummyPlayer';
import _ from 'lodash'

class Game extends Component {
    constructor(props) {
        super(props);
        if(props.username){
        this.state = {
            games: [
                {px: 10, py: 10, gs: 20, tc: 20, xv: 0, yv: 0, trail: [], tail: 5, ax: 15, ay: 15, name: props.username }
            ],
            numUsers:1,
            flag:0
        };}
        this.games = <div></div>
        this.handleGame = this.handleGame.bind(this)
    }

    componentDidMount() {
        this.socket.on('progress game', games => {
            if(this.state.flag === 0){
                //console.log('progress games in client==>',games);
                
            this.setState({
                games:games
            });

            this.setState({flag:2});
        }
            else if(this.state.flag === 2){
                this.setState({flag:1});
            }
            else{
                this.setState({flag:0});
            }
            //array of objects comming from server
        });
        

    }
    componentWillMount() {
        this.socket = io('/game');
        if(this.props.username){
           
            this.socket.emit('add user', this.props.username);
            
        }
        this.socket.on('user joined', games => {
           // console.log('games in client==>',games);
            //let allGames = games.push(this.state.games[0]);
            //console.log("allGamesclient",allGames)
            this.setState({
                games:games,flag:1
            });
            //array of objects coming from server
        });
        
    }
    
    handleGame(event) {

        }
    

    render() 
        {
        let games = this.state.games.filter( game => {
            if(game.name === this.props.username){
                return false;
            }
            return true;
            }).map(( game ,index) =>  <div key={index}>
        <b>{game.name}</b><br />
            <DummyPlayer {...game}/>
            <br />
        </div> 
         );
         let player = this.state.games.filter (game => {
                if(game.name===this.props.username)
                {
                    return true;
                }
                return false;

         });
         
         player=
            (<div>
            <b>You : {player[0].name}</b>
            <br />
                <Player {...player[0]}/>
                <br />
        </div>);
         
        // console.log('player after map==>',player);
         
        return (<div className="center">
            <h2>Gamer</h2>
            <br />
            <div className="size"></div>
            
            {games}
            {player}
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
