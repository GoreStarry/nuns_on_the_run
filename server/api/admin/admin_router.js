var express = require('express');
var router = express.Router();

var _shuffle = require('lodash/shuffle');
var _random = require('lodash/random');

var io = require('../../socket/index_socket').io;

var Room = require('../../mongo/schema/sk_room');
var Junior = require('../../mongo/schema/sk_junior_footprint');
var Master = require('../../mongo/schema/sk_master_footprint');

var initial_room_data = require('../../../church_map/initial_room.js');

router.get('/get_room_list', function(req, res) {
    Room
        .find({
            close: false
        })
        .sort('-createAt')
        .exec((err, rooms) => {
            console.log(rooms);
            res.send(rooms);
        })
})

router.post('/create_room', function(req, res) {
    console.log('Create Room!!');
    var name = req.body.name;
    var room = new Room({
        roomName: name
    })
    room
        .save()
        .then((doc) => {
            res.send(`Room: ${name}, Create Success!!`);
        })
        .catch(() => {
            res.send('error');
        })
})

router.post('/room_data', function(req, res) {
    var room_id = req.body.room_id;
    Room
        .findById(room_id)
        .populate('playerList')
        .then((room) => {
            Master
                .find({
                    _room: room_id
                })
                .then((m_footprints) => {
                    res.send({
                        room_data: room,
                        master_footprints: m_footprints
                    });
                })
        })
        .catch((err) => {
            res
                .status(404)
                .send(err);
        })
})

router.post('/room_data_basic', function(req, res) {
    Room
        .findById(req.body.room_id)
        .then((room) => {
            res.send(room);
        })
        .catch((err) => {
            res
                .status(404)
                .send(err);
        })
})

router.post('/game_over', function(req, res) {
    var room_id = req.body.room_id;
    Room.findOneAndUpdate({
        _id: room_id
    }, {
        close: true
    }).then((data) => {
        res.send(data);
    }).catch((err) => {
        res
            .status(404)
            .send(err);
    })
})

router.post('/replay_data', function(req, res) {
    var room_id = req.body.room_id;
    Junior
        .find({
            _room: room_id
        })
        .populate('_player')
        .then((juniors) => {
            Master
                .find({
                    _room: room_id
                })
                .populate('_player')
                .then((masters) => {
                    res.send({
                        masters_footprint: masters,
                        juniors_footprint: juniors
                    })
                })
                .catch((err) => {
                    console.log(err);
                    res.send(err)
                })
        })
        .catch((err) => {
            console.log(err);
            res.send(err);
        })
})

router.post('/game_ready', function(req, res) {
    var room_id = req.body.room_id,
        masters = req.body.masters;

    masters.length == 2 ?
        Room.findOneAndUpdate({
            _id: room_id
        }, {
            masterList: masters,
            ready: true
        }).then((data) => {

            createMastersFootPrint(masters, room_id);

            // remove masters from player list to get junior list;
            var juniors = data
                .playerList
                .filter(function(player) {
                    return masters.indexOf(player.toString()) == -1;
                });
            createJuniorsFootPrint(juniors, room_id)

            res.send(data);
        }).catch((err) => {
            res.send(err)
        }) :
        res
        .status(404)
        .send('master err');
})

function createMastersFootPrint(masters, room_id) {

    masters.forEach((master, index) => {

        var master = new Master({
            _player: master,
            _room: room_id,
            footprint: [{
                road: 'test',
                round: 0,
                position: 26
            }]
        })

        master
            .save()
            .then((master_footprint) => {
                console.log(master_footprint);
            })
            .catch((err) => {
                console.log(err);
            })
    })
}

function createJuniorsFootPrint(juniors, room_id) {
    _shuffle(juniors);
    juniors.forEach((junior, index) => {
        index++;
        var init_position = index / 6 <= 1 ?
            index :
            _random(1, 6)
        var junior = new Junior({
            _player: junior,
            _room: room_id,
            footprint: [{
                round: 0,
                event: 'test event',
                position: init_position
            }]
        })

        junior.save();

    })
}

module.exports = router;