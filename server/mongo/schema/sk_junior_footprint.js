var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var juniorFootprintSchema = new Schema({
    _player: {
        type: Schema.Types.ObjectId,
        ref: 'Player'
    },
    _room: {
        type: Schema.Types.ObjectId,
        ref: 'Room'
    },
    updateTime: {
        type: Date,
        default: Date.now
    },
    footprint: [{
        move_type: String,
        event: String,
        round: Number,
        position: {
            type: Number,
            required: true
        }
    }]
});

var JuniorFootprint = mongoose.model('JuniorFootprint', juniorFootprintSchema)

module.exports = JuniorFootprint;