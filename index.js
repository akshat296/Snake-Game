const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const socketIo = require('socket.io');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackConfig = require('./webpack.config.js');


const app = express();
const server = http.createServer(app);
const io = socketIo(server);
const chatio = io.of('/chat');
const gameio = io.of('/game');

app.use(express.static(__dirname + '/public'));
app.use(webpackDevMiddleware(webpack(webpackConfig)));
app.use(bodyParser.urlencoded({ extended: false }));

var port = 3037;
var numUsers = 0;
    var msgData = [];
    
    app.get('/getChatInfo', function (req, res) {
    
        res.send(chatio.adapter.rooms);
    });
    chatio.on('connection', (socket) => {
        var addedUser = false;
        console.log("New User : ", socket.id);
        socket.on('message', (text) => {
            let currentMsgData = {
                text: text,
                from: socket.username + ': ',
                color: socket.color,
               
            };
            msgData = msgData.concat(currentMsgData);
            socket.broadcast.emit('message', currentMsgData)
        });
        socket.on('add user', function (username,text) {
            if (addedUser) { return; }
            var randomColor = "#000000".replace(/0/g, function () { return (~~(Math.random() * 11)).toString(16); });
            socket.username = username;
            ++numUsers;
            socket.color = randomColor;
            addedUser = true;
            
            let currentMsgData = {
                text: text,
                from: socket.username + ': ',
                color: socket.color
            };
            msgData.unshift(currentMsgData);
            socket.emit('user joined', {
                username: socket.username,
                numUsers: numUsers,
                color: socket.color,
                msgData:msgData
            });
        });
        socket.on('disconnect', function () {
            if (addedUser) {
                --numUsers;
            }
            socket.broadcast.emit('user left', {
                username: socket.username,
                numUsers: numUsers,
            })
        });
    });

var games = [];   
var numPlayers = 0;
    
gameio.on('connection', socket => {
    var presentUser = false;

    socket.on('add user', function (username) {
        if (presentUser) { return; }
        presentUser = true;
        let gameDefault =   {px: 10, py: 10, gs: 20, tc: 20, xv: 0, yv: 0, trail: [], tail: 5, ax: 15, ay: 15, name: username}
        games.push(gameDefault);


        console.log('games from server ==>',games);
        
        socket.emit('user joined', {
            games
        });
        // new canvas has to be made now
    });
    socket.on('current game', function (currentGame) {
        //object coming from client
        games = games.map((game,index)=>{
            if(game.name === currentGame.name){
                return currentGame;
            }
            return game;
        });
        console.log('currentGame==>',currentGame);
        
        socket.broadcast.emit('progress game',games);
        
});
});
console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
server.listen(port);