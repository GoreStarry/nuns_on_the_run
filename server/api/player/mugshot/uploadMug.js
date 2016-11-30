var fs = require("fs");
var Player = require('../../../mongo/schema/sk_player');

var uploadMugshot = function(req, res) {
    var player_name = req.body.name;
    var data_url = req.body.data_url;
    var base64Data = data_url.replace(/^data:image\/\w+;base64,/, "");
    var dataBuffer = new Buffer(base64Data, 'base64');
    var static_url = './static/upload/mugshot/';
    fs.writeFile(`${static_url}${player_name}.jpg`, dataBuffer, function(err) {
        if (err) {
            res.send(err);
        } else {
            Player.findOneAndUpdate({
                name: player_name
            }, {
                mugshot: `${static_url}${player_name}.jpg`
            }, () => {
                res.send('SUCCESS!');
            })
        }
    })
}

module.exports = uploadMugshot;