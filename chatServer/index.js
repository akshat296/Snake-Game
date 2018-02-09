 module.exports = chatServer = () => {
    var numUsers = 0;
    var msgData = [];
    
    this.app.get('/getChatInfo', function (req, res) {
    
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
    }
    