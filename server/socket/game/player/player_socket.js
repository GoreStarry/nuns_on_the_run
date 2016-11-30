var Room = require('../../../mongo/schema/sk_room');
var JuniorFootprint = require('../../../mongo/schema/sk_junior_footprint.js');

var player_socket = function(socket, io) {

    console.log('player socket is on!');

    socket.on("player_login", function(player_id) {
        console.log('rescive emit player_login');
        socket.user = player_id;
        Room.findOneAndUpdate({
            ready: false
        }, {
            $addToSet: {
                onlineList: player_id
            }
        }, {
            sort: {
                createAt: -1
            }
        }).then(() => {
            console.log(`${socket.user} add onlinelist done`);
            io
                .of('/stage')
                .emit("someone_login", player_id)
        })
    })

    socket.on("footprint_update", function(query) {
        console.log('rescive emit footprint_update');
        var room_id = query.room_id,
            player_id = query.player_id,
            round = query.round,
            junior_num = query.junior_num;
        JuniorFootprint
            .find({
                _room: room_id,
                'footprint.round': round
            })
            .then((doc) => {

                //every junior ready for this turn
                if (doc.length == junior_num) {
                    Room
                        .findByIdAndUpdate(room_id, {
                            whoseTurn: 'Master'
                        })
                        .then((doc) => {
                            socket
                                .broadcast
                                .emit("junior_ready")
                        })
                        .catch((err) => {
                            console.log(err);
                        })

                } else {
                    io
                        .of('/stage')
                        .emit("someone_ready", player_id)
                }
            })
            .catch((err) => {
                console.log(err);
            })
    })

    socket.on("next_round_ready", function(data) {
        console.log('next_round_ready');

        Room
            .findById(data.room_id)
            .then((res_data) => {
                var now_round = data.round;
                if (res_data.round == data.round) {
                    Room
                        .findByIdAndUpdate(data.room_id, {
                            round: now_round + 1,
                            whoseTurn: 'Junior'
                        })
                        .then((res) => {
                            socket
                                .broadcast
                                .emit("go_next_round", now_round + 1);
                            io
                                .of('/stage')
                                .emit("go_next_round", now_round + 1);
                        })
                        .catch((err) => {
                            console.log(err);
                        })
                }
            })

    })

    socket.on("disconnect", function() {

        console.log(`${socket.user} is disconnect`);

        Room.findOneAndUpdate({
            ready: false
        }, {
            $pull: {
                onlineList: socket.user
            }
        }, {
            sort: {
                createAt: -1
            }
        }).then(() => {
            console.log(`${socket.user} remove from onlinelist done`);
            io
                .of('/stage')
                .emit("someone_disconnect", socket.user)
        })
    })
}

module.exports = player_socket;