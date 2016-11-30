var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var roomSchema = new Schema({
    roomName: {
        type: String,
        trim: true,
        required: true
    },
    ready: {
        type: Boolean,
        default: false
    },
    playerList: [{
        type: Schema.Types.ObjectId,
        ref: 'Player'
    }],
    onlineList: [{
        type: Schema.Types.ObjectId,
        ref: 'Player'
    }],
    masterList: [{
        type: Schema.Types.ObjectId,
        ref: 'Player'
    }],
    round: {
        type: Number,
        default: 1
    },
    whoseTurn: {
        type: String,
        default: 'Junior'
    },
    createAt: {
        type: Date,
        default: Date.now
    },
    close: {
        type: Boolean,
        default: false
    }
});

var Room = mongoose.model('Room', roomSchema)

module.exports = Room;