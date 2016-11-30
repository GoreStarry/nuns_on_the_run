var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var playerSchema = new Schema({
    name: {
        type: String,
        trim: true
    },
    createTime: {
        type: Date,
        default: Date.now
    },
    updateTime: {
        type: Date,
        default: Date.now
    },
    mugshot: String,
    gameId: String,
    // gameStep: [{ }]
});

playerSchema.methods.findUserByName = function(name, cb) {
    return this.find({
        name: this.name
    }, cb);
}

playerSchema.methods.createUserByName = function(name, cb) {
    var user = new Player({
        name: name
    });

    user
        .save()
        .then((doc) => {
            console.log(doc);
            return doc;
        })
        .catch((err) => {
            console.log(err);
            return err;
        })
}

var Player = mongoose.model('Player', playerSchema)

module.exports = Player;