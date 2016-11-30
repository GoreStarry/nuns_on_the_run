var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var masterFootprintSchema = new Schema({
    _player: {
        type: Schema.Types.ObjectId,
        ref: 'Player'
    },
    _room: {
        type: Schema.Types.ObjectId,
        ref: 'Room'
    },
    footprint: [{
        round: Number,
        road: String,
        move_type: String,
        orbit: Array,
        event: String,
        position: Number
    }]
});

var MasterFootprint = mongoose.model('MasterFootprint', masterFootprintSchema)

module.exports = MasterFootprint;