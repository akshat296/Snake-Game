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
            color: socket.color
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
        socket.emit('login', {
            numUsers: numUsers
        });
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
            color: socket.color
        })
    });
});

gameio.on('connection', socket => {
    socket.on('game', name => {
        socket.broadcast.emit('game', {
            name
        })
    }),
        socket.on('player', (object) => {
            socket.broadcast.emit('player', object)
        })
});
console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
server.listen(port);