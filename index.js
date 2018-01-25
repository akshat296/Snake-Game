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

app.use(express.static(__dirname +'/public'));
app.use(webpackDevMiddleware(webpack(webpackConfig)));
app.use(bodyParser.urlencoded({extended:false}));
io.on('connection', socket => {
    socket.on('message',body =>{
        socket.broadcast.emit('message', {
            body,
            from:'me'
        })
    }),
    socket.on('game',name =>{
        console.log('2',name);
        
        socket.broadcast.emit('game', {
            name
        })
    }),
    socket.on('sync',sync =>{
        socket.broadcast.emit('sync', {
            sync
        })
    }),
    socket.on('player',(object) =>{
        //socket.join(name);
         console.log("server player 2 object",object);
         socket.broadcast.emit('player', object)
    })
});
server.listen(3000);