const socketIO = require('socket.io');
const sharedsession = require("express-socket.io-session");
var users = require('./users');

var socket = (server,session) => {
    io = socketIO(server);
    io.use(sharedsession(session));
    
    io.on('connection', (socket) => {
        var param = {
            'socketId':socket.id
        };
        if(typeof(socket.handshake.session.user) != 'undefined'){
            users.updateUser(socket.handshake.session.user.sessionId,param);
        }
        user = users.getUsers();
        val = JSON.stringify(user);
        io.emit('user',val);

        io.on('msg',(msg) => {
            console.log(msg);
        })

    });
}

module.exports = socket;