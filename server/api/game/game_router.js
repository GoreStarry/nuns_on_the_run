var express = require('express');
var router = express.Router();

var Room = require('../../mongo/schema/sk_room');
var Player = require('../../mongo/schema/sk_player');
var JuniorFootprint = require('../../mongo/schema/sk_junior_footprint');
var MasterFootprint = require('../../mongo/schema/sk_master_footprint');

router.post('/player_login', function(req, res) {
    var player_name = req.body.name;
    Player
        .findOne({
            name: player_name
        })
        .exec()
        .then((doc) => {
            console.log('doc:', doc);
            if (doc) {
                return doc._id;
            } else {
                res
                    .status(404)
                    .send('err')
            }
        })
        .then((player_id) => {
            //prevent null id
            player_id && Room.findOneAndUpdate({}, {
                $addToSet: {
                    playerList: player_id
                }
            }, {
                sort: {
                    createAt: -1
                }
            }).then((data) => {
                res.send({
                    player_id: player_id,
                    room: data
                })
            })
        })
        .catch((err) => {
            console.log(err);
        })
})

router.post('/get_own_Jfootprint', function(req, res) {
    var player_id = req.body.player_id;
    var room_id = req.body.room_id;
    JuniorFootprint
        .findOne({
            _player: player_id,
            _room: room_id
        })
        .exec()
        .then((doc) => {
            console.log(doc);
            res.send(doc);
        })
        .catch((err) => {
            res.send(err)
        })
})

router.post('/get_own_Mfootprint', function(req, res) {
    var player_id = req.body.player_id;
    var room_id = req.body.room_id;
    MasterFootprint
        .findOne({
            _player: player_id,
            _room: room_id
        })
        .exec()
        .then((doc) => {
            console.log(doc);
            res.send(doc);
        })
        .catch((err) => {
            res.send(err)
        })
})

router.post('/push_next_Jstep', function(req, res) {
    var player_id = req.body.player_id;
    var room_id = req.body.room_id;
    var round = req.body.round;

    var move_type = req.body.move_type;
    var event = req.body.event;
    var position = req.body.position;

    JuniorFootprint
        .findOne({
            _player: player_id,
            _room: room_id,
            'footprint.round': round
        })
        .then((res_data) => {
            if (res_data) { //update
                JuniorFootprint.findOneAndUpdate({
                    _player: player_id,
                    _room: room_id,
                    'footprint.round': round
                }, {
                    $set: {
                        'footprint.$': {
                            move_type: move_type,
                            event: event,
                            round: round,
                            position: position
                        }
                    }
                }, {
                    new: true
                }).then((data) => {
                    res.send(data);
                })
            } else { //push
                JuniorFootprint.findOneAndUpdate({
                    _player: player_id,
                    _room: room_id
                }, {
                    $push: {
                        footprint: {
                            move_type: move_type,
                            event: event,
                            round: round,
                            position: position
                        }
                    }
                }, {
                    new: true
                }).then((data) => {
                    res.send(data);
                })
            }
        })
        .catch((err) => {
            console.log(err);
        })

})

router.post('/push_next_Mstep', function(req, res) {
    var player_id = req.body.player_id;
    var room_id = req.body.room_id;
    var round = req.body.round;
    var road = req.body.road;

    var move_type = req.body.move_type;
    var event = req.body.event;
    var position = req.body.position;

    MasterFootprint
        .findOne({
            _player: player_id,
            _room: room_id,
            'footprint.round': round
        })
        .then((res_data) => {
            if (res_data !== null) { //update
                MasterFootprint.findOneAndUpdate({
                    _player: player_id,
                    _room: room_id,
                    'footprint.round': round
                }, {
                    $set: {
                        'footprint.$': {
                            move_type: move_type,
                            event: event,
                            round: round,
                            road: road,
                            position: position
                        }
                    }
                }, {
                    new: true
                }).then((data) => {
                    MasterFootprint
                        .find({
                            _room: room_id,
                            'footprint.round': round
                        })
                        .then((res_array) => {
                            console.log(res_array);
                            var round_done = false;
                            if (res_array.length == 2) { //master done
                                round_done = true;
                            }
                            console.log(data);
                            res.send({
                                round_done: round_done,
                                footprint: data
                            });
                        })
                })
            } else { //push
                MasterFootprint.findOneAndUpdate({
                    _player: player_id,
                    _room: room_id
                }, {
                    $push: {
                        footprint: {
                            move_type: move_type,
                            event: event,
                            round: round,
                            road: road,
                            position: position
                        }
                    }
                }, {
                    new: true
                }).then((data) => {
                    MasterFootprint
                        .find({
                            _room: room_id,
                            'footprint.round': round
                        })
                        .then((res_array) => {
                            var round_done = false;
                            if (res_array.length == 2) { //master done
                                round_done = true;
                            }
                            console.log(data);
                            res.send({
                                round_done: round_done,
                                footprint: data
                            });
                        })
                })
            }
        })
        .catch((err) => {
            console.log(err);
        })

})

router.post('/edit_previous_step', function(req, res) {
    var player_id = req.body.player_id;
    var room_id = req.body.room_id;
    var round = req.body.round;

    var walk_type = req.body.walk_type;
    var event = req.body.event;
    var position = req.body.position;

    JuniorFootprint.findOneAndUpdate({
        _player: player_id,
        _room: room_id,
        'footprint.round': round
    }, {
        $set: {
            'footprint.$': {
                walk_type: walk_type,
                event: event,
                round: round,
                position: position
            }
        }
    })

})

module.exports = router;