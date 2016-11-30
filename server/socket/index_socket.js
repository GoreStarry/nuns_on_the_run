var io = require('socket.io')();
var mongoose = require('mongoose');

var player_socket = require('./game/player/player_socket.js'),
    stage_socket = require('./game/stage/stage_socket.js');

mongoose.Promise = global.Promise;
mongoose.connect('localhost:27017/nuns_dev')

var stage_io = io.of('/stage'),
    player_io = io.of('/player');

io.on("connection", function(socket) {
    console.log('Socket is on!');
})

stage_io.on('connection', function(socket) {
    console.log('stage!!');
    stage_socket(socket, io)
})

player_io.on('connection', function(socket) {
    player_socket(socket, io)
})

module.exports = {
    io: io,
    listen: function(server) {
        io.listen(server)
    }
};