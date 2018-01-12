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
        //2
    }),
    socket.on('game',name =>{
        console.log('2',name);
        
        socket.broadcast.emit('game', {
            name
        })
        
        //2
    }),
    socket.on('sync',sync =>{
        socket.broadcast.emit('sync', {
            sync
        })
        //2
    }),
  
    socket.on('player',(object) =>{
        //socket.join(name);
         console.log("server player 2 object",object);
         //console.log("server player 2 py",object.py);
         //console.log("server player 2 gs",object.gs);
         //console.log("server player 2 tc",object.tc);
         //console.log("server player 2 xv",object.xv);
         //console.log("server player 2 yv",object.yv);
        // console.log("server player 2 trail",object.trail);
         //console.log("server player 2 tail",object.tail);
         //console.log("server player 2 ax",object.ax);
         //console.log("server player 2 ay",object.ay);
         //console.log("server player 2 name",object.name);
         socket.broadcast.emit('player', object)
        //2
    })

});
server.listen(3008);