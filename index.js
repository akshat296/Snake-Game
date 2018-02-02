const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const socketIo =require('socket.io');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackConfig = require('./webpack.config.js');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);
const chatio = io.of('/chat');
const gameio = io.of('/game');

app.use(express.static(__dirname +'/public'));
app.use(webpackDevMiddleware(webpack(webpackConfig)));
app.use(bodyParser.urlencoded({extended:false}));

var numUsers = 0;
chatio.on('connection' , socket => {
    var addedUser = false;

    console.log("New User : ",socket.id);
    socket.on('message',body =>{
        socket.broadcast.emit('message', {
            body,
            from:socket.username
        })
    })
    socket.on('add user', function (username){
        if(addedUser) return;
        
        socket.username = username;
        ++numUsers;
        socket.emit('login',{
            numUsers: numUsers
        });
        socket.broadcast.emit('user joined', {
            username: socket.username,
            numUsers: numUsers
        });
    });
    socket.on('disconnect', function(){
        if(addedUser){
            --numUsers;
        }
        socket.broadcast.emit('user left', {
            username: socket.username,
            numUsers: numUsers
        })
    });
});

gameio.on('connection', socket => {
    socket.on('game',name =>{
        socket.broadcast.emit('game', {
            name
        })
    }),
    socket.on('player',(object) =>{
         socket.broadcast.emit('player', object)
    })
});
server.listen(3002);