var Room = require('../../../mongo/schema/sk_room');

var stage_socket = function(socket, io) {

    console.log('stage socket is on!');

    socket.on('invite_player', function(masters) {
        io
            .of('/player')
            .emit('enter_church', masters)
    })

}

module.exports = stage_socket;